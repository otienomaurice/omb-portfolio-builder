# Portfolio AI Cloudflare Worker

This Worker powers the public website endpoint:

```text
https://mauriceotieno.com/api/portfolio-ai
```

The static GitHub Pages site cannot safely hold API keys. The browser sends portfolio context to this Worker. The Worker uses OpenAI when `OPENAI_API_KEY` is configured, and otherwise falls back to Cloudflare Workers AI.

## Deploy

From this `cloudflare` folder:

```powershell
npx wrangler login
npx wrangler secret put OPENAI_API_KEY # optional, Workers AI works without it
npx wrangler deploy
```

`wrangler.toml` routes `/api/portfolio-ai` on `mauriceotieno.com` and `www.mauriceotieno.com` to this Worker.

## Cloudflare Requirements

1. The domain must be active in Cloudflare.
2. DNS for `mauriceotieno.com` / `www` must be proxied through Cloudflare, not DNS-only, for Worker routes to run.
3. The Worker must have the `AI` binding enabled. This repo's `wrangler.toml` includes it.
4. Optional: add the `OPENAI_API_KEY` secret if you want the Worker to use OpenAI instead of Workers AI.
5. Keep the website meta tag:

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

Expected result: JSON with an `answer` field and a `provider` field such as `cloudflare-workers-ai` or `openai`.
