---
type: 'agent_requested'
description: 'Rules for global design motifs, per-page minimum content, and project visibility behavior for cards and detail pages; also specifies Sanity CMS as the source of truth for Blog, Projects, and About content.'
---

-   Scope has no 404 page at this time.
-   The echo app (neon-space-echo) is a visual reference only, not a strict specification.
-   Favor bold, interactive proposals while preserving clarity, performance, and accessibility.

Global design

-   Use a fixed cosmic background with particles and tasteful glows.
-   Keep ModernHeader with active route underline and Footer present across pages.
-   Respect prefers-reduced-motion and ensure adequate contrast and visible focus states.
-   Use semantic color roles and Tailwind tokens via CSS variables (hsl(var(--token))).

Content sources (CMS)

-   Sanity is the current CMS and source of truth for Blog, Projects, and About page content.
-   Blog posts (list/detail), Projects (list/detail with visibility, status, tech, and allowed links), and About (bio, skills/tech, values, timeline) must be fetched from Sanity, not hardcoded.
-   Define typed schemas and map fields to UI components; keep local mock data only as a development fallback.

Home (/)

-   Include a hero with primary value statement and a clear primary CTA.
-   Show a compact profile snapshot, a small set of featured projects, and a brief philosophy or approach.
-   Provide a secondary CTA to Contact.

About (/about)

-   Include a hero and a short bio.
-   Present core capabilities/skills and a concise tech stack overview.
-   List principles/values and a minimal timeline or mission log.
-   End with a contact CTA.

Projects (/projects)

-   Provide search and filters including visibility (Open Source, Client Work, Private) and optionally status (Active, Maintenance, Archived).
-   Show a grid of cards with title, short blurb, visibility badge, status badge (optional), and key techs.
-   Surface only the actions allowed by the project visibility (see Visibility rules).

Project detail (/projects/[slug])

-   Show title, role, period, status, and tech stack.
-   Provide a concise narrative: Problem → Approach → Outcome.
-   Display metrics that are permitted to be shared; anonymize as required.
-   Expose actions conditionally per visibility (see Visibility rules) and provide Contact CTA when source/demo cannot be shared.

Blog list (/blog)

-   Provide search and tag filter.
-   Show cards with title, excerpt, date, and tags.

Blog detail (/blog/[slug])

-   Show title, date, tags, and readable content with clear hierarchy.
-   Optional share or contact CTA.

Contact (/contact)

-   Present clear contact CTAs (email/socials and/or a simple form).
-   Include a brief reassurance about response window or what to include in messages.

Visibility rules (cards and detail)

-   Open Source: Show an "Open Source" badge, a repo/source link, and demo link if available. Allow full case study.
-   Client Work (confidential): Show a "Client Work" badge, never show repo link, demo only if public. Provide anonymized case study and a Contact CTA. Include an NDA note when relevant.
-   Private: Show a "Private" badge, do not show repo or demo links. Provide high-level overview only and a Contact CTA.

Implementation guidance

-   Keep card and detail components visibility-aware, with actions gated by visibility and by the presence of allowed URLs.
-   Provide a reduced-motion path for animated sections, and avoid excessive overlapping blur layers for performance.
-   Ensure heading levels are consistent, interactive elements are keyboard accessible, and links have visible focus styles.
