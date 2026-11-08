# Input Hover Stroke — Checklist

- [x] Runtime default stroke is one 1px `#E8E8E8` capsule.
- [ ] Reproduce hover stroke as yellow for enabled normal, invalid, and success fields. **Reopened 2026-11-08:** cascade order was corrected so the enabled-hover rule follows invalid/success styles. Browser interaction still did not preserve pointer hover; live result is not reconfirmed.
- [ ] Disabled hover is excluded by the explicit rule; capture and verify an interactive disabled-state render.
- [x] No extra field outline, ring, or shadow is rendered; wrapper border is 0px and the capsule stroke is 1px.
- [ ] Local browser confirms hover-only yellow across default, invalid, and success; disabled remains neutral; resting states restore their status stroke. Static CSS confirms selector order, but runtime pointer hover remains open pending capture.
- [x] Current checkpoint: `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass; build reports a 1,014.57KB chunk advisory. No test suite was requested or added.

