# Portfolio Website

This repository/folder contains the generated portfolio website files. It is the public site output, not the Windows builder application source.

For the full beginner explanation of how the builder creates this website, how the files communicate, how GitHub/Cloudflare publishing works, and what each build tool does, open:

```text
docs/OMB_Portfolio_Builder_Complete_Guide.docx
```

## What Belongs Here

- `index.html` for the public page shell.
- `styles.css` for website styling.
- `script.js` and `electronics-search.js` for website interaction.
- `projects.json` for the saved public portfolio catalog.
- `assets/` for public images, icons, resumes, and profile media.
- `docs/` for public project documents and downloadable evidence.
- `Backgrounds/` for public background images.
- `CNAME` when a custom domain is configured.
- `robots.txt` and `sitemap.xml` for search engines.

## What Does Not Belong Here

- Builder desktop app source files.
- Installer scripts or app release artifacts.
- Local draft files such as `projects.local.json`.
- Private credentials, tokens, or authentication cache files.

## Hosting

The site is designed for static hosting such as GitHub Pages. A custom domain can be connected by placing the domain name in `CNAME` and pointing DNS at the hosting provider.

## Updating Content

The website files are generated from saved public catalog data and public assets. Edit content in the local editing workspace, save the draft, preview the generated site, then publish the generated output into this folder/repository.

Manual edits inside this folder can be overwritten by the next publish. Keep lasting content changes in the editing workspace.

## Portfolio AI

If the website uses the AI assistant, its backend belongs to the Cloudflare Worker in `cloudflare/`. That Worker is part of the website runtime. It is separate from the Windows builder application.

The public page should include:

```html
<meta name="portfolio-ai-endpoint" content="/api/portfolio-ai" />
```

For `mauriceotieno.com`, deploy the Worker from `cloudflare/` and keep DNS proxied through Cloudflare so the route `mauriceotieno.com/api/portfolio-ai` reaches the Worker. Configure the Worker secret with:

```powershell
npx wrangler secret put OPENAI_API_KEY
```

Then deploy:

```powershell
cd cloudflare
npx wrangler deploy
```

If the AI widget falls back to local/canned answers on the public site, check three things first: the meta endpoint exists in `index.html`, the Cloudflare Worker route exists for `/api/portfolio-ai`, and the Worker has the `OPENAI_API_KEY` secret.

## Public Safety

Only public files should be stored here. Before publishing, confirm that resumes, documents, images, project files, source links, and downloadable artifacts are intended for public viewing.
