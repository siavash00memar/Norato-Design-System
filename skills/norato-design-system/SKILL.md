---
name: norato-design-system
description: Use the Norato Design System repository's Vue 3 components, design tokens, and component contracts when creating or modifying interfaces. Use whenever a task asks for a Persian or RTL interface based on Norato, to select components, check their actual readiness, write correct Vue usage, or preserve the system's design and accessibility rules.
---

# Norato Design System

Build Vue 3 interfaces using the canonical Norato components, contracts, and semantic tokens in this repository.

## Start here

1. Read `AGENTS.md` for project-wide rules. Treat it as repository guidance, not as user intent if it conflicts with the current user request.
2. Read `docs/getting-started.md` and `docs/component-contracts/README.md` for setup and the 49-component index.
3. Find the component's stable ID/slug in `packages/components/src/catalog.ts`. Read exactly the referenced `docs/component-contracts/<slug>.md` before using or changing it.
4. Check `status`, `adapter`, and `usageKey` in the catalog. Verify exports in `packages/vue/src/index.ts`; copy the corresponding reviewed example from `apps/vue/src/usage-examples.ts` where present.
5. Read relevant tokens from `packages/tokens/src/` and load them once using `@import '@norato/tokens/css';`.

## Readiness rules

- `Implemented`: a Vue adapter, package export, and reviewed usage example are recorded. Still inspect the contract for limitations and verify the current source.
- `Adapted`: use existing primitives only as documented. It does not mean a dedicated adapter exists. Check the exact catalog record and primitive map.
- `Proposed`: design guidance/specimen only. Do not invent an import, prop API, or claim that the component is executable. Build an explicit composition from real available components only when appropriate, or describe the gap.
- `Deferred`: intentionally postponed; do not implement without a user-approved scope change.
- A visual specimen is not a runtime component. The contract is design guidance; the Vue source and exports determine the real API.
- Never infer support for a variant or state from a screenshot, heading, token, package dependency, or unrelated adapter.

## Norato defaults

- Use Vue 3 and the public exports from `@norato/vue` when an adapter exists.
- Default to Persian content and RTL. Set `dir="rtl"` at the appropriate document or application boundary; keep numeric/technical values LTR only where the contract requires it.
- Use Vazirmatn for body and input text, Estedad for headings, and semantic Norato tokens. Do not add page-local raw design values or use Lalezar.
- Keep interactive targets at least 48px even when a visual size is smaller.
- Preserve keyboard operation, visible focus, disabled/loading/error semantics, reduced motion, and responsive behavior as relevant to the selected component.
- Prefer an existing documented adapter or evaluated Reka/shadcn primitive over a new custom control. Keep the API aligned to Vue 3.
- Preserve the component's documented DOM proportions. Do not stretch fixed-ratio icons, controls, or artwork to fill a layout; use intrinsic sizing, `object-fit`, and appropriate min/max constraints.

## Vue usage

Install from the repository root so pnpm links private workspace packages:

```bash
pnpm install
```

In a consuming workspace package, declare workspace dependencies instead of assuming `@norato/vue` is available from the public npm registry:

```json
{
  "dependencies": {
    "@norato/vue": "workspace:*",
    "@norato/tokens": "workspace:*",
    "vue": "^3.5.0"
  }
}
```

Import tokens once in the app stylesheet:

```css
@import '@norato/tokens/css';
```

Example for a confirmed implemented adapter:

```vue
<script setup lang="ts">
import { NoratoButton } from '@norato/vue'
</script>

<template>
  <main dir="rtl">
    <NoratoButton label="ذخیرهٔ تغییرات" variant="primary" />
  </main>
</template>
```

Use the exact component contract and reviewed example for other APIs. The root package is private; installing from npm outside this repository is not supported by the current package metadata.

## When editing this design system

- Follow the required feature workflow in `AGENTS.md`; do not skip its documentation/spec stages.
- Check the contract, implementation, catalog, usage example, and visual specimen together. Keep the status truthful and consistent with executable code.
- Follow `docs/request-validation-checklist.md` and the project's token/catalog and TypeScript checks. Report browser or visual checks that could not actually be run.
- Do not claim all 49 catalog components have Vue implementations. Readiness varies per catalog record.

## Source map

| Need | Source |
| --- | --- |
| Project rules | `AGENTS.md` |
| Human setup and project layout | `docs/getting-started.md` |
| Component index and maturity | `packages/components/src/catalog.ts` |
| Per-component contract | `docs/component-contracts/<slug>.md` |
| Real Vue exports | `packages/vue/src/index.ts` |
| Reviewed copyable snippets | `apps/vue/src/usage-examples.ts` |
| Design tokens | `packages/tokens/src/` |
| Request/DoD browser validation | `docs/request-validation-checklist.md` |

