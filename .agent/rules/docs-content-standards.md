---
trigger: always_on
description: Documentation style, editing constraints, and content standards
---

# Documentation & Content Standards

## Writing Style

1.  **Punctuation**: Avoid em dashes. Use commas or proper hyphenation for compound adjectives (e.g., 'user-centric').
2.  **Markdown Source**: Write **one sentence per line** in Markdown files to optimize for git diff readability. Avoid wrapping multi-sentence paragraphs.

## Editing Constraints

1.  **Root Files**: Do **not** edit Markdown files in the repository root (e.g., `README.md` in root) if they are symlinked.
2.  **Source Location**: Always edit the source files under `Markdown/` or the appropriate subdirectory.

## Documentation Guidelines (READMEs/Docs)

1.  **Tone**: Use a captivating but professional tone. Avoid over-hype.
2.  **Badges**: Include dynamic badges at the top of documents.
3.  **Theme**: Prefer dark-mode compatible stat widgets. Keep Repobeats in its default style.
4.  **Donations**: Always include a Ko-fi badge linking to `https://ko-fi.com/neonsy`.

## Analytics & Links

1.  **Tools**: Use Repobeats, OSS Insight, and Star History.
2.  **OSS Insight**: Link format: `https://ossinsight.io/analyze/<owner>/<repo>#overview`
3.  **Star History**: Use dark-mode charts when available.

## Labels (NeonSpace)

1.  **Style**: Use bold, themed, capitalized names. Avoid parentheses.
2.  **Colors**: Choose dark-mode friendly deep colors (wine reds, deep blues/greens/oranges).
3.  **Sources of Truth**: Treat `recommended-labels.txt` and the `CONTRIBUTING.md` Labels Guide as canonical. Ensure automation matches these sources.
