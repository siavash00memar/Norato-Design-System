# Empty State — Checklist / Definition of Done

## Contract and structure

- [x] Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement are recorded in order.
- [x] `NoratoEmptyState` and `NoratoEmptyStateVisual` types, props, slots, exports, usage snippet, catalog maturity and component contract agree.
- [x] Page follows Button section order; inert design reference-like preview is separate from live playground and nine contract sections.
- [x] Legacy `.sample-empty` and its direct icon/button rules were removed before introducing new selectors.
- [x] Figma rules, request-validation evidence, error log and 49-family ledger reflect current behavior and remaining gaps.

## Visual and responsive

- [x] Matched viewport design reference/Norato captures compare frame, icon/illustration geometry, title, description, action hierarchy and spacing; preserve Norato colors.
- [x] All 12 Empty State layout × size × container combinations and 24 Visual type × size × tone combinations render.
- [x] Horizontal layout puts visual at RTL inline-start and mirrors in LTR; vertical layout stays centered.
- [x] All 24 icon/illustration size-tone samples remain within their visual container; actions remain ≥48px.
- [x] At 390×844 and 320×844 Chromium mobile viewports, document widths remain bounded at 375px and 305px. After the mobile frame alignment, the inert specimen matches the reference at 327×300px and 257×300px; horizontal mode stacks at the 599px breakpoint.

## Behavior and accessibility

- [x] Primary and secondary action slots render NoratoButton; click reports the host-selected action without implicit navigation, dismissal or announcement.
- [x] Named section references its heading and description; decorative visual is hidden from the browser accessibility tree.
- [x] Keyboard Tab reaches the secondary action with visible focus; actions measure 48px.
- [x] RTL and LTR order are explicit. Reduced-motion behavior remains quiet (no unnecessary motion in this component).
- [x] A consumer-sized 40×40 SVG in the visual slot remained 40×40. Raw anchor and button children in the action slot each measured 48px high.
- [ ] Independent screen-reader review is recorded; browser AX inspection is not counted as a substitute.

## Engineering and delivery

- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build` and `git diff --check` pass after this update.
- [x] design reference and Norato mobile renders were captured at 390px and 320px; the Norato screenshots and exact viewport geometry were reviewed. design reference's own navigation includes offscreen links in its DOM, so element bounds outside the viewport are not treated as document overflow when its root document width remains at the viewport width.
- [ ] Independent screen-reader review and full exhaustive behavior cross-product remain open; DoD is not closed until these are complete.
- [x] Verified checkpoint `580ba73` is pushed to `origin/master`; remote synchronization is confirmed.

## Matched preview-frame width follow-up — 2026-11-10

- [x] Same-window 1920×903 browser comparison measured the local frame at 632×300px and the reference frame at 636×300px.
- [x] Added a desktop-only 4px allowance with `--norato-space-1`, capped by the shared frame token. After HMR, the local frame measures 635.98×300px; RTL content remains centered at 625.98×216.89px and the document has no horizontal overflow.
- [x] The desktop rule applies only above 600px. A fresh mobile follow-up separately records the 390px/320px frame correction below.
- [ ] Independent screen-reader review and exhaustive behavior cross-product remain open. This follow-up does not close Empty State DoD.

## Matched mobile frame width follow-up — 2026-11-10

- [x] At exact 390×844, reference and local frames both measure 327×300px at x=24px; local document/body widths are 375/375px.
- [x] At exact 320×844, reference and local frames both measure 257×300px at x=24px; local document/body widths are 305/305px with no horizontal overflow.
- [x] The mobile frame uses a 16px total inset from the existing `--norato-space-4` token. Local RTL content remains within the frame at 317×216.89px at 390px and 247×237.28px at 320px; it does not stretch.
- [x] After resetting the temporary viewport, desktop frame remains 635.98×300px and document client/scroll widths remain 1905/1905px.
- [ ] Independent screen-reader review, custom slot cases and exhaustive behavior cross-product remain open; Empty State DoD is not closed.
