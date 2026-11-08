# Input Hover Stroke — Checklist

- [x] Runtime default stroke is one 1px `#E8E8E8` capsule.
- [x] Hover stroke is yellow for enabled normal and invalid fields.
- [ ] Disabled hover is excluded by the explicit rule; capture and verify an interactive disabled-state render.
- [x] No extra field outline, ring, or shadow is rendered; wrapper border is 0px and the capsule stroke is 1px.
- [x] Local browser confirms hover-only yellow, invalid-hover yellow, and neutral resting state.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass after Toast export wiring; build reports a 965.16KB chunk advisory. No test suite was requested or added.

