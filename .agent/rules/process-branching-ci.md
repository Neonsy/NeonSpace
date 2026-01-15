---
trigger: always_on
description: Process, branching, CI/CD gates, and workflow readability
---

# Process & Branching CI/CD

## Branching Policy

1.  **Flow**: Only `dev` can open PRs to `prev`; only `prev` can open PRs to `main`.
2.  **Validation**: Workflows should validate PR base/head accordingly.

## CI/CD Gates

1.  **Main Gate**: Allow `main` CI/CD only if checks pass.
2.  **Deployments**: Deploy preview/production only after `main` CI/CD succeeds.
3.  **Artifacts**: Upload build artifacts only for PRs targeting `prev` or `main` (since only those trigger preview/production deployments).

## Fail-fast Checks & Labeling

1.  **Sequence**: Run checks in sequence with fail-fast semantics:
    -   After TypeScript failure: add fail label and exit.
    -   After lint failure: add fail label and exit.
    -   Format failures: add label but do not exit.
2.  **Timing**: Apply labels immediately after each check, not at the end.

## Workflow Readability & Cognitive Load

### Visual Structure

1.  **Headers**: Use clear comment headers to group related steps: `# TypeScript Status Labels`.
2.  **Separation**: Add blank lines between logical sections for visual separation.
3.  **Grouping**: Group related operations together (e.g., all label management for one check).

### Label Management

1.  **Consolidation**: Consolidate multiple label operations into single steps using `gh cli`.
2.  **Grouping**: Use multi-line `run: |` blocks to group related label changes.
3.  **Consistency**: Always use `gh pr edit` commands for consistency across all workflows.

### Step Organization

1.  **Functional Grouping**: Group by function, not by success/failure (e.g., all TypeScript-related steps together).
2.  **Patterns**: Use consistent patterns across workflows.
3.  **Granularity**: Prefer fewer, more comprehensive steps over many small steps.
4.  **Logic**: Keep related conditional logic close together.

## Organization & Readability

1.  **Consolidation**: Consolidate related operations (especially label management) per check.
2.  **Visuals**: Use clear visual grouping and comments to reduce cognitive load.
3.  **Consistency**: Keep patterns consistent across workflows.

## Cross-references

-   See [Governance & Collaboration](governance-collaboration.md) for meta rules and collaboration guidelines
-   See [Platform & Operations](platform-operations.md) for DevOps and safety rules
-   See [Commit Messages](commit-messages.md) for commit message standards
