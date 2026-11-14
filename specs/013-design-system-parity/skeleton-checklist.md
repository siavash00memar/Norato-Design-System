# Skeleton — Checklist / Definition of Done

- [x] Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement recorded in order.
- [x] `NoratoSkeleton` and `NoratoSkeletonPattern`, package exports, catalog entry, contract, preview, playground and Button-style page agree.
- [x] Legacy `.sample-skeleton` styling removed or neutralized before shared selectors are introduced.
- [x] design reference/Norato screenshots reviewed at the same 1265×720 viewport: content silhouette and Button-sized dotted frame align; Norato retains its neutral palette.
- [x] All 24 effect combinations render with intrinsic, non-stretched geometry at the desktop playground width; measured shapes remain 12×12, 40×40, 120×80 and 72×32px.
- [x] RTL/LTR attributes now produce matching computed direction and mirror Avatar/Text order; the browser's active reduced-motion preference removes all Skeleton animations.
- [x] Normal-motion Shimmer travel direction verified in the browser with reduced motion disabled: RTL uses `norato-skeleton-shimmer-rtl` and its background position advances during the animation; LTR switches to `norato-skeleton-shimmer-ltr`.
- [x] Loading region exposes one accessible busy label; decorative placeholders are absent from the accessibility tree; no focusable skeleton is introduced.
- [x] At 390×844 and 320×844, document client/scroll widths match the viewport; preview frames are 358×300px and 288×300px. The Avatar + text pattern's avatar remains 40×40px at both widths.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, and `git diff --check` pass.
- [ ] Independent screen-reader review is complete.

## Skeleton — mobile bounds and normal-motion Shimmer (2026-11-10)

- [x] CSS viewports 390×844 and 320×844 both have no horizontal document overflow (390/390 and 320/320px); preview frame is 358×300px and 288×300px respectively. Avatar geometry remains square at 40×40px.
- [x] Emulated `prefers-reduced-motion: no-preference`: live Shimmer uses the RTL keyframe at direction `rtl`; its background position advances from about −99.6% to −84.0% over 250ms. Switching the live direction selector to `LTR` changes the animation name to `norato-skeleton-shimmer-ltr`.
- [ ] Independent screen-reader review remains open; keep Skeleton DoD open.

## Skeleton — mobile comparison and contract labels (2026-11-14)

- [x] At a matched 390×844 browser viewport, the Norato and design-reference specimens keep the same bounded card silhouette and near-matching frame height; the Norato page document is 375px wide with no horizontal overflow. No vertical stretch was visible.
- [x] Replaced generic generated section titles with named Skeleton-specific contract labels in Variants, Sizes, States, Parts, Usage, Accessibility, Tokens and DoD.
- [x] Fresh post-edit browser render shows the named family-specific headings. At 390×844, the local/reference card silhouettes and frame heights align visually; the local document is 375px with no horizontal overflow. The 36px visible playground capsules retain a 48px absolute pointer hit area.
- [x] Keyboard: Enter opens the type listbox, ArrowDown focuses Shape, and Enter changes Pattern → Shape while updating the generated Vue snippet. Pointer: selecting LTR updates the trigger and generated `dir="ltr"` snippet. The playground was restored to Pattern/Avatar Text/Pulse/RTL.
- [ ] Independent screen-reader review remains open for Final DoD.
