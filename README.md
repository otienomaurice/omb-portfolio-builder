# OMB Portfolio Builder

OMB Portfolio Builder is a Windows desktop application for building, previewing, and publishing a portfolio website. It preserves the local builder behavior used for Maurice Otieno's portfolio: project sections, subsections, rich text, files, previews, drafts, and Git-based publishing.

## Download And Install

Download the latest Windows installer or portable executable from:

```text
https://github.com/otienomaurice/omb-portfolio-builder/releases/latest
```

Use:

- `OMB-Portfolio-Builder-Setup-0.2.1-x64.exe` for the Windows installer.
- `OMB-Portfolio-Builder-Portable-0.2.1-x64.exe` when you want to run without installing.

The installer defaults to:

```text
C:\Program Files\OMB Portfolio Builder
```

The installer is not one-click; it lets you choose a different installation folder.

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

## Publishing Security

The app can be public, but publishing a live website is controlled by GitHub repository write access.

- Maurice Otieno's live website can be changed only by a GitHub identity that can push to `otienomaurice/otienomaurice.github.io`.
- Other users can use this same builder for their own website by opening **Publishing target** and entering their own GitHub Pages/static-site repository URL.
- If the selected repository is missing, incompatible, or GitHub rejects the signed-in identity, **Apply to site** is blocked and the builder remains local-only.
- The app does not embed Maurice's password or private credentials.
- The username plus password/token fields are optional and local to the Windows machine. They hand credentials to Git Credential Manager; they are not committed to the repository.
- GitHub usually rejects normal account passwords for Git pushes. Use a GitHub personal access token, Git Credential Manager, or an approved organization SSO credential in the password/token field.

## Publishing To A Different Website

1. Open **Publishing target** in the app header.
2. Enter the target GitHub repository URL, for example:

```text
https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
```

3. Optionally enter a custom domain such as `example.com`; the builder writes it to `CNAME`.
4. Optionally enter GitHub username plus password/token.
5. Click **Save target**.
6. Click **Save draft** before **Apply to site**.

## Offline Editing

The builder runs from a local server inside the desktop app. Project creation, section editing, file attachment, previews, and **Save draft** work offline because they write to the local workspace.

When the computer is online again, click **Apply to site**. The app checks the selected publishing target, verifies GitHub push access, writes the live site catalog, commits changed site files, and pushes.

## GitHub Release Build

This repository includes `.github/workflows/build-windows-builder.yml`.

Use the workflow manually from GitHub Actions, or push a tag:

```powershell
git tag builder-v0.2.1
git push origin builder-v0.2.1
```

Tags beginning with `builder-v` create a GitHub Release containing the installer and portable executable.
