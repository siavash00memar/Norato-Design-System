# Checklist — Input size gallery

- [x] Dedicated Small/Medium/Large/XLarge Input capsules render in the local browser; source tokens define the visible body as 36px and CSS keeps the target at least 48px. Exact computed browser rectangles remain open.
- [x] Persian RTL labels and placeholders, tokenized neutral stroke and Norato palette are preserved.
- [x] Same-viewport 1265×713 local/reference comparison is recorded, including the deliberate 36px versus 32/40/48/56px field-body distinction.
- [ ] Exact computed geometry and 390px/320px wrapping remain open; the 484×900 local viewport shows bounded two-column samples without visible clipping or stretch.
- [x] Only the Input Sizes section changes; other components retain the generic size-scale visualization.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [ ] Input final DoD remains open for any unrelated adapter/state and independent screen-reader coverage.
