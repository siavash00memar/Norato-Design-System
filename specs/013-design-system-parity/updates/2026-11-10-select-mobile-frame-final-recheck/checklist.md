# Checklist — Select mobile frame final recheck

- [x] Confirmed the responsive frame rule is scoped to the inert Select preview; the live trigger/menu selectors are unchanged.
- [x] Matched 390×844 local/reference frame comparison passes within 1px: 326×300px at x=24.5px local and 327×300px at x=24px reference; local document is 375/375px.
- [x] Matched 320×844 local/reference frame comparison passes within 1px: 256×300px at x=24.5px local and 257×300px at x=24px reference; local document is 305/305px. The reference scrolls to 326px at this width.
- [x] RTL trigger remains 48px high; at 320px, the open listbox measures 273×384.1px at x=16px, remains within the viewport, and contains six options. Escape closes it and returns focus to the trigger; selection remains Tehran.
- [x] Evidence records this focused responsive check; the full state screenshot matrix and independent screen-reader review remain open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build emitted only its callback-timing advisory.
- [ ] Commit, push and verify remote parity.
