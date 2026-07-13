import { createServer } from "node:http";
import { execFile, spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { access as fsAccess, chmod, cp, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const portfolioRoot = path.resolve(process.env.OMB_PORTFOLIO_WORKSPACE || root);
const compileRoot = path.resolve(process.env.OMB_CODE_WORKSPACE || path.join(path.dirname(root), "compile-code"));
const port = Number(process.env.PORT || 8080);
const host = process.env.HOST || "0.0.0.0";
const execFileAsync = promisify(execFile);
const packageJson = JSON.parse(await readFile(path.join(root, "package.json"), "utf8").catch(() => "{}"));

const types = {
  ".css": "text/css",
  ".csv": "text/csv",
  ".html": "text/html",
  ".ico": "image/x-icon",
  ".js": "application/javascript",
  ".json": "application/json",
  ".md": "text/markdown",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".txt": "text/plain",
  ".webp": "image/webp",
  ".xml": "application/xml",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".zip": "application/zip"
};

const draftPath = path.join(root, "projects.local.json");
const catalogPath = path.join(root, "projects.json");
const publishAuthCachePath = path.join(root, ".omb-publish-session.json");
const publishPaths = [
  "projects.json",
  "docs",
  "assets",
  "index.html",
  "styles.css",
  "script.js",
  "electronics-search.js",
  "Backgrounds",
  ".nojekyll",
  "_headers",
  ".well-known",
  "robots.txt",
  "sitemap.xml",
  "CNAME"
];
const publishAuthCacheTtlMs = 24 * 60 * 60 * 1000;
const publishAuthExtendedTtlMs = 30 * 24 * 60 * 60 * 1000;
const publishAuthHistoryWindowMs = 7 * 24 * 60 * 60 * 1000;
const publishAuthExtendedThreshold = 3;
const defaultSiteRepository = process.env.OMB_BUILDER_REPOSITORY || "";
const blockedAppUpdateVersions = new Set(["0.2.16"]);
const publishAuthorizationHelp = [
  "Publishing was blocked before live website files were applied.",
  "Open Publishing target, enter the repository URL, then click Authenticate target.",
  "A GitHub/Git Credential Manager browser sign-in may open. Sign in with an account that has write access to the selected Pages repository.",
  "Authenticate target only verifies write access and remembers it for the matching repository and branch.",
  "Load from target only imports compatible website files from the authenticated repository into the local builder workspace.",
  "Until a compatible writable website repository is associated, the builder remains local-only."
].join(" ");
const gitCandidates = [
  process.env.GIT_EXE,
  "git",
  "C:\\Program Files\\Git\\cmd\\git.exe",
  "C:\\Program Files\\Git\\bin\\git.exe",
  "C:\\Program Files (x86)\\Git\\cmd\\git.exe",
  "C:\\Program Files (x86)\\Git\\bin\\git.exe",
  process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, "Programs", "Git", "cmd", "git.exe") : "",
  process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, "Programs", "Git", "bin", "git.exe") : ""
].filter(Boolean);

const compileLanguageProfiles = {
  c: {
    defaultFile: "main.c",
    extensions: [".c", ".h"],
    label: "C",
    primaryTools: ["gcc"],
    winget: ["BrechtSanders.WinLibs.POSIX.UCRT"]
  },
  cpp: {
    defaultFile: "main.cpp",
    extensions: [".cpp", ".cc", ".cxx", ".hpp", ".h"],
    label: "C++",
    primaryTools: ["g++"],
    winget: ["BrechtSanders.WinLibs.POSIX.UCRT"]
  },
  verilog: {
    defaultFile: "design.v",
    extensions: [".v"],
    label: "Verilog",
    primaryTools: ["iverilog", "vvp"],
    winget: ["Icarus.Verilog"]
  },
  systemverilog: {
    defaultFile: "design.sv",
    extensions: [".sv", ".svh"],
    label: "SystemVerilog",
    primaryTools: ["iverilog", "vvp"],
    winget: ["Icarus.Verilog"]
  },
  ltspice: {
    defaultFile: "simulation.cir",
    extensions: [".cir", ".net", ".sp", ".asc"],
    label: "LTspice",
    primaryTools: ["ltspice"],
    winget: []
  },
  java: {
    defaultFile: "Main.java",
    extensions: [".java"],
    label: "Java",
    primaryTools: ["javac", "java"],
    winget: ["EclipseAdoptium.Temurin.21.JDK"]
  },
  javascript: {
    defaultFile: "main.js",
    extensions: [".js", ".mjs", ".cjs"],
    label: "JavaScript",
    primaryTools: ["node"],
    winget: []
  },
  python: {
    defaultFile: "main.py",
    extensions: [".py"],
    label: "Python",
    primaryTools: ["python"],
    winget: []
  },
  html: {
    defaultFile: "index.html",
    extensions: [".html", ".htm"],
    label: "HTML",
    primaryTools: [],
    winget: []
  }
};

const compileToolCandidates = {
  gcc: [
    "gcc",
    process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, "Microsoft", "WinGet", "Packages", "BrechtSanders.WinLibs.POSIX.UCRT_Microsoft.Winget.Source_8wekyb3d8bbwe", "mingw64", "bin", "gcc.exe") : ""
  ],
  "g++": [
    "g++",
    "c++",
    process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, "Microsoft", "WinGet", "Packages", "BrechtSanders.WinLibs.POSIX.UCRT_Microsoft.Winget.Source_8wekyb3d8bbwe", "mingw64", "bin", "g++.exe") : ""
  ],
  clang: ["clang"],
  "clang++": ["clang++"],
  cl: ["cl"],
  javac: [
    "javac",
    "C:\\Program Files\\Eclipse Adoptium\\jdk-21.0.11.10-hotspot\\bin\\javac.exe"
  ],
  java: [
    "java",
    "C:\\Program Files\\Eclipse Adoptium\\jdk-21.0.11.10-hotspot\\bin\\java.exe"
  ],
  node: [
    /(?:^|[\\/])node(?:\.exe)?$/i.test(process.execPath || "") ? process.execPath : "",
    "node",
    "C:\\Program Files\\nodejs\\node.exe",
    process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, "Programs", "nodejs", "node.exe") : ""
  ],
  python: [process.env.PYTHON, "python", "py"],
  iverilog: ["iverilog", "C:\\iverilog\\bin\\iverilog.exe"],
  vvp: ["vvp", "C:\\iverilog\\bin\\vvp.exe"],
  ltspice: [
    process.env.LTSPICE_EXE,
    "C:\\Program Files\\ADI\\LTspice\\LTspice.exe",
    "C:\\Program Files\\LTC\\LTspiceXVII\\XVIIx64.exe",
    "C:\\Program Files\\Analog Devices\\LTspice\\LTspice.exe",
    process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, "Programs", "ADI", "LTspice", "LTspice.exe") : ""
  ]
};
const compileToolCache = new Map();
const compileToolVersionCache = new Map();

const portfolioAiInstructions = [
  "You are the AI assistant for the portfolio website described by the supplied portfolio context.",
  "Behave like a careful senior electrical and computer engineering mentor who can also navigate the saved portfolio.",
  "Answer the visitor's question first in a concise ChatGPT-like format, then add portfolio links or context only when they help.",
  "Use the supplied question intent to decide whether this is general conversation, general knowledge, general engineering, portfolio-specific, or a mixed portfolio-and-general question.",
  "For general_conversation intent, respond naturally and briefly. Use the recent conversation instead of a fixed template. If the visitor says hi, a good answer is a short greeting such as: Hi, what can I do for you?",
  "If the visitor asks 'what is my name?' or 'who am I?' and they have not identified themselves, do not pretend to know the visitor. Say you are an AI agent for this portfolio and identify the portfolio owner only if the supplied profile context includes a name.",
  "For general_knowledge intent, answer the question directly using broad general knowledge. Do not force portfolio context unless the visitor asks to connect the answer to the portfolio owner's work.",
  "For general_engineering intent, begin with the general electronics or engineering explanation. Do not lead with project context unless the visitor asks to connect it.",
  "For portfolio_and_general intent, explain the general concept first, then connect it to specific supplied portfolio evidence. Do not include portfolio evidence that is not relevant to the question.",
  "For portfolio_specific intent, answer from the portfolio context first, then explain related engineering concepts only when useful.",
  "Use recent conversation history for follow-up questions, pronouns, comparisons, and corrections.",
  "Use the supplied portfolio context as the trusted source for the portfolio owner's projects, links, files, resume, and contact information.",
  "Use sourceExcerpts when present as higher-detail evidence from uploaded text files, extracted resume text, same-site files, GitHub pages, or other safe public sources.",
  "Use knowledgeManifest to understand project files, image evidence, public profiles, resumes, and project areas. Treat filenames, captions, surrounding text, and descriptions as evidence.",
  "Do not claim to visually inspect an image unless actual image analysis is provided. If only image metadata is supplied, say what the caption/path/context suggests.",
  "For GitHub, LinkedIn, resume, or uploaded-file questions, cite what is present in the supplied context or fetched excerpts and then point to the link when useful. Access public pages and fetched excerpts when the website allows it.",
  "When a visitor asks for source code, use public GitHub source excerpts when provided. Show concise relevant snippets with file paths, and explain what the code is doing. Do not imply private repository access.",
  "If sourceExcerpts include lines labeled Source file, include at least one fenced code block with the file path immediately before it, unless the visitor explicitly asks for links only.",
  "Never invent, infer, or write hypothetical code for the portfolio owner's repositories. Every fenced code block about repository work must be copied from a fetched Source file excerpt. If no source file excerpt is available, say that the code was not available in the fetched public sources and give the repository link instead.",
  "For questions about public GitHub repositories, prefer fetched public GitHub source excerpts over portfolio summaries or project descriptions. You may fetch and display concise code from public GitHub URLs supplied in the portfolio context or safe source fetches, but never imply access to private repositories.",
  "You may answer related electronics, hardware, analog, mixed-signal, digital, embedded, FPGA, ASIC, PCB, and firmware questions even when the answer is broader than the saved portfolio.",
  "Do not invent portfolio projects, credentials, employers, files, or test results that are not in the context.",
  "If context is missing, say what is missing and answer generally only for the engineering concept.",
  "When useful, state assumptions, define terms, explain signal or data flow, identify tradeoffs, and name what evidence would prove the claim.",
  "Only mention or recommend portfolio links that are directly relevant to the visitor's current question or the active follow-up context. Do not append random links.",
  "Keep the answer recruiter-friendly, specific, and easy to skim. Use short paragraphs and bullets when helpful.",
  "Do not expose chain-of-thought. Give the polished answer only."
].join("\n");

function securityHeaders(extra = {}) {
  return {
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
    "Cross-Origin-Opener-Policy": "same-origin",
    ...extra
  };
}

function sendJson(response, status, data) {
  response.writeHead(status, {
    ...securityHeaders(),
    "Content-Type": "application/json",
    "Cache-Control": "no-store, no-cache, must-revalidate"
  });
  response.end(JSON.stringify(data, null, 2));
}

function clampText(value, maxLength = 12000) {
  return String(value || "").slice(0, maxLength);
}

function stripHtmlToText(value = "") {
  return String(value || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeCodeLanguage(value = "") {
  const clean = String(value || "").trim().toLowerCase().replace(/[_\s-]+/g, "");
  const aliases = {
    c: "c",
    cpp: "cpp",
    cplusplus: "cpp",
    "c++": "cpp",
    systemverilog: "systemverilog",
    sv: "systemverilog",
    verilog: "verilog",
    v: "verilog",
    ltspice: "ltspice",
    spice: "ltspice",
    cir: "ltspice",
    java: "java",
    javascript: "javascript",
    js: "javascript",
    node: "javascript",
    python: "python",
    py: "python",
    html: "html",
    htm: "html"
  };
  return aliases[clean] || (compileLanguageProfiles[clean] ? clean : "javascript");
}

function sourceLooksCpp(source = "") {
  const text = String(source || "");
  return /#include\s*<(?:iostream|string|vector|array|map|unordered_map|memory|algorithm|optional|variant)>/.test(text) ||
    /\b(std::|cout|cin|cerr|namespace|template\s*<|class\s+\w+|new\s+\w|delete\s+|constexpr|nullptr|using\s+namespace)\b/.test(text);
}

function sourceLooksC(source = "") {
  const text = String(source || "");
  return /#include\s*<(?:stdio|stdlib|string|stdint|stdbool|math)\.h>/.test(text) ||
    /\b(printf|scanf|malloc|calloc|realloc|free|struct\s+\w+|typedef\s+struct)\b/.test(text);
}

function languageFromFileName(fileName = "", code = "") {
  const ext = path.extname(String(fileName || "").toLowerCase());
  if (ext === ".h") {
    if (sourceLooksCpp(code)) return "cpp";
    if (sourceLooksC(code)) return "c";
    return "c";
  }
  return Object.entries(compileLanguageProfiles).find(([, profile]) => profile.extensions.includes(ext))?.[0] || "";
}

function detectCodeLanguageFromSource(code = "", fileName = "") {
  const byName = languageFromFileName(fileName, code);
  if (byName) return byName;
  const source = String(code || "");
  if (/<\/?[a-z][\s\S]*?>/i.test(source) || /<!doctype\s+html/i.test(source)) return "html";
  if (/\b(always_ff|always_comb|always_latch|logic|interface|covergroup|assert\s+property|typedef\s+enum|class\s+\w+)\b/.test(source)) return "systemverilog";
  if (/\b(module|endmodule|always|assign|reg|wire|initial|posedge|negedge)\b/.test(source)) return "verilog";
  if (/^\s*\.?(tran|ac|dc|op|model|subckt|ends|param)\b/im.test(source) || /\bV\w+\s+\w+\s+\w+\s+(?:DC|SIN|PULSE)?/i.test(source)) return "ltspice";
  if (/\b(def|elif|from\s+\w+\s+import|self|None|True|False)\b/.test(source)) return "python";
  if (/\b(public\s+class|static\s+void\s+main|System\.out)\b/.test(source)) return "java";
  if (sourceLooksCpp(source) || sourceLooksC(source) || /\b(#include|main\s*\(|puts\s*\(|fprintf|sizeof\s*\()\b/.test(source)) {
    return sourceLooksCpp(source) ? "cpp" : "c";
  }
  if (/\b(const|let|var|function|=>|console\.log|document\.|window\.)\b/.test(source)) return "javascript";
  return "javascript";
}

function safeCodeFileName(value = "", language = "javascript") {
  const profile = compileLanguageProfiles[normalizeCodeLanguage(language)] || compileLanguageProfiles.javascript;
  const fallback = profile.defaultFile;
  const parsed = path.parse(String(value || fallback));
  const safeName = safeSegment(parsed.name, path.parse(fallback).name);
  let ext = String(parsed.ext || path.extname(fallback)).toLowerCase();
  if (!profile.extensions.includes(ext)) ext = path.extname(fallback);
  return `${safeName}${ext}`;
}

function codePathSegments(value = "") {
  return String(value || "")
    .replace(/\\/g, "/")
    .split("/")
    .map((segment) => segment.trim())
    .filter((segment) => segment && segment !== "." && segment !== "..");
}

function safeCodeRelativePath(value = "", language = "javascript") {
  const profile = compileLanguageProfiles[normalizeCodeLanguage(language)] || compileLanguageProfiles.javascript;
  const fallback = profile.defaultFile;
  const segments = codePathSegments(value || fallback);
  const fileName = safeCodeFileName(segments.pop() || fallback, language);
  const folders = segments.map((segment) => safeSegment(segment, "folder")).filter(Boolean).slice(0, 12);
  return [...folders, fileName].join("/");
}

function safeCodeDirectoryPath(value = "") {
  return codePathSegments(value)
    .map((segment) => safeSegment(segment, "folder"))
    .filter(Boolean)
    .slice(0, 12)
    .join("/");
}

function indentBraceCode(code = "") {
  let depth = 0;
  return String(code || "")
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((rawLine) => {
      const line = rawLine.trim();
      if (!line) return "";
      if (/^[}\])]/.test(line)) depth = Math.max(0, depth - 1);
      const formatted = `${"  ".repeat(depth)}${line}`;
      const opens = (line.match(/[{\[(]/g) || []).length;
      const closes = (line.match(/[}\])]/g) || []).length;
      depth = Math.max(0, depth + opens - closes);
      return formatted;
    })
    .join("\n")
    .trimEnd();
}

function beautifyCode(code = "", language = "javascript") {
  const normalized = String(code || "").replace(/\r\n?/g, "\n").replace(/\t/g, "  ");
  const lang = normalizeCodeLanguage(language);
  if (["c", "cpp", "java", "javascript", "verilog", "systemverilog"].includes(lang)) {
    return indentBraceCode(normalized)
      .replace(/[ \t]+$/gm, "")
      .replace(/\n{4,}/g, "\n\n\n");
  }
  if (lang === "html") {
    return normalized
      .replace(/>\s+</g, ">\n<")
      .split("\n")
      .map((line) => line.trim())
      .join("\n")
      .trim();
  }
  return normalized
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trimEnd();
}

async function findExecutableUnder(folder, names = [], maxDepth = 5) {
  if (!folder || maxDepth < 0 || !(await pathExists(folder))) return "";
  let entries = [];
  try {
    entries = await readdir(folder, { withFileTypes: true });
  } catch {
    return "";
  }
  for (const entry of entries) {
    const fullPath = path.join(folder, entry.name);
    if (entry.isFile() && names.some((name) => entry.name.toLowerCase() === name.toLowerCase())) return fullPath;
  }
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const found = await findExecutableUnder(path.join(folder, entry.name), names, maxDepth - 1);
    if (found) return found;
  }
  return "";
}

async function findTool(toolName) {
  if (compileToolCache.has(toolName)) return compileToolCache.get(toolName);
  const candidates = (compileToolCandidates[toolName] || [toolName]).filter(Boolean);
  for (const candidate of candidates) {
    if (path.isAbsolute(candidate)) {
      if (await pathExists(candidate)) {
        compileToolCache.set(toolName, candidate);
        return candidate;
      }
      continue;
    }
    try {
      const command = process.platform === "win32" ? "where" : "command";
      const args = process.platform === "win32" ? [candidate] : ["-v", candidate];
      const result = await execFileAsync(command, args, { timeout: 5000, windowsHide: true });
      const found = String(result.stdout || "").split(/\r?\n/).map((line) => line.trim()).find(Boolean);
      if (found) {
        compileToolCache.set(toolName, found);
        return found;
      }
    } catch {
      // Try the next candidate.
    }
  }

  if (["gcc", "g++"].includes(toolName) && process.env.LOCALAPPDATA) {
    const found = await findExecutableUnder(
      path.join(process.env.LOCALAPPDATA, "Microsoft", "WinGet", "Packages"),
      [toolName === "gcc" ? "gcc.exe" : "g++.exe"],
      7
    );
    compileToolCache.set(toolName, found || "");
    return found || "";
  }

  if (["javac", "java"].includes(toolName)) {
    const found = await findExecutableUnder("C:\\Program Files\\Eclipse Adoptium", [`${toolName}.exe`], 5);
    compileToolCache.set(toolName, found || "");
    return found || "";
  }

  compileToolCache.set(toolName, "");
  return "";
}

function terminalLine(label, text = "") {
  return [`$ ${label}`, String(text || "").trim()].filter(Boolean).join("\n");
}

function processTerminalText(result = {}) {
  const elapsedSeconds = Number.isFinite(result.elapsedMs) ? (result.elapsedMs / 1000).toFixed(2) : "";
  const elapsed = elapsedSeconds ? ` in ${elapsedSeconds}s` : "";
  const status = result.timedOut
    ? `Timed out after ${elapsedSeconds ? `${elapsedSeconds}s` : "the configured timeout"}`
    : `Exit code ${result.code ?? "unknown"}${elapsed}`;
  const output = [result.stdout, result.stderr].map((part) => String(part || "").trimEnd()).filter(Boolean).join("\n");
  return [status, output || (result.ok ? "Completed without diagnostic output." : "No compiler output was returned.")].join("\n");
}

function pathVariantsForReplacement(value = "") {
  const clean = String(value || "");
  return Array.from(new Set([
    clean,
    path.normalize(clean),
    clean.replace(/\\/g, "/"),
    path.normalize(clean).replace(/\\/g, "/")
  ].filter(Boolean)));
}

function replacePathReferences(text = "", replacements = []) {
  let output = String(text || "");
  for (const replacement of replacements) {
    const from = replacement?.from || "";
    const to = replacement?.to || "";
    if (!from || !to) continue;
    for (const variant of pathVariantsForReplacement(from)) {
      output = output.split(variant).join(to);
    }
  }
  return output;
}

function processTerminalTextWithPaths(result = {}, replacements = []) {
  return replacePathReferences(processTerminalText(result), replacements);
}

function cFamilyCompileProfile(language = "c", fileName = "main.c") {
  const isCpp = language === "cpp";
  const ext = path.extname(String(fileName || "").toLowerCase());
  const header = [".h", ".hpp", ".hh", ".hxx"].includes(ext);
  return {
    compiler: isCpp ? "g++" : "gcc",
    standard: isCpp ? "-std=c++20" : "-std=c17",
    languageFlag: isCpp ? "c++" : "c",
    label: isCpp ? "C++" : "C",
    header,
    flags: [
      isCpp ? "-std=c++20" : "-std=c17",
      "-Wall",
      "-Wextra",
      "-Wpedantic",
      "-Wshadow",
      "-O0",
      "-g3",
      "-fdiagnostics-color=never"
    ]
  };
}

function cFamilyBinaryName(fileName = "program") {
  const parsed = path.parse(String(fileName || "program"));
  return `${safeSegment(parsed.name, "program")}.exe`;
}

async function toolVersionLine(toolPath = "") {
  if (!toolPath) return "";
  if (compileToolVersionCache.has(toolPath)) return compileToolVersionCache.get(toolPath);
  const result = await runProcess(toolPath, ["--version"], { timeoutMs: 7000 });
  const version = [result.stdout, result.stderr]
    .map((part) => String(part || "").trim())
    .filter(Boolean)
    .join("\n")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find(Boolean) || path.basename(toolPath);
  compileToolVersionCache.set(toolPath, version);
  return version;
}

function cFamilyRunOutput(result = {}) {
  const elapsedSeconds = Number.isFinite(result.elapsedMs) ? (result.elapsedMs / 1000).toFixed(2) : "";
  const status = result.timedOut
    ? `Program timed out after ${elapsedSeconds ? `${elapsedSeconds}s` : "the configured timeout"}`
    : `Program exit code ${result.code ?? "unknown"}${elapsedSeconds ? ` in ${elapsedSeconds}s` : ""}`;
  const output = [result.stdout, result.stderr].map((part) => String(part || "").trimEnd()).filter(Boolean).join("\n");
  return [status, output || (result.ok ? "Program completed without output." : "No program output was returned.")].join("\n");
}

function cleanHdlSimulationOutput(result = {}) {
  const raw = [result.stdout, result.stderr].map((part) => String(part || "").trimEnd()).filter(Boolean).join("\n");
  const lines = raw.split(/\r?\n/).map((line) => line.trimEnd()).filter(Boolean);
  const finishLines = [];
  const signalLines = [];
  for (const line of lines) {
    if (/\$finish called at/i.test(line)) {
      finishLines.push(line.replace(/^.*?:\d+:\s*/, ""));
    } else {
      signalLines.push(line);
    }
  }
  const elapsedSeconds = Number.isFinite(result.elapsedMs) ? (result.elapsedMs / 1000).toFixed(2) : "";
  const status = result.timedOut
    ? `Simulation timed out after ${elapsedSeconds ? `${elapsedSeconds}s` : "the configured timeout"}`
    : `Simulation exit code ${result.code ?? "unknown"}${elapsedSeconds ? ` in ${elapsedSeconds}s` : ""}`;
  const body = signalLines.length
    ? signalLines.join("\n")
    : finishLines.length
      ? finishLines.join("\n")
      : result.ok
        ? "Simulation completed without printed output."
        : "No simulator output was returned.";
  const suffix = signalLines.length && finishLines.length ? `\n${finishLines.join("\n")}` : "";
  return `${status}\n${body}${suffix}`;
}

async function runProcess(command, args = [], options = {}) {
  const timeoutMs = options.timeoutMs || 20000;
  const cwd = options.cwd || compileRoot;
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const child = spawn(command, args, {
      cwd,
      env: { ...process.env, ...(options.env || {}) },
      shell: false,
      windowsHide: true
    });
    let stdout = "";
    let stderr = "";
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      if (process.platform === "win32" && child.pid) {
        execFile("taskkill", ["/pid", String(child.pid), "/T", "/F"], { windowsHide: true }, () => {});
      }
      child.kill("SIGKILL");
    }, timeoutMs);
    child.stdout?.on("data", (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr?.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    if (Object.prototype.hasOwnProperty.call(options, "input")) {
      child.stdin?.write(String(options.input || ""));
    }
    child.stdin?.end();
    child.on("error", (error) => {
      clearTimeout(timer);
      resolve({ ok: false, code: -1, stdout, stderr: `${stderr}\n${error.message}`.trim(), timedOut, elapsedMs: Date.now() - startedAt });
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      resolve({ ok: !timedOut && code === 0, code, stdout, stderr, timedOut, elapsedMs: Date.now() - startedAt });
    });
  });
}

async function compileToolStatus() {
  const tools = {};
  const uniqueTools = [...new Set(Object.values(compileLanguageProfiles).flatMap((profile) => profile.primaryTools))];
  for (const tool of uniqueTools) {
    tools[tool] = await findTool(tool);
  }
  const languages = {};
  for (const [id, profile] of Object.entries(compileLanguageProfiles)) {
    const required = profile.primaryTools;
    languages[id] = {
      label: profile.label,
      defaultFile: profile.defaultFile,
      extensions: profile.extensions,
      ready: required.every((tool) => tools[tool]),
      tools: Object.fromEntries(required.map((tool) => [tool, tools[tool] || "missing"])),
      installHints: profile.winget || []
    };
  }
  return { compileRoot, languages, tools };
}

function isHdlLanguage(language = "") {
  return ["verilog", "systemverilog"].includes(normalizeCodeLanguage(language));
}

function inferCompileFileRole(fileName = "", code = "", language = "") {
  if (!isHdlLanguage(language)) return "source";
  const haystack = `${fileName}\n${code}`.toLowerCase();
  if (/\b(tb|testbench)\b|(^|[_-])tb([_-]|\.)|test[_-]?bench|\$dumpfile|\$dumpvars|module\s+tb[_a-z0-9]*/i.test(haystack)) {
    return "testbench";
  }
  return "design";
}

function normalizeCompileFileRole(value = "", language = "") {
  if (!isHdlLanguage(language)) return "source";
  const clean = String(value || "").trim().toLowerCase().replace(/[_\s-]+/g, "");
  return ["tb", "testbench", "bench"].includes(clean) ? "testbench" : "design";
}

async function saveCompileSource({ projectId, fileId, title, fileName, relativePath, language, role = "", code, stdin = "" }) {
  const incomingPath = relativePath || fileName;
  const lang = normalizeCodeLanguage(language || detectCodeLanguageFromSource(code, incomingPath));
  const projectFolder = safeSegment(projectId, "project");
  const safeRelativePath = safeCodeRelativePath(incomingPath, lang);
  const codeFileName = path.basename(safeRelativePath);
  const fileFolder = safeSegment(fileId || path.parse(codeFileName).name, path.parse(codeFileName).name);
  const folder = resolveInsideCompileRoot(projectFolder, fileFolder);
  const sourcePath = resolveInsideCompileRoot(projectFolder, fileFolder, safeRelativePath);
  await mkdir(path.dirname(sourcePath), { recursive: true });
  await mkdir(folder, { recursive: true });
  await writeFile(sourcePath, String(code || ""), "utf8");
  if (stdin) await writeFile(resolveInsideCompileRoot(projectFolder, fileFolder, "stdin.txt"), String(stdin), "utf8");
  const metadata = {
    id: fileFolder,
    title: clampText(title || codeFileName, 180),
    fileName: codeFileName,
    relativePath: safeRelativePath,
    language: lang,
    role: normalizeCompileFileRole(role || inferCompileFileRole(codeFileName, code, lang), lang),
    sourcePath,
    savedAt: new Date().toISOString()
  };
  await writeFile(resolveInsideCompileRoot(projectFolder, fileFolder, "compile-meta.json"), `${JSON.stringify(metadata, null, 2)}\n`, "utf8");
  return metadata;
}

function javaMainClassName(code = "", fileName = "Main.java") {
  const source = String(code || "");
  const publicMatch = source.match(/\bpublic\s+class\s+([A-Za-z_$][\w$]*)/);
  if (publicMatch) return publicMatch[1];
  const classMatch = source.match(/\bclass\s+([A-Za-z_$][\w$]*)/);
  return classMatch?.[1] || path.parse(fileName).name || "Main";
}

function compileCacheKey(parts = {}) {
  return createHash("sha256")
    .update(JSON.stringify(parts))
    .digest("hex")
    .slice(0, 24);
}

function compileCacheDirectory(projectId, language, key) {
  return resolveInsideCompileRoot(safeSegment(projectId, "project"), ".build-cache", safeSegment(language, "language"), key);
}

function cachedBuildLine(type, outputPath) {
  return `${type} cache hit: using existing artifact\n${outputPath}`;
}

function hdlModuleNames(code = "") {
  return [...String(code || "").matchAll(/\bmodule\s+([A-Za-z_$][\w$]*)/g)].map((match) => match[1]);
}

function hdlHasWaveDump(code = "") {
  const source = String(code || "");
  return /\$dumpfile\s*\(/.test(source) && /\$dumpvars\s*\(/.test(source);
}

function hdlFilesFromPayload(payload = {}, activeFileName = "", activeLanguage = "verilog") {
  const incoming = Array.isArray(payload.workspaceFiles) ? payload.workspaceFiles : [];
  const byId = new Map();
  const addFile = (item = {}, fallbackId = "") => {
    const code = String(item.code || "");
    const language = normalizeCodeLanguage(item.language || detectCodeLanguageFromSource(code, item.fileName));
    if (!isHdlLanguage(language) || !code.trim()) return;
    const relativePath = safeCodeRelativePath(item.relativePath || item.fileName || activeFileName || compileLanguageProfiles[language].defaultFile, language);
    const fileName = path.basename(relativePath);
    const id = safeSegment(item.id || fallbackId || fileName, path.parse(fileName).name);
    byId.set(id, {
      id,
      title: clampText(item.title || fileName, 180),
      fileName,
      relativePath,
      language,
      role: normalizeCompileFileRole(item.role || inferCompileFileRole(fileName, code, language), language),
      code
    });
  };
  incoming.forEach((item, index) => addFile(item, `hdl-${index + 1}`));
  addFile({
    id: payload.fileId,
    title: payload.title,
    fileName: activeFileName,
    relativePath: payload.relativePath || activeFileName,
    language: activeLanguage,
    role: payload.role,
    code: payload.code
  }, "active");
  return [...byId.values()].sort((a, b) => {
    if (a.role === b.role) return a.fileName.localeCompare(b.fileName);
    return a.role === "testbench" ? 1 : -1;
  });
}

function compileActionFromPayload(value = "", language = "") {
  const clean = String(value || "").trim().toLowerCase().replace(/[_\s-]+/g, "-");
  if (["compile", "build", "run", "simulate"].includes(clean)) return clean;
  return isHdlLanguage(language) ? "simulate" : "run";
}

function compileActionLabel(action = "run", language = "") {
  if (action === "compile") return "Compile";
  if (action === "build") return "Build project";
  if (action === "simulate") return "Simulate";
  return isHdlLanguage(language) ? "Simulate" : "Run";
}

function compileWorkspaceFilesFromPayload(payload = {}, activeFileName = "", activeLanguage = "javascript") {
  const incoming = Array.isArray(payload.workspaceFiles) ? payload.workspaceFiles : [];
  const byId = new Map();
  const addFile = (item = {}, fallbackId = "") => {
    const code = String(item.code || "");
    if (!code.trim()) return;
    const language = normalizeCodeLanguage(item.language || detectCodeLanguageFromSource(code, item.fileName));
    const relativePath = safeCodeRelativePath(item.relativePath || item.fileName || activeFileName || compileLanguageProfiles[language]?.defaultFile || "source.txt", language);
    const fileName = path.basename(relativePath);
    const id = safeSegment(item.id || fallbackId || fileName, path.parse(fileName).name);
    byId.set(id, {
      id,
      title: clampText(item.title || fileName, 180),
      fileName,
      relativePath,
      language,
      role: normalizeCompileFileRole(item.role || inferCompileFileRole(fileName, code, language), language),
      code
    });
  };
  incoming.forEach((item, index) => addFile(item, `workspace-${index + 1}`));
  addFile({
    id: payload.fileId,
    title: payload.title,
    fileName: activeFileName,
    relativePath: payload.relativePath || activeFileName,
    language: activeLanguage,
    role: payload.role,
    code: payload.code
  }, "active");
  return [...byId.values()].sort((a, b) => a.fileName.localeCompare(b.fileName));
}

async function writeCompileWorkspaceSources(files = [], targetDir = "", options = {}) {
  await mkdir(targetDir, { recursive: true });
  const seen = new Map();
  const written = [];
  for (const file of files) {
    if (options.languages?.length && !options.languages.includes(normalizeCodeLanguage(file.language))) continue;
    if (options.extensions?.length && !options.extensions.includes(path.extname(file.fileName).toLowerCase())) continue;
    const relativePath = safeCodeRelativePath(file.relativePath || file.fileName, file.language);
    const parsed = path.parse(relativePath);
    const count = seen.get(relativePath) || 0;
    seen.set(relativePath, count + 1);
    const uniqueRelativePath = count ? path.join(parsed.dir, `${parsed.name}_${count}${parsed.ext}`) : relativePath;
    const sourcePath = path.join(targetDir, uniqueRelativePath);
    await mkdir(path.dirname(sourcePath), { recursive: true });
    await writeFile(sourcePath, file.code, "utf8");
    written.push({ ...file, relativePath, uniqueName: uniqueRelativePath.replace(/\\/g, "/"), sourcePath });
  }
  return written;
}

function sourceDisplayName(file = {}) {
  return file.uniqueName || file.relativePath || file.fileName || path.basename(file.sourcePath || "source");
}

function cFamilyWorkspaceSources(files = [], language = "c", activeFileName = "") {
  const exts = language === "cpp"
    ? new Set([".cpp", ".cc", ".cxx", ".c++", ".hpp", ".hh", ".hxx", ".h"])
    : new Set([".c", ".h"]);
  const selected = files.filter((file) => exts.has(path.extname(file.fileName).toLowerCase()));
  if (!selected.some((file) => file.fileName === activeFileName)) {
    selected.push(...files.filter((file) => file.fileName === activeFileName));
  }
  return selected;
}

async function writeHdlSimulationSources(files = [], cacheDir = "") {
  const sourceDir = path.join(cacheDir, "sources");
  await rm(sourceDir, { recursive: true, force: true });
  await mkdir(sourceDir, { recursive: true });
  const seen = new Map();
  const written = [];
  for (const file of files) {
    const parsed = path.parse(file.fileName);
    const count = seen.get(file.fileName) || 0;
    seen.set(file.fileName, count + 1);
    const uniqueName = count ? `${parsed.name}_${count}${parsed.ext}` : file.fileName;
    const sourcePath = path.join(sourceDir, uniqueName);
    await writeFile(sourcePath, file.code, "utf8");
    written.push({ ...file, uniqueName, sourcePath });
  }
  return written;
}

async function findFilesByExtension(folder = "", extension = ".vcd", maxDepth = 3) {
  if (!folder || maxDepth < 0 || !(await pathExists(folder))) return [];
  const entries = await readdir(folder, { withFileTypes: true }).catch(() => []);
  const matches = [];
  for (const entry of entries) {
    const fullPath = path.join(folder, entry.name);
    if (entry.isDirectory()) {
      matches.push(...await findFilesByExtension(fullPath, extension, maxDepth - 1));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(extension.toLowerCase())) {
      matches.push(fullPath);
    }
  }
  return matches;
}

function normalizeVcdValue(raw = "") {
  const clean = String(raw || "").trim();
  if (!clean) return "x";
  if (/^[01xz]$/i.test(clean)) return clean.toLowerCase();
  if (/^[br][01xz_]+$/i.test(clean)) return clean.slice(1).replace(/_/g, "").toLowerCase();
  return clean.toLowerCase();
}

function parseVcdScopeText(text = "", source = "waveform.vcd") {
  const lines = String(text || "").split(/\r?\n/);
  const scopes = [];
  const signalsByCode = new Map();
  const timeScaleParts = [];
  let inTimescale = false;
  let time = 0;
  let maxTime = 0;
  let definitionDone = false;
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line.startsWith("$timescale")) {
      inTimescale = true;
      const inline = line.replace("$timescale", "").replace("$end", "").trim();
      if (inline) timeScaleParts.push(inline);
      continue;
    }
    if (inTimescale) {
      if (line === "$end") {
        inTimescale = false;
      } else {
        timeScaleParts.push(line.replace("$end", "").trim());
        if (line.includes("$end")) inTimescale = false;
      }
      continue;
    }
    const scopeMatch = line.match(/^\$scope\s+\S+\s+(.+?)\s+\$end$/);
    if (scopeMatch) {
      scopes.push(scopeMatch[1]);
      continue;
    }
    if (/^\$upscope\b/.test(line)) {
      scopes.pop();
      continue;
    }
    const varMatch = line.match(/^\$var\s+\S+\s+(\d+)\s+(\S+)\s+(.+?)\s+\$end$/);
    if (varMatch) {
      const [, width, code, reference] = varMatch;
      if (!signalsByCode.has(code) && signalsByCode.size < 64) {
        const cleanReference = reference.replace(/\s+\[[^\]]+\]$/, "");
        signalsByCode.set(code, {
          code,
          name: [...scopes, cleanReference].filter(Boolean).join("."),
          reference: cleanReference,
          width: Number(width) || 1,
          changes: []
        });
      }
      continue;
    }
    if (line.startsWith("$enddefinitions")) {
      definitionDone = true;
      continue;
    }
    if (!definitionDone) continue;
    if (line.startsWith("#")) {
      time = Number(line.slice(1)) || 0;
      maxTime = Math.max(maxTime, time);
      continue;
    }
    let code = "";
    let value = "";
    const vectorMatch = line.match(/^([br][01xz_]+)\s+(\S+)$/i);
    if (vectorMatch) {
      value = normalizeVcdValue(vectorMatch[1]);
      code = vectorMatch[2];
    } else if (/^[01xz]/i.test(line)) {
      value = normalizeVcdValue(line[0]);
      code = line.slice(1).trim();
    }
    const signal = signalsByCode.get(code);
    if (!signal || !value) continue;
    const previous = signal.changes[signal.changes.length - 1];
    if (!previous || previous.value !== value || previous.time !== time) {
      if (signal.changes.length < 600) signal.changes.push({ time, value });
    }
  }
  const signals = [...signalsByCode.values()]
    .filter((signal) => signal.changes.length)
    .slice(0, 32);
  return {
    source: path.basename(source),
    timeScale: timeScaleParts.join(" ").replace(/\s+/g, " ").trim() || "ticks",
    maxTime,
    signals
  };
}

async function readHdlWaveform(cacheDir = "") {
  const vcdFiles = await findFilesByExtension(cacheDir, ".vcd", 4);
  if (!vcdFiles.length) return null;
  const selected = vcdFiles.sort((a, b) => a.length - b.length)[0];
  const text = await readFile(selected, "utf8");
  const limited = text.length > 6_000_000 ? text.slice(0, 6_000_000) : text;
  return parseVcdScopeText(limited, selected);
}

async function clearHdlWaveforms(cacheDir = "") {
  const vcdFiles = await findFilesByExtension(cacheDir, ".vcd", 4);
  await Promise.all(vcdFiles.map((filePath) => rm(filePath, { force: true }).catch(() => {})));
}

async function compileAndRunCode(payload = {}) {
  const requestedLanguage = String(payload.language || "").trim().toLowerCase();
  const language = requestedLanguage && requestedLanguage !== "auto"
    ? normalizeCodeLanguage(requestedLanguage)
    : detectCodeLanguageFromSource(payload.code, payload.fileName);
  const profile = compileLanguageProfiles[language] || compileLanguageProfiles.javascript;
  const fileName = safeCodeFileName(payload.fileName || payload.relativePath, language);
  const relativePath = safeCodeRelativePath(payload.relativePath || payload.fileName, language);
  const saved = await saveCompileSource({ ...payload, language, fileName, relativePath });
  const projectFolder = safeSegment(payload.projectId, "project");
  const sourcePath = saved.sourcePath;
  const sourceCode = String(payload.code || "");
  const action = compileActionFromPayload(payload.action, language);
  const allWorkspaceFiles = compileWorkspaceFilesFromPayload(payload, saved.fileName, language);
  let runDir = "";
  let runSourcePath = "";
  let runWorkspaceSources = [];
  const ensureRunSource = async (options = {}) => {
    if (runDir && runSourcePath) return { runDir, runSourcePath, writtenSources: runWorkspaceSources };
    const runId = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    runDir = resolveInsideCompileRoot(projectFolder, ".runs", runId);
    await mkdir(runDir, { recursive: true });
    const filesToWrite = Array.isArray(options.files) && options.files.length ? options.files : allWorkspaceFiles;
    runWorkspaceSources = await writeCompileWorkspaceSources(filesToWrite, runDir, {
      languages: options.languages,
      extensions: options.extensions
    });
    const active = runWorkspaceSources.find((file) => file.id === saved.id || file.fileName === saved.fileName);
    runSourcePath = active?.sourcePath || path.join(runDir, saved.relativePath || saved.fileName);
    if (!active) {
      await mkdir(path.dirname(runSourcePath), { recursive: true });
      await cp(sourcePath, runSourcePath, { force: true });
      runWorkspaceSources.push({
        id: saved.id,
        title: saved.title,
        fileName: saved.fileName,
        relativePath: saved.relativePath || saved.fileName,
        language,
        role: saved.role,
        code: sourceCode,
        uniqueName: saved.relativePath || saved.fileName,
        sourcePath: runSourcePath
      });
    }
    return { runDir, runSourcePath, writtenSources: runWorkspaceSources };
  };
  const stdin = String(payload.stdin || "");
  const forceRebuild = payload.forceRebuild === true;
  const terminal = [];
  terminal.push(`${compileActionLabel(action, language)} request for ${saved.fileName}`);
  const append = (label, result) => {
    terminal.push(terminalLine(label, processTerminalText(result)));
  };
  const missing = async (tools) => {
    const found = {};
    for (const tool of tools) found[tool] = await findTool(tool);
    const missingTools = tools.filter((tool) => !found[tool]);
    return { found, missingTools };
  };

  if (language === "html") {
    const openTags = (String(payload.code || "").match(/<([a-z][\w:-]*)\b[^>]*>/gi) || []).length;
    const closeTags = (String(payload.code || "").match(/<\/([a-z][\w:-]*)>/gi) || []).length;
    const ok = openTags >= closeTags;
    return {
      ok,
      language,
      saved,
      terminal: [
        "HTML validation pass",
        ok ? "No obvious tag-balance issue was detected." : "The file may have more closing tags than opening tags.",
        `Saved source: ${saved.sourcePath}`
      ].join("\n")
    };
  }

  const stdinOptions = stdin ? { input: stdin } : {};
  let ok = false;

  if (language === "javascript") {
    const node = await findTool("node");
    if (!node) return { ok: false, language, saved, terminal: "Node.js was not found. Install Node.js to run JavaScript." };
    const jsFiles = allWorkspaceFiles.filter((file) => normalizeCodeLanguage(file.language) === "javascript");
    const runSource = await ensureRunSource({ files: jsFiles.length ? jsFiles : allWorkspaceFiles, languages: ["javascript"] });
    const targets = action === "build"
      ? runSource.writtenSources.filter((file) => normalizeCodeLanguage(file.language) === "javascript")
      : runSource.writtenSources.filter((file) => file.sourcePath === runSource.runSourcePath);
    ok = true;
    for (const target of targets.length ? targets : [{ sourcePath: runSource.runSourcePath, uniqueName: saved.fileName }]) {
      const check = await runProcess(node, ["--check", target.sourcePath], { cwd: runSource.runDir, timeoutMs: 15000 });
      terminal.push(terminalLine(`${path.basename(node)} --check ${sourceDisplayName(target)}`, processTerminalText(check)));
      ok = ok && check.ok;
    }
    if (action === "compile" || action === "build") {
      terminal.push(ok ? "JavaScript syntax check completed." : "JavaScript syntax check found errors.");
    } else if (ok) {
      const run = await runProcess(node, [runSource.runSourcePath], { cwd: runSource.runDir, timeoutMs: 20000, ...stdinOptions });
      append(`${path.basename(node)} ${saved.fileName}`, run);
      ok = run.ok;
    }
  } else if (language === "python") {
    const python = await findTool("python");
    if (!python) return { ok: false, language, saved, terminal: "Python was not found. Install Python to run Python code." };
    const pyFiles = allWorkspaceFiles.filter((file) => normalizeCodeLanguage(file.language) === "python");
    const runSource = await ensureRunSource({ files: pyFiles.length ? pyFiles : allWorkspaceFiles, languages: ["python"] });
    const targets = action === "build"
      ? runSource.writtenSources.filter((file) => normalizeCodeLanguage(file.language) === "python")
      : runSource.writtenSources.filter((file) => file.sourcePath === runSource.runSourcePath);
    ok = true;
    for (const target of targets.length ? targets : [{ sourcePath: runSource.runSourcePath, uniqueName: saved.fileName }]) {
      const check = await runProcess(python, ["-m", "py_compile", target.sourcePath], { cwd: runSource.runDir, timeoutMs: 15000 });
      terminal.push(terminalLine(`${path.basename(python)} -m py_compile ${sourceDisplayName(target)}`, processTerminalText(check)));
      ok = ok && check.ok;
    }
    if (action === "compile" || action === "build") {
      terminal.push(ok ? "Python bytecode compile check completed." : "Python compile check found errors.");
    } else if (ok) {
      const run = await runProcess(python, [runSource.runSourcePath], { cwd: runSource.runDir, timeoutMs: 20000, ...stdinOptions });
      append(`${path.basename(python)} ${saved.fileName}`, run);
      ok = run.ok;
    }
  } else if (language === "c" || language === "cpp") {
    const cProfile = cFamilyCompileProfile(language, saved.fileName);
    const toolName = cProfile.compiler;
    const { found, missingTools } = await missing([toolName]);
    if (missingTools.length) {
      return { ok: false, language, saved, terminal: `${profile.label} compiler missing: ${missingTools.join(", ")}. Install WinLibs/MinGW or add it to PATH.` };
    }
    const workspaceSources = cFamilyWorkspaceSources(allWorkspaceFiles, language, saved.fileName);
    const buildTargets = action === "build"
      ? workspaceSources.filter((file) => !cFamilyCompileProfile(language, file.fileName).header)
      : workspaceSources.filter((file) => file.fileName === saved.fileName);
    const compilerVersion = await toolVersionLine(found[toolName]);
    const cacheKey = compileCacheKey({
      language,
      action,
      activeFileName: saved.fileName,
      files: buildTargets.map((file) => ({ fileName: file.fileName, code: file.code })),
      compiler: found[toolName],
      compilerVersion,
      flags: cProfile.flags,
      header: cProfile.header
    });
    const cacheDir = compileCacheDirectory(payload.projectId, language, cacheKey);
    await mkdir(cacheDir, { recursive: true });
    const workspaceDir = path.join(cacheDir, "sources");
    await rm(workspaceDir, { recursive: true, force: true });
    const writtenSources = await writeCompileWorkspaceSources(workspaceSources, workspaceDir);
    const activeWritten = writtenSources.find((file) => file.fileName === saved.fileName) || writtenSources[0];
    const binaryName = cFamilyBinaryName(saved.fileName);
    const output = path.join(cacheDir, binaryName);
    const outputMarker = path.join(cacheDir, "syntax-ok.txt");
    const cached = !forceRebuild && await pathExists(output);
    const cachedHeader = cProfile.header && !forceRebuild && await pathExists(outputMarker);
    terminal.push(`${cProfile.label} build profile: ${cProfile.standard}, warnings enabled, debug symbols enabled`);
    terminal.push(`Workspace sources visible to compiler: ${writtenSources.map(sourceDisplayName).join(", ") || saved.fileName}`);
    if (compilerVersion) terminal.push(`Compiler: ${compilerVersion}`);
    if (cached || cachedHeader) {
      terminal.push(cachedBuildLine(cProfile.header ? `${cProfile.label} header syntax check` : `${cProfile.label} binary`, cProfile.header ? outputMarker : output));
    } else {
      const args = cProfile.header
        ? ["-x", cProfile.languageFlag, "-fsyntax-only", ...cProfile.flags, activeWritten?.sourcePath || sourcePath]
        : [
            ...(action === "build"
              ? writtenSources.filter((file) => !cFamilyCompileProfile(language, file.fileName).header).map((file) => file.sourcePath)
              : [activeWritten?.sourcePath || sourcePath]),
            "-o",
            output,
            ...cProfile.flags
          ];
      const compile = await runProcess(found[toolName], args, { cwd: workspaceDir, timeoutMs: 30000 });
      const replacements = [
        { from: sourcePath, to: saved.fileName },
        { from: output, to: binaryName },
        ...writtenSources.map((file) => ({ from: file.sourcePath, to: sourceDisplayName(file) }))
      ];
      terminal.push(terminalLine(
        `${path.basename(found[toolName])} ${action === "build" ? "workspace sources" : saved.fileName} ${cProfile.header ? "-fsyntax-only" : `-o ${binaryName}`} ${cProfile.flags.join(" ")}`,
        processTerminalTextWithPaths(compile, replacements)
      ));
      ok = compile.ok;
      if (ok && cProfile.header) {
        await writeFile(outputMarker, `${cProfile.label} header syntax check passed for ${saved.fileName}\n`, "utf8");
      }
    }
    if (cProfile.header && (cachedHeader || ok)) {
      terminal.push(`Header syntax check passed: ${saved.fileName}`);
      ok = true;
    } else if (cached || ok) {
      terminal.push(`Generated binary: ${output}`);
      if (action === "run") {
        const toolPath = found[toolName];
        const run = await runProcess(output, [], {
          cwd: cacheDir,
          timeoutMs: 20000,
          env: { PATH: `${path.dirname(toolPath)}${path.delimiter}${process.env.PATH || ""}` },
          ...stdinOptions
        });
        terminal.push(terminalLine(binaryName, cFamilyRunOutput(run)));
        ok = run.ok;
      } else {
        terminal.push(`${compileActionLabel(action, language)} completed. Use Run to execute the generated binary.`);
        ok = true;
      }
    }
  } else if (language === "java") {
    const { found, missingTools } = await missing(["javac", "java"]);
    if (missingTools.length) {
      return { ok: false, language, saved, terminal: `Java tools missing: ${missingTools.join(", ")}. Install a JDK or add it to PATH.` };
    }
    const className = javaMainClassName(payload.code, saved.fileName);
    const javaFiles = allWorkspaceFiles.filter((file) => normalizeCodeLanguage(file.language) === "java");
    const cacheKey = compileCacheKey({
      language,
      fileName: saved.fileName,
      files: javaFiles.map((file) => ({ fileName: file.fileName, code: file.code })),
      compiler: found.javac,
      runtime: found.java,
      className
    });
    const cacheDir = compileCacheDirectory(payload.projectId, language, cacheKey);
    await mkdir(cacheDir, { recursive: true });
    const classPath = path.join(cacheDir, `${className}.class`);
    const sourceDir = path.join(cacheDir, "sources");
    await rm(sourceDir, { recursive: true, force: true });
    const writtenSources = await writeCompileWorkspaceSources(javaFiles.length ? javaFiles : allWorkspaceFiles, sourceDir, { languages: ["java"] });
    const javaPath = writtenSources.find((file) => file.fileName === saved.fileName)?.sourcePath || path.join(sourceDir, `${className}.java`);
    const cached = !forceRebuild && await pathExists(classPath);
    terminal.push(`Java workspace sources: ${writtenSources.map(sourceDisplayName).join(", ") || saved.fileName}`);
    if (cached) {
      terminal.push(cachedBuildLine("Java class", classPath));
    } else {
      if (!writtenSources.length) await writeFile(javaPath, sourceCode, "utf8");
      const compileTargets = action === "build" ? writtenSources.map((file) => file.sourcePath) : [javaPath];
      const compile = await runProcess(found.javac, ["-d", cacheDir, ...compileTargets], { cwd: sourceDir, timeoutMs: 30000 });
      terminal.push(terminalLine(`${path.basename(found.javac)} ${action === "build" ? "workspace sources" : path.basename(javaPath)}`, processTerminalTextWithPaths(
        compile,
        writtenSources.map((file) => ({ from: file.sourcePath, to: sourceDisplayName(file) }))
      )));
      ok = compile.ok;
    }
    if ((cached || ok) && action !== "compile" && action !== "build") {
      terminal.push(`Generated class: ${classPath}`);
      const run = await runProcess(found.java, ["-cp", cacheDir, className], { cwd: cacheDir, timeoutMs: 20000, ...stdinOptions });
      append(`${path.basename(found.java)} ${className}`, run);
      ok = run.ok;
    } else if (cached || ok) {
      terminal.push(`${compileActionLabel(action, language)} completed. Use Run to execute ${className}.`);
      ok = true;
    }
  } else if (language === "verilog" || language === "systemverilog") {
    const { found, missingTools } = await missing(["iverilog", "vvp"]);
    if (missingTools.length) {
      return { ok: false, language, saved, terminal: `${profile.label} simulator tools missing: ${missingTools.join(", ")}. Install Icarus Verilog and add iverilog/vvp to PATH.` };
    }
    const hdlFiles = hdlFilesFromPayload(payload, saved.fileName, language);
    const testbenchFiles = hdlFiles.filter((file) => file.role === "testbench");
    if (action === "simulate" && !testbenchFiles.length) {
      return {
        ok: false,
        language,
        saved,
        terminal: [
          `${profile.label} simulation requires a testbench.`,
          "Mark one HDL file as Testbench or click Add testbench, connect it to the design under test, then run again.",
          "A design-only file can be saved and appended to the portfolio, but simulation needs stimulus from a testbench."
        ].join("\n")
      };
    }
    if (action === "simulate" && !testbenchFiles.some((file) => hdlHasWaveDump(file.code))) {
      return {
        ok: false,
        language,
        saved,
        terminal: [
          "HDL scope requires waveform dump calls in the testbench.",
          'Add $dumpfile("waveform.vcd"); and $dumpvars(0, tb_module_name); inside an initial block.',
          "The simulator will not run without a waveform dump because there would be no signal-over-time data for the scope."
        ].join("\n")
      };
    }
    const usesSystemVerilog = hdlFiles.some((file) => normalizeCodeLanguage(file.language) === "systemverilog");
    const flags = usesSystemVerilog ? ["-g2012", "-Wall"] : ["-g2005-sv", "-Wall"];
    const topModule = testbenchFiles.flatMap((file) => hdlModuleNames(file.code)).find(Boolean) || "";
    const cacheKey = compileCacheKey({
      language: usesSystemVerilog ? "systemverilog" : "verilog",
      files: hdlFiles.map((file) => ({
        fileName: file.fileName,
        language: file.language,
        role: file.role,
        code: file.code
      })),
      compiler: found.iverilog,
      runtime: found.vvp,
      flags,
      topModule
    });
    const cacheDir = compileCacheDirectory(payload.projectId, language, cacheKey);
    await mkdir(cacheDir, { recursive: true });
    const output = path.join(cacheDir, "simulation.vvp");
    const sourceFiles = await writeHdlSimulationSources(hdlFiles, cacheDir);
    const designCount = sourceFiles.filter((file) => file.role !== "testbench").length;
    terminal.push(`${profile.label} simulation set: ${designCount} design file${designCount === 1 ? "" : "s"}, ${testbenchFiles.length} testbench file${testbenchFiles.length === 1 ? "" : "s"}`);
    if (topModule) terminal.push(`Testbench top: ${topModule}`);
    const cached = !forceRebuild && await pathExists(output);
    if (cached) {
      terminal.push(cachedBuildLine(`${profile.label} simulation`, output));
    } else {
      const compileArgs = [
        ...flags,
        ...(topModule ? ["-s", topModule] : []),
        "-o",
        output,
        ...sourceFiles.map((file) => file.sourcePath)
      ];
      const compile = await runProcess(found.iverilog, compileArgs, { cwd: cacheDir, timeoutMs: 30000 });
      const replacements = sourceFiles.map((file) => ({ from: file.sourcePath, to: file.uniqueName }));
      terminal.push(terminalLine(
        `${path.basename(found.iverilog)} ${flags.join(" ")}${topModule ? ` -s ${topModule}` : ""} -o simulation.vvp`,
        processTerminalTextWithPaths(compile, replacements)
      ));
      ok = compile.ok;
    }
    let waveform = null;
    if (cached || ok) {
      terminal.push(`Generated simulation: ${output}`);
      if (action === "compile" || action === "build") {
        terminal.push(`${compileActionLabel(action, language)} completed. Use Simulate to run the generated simulation and produce scope data.`);
        return {
          ok: true,
          language,
          saved,
          waveform: null,
          terminal: terminal.join("\n\n").trim() || "No compiler output was returned."
        };
      }
      await clearHdlWaveforms(cacheDir);
      const run = await runProcess(found.vvp, [output], { cwd: cacheDir, timeoutMs: 20000 });
      terminal.push(terminalLine(`${path.basename(found.vvp)} simulation.vvp`, cleanHdlSimulationOutput(run)));
      waveform = run.ok ? await readHdlWaveform(cacheDir) : null;
      if (waveform?.signals?.length) {
        terminal.push(`Scope waveform: ${waveform.source} (${waveform.signals.length} signals, 0 to ${waveform.maxTime} ${waveform.timeScale})`);
      } else {
        terminal.push("Scope waveform was not generated. Confirm the testbench executes $dumpfile and $dumpvars before $finish.");
      }
      ok = run.ok && Boolean(waveform?.signals?.length);
      return {
        ok,
        language,
        saved,
        waveform,
        terminal: terminal.join("\n\n").trim() || "No compiler output was returned."
      };
    }
  } else if (language === "ltspice") {
    const ltspice = await findTool("ltspice");
    if (!ltspice) {
      return { ok: false, language, saved, terminal: "LTspice executable was not found. Install LTspice or set LTSPICE_EXE to the executable path." };
    }
    const runSource = await ensureRunSource();
    const run = await runProcess(ltspice, ["-b", runSource.runSourcePath], { cwd: runSource.runDir, timeoutMs: 45000 });
    append(`${path.basename(ltspice)} -b ${saved.fileName}`, run);
    const logPath = runSource.runSourcePath.replace(/\.[^.]+$/, ".log");
    if (await pathExists(logPath)) terminal.push(await readFile(logPath, "utf8"));
    ok = run.ok;
  }

  return {
    ok,
    language,
    saved,
    terminal: terminal.join("\n\n").trim() || "No compiler output was returned."
  };
}

async function runCompileTerminalCommand(payload = {}) {
  const command = String(payload.command || "").trim();
  if (!command) throw new Error("Terminal command is required.");
  if (command.length > 2000) throw new Error("Terminal command is too long.");
  const projectFolder = safeSegment(payload.projectId, "project");
  const cwdRelative = safeCodeDirectoryPath(payload.cwd || "");
  const cwd = cwdRelative
    ? resolveInsideCompileRoot(projectFolder, cwdRelative)
    : resolveInsideCompileRoot(projectFolder);
  await mkdir(cwd, { recursive: true });
  const shellCommand = process.platform === "win32" ? "powershell.exe" : "bash";
  const shellArgs = process.platform === "win32"
    ? ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", command]
    : ["-lc", command];
  const result = await runProcess(shellCommand, shellArgs, {
    cwd,
    timeoutMs: Number(payload.timeoutMs || 30000)
  });
  const output = [
    `${cwdRelative || "."}> ${command}`,
    processTerminalText(result)
  ].filter(Boolean).join("\n");
  return {
    cwd: cwdRelative,
    exitCode: result.code,
    ok: result.ok,
    output
  };
}

async function installCompilerTools(language = "") {
  const lang = normalizeCodeLanguage(language);
  const profile = compileLanguageProfiles[lang] || compileLanguageProfiles.javascript;
  if (!profile.winget?.length) {
    return {
      ok: false,
      language: lang,
      terminal: `${profile.label} does not have an automatic Winget compiler install configured. Install the required tools manually, then restart the builder.`
    };
  }
  const winget = await findTool("winget") || "winget";
  const terminal = [];
  let ok = true;
  for (const packageId of profile.winget) {
    const args = [
      "install",
      "--source",
      "winget",
      "--accept-source-agreements",
      "--accept-package-agreements",
      "--silent",
      "--id",
      packageId,
      "--exact"
    ];
    const result = await runProcess(winget, args, { cwd: root, timeoutMs: 600000 });
    terminal.push(terminalLine(`winget ${args.join(" ")}`, processTerminalText(result)));
    ok = ok && result.ok;
  }
  compileToolCache.clear();
  return { ok, language: lang, terminal: terminal.join("\n\n"), tools: await compileToolStatus() };
}

function sourceLooksTextual(source = {}) {
  const url = String(source.url || "");
  const kind = String(source.kind || "").toLowerCase();
  if (["text", "webpage", "github", "linkedin", "public_profile", "resume_text", "code"].includes(kind)) return true;
  return /\.(txt|md|markdown|csv|json|xml|log|c|h|cpp|hpp|py|js|mjs|ts|tsx|v|sv|vhdl?|spice|cir|net|asc|sch|kicad_sch|kicad_pcb|ino|xdc|sdc|tcl)$/i.test(url)
    || /github\.com|raw\.githubusercontent\.com/i.test(url);
}

function sourceUrlAllowed(url) {
  try {
    const parsed = new URL(url);
    const hostName = parsed.hostname.toLowerCase();
    return [
      "localhost",
      "127.0.0.1",
      "github.com",
      "api.github.com",
      "raw.githubusercontent.com",
      "gist.githubusercontent.com",
      "linkedin.com",
      "www.linkedin.com"
    ].includes(hostName);
  } catch {
    return false;
  }
}

const githubTextFilePattern = /\.(txt|md|markdown|csv|json|xml|log|c|h|cpp|hpp|cc|hh|py|js|mjs|ts|tsx|v|sv|vhdl?|spice|cir|net|asc|sch|kicad_sch|kicad_pcb|ino|xdc|sdc|tcl|yaml|yml)$/i;
const githubSkipFilePattern = /\.(png|jpe?g|gif|webp|svg|pdf|zip|7z|rar|exe|dll|bin|obj|o|a|so|dylib|mp4|mov|avi|mp3|wav|xlsx?|pptx?|docx?)$/i;

function gitHubHeaders(accept = "application/vnd.github+json") {
  return {
    "Accept": accept,
    "User-Agent": "OMB-Portfolio-Builder-AI"
  };
}

function parseGitHubSourceUrl(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    const parts = parsed.pathname.split("/").filter(Boolean);
    if (host === "raw.githubusercontent.com" && parts.length >= 4) {
      return {
        type: "file",
        owner: parts[0],
        repo: parts[1],
        branch: parts[2],
        filePath: parts.slice(3).join("/")
      };
    }
    if (host !== "github.com" || !parts.length) return null;
    if (parts.length === 1) return { type: "profile", owner: parts[0] };
    const base = { owner: parts[0], repo: parts[1] };
    if (parts[2] === "blob" && parts.length >= 5) {
      return { ...base, type: "file", branch: parts[3], filePath: parts.slice(4).join("/") };
    }
    if (parts[2] === "tree" && parts.length >= 4) {
      return { ...base, type: "repo", branch: parts[3] };
    }
    return { ...base, type: "repo" };
  } catch {
    return null;
  }
}

async function fetchGitHubJson(url) {
  const response = await fetch(url, { headers: gitHubHeaders() });
  if (!response.ok) return null;
  return response.json().catch(() => null);
}

async function fetchLimitedText(url, maxLength = 12000) {
  const response = await fetch(url, {
    headers: gitHubHeaders("text/plain,text/markdown,text/html,application/json;q=0.8,*/*;q=0.1")
  });
  if (!response.ok) return "";
  const rawText = clampText(await response.text(), maxLength);
  const contentType = response.headers.get("Content-Type") || "";
  return /html/i.test(contentType) ? stripHtmlToText(rawText) : rawText;
}

function githubQuestionTokens(question = "") {
  return [...new Set(String(question || "")
    .toLowerCase()
    .replace(/[^a-z0-9_#+.\s-]+/g, " ")
    .split(/\s+/)
    .filter((token) => token.length >= 3 && !["the", "and", "with", "from", "show", "code", "file", "github"].includes(token)))];
}

function scoreGitHubFile(filePath = "", question = "") {
  const cleanPath = filePath.toLowerCase();
  const tokens = githubQuestionTokens(question);
  let score = githubTextFilePattern.test(cleanPath) ? 10 : 0;
  if (/readme\.md$/.test(cleanPath)) score += 55;
  if (/\.(c|h|cpp|hpp|py|js|mjs|ts|v|sv|vhdl?|ino|tcl|xdc|sdc)$/i.test(cleanPath)) score += 28;
  if (/\b(test|tb|bench|sim|simulation|src|firmware|hardware|rtl|driver|main)\b/i.test(cleanPath)) score += 12;
  tokens.forEach((token) => {
    if (cleanPath.includes(token)) score += 18;
  });
  return score;
}

function wantsGitHubCode(question = "") {
  return /\b(code|source|snippet|implementation|firmware|driver|module|verilog|vhdl|python|javascript|typescript|c\+\+|cpp|c\s+code|pull|show|display)\b/i.test(question);
}

function scoreGitHubRepo(repo = {}, question = "") {
  const tokens = githubQuestionTokens(question);
  const haystack = [
    repo.full_name,
    repo.name,
    repo.description,
    repo.language,
    ...(Array.isArray(repo.topics) ? repo.topics : [])
  ].join(" ").toLowerCase();
  let score = repo.fork ? -10 : 12;
  if (!repo.archived) score += 6;
  if (repo.language) score += 4;
  if (repo.name && !/\.github\.io$/i.test(repo.name)) score += 3;
  tokens.forEach((token) => {
    if (haystack.includes(token)) score += 22;
  });
  if (/\b(vco|oscillator|pwm|analog|mixed|pcb|firmware|stm32|fpga|asic|verilog|embedded|signal|design)\b/i.test(haystack)) {
    score += 12;
  }
  return score;
}

async function fetchGitHubProfileSource(source = {}, parsed = {}) {
  const owner = parsed.owner;
  const [profile, repos] = await Promise.all([
    fetchGitHubJson(`https://api.github.com/users/${encodeURIComponent(owner)}`),
    fetchGitHubJson(`https://api.github.com/users/${encodeURIComponent(owner)}/repos?per_page=30&sort=updated`)
  ]);
  const repoList = Array.isArray(repos) ? repos : [];
  const includeCode = wantsGitHubCode(source.question || "");
  const selectedRepos = includeCode
    ? [...repoList]
      .sort((a, b) => scoreGitHubRepo(b, source.question || "") - scoreGitHubRepo(a, source.question || ""))
      .slice(0, 3)
    : [];
  const repoBlocks = [];

  for (const repo of selectedRepos) {
    if (!repo?.name || !repo?.html_url) continue;
    const repoSource = await fetchGitHubRepositorySource({
      ...source,
      context: `Public GitHub repository selected from ${owner}'s profile`,
      label: repo.full_name,
      maxCodeFiles: 3,
      maxFileTextLength: 3600,
      maxRepositoryTextLength: 9000,
      url: repo.html_url
    }, {
      owner,
      repo: repo.name,
      type: "repo",
      branch: repo.default_branch
    });
    if (repoSource?.text?.trim()) repoBlocks.push(repoSource.text.trim());
  }

  const lines = [
    `GitHub public profile: ${owner}`,
    profile?.name ? `Name: ${profile.name}` : "",
    profile?.bio ? `Bio: ${profile.bio}` : "",
    profile?.html_url ? `Profile URL: ${profile.html_url}` : source.url,
    "",
    "Public repositories visible from the profile:",
    ...repoList.slice(0, 20).map((repo) => [
      `- ${repo.full_name}`,
      repo.description ? `: ${repo.description}` : "",
      repo.language ? ` | Language: ${repo.language}` : "",
      repo.html_url ? ` | URL: ${repo.html_url}` : "",
      repo.updated_at ? ` | Updated: ${repo.updated_at}` : ""
    ].join("")),
    includeCode && selectedRepos.length ? "" : "",
    includeCode && selectedRepos.length ? "Selected public repositories inspected for source code:" : "",
    ...selectedRepos.map((repo) => `- ${repo.full_name}${repo.language ? ` | Language: ${repo.language}` : ""}${repo.description ? ` | ${repo.description}` : ""}`),
    ...repoBlocks.flatMap((block) => ["", "---", block])
  ].filter(Boolean);
  return {
    context: source.context || "Public GitHub profile",
    title: source.title || source.label || `GitHub profile: ${owner}`,
    type: includeCode ? "public GitHub profile and selected repository code" : "public GitHub profile",
    url: source.url,
    text: clampText(lines.join("\n"), includeCode ? 30000 : 9000)
  };
}

async function fetchGitHubRepositorySource(source = {}, parsed = {}) {
  const { owner, repo } = parsed;
  const metadata = await fetchGitHubJson(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`);
  const branch = parsed.branch || metadata?.default_branch || "main";
  const question = source.question || "";
  const requestedMaxCodeFiles = Number(source.maxCodeFiles || (wantsGitHubCode(question) ? 6 : 3));
  const maxCodeFiles = Math.max(1, Math.min(8, Number.isFinite(requestedMaxCodeFiles) ? requestedMaxCodeFiles : 3));
  const requestedFileTextLength = Number(source.maxFileTextLength || (wantsGitHubCode(question) ? 7000 : 3000));
  const maxFileTextLength = Math.max(1000, Math.min(10000, Number.isFinite(requestedFileTextLength) ? requestedFileTextLength : 3000));
  const requestedRepoTextLength = Number(source.maxRepositoryTextLength || (wantsGitHubCode(question) ? 22000 : 14000));
  const maxRepositoryTextLength = Math.max(5000, Math.min(26000, Number.isFinite(requestedRepoTextLength) ? requestedRepoTextLength : 14000));
  const lines = [
    `GitHub repository: ${owner}/${repo}`,
    metadata?.description ? `Description: ${metadata.description}` : "",
    metadata?.language ? `Primary language: ${metadata.language}` : "",
    metadata?.html_url ? `Repository URL: ${metadata.html_url}` : source.url,
    metadata?.default_branch ? `Default branch: ${metadata.default_branch}` : "",
    ""
  ].filter(Boolean);

  if (parsed.type === "file" && parsed.filePath) {
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${parsed.filePath}`;
    const text = await fetchLimitedText(rawUrl, 14000);
    if (text.trim()) lines.push(`Source file: ${parsed.filePath}`, text.trim());
    return {
      context: source.context || "Public GitHub source file",
      title: source.title || source.label || `${owner}/${repo}/${parsed.filePath}`,
      type: "public GitHub source file",
      url: source.url,
      text: clampText(lines.join("\n"), 14000)
    };
  }

  const tree = await fetchGitHubJson(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/git/trees/${encodeURIComponent(branch)}?recursive=1`);
  const files = Array.isArray(tree?.tree)
    ? tree.tree
      .filter((item) => item.type === "blob" && item.path && githubTextFilePattern.test(item.path) && !githubSkipFilePattern.test(item.path))
      .sort((a, b) => scoreGitHubFile(b.path, question) - scoreGitHubFile(a.path, question))
    : [];

  const readmePath = files.find((file) => /(^|\/)readme\.md$/i.test(file.path))?.path || "README.md";
  const readmeText = await fetchLimitedText(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${readmePath}`, 9000).catch(() => "");
  if (readmeText.trim()) lines.push(`README excerpt from ${readmePath}:`, readmeText.trim(), "");

  if (files.length) {
    lines.push("Repository text/code file list:", ...files.slice(0, 30).map((file) => `- ${file.path}`), "");
  }

  const includeCode = wantsGitHubCode(question);
  const selectedFiles = files
    .filter((file) => !/readme\.md$/i.test(file.path))
    .slice(0, maxCodeFiles);

  for (const file of selectedFiles) {
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${file.path}`;
    const fileText = await fetchLimitedText(rawUrl, maxFileTextLength).catch(() => "");
    if (!fileText.trim()) continue;
    lines.push(`Source file: ${file.path}`, fileText.trim(), "");
  }

  return {
    context: source.context || "Public GitHub repository",
    title: source.title || source.label || `${owner}/${repo}`,
    type: includeCode ? "public GitHub repository and code" : "public GitHub repository",
    url: source.url,
    text: clampText(lines.join("\n"), maxRepositoryTextLength)
  };
}

async function fetchGitHubSourceText(source = {}) {
  const parsed = parseGitHubSourceUrl(source.url || "");
  if (!parsed) return null;
  if (parsed.type === "profile") return fetchGitHubProfileSource(source, parsed);
  return fetchGitHubRepositorySource(source, parsed);
}

async function readLocalSourceText(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return "";
  }
  const localHosts = new Set(["localhost", "127.0.0.1"]);
  if (!localHosts.has(parsed.hostname.toLowerCase())) return "";
  const pathname = decodeURIComponent(parsed.pathname.replace(/^\/+/, ""));
  if (!pathname || pathname.includes("..")) return "";
  const ext = path.extname(pathname).toLowerCase();
  if (![".txt", ".md", ".json", ".csv", ".log", ".xml", ".js", ".mjs", ".css", ".c", ".h", ".cpp", ".hpp", ".py", ".v", ".sv", ".spice", ".cir", ".net", ".asc", ".sch", ".kicad_sch", ".kicad_pcb"].includes(ext)) return "";
  try {
    return await readFile(resolveInsideRoot(pathname), "utf8");
  } catch {
    return "";
  }
}

async function fetchSourceText(source = {}) {
  const url = String(source.url || "");
  if (!url || !sourceLooksTextual(source) || !sourceUrlAllowed(url)) return null;
  if (/github\.com|raw\.githubusercontent\.com/i.test(url)) {
    const githubText = await fetchGitHubSourceText(source);
    if (githubText?.text?.trim()) return githubText;
  }
  const localText = await readLocalSourceText(url);
  if (localText.trim()) {
    return {
      context: source.context || "",
      title: source.title || source.label || url,
      type: source.type || source.kind || "text source",
      url,
      text: clampText(localText.replace(/\s+\n/g, "\n").trim(), 9000)
    };
  }

  try {
    const response = await fetch(url, {
      headers: { "Accept": "text/plain,text/markdown,text/html,application/json;q=0.8,*/*;q=0.1" }
    });
    if (!response.ok) return null;
    const contentType = response.headers.get("Content-Type") || "";
    if (!/text|json|xml|html|markdown/i.test(contentType)) return null;
    const rawText = clampText(await response.text(), 12000);
    const text = /html/i.test(contentType) ? stripHtmlToText(rawText) : rawText;
    if (!text.trim()) return null;
    return {
      context: source.context || "",
      title: source.title || source.label || url,
      type: source.type || source.kind || "public source",
      url,
      text: clampText(text.trim(), 9000)
    };
  } catch {
    return null;
  }
}

async function enrichPortfolioContext(context = {}) {
  const question = String(context.question || "");
  const sources = Array.isArray(context.sourceFetches)
    ? context.sourceFetches.slice(0, 10).map((source) => ({ ...source, question: source.question || question }))
    : [];
  const sourceExcerpts = (await Promise.all(sources.map(fetchSourceText))).filter(Boolean);
  return {
    ...context,
    sourceExcerpts,
    sourceFetchPolicy: "Fetched excerpts are limited to safe text-like same-site, GitHub/raw GitHub, LinkedIn, and public portfolio URLs. GitHub repository links can be expanded into repository metadata, README text, and selected public source files when a question asks for code. PDFs/images are represented by captions, metadata, filenames, and companion text files when available."
  };
}

function cleanConversationHistory(value) {
  if (!Array.isArray(value)) return [];
  return value
    .slice(-8)
    .map((item) => ({
      role: item?.role === "assistant" ? "assistant" : "user",
      content: clampText(item?.content, 1400).trim()
    }))
    .filter((item) => item.content);
}

function extractOpenAiText(data) {
  if (typeof data?.output_text === "string" && data.output_text.trim()) return data.output_text.trim();
  const output = Array.isArray(data?.output) ? data.output : [];
  const chunks = [];

  output.forEach((item) => {
    (item.content || []).forEach((content) => {
      if (typeof content.text === "string" && content.text.trim()) chunks.push(content.text.trim());
    });
  });

  return chunks.join("\n\n").trim();
}

function extractOllamaText(data = {}) {
  if (typeof data.message?.content === "string") return data.message.content.trim();
  if (typeof data.response === "string") return data.response.trim();
  return "";
}

async function callOllamaPortfolioAi({ question, intent, conversation, context, allowWebSearch }) {
  const host = process.env.OLLAMA_HOST || "http://127.0.0.1:11434";
  const model = process.env.OLLAMA_MODEL || "llama3.2";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), Number(process.env.OLLAMA_TIMEOUT_MS || 45000));
  try {
    const response = await fetch(`${host.replace(/\/+$/, "")}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        model,
        stream: false,
        messages: [
          { role: "system", content: portfolioAiInstructions },
          {
            role: "user",
            content: [
              `Visitor question: ${question}`,
              `Question intent: ${intent}`,
              `Web/public lookup requested by browser: ${allowWebSearch ? "yes" : "no"}`,
              "",
              "Recent conversation JSON:",
              clampText(JSON.stringify(conversation, null, 2), 8000),
              "",
              "Portfolio context JSON:",
              clampText(JSON.stringify(context, null, 2), 18000)
            ].join("\n")
          }
        ],
        options: {
          temperature: Number(process.env.OLLAMA_TEMPERATURE || 0.35)
        }
      })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return { ok: false, error: data?.error || `Ollama returned HTTP ${response.status}.` };
    }
    const answer = extractOllamaText(data);
    return answer
      ? { ok: true, answer, model }
      : { ok: false, error: "Ollama did not return an answer." };
  } catch (error) {
    return { ok: false, error: error?.name === "AbortError" ? "Ollama timed out." : "Ollama is not reachable on this machine." };
  } finally {
    clearTimeout(timeout);
  }
}

function ruleBasedConversationAnswer(question = "") {
  const clean = String(question || "").toLowerCase();
  if (/\b(thanks|thank you|appreciate it)\b/.test(clean)) {
    return "You're welcome. What would you like to look at next?";
  }

  if (/\b(who are you|what are you)\b/.test(clean)) {
    return "I am this portfolio's assistant. I can help visitors explore the saved engineering work, explain project details, summarize portfolio evidence, and answer related electronics, embedded, analog, digital, FPGA, ASIC, PCB, and firmware questions.";
  }

  return "Hi, what can I do for you?";
}

function backendAiQuestionLooksCasual(question = "") {
  const clean = String(question || "").trim().toLowerCase();
  return /^(hi|hello|hey|yo|sup|good\s+(morning|afternoon|evening))(\s+[a-z]+){0,3}[\s!.?]*$/.test(clean)
    || /^(thanks|thank\s+you|ok|okay|cool|nice)[\s!.?]*$/.test(clean)
    || /^(what'?s|what\s+is|do\s+you\s+know)\s+my\s+name\??$/.test(clean)
    || /^who\s+am\s+i\??$/.test(clean);
}

function backendAiQuestionHasPortfolioIntent(question = "") {
  const clean = String(question || "").toLowerCase();
  return /\b(maurice|otieno|portfolio|resume|github|linkedin|contact|email|phone|project|projects|repo|repository|repositories|file|files|document|documents|artifact|artifacts|link|links|download|open|show|where|built|created|designed|implemented)\b/.test(clean)
    || /\b(your|his|maurice's)\s+(project|projects|resume|github|linkedin|portfolio|work|email|phone|contact|repo|repository|files?|documents?|links?)\b/.test(clean);
}

function backendAiQuestionIsEngineeringRelated(question = "") {
  const clean = String(question || "").toLowerCase();
  return /\b(op\s*amp|amplifier|analog|mixed\s*signal|adc|dac|filter|vco|oscillator|pwm|charger|rectifier|regulator|buck|boost|ldo|mosfet|bjt|transistor|diode|pcb|schematic|layout|ground|noise|frequency|gain|phase|ltspice|kicad|vivado|verilog|vhdl|fpga|asic|stm32|mcu|microcontroller|embedded|firmware|rtos|i2c|spi|uart|sensor|control|signal|circuit|electronics|hardware|power)\b/.test(clean);
}

function backendAiQuestionLooksConceptual(question = "") {
  const clean = String(question || "").toLowerCase().trim();
  return /^(what|what\s+is|what\s+are|what's|define|explain|describe|how|why|compare|differentiate)\b/.test(clean)
    || /\b(definition|meaning|basics|overview|introduction|difference\s+between|how\s+does|how\s+do|why\s+does|why\s+do)\b/.test(clean);
}

function classifyBackendAiIntent(question = "", requestedIntent = "") {
  const valid = new Set(["general_conversation", "general_engineering", "general_knowledge", "portfolio_specific", "portfolio_and_general"]);
  if (backendAiQuestionLooksCasual(question)) return "general_conversation";
  const hasPortfolioIntent = backendAiQuestionHasPortfolioIntent(question);
  const hasConceptIntent = backendAiQuestionIsEngineeringRelated(question) || backendAiQuestionLooksConceptual(question);
  if (hasPortfolioIntent && hasConceptIntent) return "portfolio_and_general";
  if (hasPortfolioIntent) return "portfolio_specific";
  if (backendAiQuestionIsEngineeringRelated(question)) return "general_engineering";
  if (valid.has(requestedIntent) && requestedIntent !== "portfolio_specific") return requestedIntent;
  return "general_knowledge";
}

function contextForBackendIntent(context = {}, intent = "portfolio_specific") {
  if (["portfolio_specific", "portfolio_and_general"].includes(intent)) return context;
  return {
    intent,
    profile: context.profile || {},
    question: context.question || "",
    sourceFetches: [],
    sourceExcerpts: []
  };
}

function isLocalRequest(request) {
  const address = request.socket.remoteAddress || "";
  return address === "127.0.0.1" || address === "::1" || address === "::ffff:127.0.0.1";
}

async function readJsonFile(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function readRequestJson(request) {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;
    if (size > 60 * 1024 * 1024) {
      throw new Error("Request body is too large.");
    }
    chunks.push(chunk);
  }

  return JSON.parse((Buffer.concat(chunks).toString("utf8") || "{}").replace(/^\uFEFF/, ""));
}

function safeSegment(value, fallback = "item") {
  const segment = String(value || fallback)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return segment || fallback;
}

function safeFileName(value) {
  const parsed = path.parse(String(value || "file"));
  const name = safeSegment(parsed.name, "file");
  const ext = safeSegment(parsed.ext.replace(".", ""), "");
  return ext ? `${name}.${ext}` : name;
}

function resolveInsideRoot(...segments) {
  const target = path.normalize(path.join(root, ...segments));
  if (!target.startsWith(root)) {
    throw new Error("Resolved path is outside the workspace.");
  }
  return target;
}

function resolveInsidePortfolioRoot(...segments) {
  const target = path.resolve(portfolioRoot, ...segments);
  const relative = path.relative(portfolioRoot, target);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error("Resolved path is outside the portfolio workspace.");
  }
  return target;
}

function resolveInsideCompileRoot(...segments) {
  const target = path.resolve(compileRoot, ...segments);
  const relative = path.relative(compileRoot, target);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error("Resolved path is outside the compile workspace.");
  }
  return target;
}

function samePath(left, right) {
  return path.resolve(left).toLowerCase() === path.resolve(right).toLowerCase();
}

async function pathExists(filePath) {
  try {
    await fsAccess(filePath);
    return true;
  } catch {
    return false;
  }
}

function publishAccessError(message, details = "", extra = {}) {
  const error = new Error(message);
  error.code = "PUBLISH_AUTHORIZATION_REQUIRED";
  error.details = details || publishAuthorizationHelp;
  error.publishAccess = {
    authorizationRequired: true,
    help: publishAuthorizationHelp,
    ...extra
  };
  return error;
}

function gitFailureText(error) {
  return [
    error?.stderr,
    error?.stdout,
    error?.message
  ].filter(Boolean).join("\n").trim();
}

function remoteUrlForDisplay(remoteUrl = "") {
  return String(remoteUrl || "")
    .replace(/^https:\/\/([^:@/]+):[^@/]+@/i, "https://$1:***@")
    .replace(/^https:\/\/[^@/]+@/i, "https://");
}

function parseGitHubRemote(remoteUrl = "") {
  const trimmed = String(remoteUrl || "").trim();
  const sshMatch = trimmed.match(/^git@github\.com:([^/]+)\/(.+?)(?:\.git)?$/i);
  if (sshMatch) return { owner: sshMatch[1], repo: sshMatch[2].replace(/\.git$/i, "") };

  try {
    const parsed = new URL(trimmed.replace(/^git\+/, ""));
    if (!/github\.com$/i.test(parsed.hostname)) return null;
    const parts = parsed.pathname.replace(/^\/+/, "").split("/");
    if (parts.length < 2) return null;
    return { owner: parts[0], repo: parts[1].replace(/\.git$/i, "") };
  } catch {
    return null;
  }
}

function remoteUrlWithGitHubUsername(remoteUrl = "", username = "") {
  const trimmed = String(remoteUrl || "").trim();
  if (!trimmed || /^git@github\.com:/i.test(trimmed)) return trimmed;
  try {
    const parsed = new URL(trimmed.replace(/^git\+/, ""));
    if (parsed.protocol !== "https:" || parsed.hostname.toLowerCase() !== "github.com") return trimmed;
    const remote = parseGitHubRemote(trimmed);
    const preferredUsername = String(username || remote?.owner || "").trim();
    if (!preferredUsername) return trimmed;
    parsed.username = preferredUsername;
    parsed.password = "";
    return parsed.toString();
  } catch {
    return trimmed;
  }
}

async function configureGitCredentialPreference(remoteUrl = "", username = "") {
  const parsedRemote = parseGitHubRemote(remoteUrl);
  const preferredUsername = String(username || parsedRemote?.owner || "").trim();
  try {
    await runPublishGit(["config", "--local", "credential.useHttpPath", "true"]);
  } catch {
    // The publish check will surface a useful Git error if config is unavailable.
  }
  if (!preferredUsername) return;
  try {
    await runPublishGit(["config", "--local", "credential.username", preferredUsername]);
  } catch {
    // Username preference is helpful but not mandatory for publishing.
  }
}

function validatePublishRemoteUrl(value = "") {
  const remoteUrl = String(value || "").trim();
  if (!remoteUrl) return "";
  if (/^git@github\.com:[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+(?:\.git)?$/i.test(remoteUrl)) return remoteUrl;
  try {
    const parsed = new URL(remoteUrl);
    if (parsed.protocol !== "https:" || parsed.hostname.toLowerCase() !== "github.com") {
      throw new Error("Only GitHub HTTPS repository URLs are supported by the guided setup.");
    }
    const parts = parsed.pathname.replace(/^\/+/, "").split("/");
    if (parts.length < 2 || !parts[0] || !parts[1]) {
      throw new Error("GitHub repository URL must include owner and repository name.");
    }
    return `https://github.com/${parts[0]}/${parts[1].replace(/\.git$/i, "")}.git`;
  } catch (error) {
    if (error.message?.includes("Only GitHub") || error.message?.includes("owner")) throw error;
    throw new Error("Enter a GitHub repository URL such as https://github.com/USERNAME/USERNAME.github.io.git.");
  }
}

function validateCustomDomain(value = "") {
  const domain = String(value || "").trim().toLowerCase();
  if (!domain) return "";
  if (!/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i.test(domain)) {
    throw new Error("Custom domain must look like example.com or portfolio.example.com.");
  }
  return domain;
}

function compareVersions(left = "", right = "") {
  const leftParts = String(left || "0").split(/[.-]/).map((part) => Number.parseInt(part, 10) || 0);
  const rightParts = String(right || "0").split(/[.-]/).map((part) => Number.parseInt(part, 10) || 0);
  const length = Math.max(leftParts.length, rightParts.length);
  for (let index = 0; index < length; index += 1) {
    const delta = (leftParts[index] || 0) - (rightParts[index] || 0);
    if (delta !== 0) return delta;
  }
  return 0;
}

async function bumpPublishedAssetVersions(baseRoot = portfolioRoot) {
  let html = "";
  const indexPath = path.join(baseRoot, "index.html");
  try {
    html = await readFile(indexPath, "utf8");
  } catch {
    return false;
  }
  const version = Date.now().toString();
  const next = html
    .replace(/(href="styles\.css)(?:\?v=[^"]*)?"/g, `$1?v=${version}"`)
    .replace(/(src="script\.js)(?:\?v=[^"]*)?"/g, `$1?v=${version}"`)
    .replace(/(src="electronics-search\.js)(?:\?v=[^"]*)?"/g, `$1?v=${version}"`);
  if (next === html) return false;
  await writeFile(indexPath, next, "utf8");
  return true;
}

async function workspaceHasCompatibleSiteFiles(baseRoot = portfolioRoot) {
  for (const fileName of ["index.html", "styles.css", "script.js"]) {
    try {
      await readFile(path.join(baseRoot, fileName));
    } catch {
      return false;
    }
  }
  return true;
}

async function getPublishTargetInfo() {
  const info = {
    workspace: root,
    portfolioWorkspace: portfolioRoot,
    separatedWorkspace: !samePath(root, portfolioRoot),
    defaultRepository: defaultSiteRepository,
    gitBacked: false,
    compatible: await workspaceHasCompatibleSiteFiles(),
    remote: "",
    branch: "",
    repository: "",
    customDomain: ""
  };

  try {
    info.gitBacked = (await runPublishGit(["rev-parse", "--is-inside-work-tree"])).stdout.trim() === "true";
  } catch {
    return info;
  }

  try {
    info.remote = remoteUrlForDisplay((await runPublishGit(["remote", "get-url", "origin"])).stdout.trim());
  } catch {
    info.remote = "";
  }

  try {
    info.branch = (await runPublishGit(["branch", "--show-current"])).stdout.trim();
  } catch {
    info.branch = "";
  }

  const parsedRemote = parseGitHubRemote(info.remote);
  info.repository = parsedRemote ? `${parsedRemote.owner}/${parsedRemote.repo}` : info.remote;

  try {
    info.customDomain = (await readFile(resolveInsidePortfolioRoot("CNAME"), "utf8")).trim();
  } catch {
    info.customDomain = "";
  }

  const accessShape = {
    branch: info.branch,
    remote: info.remote,
    repository: info.repository
  };
  const cached = await readPublishAuthCache();
  if (publishAuthCacheIsFresh(cached, accessShape)) {
    info.authorizationChecked = true;
    info.authorizationCached = true;
    info.checkedAt = cached.checkedAt;
    info.expiresAt = publishAuthCacheExpiresAt(cached);
    info.extendedTrust = Boolean(cached.extendedTrust);
    info.successCountLastWeek = cached.successCountLastWeek || 0;
    info.trustDays = cached.trustDays || (cached.extendedTrust ? 30 : 1);
  } else {
    info.authorizationChecked = false;
    info.authorizationCached = false;
    info.checkedAt = "";
    info.expiresAt = "";
    info.extendedTrust = false;
    info.successCountLastWeek = cached?.successCountLastWeek || 0;
    info.trustDays = 0;
  }

  return info;
}

async function runGit(args, options = {}) {
  let lastError = null;
  for (const candidate of gitCandidates) {
    try {
      const result = await execFileAsync(candidate, args, {
        cwd: options.cwd || root,
        maxBuffer: options.maxBuffer || 10 * 1024 * 1024,
        timeout: options.timeout || 0,
        windowsHide: options.windowsHide !== false
      });
      return { ...result, git: candidate };
    } catch (error) {
      lastError = error;
      if (error.code === "ENOENT") continue;
      throw error;
    }
  }
  throw lastError || new Error("Git executable was not found.");
}

async function runPublishGit(args, options = {}) {
  return runGit(args, { ...options, cwd: options.cwd || portfolioRoot });
}

async function runOptionalCommand(command, args = [], options = {}) {
  try {
    const result = await execFileAsync(command, args, {
      cwd: options.cwd || root,
      maxBuffer: options.maxBuffer || 2 * 1024 * 1024,
      timeout: options.timeout || 15000,
      windowsHide: options.windowsHide !== false
    });
    return { ok: true, stdout: result.stdout || "", stderr: result.stderr || "" };
  } catch (error) {
    return {
      ok: false,
      stdout: error.stdout || "",
      stderr: error.stderr || "",
      error: error.message || String(error)
    };
  }
}

async function getGitStatus() {
  let git = { ok: false, stdout: "", stderr: "", error: "Git for Windows was not found." };
  try {
    const gitResult = await runGit(["--version"]);
    git = { ok: true, stdout: gitResult.stdout || "", stderr: gitResult.stderr || "" };
  } catch (error) {
    git = { ok: false, stdout: error.stdout || "", stderr: error.stderr || "", error: error.message || "Git for Windows was not found." };
  }
  let credentialManager = { ok: false, version: "", error: "Git Credential Manager was not found." };
  if (git.ok) {
    let gcm = { ok: false, stdout: "", stderr: "", error: "Git Credential Manager was not found." };
    try {
      const gcmResult = await runGit(["credential-manager", "--version"]);
      gcm = { ok: true, stdout: gcmResult.stdout || "", stderr: gcmResult.stderr || "" };
    } catch (error) {
      gcm = { ok: false, stdout: error.stdout || "", stderr: error.stderr || "", error: error.message || "Git Credential Manager was not found." };
    }
    credentialManager = {
      ok: gcm.ok,
      version: (gcm.stdout || gcm.stderr || "").trim(),
      error: gcm.ok ? "" : (gcm.stderr || gcm.error || "Git Credential Manager was not found.")
    };
  }

  return {
    git: {
      ok: git.ok,
      version: (git.stdout || git.stderr || "").trim(),
      error: git.ok ? "" : (git.stderr || git.error || "Git for Windows was not found.")
    },
    credentialManager,
    nodeRuntime: {
      ok: true,
      version: process.versions.node,
      bundled: true,
      note: "Bundled inside the desktop app. No manual Node.js install is required."
    },
    pnpm: {
      ok: true,
      required: false,
      note: "pnpm is only needed by developers building the installer from source."
    },
    app: {
      version: process.env.OMB_APP_VERSION || packageJson.version || "0.0.0",
      desktopApp: process.env.OMB_DESKTOP_APP === "1"
    }
  };
}

async function publishPathIsStageable(relativePath) {
  try {
    await fsAccess(resolveInsidePortfolioRoot(relativePath));
    return true;
  } catch {
    // Missing files can still be stageable if Git already tracks them and they were deleted.
  }

  try {
    await runPublishGit(["ls-files", "--error-unmatch", "--", relativePath]);
    return true;
  } catch {
    return false;
  }
}

async function stageablePublishPaths(pathsToCheck) {
  const stageable = [];
  for (const relativePath of pathsToCheck) {
    if (await publishPathIsStageable(relativePath)) stageable.push(relativePath);
  }
  return stageable;
}

async function runGitWithInput(args, input, options = {}) {
  let lastError = null;
  for (const candidate of gitCandidates) {
    try {
      return await new Promise((resolve, reject) => {
        const child = spawn(candidate, args, {
          cwd: options.cwd || portfolioRoot,
          windowsHide: true,
          stdio: ["pipe", "pipe", "pipe"]
        });
        let stdout = "";
        let stderr = "";

        child.stdout.on("data", (chunk) => {
          stdout += chunk.toString();
        });
        child.stderr.on("data", (chunk) => {
          stderr += chunk.toString();
        });
        child.once("error", reject);
        child.once("close", (code) => {
          if (code === 0) {
            resolve({ stdout, stderr, git: candidate });
            return;
          }
          const error = new Error(stderr || stdout || `Git exited with code ${code}.`);
          error.stdout = stdout;
          error.stderr = stderr;
          error.code = code;
          error.git = candidate;
          reject(error);
        });

        child.stdin.end(input);
      });
    } catch (error) {
      lastError = error;
      if (error.code === "ENOENT") continue;
      throw error;
    }
  }
  throw lastError || new Error("Git executable was not found.");
}

async function storeGitCredentials(remoteUrl, username, password) {
  const cleanUsername = String(username || "").trim();
  const cleanPassword = String(password || "");
  if (!cleanUsername && !cleanPassword) return { stored: false };
  if (!cleanUsername || !cleanPassword) {
    throw new Error("Both username and password/token are required when credentials are provided.");
  }

  let parsed = null;
  try {
    parsed = new URL(remoteUrl);
  } catch {
    throw new Error("Username and password/token credentials require a GitHub HTTPS repository URL.");
  }

  if (parsed.protocol !== "https:" || parsed.hostname.toLowerCase() !== "github.com") {
    throw new Error("Username and password/token credentials require a GitHub HTTPS repository URL.");
  }

  const pathName = parsed.pathname.replace(/^\/+/, "");
  await configureGitCredentialPreference(remoteUrl, cleanUsername);
  const credentialInput = [
    "protocol=https",
    "host=github.com",
    `path=${pathName}`,
    `username=${cleanUsername}`,
    `password=${cleanPassword}`,
    ""
  ].join("\n");
  await runGitWithInput(["credential", "approve"], credentialInput, { cwd: portfolioRoot });
  return { stored: true, username: cleanUsername };
}

function validateCredentialPair(username, password) {
  const cleanUsername = String(username || "").trim();
  const cleanPassword = String(password || "");
  if ((cleanUsername && !cleanPassword) || (!cleanUsername && cleanPassword)) {
    throw new Error("Both username and password/token are required when credentials are provided.");
  }
  return { cleanUsername, cleanPassword };
}

function normalizeGitBranchName(value = "") {
  const branch = String(value || "").trim();
  if (
    !branch ||
    branch.length > 180 ||
    branch.includes("..") ||
    branch.endsWith(".") ||
    branch.includes("@{") ||
    /[\\:\s~^?*\[\]\x00-\x1f]/.test(branch) ||
    branch.startsWith("/") ||
    branch.endsWith("/") ||
    branch.includes("//")
  ) {
    return "";
  }
  return branch;
}

async function detectRemoteDefaultBranch(remoteUrl = "") {
  if (!remoteUrl) return "";
  try {
    const result = await runPublishGit(["ls-remote", "--symref", remoteUrl, "HEAD"], { timeout: 45000 });
    const match = String(result.stdout || "").match(/^ref:\s+refs\/heads\/(.+?)\s+HEAD$/m);
    return normalizeGitBranchName(match?.[1] || "");
  } catch {
    return "";
  }
}

async function originRemoteExists() {
  try {
    await runPublishGit(["remote", "get-url", "origin"]);
    return true;
  } catch {
    return false;
  }
}

async function setOriginRemote(remoteUrl, username = "") {
  const preferredRemoteUrl = remoteUrlWithGitHubUsername(remoteUrl, username);
  if (await originRemoteExists()) {
    await runPublishGit(["remote", "set-url", "origin", preferredRemoteUrl]);
  } else {
    await runPublishGit(["remote", "add", "origin", preferredRemoteUrl]);
  }
  await configureGitCredentialPreference(preferredRemoteUrl, username);
}

async function checkoutPublishBranch(branch) {
  const cleanBranch = normalizeGitBranchName(branch) || "main";
  const current = (await runPublishGit(["branch", "--show-current"])).stdout.trim();
  if (current === cleanBranch) return cleanBranch;
  try {
    await runPublishGit(["checkout", cleanBranch]);
  } catch {
    await runPublishGit(["checkout", "-B", cleanBranch]);
  }
  return cleanBranch;
}

async function verifyPublishWriteAccess(access = {}) {
  const checkBranch = `omb-auth-check-${safeSegment(os.hostname(), "device")}-${Date.now()}`;
  try {
    await runPublishGit(["push", "--dry-run", "origin", `HEAD:refs/heads/${checkBranch}`], {
      timeout: 60 * 1000
    });
    return {
      method: "temporary-dry-run-ref",
      ref: checkBranch
    };
  } catch (error) {
    throw publishAccessError(
      "GitHub authorization is required before this website can be changed.",
      gitFailureText(error),
      access
    );
  }
}

async function ensurePublishHeadForWriteCheck() {
  try {
    await runPublishGit(["rev-parse", "--verify", "HEAD"]);
    return { created: false };
  } catch {
    await runPublishGit([
      "-c",
      "user.name=OMB Portfolio Builder",
      "-c",
      "user.email=omb-builder@localhost",
      "commit",
      "--allow-empty",
      "-m",
      "Initialize publish authorization check"
    ]);
    return { created: true };
  }
}

async function synchronizePublishBranchFromRemote(branch, access = {}) {
  const cleanBranch = normalizeGitBranchName(branch) || "main";
  try {
    const remoteBranch = await runPublishGit(["ls-remote", "--heads", "origin", cleanBranch], {
      timeout: 45 * 1000
    });
    if (!String(remoteBranch.stdout || "").trim()) {
      return {
        branch: cleanBranch,
        remoteBranchExists: false,
        synchronized: false
      };
    }

    await runPublishGit(["fetch", "origin", cleanBranch], { timeout: 2 * 60 * 1000 });
    await checkoutPublishBranch(cleanBranch);
    await runPublishGit(["reset", "--hard", `origin/${cleanBranch}`], { timeout: 60 * 1000 });
    return {
      branch: cleanBranch,
      remoteBranchExists: true,
      synchronized: true
    };
  } catch (error) {
    throw publishAccessError(
      "The selected website target could not be synchronized from GitHub.",
      gitFailureText(error),
      { ...access, branch: cleanBranch }
    );
  }
}

async function capturePublishTargetState() {
  const snapshot = {
    branch: "",
    customDomainExists: false,
    customDomainText: "",
    remote: "",
    remoteExists: false
  };
  try {
    snapshot.remote = (await runPublishGit(["remote", "get-url", "origin"])).stdout.trim();
    snapshot.remoteExists = true;
  } catch {
    snapshot.remote = "";
    snapshot.remoteExists = false;
  }
  try {
    snapshot.branch = (await runPublishGit(["branch", "--show-current"])).stdout.trim();
  } catch {
    snapshot.branch = "";
  }
  try {
    snapshot.customDomainText = await readFile(resolveInsidePortfolioRoot("CNAME"), "utf8");
    snapshot.customDomainExists = true;
  } catch {
    snapshot.customDomainText = "";
    snapshot.customDomainExists = false;
  }
  return snapshot;
}

async function restorePublishTargetState(snapshot = {}) {
  try {
    if (snapshot.remoteExists && snapshot.remote) {
      await setOriginRemote(snapshot.remote);
    } else if (await originRemoteExists()) {
      await runPublishGit(["remote", "remove", "origin"]);
    }
  } catch {
    // Best-effort rollback; preserve the original error for the caller.
  }
  try {
    if (snapshot.branch) await checkoutPublishBranch(snapshot.branch);
  } catch {
    // Best-effort rollback; preserve the original error for the caller.
  }
  try {
    if (snapshot.customDomainExists) {
      await writeFile(resolveInsidePortfolioRoot("CNAME"), snapshot.customDomainText, "utf8");
    } else {
      await rm(resolveInsidePortfolioRoot("CNAME"), { force: true });
    }
  } catch {
    // Best-effort rollback; preserve the original error for the caller.
  }
}

async function writeTargetCustomDomain(domain, customDomainProvided) {
  const targetPaths = [resolveInsidePortfolioRoot("CNAME")];
  if (!samePath(root, portfolioRoot)) targetPaths.push(resolveInsideRoot("CNAME"));
  if (customDomainProvided && domain) {
    for (const targetPath of targetPaths) await writeFile(targetPath, `${domain}\n`, "utf8");
  } else if (customDomainProvided && !domain) {
    for (const targetPath of targetPaths) await rm(targetPath, { force: true });
  }
}

async function ensureGitRepository() {
  await mkdir(portfolioRoot, { recursive: true });
  try {
    const insideWorkTree = (await runPublishGit(["rev-parse", "--is-inside-work-tree"])).stdout.trim();
    if (insideWorkTree === "true") return;
  } catch {
    await runPublishGit(["init"]);
  }

  const branch = (await runPublishGit(["branch", "--show-current"])).stdout.trim();
  if (!branch) {
    await runPublishGit(["checkout", "-B", "main"]);
  }
}

async function configurePublishTarget(options = {}) {
  const {
    repositoryUrl = "",
    customDomain = "",
    authUsername = "",
    authPassword = ""
  } = options;
  const customDomainProvided = Object.prototype.hasOwnProperty.call(options, "customDomain");
  const remoteUrl = validatePublishRemoteUrl(repositoryUrl);
  const domain = validateCustomDomain(customDomain);
  validateCredentialPair(authUsername, authPassword);

  await ensureGitRepository();

  if (remoteUrl) {
    await setOriginRemote(remoteUrl);
    const defaultBranch = await detectRemoteDefaultBranch(remoteUrl);
    if (defaultBranch) await checkoutPublishBranch(defaultBranch);
  }

  await writeTargetCustomDomain(domain, customDomainProvided);

  const currentRemote = remoteUrl || (await getPublishTargetInfo()).remote;
  const credentials = await storeGitCredentials(currentRemote, authUsername, authPassword);
  const target = await getPublishTargetInfo();
  return {
    ...target,
    credentialsStored: credentials.stored,
    credentialUsername: credentials.username || ""
  };
}

async function readPublishAuthCache() {
  try {
    return JSON.parse(await readFile(publishAuthCachePath, "utf8"));
  } catch {
    return null;
  }
}

async function writePublishAuthCache(access = {}) {
  const previousCache = await readPublishAuthCache();
  const checkedAt = new Date();
  const checkedAtMs = checkedAt.getTime();
  const sameTarget = previousCache
    && previousCache.remote === access.remote
    && previousCache.branch === access.branch
    && previousCache.repository === access.repository;
  const previousHistory = sameTarget && Array.isArray(previousCache.successHistory)
    ? previousCache.successHistory
    : [];
  const successTimestamps = [
    ...previousHistory
      .map((entry) => parsePublishAuthTimestamp(entry))
      .filter((timestamp) => Number.isFinite(timestamp))
      .filter((timestamp) => checkedAtMs - timestamp < publishAuthExtendedTtlMs),
    checkedAtMs
  ];
  const successHistory = successTimestamps.map((timestamp) => new Date(timestamp).toISOString());
  const successCountLastWeek = successTimestamps
    .filter((timestamp) => checkedAtMs - timestamp < publishAuthHistoryWindowMs)
    .length;
  const extendedTrust = successCountLastWeek > publishAuthExtendedThreshold;
  const ttlMs = extendedTrust ? publishAuthExtendedTtlMs : publishAuthCacheTtlMs;
  const cache = {
    branch: access.branch || "",
    checkedAt: checkedAt.toISOString(),
    expiresAt: new Date(checkedAtMs + ttlMs).toISOString(),
    extendedTrust,
    remote: access.remote || "",
    repository: access.repository || "",
    scope: publishAuthCacheScope(),
    successCountLastWeek,
    successHistory,
    trustDays: extendedTrust ? 30 : 1
  };
  await writeFile(publishAuthCachePath, `${JSON.stringify(cache, null, 2)}\n`, "utf8");
  await chmod(publishAuthCachePath, 0o600).catch(() => {});
  return cache;
}

function publishAuthCacheScope() {
  let username = process.env.USERNAME || process.env.USER || "";
  try {
    username = os.userInfo().username || username;
  } catch {
    // Environment username is a sufficient fallback for cache scoping.
  }
  return createHash("sha256")
    .update([
      os.hostname(),
      username,
      root,
      portfolioRoot
    ].join("\n"))
    .digest("hex");
}

function parsePublishAuthTimestamp(value = "") {
  const direct = Date.parse(String(value || ""));
  if (Number.isFinite(direct)) return direct;
  const normalized = String(value || "").replace(/(\.\d{3})\d+(Z|[+-]\d{2}:?\d{2})$/i, "$1$2");
  return Date.parse(normalized);
}

function publishAuthCacheExpiresAt(cache) {
  const explicitExpiresAt = parsePublishAuthTimestamp(cache?.expiresAt || "");
  if (Number.isFinite(explicitExpiresAt)) return new Date(explicitExpiresAt).toISOString();
  const checkedAt = parsePublishAuthTimestamp(cache?.checkedAt || "");
  if (!Number.isFinite(checkedAt)) return "";
  return new Date(checkedAt + publishAuthCacheTtlMs).toISOString();
}

function publishAuthCacheIsFresh(cache, access) {
  if (!cache || !access) return false;
  if (cache.remote !== access.remote || cache.branch !== access.branch || cache.repository !== access.repository) return false;
  if (cache.scope !== publishAuthCacheScope()) return false;
  const expiresAt = Date.parse(publishAuthCacheExpiresAt(cache));
  if (!Number.isFinite(expiresAt)) return false;
  return Date.now() < expiresAt;
}

async function assertPublishAccess(options = {}) {
  let insideWorkTree = "";
  try {
    insideWorkTree = (await runPublishGit(["rev-parse", "--is-inside-work-tree"])).stdout.trim();
  } catch (error) {
    throw publishAccessError(
      "This workspace is not connected to a Git repository.",
      gitFailureText(error),
      { repository: defaultSiteRepository }
    );
  }

  if (insideWorkTree !== "true") {
    throw publishAccessError(
      "This workspace is local-only and cannot publish yet.",
      "Clone or associate a GitHub Pages/static-site repository before applying to site.",
      { repository: defaultSiteRepository }
    );
  }

  let remote = "";
  let branch = "";
  try {
    remote = (await runPublishGit(["remote", "get-url", "origin"])).stdout.trim();
    branch = (await runPublishGit(["branch", "--show-current"])).stdout.trim();
  } catch (error) {
    throw publishAccessError(
      "A publish remote or branch is missing.",
      gitFailureText(error),
      { repository: defaultSiteRepository }
    );
  }

  if (!remote || !branch) {
    throw publishAccessError(
      "A publish remote or branch is missing.",
      "Set the origin remote and use a named branch before applying to site.",
      { remote: remoteUrlForDisplay(remote), branch }
    );
  }

  const parsedRemoteBeforePreference = parseGitHubRemote(remote);
  const preferredRemote = remoteUrlWithGitHubUsername(remote, parsedRemoteBeforePreference?.owner || "");
  if (preferredRemote && preferredRemote !== remote) {
    await setOriginRemote(preferredRemote, parsedRemoteBeforePreference?.owner || "");
    remote = preferredRemote;
  } else {
    await configureGitCredentialPreference(remote, parsedRemoteBeforePreference?.owner || "");
  }

  if (options.requireCompatible !== false && !await workspaceHasCompatibleSiteFiles()) {
    throw publishAccessError(
      "This repository does not look like a compatible static portfolio website.",
      "The workspace must include index.html, styles.css, and script.js before it can be used as a publish target.",
      { remote: remoteUrlForDisplay(remote), branch }
    );
  }

  const parsedRemote = parseGitHubRemote(remote);
  const repository = parsedRemote ? `${parsedRemote.owner}/${parsedRemote.repo}` : remoteUrlForDisplay(remote);

  const access = {
    branch,
    remote: remoteUrlForDisplay(remote),
    repository,
    authorizationChecked: false
  };

  const cached = await readPublishAuthCache();
  if (!options.force && publishAuthCacheIsFresh(cached, access)) {
    return {
      ...access,
      authorizationCached: true,
      authorizationChecked: true,
      checkedAt: cached.checkedAt,
      expiresAt: publishAuthCacheExpiresAt(cached),
      extendedTrust: Boolean(cached.extendedTrust),
      successCountLastWeek: cached.successCountLastWeek || 0,
      trustDays: cached.trustDays || (cached.extendedTrust ? 30 : 1)
    };
  }

  const remoteSync = await synchronizePublishBranchFromRemote(branch, access);
  const localHead = await ensurePublishHeadForWriteCheck();
  const writeCheck = await verifyPublishWriteAccess(access);

  const authCache = await writePublishAuthCache(access);
  return {
    ...access,
    remoteSync,
    localHead,
    writeCheck,
    authorizationChecked: true,
    authorizationCached: false,
    checkedAt: authCache.checkedAt,
    expiresAt: authCache.expiresAt,
    extendedTrust: Boolean(authCache.extendedTrust),
    successCountLastWeek: authCache.successCountLastWeek || 0,
    trustDays: authCache.trustDays || 1
  };
}

async function syncFromPublishTarget() {
  const publishAccess = await assertPublishAccess({ requireCompatible: false });
  const branch = publishAccess.branch || "main";
  const remote = (await runPublishGit(["remote", "get-url", "origin"])).stdout.trim();
  const importRoot = await mkdtemp(path.join(os.tmpdir(), "omb-publish-target-"));
  const cloneRoot = path.join(importRoot, "target");
  const importPaths = [
    "projects.json",
    "assets",
    "docs",
    "Backgrounds",
    "CNAME",
    ".nojekyll",
    "robots.txt",
    "sitemap.xml"
  ];

  try {
    await runGit(["clone", "--depth", "1", "--branch", branch, remote, cloneRoot], {
      cwd: importRoot,
      timeout: 3 * 60 * 1000
    });

    const availablePaths = [];
    for (const importPath of importPaths) {
      try {
        await fsAccess(path.join(cloneRoot, importPath));
        availablePaths.push(importPath);
      } catch {
        // Optional path is absent in the selected site repository.
      }
    }

    if (!availablePaths.includes("projects.json")) {
      throw publishAccessError(
        "The selected repository does not contain a projects.json portfolio catalog.",
        "The target repository must contain a compatible OMB Portfolio Builder catalog before it can be imported.",
        publishAccess
      );
    }

    const backupRoot = resolveInsideRoot(
      ".omb-backups",
      `load-target-${new Date().toISOString().replace(/[:.]/g, "-")}`
    );
    await mkdir(backupRoot, { recursive: true });

    for (const importPath of availablePaths) {
      const sourcePath = path.join(cloneRoot, importPath);
      const targetPath = resolveInsideRoot(importPath);
      try {
        await fsAccess(targetPath);
        await cp(targetPath, path.join(backupRoot, importPath), { recursive: true, force: true });
        await rm(targetPath, { recursive: true, force: true });
      } catch {
        // Nothing local to back up for this path.
      }
      await cp(sourcePath, targetPath, { recursive: true, force: true });
    }

    const importedCatalog = await readFile(path.join(cloneRoot, "projects.json"), "utf8");
    await writeFile(draftPath, importedCatalog, "utf8");
    const portfolioSync = await syncPortfolioPublishFiles({ removeMissing: false });

    return {
      ...publishAccess,
      imported: availablePaths,
      portfolioSync,
      backup: path.relative(root, backupRoot),
      draftUpdated: true
    };
  } finally {
    await rm(importRoot, { recursive: true, force: true });
  }
}

async function authenticateGitHubForTarget(options = {}) {
  const {
    repositoryUrl = "",
    customDomain = "",
    authUsername = "",
    authPassword = ""
  } = options;
  const customDomainProvided = Object.prototype.hasOwnProperty.call(options, "customDomain");
  const remoteUrl = validatePublishRemoteUrl(repositoryUrl);
  const domain = validateCustomDomain(customDomain);
  const credentials = validateCredentialPair(authUsername, authPassword);
  if (!remoteUrl) {
    throw publishAccessError(
      "A GitHub repository URL is required before authentication.",
      "Enter the GitHub Pages or compatible static-site repository URL, then click Authenticate target.",
      await getPublishTargetInfo()
    );
  }

  await ensureGitRepository();
  const snapshot = await capturePublishTargetState();

  try {
    await setOriginRemote(remoteUrl, credentials.cleanUsername || parseGitHubRemote(remoteUrl)?.owner || "");
    const status = await getGitStatus();
    const preliminaryTarget = await getPublishTargetInfo();
    if (!status.git.ok) {
      throw publishAccessError(
        "Git for Windows is required for publishing.",
        "Install Git for Windows, then reopen the builder and authenticate again.",
        { ...preliminaryTarget, system: status }
      );
    }

    const targetBranch = await detectRemoteDefaultBranch(remoteUrl) || "main";
    await checkoutPublishBranch(targetBranch);

    const targetBeforeAuth = await getPublishTargetInfo();
    const cached = await readPublishAuthCache();
    const cachedAccess = {
      branch: targetBeforeAuth.branch,
      remote: targetBeforeAuth.remote,
      repository: targetBeforeAuth.repository
    };
    if (!credentials.cleanUsername && publishAuthCacheIsFresh(cached, cachedAccess)) {
      await writeTargetCustomDomain(domain, customDomainProvided);
      const target = await getPublishTargetInfo();
      return {
        ...cachedAccess,
        branch: target.branch || cachedAccess.branch,
        authorizationCached: true,
        authorizationChecked: true,
        checkedAt: cached.checkedAt,
        expiresAt: publishAuthCacheExpiresAt(cached),
        extendedTrust: Boolean(cached.extendedTrust),
        successCountLastWeek: cached.successCountLastWeek || 0,
        trustDays: cached.trustDays || (cached.extendedTrust ? 30 : 1),
        credentialsStored: false,
        credentialUsername: "",
        system: status,
        target
      };
    }

    if (!status.credentialManager.ok && !credentials.cleanUsername) {
      throw publishAccessError(
        "Git Credential Manager is required for guided GitHub sign-in.",
        "Install or repair Git for Windows with Git Credential Manager enabled, or provide a GitHub username and personal access token.",
        { ...targetBeforeAuth, system: status }
      );
    }

    const storedCredentials = await storeGitCredentials(remoteUrl, authUsername, authPassword);
    if (!storedCredentials.stored) {
      await runGit(["credential-manager", "github", "login"], {
        cwd: portfolioRoot,
        timeout: 5 * 60 * 1000,
        windowsHide: false
      });
    }

    const access = await assertPublishAccess({ force: true, requireCompatible: false });
    await writeTargetCustomDomain(domain, customDomainProvided);
    const target = await getPublishTargetInfo();
    return {
      ...access,
      branch: target.branch || access.branch,
      credentialsStored: storedCredentials.stored,
      credentialUsername: storedCredentials.username || "",
      system: await getGitStatus(),
      target
    };
  } catch (error) {
    await restorePublishTargetState(snapshot);
    throw error;
  }
}

async function installGitForWindows() {
  const winget = await runOptionalCommand("winget", ["--version"]);
  const downloadUrl = "https://git-scm.com/download/win";
  if (!winget.ok) {
    return {
      launched: false,
      downloadUrl,
      message: "winget was not found. Open the Git for Windows download page and install Git with Git Credential Manager enabled."
    };
  }

  const child = spawn("winget", ["install", "--id", "Git.Git", "-e", "--source", "winget"], {
    detached: true,
    shell: true,
    stdio: "ignore",
    windowsHide: false
  });
  child.unref();
  return {
    launched: true,
    downloadUrl,
    message: "The Git for Windows installer was launched through winget. Follow the installer prompts, then reopen the builder."
  };
}

async function getUpdateInfo() {
  const currentVersion = process.env.OMB_APP_VERSION || packageJson.version || "0.0.0";
  const owner = "otienomaurice";
  const repo = "omb-portfolio-builder";
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`, {
      headers: { "Accept": "application/vnd.github+json", "User-Agent": "OMB-Portfolio-Builder" }
    });
    if (!response.ok) throw new Error(`GitHub returned ${response.status}.`);
    const release = await response.json();
    const latestVersion = String(release.tag_name || "").replace(/^builder-v/i, "");
    const installer = (release.assets || []).find((asset) => /Setup-.*\.exe$/i.test(asset.name));
    const portable = (release.assets || []).find((asset) => /Portable-.*\.exe$/i.test(asset.name));
    const updateBlocked = blockedAppUpdateVersions.has(latestVersion);
    return {
      ok: true,
      currentVersion,
      latestVersion,
      updateAvailable: !updateBlocked && compareVersions(latestVersion, currentVersion) > 0,
      updateBlocked,
      blockedReason: updateBlocked
        ? `Builder ${latestVersion} is skipped because its installer can hang while running the old uninstaller during in-app updates. Wait for builder 0.2.17 or newer, then run Update again.`
        : "",
      releaseUrl: release.html_url || "",
      installerUrl: installer?.browser_download_url || "",
      installerName: installer?.name || "",
      portableUrl: portable?.browser_download_url || ""
    };
  } catch (error) {
    return {
      ok: false,
      currentVersion,
      latestVersion: currentVersion,
      updateAvailable: false,
      error: error.message || "Could not check for updates."
    };
  }
}

async function getBuilderReleaseDownloadReport() {
  const owner = "otienomaurice";
  const repo = "omb-portfolio-builder";
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`, {
    headers: { "Accept": "application/vnd.github+json", "User-Agent": "OMB-Portfolio-Builder" }
  });
  if (!response.ok) throw new Error(`GitHub returned ${response.status}.`);
  const release = await response.json();
  const assets = (release.assets || []).map((asset) => ({
    name: asset.name || "",
    downloadCount: Number(asset.download_count || 0),
    sizeBytes: Number(asset.size || 0),
    updatedAt: asset.updated_at || "",
    url: asset.browser_download_url || ""
  }));
  return {
    releaseName: release.name || release.tag_name || "latest",
    releaseTag: release.tag_name || "",
    releaseUrl: release.html_url || "",
    totalDownloads: assets.reduce((total, asset) => total + asset.downloadCount, 0),
    assets
  };
}

async function getSecurityReport() {
  const [downloadResult, authCacheResult, targetResult] = await Promise.allSettled([
    getBuilderReleaseDownloadReport(),
    readPublishAuthCache(),
    getPublishTargetInfo()
  ]);
  const authCache = authCacheResult.status === "fulfilled" ? authCacheResult.value : null;
  const target = targetResult.status === "fulfilled" ? targetResult.value : null;
  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    appDownloads: downloadResult.status === "fulfilled"
      ? { ok: true, ...downloadResult.value }
      : { ok: false, error: downloadResult.reason?.message || "GitHub release download counts were not available." },
    publishingAuth: {
      targetRepository: target?.repository || "",
      branch: target?.branch || "",
      authenticated: Boolean(authCache && publishAuthCacheIsFresh(authCache, {
        remote: target?.remote || "",
        repository: target?.repository || "",
        branch: target?.branch || ""
      })),
      expiresAt: publishAuthCacheExpiresAt(authCache) || "",
      trustDays: Number(authCache?.trustDays || 0),
      successCountLastWeek: Number(authCache?.successCountLastWeek || 0)
    },
    websiteAccess: {
      available: false,
      summary: "Visitor counts and visitor IP addresses are not available from a static GitHub Pages site or GitHub release download counts.",
      recommendedSetup: [
        "Proxy the custom domain through Cloudflare instead of DNS-only.",
        "Enable Cloudflare Web Analytics for aggregate page-view counts.",
        "Use Cloudflare Logpush, Analytics Engine, or a Worker-backed endpoint if you need IP-level security logs.",
        "Publish a privacy notice before collecting raw IP addresses or persistent identifiers."
      ]
    },
    securityControls: [
      "Local builder write APIs are restricted to local requests.",
      "Publishing target details are only returned to the local machine.",
      "GitHub publishing authorization is cached for one day by default, or longer after repeated successful authorizations.",
      "The desktop app runs with Electron nodeIntegration disabled, contextIsolation enabled, and sandbox enabled.",
      "Deployable website security headers and security.txt metadata are included in the publishable site files."
    ]
  };
}

function safeUpdateFileSegment(value = "") {
  return String(value || "")
    .replace(/[^a-z0-9._-]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "latest";
}

function powershellSingleQuoted(value = "") {
  return `'${String(value).replaceAll("'", "''")}'`;
}

async function downloadAndLaunchAppUpdate() {
  const update = await getUpdateInfo();
  if (!update.ok) throw new Error(update.error || "Could not check for updates.");
  if (update.updateBlocked) {
    throw new Error(update.blockedReason || `Builder ${update.latestVersion} is temporarily blocked from automatic updates.`);
  }
  if (!update.updateAvailable) {
    throw new Error(`OMB Portfolio Builder ${update.currentVersion || ""} is already up to date.`);
  }
  if (!update.installerUrl) {
    throw new Error("The latest GitHub Release does not include a Windows setup installer.");
  }
  if (process.platform !== "win32") {
    throw new Error("Automatic installer updates are currently available only on Windows.");
  }

  const updateRoot = path.join(os.tmpdir(), "omb-portfolio-builder-updates");
  await mkdir(updateRoot, { recursive: true });
  const installerName = update.installerName && /\.exe$/i.test(update.installerName)
    ? update.installerName
    : `OMB-Portfolio-Builder-Setup-${safeUpdateFileSegment(update.latestVersion)}-x64.exe`;
  const installerPath = path.join(updateRoot, installerName);

  const response = await fetch(update.installerUrl, {
    headers: { "Accept": "application/octet-stream", "User-Agent": "OMB-Portfolio-Builder" }
  });
  if (!response.ok) throw new Error(`GitHub returned ${response.status} while downloading the installer.`);
  const installerBuffer = Buffer.from(await response.arrayBuffer());
  if (installerBuffer.length < 1024 * 1024) {
    throw new Error("The downloaded installer was unexpectedly small, so the update was stopped.");
  }
  await writeFile(installerPath, installerBuffer);

  const updateLogPath = path.join(updateRoot, `update-${safeUpdateFileSegment(update.latestVersion)}.log`);
  const currentExecutable = /OMB Portfolio Builder\.exe$/i.test(process.execPath || "") ? process.execPath : "";
  const currentInstallDirectory = currentExecutable ? path.dirname(currentExecutable) : "";
  const localAppDataExecutable = process.env.LOCALAPPDATA
    ? path.join(process.env.LOCALAPPDATA, "Programs", "OMB Portfolio Builder", "OMB Portfolio Builder.exe")
    : "";
  const legacyManagedApplicationExecutable = path.join(os.homedir(), "OMB", "application", "OMB Portfolio Builder", "OMB Portfolio Builder.exe");
  const legacyFlatApplicationExecutable = path.join(os.homedir(), "OMB", "application", "OMB Portfolio Builder.exe");
  const relaunchCandidates = Array.from(new Set([
    localAppDataExecutable,
    currentExecutable,
    currentInstallDirectory ? path.join(currentInstallDirectory, "OMB Portfolio Builder.exe") : "",
    legacyFlatApplicationExecutable,
    legacyManagedApplicationExecutable,
    process.env.ProgramFiles ? path.join(process.env.ProgramFiles, "OMB Portfolio Builder", "OMB Portfolio Builder.exe") : "",
    process.env["ProgramFiles(x86)"] ? path.join(process.env["ProgramFiles(x86)"], "OMB Portfolio Builder", "OMB Portfolio Builder.exe") : ""
  ].filter(Boolean)));
  const relaunchCandidatesPs = `@(${relaunchCandidates.map(powershellSingleQuoted).join(", ")})`;
  const launcherPath = path.join(updateRoot, `run-update-${safeUpdateFileSegment(update.latestVersion)}.ps1`);
  const launcherCommandPath = path.join(updateRoot, `run-update-${safeUpdateFileSegment(update.latestVersion)}.cmd`);
  const launcherScript = [
    "$ErrorActionPreference = 'Continue'",
    `$parentPid = ${process.pid}`,
    `$installer = ${powershellSingleQuoted(installerPath)}`,
    `$log = ${powershellSingleQuoted(updateLogPath)}`,
    `$candidates = ${relaunchCandidatesPs}`,
    "function Write-UpdateLog([string]$Message) {",
    "  try { Add-Content -LiteralPath $log -Value ((Get-Date).ToString('s') + ' ' + $Message) } catch {}",
    "}",
    "function Wait-ForExecutable([string[]]$Paths, [int]$Seconds) {",
    "  $deadline = (Get-Date).AddSeconds($Seconds)",
    "  do {",
    "    foreach ($candidate in $Paths) {",
    "      if ($candidate -and (Test-Path -LiteralPath $candidate)) { return $candidate }",
    "    }",
    "    Start-Sleep -Seconds 1",
    "  } while ((Get-Date) -lt $deadline)",
    "  return $null",
    "}",
    "function Stop-BuilderProcesses([int]$ProcessId, [string[]]$Paths) {",
    "  try {",
    "    $normalizedPaths = @($Paths | Where-Object { $_ } | ForEach-Object {",
    "      try { [System.IO.Path]::GetFullPath($_).ToLowerInvariant() } catch { $_.ToLowerInvariant() }",
    "    })",
    "    $processes = Get-CimInstance Win32_Process | Where-Object {",
    "      $_.ProcessId -eq $ProcessId -or",
    "      $_.Name -eq 'OMB Portfolio Builder.exe' -or",
    "      ($_.ExecutablePath -and ($normalizedPaths -contains ([System.IO.Path]::GetFullPath($_.ExecutablePath).ToLowerInvariant())))",
    "    } | Sort-Object ProcessId -Unique",
    "    foreach ($process in $processes) {",
    "      try {",
    "        Write-UpdateLog ('Stopping previous builder process PID ' + $process.ProcessId + ' at ' + $process.ExecutablePath)",
    "        Stop-Process -Id $process.ProcessId -Force -ErrorAction SilentlyContinue",
    "      } catch { Write-UpdateLog ('Could not stop PID ' + $process.ProcessId + ': ' + $_.Exception.Message) }",
    "    }",
    "    Start-Sleep -Seconds 2",
    "  } catch { Write-UpdateLog ('Could not stop previous builder processes: ' + $_.Exception.Message) }",
    "}",
    "function Run-Installer([switch]$Elevated) {",
    "  $process = $null",
    "  if ($Elevated) {",
    "    Write-UpdateLog 'Starting installer with Windows elevation prompt.'",
    "    $process = Start-Process -FilePath $installer -ArgumentList @('/S') -Verb RunAs -PassThru",
    "  } else {",
    "    Write-UpdateLog 'Starting installer silently.'",
    "    $process = Start-Process -FilePath $installer -ArgumentList @('/S') -WindowStyle Hidden -PassThru",
    "  }",
    "  if (-not $process) { return 0 }",
    "  if (-not $process.WaitForExit(900000)) {",
    "    Write-UpdateLog ('Installer timed out after 15 minutes. PID: ' + $process.Id)",
    "    try { Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue } catch { Write-UpdateLog ('Could not stop timed-out installer: ' + $_.Exception.Message) }",
    "    return 124",
    "  }",
    "  return $process.ExitCode",
    "}",
    "Write-UpdateLog 'Update launcher started.'",
    "Start-Sleep -Seconds 3",
    "try { Wait-Process -Id $parentPid -Timeout 8; Write-UpdateLog 'Previous app process exited.' } catch { Write-UpdateLog ('Previous app wait finished: ' + $_.Exception.Message) }",
    "Stop-BuilderProcesses $parentPid $candidates",
    "Start-Sleep -Seconds 1",
    "$installerProcess = $null",
    "$installerExit = 1",
    "try {",
    "  Write-UpdateLog ('Starting installer: ' + $installer)",
    "  $installerExit = Run-Installer",
    "  Write-UpdateLog ('Installer exit code: ' + $installerExit)",
    "} catch {",
    "  Write-UpdateLog ('Installer launch failed: ' + $_.Exception.Message)",
    "  exit 1",
    "}",
    "if ($installerExit -ne 0) {",
    "  try {",
    "    Write-UpdateLog 'Installer did not finish cleanly; retrying with Windows elevation prompt.'",
    "    $installerExit = Run-Installer -Elevated",
    "    Write-UpdateLog ('Elevated installer exit code: ' + $installerExit)",
    "  } catch { Write-UpdateLog ('Elevated installer launch failed: ' + $_.Exception.Message) }",
    "}",
    "if ($installerExit -ne 0) { exit $installerExit }",
    "$target = Wait-ForExecutable $candidates 90",
    "if ($target) {",
    "  try {",
    "    Start-Sleep -Seconds 2",
    "    Start-Process -FilePath $target -WorkingDirectory (Split-Path -Parent $target)",
    "    Write-UpdateLog ('Relaunched app: ' + $target)",
    "    exit 0",
    "  } catch {",
    "    Write-UpdateLog ('Relaunch failed: ' + $_.Exception.Message)",
    "    exit 3",
    "  }",
    "}",
    "Write-UpdateLog 'No installed app executable was found after update.'",
    "exit 2"
  ].join("\r\n");
  await writeFile(launcherPath, launcherScript, "utf8");
  const launcherCommandScript = [
    "@echo off",
    `start "" /min powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "${launcherPath}"`
  ].join("\r\n");
  await writeFile(launcherCommandPath, launcherCommandScript, "utf8");

  const child = spawn("cmd.exe", ["/d", "/c", launcherCommandPath], {
    detached: true,
    stdio: "ignore",
    windowsHide: true
  });
  child.unref();

  setTimeout(() => {
    process.emit("omb-builder-update-started", { installerPath, launcherPath, updateLogPath });
  }, 600);
  setTimeout(() => {
    process.exit(0);
  }, 3000);

  return {
    ...update,
    installerPath,
    launcherPath,
    updateLogPath,
    launcherCommandPath,
    started: true
  };
}

async function syncPortfolioPublishFiles(options = {}) {
  if (samePath(root, portfolioRoot)) {
    return { copied: [], skipped: [], workspace: portfolioRoot, separatedWorkspace: false };
  }

  const { removeMissing = false } = options;
  const copied = [];
  const skipped = [];

  await mkdir(portfolioRoot, { recursive: true });

  for (const relativePath of publishPaths) {
    const sourcePath = resolveInsideRoot(relativePath);
    const targetPath = resolveInsidePortfolioRoot(relativePath);
    if (await pathExists(sourcePath)) {
      await rm(targetPath, { recursive: true, force: true });
      await mkdir(path.dirname(targetPath), { recursive: true });
      await cp(sourcePath, targetPath, { recursive: true, force: true });
      copied.push(relativePath);
    } else if (removeMissing) {
      await rm(targetPath, { recursive: true, force: true });
      skipped.push(relativePath);
    } else {
      skipped.push(relativePath);
    }
  }

  return {
    copied,
    skipped,
    workspace: portfolioRoot,
    separatedWorkspace: true
  };
}

async function publishSiteChanges(publishAccess = null) {
  const access = publishAccess || await assertPublishAccess();
  const branch = access.branch || (await runPublishGit(["branch", "--show-current"])).stdout.trim();
  await configureGitCredentialPreference(access.remote || "", parseGitHubRemote(access.remote || "")?.owner || "");
  const remoteSync = await synchronizePublishBranchFromRemote(branch, access);
  const portfolioSync = await syncPortfolioPublishFiles({ removeMissing: true });
  await bumpPublishedAssetVersions(portfolioRoot);

  const stageablePaths = await stageablePublishPaths(publishPaths);
  if (!stageablePaths.length) {
    throw new Error("No compatible site files were available to publish.");
  }

  await runPublishGit(["add", "-A", "--", ...stageablePaths]);
  const status = await runPublishGit(["status", "--porcelain", "--", ...stageablePaths]);
  const hasChanges = status.stdout.trim().length > 0;

  let commit = null;
  if (hasChanges) {
    const message = `Update portfolio site ${new Date().toISOString().slice(0, 10)}`;
    commit = await runPublishGit(["commit", "-m", message]);
  }

  const pushArgs = branch ? ["push", "origin", branch] : ["push"];
  const push = await runPublishGit(pushArgs);

  return {
    ...access,
    portfolioWorkspace: portfolioRoot,
    remoteSync,
    portfolioSync,
    branch: branch || "current branch",
    committed: hasChanges,
    commitOutput: commit?.stdout || commit?.stderr || "",
    pushed: true,
    pushOutput: push.stdout || push.stderr || ""
  };
}

async function handlePortfolioAi(request, response) {
  const body = await readRequestJson(request);
  const question = clampText(body.question, 1200).trim();
  const conversation = cleanConversationHistory(body.conversation);
  const intent = classifyBackendAiIntent(question, body.intent);
  const allowWebSearch = body.allowWebSearch === true;

  if (!question) {
    sendJson(response, 400, { error: "Question is required." });
    return;
  }

  if (intent === "general_conversation") {
    sendJson(response, 200, {
      answer: ruleBasedConversationAnswer(question),
      intent,
      model: "conversation-router",
      provider: "local-router",
      usedWebSearch: false
    });
    return;
  }

  const context = await enrichPortfolioContext(contextForBackendIntent({ ...(body.context || {}), question }, intent));

  const apiKey = process.env.OPENAI_API_KEY || "";
  if (!apiKey) {
    const ollama = await callOllamaPortfolioAi({ question, intent, conversation, context, allowWebSearch });
    if (ollama.ok) {
      sendJson(response, 200, {
        answer: ollama.answer,
        model: ollama.model,
        provider: "ollama",
        usedWebSearch: false
      });
      return;
    }
    sendJson(response, 503, { error: ollama.error || "No local Ollama model or OPENAI_API_KEY is available for the local backend." });
    return;
  }

  const model = process.env.OPENAI_MODEL || "gpt-5.4";
  const fallbackModel = process.env.OPENAI_FALLBACK_MODEL || "gpt-4.1";
  const webSearchMode = String(process.env.OPENAI_ENABLE_WEB_SEARCH || "auto").toLowerCase();
  const enableWebSearch = webSearchMode === "true" || (webSearchMode !== "false" && allowWebSearch);
  const buildPayload = (selectedModel) => ({
    model: selectedModel,
    input: [
      {
        role: "developer",
        content: [{ type: "input_text", text: portfolioAiInstructions }]
      },
      {
        role: "user",
        content: [{
          type: "input_text",
          text: [
            `Visitor question: ${question}`,
            `Question intent: ${intent}`,
            `Web search allowed for this question: ${enableWebSearch ? "yes" : "no"}`,
            "",
            "Recent conversation JSON:",
            clampText(JSON.stringify(conversation, null, 2), 8000),
            "",
            "Portfolio context JSON:",
            clampText(JSON.stringify(context, null, 2), 18000)
          ].join("\n")
        }]
      }
    ],
    max_output_tokens: Number(process.env.OPENAI_MAX_OUTPUT_TOKENS || 1100),
    reasoning: { effort: process.env.OPENAI_REASONING_EFFORT || "medium" },
    text: { verbosity: process.env.OPENAI_VERBOSITY || "medium" }
  });

  const callModel = async (selectedModel) => {
    const payload = buildPayload(selectedModel);
    if (enableWebSearch) {
      payload.tools = [{ type: "web_search", search_context_size: process.env.OPENAI_WEB_SEARCH_CONTEXT_SIZE || "low" }];
    }

    const openAiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await openAiResponse.json().catch(() => ({}));
    return { data, openAiResponse, selectedModel };
  };

  let { data, openAiResponse, selectedModel } = await callModel(model);
  if (!openAiResponse.ok && !process.env.OPENAI_MODEL && fallbackModel && fallbackModel !== model && [400, 404].includes(openAiResponse.status)) {
    ({ data, openAiResponse, selectedModel } = await callModel(fallbackModel));
  }
  if (!openAiResponse.ok) {
    sendJson(response, openAiResponse.status, {
      error: data?.error?.message || "OpenAI request failed."
    });
    return;
  }

  sendJson(response, 200, {
    answer: extractOpenAiText(data),
    model: selectedModel,
    usedWebSearch: enableWebSearch
  });
}

async function handleApi(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/catalog") {
    try {
      const catalog = await readJsonFile(draftPath);
      sendJson(response, 200, { source: "draft", catalog });
    } catch {
      sendJson(response, 200, { source: "published", catalog: await readJsonFile(catalogPath) });
    }
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/templates") {
    sendJson(response, 200, await readJsonFile(path.join(root, "project-templates.json")));
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/publish-target") {
    if (!isLocalRequest(request)) {
      sendJson(response, 403, { error: "Publishing target details are only available from this computer." });
      return true;
    }
    sendJson(response, 200, { ok: true, target: await getPublishTargetInfo() });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/system-check") {
    sendJson(response, 200, { ok: true, system: await getGitStatus(), target: await getPublishTargetInfo() });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/app-update") {
    sendJson(response, 200, await getUpdateInfo());
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/security-report") {
    if (!isLocalRequest(request)) {
      sendJson(response, 403, { error: "Security reports are only available from this computer." });
      return true;
    }
    sendJson(response, 200, await getSecurityReport());
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/code/tools") {
    if (!isLocalRequest(request)) {
      sendJson(response, 403, { error: "Compiler details are only available from this computer." });
      return true;
    }
    sendJson(response, 200, { ok: true, tools: await compileToolStatus() });
    return true;
  }

  if (request.method !== "POST") return false;

  if (!isLocalRequest(request)) {
    sendJson(response, 403, { error: "Write actions are only allowed from this computer." });
    return true;
  }

  if (url.pathname === "/api/portfolio-ai") {
    await handlePortfolioAi(request, response);
    return true;
  }

  if (url.pathname === "/api/code/beautify") {
    try {
      const body = await readRequestJson(request);
      const language = normalizeCodeLanguage(body.language || detectCodeLanguageFromSource(body.code, body.fileName));
      sendJson(response, 200, {
        ok: true,
        language,
        code: beautifyCode(body.code || "", language)
      });
    } catch (error) {
      sendJson(response, 400, { ok: false, error: error.message || "Code could not be beautified." });
    }
    return true;
  }

  if (url.pathname === "/api/code/save") {
    try {
      const body = await readRequestJson(request);
      const saved = await saveCompileSource(body);
      sendJson(response, 200, { ok: true, saved });
    } catch (error) {
      sendJson(response, 400, { ok: false, error: error.message || "Code could not be saved." });
    }
    return true;
  }

  if (url.pathname === "/api/code/compile") {
    try {
      const body = await readRequestJson(request);
      const result = await compileAndRunCode(body);
      sendJson(response, 200, { ok: result.ok, result });
    } catch (error) {
      sendJson(response, 400, { ok: false, error: error.message || "Code could not be compiled.", result: null });
    }
    return true;
  }

  if (url.pathname === "/api/code/terminal") {
    try {
      const body = await readRequestJson(request);
      const result = await runCompileTerminalCommand(body);
      sendJson(response, 200, result);
    } catch (error) {
      sendJson(response, 400, { ok: false, error: error.message || "Terminal command could not be run." });
    }
    return true;
  }

  if (url.pathname === "/api/code/install-tools") {
    try {
      const body = await readRequestJson(request);
      const result = await installCompilerTools(body.language || "");
      sendJson(response, 200, result);
    } catch (error) {
      sendJson(response, 400, { ok: false, error: error.message || "Compiler tools could not be installed." });
    }
    return true;
  }

  if (url.pathname === "/api/publish-target") {
    await readRequestJson(request).catch(() => ({}));
    sendJson(response, 400, {
      ok: false,
      error: "Publishing target setup now requires GitHub authentication.",
      details: "Use Authenticate target. The builder keeps the previous target until GitHub write access is verified."
    });
    return true;
  }

  if (url.pathname === "/api/install-git") {
    try {
      const install = await installGitForWindows();
      sendJson(response, 200, { ok: true, install, system: await getGitStatus() });
    } catch (error) {
      sendJson(response, 400, {
        ok: false,
        error: error.message || "Git for Windows installer could not be started.",
        downloadUrl: "https://git-scm.com/download/win"
      });
    }
    return true;
  }

  if (url.pathname === "/api/app-update/install") {
    try {
      await readRequestJson(request).catch(() => ({}));
      const update = await downloadAndLaunchAppUpdate();
      sendJson(response, 200, { ok: true, update });
    } catch (error) {
      sendJson(response, 400, {
        ok: false,
        error: error.message || "The update could not be started."
      });
    }
    return true;
  }

  if (url.pathname === "/api/github-authenticate") {
    try {
      const body = await readRequestJson(request);
      const auth = await authenticateGitHubForTarget(body || {});
      sendJson(response, 200, { ok: true, auth, target: await getPublishTargetInfo() });
    } catch (error) {
      sendJson(response, 400, {
        ok: false,
        error: error.message || "GitHub authentication did not complete.",
        details: error.details || publishAuthorizationHelp,
        publishAccess: error.publishAccess || null,
        system: await getGitStatus()
      });
    }
    return true;
  }

  if (url.pathname === "/api/sync-from-publish-target") {
    try {
      const sync = await syncFromPublishTarget();
      sendJson(response, 200, { ok: true, sync, target: await getPublishTargetInfo() });
    } catch (error) {
      sendJson(response, 400, {
        ok: false,
        error: error.message || "Publishing target could not be imported.",
        details: error.details || publishAuthorizationHelp,
        publishAccess: error.publishAccess || null
      });
    }
    return true;
  }

  if (url.pathname === "/api/save-draft" || url.pathname === "/api/apply-catalog") {
    const body = await readRequestJson(request);
    const catalog = body.catalog;

    if (!catalog || !Array.isArray(catalog.categories) || !Array.isArray(catalog.projects) || !catalog.categories.length) {
      sendJson(response, 400, { error: "Catalog must include categories and projects arrays." });
      return true;
    }

    const applyingToSite = url.pathname === "/api/apply-catalog";
    let publishAccess = null;
    if (applyingToSite) {
      try {
        publishAccess = await assertPublishAccess();
      } catch (error) {
        sendJson(response, 200, {
          ok: false,
          file: path.relative(root, catalogPath),
          publish: {
            pushed: false,
            authorizationRequired: true,
            error: error.message || "Publishing authorization failed.",
            details: error.details || publishAuthorizationHelp,
            ...(error.publishAccess || {})
          }
        });
        return true;
      }
    }

    const target = applyingToSite ? catalogPath : draftPath;
    await writeFile(target, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
    if (applyingToSite) {
      try {
        const publish = await publishSiteChanges(publishAccess);
        sendJson(response, 200, { ok: true, file: path.relative(root, target), publish });
      } catch (error) {
        sendJson(response, 200, {
          ok: true,
          file: path.relative(root, target),
          publish: {
            pushed: false,
            error: error.stderr || error.stdout || error.message || "Git push failed."
          }
        });
      }
      return true;
    }
    sendJson(response, 200, { ok: true, file: path.relative(root, target) });
    return true;
  }

  if (url.pathname === "/api/upload") {
    const body = await readRequestJson(request);
    const projectId = safeSegment(body.projectId, "project");
    const section = safeSegment(body.section, "documents");
    const fileName = safeFileName(body.fileName);
    const base64 = String(body.data || "").replace(/^data:[^;]+;base64,/, "");

    if (!base64) {
      sendJson(response, 400, { error: "Upload data is missing." });
      return true;
    }

    const folder = resolveInsideRoot("docs", projectId, section);
    const filePath = resolveInsideRoot("docs", projectId, section, fileName);
    await mkdir(folder, { recursive: true });
    await writeFile(filePath, Buffer.from(base64, "base64"));

    sendJson(response, 200, {
      ok: true,
      url: path.relative(root, filePath).replaceAll(path.sep, "/")
    });
    return true;
  }

  return false;
}

createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host}`);
    if (url.pathname.startsWith("/api/") && await handleApi(request, response, url)) return;

    const pathname = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
    const filePath = path.normalize(path.join(root, pathname));

    if (!filePath.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    const body = await readFile(filePath);
    response.writeHead(200, {
      ...securityHeaders(),
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store, no-cache, must-revalidate"
    });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}).listen(port, host, () => {
  console.log(`Portfolio preview running at http://localhost:${port}`);
  console.log("For phone access, use this computer's Wi-Fi/LAN IP address with the same port.");
});
