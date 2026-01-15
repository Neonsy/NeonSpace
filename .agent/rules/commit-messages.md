---
trigger: always_on
description: Standards for commit messages, git operations, and conventional commits
---

# Commit Messages & Git Operations

## Format Standards

1.  **Conventional Commits**: Use single-sentence Conventional Commits format (`feat`, `fix`, `docs`, `chore`, `refactor`; optional scope).
    -   Example: `feat(auth): Add login provider`
2.  **Capitalization**: Always capitalize the first word after the colon.
    -   Correct: `docs: Fix badges`
    -   Incorrect: `docs: fix badges`
3.  **Punctuation**: Add spaces after commas in lists or parentheses.
    -   Correct: `(user, profile)`
    -   Incorrect: `(user,profile)`
4.  **Content**: Base the message strictly on the actual file differences (staged and unstaged). Do not mention formatting-only edits unless explicitly requested.

## Process & Permissions

1.  **Inspection**: Always inspect the repository's diffs (staged and unstaged) before crafting the message. Never guess.
2.  **Git Commands**: You are permitted to run **read-only** git commands (`git status`, `git diff`) to inspect state. Do not modify state (e.g., `git add`, `git commit`) unless explicitly instructed.
3.  **Scope**: Prefer the smallest scope. Start from the staged diff; if ambiguous, include unstaged context or ask for clarification.
4.  **Cognitive Load**: Keep the subject single-sentence. Use a short bullet list for secondary changes only when warranted for large changes.
