# Portfolio AI Cloudflare Worker

This Worker powers the public website endpoint:

```text
https://mauriceotieno.com/api/portfolio-ai
```

The static GitHub Pages site cannot safely hold an OpenAI API key. The browser sends portfolio context to this Worker, and the Worker calls OpenAI from Cloudflare using a private Worker secret.

## Deploy

From this `cloudflare` folder:

```powershell
npx wrangler login
npx wrangler secret put OPENAI_API_KEY
npx wrangler deploy
```

`wrangler.toml` routes `/api/portfolio-ai` on `mauriceotieno.com` and `www.mauriceotieno.com` to this Worker.

## Cloudflare Requirements

1. The domain must be active in Cloudflare.
2. DNS for `mauriceotieno.com` / `www` must be proxied through Cloudflare, not DNS-only, for Worker routes to run.
3. The Worker must have the `OPENAI_API_KEY` secret configured.
4. Keep the website meta tag:

```html
<meta name="portfolio-ai-endpoint" content="/api/portfolio-ai" />
```

## Test

After deployment:

```powershell
Invoke-RestMethod `
  -Uri "https://mauriceotieno.com/api/portfolio-ai" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"question":"Hi","context":{"profile":{"displayName":"Maurice Otieno"}}}'
```

Expected result: JSON with an `answer` field. If `OPENAI_API_KEY` is missing, the Worker returns a clear `503` message.
