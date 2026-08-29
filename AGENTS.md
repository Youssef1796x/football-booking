# Base44 Dev Environment

## Stack
- Next.js 16.3.3 (Turbopack) + React 19 + Tailwind CSS v4, TypeScript.
- Frontend-only app (create-next-app default). No backend, database, or external services.

## Running
```
docker compose -f docker-compose.base44.yml up -d
```
- Node 22 base image, source bind-mounted at `/app`, deps installed on boot via `npm install`.
- Dev server: `next dev -H 0.0.0.0 -p 3000` (live reload via polling for bind mounts).
- Web entry point on host port 3000.

## Notes
- `next.config.ts` sets `allowedDevOrigins` from `BASE44_PUBLIC_HOST_SUFFIX` so the preview origin can load dev assets/HMR.
- No secrets required to boot.
