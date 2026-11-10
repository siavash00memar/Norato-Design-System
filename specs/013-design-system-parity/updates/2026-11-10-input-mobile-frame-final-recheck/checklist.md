# Checklist — Input mobile frame final recheck

- [x] Audited selector scope; the mobile frame now clamps against the viewport using the semantic 16-space token.
- [x] Matched 390×844 local/reference frame comparison: 326×300px at x=24.5px vs 327×300px at x=24px; local document is 375/375px.
- [x] Matched 320×844 local/reference frame comparison: 256×300px at x=24.5px vs 257×300px at x=24px; local document is 305/305px. The reference scrolls to 326px at this width.
- [x] Title/icon remain adjacent; placeholder is RTL. The 48px interaction target contains a centered 36px capsule (6px inset on both block edges), with 1px `#e8e8e8` resting Stroke.
- [x] Evidence records the narrow frame correction; full adapter-state visual matrix and independent screen-reader review remain open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build emitted only its callback-timing advisory.
- [ ] Commit, push and verify remote parity.
