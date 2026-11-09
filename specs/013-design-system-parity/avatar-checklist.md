# Avatar — Checklist / Definition of Done

## Contract and structure

- [x] Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement are recorded in order.
- [x] Four adapter APIs, types, exports, examples, catalog maturity and component contract agree.
- [x] Avatar documentation follows Button: inert preview, live playground, copyable usage, nine contract sections.
- [x] Legacy Avatar selectors are audited and replaced in place; semantic tokens are used.

## Visual and responsive

- [x] Matched same-desktop-viewport captures compare the reference preview/anatomy/variant tiles with Norato's dotted Button-style specimen and 55-variant playground; keep Norato's yellow/neutral palette. Local frame is about 580×288px versus the reference frame about 630×300px, constrained by the narrower documentation column.
- [x] Rendered all 36 Avatar, 12 Group, 3 Label and 4 Status variants. Token/CSS geometry is fixed: Avatar 24/32/40/48/56/64px; Group 32/40/48/56px with 8/10/12/14px overlap; Label avatars 32/40/48px; presence dot 10px. Browser screenshots show circle/square crops, fallback glyphs and overlapping groups without visible stretching or clipping.
- [x] Browser tree confirms all 55 configured variants, image-fallback accessible output, six sizes, and both shapes; pixel geometry still needs measurement.
- [x] RTL/LTR group order and overlap are confirmed in browser captures: first member is on the right in RTL and left in LTR; `+N` mirrors to the opposite edge. Presence remains bottom-left.
- [x] At 390×844 and 320×844, Avatar page document widths are 375px and 305px with no horizontal overflow. The live playground remains within 343px/273px; all group-grid cells fit their 273px mobile container, and no playground descendant extends beyond the viewport.
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
