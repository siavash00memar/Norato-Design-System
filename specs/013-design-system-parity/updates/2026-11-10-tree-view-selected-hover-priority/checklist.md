# Checklist — Tree View selected/hover priority

- [x] Live Chrome reproduced the defect: selected README row turned neutral gray when hovered, while AX still reported it selected.
- [x] CSS review found `:hover:not([data-disabled])` outranked `[data-selected="true"]` through specificity.
- [x] Hover only enabled, unselected rows.
- [x] Verify selected remains yellow while hovered and focus outline stays separate.
- [x] Verify disabled rows remain muted without hover surface; restore default selection/expanded state.
- [x] Update canonical contract, family DoD, Figma rule, request-validation evidence and error log.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build` and `git diff --check` pass.
- [ ] Push and verify remote parity.
