# Skeleton — Checklist / Definition of Done

- [x] Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement recorded in order.
- [x] `NoratoSkeleton` and `NoratoSkeletonPattern`, package exports, catalog entry, contract, preview, playground and Button-style page agree.
- [x] Legacy `.sample-skeleton` styling removed or neutralized before shared selectors are introduced.
- [x] Lemon/Norato screenshots reviewed at the same 1265×720 viewport: content silhouette and Button-sized dotted frame align; Norato retains its neutral palette.
- [ ] All 24 effect combinations render with intrinsic, non-stretched geometry.
- [ ] RTL/LTR order and shimmer direction are verified; reduced-motion removes animation.
- [ ] Loading region exposes one accessible busy label; decorative placeholders are absent from the accessibility tree; no focusable skeleton is introduced.
- [ ] 390px and 320px layouts have no horizontal overflow; widths clamp to container and circles remain square.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, and `git diff --check` pass.
- [ ] Independent screen-reader review is complete.
