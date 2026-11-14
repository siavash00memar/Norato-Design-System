# Skeleton — Analyze

## Source evidence
- design reference's live page identifies the component as two parts with 24 variants: four base shapes × two effects, plus eight presets × two effects.
- The live specimen uses a card silhouette with a circular avatar and several text blocks. design reference recommends matching the expected content shape and using one effect consistently across a page; it advises against skeletons for buttons/actions and against long waits without a message.
- design reference states RTL Shimmer travels left-to-right. The loading region uses `aria-busy`.
- `packages/components/src/catalog.ts` currently marks Skeleton `Proposed` and has no `adapter` or `usageKey`. `docs/component-contracts/skeleton.md` is an existing early contract, not an implementation record.
- `apps/vue/src/ComponentSpecimen.vue` renders the current preview using `.sample-skeleton` with hard-coded `i`/`b` elements. The matching selectors are in the minified `apps/vue/src/component-specimen.css`; they are legacy selectors and will be removed/replaced before introducing a shared component.
- Public exports and style imports live in `packages/vue/src/index.ts`; component CSS is centralized in `packages/vue/src/components.css` with separate component stylesheets for Progress/Spinner/Tooltip.
- Semantic colors are declared in `packages/tokens/src/color.css`; layout contracts are added to `packages/tokens/src/layout.css` and declared in `packages/tokens/src/schema.ts`. The token checker validates these sources.
- `apps/vue/src/App.vue` has a dedicated playground branch for each richer adapter; `apps/vue/src/usage-examples.ts` holds generated examples; `packages/components/src/catalog.ts` defines the route contract. Skeleton currently has neither a playground nor a usage example.

## Decisions
- **2026-11-14 acceptance correction:** section cards must use authored, component-specific labels; generated counters such as «نمونهٔ گونه ۳»، «بخش ۳» and «حالت ۳» are not acceptable content. Every unlabeled Variants/Sizes/States/Parts/Usage/Accessibility/Tokens/DoD entry in the Skeleton contract will receive a meaningful title without changing the API or visual reference composition.
- Fresh same-viewport browser review at 390×844 shows the Norato specimen and reference both retain bounded preview frames of near-matching height and a natural avatar/text silhouette. The local document measures 375px client/scroll width. No visible vertical stretch or horizontal overflow was observed. The independent playground pointer/keyboard path was not re-run in this pass, so Baseline remains open.
- Shared components: a single shape and a single preset. Each is a labelled `role="region"` busy container; all repeated visual blocks are `aria-hidden`.
- Tokens: neutral default surface for the base and elevated surface for the moving highlight; motion comes only from the chosen effect and is disabled for reduced motion.
- Pattern dimensions use CSS Grid/Flex with `min-inline-size:0`; circle uses equal inline/block size, text bars use fixed max widths and preserve layout under constrained containers.
- The exact legacy selector audit is complete: `.sample-skeleton` owns one flex row, one `i` avatar and three `b` lines; this selector will be removed, then the preview will render `NoratoSkeletonPattern`.
- design reference was observed at the browser's 1265×720 viewport. Its preview frame is visibly the same dotted glass family as the other components; Skeleton itself is an approximately 320px-wide card with avatar aligned to the right and stacked text bars. Exact design reference geometry and the matched Norato screenshot must be measured after implementation.
- Runtime CSS selector behavior, 24 combinations, geometry, direction and AX remain to be validated after implementation.
- **Post-implementation defect found and corrected:** `.norato-skeleton-pattern { direction: inherit }` overrode the element's `dir` attribute, so a requested LTR pattern computed as RTL and kept the RTL avatar/text order. Removing that declaration lets the native `dir` attribute control computed direction. Rechecked the live playground: LTR computes LTR with the avatar at inline-start; RTL computes RTL with the avatar at inline-end. The browser reports reduced motion enabled, so normal-motion shimmer travel remains open.
