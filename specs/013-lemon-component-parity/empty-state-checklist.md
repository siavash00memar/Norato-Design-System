# Empty State — Checklist / Definition of Done

## Contract and structure

- [x] Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement are recorded in order.
- [x] `NoratoEmptyState` and `NoratoEmptyStateVisual` types, props, slots, exports, usage snippet, catalog maturity and component contract agree.
- [x] Page follows Button section order; inert Lemon-like preview is separate from live playground and nine contract sections.
- [x] Legacy `.sample-empty` and its direct icon/button rules were removed before introducing new selectors.
- [x] Figma rules, request-validation evidence, error log and 49-family ledger reflect current behavior and remaining gaps.

## Visual and responsive

- [x] Matched viewport Lemon/Norato captures compare frame, icon/illustration geometry, title, description, action hierarchy and spacing; preserve Norato colors.
- [x] All 12 Empty State layout × size × container combinations and 24 Visual type × size × tone combinations render.
- [x] Horizontal layout puts visual at RTL inline-start and mirrors in LTR; vertical layout stays centered.
- [x] All 24 icon/illustration size-tone samples remain within their visual container; actions remain ≥48px.
- [ ] 390px and 320px have no document overflow; horizontal mode wraps or stacks cleanly at the narrow breakpoint.

## Behavior and accessibility

- [x] Primary and secondary action slots render NoratoButton; click reports the host-selected action without implicit navigation, dismissal or announcement.
- [x] Named section references its heading and description; decorative visual is hidden from the browser accessibility tree.
- [x] Keyboard Tab reaches the secondary action with visible focus; actions measure 48px.
- [x] RTL and LTR order are explicit. Reduced-motion behavior remains quiet (no unnecessary motion in this component).
- [ ] Direct custom visual content and consumer-provided raw anchor/button slot sizing remain unverified.
- [ ] Independent screen-reader review is recorded; browser AX inspection is not counted as a substitute.

## Engineering and delivery

- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build` and `git diff --check` pass after this update.
- [ ] Browser review, Lemon comparison, any failures, and all open limits are recorded before closing DoD.
- [ ] Verified checkpoint is pushed to `origin/master`; local worktree is clean.
