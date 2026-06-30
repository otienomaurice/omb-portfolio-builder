# OMB Portfolio Builder

OMB Portfolio Builder is a Windows desktop application for building, previewing, and publishing portfolio websites. Fresh installs start blank: no projects, no resume, no custom domain, no personal sections, and no owner-specific assets. The builder provides setup tools for the profile, contact details, brand image, site background, resume, sections, projects, files, previews, drafts, and Git-based publishing.

## Download And Install

Download the latest Windows installer or portable executable from:

```text
https://github.com/otienomaurice/omb-portfolio-builder/releases/latest
```

Use:

- `OMB-Portfolio-Builder-Setup-latest-x64.exe` for the latest Windows installer.
- `OMB-Portfolio-Builder-Portable-latest-x64.exe` when you want to run without installing.

The installer defaults to:

```text
C:\Program Files\OMB Portfolio Builder
```

The installed application file is:

```text
C:\Program Files\OMB Portfolio Builder\OMB Portfolio Builder.exe
```

Desktop and Start Menu shortcuts point directly to that executable. On this development machine, the active standalone app-folder copy is `C:\Users\otien\OMB\application\OMB Portfolio Builder.exe`; installers now detect that app folder as the current copy and update it in place instead of creating a second builder elsewhere.

The installer is not one-click; it uses a normal Windows wizard with Back, Next, Cancel, install progress, and Finish.
It lets you choose a different installation folder, creates a Windows uninstall entry, and creates a desktop shortcut by default unless you untick that option. The desktop shortcut is written to the physical Windows user desktop, `C:\Users\<you>\Desktop`, so OneDrive Desktop redirection does not create a second shortcut in `C:\Users\<you>\OneDrive\Desktop`.

Installed users do **not** need to install Node.js or pnpm. The desktop app includes its runtime. Git for Windows with Git Credential Manager is needed only for GitHub publishing. The installer checks for publishing tools and can install Git for Windows if Git/Git Credential Manager is missing. If a compatible tool is already present, setup skips it. Existing shared tools are not silently uninstalled.

The public portfolio website also exposes a direct **Download builder application** link near the top of the page, just below Fun Facts. That link points to `https://github.com/otienomaurice/omb-portfolio-builder/releases/latest/download/OMB-Portfolio-Builder-Setup-latest-x64.exe`. Every successful `main` release marks the new GitHub Release as latest and uploads this stable latest installer asset, so the portfolio link automatically downloads the newest builder without editing the website each time.

If OMB Portfolio Builder is already installed through Windows, the installer becomes an update flow for that registered installation. It tells the user which version it found, pins setup to the existing install location, removes the old copy, and installs the new version in that same location. It will not create a second installed copy in a different folder. A standalone app-folder copy at `C:\Users\<you>\OMB\application` is also treated as the current app and updated in place. On machines without a registered install or known app-folder copy, setup scans fixed drives for unregistered OMB Portfolio Builder executables, portable copies, and local builder workspaces. If it finds one of those duplicate copies, setup stops and asks the user to remove, uninstall, or rename that copy first so the machine does not keep an older builder with stale editing features.

GitHub keeps older releases. To download a previous version, open:

```text
https://github.com/otienomaurice/omb-portfolio-builder/releases
```

## Clone And Build

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

For repository development, use the branch model in [BRANCHING.md](BRANCHING.md): feature branches merge into `development`, and `main` stays release-ready for consumers. `main` must only receive release merges from `development`; no feature, fix, or Codex branch should merge directly into `main`. When a branch is created, update the branch register below in the same feature branch.

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
| `codex/automatic-installer-update-flow` | Makes the update popup run the installer automatically, strengthens existing-install detection, and publishes stable latest installer asset names for website downloads. | `development` | `development` | Active |
| `codex/split-builder-portfolio-workspaces` | Separates local builder files from public portfolio files, syncs publish-safe assets into the portfolio mirror, and bumps the next installer release version. | `development` | `development` | Active |
| `codex/guard-latest-builder-download` | Enforces the portfolio download link against the stable latest installer URL so main releases automatically feed the newest website download. | `development` | `development` | Active |
| `codex/secure-builder-editor-shell` | Adds native desktop menus, light app chrome, scoped publishing authorization cache, and smoother rich-editor copy, paste, cut, and image placement behavior. | `development` | `development` | Active |
| `codex/smooth-builder-workflow` | Adds smoother builder workflow feedback, searchable project navigation, selected-project quick actions, clearer preview metrics, and app-folder update detection for the standalone Windows executable. | `development` | `development` | Active |
| `codex/local-desktop-shortcut` | Forces installer-created shortcuts onto the physical Windows desktop instead of redirected OneDrive Desktop folders. | `development` | `development` | Active |
| `codex/update-dialog-and-main-gate` | Hides inactive update actions when the builder is current and adds a clearer main-branch push guard. | `development` | `development` | Active |
| `codex/responsive-builder-output` | Makes the project parser build responsive layout profiles so saved portfolio projects render cleanly on phones and PCs. | `development` | `development` | Merged into `development` |
| `codex/responsive-builder-docs` | Updates the README and in-app guide for responsive builder output. | `development` | `development` | Merged into `development` |

## Publishing Security

The app can be public, but publishing a live website is controlled by GitHub repository write access.

- Maurice Otieno's live website can be changed only by a GitHub identity that can push to `otienomaurice/otienomaurice.github.io`.
- Fresh installs do not automatically clone or preload Maurice Otieno's website.
- If Maurice installs the builder on another machine, open **Publishing target**, enter `otienomaurice/otienomaurice.github.io`, then click **Save target and authenticate** with a GitHub identity that has write access. The target is kept only after GitHub authorization succeeds. **Load from target** then becomes available to import the current portfolio catalog, docs, images, resume, custom domain, and site files into that local builder workspace.
- Other users can use this same builder for their own website by opening **Publishing target** and entering their own GitHub Pages/static-site repository URL.
- If the selected repository is missing, incompatible, or GitHub rejects the signed-in identity, **Apply to site** is blocked and the builder remains local-only.
- The app does not embed Maurice's password or private credentials.
- The username plus password/token fields are optional and local to the Windows machine. They hand credentials to Git Credential Manager; they are not committed to the repository.
- GitHub usually rejects normal account passwords for Git pushes. Use a GitHub personal access token, Git Credential Manager, or an approved organization SSO credential in the password/token field.

## First Setup On A New Machine

When the app opens for the first time, use the builder panels to add your own content:

1. Open **Profile and contact** and add the display name, email, phone, public links, profile picture, resume, brand image, and hero/background image.
2. Add or edit front-page text, fun facts, and portfolio sections.
3. Open **Projects**, add projects, then create sections, overviews, files, images, and links.
4. Click **Save draft** to keep the local version.
5. Click **Portfolio** to preview the website before publishing.

Nothing from Maurice Otieno's portfolio is included unless a user authenticates against Maurice's publishing repository and imports it through the authenticated target-loading flow.

## Responsive Website Output

The builder parser prepares projects for both desktop and mobile viewing. When a project is saved, the parser records layout guidance for section-card density, content width, media width, touch targets, and full-screen project windows. The local portfolio preview and the published website use the same saved layout profile, so a project that looks right in preview is built to behave the same way on PCs, tablets, and phones.

## Publishing To A Different Website

1. Open **Publishing target** in the app header.
2. Enter the target GitHub repository URL, for example:

```text
https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
```

3. Optionally enter a custom domain such as `example.com`; the builder writes it to `CNAME`.
4. Click **Check tools**. If Git is missing, click **Install Git**; the app starts the Git for Windows installer path for you.
5. Click **Save target and authenticate**. A GitHub/Git Credential Manager browser sign-in may open.
6. The builder detects the repository default branch, verifies write access with a safe temporary dry-run ref, and keeps the new target only after GitHub authorization succeeds.
7. After authentication succeeds, the builder automatically loads a compatible portfolio through a temporary clone. The builder backs up replaced local portfolio files under `.omb-backups` and updates the local draft to match the target catalog. You can also click **Load from target** later to refresh from the latest website copy.
8. Click **Save draft** before **Apply to site**.

Successful publishing authorization is cached locally for about one day per repository and branch, so Apply to site does not re-check GitHub authorization on every push. If the same repository and branch has more than three successful authorizations within one week, the builder extends that local trust window to 30 days for that exact target.

## Updates

The installed builder checks the latest GitHub Release and opens an in-app update window when a newer installer is available. Choose **Update** to download the latest installer, close the app, run the installer automatically, and reopen the app. Choose **Remind me later** to snooze the prompt or **Skip this version** to dismiss that release. You can also click **Check updates** in the builder header to check manually.

The app checks on startup, checks periodically while it remains open, and checks again when the window returns to focus after a long idle period. Updates are installed through the same Windows installer flow. The update does not require users to manually run shell scripts or manually delete the previous version. If the app is already installed, setup detects the existing copy, stops when the installed version is already current or newer, and updates the existing location only when the installer is newer.

Release notifications depend on version numbers. Before merging `development` into `main`, bump `package.json` to the next version. Only `development` should be opened as the source branch for a release pull request into `main`. When `main` is pushed, GitHub Actions builds the installer, publishes a `builder-v<version>` GitHub Release, and installed apps detect that newer release.

## Uninstalling

Uninstall from Windows **Installed apps** / **Apps & features**. The uninstaller removes OMB Portfolio Builder, its shortcuts, and local app data created by the app when Windows requests app-data cleanup. It does not silently remove shared tools such as Git for Windows, Node.js, pnpm, browsers, or Git repositories because those may be used by other applications.

## Offline Editing

The builder runs from a local server inside the desktop app. Project creation, section editing, file attachment, previews, and **Save draft** work offline because they write to the local builder workspace.

On Windows the app keeps editing and publishing separated:

- `C:\Users\<you>\OMB\application` stores the installed desktop application files, including `OMB Portfolio Builder.exe`. Shortcuts should point here.
- `C:\Users\<you>\OMB\builder` stores the builder app workspace, drafts, uploaded files, templates, previews, and local editing tools.
- `C:\Users\<you>\OMB\portfolio` stores the public website mirror and Git repository used for publishing.

When you update a resume, background, profile photo, project file, or other public asset in the builder, the file is saved first inside `builder`. **Save draft** keeps that work local. When **Apply to site** runs, the builder copies only public website files from `builder` into `portfolio`, then commits and pushes from the `portfolio` Git repository. Builder-only files such as `server.mjs`, `template-preview.*`, local drafts, installer notes, and desktop tooling are not copied into the public portfolio folder.

When the computer is online again, click **Apply to site**. The app checks the selected publishing target, verifies GitHub push access, writes the live site catalog, commits changed site files, and pushes.

## GitHub Release Build

This repository includes `.github/workflows/build-windows-builder.yml`.

Use the workflow manually from GitHub Actions, merge `development` into `main` after bumping `package.json`, or push a tag:

```powershell
git tag builder-v<next-version>
git push origin builder-v<next-version>
```

Tags beginning with `builder-v` create a GitHub Release containing the installer and portable executable.

When `main` is pushed, the workflow uses `package.json` to create the release tag automatically. If that tag already exists, the workflow stops and asks for a version bump so installed apps can reliably notify users about a newer release.

Pull requests into `main` are guarded by `.github/workflows/main-branch-gate.yml`. A PR into `main` fails unless its source branch is `development`, so all feature and Codex branches must land in `development` before release.
