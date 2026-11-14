# Avatar — Checklist / Definition of Done

## Contract and structure

- [x] Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement are recorded in order.
- [x] Four adapter APIs, types, exports, examples, catalog maturity and component contract agree.
- [x] Avatar documentation follows Button: inert preview, live playground, copyable usage, nine contract sections.
- [x] Legacy Avatar selectors are audited and replaced in place; semantic tokens are used.

## Visual and responsive

- [x] Matched desktop capture compares the reference preview/anatomy/variant tiles with Norato's dotted Button-style specimen and 55-variant playground; keep Norato's yellow/neutral palette. Fresh 1265×713 render measures reference frame 636×300px at x=317 and Norato frame 631.98×300px at x=316.52; the residual width is constrained by the docs column. The static default renders the component's 56px initials body at a 60.48px visual size (1.08 specimen-only scale).
- [x] Rendered all 36 Avatar, 12 Group, 3 Label and 4 Status variants. Token/CSS geometry is fixed: Avatar 24/32/40/48/56/64px; Group 32/40/48/56px with 8/10/12/14px overlap; Label avatars 32/40/48px; presence dot 10px. Browser screenshots show circle/square crops, fallback glyphs and overlapping groups without visible stretching or clipping.
- [x] Browser tree confirms all 55 configured variants, image-fallback accessible output, six sizes, and both shapes. Intrinsic geometry across every tile and group overlap still need exhaustive pixel measurement.
- [x] RTL/LTR group order and overlap are confirmed in browser captures: first member is on the right in RTL and left in LTR; `+N` mirrors to the opposite edge. Presence remains bottom-left.
- [x] At 390×844 and 320×844, Avatar document widths are 375px and 305px without overflow. Static specimen frames match recorded reference geometry at 327×300px and 257×300px, both x=24; live playground remains within its available width and group-grid cells fit the 273px narrow container.
- [x] Live browser screenshots confirm the presence dot stays at physical bottom-left in both directions, and the generated example tracks the selected RTL/LTR mode.

## Behavior and accessibility

- [x] Broken image visibly falls back to initials in the fixed-size avatar frame. Derived and explicit initials are limited to two grapheme clusters.
- [x] Group max 3/4/5 cases and person/overflow accessible names are present in the browser tree; physical RTL placement and overlap need a visual measurement pass.
- [x] Name/status accessible labels, decorative behavior, group semantics and browser AX are reviewed.
- [x] Static specimen is inert (no focusable controls in the specimen AX subtree); direction menu opens and selects RTL with keyboard Home/Enter.
- [x] Keyboard traversed all six playground controls in order. The type list opened by ArrowDown, moved by ArrowUp, and selected with Enter; selected values updated the example. Yellow focus is visible on controls and list options.
- [ ] Independent screen-reader review is recorded; browser AX does not substitute for it.

## Engineering and delivery

- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass after this checkpoint.
- [x] Mobile evidence and the remaining independent screen-reader limitation are recorded in the request checklist.
- [x] Verified checkpoint `99f8b3f` is pushed and matches `origin/master`.
