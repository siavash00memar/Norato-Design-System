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
- [x] At 390×844 and 320×844 Chromium mobile viewports, document/body widths equal the viewport with no overflowing elements. The inert specimen frame measured 358×288px and 288×288px; horizontal mode stacks at the 599px breakpoint.

## Behavior and accessibility

- [x] Primary and secondary action slots render NoratoButton; click reports the host-selected action without implicit navigation, dismissal or announcement.
- [x] Named section references its heading and description; decorative visual is hidden from the browser accessibility tree.
- [x] Keyboard Tab reaches the secondary action with visible focus; actions measure 48px.
- [x] RTL and LTR order are explicit. Reduced-motion behavior remains quiet (no unnecessary motion in this component).
- [x] A consumer-sized 40×40 SVG in the visual slot remained 40×40. Raw anchor and button children in the action slot each measured 48px high.
- [ ] Independent screen-reader review is recorded; browser AX inspection is not counted as a substitute.

## Engineering and delivery

- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build` and `git diff --check` pass after this update.
- [x] Lemon and Norato mobile renders were captured at 390px and 320px; the Norato screenshots and exact viewport geometry were reviewed. Lemon's own navigation includes offscreen links in its DOM, so element bounds outside the viewport are not treated as document overflow when its root document width remains at the viewport width.
- [ ] Independent screen-reader review and full exhaustive behavior cross-product remain open; DoD is not closed until these are complete.
- [x] Verified checkpoint `580ba73` is pushed to `origin/master`; remote synchronization is confirmed.
