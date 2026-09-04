# Football Booking — Agent Instructions

## Project Context

Before making non-trivial changes:

- Read `Football-Booking-Project-Blueprint.md` to understand the product, MVP scope, user flows, and business requirements.
- Inspect the existing code and patterns before creating new files or changing architecture.
- Treat the existing codebase as the source of truth for what is currently implemented.

This file defines **how the agent should work**. It is not a replacement for the Project Blueprint.

## Core Project Rules

- Arabic-first and full RTL.
- Mobile-first is required.
- Keep the UI simple, clear, fast, and reliable.
- This is a reusable football-venue template, not a one-off website for a single venue.
- Keep venue-specific data configurable rather than hardcoded into reusable logic.
- Do not add features outside the current MVP unless explicitly requested.
- MVP does not include player accounts or player authentication.
- Admin authentication is for venue owners/admins only.

## Architecture

### Current Stack

- Next.js 16.3.3
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React
- Cairo font

### Planned Services

- Supabase for database, admin authentication, and storage
- Vercel for hosting
- GitHub for version control

Keep the architecture beginner-friendly and avoid unnecessary complexity.

Do not introduce a new dependency, framework, service, or abstraction unless it is necessary for the requested feature.

## Coding Rules

- Inspect existing code before implementing.
- Reuse existing components and patterns when possible.
- Prefer small, focused components and functions.
- Keep changes as small and focused as possible.
- Do not rewrite working code without a clear reason.
- Do not perform broad refactors while working on an unrelated task.
- Avoid speculative abstractions and premature optimization.
- Preserve existing behavior unless the task explicitly requires a change.
- Do not invent APIs, library behavior, file paths, or project conventions when the repository can be inspected instead.

## Booking Rules

These are critical business rules:

- Double booking must never be possible.
- Booking states:
  - `Pending`
  - `Confirmed`
  - `Rejected`

- Slot states:
  - `Available`
  - `Booked`
  - `Blocked`

- `Blocked` may represent academy/training, maintenance, events, or other venue usage.
- Players do not need an account to book in the MVP.
- Availability must correctly reflect date, pitch, time, and duration.
- Booking logic is not considered complete until conflicting bookings have been tested.

## UI / UX Rules

- Preserve RTL across the entire interface.
- Design mobile-first.
- Keep the booking CTA obvious.
- Make availability states easy to distinguish at a glance.
- Prefer clarity and usability over visual complexity.
- Reuse the existing visual language before introducing a new style.
- Avoid unnecessary animations, effects, or UI elements.

## Agent Workflow

For non-trivial tasks:

1. Understand the requested change.
2. Read the relevant project context.
3. Inspect the relevant files and existing implementation.
4. Decide on the smallest sufficient change.
5. Implement the change.
6. Run the most relevant available validation.
7. Check for regressions or unintended changes.
8. Report what changed and any remaining issue or uncertainty.

Do not claim a task is complete without verifying the relevant result when verification is possible.

## Base44 Dev Environment

### Run

```bash
docker compose -f docker-compose.base44.yml up -d
```

- Single `web` service on `node:22`.
- Source is bind-mounted at `/app`.
- Dependencies are installed at startup.
- Development server runs with webpack:
  `next dev --webpack -H 0.0.0.0 -p 3000`
- `node_modules` and `.next` are isolated volumes.
- Live reload uses polling.

### Preview / External Host

- `next.config.ts` uses `BASE44_PUBLIC_HOST_SUFFIX` to configure `allowedDevOrigins`.
- Do not hardcode the Base44 public host suffix because it changes by environment.
- When debugging preview issues, verify both the page response and Next.js static assets.

### Secrets

- Never commit secrets, API keys, credentials, or `.env` contents.
- If backend, database, or external APIs are introduced, use the existing Base44 secret mechanism.
- Do not expose server secrets to client-side code.

## Next.js Note

This project uses Next.js 16.3.3.

When behavior depends on Next.js-specific APIs or internals:

- Inspect the installed version and existing project patterns first.
- Do not assume behavior from older Next.js versions.
- Use the project's installed documentation or official documentation when needed.

## Do Not Do This

- Do not add player authentication to the MVP.
- Do not turn the product into a marketplace.
- Do not add payments, WhatsApp automation, notifications, analytics, or other future features unless explicitly requested.
- Do not replace the current stack without a strong reason.
- Do not add libraries for problems that can be solved with the existing stack.
- Do not hardcode client-specific venue data into reusable application logic.
- Do not make unrelated changes while implementing a feature.
- Do not silently change product requirements; surface conflicts instead.

## Instruction Priority

When instructions conflict, use this priority:

1. The current task's explicit requirements.
2. This `AGENTS.md` for development rules and constraints.
3. `Football-Booking-Project-Blueprint.md` for product requirements and scope.
4. Existing code and project patterns for current implementation details.

When a conflict cannot be resolved safely, identify it instead of guessing.
