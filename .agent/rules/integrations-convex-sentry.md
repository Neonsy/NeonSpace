---
trigger: always_on
description: Guidelines for Sentry instrumentation and Convex schema design
---

# Integrations (Sentry & Convex)

## Sentry

### Error Collection

1.  **Automatic Collection**: Error collection is configured in `src/router.tsx`.
    Do not add manual error captures unless handling a unique edge case.

### Instrumentation

1.  **Server Functions**: Wrap lengthy operations in server functions with `Sentry.startSpan`.

```tsx
import * as Sentry from '@sentry/tanstackstart-react';

Sentry.startSpan({ name: 'Requesting all the pokemon' }, async () => {
    await fetch('https://api.pokemon.com/data/');
});
```

---

## Convex

### Schema Design

1.  **Documentation**: See [Convex Types](https://docs.convex.dev/database/types) for built-in fields and data types.
2.  **System Fields**: Every document has `_id` (document ID) and `_creationTime` (Unix epoch ms).
    Indices for these fields are added automatically.
3.  **Validators (`v`)**: Use the validator builder from `convex/values`.

### Validator Reference

| Name     | Example                          |
| -------- | -------------------------------- |
| id       | `v.id("tableName")`              |
| null     | `v.null()`                       |
| number   | `v.number()` / `v.float64()`     |
| bigint   | `v.bigint()` / `v.int64()`       |
| boolean  | `v.boolean()`                    |
| string   | `v.string()`                     |
| bytes    | `v.bytes()`                      |
| literal  | `v.literal("value")`             |
| array    | `v.array(element)`               |
| object   | `v.object({ ... })`              |
| record   | `v.record(keys, values)`         |
| union    | `v.union(member1, member2, ...)` |
| any      | `v.any()`                        |
| optional | `v.optional(value)`              |

### Example Schema

```ts
import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
    users: defineTable({
        name: v.string(),
    }),

    sessions: defineTable({
        userId: v.id('users'),
        sessionId: v.string(),
    }).index('sessionId', ['sessionId']),

    threads: defineTable({
        uuid: v.string(),
        summary: v.optional(v.string()),
        summarizer: v.optional(v.id('_scheduled_functions')),
    }).index('uuid', ['uuid']),

    messages: defineTable({
        message: v.string(),
        threadId: v.id('threads'),
        author: v.union(
            v.object({ role: v.literal('system') }),
            v.object({
                role: v.literal('assistant'),
                context: v.array(v.id('messages')),
                model: v.optional(v.string()),
            }),
            v.object({
                role: v.literal('user'),
                userId: v.id('users'),
            })
        ),
    }).index('threadId', ['threadId']),
});
```

## Cross-references

-   See [Platform & Operations](platform-operations.md) for hosting and data fetching guidelines
-   See [Frontend Architecture](frontend-architecture.md) for component and state management patterns
