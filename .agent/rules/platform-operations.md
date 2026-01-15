---
trigger: always_on
description: Platform, operations, safety, and package management
---

# Platform & Operations

## Commands & Packages

1.  **Package Manager**: Always use `pnpm` for commands.
2.  **Dependencies**: Never edit `package.json` scripts/dependencies manually; use `pnpm` commands.

## Safety

1.  **Git Safety**: Do not run git commands without explicit permission.
    -   **Exception**: Read-only `git status`/`git diff` allowed when crafting commit messages (see Commit Messages rules).

## Platform

1.  **Hosting**: Project is hosted on Vercel.

## Caching

1.  **Strategy**: Prefer HTTP cache headers or ISR for global/static data.

## Client Data

1.  **Data Fetching**: Use TanStack Query for per-user or highly dynamic data.

## Analytics

1.  **Reference**: See "Documentation & Content Standards" rules for analytics widgets and links.

## Context & Retrieval

1.  **Refresh Knowledge**: When working on something "specific", refresh knowledge with context tools before proposing changes.
2.  **Search Tools**:
    -   Only use `grep` for targeted actions when you already have specific information (e.g., exact symbol names, file paths, or known patterns).
    -   Use the search tool (`project index`/`codebase_search`) when you need information about references, usage patterns, or understanding how something works.
    -   When in doubt, prefer the search tool over `grep`.

## Cross-references

-   See [Governance & Collaboration](governance-collaboration.md) for meta rules and collaboration guidelines
-   See [Process & Branching](process-branching-ci.md) for workflow and CI/CD policies
-   See [Documentation & Content](docs-content-standards.md) for analytics and documentation guidelines
-   See [Frontend Architecture](frontend-architecture.md) for code structure and component guidelines
