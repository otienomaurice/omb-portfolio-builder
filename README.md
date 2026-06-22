# OMB Portfolio Builder

OMB Portfolio Builder is a Windows desktop application for building, previewing, and publishing portfolio websites. Fresh installs start blank: no projects, no resume, no custom domain, no personal sections, and no owner-specific assets. The builder provides setup tools for the profile, contact details, brand image, site background, resume, sections, projects, files, previews, drafts, and Git-based publishing.

## Download And Install

Download the latest Windows installer or portable executable from:

```text
https://github.com/otienomaurice/omb-portfolio-builder/releases/latest
```

Use:

- `OMB-Portfolio-Builder-Setup-0.2.2-x64.exe` for the Windows installer.
- `OMB-Portfolio-Builder-Portable-0.2.2-x64.exe` when you want to run without installing.

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
- Fresh installs do not automatically clone or preload Maurice Otieno's website.
- If Maurice installs the builder on another machine, open **Publishing target**, authenticate with a GitHub identity that has write access to `otienomaurice/otienomaurice.github.io`, then click **Load from target** to import the current portfolio catalog, docs, images, resume, custom domain, and site files into that local builder workspace.
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

Nothing from Maurice Otieno's portfolio is included unless a user authenticates against Maurice's publishing repository and intentionally imports it with **Load from target**.

## Publishing To A Different Website

1. Open **Publishing target** in the app header.
2. Enter the target GitHub repository URL, for example:

```text
https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
```

3. Optionally enter a custom domain such as `example.com`; the builder writes it to `CNAME`.
4. Optionally enter GitHub username plus password/token.
5. Click **Save target**.
6. If the repository already contains a compatible portfolio and you own access to it, click **Load from target**.
7. Click **Save draft** before **Apply to site**.

## Offline Editing

The builder runs from a local server inside the desktop app. Project creation, section editing, file attachment, previews, and **Save draft** work offline because they write to the local workspace.

When the computer is online again, click **Apply to site**. The app checks the selected publishing target, verifies GitHub push access, writes the live site catalog, commits changed site files, and pushes.

## GitHub Release Build

This repository includes `.github/workflows/build-windows-builder.yml`.

Use the workflow manually from GitHub Actions, or push a tag:

```powershell
git tag builder-v0.2.2
git push origin builder-v0.2.2
```

Tags beginning with `builder-v` create a GitHub Release containing the installer and portable executable.
