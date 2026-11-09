# Checklist / Definition of Done — Radio focus cascade

- [x] Focused live Radio uses `outline: 0` and a visible shadow ring derived from the semantic 2px focus token; settled computed spread is exactly 2px.
- [x] `:focus-visible` is true after keyboard navigation; selection, RTL and 48px minimum row target remain intact. The active radio retained its checked value; row geometry is 48.8px.
- [x] Norato yellow is preserved for the ring and the playground is restored to Monthly/enabled/no-error after review. Hover/error/disabled CSS declarations were not changed; their full live state cross-product remains a separate open family check.
- [x] Same-viewport browser captures were reviewed: Norato's keyboard focus ring is yellow and 2px; reference documentation calls for a 2px keyboard ring. Reference color was not copied; Norato palette remains authoritative.
- [ ] Independent screen-reader review remains an explicit separate DoD item.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- [x] Checkpoint `e4b28e1` is pushed to `origin/master`; the remote head matches the local commit.
