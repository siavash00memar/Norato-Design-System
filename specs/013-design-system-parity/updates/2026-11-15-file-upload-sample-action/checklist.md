# Checklist — File Upload sample action

- [x] The action previously had no Norato button class; shared `.button.secondary` supplies the capsule and 48px minimum target.
- [x] Browser screenshot shows the shared secondary capsule in the RTL playground; the focus traversal reaches the queued-row actions after the sample action.
- [x] Browser accepted five sample rows, then exposed the sample action as disabled; clearing the sample restored the empty queue and enabled action.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), File Upload contract tests (8/8), Vue typecheck/build, and `git diff --check` pass.
- [ ] File Upload full DoD remains open for OS drag/drop, independent screen-reader review, and remaining combined keyboard/state paths.
