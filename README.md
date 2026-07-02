# OMB Portfolio Builder

OMB Portfolio Builder is a Windows desktop application for creating, editing, previewing, and publishing a portfolio site from a local workspace. A fresh install starts blank: users add their own profile, sections, projects, files, images, links, resumes, appearance choices, and publishing target.

This README is for the builder application only. Website-specific content, domain notes, public page layout, and generated portfolio assets belong in the portfolio site's own README.

## Install

Download the latest Windows installer or portable executable from:

```text
https://github.com/otienomaurice/omb-portfolio-builder/releases/latest
```

Use:

- `OMB-Portfolio-Builder-Setup-latest-x64.exe` for the Windows installer.
- `OMB-Portfolio-Builder-Portable-latest-x64.exe` when you want to run without installing.

The normal installer default is:

```text
C:\Program Files\OMB Portfolio Builder
```

The installed application executable is:

```text
C:\Program Files\OMB Portfolio Builder\OMB Portfolio Builder.exe
```

The installer uses a Windows wizard with Back, Next, Cancel, progress, and Finish. It can create Desktop and Start Menu shortcuts, and it writes a normal Windows uninstall entry.

Installed users do not need Node.js or pnpm. The packaged desktop app includes its runtime. Git for Windows with Git Credential Manager is needed only for publishing to a Git repository. If Git or Git Credential Manager is missing, setup can install Git for Windows; compatible existing tools are skipped rather than removed.

## Updates

The app checks GitHub Releases for newer builder versions. When a newer release exists, the app shows an update dialog. Choosing **Update** downloads the installer, closes the running builder, updates the existing installation in place, and reopens the updated app.

Setup treats an existing install as an update target, not a second installation. It uses the detected install location, avoids creating duplicate builder copies, and stops when the installed version is already current or newer.

Older releases remain available at:

```text
https://github.com/otienomaurice/omb-portfolio-builder/releases
```

## Local Workspaces

On Windows, the app separates application files from editable content:

- `C:\Users\<you>\OMB\application` stores the standalone app-folder executable when the app is used from the local app-folder layout.
- `C:\Users\<you>\OMB\builder` stores the builder workspace, local drafts, uploaded files, templates, previews, and editing tools.
- `C:\Users\<you>\OMB\portfolio` stores the publish mirror used by Git-based publishing.

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

The portfolio parser carries those rich text fields into project previews, full portfolio previews, saved drafts, and generated website catalogs. Use **Save project** or **Save all sections** before previewing or publishing so the parsed site output includes the latest front-page, profile, contact, fun fact, and project text formatting.

The top application menu includes **Preferences**. Use it to open builder preferences or switch the builder between light and dark mode. This changes the builder workspace only; public portfolio appearance still comes from the selected site and project appearances.

## Publishing

Publishing is controlled by Git repository write access. The builder does not embed owner passwords or private credentials.

To publish:

1. Open **Publishing target**.
2. Enter a repository URL, for example:

```text
https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
```

3. Optionally enter a custom domain value for the generated `CNAME`.
4. Click **Check tools** and install Git if needed.
5. Click **Save target and authenticate**.
6. Complete GitHub/Git Credential Manager sign-in if prompted.
7. After authorization succeeds, load compatible target files if desired.
8. Click **Save draft** before **Apply to site**.

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

## Branch Workflow

Use the workflow in [BRANCHING.md](BRANCHING.md):

- Feature and Codex branches start from `development`.
- Feature and Codex branches merge into `development`.
- `main` receives release-ready changes only from `development`.
- Pull requests into `main` should fail unless the source branch is `development`.
- New branches must be recorded in the branch register below.

## Branch Register

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

## Uninstall

Uninstall from Windows **Installed apps** / **Apps & features**. The uninstaller removes OMB Portfolio Builder, its shortcuts, and local app data when Windows requests app-data cleanup. It does not silently remove shared tools such as Git for Windows, Node.js, pnpm, browsers, or Git repositories because those may be used by other applications.
