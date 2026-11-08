# Avatar — Checklist / Definition of Done

## Contract and structure

- [x] Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement are recorded in order.
- [x] Four adapter APIs, types, exports, examples, catalog maturity and component contract agree.
- [x] Avatar documentation follows Button: inert preview, live playground, copyable usage, nine contract sections.
- [x] Legacy Avatar selectors are audited and replaced in place; semantic tokens are used.

## Visual and responsive

- [ ] Matched Lemon/Norato captures compare ring, circle/square shapes, fallback glyphs, labels, statuses and group overlap; retain Norato yellow/neutral colors.
- [ ] All 36 Avatar, 12 Group, 3 Label and 4 Status variants have measured geometry and render without stretch or clipping.
- [x] Browser tree confirms all 55 configured variants, image-fallback accessible output, six sizes, and both shapes; pixel geometry still needs measurement.
- [ ] RTL/LTR order and bottom-left status position are confirmed; mobile 390px/320px has no document overflow.

## Behavior and accessibility

- [ ] Broken image falls back without a layout jump; derived initials are at most two grapheme clusters.
- [x] Group max 3/4/5 cases and person/overflow accessible names are present in the browser tree; physical RTL placement and overlap need a visual measurement pass.
- [x] Name/status accessible labels, decorative behavior, group semantics and browser AX are reviewed.
- [ ] Static specimen is inert; live playground interactions and keyboard/page focus behavior are checked.
- [ ] Independent screen-reader review is recorded; browser AX does not substitute for it.

## Engineering and delivery

- [ ] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [ ] Evidence and unresolved gates are recorded in the request checklist and error log.
- [ ] Verified checkpoint is pushed and remote sync is confirmed.
