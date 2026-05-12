# AGENTS.md

## Project Shape

- This folder contains the NeonSpace TanStack Start app
- Use `@/` imports for modules under `src`
- Route files live in `src/routes`
- Page components live in `src/pages`
- Shared layouts live in `src/layouts`
- Core app support lives under `src/core`
- Styles live under `src/styles`
- Tooling config lives under `tooling`
- Keep generated files generated and do not hand-edit `src/routeTree.gen.ts`

## Code Rules

- Keep route files thin and move reusable UI or page logic out of routes
- Keep server state, form draft state, and local UI state separate
- Use TanStack Query for server/cache state
- Use TanStack Form, Virtual, and Table only when their ownership model fits the feature
- Build the actual usable experience first
- Keep layout, loading, empty, and error states deliberate
- Do not add performance abstractions until the need is real

## Sensitive App State

- Treat app env files, Sentry config, Vercel config, and GitHub Actions as sensitive project state
- Do not commit secrets or real tokens

## Verification

- Prefer `pnpm lint` and `pnpm build` for app-level checks
- Run narrower checks first when a change is small
- If a check cannot be run, explain why
