---
trigger: always_on
description: Governance, collaboration, and rule management guidelines
---

# Governance & Collaboration

## Collaboration

1.  **Communication**: Ask for clarification; never assume. Be smart, sharp, and inquisitive in follow-ups.
2.  **Scope**: Keep cognitive load minimal; scale scope and complexity only when needed.

## Auto-attach Project Rules (NeonSpace)

1.  **Proactive Loading**: When the user mentions rules, rule files, or rule sets, or when a task involves planning, design, content, UX, or ambiguous choices, proactively load and apply the project's rules.
2.  **Missing Context**: If rules are not yet attached in context, ask to attach or point to the relevant rule set under `.agent/rules`.

## Rules Governance

1.  **Review First**: Before editing or creating rule files, read all files in `.agent/rules` to ensure accurate grouping and avoid conflicts.
2.  **Scoping**: Keep rules scoped by domain; do not mix unrelated topics. If overlap occurs, link to the other file rather than duplicating content.
3.  **New Files**: If a rule does not fit an existing file, create a new file with a precise description in the frontmatter.
4.  **Consistency**: After changes, quickly review neighboring files for consistency.

## Cross-references

-   See [Process & Branching](process-branching-ci.md) for workflow and CI/CD policies
-   See [Documentation & Content](docs-content-standards.md) for content and documentation guidelines
-   See [Platform & Operations](platform-operations.md) for DevOps and safety rules
-   See [Frontend Architecture](frontend-architecture.md) for code structure and component guidelines
