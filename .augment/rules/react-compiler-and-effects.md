---
type: 'agent_requested'
description: 'Apply automatically when working on React/Next components, hooks, effects, or performance.'
---

# React Compiler & Effects

## React Compiler

-   React Compiler is enabled globally (Next.js experimental.reactCompiler); avoid manual useMemo/useCallback unless profiling proves an escape hatch is needed.

## Effects

-   useEffect only to sync with the outside world (subscriptions, timers, DOM APIs, network/cache, logging/metrics, imperative widgets); do not use effects for pure computation or derived state.
-   useLayoutEffect only for pre-paint DOM read/write to avoid flicker; otherwise default to useEffect.

## Component Purity

-   Keep components pure and deterministic; prefer render-time derivation over effect-set state.

## Server vs Client

-   No effects in Server Components; place effects in Client Components only.

## TanStack Virtual & Table with React Compiler

-   Prefer the Compiler’s memoization by default; if you observe stale renders or missed updates in virtualization/table leaf nodes, opt out surgically with "use no memo" on those components (virtualized rows, cell renderers) instead of disabling globally.
-   Do not stack React.memo/useMemo/useCallback on components that the Compiler transforms. Choose one strategy: rely on the Compiler, or opt out and manage memoization yourself.
-   TanStack Table inputs must be immutable and referentially stable:
    -   Memoize `data` and `columns`; recreate shallow containers on actual changes; never mutate in place.
    -   Avoid mutating options/state objects passed into the table instance (including Maps/Sets). Create new instances on change.
-   TanStack Virtual identity rules:
    -   Provide a deterministic `getItemKey` (avoid array index if items can reorder).
    -   Propagate measurement‑relevant props; don’t block rerenders with over‑memoization at item boundaries.
-   Keep DOM reads/writes out of render. Perform measurements in effects (useLayoutEffect if pre‑paint is required). Render must stay pure.
-   Keep hook dependency arrays complete; avoid hidden deps or ref‑based mutations that don’t change identity.
-   Roll out Compiler gradually; keep TanStack libs and React up‑to‑date; opt out only where necessary.
