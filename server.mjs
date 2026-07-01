import { createServer } from "node:http";
import { execFile, spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { access as fsAccess, chmod, cp, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const portfolioRoot = path.resolve(process.env.OMB_PORTFOLIO_WORKSPACE || root);
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
  "robots.txt",
  "sitemap.xml",
  "CNAME"
];
const publishAuthCacheTtlMs = 24 * 60 * 60 * 1000;
const publishAuthExtendedTtlMs = 30 * 24 * 60 * 60 * 1000;
const publishAuthHistoryWindowMs = 7 * 24 * 60 * 60 * 1000;
const publishAuthExtendedThreshold = 3;
const defaultSiteRepository = process.env.OMB_BUILDER_REPOSITORY || "";
const publishAuthorizationHelp = [
  "Publishing was blocked before live website files were applied.",
  "Open Publishing target, enter the repository URL, click Save target, then click Authenticate with GitHub.",
  "A GitHub/Git Credential Manager browser sign-in may open. Sign in with an account that has write access to the selected Pages repository.",
  "After authentication succeeds, the builder automatically loads compatible target files. You can also click Load from target later to refresh.",
  "For a custom domain, add or update the repository CNAME file after the repository is associated.",
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

const portfolioAiInstructions = [
  "You are the AI assistant for the portfolio website described by the supplied portfolio context.",
  "Behave like a careful senior electrical and computer engineering mentor who can also navigate the saved portfolio.",
  "Answer the visitor's question first in a concise ChatGPT-like format, then add portfolio links or context only when they help.",
  "Use the supplied question intent to decide whether this is a general engineering question or a portfolio-specific question.",
  "For general_conversation intent, respond naturally and briefly. Use the recent conversation instead of a fixed template. If the visitor says hi, a good answer is a short greeting such as: Hi, what can I do for you?",
  "If the visitor asks 'what is my name?' or 'who am I?' and they have not identified themselves, do not pretend to know the visitor. Say you are an AI agent for this portfolio and identify the portfolio owner only if the supplied profile context includes a name.",
  "For general_knowledge intent, answer the question directly using broad general knowledge. Do not force portfolio context unless the visitor asks to connect the answer to the portfolio owner's work.",
  "For general_engineering intent, begin with the general electronics or engineering explanation. Do not lead with project context unless the visitor asks to connect it.",
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

function sendJson(response, status, data) {
  response.writeHead(status, {
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

function ruleBasedConversationAnswer(question = "") {
  const clean = String(question || "").toLowerCase();
  if (/\b(thanks|thank you|appreciate it)\b/.test(clean)) {
    return "You're welcome. I can keep helping with this portfolio, project evidence, resume links, or related electronics and embedded-systems questions.";
  }

  if (/\b(who are you|what are you)\b/.test(clean)) {
    return "I am this portfolio's assistant. I can help visitors explore the saved engineering work, explain project details, summarize portfolio evidence, and answer related electronics, embedded, analog, digital, FPGA, ASIC, PCB, and firmware questions.";
  }

  return "Hi. I can help you explore this portfolio, explain projects, summarize project evidence, open relevant sections, or answer related electronics and embedded-systems questions. You can ask about a specific project, a tool like KiCad or STM32CubeIDE, or a general topic such as embedded systems, op amps, FPGA design, ASICs, or PCB testing.";
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
  await runPublishGit(["config", "--local", "credential.useHttpPath", "true"]);
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

async function setOriginRemote(remoteUrl) {
  if (await originRemoteExists()) {
    await runPublishGit(["remote", "set-url", "origin", remoteUrl]);
  } else {
    await runPublishGit(["remote", "add", "origin", remoteUrl]);
  }
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
  await rm(publishAuthCachePath, { force: true }).catch(() => {});
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
      "Enter the GitHub Pages or compatible static-site repository URL, then use Save target and authenticate.",
      await getPublishTargetInfo()
    );
  }

  await ensureGitRepository();
  const snapshot = await capturePublishTargetState();

  try {
    await setOriginRemote(remoteUrl);
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
    return {
      ok: true,
      currentVersion,
      latestVersion,
      updateAvailable: compareVersions(latestVersion, currentVersion) > 0,
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

function safeUpdateFileSegment(value = "") {
  return String(value || "")
    .replace(/[^a-z0-9._-]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "latest";
}

function powershellSingleQuoted(value = "") {
  return `'${String(value).replaceAll("'", "''")}'`;
}

function windowsCommandQuoted(value = "") {
  return `"${String(value).replaceAll('"', '""')}"`;
}

async function downloadAndLaunchAppUpdate() {
  const update = await getUpdateInfo();
  if (!update.ok) throw new Error(update.error || "Could not check for updates.");
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
  const relaunchCandidates = Array.from(new Set([
    currentExecutable,
    currentInstallDirectory ? path.join(currentInstallDirectory, "OMB Portfolio Builder.exe") : "",
    path.join(os.homedir(), "OMB", "application", "OMB Portfolio Builder.exe"),
    process.env.ProgramFiles ? path.join(process.env.ProgramFiles, "OMB Portfolio Builder", "OMB Portfolio Builder.exe") : "",
    process.env["ProgramFiles(x86)"] ? path.join(process.env["ProgramFiles(x86)"], "OMB Portfolio Builder", "OMB Portfolio Builder.exe") : "",
    process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, "Programs", "OMB Portfolio Builder", "OMB Portfolio Builder.exe") : ""
  ].filter(Boolean)));
  const relaunchCandidatesPs = `@(${relaunchCandidates.map(powershellSingleQuoted).join(", ")})`;
  const launcherPath = path.join(updateRoot, `run-update-${safeUpdateFileSegment(update.latestVersion)}.ps1`);
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
    "function Stop-BuilderIfStillRunning([int]$ProcessId) {",
    "  try {",
    "    $process = Get-Process -Id $ProcessId -ErrorAction SilentlyContinue",
    "    if ($process) {",
    "      Write-UpdateLog ('Previous app process still running; stopping PID ' + $ProcessId)",
    "      Stop-Process -Id $ProcessId -Force -ErrorAction SilentlyContinue",
    "      Start-Sleep -Seconds 2",
    "    }",
    "  } catch { Write-UpdateLog ('Could not stop previous app process: ' + $_.Exception.Message) }",
    "}",
    "Write-UpdateLog 'Update launcher started.'",
    "try { Wait-Process -Id $parentPid -Timeout 60; Write-UpdateLog 'Previous app process exited.' } catch { Write-UpdateLog ('Previous app wait finished: ' + $_.Exception.Message) }",
    "Stop-BuilderIfStillRunning $parentPid",
    "Start-Sleep -Seconds 1",
    "$installerProcess = $null",
    "$installerExit = 1",
    "try {",
    "  Write-UpdateLog ('Starting installer: ' + $installer)",
    "  $installerProcess = Start-Process -FilePath $installer -ArgumentList @('/S') -Wait -PassThru",
    "  $installerExit = if ($installerProcess) { $installerProcess.ExitCode } else { 0 }",
    "  Write-UpdateLog ('Installer exit code: ' + $installerExit)",
    "} catch {",
    "  Write-UpdateLog ('Installer launch failed: ' + $_.Exception.Message)",
    "  exit 1",
    "}",
    "if ($installerExit -ne 0) {",
    "  try {",
    "    Write-UpdateLog 'Installer did not finish cleanly; retrying with Windows elevation prompt.'",
    "    $installerProcess = Start-Process -FilePath $installer -ArgumentList @('/S') -Verb RunAs -Wait -PassThru",
    "    $installerExit = if ($installerProcess) { $installerProcess.ExitCode } else { 0 }",
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

  const launcherCommand = [
    "start",
    '""',
    "/min",
    "powershell.exe",
    "-NoProfile",
    "-ExecutionPolicy",
    "Bypass",
    "-WindowStyle",
    "Hidden",
    "-File",
    windowsCommandQuoted(launcherPath)
  ].join(" ");
  const child = spawn("cmd.exe", ["/d", "/s", "/c", launcherCommand], {
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
  const validIntents = new Set(["general_conversation", "general_engineering", "general_knowledge", "portfolio_specific"]);
  const intent = validIntents.has(body.intent) ? body.intent : "portfolio_specific";
  const allowWebSearch = body.allowWebSearch === true;

  if (!question) {
    sendJson(response, 400, { error: "Question is required." });
    return;
  }

  const context = await enrichPortfolioContext({ ...(body.context || {}), question });

  const apiKey = process.env.OPENAI_API_KEY || "";
  if (!apiKey) {
    sendJson(response, 503, { error: "OPENAI_API_KEY is not configured for the local backend." });
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

  if (request.method !== "POST") return false;

  if (!isLocalRequest(request)) {
    sendJson(response, 403, { error: "Write actions are only allowed from this computer." });
    return true;
  }

  if (url.pathname === "/api/portfolio-ai") {
    await handlePortfolioAi(request, response);
    return true;
  }

  if (url.pathname === "/api/publish-target") {
    await readRequestJson(request).catch(() => ({}));
    sendJson(response, 400, {
      ok: false,
      error: "Publishing target setup now requires GitHub authentication.",
      details: "Use Save target and authenticate. The builder keeps the previous target until GitHub write access is verified."
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
