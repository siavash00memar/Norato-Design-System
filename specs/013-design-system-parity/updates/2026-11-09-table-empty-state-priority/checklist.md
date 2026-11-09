# Checklist — Table empty-state priority

- [x] Loading status wins while `loading` is true.
- [x] Empty source uses `emptyLabel` even when a search query remains.
- [x] Non-empty source with no matches uses `noResultsLabel`.
- [x] Matching rows return when the query matches.
- [x] Keyboard focus transfers to the enabled pager control at both page boundaries; current page exposes `aria-live="polite"` (independent spoken output remains in Table DoD).
- [x] Previous/Next arrow glyphs follow RTL and LTR direction.
- [x] Direction selector defaults to RTL and the generated sample tracks the chosen direction.
- [x] RTL/LTR playground and generated examples remain valid.
- [x] Token audit, component catalog audit, Vue typecheck, production build and `git diff --check` pass.
- [x] Evidence and remaining DoD gaps are recorded.

