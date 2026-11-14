# Checklist — Select contract copy parity

- [x] Constitution, specification, clarification, and plan recorded in order.
- [x] Same-viewport local/reference screenshots reviewed at 1265×713; both show the centered RTL field, left-side chevron, dotted stage and 300px-high frame.
- [x] Local unselected placeholder is `یک شهر انتخاب کنید`, per the approved project rule; the reference copy differs, so the local text is preserved.
- [x] Local playground defaults to Tehran. AX exposes the `مرکز`, `جنوب`, `شمال‌غرب`, and `شمال` groups, selected Tehran, and disabled `به‌زودی` option.
- [x] ArrowDown from search focused an option and Enter selected Isfahan; reopening and Enter on Tehran restored the trigger, summary and fixture to Tehran.
- [x] Update the component contract's stale placeholder and 288px frame description.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- [ ] Push the verified documentation update and confirm `origin/master`; do not deploy.
- [ ] Full Select state-by-state screenshot comparison and independent screen-reader review remain open.
