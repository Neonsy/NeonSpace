---
trigger: always_on
description: Frontend architecture, project structure, component guidelines, and state management
---

# Frontend Architecture

## Project Structure

### Imports & Layout

1.  **Absolute Imports**: Always use absolute imports via alias (based at `src`).
2.  **Directory Layout**: Organize source under `src/{types,hooks,components}`. Scope files locally (file/folder/parent) unless they are widely reused.

### Readability & DX

1.  **Spacing**: Use newlines to separate logical code blocks.
2.  **Naming**: Use descriptive variable and property names. Avoid abstract names like `c` or `v`.
3.  **Comments**:
    -   Use descriptive headers (e.g., `# TypeScript Status Labels`).
    -   Add comments before logical sections.
    -   Keep comments concise but meaningful.

### Cognitive Load

1.  **Grouping**: Minimize cognitive overload with clear visual grouping.
2.  **Flow**: Structure code with a logical flow that is easy to scan. Avoid scattered, repetitive operations.

## UI Components

### Libraries

1.  **Primary**: Prefer **shadcn**. Use `https://tweakcn.com` to adjust variants.
2.  **Custom**: Build custom components only for tighter control or reduced bloat.

### Accessibility (a11y)

1.  **Standards**: Ensure WCAG 2.2 AA compliance (labels, roles, focus states, keyboard nav, color contrast).

### Structure

1.  **File**: One component per file. Export `default function`.
2.  **Size**: Keep components small and focused. Extract concerns even if not reuseable yet.

## Styling & Responsive

1.  **Framework**: Use **Tailwind CSS v4**.
2.  **Responsive**: Use `tailwind-clamp` for fluid, responsive sizing.
3.  **Plugins**: Include `@tailwindcss/forms` and `@tailwindcss/typography`.
4.  **Theming**: **Dark-mode only** (no theme switching).
5.  **Workflow**: Desktop-first; implement mobile only when explicitly requested.

## State Management (Zustand)

### Configuration

1.  **Middleware**: Always wrap stores with `immer` middleware.
2.  **Slices**: Split store logic into feature-focused slices.
3.  **Composition**: Compose slices in the store entry (`index.ts`).

### Location

-   Store: `src/store/STORENAME/index.ts`
-   Slices: `src/store/STORENAME/*.ts`

### Skeleton Example

```typescript
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

// counter.slice.ts
export type CounterSlice = { count: number; inc: () => void };
export const createCounterSlice = (): CounterSlice => ({ count: 0, inc: () => {} });

// index.ts
export type StoreState = CounterSlice;
export const useStore = create<StoreState>()(immer((set, get) => ({ ...createCounterSlice() })));
```

## React Compiler & Effects

1.  **React Compiler**: Enabled globally. Use idiomatic hooks; rely on compiler for optimization. **DO NOT** use `useMemo`, `useCallback`, or `React.memo` unless you have profiled the code and confirmed performance issues. Trust the compiler.
2.  **Effects (`useEffect`)**: Use only to sync with the outside world (subscriptions, DOM, network). Do not use for pure computation or derived state.
3.  **Layout Effects (`useLayoutEffect`)**: Use only for pre-paint DOM read/write to avoid flicker.
4.  **Purity**: Keep components pure and deterministic.
5.  **Server Components**: No effects in Server Components.
6.  **React 19 / Canary**: We use the React Canary release. You have access to the React 19 View Transition API; use it for smooth transitions.
