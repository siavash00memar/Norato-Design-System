# Input Hover Stroke — Checklist

- [x] Runtime default stroke is one 1px `#E8E8E8` capsule.
- [ ] Reproduce hover stroke as yellow for enabled normal and invalid fields. **Reopened 2026-11-08:** the current user report conflicts with earlier browser evidence. Current Vercel inspection confirms the resting capsule is 1px `#e8e8e8`, wrapper border is 0px, and there is no outline/shadow; the hover selector exists, but this browser interaction did not preserve pointer hover, so the live hover result is not reconfirmed.
- [ ] Disabled hover is excluded by the explicit rule; capture and verify an interactive disabled-state render.
- [x] No extra field outline, ring, or shadow is rendered; wrapper border is 0px and the capsule stroke is 1px.
- [ ] Local browser confirms hover-only yellow, invalid-hover yellow, and neutral resting state. Neutral resting stroke is reconfirmed; hover and invalid-hover remain open pending a real pointer-hover capture.
- [x] Current checkpoint: `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass; build reports a 1,014.57KB chunk advisory. No test suite was requested or added.

