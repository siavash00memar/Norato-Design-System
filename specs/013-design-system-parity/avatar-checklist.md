# Avatar — Checklist / Definition of Done

## Contract and structure

- [x] Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement are recorded in order.
- [x] Four adapter APIs, types, exports, examples, catalog maturity and component contract agree.
- [x] Avatar documentation follows Button: inert preview, live playground, copyable usage, nine contract sections.
- [x] Legacy Avatar selectors are audited and replaced in place; semantic tokens are used.

## Visual and responsive

- [x] Matched desktop capture compares the reference preview/anatomy/variant tiles with Norato's dotted Button-style specimen and 55-variant playground; keep Norato's yellow/neutral palette. Fresh 1265×713 render measures reference frame 636×300px at x=317 and Norato frame 631.98×300px at x=316.52; the residual width is constrained by the docs column. The static default renders the component's 56px initials body at a 60.48px visual size (1.08 specimen-only scale).
- [x] Rendered and DOM-measured all 36 Avatar, 12 Group, 3 Label and 4 Status variants. Avatar boxes are square at 24/32/40/48/56/64px; Group avatars are 32/40/48/56px with exact 8/10/12/14px overlap; Label avatars are 32/40/48px; all four status dots are 10×10px. No Avatar size stretches in either axis.
- [x] Browser tree and live matrix confirm all 55 configured variants, image fallback, six sizes and both shapes. Circle radius is 50px, square radius is 6px; square image assets remain 1:1 with `object-fit: cover`.
- [x] RTL/LTR group order and overlap are confirmed in browser captures: first member is on the right in RTL and left in LTR; `+N` mirrors to the opposite edge. Presence remains bottom-left.
- [x] At 390×844 and 320×844, Avatar document widths are 375px and 305px without overflow. Static specimen frames match recorded reference geometry at 327×300px and 257×300px, both x=24; live playground remains within its available width and group-grid cells fit the 273px narrow container.
- [x] Live browser screenshots confirm the presence dot stays at physical bottom-left in both directions, and the generated example tracks the selected RTL/LTR mode.

## Behavior and accessibility

- [x] Broken image visibly falls back to initials in the fixed-size avatar frame. Derived and explicit initials are limited to two grapheme clusters.
- [x] All 12 Group combinations have measured item count/size/overlap; max 3/4 exposes the expected +N item, max 5 shows five people. Browser geometry confirms first member right and +N left in RTL; first left and +N right in LTR.
- [x] Name/status accessible labels, decorative behavior, group semantics and browser AX are reviewed.
- [x] Static specimen is inert (no focusable controls in the specimen AX subtree); direction menu opens and selects RTL with keyboard Home/Enter.
- [x] Keyboard traversed all six playground controls in order. The type list opened by ArrowDown, moved by ArrowUp, and selected with Enter; selected values updated the example. Yellow focus is visible on controls and list options.
- [ ] Independent screen-reader review is recorded; browser AX does not substitute for it.

## Engineering and delivery

- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass after this checkpoint.
- [x] Mobile evidence and the remaining independent screen-reader limitation are recorded in the request checklist.
- [x] Code checkpoint `7d8118a` (Avatar specimen alignment) is pushed; this matrix follow-up is recorded separately.

## Matrix geometry and matched mobile review — 2026-11-14

- [x] Fresh same-viewport DOM audit measured all 36 Avatar tile boxes: XS/S/M/L/XL/2XL are square at 24/32/40/48/56/64px across Image/Initials/Icon and Circle/Square. Circle/Square radii resolve to 50/6px; every image asset is square and uses `object-fit: cover`.
- [x] All 12 Group cases measure S/M/L/XL avatars at 32/40/48/56px with exact overlap 8/10/12/14px. Max 3/4 produces +N; max 5 produces five person avatars. RTL first person is rightmost/+N leftmost; after switching direction, LTR first person is leftmost/+N rightmost. Playground was restored to RTL.
- [x] Three Label sizes measure 32/40/48px. The four status variants expose Persian accessible names and 10×10px dots.
- [x] Matched 390×844 reference/local sample frames measure 327×300px at x=24; previously recorded matched 320×844 frames measure 257×300px at x=24. Current local document width equals client width at both sizes (375px/305px); all playground descendants stay within the viewport at 320px.
- [x] Direction selector pointer path updates and restores the code sample. Existing recorded keyboard review covers all six controls and Home/Enter RTL selection; primary controls retain 48px hit areas around the 36px visual trigger.
- [x] Baseline gates pass on the current implementation: token/catalog, Vue typecheck/build, `git diff --check`, and prohibited-name scan. Baseline is now eligible to pass; strict Final DoD remains open for exhaustive screenshot archive/playground focus review and independent screen-reader validation.
