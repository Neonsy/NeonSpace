# AGENTS.md

## Project Intent

- NeonSpace is a personal web project
- Keep the project expressive, human, and maintainable
- Prefer clear foundations over temporary compatibility while the project is still young
- Do not preserve weak abstractions just to avoid churn

## Workspace

- The app lives in `Project`
- Project-facing documentation lives in `Docs`
- Root `README.md` points to `Docs/README.md`
- Check existing files before assuming the stack, scripts, routes, or deployment setup

## Branch Flow

- `dev` is the development branch
- `prev` is the preview branch
- `main` is the production branch
- Pull requests into `prev` must come from `dev`
- Pull requests into `main` must come from `prev`
- Do not push directly to remote branches unless the user explicitly asks

## Engineering Rules

- Prefer simple, explicit work over clever abstractions
- If a decision affects project direction, remote state, data, or user-facing behavior and the right choice is uncertain, ask before choosing
- Keep names intent-revealing
- Keep files and modules focused by responsibility
- Avoid vague catch-all modules unless the repo already has a clear pattern for them
- Leave touched areas clearer than you found them
- Do not silently narrow approved scope

## GitHub And Deployment Safety

- Treat repository settings, workflows, branch rules, secrets, and deployment config as remote state
- Inspect remote state read-only first
- Do not create commits, push, mutate GitHub settings, workflows, branch rules, secrets, or deployment config unless the user explicitly asks
- If a requested change will trigger workflows or deployments, say so before doing it

## Documentation And Writing

- Keep `AGENTS.md` focused on rules agents must remember
- Put long rationale, setup notes, and personal writing in `Docs`
- For README-style prose, use one sentence per paragraph
- Match the project's no-final-period prose style when editing existing Markdown
- Avoid classic AI prose tropes, especially formulaic `not X but Y` constructions
- If unsure what counts as an AI trope, research before writing
- Do not use em dashes
- Scale answer length to the prompt and avoid cognitive overload

## Context Hygiene

- Gather only the context needed for the next correct decision
- Prefer targeted searches and focused file reads
- Do not paste large logs, generated files, lockfiles, or full-file contents when a summary is enough
- Stop exploring once the relevant boundary and implementation shape are clear

## Git And JJ

- If Git appears detached, check whether JJ is the VCS in use before treating it as an error
