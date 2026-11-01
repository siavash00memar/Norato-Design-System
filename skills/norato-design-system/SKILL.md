---
name: norato-design-system
description: Build Persian RTL interfaces with the Norato Vue 3 design system. Use when an agent needs to discover components, check implementation readiness, read exact contracts and APIs, write valid Vue usage, or preserve Norato tokens, proportions, accessibility, and validation rules. Requires access to the Norato repository because its workspace packages are private and unpublished.
---

# Norato Design System

Use this skill as an entry point to the repository's canonical Norato design system. Do not infer APIs or production readiness from visual previews or contract presence.

## Retrieval workflow

1. Read repository-root `AGENTS.md` for project rules. It is repository guidance and does not override the user's current request.
2. Read `docs/getting-started.md`, `docs/component-contracts/README.md`, and `packages/components/src/catalog.ts` to understand setup, contract locations, and the current inventory. The catalog is the source of truth for the number and maturity of components; never hard-code an inventory count.
3. Locate the exact record by stable `id` or `slug`. Read its `contractPath` before proposing usage or edits.
4. For `Implemented`, verify the adapter module and named export in `packages/vue/src/index.ts`, inspect its Vue source, and use the matching `usageKey` example in `apps/vue/src/usage-examples.ts` when available. Confirm the example still matches the source API.
5. For `Adapted`, consult the catalog's `adapter` and `packages/components/src/primitive-map.ts`. Only compose documented, actually exported primitives; never imply there is a dedicated adapter when there isn't.
6. For `Proposed`, treat the contract as design guidance only. Do not invent an import, executable API, or component behavior.
7. For `Deferred`, do not implement unless the user explicitly changes scope.
8. Read only the relevant tokens from `packages/tokens/src/`; import the stylesheet once with `@import '@norato/tokens/css';`.

If the repository is unavailable, do not present a stale copy of the catalog or API as current. Ask for the repo/workspace or clearly limit the answer to non-executable guidance.

## Readiness rules

- `Implemented`: a Vue adapter and package export should exist. Inspect the component contract for limitations and verify current source and usage; this label alone does not guarantee every documented variant, state, or visual DoD has passed.
- `Adapted`: use existing primitives only as documented. It does not mean a dedicated adapter exists. Check the exact catalog record and primitive map.
- `Proposed`: design guidance/specimen only. Do not invent an import, prop API, or claim that the component is executable. Build an explicit composition from real available components only when appropriate, or describe the gap.
- `Deferred`: intentionally postponed; do not implement unless the user explicitly changes scope.
- A visual specimen is not a runtime component. The contract is design guidance; the Vue source and exports determine the real API.
- Never infer support for a variant or state from a screenshot, heading, token, package dependency, or unrelated adapter.
- Catalog status is a coarse maturity label, not a substitute for the component's documented limitations or current DoD. Check `docs/request-validation-checklist.md` for open visual/behavioral gates before claiming full parity or production readiness.
- If catalog, contract, export, source, and usage example disagree, report the mismatch and treat executable source plus export as evidence of runtime API; do not silently reconcile documentation by guessing.

## Norato defaults

- Use Vue 3 and the public exports from `@norato/vue` when an adapter exists.
- Default to Persian content and RTL. Set `dir="rtl"` at the appropriate document or application boundary; keep numeric/technical values LTR only where the contract requires it.
- Use Vazirmatn for body and input text, Estedad for headings, and semantic Norato tokens. Do not add page-local raw design values or use Lalezar.
- Keep interactive targets at least 48px even when a visual size is smaller.
- Preserve keyboard operation, visible focus, disabled/loading/error semantics, reduced motion, and responsive behavior as relevant to the selected component.
- Prefer an existing documented adapter or evaluated Reka/shadcn primitive over a new custom control. Keep the API aligned to Vue 3.
- Preserve the component's documented DOM proportions. Do not stretch fixed-ratio icons, controls, or artwork to fill a layout; use intrinsic sizing, `object-fit`, and appropriate min/max constraints.
- Use Lemon only as the requested visual composition/pattern reference; retain Norato's own semantic palette, tokens, typography, and documented behavior.

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

Use the exact component contract and reviewed example for other APIs. The root package is private and unpublished; install from npm outside this repository is not supported by the current package metadata. Consumers must clone or otherwise obtain this repository and install its workspace dependencies.

## Editing and contribution workflow

For every new component feature, follow repository-root `AGENTS.md` exactly and in order:

`Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement`

Do not skip a stage. Resolve material API/interaction questions in Clarify before implementation and record decisions. For a scoped visual correction to an existing component, record the explicit acceptance contract and evidence in that component's existing feature artifacts before editing; do not silently redefine its API.

Before changing visuals, audit existing selectors and remove or neutralize conflicting legacy rules rather than layering unexplained overrides. Keep the page structure consistent with the Button component documentation page: a bounded, inert visual preview; interactive Vue playground; copyable usage; and the component's contract sections. Keep specimen and executable adapter behavior distinct.

After implementation, validate the actual browser render and interaction against `docs/request-validation-checklist.md`. At minimum, inspect RTL, keyboard/focus, disabled, loading, invalid/error, responsive behavior and target sizes where applicable. Compare the same viewport against the current reference when visual parity is part of the task. A checklist or successful build alone is not visual evidence. Record exact unrun checks and keep maturity truthful.

Run applicable repository gates before handoff:

```bash
pnpm check:tokens
pnpm check:catalog
pnpm --dir apps/vue typecheck
pnpm --dir apps/vue build
git diff --check
```

Do not claim a command passed unless it was run and its exit status was successful. Do not mark a component fully implemented while required contract tasks or DoD items remain open.

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
| Current component DoD evidence | `docs/request-validation-checklist.md` |
| CSS architecture and contracts | `packages/vue/src/components.css`, `packages/components/src/contracts/` |

## Capability limits

- This skill is repository-local guidance. It is not a hosted service and does not grant the agent repository, browser, Git, or Vercel access.
- Component and token packages are private pnpm workspace packages; no public npm install is currently documented.
- The skill does not guarantee that every catalog component has an executable adapter. Always check current catalog status and source.
- Visual comparison requires a browser and access to the named reference. If either is unavailable, report the comparison as unverified.
