# Base44 Dev Environment

## Stack
- Next.js 16.3.3 (webpack dev server) + React 19 + Tailwind v4, TypeScript.
- Arabic-first / RTL frontend for a football pitch booking template. No backend, no database, no external services.

## Run
```
docker compose -f docker-compose.base44.yml up -d
```
- Single `web` service on `node:22`, source bind-mounted at `/app`, deps installed at startup (`npm install` then `next dev --webpack -H 0.0.0.0 -p 3000`).
- `node_modules` and `.next` are anonymous volumes so host state doesn't leak in.
- Live reload works via bind mount + `WATCHPACK_POLLING=true` / `CHOKIDAR_USEPOLLING=true`.

## Preview / external host
- `next.config.ts` sets `allowedDevOrigins` from `BASE44_PUBLIC_HOST_SUFFIX` (passed into the service env). Don't hardcode the suffix — it changes per environment.
- Verify: `curl -sf -H "Host: external-preview.example.com" http://localhost:3000/` returns the page, and `/_next/static/...` assets return 200.

## Secrets
- None required. The app is frontend-only. If a backend/DB/external API is added later, declare secrets via `set_secrets` and add `env_file: /run/base44/app.env` as the LAST entry.

## Notes
- Next.js 16 has breaking changes vs older versions — read `node_modules/next/dist/docs/` before writing Next-specific code. The `AGENTS.md` nextjs-agent-rules block is managed by `next dev`.
