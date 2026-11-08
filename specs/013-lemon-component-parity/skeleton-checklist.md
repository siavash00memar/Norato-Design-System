# Skeleton — Checklist / Definition of Done

- [x] Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement recorded in order.
- [x] `NoratoSkeleton` and `NoratoSkeletonPattern`, package exports, catalog entry, contract, preview, playground and Button-style page agree.
- [x] Legacy `.sample-skeleton` styling removed or neutralized before shared selectors are introduced.
- [x] Lemon/Norato screenshots reviewed at the same 1265×720 viewport: content silhouette and Button-sized dotted frame align; Norato retains its neutral palette.
- [x] All 24 effect combinations render with intrinsic, non-stretched geometry at the desktop playground width; measured shapes remain 12×12, 40×40, 120×80 and 72×32px.
- [x] RTL/LTR attributes now produce matching computed direction and mirror Avatar/Text order; the browser's active reduced-motion preference removes all Skeleton animations.
- [ ] Normal-motion Shimmer travel direction still needs a browser session with reduced motion disabled; current browser preference is reduce.
- [x] Loading region exposes one accessible busy label; decorative placeholders are absent from the accessibility tree; no focusable skeleton is introduced.
- [ ] 390px and 320px layouts have no horizontal overflow; widths clamp to container and circles remain square.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, and `git diff --check` pass.
- [ ] Independent screen-reader review is complete.
