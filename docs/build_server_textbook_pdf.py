from __future__ import annotations

import html
import re
import textwrap
from dataclasses import dataclass
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)


REPO = Path(__file__).resolve().parents[1]
SERVER_PATH = REPO / "server.mjs"
OUTPUT_PATH = REPO / "docs" / "curated-file-guides-pdf" / "server.mjs.pdf"


ACCENT = colors.HexColor("#0F766E")
INK = colors.HexColor("#111827")
MUTED = colors.HexColor("#475569")
CODE_BG = colors.HexColor("#F8FAFC")


try:
    pdfmetrics.registerFont(TTFont("Consolas", r"C:\Windows\Fonts\consola.ttf"))
    pdfmetrics.registerFont(TTFont("Consolas-Bold", r"C:\Windows\Fonts\consolab.ttf"))
    MONO = "Consolas"
except Exception:
    MONO = "Courier"


STYLES = getSampleStyleSheet()
STYLES.add(
    ParagraphStyle(
        name="BookTitle",
        parent=STYLES["Title"],
        fontName="Helvetica-Bold",
        fontSize=22,
        leading=26,
        textColor=colors.HexColor("#0F172A"),
        alignment=TA_CENTER,
        spaceAfter=14,
    )
)
STYLES.add(
    ParagraphStyle(
        name="Subtitle",
        parent=STYLES["BodyText"],
        fontName="Helvetica",
        fontSize=10.5,
        leading=14,
        textColor=MUTED,
        alignment=TA_CENTER,
        spaceAfter=20,
    )
)
STYLES.add(
    ParagraphStyle(
        name="Chapter",
        parent=STYLES["Heading1"],
        fontName="Helvetica-Bold",
        fontSize=15,
        leading=19,
        textColor=colors.HexColor("#0F172A"),
        spaceBefore=14,
        spaceAfter=8,
    )
)
STYLES.add(
    ParagraphStyle(
        name="Section",
        parent=STYLES["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=12,
        leading=15,
        textColor=ACCENT,
        spaceBefore=10,
        spaceAfter=5,
    )
)
STYLES.add(
    ParagraphStyle(
        name="Subsection",
        parent=STYLES["Heading3"],
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=13,
        textColor=colors.HexColor("#1E3A8A"),
        spaceBefore=7,
        spaceAfter=4,
    )
)
STYLES.add(
    ParagraphStyle(
        name="BodyBook",
        parent=STYLES["BodyText"],
        fontName="Helvetica",
        fontSize=11.4,
        leading=15.2,
        firstLineIndent=0.18 * inch,
        alignment=TA_JUSTIFY,
        textColor=INK,
        spaceAfter=4.2,
    )
)
STYLES.add(
    ParagraphStyle(
        name="BodyNoIndent",
        parent=STYLES["BodyBook"],
        firstLineIndent=0,
    )
)
STYLES.add(
    ParagraphStyle(
        name="CodeLine",
        parent=STYLES["BodyText"],
        fontName=MONO,
        fontSize=7.35,
        leading=8.85,
        textColor=colors.HexColor("#0F172A"),
        firstLineIndent=0,
        leftIndent=0.08 * inch,
        rightIndent=0.08 * inch,
        spaceBefore=0,
        spaceAfter=0,
        backColor=CODE_BG,
        borderPadding=1.4,
    )
)
STYLES.add(
    ParagraphStyle(
        name="CodeIntro",
        parent=STYLES["BodyNoIndent"],
        fontName="Helvetica-Oblique",
        fontSize=9.8,
        leading=12.7,
        textColor=colors.HexColor("#334155"),
        spaceBefore=5,
        spaceAfter=3,
    )
)


def clean(text: str) -> str:
    return " ".join(str(text).strip().split())


def add_p(story: list, text: str, style: str = "BodyBook") -> None:
    story.append(Paragraph(clean(text), STYLES[style]))


def add_heading(story: list, text: str, level: int = 1) -> None:
    story.append(Paragraph(text, STYLES[{1: "Chapter", 2: "Section", 3: "Subsection"}[level]]))


def wrap_code_line(line: str, width: int = 114) -> list[str]:
    if len(line) <= width:
        return [line]
    indent = re.match(r"\s*", line).group(0)
    continuation = indent + "    "
    return textwrap.wrap(
        line,
        width=width,
        subsequent_indent=continuation,
        replace_whitespace=False,
        drop_whitespace=False,
        break_long_words=False,
        break_on_hyphens=False,
    ) or [line]


JS_KEYWORDS = {
    "await", "async", "break", "case", "catch", "class", "const", "continue", "default", "delete", "do", "else",
    "export", "extends", "false", "finally", "for", "from", "function", "if", "import", "in", "instanceof", "let",
    "new", "null", "of", "return", "switch", "throw", "true", "try", "typeof", "undefined", "var", "void", "while",
    "yield",
}


def syntax_spans(line: str) -> str:
    token_pattern = re.compile(
        r"(//.*|/\*.*?\*/|`[^`]*`|\"(?:\\.|[^\"])*\"|'(?:\\.|[^'])*'|\b\d+(?:\.\d+)?\b|\b[A-Za-z_$][\w$]*\b|\s+|.)"
    )
    pieces: list[str] = []
    for match in token_pattern.finditer(line):
        token = match.group(0)
        escaped = html.escape(token).replace(" ", "&nbsp;")
        if token.startswith("//") or token.startswith("/*"):
            pieces.append(f'<font color="#64748B"><i>{escaped}</i></font>')
        elif token.startswith(("'", '"', "`")):
            pieces.append(f'<font color="#B45309">{escaped}</font>')
        elif token in JS_KEYWORDS:
            pieces.append(f'<font color="#1D4ED8"><b>{escaped}</b></font>')
        elif re.fullmatch(r"\d+(?:\.\d+)?", token):
            pieces.append(f'<font color="#7C3AED">{escaped}</font>')
        elif token in "{}[]().,;:=>+-*/%!?&|":
            pieces.append(f'<font color="#475569">{escaped}</font>')
        else:
            pieces.append(escaped)
    return "".join(pieces)


def add_code(story: list, code: str, intro: str | None = None) -> None:
    if intro:
        story.append(Paragraph(clean(intro), STYLES["CodeIntro"]))
    story.append(Spacer(1, 1.5))
    for raw_line in code.rstrip("\n").splitlines() or [""]:
        for line in wrap_code_line(raw_line):
            story.append(Paragraph(syntax_spans(line or " "), STYLES["CodeLine"]))
    story.append(Spacer(1, 4))


@dataclass(frozen=True)
class SyntaxTopic:
    title: str
    concept: str
    analogy: str
    syntax: str
    server_link: str
    mistake: str
    example: str


@dataclass(frozen=True)
class SyntaxLab:
    title: str
    focus: str
    code: str
    syntax_marks: str
    server_connection: str
    trap: str
    practice: str


JS_TOPICS: list[SyntaxTopic] = [
    SyntaxTopic(
        "What JavaScript is doing in this project",
        "JavaScript is the language used on both sides of this portfolio system: browser code makes the builder interactive, while Node.js code gives the builder controlled access to the local computer.",
        "A useful analogy is a hardware bench with a front panel and a back panel. The front panel has knobs and displays; the back panel has power, probes, and dangerous connectors. Browser JavaScript is the front panel. Node.js is the controlled back panel.",
        "The same grammar appears in both places, but the available APIs change. Browser code can touch the DOM. Node code can touch files, ports, child processes, and environment variables.",
        "The server file is Node JavaScript, so later chapters focus on files, HTTP requests, compiler commands, Git commands, and update launchers.",
        "Beginners often treat JavaScript as one environment. The safer mental habit is to ask where the code runs before asking what it can do.",
        "const runsInBrowser = typeof window !== 'undefined';\nconst runsInNode = typeof process !== 'undefined';\nconsole.log({ runsInBrowser, runsInNode });",
    ),
    SyntaxTopic(
        "Statements and expressions",
        "A statement is an instruction that asks JavaScript to do something. An expression is a piece of code that produces a value.",
        "In a circuit drawing, an expression is like a measured voltage at a node; a statement is like the instruction to connect the probe, record the value, or switch the supply on.",
        "Assignments, imports, function declarations, if branches, loops, and return lines are statements. Arithmetic, string creation, function calls, object literals, and comparisons are expressions.",
        "server.mjs uses expressions to calculate paths and status values, then wraps those expressions inside statements that send responses or run commands.",
        "A common mistake is trying to put a statement where JavaScript expects a value. When code looks confusing, underline the pieces that produce values and separate them from the instructions that move the program forward.",
        "const folder = 'docs';\nconst file = 'projects.json';\nconst fullName = `${folder}/${file}`; // expression assigned by a statement\nif (fullName.endsWith('.json')) {\n  console.log('This is catalog data.');\n}",
    ),
    SyntaxTopic(
        "Values and literals",
        "Values are the actual pieces of information JavaScript moves around. A literal is a value written directly into the code.",
        "Think of literals as parts pulled straight from a component drawer: a resistor value, a jumper setting, or a label printed on a schematic. They are not calculated yet; they are placed into the design.",
        "Strings use quotes, numbers use digits, booleans use true or false, arrays use square brackets, objects use braces, null means deliberately empty, and undefined means no value has been supplied.",
        "The server file uses literal strings for route names like /api/catalog, object literals for JSON responses, and arrays for lists such as allowed publish paths.",
        "The trap is to confuse an empty string, null, undefined, false, and zero. They all feel like absence, but they are different signals to the program.",
        "const route = '/api/catalog';\nconst statusCode = 200;\nconst ok = true;\nconst publishPaths = ['index.html', 'projects.json', 'assets'];\nconst response = { ok, route, publishPaths };",
    ),
    SyntaxTopic(
        "const and let",
        "const and let create named storage locations. const means the name cannot be reassigned. let means the name may point to a different value later.",
        "A const is like a labeled test point whose label should not be moved during the test. A let is like a measurement variable on your notebook page that can be updated as you step through the experiment.",
        "Use const for values that should not be rebound. Use let when a loop, parser, search, or accumulator genuinely needs to change the binding.",
        "server.mjs uses const for stable configuration such as root folders and MIME types, then uses let inside parsers and filesystem walkers when the working value changes.",
        "Do not read const as meaning the object can never change. It only prevents reassigning the variable name. Object properties and array contents can still be mutated unless you freeze or copy them.",
        "const settings = { retries: 2 };\nsettings.retries = 3; // allowed because the object is still the same object\nlet currentStep = 'download';\ncurrentStep = 'install'; // allowed because let can be reassigned",
    ),
    SyntaxTopic(
        "Scope and where names live",
        "Scope describes where a variable name can be seen. JavaScript creates scopes for modules, functions, and blocks such as if statements and loops.",
        "In a lab, scope is like cabinet access. A tool inside one locked drawer is not automatically available at every bench. The technician must either keep it in shared storage or pass it to the person who needs it.",
        "A top-level const in a module can be used by functions in that module. A const inside a function exists only during that function call. A const inside a block exists only inside that block.",
        "server.mjs keeps shared state such as compile profiles at module scope, while temporary values such as a parsed request body or a compiler result live inside the function handling that request.",
        "The most common beginner bug is reading a variable outside the scope where it was created. The second is accidentally reusing a name in an inner scope and hiding the outer value.",
        "const sharedPort = 8080;\nfunction describeServer() {\n  const protocol = 'http';\n  if (sharedPort === 8080) {\n    const label = 'local preview';\n    console.log(`${protocol} ${label}`);\n  }\n}",
    ),
    SyntaxTopic(
        "Strings and template literals",
        "Strings hold text. Template literals use backticks and allow embedded expressions with ${...}.",
        "Template literals are like labels with live fields. Instead of printing a fixed sticker, the program prints a sticker whose project name, date, or status can be inserted at the moment it is made.",
        "Single and double quotes are good for plain text. Backticks are useful when a string includes variables, line breaks, or generated messages.",
        "server.mjs uses template literals for status messages, commit messages, URLs, shell output summaries, and human-readable errors returned to the builder.",
        "A pasted URL or formula can be broken if code treats it as a math expression instead of text. When the purpose is text, keep it as a string and escape or validate it at the boundary.",
        "const projectName = 'Laser Link';\nconst today = new Date().toISOString().slice(0, 10);\nconst message = `Update ${projectName} on ${today}`;\nconsole.log(message);",
    ),
    SyntaxTopic(
        "Numbers, NaN, and numeric conversion",
        "JavaScript has one primary Number type for most numeric work. It can represent integers, decimals, Infinity, and NaN, which means not-a-number.",
        "NaN is like a meter reading that says the probe connection did not produce a valid measurement. The reading exists, but it cannot be trusted as a number.",
        "Number(value) converts many text values into numbers. Number.isFinite(value) checks whether a value is a usable finite number.",
        "The server uses numeric conversion for ports, timeouts, elapsed times, token limits, and cached authorization windows.",
        "Do not compare NaN with NaN. Use Number.isNaN or Number.isFinite. Also remember that values from forms, JSON, and environment variables often begin as strings.",
        "const port = Number(process.env.PORT || 8080);\nconst timeoutMs = Number('15000');\nif (Number.isFinite(port) && Number.isFinite(timeoutMs)) {\n  console.log(`Listening on ${port} with timeout ${timeoutMs}ms`);\n}",
    ),
    SyntaxTopic(
        "Booleans and comparisons",
        "A boolean is true or false. Comparisons create booleans that guide branches and loops.",
        "A boolean is the logic-level signal of JavaScript: high or low, yes or no, allowed or blocked.",
        "Use === and !== for strict comparison. Use >, >=, <, and <= for ordering. Combine decisions with && for and, || for or, and ! for not.",
        "server.mjs uses booleans for local-request checks, success flags, update availability, cache validity, and endpoint routing.",
        "Avoid relying on loose equality unless you have a deliberate reason. Strict equality keeps strings, numbers, booleans, null, and undefined from quietly pretending to be each other.",
        "const isLocal = true;\nconst hasWriteAccess = false;\nif (isLocal && hasWriteAccess) {\n  console.log('Publishing can continue.');\n} else {\n  console.log('Publishing stays blocked.');\n}",
    ),
    SyntaxTopic(
        "Objects as named bundles",
        "An object groups related values under property names. It is one of the central JavaScript structures.",
        "An object is like a project folder with labeled tabs: title, owner, files, status, and notes all belong together, but each tab has its own name.",
        "Object literals use braces. Properties can be read with dot syntax when the name is simple, or bracket syntax when the property name is dynamic.",
        "server.mjs sends object literals as JSON responses, stores language profiles as nested objects, and reads request bodies as objects.",
        "The danger is assuming a property exists. When data comes from a file, browser, or network, check it before trusting it.",
        "const profile = {\n  name: 'Maurice Otieno',\n  role: 'Hardware engineer',\n  links: ['GitHub', 'LinkedIn']\n};\nconsole.log(profile.name);\nconsole.log(profile['role']);",
    ),
    SyntaxTopic(
        "Arrays as ordered lists",
        "An array stores values in order. Each item has an index beginning at zero.",
        "An array is like a row of labeled storage bins. The first bin is position zero, not position one, which feels strange until it becomes habit.",
        "Use array literals with square brackets. Read length for the number of items. Use push to add, map to transform, filter to keep some, and find to locate one.",
        "server.mjs uses arrays for publish paths, compiler candidates, endpoint instructions, command arguments, and collected output items.",
        "Arrays are ordered, so changing the order can change behavior. Command arguments and publishing allowlists should be especially deliberate.",
        "const publishPaths = ['index.html', 'styles.css', 'projects.json'];\nconst jsonPath = publishPaths.find((item) => item.endsWith('.json'));\nconsole.log(jsonPath);",
    ),
    SyntaxTopic(
        "Destructuring",
        "Destructuring pulls values out of arrays or objects into named variables.",
        "It is like opening a connector harness and giving the important wires local labels before working on the circuit.",
        "Object destructuring uses property names. Array destructuring uses positions. Defaults can be supplied when a field is missing.",
        "server.mjs uses destructuring to read options, command results, and selected values from complex objects without writing repetitive property access.",
        "Destructuring can hide where data came from if overused. For beginner readability, destructure the fields that matter and keep the surrounding object name when context helps.",
        "const target = { repository: 'site.git', branch: 'main' };\nconst { repository, branch = 'main' } = target;\nconsole.log(repository, branch);",
    ),
    SyntaxTopic(
        "Optional chaining and nullish coalescing",
        "Optional chaining reads a nested property without crashing when an earlier value is null or undefined. Nullish coalescing supplies a fallback only for null or undefined.",
        "Optional chaining is a cautious probe. It checks whether each connector exists before trying to measure deeper inside the harness.",
        "Use value?.property when the parent might be absent. Use value ?? fallback when empty string or zero should still count as real values.",
        "server.mjs uses cautious access when reading API errors, optional environment settings, package metadata, and result fields from child processes.",
        "Do not use || as a fallback when zero, false, or an empty string are legitimate inputs. Use ?? when absence is the only reason to fall back.",
        "const result = { error: null, stdout: '' };\nconst message = result.error?.message ?? 'No error message was provided';\nconst output = result.stdout ?? 'missing';\nconsole.log(message, output);",
    ),
    SyntaxTopic(
        "Function declarations",
        "A function declaration gives a named operation a reusable body. It can receive parameters and return a value.",
        "A function is like a named test procedure. Instead of rewriting the same setup steps each time, you name the procedure and call it whenever that kind of work is needed.",
        "The function keyword is followed by the name, parameters in parentheses, and a body in braces. return sends a value back to the caller.",
        "server.mjs uses named functions for reusable backend operations such as sending JSON, resolving paths, running commands, and handling AI requests.",
        "If a block of logic has a clear job and more than one caller, a function makes the file easier to reason about. If it has a dangerous side effect, a named function makes that side effect easier to audit.",
        "function makeStatus(ok, message) {\n  return { ok, message };\n}\nconst status = makeStatus(true, 'Saved draft');\nconsole.log(status);",
    ),
    SyntaxTopic(
        "Parameters and arguments",
        "Parameters are the names a function uses internally. Arguments are the actual values passed when the function is called.",
        "A parameter is the empty socket on a test fixture; an argument is the actual device plugged into that socket for one run.",
        "Parameters can have defaults. They can also be objects when the function needs named inputs instead of a long ordered list.",
        "server.mjs often passes objects into functions because publishing, AI, and compile actions have many named fields. That reduces mistakes compared with remembering which positional argument comes third or fourth.",
        "When a function receives outside data, validate the argument before trusting it. A parameter name does not prove the incoming value is safe.",
        "function runCheck({ language = 'javascript', source = '' } = {}) {\n  return `Checking ${language}: ${source.length} characters`;\n}\nconsole.log(runCheck({ language: 'c', source: 'int main(){}' }));",
    ),
    SyntaxTopic(
        "Return values",
        "A return statement ends a function and sends a value back to the caller.",
        "Return is the lab report leaving the test bench. The function may have performed work internally, but the caller needs a clear result it can use.",
        "A function can return primitives, arrays, objects, promises, or nothing. Returning an object is common when multiple facts need to travel together.",
        "server.mjs returns structured result objects from compile, publish, update, and security helpers so the UI can display success, errors, command output, and file paths.",
        "A function that sometimes returns one shape and sometimes another becomes hard to use. Prefer consistent objects with fields such as ok, error, stdout, stderr, and data.",
        "function compileSummary(code, stderr = '') {\n  return {\n    ok: !stderr,\n    characters: code.length,\n    error: stderr || null\n  };\n}",
    ),
    SyntaxTopic(
        "Arrow functions",
        "Arrow functions are a compact way to write function values. They are common in callbacks and array methods.",
        "An arrow function is like a short inline test note: it is still a procedure, but it lives right where the surrounding operation needs it.",
        "For a single expression, an arrow can return implicitly. For multiple statements, use braces and an explicit return if a value should come back.",
        "server.mjs uses arrows in array operations, timers, event callbacks, and small helper callbacks passed into promises or command handlers.",
        "Do not use arrows only because they look modern. Use them when they make the surrounding expression clearer. Named functions are still better for large operations.",
        "const files = ['main.c', 'design.sv', 'notes.txt'];\nconst sourceFiles = files.filter((file) => file.endsWith('.c') || file.endsWith('.sv'));\nconsole.log(sourceFiles);",
    ),
    SyntaxTopic(
        "Callbacks",
        "A callback is a function passed into another function so it can be called later or for each item.",
        "A callback is like handing a technician an instruction card: when the scan reaches each component, perform the instruction written on the card.",
        "Array methods, timers, event systems, and stream APIs all rely on callbacks. The callback receives values chosen by the function calling it.",
        "server.mjs uses callbacks in server startup, timers, array processing, and event handling around spawned processes.",
        "The caller controls when and how often the callback runs. Do not assume a callback runs immediately unless the API promises that behavior.",
        "const commands = ['git status', 'git push', 'git log'];\ncommands.forEach((command, index) => {\n  console.log(`${index}: ${command}`);\n});",
    ),
    SyntaxTopic(
        "if, else, and guarded paths",
        "if statements choose which branch of code runs based on a boolean condition.",
        "An if statement is a relay or comparator: when the condition is high, one path conducts; otherwise another path may be selected.",
        "Use if for important decisions. Use early returns when a function should stop immediately after a failed requirement.",
        "server.mjs uses guard clauses to reject non-local write requests, missing upload data, invalid catalogs, and publishing attempts without authorization.",
        "Deep nesting makes server code hard to trust. A clean guard at the top makes the safe path easier to see.",
        "function requireLocalRequest(isLocal) {\n  if (!isLocal) {\n    return { ok: false, error: 'Write actions are only allowed locally.' };\n  }\n  return { ok: true };\n}",
    ),
    SyntaxTopic(
        "switch statements and route decisions",
        "A switch chooses behavior by comparing one value against multiple cases.",
        "Switch is like a rotary selector on a bench instrument. One position selects voltage, another selects current, and another selects resistance.",
        "Many JavaScript developers use if chains for routes because route checks often combine method and path. switch is still useful when one value controls many clear branches.",
        "server.mjs uses a large API switchboard pattern in handleApi, mostly with ordered if statements because each route combines HTTP method, pathname, safety, body parsing, and error handling.",
        "The important idea is not whether if or switch is used. The important idea is that route selection should be centralized enough to audit what the backend exposes.",
        "const action = 'save-draft';\nswitch (action) {\n  case 'save-draft':\n    console.log('Write local catalog');\n    break;\n  case 'apply-site':\n    console.log('Authorize and publish');\n    break;\n}",
    ),
    SyntaxTopic(
        "Loops",
        "Loops repeat code. JavaScript has for, for...of, while, and several array methods that behave like loops.",
        "A loop is like stepping through every net on a schematic or every file in a folder and applying the same check.",
        "Use for...of when you need each item. Use a traditional for loop when the index matters. Use while when the stopping condition is discovered during the work.",
        "server.mjs uses loops to walk directories, scan command candidates, gather process output, parse waveform text, and copy publish paths.",
        "Every loop needs a clear stopping condition. Infinite loops in backend code can freeze a request, hang an update, or make a compile operation appear stuck.",
        "const candidates = ['git', 'C:/Program Files/Git/cmd/git.exe'];\nfor (const candidate of candidates) {\n  if (candidate.includes('Git')) {\n    console.log(`Try ${candidate}`);\n  }\n}",
    ),
    SyntaxTopic(
        "Array map, filter, find, and reduce",
        "Array methods express common list operations without writing every loop by hand.",
        "They are like common lab workflows: filter removes irrelevant parts, map transforms every measurement, find locates the first matching component, and reduce combines many readings into one result.",
        "map returns a new array of transformed items. filter returns a smaller array. find returns one item or undefined. reduce accumulates a final value.",
        "server.mjs uses these patterns when preparing command output, selecting files, filtering source excerpts, and converting arrays of lines into readable terminal text.",
        "Do not use reduce just to look clever. If a plain loop is clearer for a beginner or for side effects, use the clearer shape.",
        "const files = ['main.c', 'notes.txt', 'design.sv'];\nconst extensions = files.map((file) => file.split('.').pop());\nconst sourceFiles = files.filter((file) => ['c', 'sv'].includes(file.split('.').pop()));\nconst firstHdl = files.find((file) => file.endsWith('.sv'));\nconsole.log({ extensions, sourceFiles, firstHdl });",
    ),
    SyntaxTopic(
        "try, catch, and controlled failure",
        "try and catch let code handle errors instead of crashing the whole operation.",
        "A catch block is like a protective fuse. It does not make the fault disappear, but it keeps the failure contained and reports it in a controlled way.",
        "Put the risky operation inside try. Put the recovery or error response inside catch. Use finally when cleanup must happen whether the operation succeeds or fails.",
        "server.mjs wraps file reads, compiler runs, update launches, AI calls, and Git actions so the UI gets a useful JSON error instead of a broken server.",
        "Do not catch errors and then hide them. A good catch block translates the problem for the caller while preserving enough detail for debugging.",
        "try {\n  const parsed = JSON.parse('{\"ok\": true}');\n  console.log(parsed.ok);\n} catch (error) {\n  console.log(`JSON could not be parsed: ${error.message}`);\n}",
    ),
    SyntaxTopic(
        "throw and Error objects",
        "throw stops the current path and sends an error upward to the nearest catch.",
        "Throwing is like stopping a test procedure because the setup is unsafe. Continuing would create a misleading result.",
        "Throw Error objects when you want message, stack, and optional custom fields. Add details when the UI needs more context.",
        "server.mjs throws when a target path escapes the allowed workspace, when a command fails in a way the caller must see, and when publishing authorization is missing.",
        "The beginner mistake is using throw for normal choices. Reserve it for failures that should skip the normal return path.",
        "function requireProjectId(projectId) {\n  if (!projectId) {\n    throw new Error('Project id is required.');\n  }\n  return projectId;\n}",
    ),
    SyntaxTopic(
        "Modules and import",
        "A module is a file with its own scope that can import values from other modules and export values to other files.",
        "Modules are like separate boards in a larger system. Each board has private traces and public connectors.",
        "Node ES modules use import statements. Built-in Node modules often use names beginning with node:, such as node:path or node:fs/promises.",
        "server.mjs imports HTTP, filesystem, path, process, crypto, and utility modules at the top because those APIs give the backend its local powers.",
        "Do not confuse CommonJS require syntax with ES module import syntax. This project uses ES modules, so import appears at the top of server.mjs.",
        "import path from 'node:path';\nimport { readFile, writeFile } from 'node:fs/promises';\n\nconst filePath = path.join('docs', 'projects.json');\nconsole.log(filePath);",
    ),
    SyntaxTopic(
        "JSON",
        "JSON is a text format for structured data. JavaScript can turn objects into JSON text and parse JSON text back into objects.",
        "JSON is the shipping manifest between the frontend and backend. It lets the UI say exactly what it wants without sending raw JavaScript code.",
        "JSON.stringify converts data to text. JSON.parse converts text to data. Valid JSON uses double quotes around property names and strings.",
        "server.mjs uses JSON for catalogs, draft saves, API request bodies, AI context, update responses, and publishing reports.",
        "Never assume JSON from a browser is valid or safe. Parse it carefully, check its shape, and reject missing required fields before writing files or running commands.",
        "const catalog = { categories: [], projects: [] };\nconst text = JSON.stringify(catalog, null, 2);\nconst parsed = JSON.parse(text);\nconsole.log(parsed.projects.length);",
    ),
    SyntaxTopic(
        "Promises",
        "A Promise represents work that may finish later. It can resolve with a value or reject with an error.",
        "A promise is like sending a job to a lab instrument and receiving a ticket. The result is not available immediately, but the ticket lets the program continue once the instrument finishes.",
        "Promise-based APIs avoid blocking the entire program while waiting for files, network calls, timers, or child processes.",
        "server.mjs depends on promise-based filesystem APIs, fetch calls, command execution wrappers, and async helpers that return promise results.",
        "A promise that is not awaited or returned can fail in the background. In backend code, that can make a request answer before the work is finished.",
        "const delayed = new Promise((resolve) => {\n  setTimeout(() => resolve('finished'), 100);\n});\ndelayed.then((message) => console.log(message));",
    ),
    SyntaxTopic(
        "async and await",
        "async functions return promises. await pauses inside an async function until a promise settles.",
        "await is like waiting for the instrument ticket to be called before writing the final lab result.",
        "Use await when later code depends on the result. Wrap awaited risky work in try/catch when the caller needs a clean error.",
        "server.mjs uses async/await heavily because nearly every useful backend action involves files, Git, compilers, network requests, or update launchers.",
        "await only works inside async functions or top-level modules that allow it. server.mjs is an ES module, so it can use top-level await for package metadata.",
        "async function loadCatalog(readFile) {\n  const text = await readFile('projects.json', 'utf8');\n  return JSON.parse(text);\n}",
    ),
    SyntaxTopic(
        "HTTP requests and responses",
        "HTTP is the request-response protocol the builder uses to talk to the local backend.",
        "The browser asks the server a question, like a student handing a form to a lab technician. The server reads the form, performs the safe work, and returns a result.",
        "A request has a method, URL, headers, and sometimes a body. A response has a status code, headers, and body content.",
        "server.mjs creates an HTTP server, checks URL paths, routes /api actions, and serves files such as index.html and script.js.",
        "The method matters. A GET should read. A POST can change state. The server enforces local-only checks before write-style POST routes.",
        "fetch('/api/catalog')\n  .then((response) => response.json())\n  .then((catalog) => console.log(catalog));",
    ),
    SyntaxTopic(
        "URLs and paths",
        "A URL identifies a web resource. A filesystem path identifies a location on disk. They look similar but are not the same thing.",
        "A URL is the address on the visitor side of the counter. A path is the cabinet location behind the counter.",
        "Use URL for request routing and path for local files. Decode and normalize carefully when converting a URL path into a filesystem path.",
        "server.mjs converts request URLs into route decisions, but it uses path helpers to keep file writes inside approved local roots.",
        "The security mistake is joining untrusted URL text directly to a local folder and assuming it stayed inside the folder.",
        "const url = new URL('/api/catalog', 'http://localhost:8080');\nconst route = url.pathname;\nconsole.log(route);",
    ),
    SyntaxTopic(
        "Node path helpers",
        "The Node path module builds, normalizes, and inspects filesystem paths in an operating-system-aware way.",
        "It is the layout tool that keeps folder names, separators, and extensions from being hand-soldered as fragile strings.",
        "path.join combines segments. path.resolve creates absolute paths. path.extname reads the extension. path.dirname reads the parent folder.",
        "server.mjs uses path to locate the app root, portfolio workspace, compile workspace, uploaded files, package metadata, and compiler artifacts.",
        "Do not build Windows paths by concatenating backslashes. Let path handle separators and then validate that the final result is still inside the expected root.",
        "import path from 'node:path';\nconst folder = path.join('docs', 'laser-link', 'design');\nconst extension = path.extname('filter.sv');\nconsole.log(folder, extension);",
    ),
    SyntaxTopic(
        "Filesystem promises",
        "Node's fs/promises module provides promise-based functions for reading, writing, copying, listing, and deleting files.",
        "The filesystem API is the controlled storage room of the builder. Every saved project, upload, draft, and publish mirror touches it.",
        "readFile loads a file, writeFile saves content, mkdir creates folders, readdir lists folders, cp copies, and rm removes.",
        "server.mjs uses these APIs to save drafts, accept uploads, prepare compile workspaces, synchronize publish files, and read context for the AI.",
        "Filesystem code must be careful about path boundaries and cleanup. A bug here can overwrite the wrong file or leave temporary artifacts behind.",
        "import { mkdir, writeFile } from 'node:fs/promises';\nawait mkdir('docs/example', { recursive: true });\nawait writeFile('docs/example/readme.txt', 'Saved by the builder', 'utf8');",
    ),
    SyntaxTopic(
        "Environment variables",
        "Environment variables are settings supplied outside the source code.",
        "They are like jumper settings on the bench: the same board can behave differently depending on the external configuration.",
        "Node reads environment variables through process.env. Values arrive as strings or undefined, so conversion and defaults are usually needed.",
        "server.mjs uses environment variables for port, host, workspace roots, OpenAI settings, model choices, and tool paths.",
        "Never put private secrets directly into source code. Use environment variables or a secure local store so the repository stays safe.",
        "const port = Number(process.env.PORT || 8080);\nconst apiKeyConfigured = Boolean(process.env.OPENAI_API_KEY);\nconsole.log({ port, apiKeyConfigured });",
    ),
    SyntaxTopic(
        "Child processes",
        "A child process lets Node start another program such as git, gcc, java, iverilog, or an installer.",
        "It is like asking a specialized instrument to do a job while the bench controller watches the output terminals.",
        "execFile is useful for short commands. spawn is useful when output streams over time or the process may run longer.",
        "server.mjs uses child processes for Git publishing, compiler execution, tool version checks, installer launches, and update handoffs.",
        "Never build a command by concatenating untrusted strings into a shell command. Prefer executable plus argument array because it reduces quoting and injection problems.",
        "import { execFile } from 'node:child_process';\nexecFile('git', ['status', '--short'], (error, stdout, stderr) => {\n  console.log(error ? stderr : stdout);\n});",
    ),
    SyntaxTopic(
        "Buffers and base64",
        "A Buffer holds raw bytes. Base64 converts bytes into text so binary files can travel through JSON safely.",
        "Base64 is like packaging a non-text component into a labeled shipping envelope that a text-only mail system can carry.",
        "Buffer.from(text, 'base64') converts base64 text into bytes. A data URL often includes a prefix that must be removed before decoding.",
        "server.mjs uses this pattern when the builder uploads files or images through JSON request bodies.",
        "The mistake is treating base64 as security. It is only encoding. Anyone can decode it if they have the text.",
        "const base64 = Buffer.from('hello').toString('base64');\nconst restored = Buffer.from(base64, 'base64').toString('utf8');\nconsole.log(base64, restored);",
    ),
    SyntaxTopic(
        "Regular expressions",
        "A regular expression is a pattern for searching and transforming text.",
        "A regex is like a smart probe that can scan a whole waveform for a shape instead of checking one sample at a time.",
        "Use regex for controlled text recognition such as file extension checks, whitespace cleanup, HTML stripping, and code language hints.",
        "server.mjs uses regex to clean HTML, detect code languages, identify GitHub text files, skip binary files, parse VCD waveforms, and sanitize text.",
        "Regex can become unreadable if it tries to parse a full programming language or document format. Use it for narrow patterns, not as a replacement for a real parser.",
        "const source = 'module top; endmodule';\nconst isVerilog = /\\b(module|endmodule|always|assign)\\b/.test(source);\nconsole.log(isVerilog);",
    ),
    SyntaxTopic(
        "Maps and Sets",
        "A Map stores key-value pairs. A Set stores unique values.",
        "A Set is like a parts tray that refuses duplicates. A Map is like a lookup table where each part number points to a known bin.",
        "Use Set when uniqueness matters. Use Map when keys are not simple object property names or when you want explicit lookup behavior.",
        "server.mjs uses Set for blocked update versions and Maps for compiler tool caches and version caches.",
        "Do not use arrays for repeated membership tests when the list may grow and uniqueness matters. A Set makes the intent clearer.",
        "const blockedVersions = new Set(['0.2.16']);\nconst toolCache = new Map();\ntoolCache.set('git', 'C:/Program Files/Git/cmd/git.exe');\nconsole.log(blockedVersions.has('0.2.16'), toolCache.get('git'));",
    ),
    SyntaxTopic(
        "Dates and time windows",
        "JavaScript Date represents a moment in time. Millisecond durations are common for timeouts and cache windows.",
        "A cache time-to-live is like deciding how long a calibration sticker remains valid before the instrument must be checked again.",
        "Date.now returns the current timestamp in milliseconds. Multiplying days, hours, minutes, seconds, and milliseconds makes readable duration constants.",
        "server.mjs uses time windows for daily publishing authorization, extended trust after repeated authorizations, update checks, and elapsed command times.",
        "Avoid mixing seconds and milliseconds without naming the variable clearly. A timeout that is off by one thousand can be painful.",
        "const oneDayMs = 24 * 60 * 60 * 1000;\nconst expiresAt = Date.now() + oneDayMs;\nconsole.log(new Date(expiresAt).toISOString());",
    ),
    SyntaxTopic(
        "Equality and coercion",
        "Coercion is JavaScript's habit of converting one type to another in some operations.",
        "Coercion is like an adapter that sometimes fits the connector but may hide the fact that the wrong cable was chosen.",
        "Strict equality checks both type and value. Loose equality can convert types before comparing.",
        "server.mjs mostly uses explicit conversion and strict checks because backend decisions should not depend on surprising type conversion.",
        "Use Number, String, Boolean, and JSON parsing deliberately. Do not let equality operators silently guess what a value should mean.",
        "console.log(0 == false);  // true because of coercion\nconsole.log(0 === false); // false because the types differ\nconsole.log(Number('8080') === 8080);",
    ),
    SyntaxTopic(
        "Mutation and object references",
        "Objects and arrays are reference values. Assigning them to another variable copies the reference, not the whole object.",
        "Two variables can point to the same equipment cart. Moving a tool on the cart is visible through both labels because the cart is shared.",
        "Mutating a shared object changes it for everyone holding that reference. Copy with spread syntax or structured cloning when independent data is needed.",
        "server.mjs often creates new response objects rather than mutating request data directly, which makes backend results easier to predict.",
        "The mistake is thinking const creates a deep constant. It does not. const protects the variable binding, not the object contents.",
        "const original = { status: 'draft' };\nconst alias = original;\nalias.status = 'published';\nconsole.log(original.status);",
    ),
    SyntaxTopic(
        "Spread syntax",
        "Spread syntax expands arrays or objects into another array, object, or argument list.",
        "Spread is like copying a known setup sheet and then changing one line for the current experiment.",
        "Use ...array inside arrays or function calls. Use ...object inside object literals to copy properties into a new object.",
        "server.mjs uses spread when combining security headers with extra headers and when building JSON responses that extend existing result objects.",
        "Spread creates a shallow copy. Nested objects are still shared unless copied separately.",
        "const baseHeaders = { 'X-Content-Type-Options': 'nosniff' };\nconst headers = { ...baseHeaders, 'Content-Type': 'application/json' };\nconsole.log(headers);",
    ),
    SyntaxTopic(
        "Default values",
        "Default values protect code when an input is missing.",
        "A default is like a bench instrument returning to a safe range when the user has not selected a custom range.",
        "Function parameters can have defaults. Object destructuring can have defaults. The ?? operator can choose a fallback for missing values.",
        "server.mjs uses defaults for host, port, language, filenames, model settings, compile timeouts, and optional request fields.",
        "Defaults should be safe and boring. A dangerous action should not be the fallback.",
        "function makeFileName(name = 'main.js') {\n  return name.trim() || 'main.js';\n}\nconsole.log(makeFileName());",
    ),
    SyntaxTopic(
        "Template objects and configuration maps",
        "A configuration map stores many related rules in one object.",
        "It is like a table in a datasheet: each row describes how one mode behaves, and the program chooses the row by name.",
        "Use configuration objects when many branches share the same structure but differ in labels, extensions, tools, or limits.",
        "server.mjs uses compileLanguageProfiles as a rulebook for C, C++, Verilog, SystemVerilog, LTspice, Java, JavaScript, Python, and HTML.",
        "A good configuration map prevents scattered if statements from drifting out of sync. The risk is letting the object become undocumented, so each field should have a clear meaning.",
        "const profiles = {\n  javascript: { defaultFile: 'main.js', tools: ['node'] },\n  python: { defaultFile: 'main.py', tools: ['python'] }\n};\nconsole.log(profiles.javascript.defaultFile);",
    ),
    SyntaxTopic(
        "Sanitizing text",
        "Sanitizing means reshaping unsafe or messy input into a form the program can safely use.",
        "It is like deburring a metal part before placing it into a tight mechanical assembly. The part may be useful, but sharp edges can damage the system.",
        "Common sanitizing steps include trimming whitespace, limiting length, removing dangerous characters, and replacing unsupported filename characters.",
        "server.mjs sanitizes project ids, section names, filenames, code filenames, public source text, and AI prompt context.",
        "Sanitizing is not the same as authorization. A clean filename still needs to be written only under an allowed folder.",
        "function safeName(value) {\n  return String(value || 'file')\n    .trim()\n    .replace(/[^a-z0-9._-]+/gi, '-')\n    .slice(0, 80);\n}",
    ),
    SyntaxTopic(
        "Validating data shape",
        "Validation checks whether data has the structure and meaning the function expects.",
        "Validation is the pre-flight checklist. The component may look right, but the test should not begin until required pins, supply rails, and limits are confirmed.",
        "For arrays, use Array.isArray. For objects, check that the value exists and has needed properties. For strings, trim and check length.",
        "server.mjs validates catalogs before saving them, upload bodies before writing files, publish targets before saving them, and AI questions before routing them.",
        "Without validation, bad input can become corrupt project data, failed publishes, broken previews, or unsafe file operations.",
        "function validateCatalog(catalog) {\n  return Boolean(catalog && Array.isArray(catalog.categories) && Array.isArray(catalog.projects));\n}",
    ),
    SyntaxTopic(
        "HTTP status codes",
        "HTTP status codes tell the caller whether a request succeeded, failed, or was rejected.",
        "The status code is the traffic light on the transaction: green for success, red for failure, and special signals for missing or forbidden paths.",
        "Common codes include 200 for success, 400 for bad input, 403 for forbidden, 404 for not found, and 503 for unavailable services.",
        "server.mjs returns status codes alongside JSON so the browser can distinguish validation errors, blocked writes, AI unavailability, and missing static files.",
        "Do not return 200 for everything unless the response body has a clear reason. The status code should help both browser code and human debugging.",
        "function statusForError(kind) {\n  if (kind === 'forbidden') return 403;\n  if (kind === 'missing') return 404;\n  return 400;\n}",
    ),
    SyntaxTopic(
        "Headers",
        "HTTP headers are metadata attached to requests and responses.",
        "Headers are like labels on a package: they say what is inside, how it should be handled, and which rules apply during transport.",
        "Content-Type tells the browser how to interpret the body. Cache-Control tells it whether to reuse old content. Security headers constrain risky browser behavior.",
        "server.mjs centralizes response headers so JSON, static files, and sensitive local API responses use consistent rules.",
        "The most common bug is serving a file with the wrong content type, causing browsers to treat CSS, JavaScript, images, or PDFs incorrectly.",
        "const headers = {\n  'Content-Type': 'application/json',\n  'Cache-Control': 'no-store, no-cache, must-revalidate'\n};",
    ),
    SyntaxTopic(
        "Local request checks",
        "A local request check decides whether a request came from the same machine.",
        "It is like checking that the person asking to publish is standing at the authorized bench, not calling from outside the room.",
        "Local-only checks do not replace authentication, but they stop remote devices from using privileged builder endpoints over the network.",
        "server.mjs applies local checks before write actions, compiler details, security reports, Git authentication, and publishing.",
        "Do not expose file writes, command execution, or credential-related operations to arbitrary network clients. Local tools need local boundaries.",
        "function canWrite(requestIsLocal, userIsAuthorized) {\n  return requestIsLocal && userIsAuthorized;\n}",
    ),
    SyntaxTopic(
        "Command arguments",
        "Command arguments are the ordered pieces passed to an external executable.",
        "They are like the settings given to a lab instrument before pressing Run: target file, mode, output name, and flags.",
        "Use arrays of arguments with execFile or spawn. This keeps each argument separate and avoids shell quoting surprises.",
        "server.mjs builds argument arrays for Git, Java, gcc, g++, Icarus Verilog, vvp, PowerShell launchers, and update installers.",
        "The danger is allowing untrusted text to become flags or extra commands. Safe filename helpers and workspace boundaries reduce that risk.",
        "const gitArgs = ['push', 'origin', 'main'];\nconst compileArgs = ['-std=c++20', '-Wall', 'main.cpp', '-o', 'main.exe'];\nconsole.log(gitArgs, compileArgs);",
    ),
    SyntaxTopic(
        "Streams of output",
        "Long-running programs produce output over time. JavaScript can collect stdout and stderr as the process runs.",
        "stdout and stderr are like two oscilloscope channels: one carries normal signal, and the other carries warnings or errors.",
        "A runner can append chunks into strings, update logs, and return both channels to the UI.",
        "server.mjs captures compiler and simulator output so the Compile Code terminal can show errors, progress, and generated artifacts.",
        "Do not wait for a user to click something else before showing output. The backend should return fresh output immediately, and the frontend should repaint when it arrives.",
        "let stdout = '';\nlet stderr = '';\nstdout += 'Build started\\n';\nstderr += '';\nconsole.log({ stdout, stderr });",
    ),
    SyntaxTopic(
        "Caching",
        "A cache remembers a result so repeated work can be skipped for a while.",
        "A cache is like leaving a recently used tool on the bench instead of walking back to the cabinet every time.",
        "Caches need keys, stored values, and invalidation rules. Time-based caches expire after a chosen window.",
        "server.mjs caches compiler tool paths, compiler versions, publishing authorization, and update information to keep the app responsive.",
        "A cache that never expires can become wrong. A cache that expires too quickly becomes annoying. The useful balance depends on risk and cost.",
        "const cache = new Map();\nfunction rememberTool(name, path) {\n  cache.set(name, { path, savedAt: Date.now() });\n}",
    ),
    SyntaxTopic(
        "Top-level await",
        "Top-level await lets an ES module wait for a promise before the rest of the module continues.",
        "It is like reading the instrument configuration before the bench controller announces that it is ready.",
        "This syntax is available in ES modules, not in every JavaScript environment.",
        "server.mjs uses top-level await when reading package.json so version information is available to update checks.",
        "Top-level await should be reserved for startup facts that the module truly needs. Too much startup waiting makes the app feel slow.",
        "const packageText = await Promise.resolve('{\"version\":\"0.2.8\"}');\nconst packageJson = JSON.parse(packageText);\nconsole.log(packageJson.version);",
    ),
    SyntaxTopic(
        "Importing built-in Node modules",
        "Node's built-in modules provide standard operating-system and runtime tools.",
        "They are the built-in instruments in the lab: power supply, meter, clock, file cabinet, process controller, and network jack.",
        "The node: prefix makes it clear that the module is built into Node rather than installed from npm.",
        "server.mjs imports node:http, node:child_process, node:crypto, node:fs/promises, node:os, node:path, node:util, and node:url.",
        "When reading a Node backend, the import list is a quick map of what powers the file uses. If child_process is imported, the file can run external programs.",
        "import { createServer } from 'node:http';\nimport { readFile } from 'node:fs/promises';\nimport path from 'node:path';",
    ),
    SyntaxTopic(
        "Promisify",
        "promisify converts some callback-style Node functions into promise-returning functions.",
        "It is like adding a modern digital readout to an older instrument so the rest of the bench can use one consistent workflow.",
        "The converted function can be awaited. This makes older APIs easier to combine with async/await code.",
        "server.mjs promisifies execFile so short command checks can be written in the same async style as filesystem operations.",
        "Promisify only works for callback APIs that follow the Node convention of callback(error, result).",
        "import { execFile } from 'node:child_process';\nimport { promisify } from 'node:util';\nconst execFileAsync = promisify(execFile);\nconst result = await execFileAsync('node', ['--version']);",
    ),
    SyntaxTopic(
        "Hashing",
        "A hash turns data into a fixed-size fingerprint. It is useful for detecting whether content changed.",
        "A hash is like a checksum label on a downloaded part. If the part changes, the fingerprint changes.",
        "Node's crypto module can create hashes. The same input produces the same hash, while different input should produce a different hash.",
        "server.mjs uses hashing around compile artifacts and update or source workflows where it needs stable fingerprints.",
        "A hash is not encryption. It can verify identity or change, but it does not hide the original data by itself.",
        "import { createHash } from 'node:crypto';\nconst digest = createHash('sha256').update('source code').digest('hex');\nconsole.log(digest.slice(0, 12));",
    ),
    SyntaxTopic(
        "File extensions",
        "A file extension is the suffix that helps humans and tools understand a file's format.",
        "Extensions are like package labels: .sv suggests SystemVerilog, .cpp suggests C++, .pdf suggests a document.",
        "Code should not trust an extension alone for security, but extensions are useful for selecting tools and content types.",
        "server.mjs uses extensions to choose MIME types, detect compile languages, validate code filenames, and decide which GitHub files are useful for AI source context.",
        "Allowing all project evidence files is different from compiling all files. The builder can store any evidence file while the compile workspace selectively runs supported languages.",
        "import path from 'node:path';\nconst ext = path.extname('design.sv').toLowerCase();\nconsole.log(ext === '.sv' ? 'SystemVerilog' : 'Other');",
    ),
    SyntaxTopic(
        "Parsing small text formats",
        "Parsing means reading structured text and turning it into useful program data.",
        "It is like reading a waveform export or a test log and converting it into the signals, timestamps, and values the viewer needs.",
        "Small formats can often be parsed with loops and regex. Complex languages should use real parsers when correctness matters.",
        "server.mjs parses JSON, VCD-like waveform text, Git remote output, process output, URLs, and source-code hints.",
        "A parser should be strict enough to avoid nonsense and forgiving enough to report useful errors. Silent parsing failures are hard to debug.",
        "const lines = '$var wire 1 ! clk $end\\n#10\\n1!'.split('\\n');\nconst signalLines = lines.filter((line) => line.includes('$var'));\nconsole.log(signalLines);",
    ),
    SyntaxTopic(
        "Sorting and ranking",
        "Sorting arranges values. Ranking chooses which values are more relevant.",
        "Ranking is like choosing which measurement trace matters most for a debugging session.",
        "JavaScript sort accepts a comparison callback. Negative means a comes before b, positive means b comes before a, and zero keeps them equivalent.",
        "server.mjs uses ranking ideas when selecting source excerpts, finding tools, and limiting AI context so the model sees the most useful evidence first.",
        "Be careful: array sort mutates the original array. Copy first when the original order should be preserved.",
        "const results = [{ score: 4, name: 'README' }, { score: 9, name: 'main.c' }];\nconst ranked = [...results].sort((a, b) => b.score - a.score);\nconsole.log(ranked[0].name);",
    ),
    SyntaxTopic(
        "Limiting text length",
        "Length limits keep requests, logs, and model prompts from becoming too large.",
        "It is like setting a current limit on a supply. The circuit can still work, but one accidental short does not burn the system down.",
        "String(value).slice(0, max) is a simple way to clamp text. More advanced clamping can preserve whole words or important beginnings and endings.",
        "server.mjs clamps AI questions, source excerpts, conversation history, public fetches, and generated context.",
        "Without limits, one large upload or fetched page could slow the app, exceed API limits, or make the AI answer worse by burying the useful evidence.",
        "function clampText(value, maxLength = 12000) {\n  return String(value || '').slice(0, maxLength);\n}",
    ),
    SyntaxTopic(
        "Recursion and directory walking",
        "Recursion happens when a function calls itself to solve a smaller version of the same problem.",
        "Walking folders is like opening a cabinet, then opening each drawer, then opening each box inside each drawer until the tool is found.",
        "Recursive functions need a stopping condition. Directory walkers also need depth limits so a broad filesystem does not become an endless search.",
        "server.mjs uses recursive searching to find compiler executables under likely installation folders.",
        "The danger is scanning too much of the computer. Restrict the root folder and maximum depth.",
        "async function walk(folder, depth) {\n  if (depth < 0) return [];\n  // read entries, collect matches, then call walk(child, depth - 1)\n  return [];\n}",
    ),
    SyntaxTopic(
        "Event listeners",
        "An event listener is a function that runs when something happens.",
        "It is like triggering on a rising edge: the code waits, and when the event arrives, the callback runs.",
        "Servers, streams, child processes, DOM elements, and timers all use event-like behavior.",
        "server.mjs listens for process output, process exit, server requests, and update-start events.",
        "Event code should clean up after itself when the event source is temporary. Long-lived listeners can cause confusing repeated behavior.",
        "process.on('exit', (code) => {\n  console.log(`Process exited with ${code}`);\n});",
    ),
    SyntaxTopic(
        "Timers",
        "Timers schedule code to run later.",
        "A timer is like telling the lab assistant to check the oven in three minutes while the rest of the work continues.",
        "setTimeout runs once after a delay. setInterval repeats. Promises can wrap timers when async/await style is preferred.",
        "server.mjs uses timers around process timeouts, update handoff delays, and controlled shutdown after launching an updater.",
        "Timers should not be used as a substitute for real completion signals when an API can tell you exactly when work is done.",
        "setTimeout(() => {\n  console.log('Relaunch check after delay');\n}, 3000);",
    ),
    SyntaxTopic(
        "URL fetching",
        "fetch sends HTTP requests from JavaScript. In Node, modern runtimes provide fetch globally.",
        "Fetching is the backend reaching outside the local bench to ask a public service or API for data.",
        "The response must be checked. response.ok tells whether the HTTP status is in the success range, and response.json or response.text reads the body.",
        "server.mjs fetches OpenAI responses, public GitHub source files, public pages used as AI context, and release information.",
        "Do not assume every fetch returns JSON. Some endpoints return HTML, raw source text, binary data, or an error page.",
        "const response = await fetch('https://api.github.com');\nif (!response.ok) throw new Error(`HTTP ${response.status}`);\nconst text = await response.text();\nconsole.log(text.slice(0, 80));",
    ),
    SyntaxTopic(
        "API payload design",
        "An API payload is the object sent between frontend and backend.",
        "It is the form the user filled out, but in structured machine-readable form.",
        "Good payloads use clear field names, predictable data shapes, and enough information for the backend to validate the request.",
        "server.mjs receives payloads for catalog saves, uploads, compile actions, code beautifying, GitHub authentication, AI questions, and update actions.",
        "A payload should describe intent, not backend internals. The frontend asks for a compile; it should not decide unsafe filesystem paths.",
        "const payload = {\n  language: 'systemverilog',\n  files: [{ name: 'design.sv', code: 'module top; endmodule' }],\n  action: 'simulate'\n};",
    ),
    SyntaxTopic(
        "Consistent response objects",
        "A consistent response object lets the frontend handle success and failure without guessing.",
        "It is like every lab report using the same headings: pass/fail, observations, output, and notes.",
        "A common shape is { ok, data, error }. More complex operations may include stdout, stderr, elapsedMs, artifacts, or publish details.",
        "server.mjs returns consistent objects for compilers, publish attempts, update checks, security reports, uploads, and AI calls.",
        "When the response shape changes randomly, UI code becomes full of defensive guesses and bugs. Consistency is a kindness to the rest of the app.",
        "const response = {\n  ok: true,\n  result: { stdout: 'Hello', stderr: '', elapsedMs: 41 },\n  error: null\n};",
    ),
    SyntaxTopic(
        "Comments",
        "Comments explain intent to humans. They do not run.",
        "A useful comment is like a schematic note explaining why a non-obvious component is there, not a label saying that a resistor is a resistor.",
        "Use comments to explain risk, constraints, or unusual decisions. Avoid comments that merely repeat the code.",
        "server.mjs is mostly self-describing through names, but a few comments help where fallback behavior or skipped errors would otherwise look strange.",
        "Bad comments age poorly. If a comment says one thing and the code does another, the comment becomes a bug.",
        "// Try the next candidate because Windows PATH often misses tool installs.\ncontinue;",
    ),
    SyntaxTopic(
        "Naming",
        "Names are part of the design. A good variable or function name tells the reader what kind of value or behavior they are looking at.",
        "A name is like a net label. Good labels make a schematic readable even before you trace every wire.",
        "Use nouns for values, verbs for actions, and precise phrases for boundary-sensitive helpers.",
        "server.mjs has names such as resolveInsideRoot, publishAuthCachePath, compileLanguageProfiles, and handlePortfolioAi that reveal their jobs before the body is read.",
        "Do not use vague names like data, temp, thing, and result everywhere. result is fine when the surrounding operation is clear; otherwise say what kind of result it is.",
        "const publishAuthCachePath = '.omb-publish-session.json';\nfunction resolveInsideCompileRoot(relativePath) {\n  return relativePath;\n}",
    ),
    SyntaxTopic(
        "Organizing code by responsibility",
        "Code becomes understandable when related behavior lives together and repeated behavior is pulled into helpers.",
        "A good file layout is like a well-organized bench: power tools in one area, measurement tools in another, parts storage in another.",
        "Shared utilities should appear before features that use them. Feature coordinators can then read like stories that call those utilities.",
        "server.mjs starts with imports and configuration, then helpers, then feature operations, then API routing, then server startup.",
        "The file is broad, so feature-based documentation matters. Reading it by button behavior is easier than reading every helper in raw order.",
        "function helper() {\n  return 'small repeated behavior';\n}\nasync function feature() {\n  return helper();\n}",
    ),
    SyntaxTopic(
        "Reading stack traces",
        "A stack trace shows the path of function calls that led to an error.",
        "It is like a chain of test steps: the final fault appears at the top, but the earlier setup steps explain how the program arrived there.",
        "Read the error message first, then the closest project file entry, then the call chain below it.",
        "server.mjs catch blocks often convert raw errors into messages the UI can show, but during development the terminal stack trace remains useful.",
        "Do not panic at long traces. Find the first line that belongs to your code and connect it to the request or button that triggered the error.",
        "try {\n  throw new Error('Catalog must include projects');\n} catch (error) {\n  console.error(error.stack);\n}",
    ),
    SyntaxTopic(
        "Debugging with console output",
        "console.log prints values so you can inspect what the program believes is happening.",
        "It is the simplest diagnostic probe. You attach it, observe the signal, then remove it once the circuit is understood.",
        "Print objects, important branch decisions, request paths, and unexpected values. Keep production logs concise so real errors do not drown in noise.",
        "server.mjs prints startup URLs and can expose command output through structured responses rather than raw terminal-only logs.",
        "Do not log private secrets, tokens, API keys, or full credentials. Debugging should not create a security leak.",
        "const route = '/api/save-draft';\nconsole.log('Handling route:', route);\nconsole.log({ route, localOnly: true });",
    ),
]


SYNTAX_LABS: list[SyntaxLab] = [
    SyntaxLab(
        "Reading an import list",
        "how JavaScript announces the outside tools a file will use",
        "import { createServer } from 'node:http';\nimport { execFile, spawn } from 'node:child_process';\nimport path from 'node:path';",
        "The braces around createServer, execFile, and spawn mean named imports. The path import has no braces because the module's default export is being given the local name path. The strings after from are module specifiers.",
        "At the top of server.mjs, imports reveal the file's powers before any function is read. HTTP serving, child processes, filesystem access, path handling, crypto hashing, and URL conversion are all visible from the import section.",
        "A beginner may skip imports because they look like setup. In a backend file, they are a map of what the file is allowed to do.",
        "Before reading a new JavaScript file, pause at the imports and say what each import makes possible.",
    ),
    SyntaxLab(
        "Reading a top-level constant",
        "how stable module-level values become shared configuration",
        "const port = Number(process.env.PORT || 8080);\nconst host = process.env.HOST || '0.0.0.0';",
        "const creates names that cannot be reassigned. Number(...) converts the chosen port text into a numeric value. The || operator chooses the environment value when it exists, otherwise a fallback.",
        "server.mjs uses this shape to keep startup settings outside feature functions. Later code can call listen(port, host) without recalculating where those values came from.",
        "The subtle risk is that process.env values are strings. Code that forgets conversion may accidentally compare text with numbers.",
        "When you see process.env, ask what type the code needs after the setting is read.",
    ),
    SyntaxLab(
        "Reading an object literal as a lookup table",
        "how braces create a table of named answers",
        "const types = {\n  '.html': 'text/html',\n  '.js': 'application/javascript',\n  '.pdf': 'application/pdf'\n};",
        "The outer braces create an object. Each quoted extension is a property name. The colon separates a key from its value. Commas separate entries.",
        "The static file server uses this kind of object to choose Content-Type headers. It is faster to read than a long chain of if statements.",
        "Do not think of every object as a physical thing. In JavaScript, objects are often dictionaries that answer questions by key.",
        "Practice by reading each entry as a sentence: when the extension is .html, the content type is text/html.",
    ),
    SyntaxLab(
        "Reading an array allowlist",
        "how square brackets store an ordered list of permitted values",
        "const publishPaths = [\n  'projects.json',\n  'docs',\n  'assets',\n  'index.html'\n];",
        "The square brackets create an array. Each string is one item. The trailing comma after the final item is allowed in modern JavaScript and makes future edits cleaner.",
        "The publishing feature uses this list as an allowlist. Only these website-safe paths are copied and staged when applying changes to the public site.",
        "The trap is to treat a list like decoration. In backend code, a list can be a security boundary.",
        "When reading arrays in server code, ask whether the order matters, whether duplicates matter, and whether the list is a permission rule.",
    ),
    SyntaxLab(
        "Reading a Set",
        "how JavaScript represents unique membership",
        "const blockedAppUpdateVersions = new Set(['0.2.16']);\nif (blockedAppUpdateVersions.has(version)) {\n  throw new Error('This release is blocked.');\n}",
        "new Set(...) constructs a Set object from an array. The has method asks whether a value is a member. The if statement branches on that boolean.",
        "The updater can skip a known bad release version without removing every release artifact from GitHub.",
        "A beginner may use arrays for every list. Sets communicate that membership, not order, is the main idea.",
        "Use a Set when the question is 'is this value included?' and duplicates should not matter.",
    ),
    SyntaxLab(
        "Reading a Map cache",
        "how JavaScript stores computed answers by key",
        "const compileToolCache = new Map();\ncompileToolCache.set('git', 'C:/Program Files/Git/cmd/git.exe');\nconst gitPath = compileToolCache.get('git');",
        "new Map creates a key-value store. set writes a key and value. get retrieves the value later.",
        "Compiler detection is expensive if the app searches the machine every time. server.mjs uses maps to remember tool paths and version strings.",
        "The trap is forgetting that get returns undefined when the key is missing. Code should handle that absence.",
        "When reading a cache, look for the key, the stored value, and the invalidation rule.",
    ),
    SyntaxLab(
        "Reading object spread",
        "how objects are copied and extended",
        "return {\n  'X-Content-Type-Options': 'nosniff',\n  ...extra\n};",
        "The ...extra syntax copies properties from the extra object into the returned object. If a copied property has the same name as an earlier property, the later value wins.",
        "securityHeaders uses this to keep standard headers while still allowing a response to add content type or cache fields.",
        "The trap is thinking spread is deep. It copies the top level. Nested objects can still be shared.",
        "When you see spread, ask what base object is being copied and what is allowed to override it.",
    ),
    SyntaxLab(
        "Reading default parameters",
        "how a function supplies a value when the caller omits one",
        "function securityHeaders(extra = {}) {\n  return { ...extra };\n}",
        "extra = {} means the function receives an empty object when the caller does not pass a value. That keeps the spread operation from failing.",
        "Default parameters make helper functions easier to call safely from many endpoints.",
        "The trap is using a default that hides a required input. Defaults should represent safe optional behavior.",
        "When a parameter has a default, ask whether the function can truly do useful work without the caller supplying that value.",
    ),
    SyntaxLab(
        "Reading a JSON response helper",
        "how one function standardizes response shape",
        "function sendJson(response, status, data) {\n  response.writeHead(status, { 'Content-Type': 'application/json' });\n  response.end(JSON.stringify(data, null, 2));\n}",
        "The parameters name the HTTP response object, numeric status, and data payload. JSON.stringify turns the data object into text. response.end sends the final body.",
        "server.mjs uses a fuller version of this helper so every API answer uses consistent headers and no-store cache behavior.",
        "The trap is returning raw JavaScript objects to an HTTP response. HTTP bodies are bytes or text, so the object must be serialized.",
        "When reading a response helper, identify when headers are written and when the body is ended.",
    ),
    SyntaxLab(
        "Reading request-body collection",
        "how asynchronous chunks become one string",
        "let raw = '';\nfor await (const chunk of request) {\n  raw += chunk;\n}\nconst body = JSON.parse(raw);",
        "let is used because raw changes as chunks arrive. for await...of reads an asynchronous stream. JSON.parse converts the final text into an object.",
        "readRequestJson uses this pattern with a size limit so browser POST bodies can be received safely.",
        "The trap is parsing before all chunks have arrived or accepting unlimited body size.",
        "When reading stream code, find the accumulator, the loop, the limit, and the final conversion.",
    ),
    SyntaxLab(
        "Reading a guard clause",
        "how a function stops early when a condition fails",
        "if (!question) {\n  sendJson(response, 400, { error: 'Question is required.' });\n  return;\n}",
        "The ! operator reverses truthiness. The function sends an error response and returns immediately, so the rest of the function does not run.",
        "handlePortfolioAi uses this shape before spending work on context enrichment or model calls.",
        "The trap is continuing after an error response. Sending two responses to one HTTP request causes confusing failures.",
        "When you see return inside an if block, ask what unsafe or unnecessary work it prevents.",
    ),
    SyntaxLab(
        "Reading path normalization",
        "how code converts path pieces into a safe absolute path",
        "const target = path.normalize(path.join(root, ...segments));\nif (!target.startsWith(root)) {\n  throw new Error('Path escaped the workspace.');\n}",
        "path.join combines the root and segments. The ...segments syntax passes each array item as a separate argument. startsWith checks whether the final path still belongs under the approved root.",
        "resolveInsideRoot and its sibling helpers are central because uploads, drafts, static files, compile files, and publish mirrors all touch disk.",
        "The trap is checking the raw input instead of the final normalized path. Attack text can look harmless before normalization.",
        "When reading filesystem code, follow the path from user input to final absolute path.",
    ),
    SyntaxLab(
        "Reading a regular-expression test",
        "how code detects a language clue",
        "if (/\\b(module|endmodule|always|assign)\\b/.test(source)) {\n  return 'verilog';\n}",
        "The slashes create a regular expression. \\b means word boundary. The parentheses group alternatives. test returns true or false.",
        "server.mjs uses regex language hints so pasted code or uploaded source can be classified before running a compiler or beautifier.",
        "The trap is treating regex detection as perfect. It is a useful hint, not a full parser.",
        "When reading regex, translate it into an English sentence before trusting it.",
    ),
    SyntaxLab(
        "Reading a filename sanitizer",
        "how code turns user text into a safe file segment",
        "const safe = String(value || 'file')\n  .trim()\n  .replace(/[^a-z0-9._-]+/gi, '-')\n  .slice(0, 80);",
        "The expression is a method chain. String converts the input. trim removes edge whitespace. replace swaps unsupported characters. slice limits length.",
        "Upload and compile features need sanitized filenames because user-supplied names should not become arbitrary filesystem instructions.",
        "The trap is believing sanitizing a name is enough. The final path still needs root-boundary validation.",
        "When reading a sanitizer, identify what it removes, what it keeps, and how long the output may be.",
    ),
    SyntaxLab(
        "Reading optional chaining",
        "how code safely reaches into an object that might be missing",
        "const message = data?.error?.message || 'OpenAI request failed.';",
        "The ?. operator stops property access when the value on the left is null or undefined. The || fallback supplies text when the chosen value is falsy.",
        "OpenAI, GitHub, Git, and compiler responses may have different shapes when they fail. Optional chaining keeps error reporting from crashing while reporting an error.",
        "The trap is overusing || when an empty string or zero should be respected. For absence-only fallbacks, use ??.",
        "When you see optional chaining, ask which object may be missing and what fallback the code chooses.",
    ),
    SyntaxLab(
        "Reading nullish coalescing",
        "how code falls back only for null or undefined",
        "const exitCode = result.code ?? 'unknown';\nconst stdout = result.stdout ?? '';",
        "The ?? operator chooses the right-hand value only when the left side is null or undefined. It preserves zero and empty strings.",
        "Terminal output often contains empty strings that are meaningful. A command can have no stdout and still be successful.",
        "The trap is replacing empty output with a fallback and accidentally making the UI look like output existed.",
        "Use ?? when absence is the problem, not every falsy value.",
    ),
    SyntaxLab(
        "Reading an async filesystem write",
        "how code waits for local storage to finish",
        "await mkdir(folder, { recursive: true });\nawait writeFile(filePath, Buffer.from(base64, 'base64'));",
        "await pauses the async function until each filesystem promise settles. The recursive option creates missing parent folders. Buffer.from decodes base64 bytes before writing.",
        "The upload endpoint uses this shape to store files under the project docs folder.",
        "The trap is writing a file before the folder exists or forgetting to decode binary upload data.",
        "When reading file writes, check the folder creation, the content conversion, and the final path.",
    ),
    SyntaxLab(
        "Reading a try/catch around a feature",
        "how endpoint code converts failure into JSON",
        "try {\n  const result = await compileAndRunCode(body);\n  sendJson(response, 200, { ok: result.ok, result });\n} catch (error) {\n  sendJson(response, 400, { ok: false, error: error.message });\n}",
        "The try block contains the normal path. The catch block receives thrown errors and sends a controlled response instead of crashing the server.",
        "server.mjs uses this structure around compiler, GitHub, update, upload, and save operations.",
        "The trap is swallowing the error without sending enough context back to the UI.",
        "When reading catch blocks, ask what the user will see and what detail remains available for debugging.",
    ),
    SyntaxLab(
        "Reading array filtering",
        "how code keeps only useful items",
        "const textFiles = files.filter((file) => githubTextFilePattern.test(file.path));",
        "filter calls the arrow function once for each item. Items whose callback returns true are included in the new array.",
        "The AI source reader uses filtering to avoid fetching binary or irrelevant repository files.",
        "The trap is doing expensive work inside a filter when a simpler pre-check would discard most items earlier.",
        "When reading filter, say the rule out loud: keep files whose path matches the text-file pattern.",
    ),
    SyntaxLab(
        "Reading array mapping",
        "how code transforms every item in a list",
        "const labels = projects.map((project) => project.title || project.id);",
        "map returns a new array where each output item comes from one input item. The original array is not changed by map itself.",
        "Project and AI context code often transforms rich project objects into shorter labels, excerpts, or searchable text.",
        "The trap is using map for side effects and ignoring the returned array. forEach is clearer when no transformed result is needed.",
        "When reading map, identify the input item, the output expression, and where the new array is used.",
    ),
    SyntaxLab(
        "Reading array sorting",
        "how code ranks results",
        "const ranked = [...matches].sort((a, b) => b.score - a.score);",
        "The spread creates a shallow copy before sort mutates the array. The comparison callback orders higher scores first.",
        "Search and AI context features need ranking so the most relevant files or project sections appear first.",
        "The trap is forgetting that sort mutates its array. Copying first preserves the original order for other uses.",
        "When reading sort, check whether the code copies first and what the comparison returns.",
    ),
    SyntaxLab(
        "Reading a generated command",
        "how arrays represent executable arguments",
        "const args = ['-std=c++20', '-Wall', sourceFile, '-o', outputFile];\nconst result = await runProcess(gpp, args, { cwd: workspace });",
        "The command is split into an executable and an argument array. The cwd option says which folder the process should run inside.",
        "The compile feature uses this structure so compiler flags, source files, and output paths stay separate.",
        "The trap is building one long shell string with untrusted text. Argument arrays are easier to reason about and safer.",
        "When reading command code, find the executable, argument list, working directory, timeout, and output handling.",
    ),
    SyntaxLab(
        "Reading Promise-based process output",
        "how a spawned program becomes a structured result",
        "const child = spawn(command, args, options);\nchild.stdout.on('data', (chunk) => { stdout += chunk; });\nchild.stderr.on('data', (chunk) => { stderr += chunk; });",
        "spawn starts the process. The data event fires whenever output arrives. The callback appends each chunk to the accumulated output string.",
        "runProcess needs this behavior so compiler and simulator output can be returned to the builder terminal.",
        "The trap is reading only stdout. Many compilers report diagnostics on stderr even when the process exits with useful information.",
        "When reading process code, track stdout, stderr, exit code, timeout, and cleanup.",
    ),
    SyntaxLab(
        "Reading a timeout",
        "how code prevents an operation from running forever",
        "const timer = setTimeout(() => {\n  timedOut = true;\n  child.kill();\n}, timeoutMs);",
        "setTimeout schedules a callback. The callback records that the operation timed out and kills the child process.",
        "Compiler runs, installer runs, and network operations need limits so the app does not appear frozen forever.",
        "The trap is forgetting to clear a timeout when work finishes normally. A late timeout can interfere with completed work.",
        "When reading timeout code, find where the timer is created, where it is cleared, and what happens when it fires.",
    ),
    SyntaxLab(
        "Reading a URL constructor",
        "how code parses request paths safely",
        "const url = new URL(request.url || '/', `http://${request.headers.host}`);\nif (url.pathname.startsWith('/api/')) {\n  await handleApi(request, response, url);\n}",
        "new URL needs a full base URL when the request URL is relative. pathname then exposes the path without query string confusion.",
        "The server startup code uses URL parsing before deciding whether a request is an API call or a static file request.",
        "The trap is splitting raw URL strings by hand and missing encoding, query strings, or missing values.",
        "When reading routing code, identify which URL property controls the route.",
    ),
    SyntaxLab(
        "Reading decodeURIComponent",
        "how encoded URL text becomes a path-like string",
        "const pathname = url.pathname === '/' ? '/index.html' : decodeURIComponent(url.pathname);",
        "The conditional expression chooses index.html for the root path. decodeURIComponent converts URL-encoded characters back into normal text.",
        "Static serving needs this because browser URLs may contain encoded spaces or other characters.",
        "The trap is decoding and then trusting the result without path boundary checks.",
        "When you see URL decoding, look immediately for normalization and root validation afterward.",
    ),
    SyntaxLab(
        "Reading content-type lookup",
        "how extension maps become response headers",
        "const contentType = types[path.extname(filePath)] || 'application/octet-stream';",
        "path.extname extracts the extension. The object lookup checks whether that extension has a known content type. The fallback handles unknown binary-like files.",
        "The static server uses this expression so browsers render CSS, JavaScript, PDFs, images, and icons correctly.",
        "The trap is serving JavaScript or CSS with a generic or wrong type, which can make browsers reject or misread the file.",
        "When reading lookup code, identify the key, the map, and the fallback.",
    ),
    SyntaxLab(
        "Reading a response end",
        "how an HTTP reply is completed",
        "response.writeHead(200, { 'Content-Type': contentType });\nresponse.end(body);",
        "writeHead sends status and headers. end sends the body and closes the response.",
        "Every request must eventually receive one completed response. Static serving uses this for file bytes, and API helpers use it for JSON text.",
        "The trap is trying to write another response after end has already been called.",
        "When reading HTTP code, find the one path that ends the response for each branch.",
    ),
    SyntaxLab(
        "Reading a fetch request",
        "how backend JavaScript calls an external API",
        "const openAiResponse = await fetch('https://api.openai.com/v1/responses', {\n  method: 'POST',\n  headers: { Authorization: `Bearer ${apiKey}` },\n  body: JSON.stringify(payload)\n});",
        "fetch receives a URL and an options object. The method selects POST. headers carries authorization and content type information. body sends serialized JSON.",
        "handlePortfolioAi uses this pattern when an OpenAI API key is configured.",
        "The trap is forgetting to stringify the body or accidentally exposing an API key in browser code.",
        "When reading fetch, identify the URL, method, headers, body shape, and error handling after the response.",
    ),
    SyntaxLab(
        "Reading fallback model logic",
        "how code tries a second option after a specific failure",
        "if (!openAiResponse.ok && fallbackModel && fallbackModel !== model) {\n  ({ data, openAiResponse, selectedModel } = await callModel(fallbackModel));\n}",
        "The condition checks several requirements. The assignment uses destructuring with parentheses because the target variables already exist.",
        "The AI feature can retry with a fallback model when the preferred model is unavailable and no explicit model override was supplied.",
        "The trap is retrying every error blindly. Some errors should be shown immediately instead of repeated.",
        "When reading fallback logic, identify which failures qualify and what state is replaced by the retry.",
    ),
    SyntaxLab(
        "Reading object shorthand",
        "how property names can come from variable names",
        "const ok = true;\nconst file = 'projects.local.json';\nsendJson(response, 200, { ok, file });",
        "Inside an object literal, ok is shorthand for ok: ok and file is shorthand for file: file.",
        "server.mjs uses shorthand frequently in JSON responses because the variable names already describe the response fields.",
        "The trap is missing that the property name and variable name are the same. The object still has explicit fields.",
        "When reading shorthand, mentally expand it once, then keep reading normally.",
    ),
    SyntaxLab(
        "Reading nested objects",
        "how response data can carry structured detail",
        "sendJson(response, 200, {\n  ok: false,\n  publish: {\n    pushed: false,\n    authorizationRequired: true\n  }\n});",
        "The outer object describes the API response. The nested publish object groups publishing-specific detail.",
        "Apply to site uses nested detail so the frontend can show whether the catalog saved, whether publishing was blocked, and why.",
        "The trap is flattening everything into one level and creating vague names. Nested objects preserve meaning.",
        "When reading nested data, identify what each level represents.",
    ),
    SyntaxLab(
        "Reading string cleanup",
        "how text is made compact and safe for prompts",
        "const compact = String(value || '')\n  .replace(/\\s+/g, ' ')\n  .trim()\n  .slice(0, 12000);",
        "The chain converts to text, compresses whitespace, removes edge spaces, and applies a maximum length.",
        "AI context and public source excerpts need this kind of cleanup so prompts stay useful and bounded.",
        "The trap is cleaning so aggressively that meaningful line breaks or code formatting are lost. Different content types need different cleanup rules.",
        "When reading cleanup code, ask whether it is preparing prose, code, filenames, URLs, or JSON.",
    ),
    SyntaxLab(
        "Reading HTML stripping",
        "how a backend turns markup into plain text",
        "const text = htmlText\n  .replace(/<script[\\s\\S]*?<\\/script>/gi, ' ')\n  .replace(/<[^>]+>/g, ' ');",
        "The first replace removes script blocks. The second replace removes remaining tags. The flags make the regex global and case-insensitive.",
        "The AI context builder may fetch public pages and needs text, not raw HTML markup.",
        "The trap is treating regex stripping as a perfect HTML parser. It is a practical cleanup step for safe excerpts, not a full browser.",
        "When reading HTML cleanup, check whether script and style content are removed before tags are stripped.",
    ),
    SyntaxLab(
        "Reading branch-specific Git commands",
        "how command arrays express repository actions",
        "await runPublishGit(['fetch', 'origin', branch]);\nawait runPublishGit(['push', 'origin', branch]);",
        "Each command is an array of arguments. The branch variable becomes one argument, not part of a shell string.",
        "Publishing and loading from target rely on Git commands because the website lives in a GitHub Pages repository.",
        "The trap is hardcoding master when the repository branch is main, or vice versa. The code should resolve and use the configured branch.",
        "When reading Git code, trace which branch is being used and where it came from.",
    ),
    SyntaxLab(
        "Reading a commit decision",
        "how code avoids empty commits",
        "const hasChanges = status.stdout.trim().length > 0;\nif (hasChanges) {\n  await runPublishGit(['commit', '-m', message]);\n}",
        "trim removes whitespace. length checks whether any status text remains. The commit runs only when tracked publish paths actually changed.",
        "Apply to site should not create meaningless commits when the saved site output matches the repository.",
        "The trap is committing every time a button is clicked, which creates noisy history and makes real changes harder to review.",
        "When reading publish code, find how it decides whether a commit is necessary.",
    ),
    SyntaxLab(
        "Reading a local-only route",
        "how the backend blocks privileged network requests",
        "if (!isLocalRequest(request)) {\n  sendJson(response, 403, { error: 'Write actions are only allowed from this computer.' });\n  return true;\n}",
        "The ! operator flips the result. 403 says forbidden. Returning true tells the outer server that the request has been handled.",
        "The backend uses this pattern before write actions, compiler operations, target authentication, security reports, and update starts.",
        "The trap is exposing dangerous local functions to other devices on the network because the preview server listens on a reachable host.",
        "When reading a privileged endpoint, look for the local-request gate before the side effect.",
    ),
    SyntaxLab(
        "Reading a body shape check",
        "how code refuses malformed catalog data",
        "if (!catalog || !Array.isArray(catalog.categories) || !Array.isArray(catalog.projects)) {\n  sendJson(response, 400, { error: 'Catalog must include categories and projects arrays.' });\n  return true;\n}",
        "The condition checks presence and array types. The || operator means any failed check triggers the error response.",
        "Save draft and Apply to site need this because the catalog is the public website's main data model.",
        "The trap is saving whatever the browser sends. A broken catalog can break previews and the live site.",
        "When reading validation, list each required field and the type check used for it.",
    ),
    SyntaxLab(
        "Reading an upload decode",
        "how a data URL becomes bytes on disk",
        "const base64 = String(body.data || '').replace(/^data:[^;]+;base64,/, '');\nawait writeFile(filePath, Buffer.from(base64, 'base64'));",
        "The replace removes the data URL prefix if one exists. Buffer.from decodes the remaining base64 text into bytes before writing.",
        "The upload route uses this for images, PDFs, source files, schematics, and other evidence files.",
        "The trap is writing the base64 text itself instead of decoded bytes, which creates corrupted files.",
        "When reading upload code, follow the data from request field to decoded buffer to final path.",
    ),
    SyntaxLab(
        "Reading a content manifest",
        "how a list of paths becomes publish behavior",
        "for (const relativePath of publishPaths) {\n  const sourcePath = resolveInsideRoot(relativePath);\n  const targetPath = resolveInsidePortfolioRoot(relativePath);\n}",
        "for...of steps through each allowlisted path. Each path is resolved against both the builder root and portfolio root.",
        "syncPortfolioPublishFiles uses this pattern to copy website-safe files into the publish mirror.",
        "The trap is copying the whole app folder. The allowlist prevents internal builder files from leaking into the public site.",
        "When reading synchronization code, identify the source root, target root, and path allowlist.",
    ),
    SyntaxLab(
        "Reading a function that returns a rich object",
        "how backend features report multiple facts at once",
        "return {\n  copied,\n  skipped,\n  workspace: portfolioRoot,\n  separatedWorkspace: true\n};",
        "The returned object carries arrays, a path, and a boolean. The caller can display or log whichever fields matter.",
        "Publishing synchronization returns this kind of object so the UI can explain what was copied and what was skipped.",
        "The trap is returning only true or false from complex operations. A boolean cannot explain what happened.",
        "When reading returns, ask what the caller needs to know next.",
    ),
    SyntaxLab(
        "Reading model instructions as data",
        "how long strings can become behavior contracts",
        "const portfolioAiInstructions = [\n  'Answer the visitor question first.',\n  'Do not invent portfolio projects.'\n].join('\\n');",
        "The array stores separate instruction strings. join('\\n') turns them into one newline-separated prompt.",
        "The AI feature uses this as a developer instruction block before sending the visitor question and portfolio context.",
        "The trap is treating prompts as random prose. In an AI-backed feature, prompt text is application logic.",
        "When reading AI code, treat instructions, context construction, model selection, and response extraction as separate responsibilities.",
    ),
    SyntaxLab(
        "Reading conversation history",
        "how prior messages influence a new answer",
        "const conversation = cleanConversationHistory(body.conversation);\nconst context = await enrichPortfolioContext({ ...(body.context || {}), question });",
        "The first line sanitizes recent messages. The second line creates a context object by spreading existing context and adding the current question.",
        "Ask My Portfolio needs this because follow-up questions depend on what was asked earlier.",
        "The trap is sending unlimited chat history to a model. Useful history should be cleaned and bounded.",
        "When reading chat code, find where history is limited and how it combines with the current question.",
    ),
    SyntaxLab(
        "Reading a provider fallback",
        "how the backend chooses between local and cloud AI",
        "if (!apiKey) {\n  const ollama = await callOllamaPortfolioAi({ question, intent, conversation, context });\n  if (ollama.ok) {\n    sendJson(response, 200, { answer: ollama.answer, provider: 'ollama' });\n    return;\n  }\n}",
        "The outer if checks whether OpenAI is configured. The inner if checks whether the local Ollama answer succeeded. The return stops the cloud path from running afterward.",
        "This lets the website assistant work with a local model when no cloud key is available.",
        "The trap is falling through after a successful fallback and accidentally attempting another provider.",
        "When reading fallback code, find the success return that prevents duplicate work.",
    ),
    SyntaxLab(
        "Reading update handoff code",
        "how a running app prepares to replace itself",
        "const child = spawn('cmd.exe', ['/d', '/c', launcherCommandPath], {\n  detached: true,\n  stdio: 'ignore',\n  windowsHide: true\n});\nchild.unref();",
        "spawn starts a command process. detached lets it survive independently. stdio ignore disconnects it from the current process. unref allows the current Node process to exit.",
        "The updater uses this because the app must close before its files can be replaced and then relaunched.",
        "The trap is trying to run the installer inside the same process that is about to be shut down.",
        "When reading update code, identify the handoff process and why it must survive app exit.",
    ),
    SyntaxLab(
        "Reading event emission",
        "how code announces something happened",
        "process.emit('omb-builder-update-started', {\n  installerPath,\n  launcherPath,\n  updateLogPath\n});",
        "emit names an event and passes an object payload. Other code can listen for that event if it needs to react.",
        "The update launcher uses this to announce that the external update handoff has started.",
        "The trap is assuming emitted events are stored forever. If nobody listens at the time, the event is simply emitted and gone.",
        "When reading events, find both the emit side and any listener side.",
    ),
    SyntaxLab(
        "Reading endpoint fallthrough",
        "how a function tells the caller it did not handle a route",
        "if (request.method !== 'POST') return false;\nreturn false;",
        "Returning false means the API switchboard did not handle the request. The outer server can then continue with another response path.",
        "handleApi uses true for handled routes and false when the path is not one of its endpoints.",
        "The trap is forgetting to return after handling a route. Fallthrough can accidentally trigger a second response.",
        "When reading a router, track which branches return true, which return false, and which send a response.",
    ),
]


def extract_braced_block(source: str, start: int) -> str:
    brace = source.find("{", start)
    if brace == -1:
        return source[start:].strip()
    depth = 0
    quote = ""
    index = brace
    while index < len(source):
        char = source[index]
        if quote:
            if char == "\\":
                index += 2
                continue
            if char == quote:
                quote = ""
        else:
            if char in {"'", '"', "`"}:
                quote = char
            elif char == "{":
                depth += 1
            elif char == "}":
                depth -= 1
                if depth == 0:
                    return source[start : index + 1].strip()
        index += 1
    return source[start:].strip()


def extract_function(source: str, name: str) -> str:
    pattern = re.compile(rf"(?m)^(?:async\s+)?function\s+{re.escape(name)}\s*\(")
    match = pattern.search(source)
    if not match:
        return ""
    return extract_braced_block(source, match.start())


def extract_const(source: str, name: str) -> str:
    pattern = re.compile(rf"(?m)^const\s+{re.escape(name)}\s*=")
    match = pattern.search(source)
    if not match:
        return ""
    start = match.start()
    index = match.end()
    depth = 0
    quote = ""
    while index < len(source):
        char = source[index]
        if quote:
            if char == "\\":
                index += 2
                continue
            if char == quote:
                quote = ""
        else:
            if char in {"'", '"', "`"}:
                quote = char
            elif char in "{[(":
                depth += 1
            elif char in "}])" and depth:
                depth -= 1
            elif char == ";" and depth == 0:
                return source[start : index + 1].strip()
        index += 1
    return source[start:index].strip()


def extract_import_block(source: str) -> str:
    lines = []
    for line in source.splitlines():
        if line.startswith("import "):
            lines.append(line)
        elif lines:
            break
    return "\n".join(lines)


def extract_startup_constants(source: str) -> str:
    wanted = ["root", "portfolioRoot", "compileRoot", "port", "host", "execFileAsync", "packageJson"]
    snippets = [extract_const(source, name) for name in wanted]
    return "\n".join(snippet for snippet in snippets if snippet)


def first_source_lines(code: str, max_lines: int) -> str:
    lines = code.splitlines()
    if len(lines) <= max_lines:
        return code
    return "\n".join(lines[:max_lines] + ["// The rest of this function is explained in the feature chapters."])


def extract_server_startup(source: str) -> str:
    marker = "createServer(async (request, response) =>"
    start = source.find(marker)
    if start == -1:
        return ""
    return source[start:].strip()


def add_cover(story: list) -> None:
    story.append(Spacer(1, 1.05 * inch))
    story.append(Paragraph("server.mjs Textbook Guide", STYLES["BookTitle"]))
    story.append(
        Paragraph(
            "A JavaScript-first, feature-based explanation of the OMB Portfolio Builder local backend.",
            STYLES["Subtitle"],
        )
    )
    add_p(
        story,
        "This PDF is written for a reader who is new to JavaScript but wants to understand how the actual backend works. It begins with a long JavaScript primer, then returns to server.mjs and explains the file by features: how requests are routed, how drafts are saved, how files are uploaded, how code is compiled, how GitHub publishing is authenticated, how AI requests are handled, and how updates are launched.",
        "BodyNoIndent",
    )
    add_p(
        story,
        "The explanations avoid line-number references because the code will change. Instead, each chapter names the behavior being built and embeds the relevant variables and functions inside the surrounding explanation. Source excerpts are included only where they help the reader connect the prose to the real implementation.",
        "BodyNoIndent",
    )
    story.append(PageBreak())


def add_manual_toc(story: list) -> None:
    add_heading(story, "How To Read This PDF", 1)
    add_p(
        story,
        "The first half is a JavaScript introduction. It is intentionally long because a backend file is easier to understand when the language stops feeling mysterious. Read it like a textbook chapter: each subsection introduces one language idea, explains the intuition, shows a small example, and then connects that idea to the backend.",
    )
    add_p(
        story,
        "The second half is organized by features rather than by raw source order. If you want to understand what happens when the builder saves a draft, go to the Save Draft feature. If you want to understand the Compile Code workspace, go to the Compile Code feature. This mirrors how a real user experiences the app.",
    )
    add_p(
        story,
        "The code excerpts are not reference labels. They are placed in the chapter where the code earns its meaning. Read the prose first, then read the source excerpt, then return to the following paragraphs to understand how the important variables, helper calls, return objects, and side effects fit together.",
    )
    story.append(PageBreak())


def add_javascript_primer(story: list) -> None:
    add_heading(story, "Chapter 1: JavaScript Syntax For A New Reader", 1)
    add_p(
        story,
        "This chapter teaches the JavaScript syntax needed to read server.mjs. It does not assume that the reader already thinks in JavaScript. The goal is to turn symbols into ideas: braces become boundaries, functions become named procedures, promises become delayed work, objects become labeled bundles, and async code becomes a way to keep the app responsive while files, commands, Git, and AI calls take time.",
    )
    add_p(
        story,
        "The examples are deliberately small. They are not toy examples in the insulting sense; they are reduced circuits. A simple circuit teaches one idea more cleanly than a crowded board. After each idea is clear, the later chapters reconnect it to the larger backend.",
    )
    for number, topic in enumerate(JS_TOPICS, start=1):
        add_heading(story, f"1.{number} {topic.title}", 2)
        add_p(story, topic.concept)
        add_p(story, topic.analogy)
        add_p(story, topic.syntax)
        add_code(story, topic.example, "A small example makes the syntax visible before the server code uses it in a larger setting.")
        add_p(story, topic.server_link)
        add_p(story, topic.mistake)
    add_heading(story, "1.51 Slow Syntax Reading Lab", 2)
    add_p(
        story,
        "The previous sections taught the ideas one at a time. This section slows down realistic backend-shaped fragments and reads them as JavaScript. The point is not to memorize the examples. The point is to build the habit of seeing punctuation, operators, function calls, data shapes, and control flow as readable design decisions.",
    )
    add_p(
        story,
        "Each subsection below keeps the explanation inside normal prose. There are no reference cards to memorize. Read the code, then read how the syntax behaves, then connect that behavior back to server.mjs.",
    )
    for index, lab in enumerate(SYNTAX_LABS, start=1):
        add_heading(story, f"1.51.{index} {lab.title}", 3)
        add_p(story, f"This reading lab focuses on {lab.focus}.")
        add_code(story, lab.code, "Study the fragment as a miniature version of the same syntax used by the backend.")
        add_p(story, lab.syntax_marks)
        add_p(story, lab.server_connection)
        add_p(story, lab.trap)
        add_p(story, lab.practice)
    add_real_server_syntax_walkthrough(story)
    add_javascript_checkpoint_section(story)
    story.append(PageBreak())


def add_javascript_checkpoint_section(story: list) -> None:
    add_heading(story, "1.53 Beginner Syntax Checkpoints Before Reading The Server Features", 2)
    add_p(
        story,
        "Before leaving the JavaScript primer, it helps to name the reading habits that make server.mjs approachable. These are not abstract rules. They are the mental checkpoints that prevent a beginner from getting lost when a real backend function combines several syntax ideas at once.",
    )
    checkpoints = [
        (
            "Separate the data shape from the action",
            "When a function creates an object, array, or string, it is usually shaping information. When it calls writeFile, spawn, fetch, sendJson, or runPublishGit, it is doing something with the outside world. Read the data shape first, then read the side effect.",
            "const payload = { ok: true, file: 'projects.json' };\nsendJson(response, 200, payload);",
        ),
        (
            "Find the guard before the feature body",
            "Most safe backend features begin by refusing bad inputs. A guard clause may reject a missing question, a malformed catalog, a non-local request, or an unauthenticated publishing target. Once the guard returns, the rest of the function can assume a cleaner starting point.",
            "if (!Array.isArray(catalog.projects)) {\n  sendJson(response, 400, { error: 'Projects must be an array.' });\n  return true;\n}",
        ),
        (
            "Track async boundaries",
            "Every await marks a boundary where JavaScript is waiting for something outside the immediate function body: a file, a process, a network response, or a Git command. When debugging, the most useful question is often what promise is being awaited and what can fail there.",
            "const body = await readRequestJson(request);\nconst status = await runProcess(command, args, options);",
        ),
        (
            "Treat strings differently depending on purpose",
            "A string can be display text, a filename, a URL, a Git command argument, a model prompt, or source code. The same JavaScript type can require different validation depending on where it will be used.",
            "const title = String(body.title || '').trim();\nconst fileName = safeFileName(body.fileName);",
        ),
        (
            "Read object literals as contracts",
            "When an endpoint returns an object, that object becomes a contract with the frontend. Fields such as ok, error, result, stdout, publish, and target are not random. They determine what the user interface can display after the request completes.",
            "return {\n  ok: result.code === 0,\n  stdout: result.stdout,\n  stderr: result.stderr\n};",
        ),
        (
            "Notice where helpers prevent repeated mistakes",
            "Helpers such as sendJson, resolveInsideRoot, normalizeCodeLanguage, and runProcess exist because the same mistake would be dangerous if repeated differently across endpoints. A helper is often the place where a rule becomes enforceable.",
            "const filePath = resolveInsideRoot('docs', projectId, section, fileName);\nsendJson(response, 200, { ok: true, url });",
        ),
        (
            "Read route code from the user's click",
            "The cleanest way to read handleApi is to start with a button or panel in the app. Save draft, Apply to site, Authenticate target, Load from target, Compile, Simulate, Upload, Update, and Ask My Portfolio each map to a route branch.",
            "if (url.pathname === '/api/code/compile') {\n  const result = await compileAndRunCode(body);\n  sendJson(response, 200, { ok: result.ok, result });\n}",
        ),
        (
            "Watch for values that cross trust boundaries",
            "A value crosses a trust boundary when it moves from browser input into filesystem paths, command arguments, Git operations, or AI prompts. Those crossings are where JavaScript syntax becomes security design.",
            "const projectId = safeSegment(body.projectId, 'project');\nconst folder = resolveInsideRoot('docs', projectId);",
        ),
        (
            "Prefer a boring return shape",
            "Exciting code is usually bad backend code. A good result object is boring, predictable, and easy for the UI to render. The reader should not need to guess whether a function returns text, an object, null, or throws for normal outcomes.",
            "return {\n  ok: true,\n  artifacts,\n  terminal: processTerminalText(result)\n};",
        ),
        (
            "Use comments only when names are not enough",
            "A beginner may want to comment every line, but a mature backend relies on names, structure, and small helpers first. Comments should explain why a fallback exists, why a failure is ignored, or why a Windows-specific path is being searched.",
            "// Try the next candidate because Windows PATH often misses tool installs.\ncontinue;",
        ),
    ]
    for index, (title, text, code) in enumerate(checkpoints, start=1):
        add_heading(story, f"1.53.{index} {title}", 3)
        add_p(story, text)
        add_code(story, code, "This checkpoint is shown with a small fragment so the habit has something concrete to attach to.")


def add_real_server_syntax_walkthrough(story: list) -> None:
    source = SERVER_PATH.read_text(encoding="utf-8")
    add_heading(story, "1.52 Reading Real server.mjs Syntax In Context", 2)
    add_p(
        story,
        "This final JavaScript section uses real pieces of server.mjs. The purpose is still syntax, not feature documentation. The feature chapters later explain why each behavior exists. Here, the goal is to practice reading realistic JavaScript without turning the explanation into reference cards.",
    )
    add_p(
        story,
        "Notice the rhythm: imports bring tools in, constants define shared state, objects and arrays encode rulebooks, functions name repeatable behavior, async helpers wait for slow work, and route handlers translate browser actions into backend operations. That rhythm appears across the whole file.",
    )
    real_sections = [
        (
            "The import block shows the file's operating powers",
            extract_import_block(source),
            [
                "Every import line is a clue. HTTP support means the file can listen for requests. child_process means it can run external programs. fs/promises means it can touch files asynchronously. path and url mean it converts between operating-system paths and request addresses.",
                "The named imports in braces are individual tools taken from a module. The default import path is a local name for a module object. A new JavaScript reader should read this area as the backend's tool inventory.",
            ],
        ),
        (
            "Startup constants show conversion, fallbacks, and top-level await",
            extract_startup_constants(source),
            [
                "This block is a compact lesson in module-level state. The root path is calculated from import.meta.url, workspace roots are resolved with path helpers, port is converted from environment text into a number, and packageJson is read with top-level await.",
                "The syntax is doing practical work. It lets the same backend run under Electron, PowerShell, a packaged app, or a development shell without hardcoding every path.",
            ],
        ),
        (
            "MIME types show object lookup syntax",
            extract_const(source, "types"),
            [
                "The types object is not a class or a database. It is a lookup table. A file extension is used as the key, and the server receives a content type as the answer.",
                "The syntax also shows quoted property names. Because keys such as .html and .js contain a dot, they need quotes inside the object literal.",
            ],
        ),
        (
            "Publish paths show arrays as safety policy",
            extract_const(source, "publishPaths"),
            [
                "The publishPaths array is ordinary JavaScript syntax, but the meaning is security-sensitive. Each string is a path the publisher is allowed to copy into the website mirror.",
                "A beginner should learn to ask what a list controls. Some arrays are mere display order. This one is an allowlist that decides what can become public.",
            ],
        ),
        (
            "Compiler language profiles show nested object design",
            extract_const(source, "compileLanguageProfiles"),
            [
                "This is the longest object in the syntax primer because it demonstrates nested data. The first level uses language keys. Each language value is another object containing defaultFile, extensions, label, primaryTools, and winget.",
                "Reading nested objects becomes easier when each level is named in English. The outer object answers which language is selected. The inner object answers what that language needs.",
            ],
        ),
        (
            "Compiler tool candidates show arrays inside objects",
            extract_const(source, "compileToolCandidates"),
            [
                "This object is a second rulebook. Instead of language names, the keys are executable tool names. The values are arrays of possible command names or Windows paths.",
                "The syntax combines environment variables, conditional expressions, path.join calls, string literals, and arrays. It looks dense because it is encoding practical Windows discovery behavior.",
            ],
        ),
        (
            "AI instructions show strings as application logic",
            extract_const(source, "portfolioAiInstructions"),
            [
                "portfolioAiInstructions is written as an array of strings and joined with newline characters. This keeps a long prompt readable in source form while still sending one coherent instruction block to the model.",
                "For an AI feature, strings are not filler. They define behavior: answer style, safety limits, when to use portfolio context, when to answer generally, and how to handle public GitHub code.",
            ],
        ),
        (
            "securityHeaders and sendJson show helper composition",
            "\n\n".join([extract_function(source, "securityHeaders"), extract_function(source, "sendJson")]),
            [
                "These helpers show how small functions compose. securityHeaders creates the shared header object. sendJson calls securityHeaders, adds JSON-specific headers, serializes data, and ends the response.",
                "The syntax worth noticing is the object spread, the nested object passed into writeHead, and JSON.stringify with indentation arguments.",
            ],
        ),
        (
            "readRequestJson shows async stream reading",
            extract_function(source, "readRequestJson"),
            [
                "This function contains several beginner-important ideas at once: an async function, a mutable accumulator, a for await loop over request chunks, a size guard, and JSON parsing at the end.",
                "The code is not merely procedural. It is a boundary pattern: receive text slowly, limit it, parse it, and let later routes validate the shape.",
            ],
        ),
        (
            "normalizeCodeLanguage shows aliases and lookup fallback",
            extract_function(source, "normalizeCodeLanguage"),
            [
                "The aliases object maps many human spellings to one internal language key. The return line shows a common JavaScript pattern: try a direct alias, then try a profile lookup, then fall back to JavaScript.",
                "This is a good example of making the interface forgiving while keeping backend behavior strict.",
            ],
        ),
        (
            "findTool shows cache-first async searching",
            extract_function(source, "findTool"),
            [
                "findTool starts with a cache check, then walks through candidates, then asks the operating system where a command exists, then performs special Windows searches for common compilers.",
                "The function demonstrates async control flow in a practical setting: each awaited operation may fail, so the code catches failures and moves to the next candidate rather than ending the entire search.",
            ],
        ),
        (
            "runProcess shows child-process supervision",
            first_source_lines(extract_function(source, "runProcess"), 130),
            [
                "This source excerpt shows the syntax of process control: spawn starts a child, event callbacks collect stdout and stderr, a timeout protects the app from hangs, and the final result object normalizes the outcome.",
                "A new JavaScript reader should notice how many small language ideas combine here. There are objects, arrays, callbacks, timers, promises, string accumulation, and cleanup paths all serving one feature: terminal-style output.",
            ],
        ),
        (
            "handlePortfolioAi shows a complete async decision path",
            first_source_lines(extract_function(source, "handlePortfolioAi"), 160),
            [
                "This excerpt is a realistic async workflow. The function reads JSON, validates the question, cleans conversation history, enriches context, chooses between Ollama and OpenAI, builds a payload, performs fetch, handles fallback, and returns JSON.",
                "The syntax is not random. Each if statement protects a stage, each await waits for a slow boundary, each object literal packages data for another API, and each return prevents the function from falling into the wrong provider path.",
            ],
        ),
    ]
    for index, (title, code, paragraphs) in enumerate(real_sections, start=1):
        add_heading(story, f"1.52.{index} {title}", 3)
        for text in paragraphs:
            add_p(story, text)
        add_code(story, code, "The excerpt below is read here for JavaScript syntax. The later feature chapters explain the broader behavior.")


FEATURES = [
    {
        "title": "Chapter 2: What server.mjs Is Responsible For",
        "sections": [
            (
                "The local backend as the builder's controlled workshop",
                [
                    "server.mjs is the local backend that gives the portfolio builder powers a normal webpage should not have by itself. The frontend can collect text, show project windows, and let a user click buttons. The backend is the controlled workshop that can write files, run compilers, launch Git, start installers, and call private AI providers.",
                    "The file is intentionally not a tiny web server. It is a local application service. That design is reasonable because the builder is local-first: the user can work offline, save drafts locally, attach files, preview the website, and publish only after the target repository is authenticated.",
                    "A helpful way to read the file is to separate the question 'what does this function do?' from the larger question 'which user feature depends on this behavior?' The second question is usually more useful. The Save Draft button, Apply to site button, Compile Code tool, Ask My Portfolio panel, and Update dialog all travel through server.mjs.",
                ],
                ["root", "portfolioRoot", "compileRoot", "port", "host", "publishPaths"],
                [],
            ),
            (
                "The startup shape",
                [
                    "The startup code creates the actual HTTP server. Every request enters through the same front door. If the path begins with /api, the request is handed to the API switchboard. Otherwise, the server treats the request as a static file request and tries to serve a file from the local app root.",
                    "The branch structure is deliberate. API requests can change state, so they receive deeper validation. Static file requests should only read files, and even then the resolved file path must stay inside the app root.",
                    "The final listen call binds the server to a host and port, then prints a preview URL. That printed message is why a developer can tell where the local preview is running.",
                ],
                ["types"],
                ["__server_startup__"],
            ),
        ],
    },
    {
        "title": "Chapter 3: Request Boundaries And JSON Responses",
        "sections": [
            (
                "Security headers as the default response posture",
                [
                    "Before discussing individual endpoints, the file establishes a standard response posture. The securityHeaders helper returns browser-facing headers that reduce accidental exposure. The headers do not magically secure every feature, but they make the default response behavior stricter.",
                    "The extra parameter lets a caller add or override a small number of headers without rewriting the common security posture. That is the important JavaScript idea here: a base object is spread into a new object, then feature-specific fields are added beside it.",
                    "Without this helper, every response branch would have to remember the same header rules. Duplicated security settings drift over time, so the helper keeps one policy close to the top of the file.",
                ],
                [],
                ["securityHeaders"],
            ),
            (
                "JSON responses as the app's common language",
                [
                    "The frontend expects structured answers. sendJson turns a JavaScript object into JSON text, attaches the standard headers, blocks caching, and ends the HTTP response.",
                    "This helper makes route code simpler. Instead of every endpoint remembering status codes, content type, cache rules, and JSON.stringify formatting, each endpoint can focus on the result it is returning.",
                    "The data parameter may contain success information, validation errors, compiler output, publish details, update information, or AI text. The function does not care what feature produced the object. It only cares that the result should travel back to the browser as JSON.",
                ],
                [],
                ["sendJson"],
            ),
            (
                "Reading request bodies without trusting them",
                [
                    "POST routes need request bodies. readRequestJson collects body chunks, enforces a size limit, converts the body to text, and parses it as JSON. This is one of the most important backend boundary functions because all write-style actions depend on it.",
                    "The size limit is not cosmetic. A local app can still be harmed by a huge accidental payload. The helper stops reading once the body is too large and rejects the request rather than letting memory usage grow without control.",
                    "The parsed object is still not automatically trusted. Later endpoint code checks whether the catalog has arrays, whether upload data exists, whether a project id is safe, and whether a GitHub target is valid.",
                ],
                [],
                ["readRequestJson"],
            ),
            (
                "Path resolution as a safety rail",
                [
                    "The builder writes files, accepts uploads, copies publishable assets, and creates compile workspaces. Because of that, path resolution is a security boundary. The backend must never let untrusted input escape the folder it was meant to operate inside.",
                    "The resolveInsideRoot family creates an absolute path and then checks that the path still begins inside the approved root. That pattern is the local filesystem version of a guardrail: a project file can be saved under docs, but it cannot use ../ to climb into a private folder.",
                    "The separate helpers for app root, portfolio root, and compile root make the intent clearer. Public website files, builder app files, and compile artifacts do not all belong in the same safety boundary.",
                ],
                [],
                ["resolveInsideRoot", "resolveInsidePortfolioRoot", "resolveInsideCompileRoot"],
            ),
        ],
    },
    {
        "title": "Chapter 4: API Routing As User Features",
        "sections": [
            (
                "The API switchboard",
                [
                    "handleApi is the backend switchboard. It is large because it replaces what a framework router would normally provide. The important reading strategy is not to memorize every branch. Read it as a sequence of user-facing actions.",
                    "The first part handles GET routes that read information: catalog data, templates, publishing target status, system checks, update information, security reports, and compiler tool status. Then the function blocks non-local write requests before allowing POST routes to do privileged work.",
                    "That ordering matters. Read-only routes are cheap and safe enough to answer directly. Write routes must prove the request is local because they can save files, authenticate GitHub, run compilers, install tools, or publish the website.",
                ],
                [],
                ["handleApi"],
            ),
            (
                "The Save draft and Apply to site buttons",
                [
                    "The same catalog payload supports two different user actions. Save draft writes the local draft file. Apply to site writes the public catalog and then publishes compatible website files to the authenticated Git target.",
                    "The endpoint first validates that the catalog has categories and projects arrays. That validation is a practical data-contract check. If the catalog shape is broken, the builder should not save it as the new truth.",
                    "Apply to site performs an authorization check before writing publishable data. That ordering protects the live website from being changed when GitHub write access has not been verified for the current target.",
                ],
                ["draftPath", "catalogPath", "publishAuthCachePath"],
                ["assertPublishAccess", "publishSiteChanges"],
            ),
            (
                "The Upload button",
                [
                    "The upload endpoint receives base64 file data, a project id, a section name, and a filename. It sanitizes each path segment, creates the destination folder under docs, decodes the bytes, writes the file, and returns a relative URL.",
                    "This feature shows the difference between accepting all file types as evidence and trusting arbitrary paths. The backend can save many file extensions, but it still controls where those files go.",
                    "The returned URL is what the builder stores in project content. Later the parser can render an image, offer a PDF link, or expose a downloadable source file depending on how the project section uses that asset.",
                ],
                [],
                [],
            ),
        ],
    },
    {
        "title": "Chapter 5: Compile Code, Simulation, And Terminal Output",
        "sections": [
            (
                "Language profiles as the IDE rulebook",
                [
                    "The Compile Code workspace needs to know what each language expects. compileLanguageProfiles is the rulebook. It maps each supported language to default filenames, valid extensions, labels, primary tools, and installer hints.",
                    "This is feature-based design. Instead of scattering C, C++, Java, Verilog, SystemVerilog, LTspice, JavaScript, Python, and HTML rules across many functions, the map gives the compiler feature one place to ask what the language needs.",
                    "The map also separates adding code to a project from compiling code. A project section can store any evidence file, while the compile workspace only executes languages with supported toolchains.",
                ],
                ["compileLanguageProfiles", "compileToolCandidates"],
                ["normalizeCodeLanguage", "detectCodeLanguageFromSource"],
            ),
            (
                "Finding compilers on Windows",
                [
                    "findTool is the bridge between an IDE button and the messy reality of installed tools. It checks cached answers first, tries known candidates, asks the operating system where a command lives, and searches likely install folders for compilers that Windows PATH may not expose.",
                    "The cache matters because tool detection can become slow if every compile click scans the same folders again. Once gcc, g++, javac, java, iverilog, vvp, node, or python is found, the backend remembers the path.",
                    "This is also why the function returns an empty string instead of pretending a missing tool exists. The UI can show a clear missing-tool message rather than letting a compile command fail mysteriously.",
                ],
                ["compileToolCache", "compileToolVersionCache"],
                ["findTool"],
            ),
            (
                "Running external programs",
                [
                    "runProcess is the terminal engine. It starts a program, passes arguments, captures stdout and stderr, tracks elapsed time, handles timeouts, and returns a structured result.",
                    "This function is where JavaScript leaves pure language behavior and coordinates with the operating system. The backend is no longer just calculating values; it is supervising another process.",
                    "The result object is designed for the UI. Terminal text can be shown immediately, messages can be logged, and errors can be explained without asking the user to inspect a hidden PowerShell window.",
                ],
                [],
                ["runProcess"],
            ),
            (
                "Building the compile workspace",
                [
                    "Before a compiler can run, the backend has to turn the UI's workspace payload into real files. compileWorkspaceFilesFromPayload normalizes the requested language, checks filenames, and collects the source files that should exist for the operation.",
                    "writeCompileWorkspaceSources then creates the project workspace and writes those files to disk. This separation is useful: one function interprets the incoming data, while the other performs the filesystem side effect.",
                    "For languages like C, C++, Verilog, and SystemVerilog, this matters because one file may include or instantiate another. The project is treated as a workspace rather than a single pasted text box.",
                ],
                [],
                ["compileWorkspaceFilesFromPayload", "writeCompileWorkspaceSources"],
            ),
            (
                "Compile, build, run, simulate, and scope",
                [
                    "compileAndRunCode is the feature coordinator. It receives the compile payload, prepares the workspace, chooses the toolchain, builds command arguments, runs the compiler or simulator, and returns output plus artifacts.",
                    "For Verilog and SystemVerilog, simulation depends on a testbench and vvp output. The backend can parse VCD waveform text so the frontend can show a signal scope rather than only plain terminal output.",
                    "The important feature boundary is clear: Add Code stores presentable code in the portfolio, while Compile Code creates a runnable local workspace. Later, Append code to project can move successful source into the selected project overview as formatted content.",
                ],
                [],
                ["compileAndRunCode", "parseVcdScopeText", "installCompilerTools"],
            ),
        ],
    },
    {
        "title": "Chapter 6: Publishing, Authentication, And Loading From Target",
        "sections": [
            (
                "The publishing target contract",
                [
                    "Publishing target setup is not just saving a URL. The builder must know that the repository URL is valid, that Git can reach it, that the current user has write access, and that the chosen branch is the branch the website should use.",
                    "validatePublishRemoteUrl prevents obviously unsafe or unsupported target values from entering the workflow. getPublishTargetInfo reports what the current workspace knows about the target.",
                    "The user-facing distinction is important: Authenticate target verifies write access. Load from target imports compatible website files from that repository. Those actions should not be blurred together because one grants trust and the other moves content.",
                ],
                ["defaultSiteRepository", "gitCandidates", "publishAuthorizationHelp"],
                ["validatePublishRemoteUrl", "getPublishTargetInfo"],
            ),
            (
                "Authentication caching",
                [
                    "The app should not ask GitHub to authenticate every time it opens. writePublishAuthCache stores a local trust record for the specific repository and branch after successful verification.",
                    "assertPublishAccess reads that record and decides whether the current publishing operation can proceed. The cache has a normal one-day window and an extended window when repeated successful authorizations prove the same device and target are consistently used.",
                    "This design balances convenience and safety. It avoids repeated prompts during normal work, but it does not grant permanent trust to an old machine state.",
                ],
                ["publishAuthCacheTtlMs", "publishAuthExtendedTtlMs", "publishAuthHistoryWindowMs", "publishAuthExtendedThreshold"],
                ["writePublishAuthCache", "assertPublishAccess", "authenticateGitHubForTarget"],
            ),
            (
                "Loading from target",
                [
                    "Load from target is a pull/import feature. It should run only after authentication has proven that the selected repository is writable by the user. That prevents a random public repository from being treated as the user's editable website.",
                    "syncFromPublishTarget pulls compatible website files into the local builder workspace. The purpose is to let a newly installed builder recover the latest site state from GitHub after the owner authenticates.",
                    "The function belongs in the backend because Git operations, folder synchronization, and compatibility checks require filesystem and process access that the browser should not own directly.",
                ],
                [],
                ["syncFromPublishTarget"],
            ),
            (
                "Applying the site",
                [
                    "publishSiteChanges is where local portfolio content becomes public repository content. It synchronizes the publish branch, copies only allowlisted website files into the publish mirror, bumps assets when needed, stages changes, commits if anything changed, and pushes.",
                    "The allowlist is the heart of the safety model. The builder has internal files, drafts, compile artifacts, docs, caches, and update support. Only the website-safe paths should be staged for the public site.",
                    "The returned object tells the UI whether a commit was created, whether a push happened, which branch was used, and what Git output came back.",
                ],
                ["publishPaths"],
                ["syncPortfolioPublishFiles", "publishSiteChanges"],
            ),
        ],
    },
    {
        "title": "Chapter 7: Portfolio AI And Public Source Context",
        "sections": [
            (
                "The AI assistant as a routed backend feature",
                [
                    "The Ask My Portfolio panel should answer greetings, general engineering questions, portfolio-specific questions, and public source-code questions differently. That judgment starts in the frontend but is completed by the backend because the backend can enrich context and call model providers safely.",
                    "portfolioAiInstructions gives the model its behavior contract. It tells the model not to invent projects, not to expose hidden reasoning, not to append random links, and to answer general questions directly before dragging in project context.",
                    "The backend owns private keys and local model calls. A browser should not hold an OpenAI key, and a static portfolio page cannot directly supervise local Ollama.",
                ],
                ["portfolioAiInstructions"],
                ["handlePortfolioAi"],
            ),
            (
                "Public GitHub and website context",
                [
                    "enrichPortfolioContext expands the question context. It can include portfolio catalog data, uploaded text evidence, resume text, same-site files, public GitHub source excerpts, and safe public links.",
                    "fetchGitHubRepositorySource is intentionally public-source oriented. If a visitor asks for code, the assistant should cite fetched public source excerpts rather than hallucinating code that was never retrieved.",
                    "This is where the AI feature becomes more than a canned FAQ. It can combine the owner's saved portfolio data with public repository evidence and general engineering knowledge, while still admitting when a file was not available.",
                ],
                [],
                ["fetchGitHubRepositorySource", "enrichPortfolioContext"],
            ),
            (
                "Choosing OpenAI or Ollama",
                [
                    "handlePortfolioAi first enriches context, then checks whether an OpenAI API key is configured. If no key exists, it attempts the local Ollama path. If OpenAI is configured, it builds a Responses API payload with developer instructions, conversation history, question intent, web-search preference, and portfolio context.",
                    "callOllamaPortfolioAi gives the local backend a fallback model path. This makes the builder useful on machines where a local model is installed and a cloud key is not configured.",
                    "The response shape stays simple for the frontend: answer text, model, provider, and whether web search was used.",
                ],
                [],
                ["callOllamaPortfolioAi", "handlePortfolioAi"],
            ),
        ],
    },
    {
        "title": "Chapter 8: Updates, Security Reports, And Maintenance",
        "sections": [
            (
                "Update checks",
                [
                    "getUpdateInfo compares the installed builder version with GitHub release information. The UI can then show whether the app is current or whether an update is available.",
                    "The backend blocks known bad versions through blockedAppUpdateVersions. That small Set gives the maintainer a way to skip a release without deleting every artifact.",
                    "The user-facing idea is simple: the app should know when a better release exists, but it should not install blindly or downgrade itself.",
                ],
                ["packageJson", "blockedAppUpdateVersions"],
                ["getUpdateInfo"],
            ),
            (
                "Launching an update",
                [
                    "downloadAndLaunchAppUpdate is more than a download helper. It downloads the installer, writes a detached launcher script, closes the running builder, starts the installer, waits for completion, finds the installed executable, and relaunches the app.",
                    "The feature is complicated because a running app cannot safely replace all of its own files. The handoff script survives the app shutdown and performs the update from outside the process being replaced.",
                    "This is why update behavior belongs in the backend rather than the browser view. It touches the filesystem, process table, installer, and Windows application paths.",
                ],
                [],
                ["downloadAndLaunchAppUpdate"],
            ),
            (
                "Security reporting",
                [
                    "getSecurityReport exposes local visibility into access and download-related information for an authenticated builder. The report is local-only because security information should not be readable from arbitrary network clients.",
                    "This feature is the beginning of operational awareness. It does not turn a static site into a full analytics platform by itself, but it gives the builder a place to surface trusted local security and publishing state.",
                    "The same local-only principle used for write actions appears here: even read-only security information can be sensitive, so the API route checks the request source before responding.",
                ],
                [],
                ["getSecurityReport"],
            ),
        ],
    },
]


def add_state_excerpt(story: list, source: str, names: list[str]) -> None:
    for name in names:
        snippet = extract_const(source, name)
        if not snippet:
            continue
        add_code(story, snippet, f"The shared value below is part of the feature's working memory. It is shown here because the following behavior depends on it.")


def add_function_excerpt(story: list, source: str, names: list[str]) -> None:
    for name in names:
        if name == "__server_startup__":
            snippet = extract_server_startup(source)
        else:
            snippet = extract_function(source, name)
        if not snippet:
            continue
        add_code(story, snippet, f"The source below is the implementation that carries this part of the feature.")
        add_function_prose(story, name)


FUNCTION_PROSE: dict[str, list[str]] = {
    "securityHeaders": [
        "The helper returns an object, not a string, because Node's response writer accepts headers as named fields. The spread operation at the end lets a route add a content type or another special header while keeping the common security posture intact.",
        "The function is small, but its importance is structural. It prevents security headers from becoming a memory test repeated throughout the file.",
    ],
    "sendJson": [
        "This function writes the HTTP status and headers first, then serializes the payload with JSON.stringify. The pretty two-space formatting is useful during debugging because local API responses are readable if opened directly.",
        "Every endpoint that calls this helper gets no-store cache behavior. That matters for a builder because stale catalog, target, compile, or update responses would confuse the user.",
    ],
    "readRequestJson": [
        "The body arrives as chunks, so the function collects chunks until the stream ends. The limit check happens while reading, not after parsing, because protection must work before the full payload is already in memory.",
        "The final JSON.parse is intentionally the last step. At that point the input is still only a generic object, so endpoint-specific validation happens later.",
    ],
    "resolveInsideRoot": [
        "The function calculates an absolute path from the root and the requested segments, then verifies that the result still belongs inside the root. That check is the critical part.",
        "The reason this helper exists is that many features need path construction. Uploads, static files, publish paths, and draft writes should not each invent their own path safety logic.",
    ],
    "resolveInsidePortfolioRoot": [
        "This is the same boundary idea applied to the publish mirror. The helper makes it clear that portfolio publishing paths are checked against the portfolio workspace rather than the builder application folder.",
    ],
    "resolveInsideCompileRoot": [
        "Compile output can include temporary binaries, class files, VCD waveforms, and generated folders. Keeping this helper separate prevents compile artifacts from accidentally blending into website files.",
    ],
    "handleApi": [
        "The function reads like a router built by hand. It checks the method and pathname, handles safe reads first, rejects non-local writes, and then moves through feature-specific POST actions.",
        "The route branches return true when they handled the request. That lets the outer server decide whether a request should be treated as an API request or fall through to static file serving.",
    ],
    "assertPublishAccess": [
        "This function is the gate in front of public website changes. It reads cached authorization, checks whether it still matches the target and branch, and throws when publishing should not proceed.",
    ],
    "publishSiteChanges": [
        "The function performs the publish sequence in the order a human would: verify access, synchronize with the remote branch, copy publishable files, stage changes, commit only if needed, and push.",
        "Returning Git output is useful because the frontend can show a success window with real evidence rather than a vague message.",
    ],
    "compileAndRunCode": [
        "This coordinator is deliberately feature-sized. It has to prepare files, choose tools, build arguments, manage compile/run/simulate modes, collect terminal output, and report artifacts.",
        "The function's complexity belongs here because the UI should not know compiler command details. The UI asks for a compile; the backend turns that request into operating-system work.",
    ],
    "runProcess": [
        "The function wraps the life cycle of an external program. It starts the process, listens for output, handles timeout, waits for exit, and returns a normalized result.",
        "That normalized result is what makes the Compile Code terminal and messages log possible.",
    ],
    "handlePortfolioAi": [
        "This function separates conversational intent, portfolio context, model provider choice, and response formatting. That separation is what lets the assistant answer general questions without forcing portfolio links into every reply.",
    ],
    "downloadAndLaunchAppUpdate": [
        "The function prepares a handoff. The current app cannot calmly replace itself while running, so the backend writes and starts a separate launcher that can survive after the app exits.",
    ],
}


def add_function_prose(story: list, name: str) -> None:
    for text in FUNCTION_PROSE.get(name, []):
        add_p(story, text)


def add_feature_chapters(story: list, source: str) -> None:
    for chapter_index, chapter in enumerate(FEATURES, start=2):
        add_heading(story, chapter["title"], 1)
        for title, paragraphs, state_names, function_names in chapter["sections"]:
            add_heading(story, title, 2)
            for text in paragraphs:
                add_p(story, text)
            if state_names:
                add_state_excerpt(story, source, state_names)
            if function_names:
                add_function_excerpt(story, source, function_names)


def draw_page(canvas, doc) -> None:
    canvas.saveState()
    page = canvas.getPageNumber()
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(colors.HexColor("#64748B"))
    canvas.drawString(0.62 * inch, 0.38 * inch, "server.mjs textbook guide")
    canvas.drawRightString(7.88 * inch, 0.38 * inch, f"Page {page}")
    canvas.setStrokeColor(colors.HexColor("#CBD5E1"))
    canvas.setLineWidth(0.25)
    canvas.line(0.62 * inch, 0.52 * inch, 7.88 * inch, 0.52 * inch)
    canvas.restoreState()


def build_pdf() -> Path:
    source = SERVER_PATH.read_text(encoding="utf-8")
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(
        str(OUTPUT_PATH),
        pagesize=LETTER,
        leftMargin=0.62 * inch,
        rightMargin=0.62 * inch,
        topMargin=0.58 * inch,
        bottomMargin=0.66 * inch,
        title="server.mjs Textbook Guide",
        author="OMB Portfolio Builder",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    doc.addPageTemplates([PageTemplate(id="textbook", frames=[frame], onPage=draw_page)])
    story: list = []
    add_cover(story)
    add_manual_toc(story)
    add_javascript_primer(story)
    add_feature_chapters(story, source)
    doc.build(story)
    return OUTPUT_PATH


if __name__ == "__main__":
    print(build_pdf())
