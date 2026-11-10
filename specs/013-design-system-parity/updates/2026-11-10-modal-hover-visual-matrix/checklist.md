# Checklist — Modal hover visual matrix

- [x] Confirmation actions and close action: pointer hover preserves RTL order and does not display an unintended keyboard-focus ring.
- [x] Form actions and close action: pointer hover preserves RTL order and does not display an unintended keyboard-focus ring.
- [x] Nested form field: hover border is Norato yellow; focus is the single yellow stroke and the visual field remains 36px high/capsule-shaped.
- [x] Pointer hover causes no activation, submission or layout shift.
- [x] Compare same-viewport local/reference visual states and record the source-composition limitation.
- [ ] Independent screen-reader and controlled/uncontrolled `open` review remain open under the canonical Modal DoD.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build emitted only its existing callback-timing advisory.
- [ ] Commit, push and verify remote parity.
