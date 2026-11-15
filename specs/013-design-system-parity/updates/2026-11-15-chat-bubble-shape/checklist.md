# Checklist — Chat bubble shape and typography

- [x] Constitution, specification, clarification, plan, tasks and analysis records are complete before implementation.
- [x] Semantic Chat radius and message line-height tokens added and detected by the token checker.
- [x] Static and runtime message shells use the Chat radius and put the 6px corner at the RTL lower sender-side edge.
- [x] Static and runtime message text use body-small size and Chat line-height 1.8.
- [ ] Norato palette and existing message order/API remain intact.
- [ ] Matched desktop and 390/320px browser measurements and screenshots reviewed.
- [ ] Text wrapping checked for all sender × type examples; no clipped messages or horizontal overflow.
- [x] Contract, visual rule, request checklist, component DoD and error log updated.
- [x] Token, catalog, Vue typecheck/build and diff gates pass.
- [ ] Independent screen-reader review remains explicitly open unless actually performed.

## Current evidence

- [x] Fresh local and reference screenshots were reviewed at the same 1280×720 browser viewport; RTL sample placement, typography rhythm, and sender-side lower corners were visually inspected.
- [x] Live Chat AX snapshot exposes the incoming/outgoing fixture messages and playground controls after the update.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` passed.
- [ ] Responsive 390/320 recapture, full sender/type screenshot matrix, and independent screen-reader review still need completion before closing this update.
