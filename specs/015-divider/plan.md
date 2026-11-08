# Divider — Plan

## Architecture and files
- Public runtime: `packages/vue/src/components/NoratoDivider.vue` using the installed Reka `Separator` for semantic orientation and decorative behavior.
- Styles: append a documented `.norato-divider` block to `packages/vue/src/components.css`; use border-default/strong and spacing 1/2 tokens only.
- Public API: export the component and the `NoratoDividerOrientation`, `NoratoDividerType`, `NoratoDividerSpacing`, and `NoratoDividerTone` types from `packages/vue/src/index.ts`.
- Runtime inventory: add the Divider implementation/export and `usageKey` to `packages/components/src/catalog.ts`; record the evaluated primitive in `primitive-map.ts`.
- Docs: enrich `docs/component-contracts/divider.md`, add `usageExamples.divider`, and create `apps/vue/src/DividerPlayground.vue`.
- Page: add the live playground branch in `App.vue`, import it, and replace the generic preview with `NoratoDivider` inside the shared inert Button dotted frame in `ComponentSpecimen.vue`.
- Specimen-only styles: remove `.sample-divider`; cap only the inert top Rule at the design reference-observed proportion with `--norato-divider-preview-rule-inline-size`; preview height remains the shared frame's height.

## Composition
- Reka Separator owns semantic role/orientation/decorative attributes.
- Divider has no internal state or events. Props determine orientation, type, spacing, tone, label and accessible decoration.
- A label uses a two-segment CSS grid. It stays upright in vertical mode and follows logical inline alignment.
- Playground controls mirror only public props; generated Vue code and live preview stay synchronized.

## Verification
- Inspect design reference at the same desktop viewport and at mobile width if the browser permits; compare composition, default line and shared preview frame.
- Browser exercise all 12 orientation/type/tone combos plus all 3 spacing settings, RTL/LTR label-start placement, decorative/semantic AX output and measured 1px intrinsic geometry.
- Inspect 390px and 320px widths for overflow and axis stretching.
- Run token/catalog checks, Vue typecheck/build and `git diff --check`; record exact evidence and gaps in the request checklist.

## Risks
- Reka separator's child semantics may hide label descendants when semantic. Use the visible label as `aria-label` on the primitive and mark the rendered text visual-only to avoid duplicate announcements.
- Vertical labels differ from the simple default preview; retain upright text and fixed rule thickness.

**Gate:** Plan files, primitive boundary, selectors and verification are explicit. Proceed to Checklist.


