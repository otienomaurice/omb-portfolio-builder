# OMB Portfolio Builder

OMB Portfolio Builder is a Windows desktop application for creating, editing, previewing, and publishing a portfolio site from a local workspace. A fresh install starts blank: users add their own profile, sections, projects, files, images, links, resumes, appearance choices, and publishing target.

This README is for the builder application only. Website-specific content, domain notes, public page layout, and generated portfolio assets belong in the portfolio site's own README.

## Complete Beginner Guide

A long beginner-oriented Word/PDF guide and deeper source-code references can be generated locally from the scripts under `docs/`. Generated `.docx` and `.pdf` files are intentionally not committed or packaged with the app, so the repository stays small and the guides remain local learning artifacts.

The complete guide explains the whole system: high-level design, generated block diagrams, software-engineering decisions, shell commands, programming syntax, how the important files communicate, what each build tool owns, GitHub workflows, Electron, the installer, caching, API endpoints, data contracts, frontend/backend/AI/Cloudflare layers, the website, the parser, publishing, and compiler tools.

Start with the curated file guides when you generate them locally and want to understand code like a book instead of a line-number report. The expanded server guide is produced by `docs/build_server_book_pdf.py`:

- `docs/curated-file-guides-pdf/server.mjs.pdf`
- `docs/curated-file-guides-docx/script.js.docx` and `docs/curated-file-guides-pdf/script.js.pdf`
- `docs/curated-file-guides-docx/index.html.docx` and `docs/curated-file-guides-pdf/index.html.pdf`

The server PDF begins with a compact JavaScript syntax section, then explains `server.mjs` by grouped implementation chapters. It includes a dedicated Node.js/modules chapter, heavily expanded function walkthroughs, API routing, Save draft, Apply to site, uploads, Compile Code, Verilog/SystemVerilog simulation, GitHub authentication, Load from target, portfolio AI, updates, security reporting, PDF bookmarks, and a 50-page framework-transition chapter without old reference-label blocks.

File-specific explanations are generated into local Word/PDF reference folders:

- `docs/file-reference-docx` and `docs/file-reference-pdf` contain one document for each primary tracked repository file.
- `docs/code-reference-docx` and `docs/code-reference-pdf` contain source-focused documents with discovered function detail.
- `docs/important-code-reference-docx` and `docs/important-code-reference-pdf` contain the curated set of behavior-driving files to study first.

The complete guide should stay system-level. The file-specific documents explain each file's contents, functions, important variables, calls, returns, source excerpts, metadata, and safe-change notes. Do not commit generated documentation outputs unless a release process explicitly asks for them.

## Install

Download the latest Windows installer or portable executable from:

```text
https://github.com/otienomaurice/omb-portfolio-builder/releases/latest
```

Use:

- `OMB-Portfolio-Builder-Setup-latest-x64.exe` for the Windows installer.
- `OMB-Portfolio-Builder-Portable-latest-x64.exe` when you want to run without installing.

The normal installer default is a per-user AppData location:

```text
C:\Users\<you>\AppData\Local\Programs\OMB Portfolio Builder
```

The installed application executable is:

```text
C:\Users\<you>\AppData\Local\Programs\OMB Portfolio Builder\OMB Portfolio Builder.exe
```

The installer uses a Windows wizard with Back, Next, Cancel, progress, and Finish. It can create Desktop and Start Menu shortcuts, and it writes a normal Windows uninstall entry. The default per-user install does not write into `C:\Program Files`, so normal app updates can run without a Windows administrator prompt.

Installed users do not need Node.js or pnpm. The packaged desktop app includes its runtime. Git for Windows with Git Credential Manager is needed only for publishing to a Git repository. Icarus Verilog is needed only for Verilog/SystemVerilog simulation and scope viewing inside Compile Code. If Git, Git Credential Manager, or Icarus Verilog is missing, setup can install the missing tool with Windows Package Manager; compatible existing tools are skipped rather than removed.

## Updates

The app checks GitHub Releases for newer builder versions. When a newer release exists, the app shows an update dialog. Choosing **Update** downloads the installer, closes the running builder, updates the existing installation in place, and reopens the updated app.

Setup treats an existing install as an update target, not a second installation. It checks the current user's install first, then legacy machine-wide records, uses the detected install location for updates, avoids creating duplicate builder copies, and stops when the installed version is already current or newer.

Older releases remain available at:

```text
https://github.com/otienomaurice/omb-portfolio-builder/releases
```

## Local Workspaces

On Windows, the app keeps application files and editable content under AppData:

- `C:\Users\<you>\AppData\Local\Programs\OMB Portfolio Builder` stores the installed desktop application.
- `C:\Users\<you>\AppData\Local\OMB Portfolio Builder\builder` stores the builder workspace, local drafts, uploaded files, templates, previews, and editing tools.
- `C:\Users\<you>\AppData\Local\OMB Portfolio Builder\portfolio` stores the publish mirror used by Git-based publishing.
- `C:\Users\<you>\AppData\Local\OMB Portfolio Builder\compile-code` stores project compile-workspace source files and run folders created by the Compile Code tool.

The installer and updater treat the AppData builder and portfolio folders as managed workspaces, not duplicate app installs.

The builder works offline for editing, project creation, file attachment, local previews, and draft saves. Publishing requires network access and repository write permission.

## Main App Flow

1. Add profile/contact details and visual assets.
2. Add front-page text, fun facts, and portfolio sections.
3. Create project categories and projects.
4. Edit project overviews, sections, subsections, files, images, links, and appearance.
5. Save each project so the parser builds the project preview.
6. Save all sections before opening the full preview.
7. Save draft to keep the local working state.
8. Configure a publishing target before applying changes to a repository.

## Text Editing

Project and portfolio-area overview editors support rich text editing with selection-level formatting, links, images, formulas, syntax-highlighted code blocks, hard line breaks, copy, paste, cut, and select all.

Front-page, profile, contact, fun facts, and project overview fields use the same selection-level text behavior: highlight the exact words to edit, then use the right-click menu or floating selection inspector to change font family, font size, text color, bold, italic, or underline. Identity and contact fields are text-only, so image, formula, and code-block insertion is intentionally disabled there while copy, paste, cut, select all, links, and text formatting still work.

Code support is available from the rich editor right-click menu. Use **Code block** or **Paste as code** for C, C++, SystemVerilog, LTspice, Java, JavaScript, Python, and HTML. Code blocks store the selected language, preserve source spacing when requested, highlight common language keywords, and render as code in project previews and published portfolios.

Projects include a separate **Compile Code** workspace by default. This is local builder tooling, not a required portfolio text block, and it can stay empty if a project does not need runnable source. Each project behaves like a small IDE workspace: the left explorer lists expandable nested folders and source files, clicking a file opens it as a closeable editor view, the main editor is the active syntax-highlighted typing surface, and the backend receives the whole workspace so files can include or call other files. Right-click a folder or the workspace tree to create files inside that folder, create nested folders, import several files, import a whole directory, move a source file, or delete the selected file/folder. JavaScript uses Node.js, Python uses the installed Python runtime, Java uses a JDK, C/C++ use a MinGW/WinLibs-style compiler when available, and Verilog/SystemVerilog use Icarus Verilog and vvp when installed.

The Compile Code workspace has separate **Compile**, **Build project**, and **Run** controls. Verilog/SystemVerilog also show **Simulate** and **Show scope**. Compile checks or builds the active source. Build project uses the files in the project workspace. Run executes the built active program when the language supports it. Simulate runs HDL through vvp and can produce waveform data for the scope.

The Compile Code workspace includes an explicit **Show output** control. Use it to jump directly to the **Console** output for the active source file. The workspace also has a **Messages** log for compile/save/append status entries and a real **Terminal** panel for running local commands from the selected project compile folder. The output panel is locked into the workspace by default so it stays reachable while the editor scrolls; drag its top edge to resize it, or unlock it only when you want to float and move the output panel. **Append code to project** scans the project sections and nested subsections so the active source can be appended as a formatted code block to the correct overview.

Verilog and SystemVerilog simulation requires a testbench. Mark HDL files as **Design** or **Testbench**, or use **Add testbench** to create a starter bench with `$dumpfile` and `$dumpvars`. HDL Compile can syntax-check/build design files, while Simulate requires the testbench and parses the generated VCD file into a **Signal scope** so signals can be viewed over time.

Uploaded project evidence is saved locally under:

```text
docs\<project-folder>\<section-or-subsection>\<filename>
```

For example, a SystemVerilog file attached to a design section might be saved as `docs\laser-link\design\filter.sv`. The upload status in the builder shows the generated relative path after a file is saved.

The portfolio parser carries those rich text fields into project previews, full portfolio previews, saved drafts, and generated website catalogs. Use **Save project** or **Save all sections** before previewing or publishing so the parsed site output includes the latest front-page, profile, contact, fun fact, and project text formatting.

The top application menu includes **Preferences**. Use Preferences to select dark builder mode. When dark mode is active, a **Day view** control appears in the main builder header so the app can be returned to the normal light editing view quickly. The main page does not expose a dark-mode shortcut; dark mode starts from Preferences.

Dark mode is only a viewing skin for the builder application. It recolors builder panels, dialogs, guide windows, menus, status chips, inputs, lists, editor frames, and window/icon controls so the application feels consistent with the site palette while remaining readable. Portfolio content is still built from the saved light-mode/content values in the catalog, including field colors selected while editing.

## Publishing

Publishing is controlled by Git repository write access. The builder does not embed owner passwords or private credentials.

To publish:

1. Open **Publishing target**.
2. Enter a repository URL, for example:

```text
https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
```

3. Click **Authenticate target**.
4. Complete GitHub/Git Credential Manager sign-in if prompted.
5. Click **Load from target** only when you want to import the latest compatible website files from that repository into this local builder.
6. Click **Save draft** before **Apply to site**.

Successful authorization is cached locally per repository and branch for about one day. If the same target receives more than three successful authorizations in one week, the local trust window can extend to 30 days for that exact target.

## Build From Source

Install Git for Windows, Node.js, and pnpm. Then run:

```powershell
git clone https://github.com/otienomaurice/omb-portfolio-builder.git
cd omb-portfolio-builder
pnpm install
pnpm run dist
```

The Windows artifacts are written to:

```text
dist\
```

Useful commands:

```powershell
pnpm run dev
pnpm run pack
pnpm run installer
pnpm run dist
```

## Release Build

This repository includes:

```text
.github/workflows/build-windows-builder.yml
```

When `main` receives a release-ready version, GitHub Actions builds the Windows installer and portable executable, creates or updates the `builder-v<version>` GitHub Release, and uploads stable `latest` asset names.

Release notifications depend on version numbers. Before merging `development` into `main`, bump `package.json` to the next release version.

## Source Maintainers

Most users do not need the branch workflow. Installers and portable builds are published from GitHub Releases, and the app updates from release versions. Maintainers can use [BRANCHING.md](BRANCHING.md) when preparing changes for a new release.

<details>
<summary>Developer branch workflow and register</summary>

Use the workflow in [BRANCHING.md](BRANCHING.md):

- Feature and Codex branches start from `development`.
- Feature and Codex branches merge into `development`.
- `main` receives release-ready changes only from `development`.
- Pull requests into `main` should fail unless the source branch is `development`.
- New branches must be recorded in the branch register below.

### Branch Register

| Branch | Purpose | Created From | Merge Target | Status |
| --- | --- | --- | --- | --- |
| `main` | Consumer/release branch for finished installer and public app code. | Initial repository branch | None | Release-ready only |
| `development` | Integration branch that collects finished feature work before release. | `main` | `main` when tested | Active |
| `feature/branching-workflow` | Added the initial branch policy and workflow documentation. | `development` | `development` | Merged into `development` |
| `feature/update-branch-guide` | Updates the branch register rule and the consumer-facing in-app quick guide. | `development` | `development` | Merged into `development` |
| `codex/update-builder-guide` | Refreshes the consumer-facing Builder Guide with current rich text, image, file, link, save, and publishing behavior. | `development` | `development` | Merged into `development` |
| `codex/update-release-popup` | Adds the released-app update popup and main-branch release workflow so installed users are prompted when a newer builder is published. | `development` | `development` | Merged into `development` |
| `codex/manual-update-categories-preview` | Adds manual update checks, custom project categories, link-safe rich paste handling, project-only website previews, broad duplicate-install detection, and a main release workflow fix. | `development` | `development` | Active |
| `codex/fix-publish-target-auth` | Makes publishing target setup authenticate before saving, resolves the target default branch before access checks, and blocks known local builder workspaces during installation. | `development` | `development` | Active |
| `codex/cache-daily-auth-and-restore-profile` | Adds daily and extended publishing authorization caching, clarifies publishing target fields, keeps active-machine profile fields populated, and enforces development-only PRs into main. | `codex/fix-release-tag-check` | `development` | Active |
| `codex/automatic-installer-update-flow` | Makes the update popup run the installer automatically, strengthens existing-install detection, and publishes stable latest installer asset names for downloads. | `development` | `development` | Active |
| `codex/split-builder-portfolio-workspaces` | Separates local builder files from publish-mirror files, syncs publish-safe assets, and bumps the next installer release version. | `development` | `development` | Active |
| `codex/guard-latest-builder-download` | Keeps the stable latest installer asset URL aligned with release assets. | `development` | `development` | Active |
| `codex/secure-builder-editor-shell` | Adds native desktop menus, light app chrome, scoped publishing authorization cache, and smoother rich-editor copy, paste, cut, and image placement behavior. | `development` | `development` | Active |
| `codex/smooth-builder-workflow` | Adds smoother builder workflow feedback, searchable project navigation, selected-project quick actions, clearer preview metrics, and app-folder update detection. | `development` | `development` | Active |
| `codex/local-desktop-shortcut` | Forces installer-created shortcuts onto the physical Windows desktop instead of redirected OneDrive Desktop folders. | `development` | `development` | Active |
| `codex/update-dialog-and-main-gate` | Hides inactive update actions when the builder is current and adds a clearer main-branch push guard. | `development` | `development` | Active |
| `codex/responsive-builder-output` | Makes the project parser build responsive layout profiles so saved projects render cleanly on phones and PCs. | `development` | `development` | Merged into `development` |
| `codex/responsive-builder-docs` | Updates the README and in-app guide for responsive builder output. | `development` | `development` | Merged into `development` |
| `codex/fix-update-auto-restart` | Makes the app update flow quit the desktop app cleanly, run the installer, and relaunch the updated executable automatically. | `development` | `development` | Merged into `development` |
| `codex/fix-update-launch-handoff` | Launches the updater through a detached Windows command handoff so the installer/relaunch script survives app shutdown. | `development` | `development` | Merged into `development` |
| `codex/fix-update-cmd-runner` | Writes a detached updater command file, closes lingering builder processes, and relaunches the updated app after installation. | `development` | `development` | Merged into `development` |
| `codex/fix-editor-fullscreen-update-flow` | Separates builder and portfolio README content and expands the in-app Builder Guide into an interactive help center. | `development` | `development` | Active |
| `codex/fix-editor-installer-update-flow` | Fixes rich-editor context menus, prevents pasted links from rendering as formulas, adds safe fullscreen exit behavior, and lets installers update in place when old uninstallers fail. | `development` | `development` | Active |
| `codex/populate-builder-guide` | Populates the in-app Builder Guide with detailed setup, project, editor, preview, publishing, mobile, update, and safety workflows. | `development` | `development` | Active |
| `codex/fix-builder-guide-layout` | Fixes clipped Builder Guide rows so guide topics are readable and expandable inside the builder dialog. | `development` | `development` | Active |
| `codex/guide-topic-windows` | Converts Builder Guide rows into clickable guide topics that open separate explanation windows. | `development` | `development` | Active |
| `codex/skip-old-uninstaller-on-update` | Prevents in-app silent updates from launching stale uninstallers and adds an updater timeout for hung installers. | `development` | `development` | Active |
| `codex/expand-builder-guide-explanations` | Expands the in-app Builder Guide topics with fuller setup, editing, preview, publishing, update, and safety explanations. | `development` | `development` | Active |
| `codex/security-and-context-menu-reporting` | Improves text-field context menus, adds builder security/download reporting, and prepares publishable website security headers. | `development` | `development` | Active |
| `codex/uniform-rich-text-controls` | Makes right-click text formatting consistent for front-page, profile, and contact fields, persists field styles into previews and published portfolios, and expands common color choices. | `development` | `development` | Active |
| `codex/code-block-preferences` | Adds code-block authoring with syntax highlighting, source/basic paste modes, parser rendering, and builder Preferences for light/dark mode. | `codex/rich-profile-frontpage-editors` | `development` | Active |
| `codex/full-builder-dark-mode` | Expands builder dark mode across panels, dialogs, menus, status chips, and icon controls while preserving input-field colors and project appearance templates. | `codex/code-block-preferences` | `development` | Active |
| `codex/per-user-update-migration` | Moves the installer/update model to the current user's app location and prefers per-user install records over stale machine-wide records. | `codex/full-builder-dark-mode` | `development` | Active |
| `codex/appdata-workspace-root` | Standardizes future installs and managed builder/portfolio workspaces under AppData and migrates legacy OMB app-folder installs forward. | `codex/per-user-update-migration` | `development` | Active |
| `codex/project-code-compile-workspace` | Adds a project-local Compile Code workspace with source import, beautify, compiler detection, save, and terminal-style compile/run output. | `codex/appdata-workspace-root` | `development` | Active |
| `codex/fix-public-ai-worker-endpoint` | Adds the missing Cloudflare Worker backend files and wires the generated website to `/api/portfolio-ai`. | `development` | `development` | Active |
| `codex/fix-ai-worker-cloudflare-fallback` | Lets the website AI answer through Cloudflare Workers AI when no OpenAI Worker secret is configured. | `development` | `development` | Active |
| `codex/bump-builder-version-0.2.26` | Bumps the builder release version so the next approved `development` to `main` release creates a fresh installer tag. | `development` | `development` | Active |
| `codex/speed-up-compile-runner` | Speeds compiler detection, closes stdin cleanly, reports elapsed compile/run times, shows generated binaries/classes, and wires Icarus Verilog for SystemVerilog simulation. | `development` | `development` | Active |
| `codex/fix-node-compiler-detection` | Prevents the packaged Electron executable from being mistaken for Node.js in the Compile Code workspace. | `development` | `development` | Active |
| `codex/optimize-code-run-cache` | Adds cached compiled artifacts and a separate Rebuild / run command so repeated Java, C, C++, and SystemVerilog runs do not recompile unchanged source. | `development` | `development` | Active |
| `codex/add-verilog-simulator` | Adds Verilog as a first-class compile/simulate language using Icarus Verilog and vvp, with Verilog-specific highlighting, file detection, and cleaner simulator output. | `development` | `development` | Active |
| `codex/improve-c-cpp-compiler` | Improves C and C++ compile/run behavior with C17/C++20 profiles, stronger warnings, cleaner diagnostics, named binaries, header syntax checks, and better C/C++ detection. | `development` | `development` | Active |
| `codex/compile-terminal-log-append` | Makes compile terminal output repaint immediately, adds a Compile Code messages log, and lets source code be appended into selected project overview sections as formatted code blocks. | `development` | `development` | Active |
| `codex/terminal-output-and-complete-guide` | Adds explicit Compile Code output controls and generates the full beginner guide with diagrams, engineering decisions, command explanations, file communication maps, and tool-build ownership notes. | `development` | `development` | Merged into `development` |
| `codex/expand-complete-guide-detail` | Expands the complete guide with deeper flow walkthroughs, API endpoint details, data contracts, caching detail, installer internals, generated function inventory, and additional beginner debugging notes. | `development` | `development` | Merged into `development` |
| `codex/hdl-testbench-scope` | Requires HDL simulations to include a testbench, adds HDL design/testbench roles, and renders VCD waveform data in a signal scope. | `development` | `development` | Merged into `development` |
| `codex/builder-file-ai-auth-docs-cleanup` | Allows all project evidence file types, cleans publishing target authentication/loading, improves the website AI fallback, adds IDE-style compile workspace controls, and expands generated code documentation. | `development` | `development` | Merged into `development` |
| `codex/deep-docx-pdf-code-reference` | Replaces Markdown-only code references with generated Word/PDF source references and expands function-level documentation with diagrams, endpoints, variables, implementation signals, and debugging notes. | `development` | `development` | Merged into `development` |
| `codex/all-file-specific-docs` | Adds focused Word/PDF references for the important code and control files that drive the builder, website, installer, Cloudflare AI worker, workflows, parser, and generated documentation. | `development` | `development` | Merged into `development` |
| `codex/narrative-important-function-docs` | Splits the documentation model so the complete guide explains the whole system while generated per-file Word/PDF references explain each file's own contents, functions, variables, calls, returns, and safe-change notes. | `development` | `development` | Merged into `development` |
| `codex/curated-server-script-index-docs` | Adds book-style curated Word/PDF guides for `server.mjs`, `script.js`, and `index.html`, with multi-page overviews before grouped code walkthroughs. | `development` | `development` | Merged into `development` |
| `codex/function-object-variable-docs` | Expands the curated Word/PDF guides so `server.mjs` and `script.js` document top-level objects, variables, every extracted function, parameters, body behavior, called helpers, and local function variables without line-number-dependent notes. | `development` | `development` | Merged into `development` |
| `codex/textbook-function-doc-style` | Rewrites curated function sections into a smoother textbook flow with responsibility, syntax, parameter reading, implementation discussion, collaborator explanation, and local variable walkthroughs. | `development` | `development` | Merged into `development` |
| `codex/textbook-code-block-docs` | Adds textbook-style source-integrated docs with syntax/framework chapters, exact highlighted source blocks, styled paragraphs, analogies, and expanded function/source walkthroughs. | `development` | `development` | Merged into `development` |
| `codex/server-textbook-narrative-doc` | Reworks the `server.mjs` curated guide into a top-down textbook narrative with a server abstract, general JavaScript/Node syntax chapter, selected subsystem chapters, full highlighted source blocks, and procedural explanations without repeated reference labels. | `development` | `development` | Merged into `development` |
| `codex/server-pdf-js-textbook` | Rebuilds the `server.mjs` guide as a PDF-only textbook with a 50-plus-page JavaScript syntax primer and feature-based backend chapters without reference-label blocks. | `development` | `development` | Merged into `development` |
| `codex/server-deep-feature-code-guide` | Expands the `server.mjs` PDF guide's backend chapters with deeper grouped explanations of the actual code paths, important state, endpoint flows, helper calls, and returned objects while keeping the JavaScript primer intact. | `development` | `development` | Merged into `development` |
| `codex/server-600-page-book-guide` | Expands the `server.mjs` PDF into a compact 600-page bookmarked book with 16 chapter-level sections, a dedicated Node.js/modules chapter, deeper real-implementation walkthroughs, and a long future-framework migration chapter. | `development` | `development` | Merged into `development` |
| `codex/local-docs-auth-nested-sections` | Keeps generated guide documents local-only, restores cached publishing authorization behavior, removes predefined project sections/subsections, adds recursive section editing, adds multi-file project uploads, upgrades Compile Code with nested folders/files and a real terminal, and routes portfolio AI prompts by conversation/general/portfolio/mixed intent. | `development` | `development` | Ready for `development` |
| `codex/bump-builder-version-0.2.35` | Bumps the builder release version to `0.2.35` so the next approved `development` to `main` merge can create a fresh `builder-v0.2.35` release tag. | `development` | `development` | Ready for `development` |
| `codex/fix-guide-and-bump-0.2.36` | Corrects the in-app guide so new projects are documented as Overview-only by default and bumps the builder release version to `0.2.36` so installed `0.2.35` apps can detect the next update. | `development` | `development` | Ready for `development` |
| `codex/fix-nested-section-editor-0.2.37` | Repairs nested project section editing, prunes empty section trees while preserving content-bearing sections/subsections, and bumps the builder release version to `0.2.37`. | `development` | `development` | Ready for `main` |
| `codex/fix-section-subsection-render-controls-0.2.38` | Normalizes legacy `items` and current `children` nested section data, makes custom project sections visible as editable/deletable rows, keeps subsection/file controls visible, and bumps the builder release version to `0.2.38`. | `development` | `development` | Active |
| `codex/fix-local-builder-default-compile-0.2.39` | Adds builder asset cache-busting, makes Compile Code a built-in non-deletable project workspace beside Overview, syncs the fixed section/subsection renderer into the local app folders, and aligns the builder window controls so hide/minimize/maximize/close appear together on open. | `development` | `development` | Active |
| `codex/compile-code-ide-layout-0.2.40` | Restyles Compile Code as a Visual Studio-like IDE workspace with an explorer tree, editor tabs, breadcrumbs, exclusive Console/Messages/Terminal/Scope panes, a nested append-destination tree, stable file-list rows, and profile asset manager/viewer dialogs. | `development` | `development` | Active |
| `codex/fix-beautify-section-actions-0.2.41` | Removes edit/delete controls from the project section tab row, keeps delete inside the opened section, improves code beautify so one-line brace code is visibly formatted, and makes builder file rows match the clean project-list style. | `development` | `development` | Active |
| `codex/nested-section-window-editor-0.2.42` | Makes project sections and subsections open as nested builder views, removes duplicate edit/preview rendering while actively editing, routes file clicks to PDF/text viewers or downloads, aligns project window controls, and bumps the builder release version to `0.2.42`. | `development` | `development` | Active |
| `codex/ide-terminal-prompt-0.2.43` | Converts the Compile Code terminal into an IDE-style prompt with no separate command/directory form, makes File/Edit/View/Project/Build/Debug/Tools/Help execute real compile workspace commands, compacts Solution Explorer controls into small icons and right-click menus, and moves Append Code into an icon-opened destination chooser. | `development` | `development` | Active |
| `codex/dark-mode-recolor-0.2.44` | Makes dark mode a builder-only viewing skin that automatically recolors app chrome, dialogs, menus, inputs, lists, icons, and editor frames while preserving light-mode portfolio content colors for published output; adds a header Light icon, compacts project/subsection/window controls, and cleans the builder guide so each topic row opens directly without arrows, numbering, or Open pills. | `development` | `development` | Active |
| `codex/nested-subsection-windows-0.2.45` | Makes nested project subsections open as focused full-window builder views with horizontal child subsection links, removes breadcrumb-style subsection titles, improves code beautification, strengthens Icarus Verilog discovery/scope support, and adds HDL simulator tool installation to the app dependency flow. | `development` | `development` | Active |
| `codex/fix-compile-terminal-icons-0.2.46` | Makes Compile Code folders real expandable workspace folders, lets right-click actions create/import inside the selected folder, keeps open tabs separate from files, replaces dirty asterisks with close-view buttons, and locks the Console/Messages/Terminal/Scope panel as a top-edge-resizable IDE output area. | `development` | `development` | Active |
| `codex/fix-terminal-tree-output-0.2.47` | Removes the form-style terminal command box, keeps PowerShell commands inline with the prompt, lets unlocked output panels resize, preserves imported directory trees, and imports readable support files without treating them as compiler targets. | `development` | `development` | Active |

</details>

## Uninstall

Uninstall from Windows **Installed apps** / **Apps & features**. The uninstaller removes OMB Portfolio Builder, its shortcuts, and local app data when Windows requests app-data cleanup. It does not silently remove shared tools such as Git for Windows, Node.js, pnpm, browsers, or Git repositories because those may be used by other applications.
