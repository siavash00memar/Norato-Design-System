# Implementation — File Upload responsive geometry evidence

Initial responsive measurements exposed a narrow-screen frame/padding mismatch. In `apps/vue/src/component-specimen.css`, the audited mobile frame uses the existing 4px spacing token and a 16px inline inset below 360px; the inner Dropzone remains at its contracted 152px minimum height. No adapter behavior or upload runtime code changed.

Post-change browser measurements at 390px and 320px show the frame/inner Dropzone within 1px/2.76px and 0px/1.84px of reference width respectively; the local document remains bounded and inner height remains fixed at 152px. File Upload Final DoD remains open for state coverage, named native form payload, OS drop, and independent screen-reader evidence.

## Verification

- `pnpm check:tokens` — passed.
- `pnpm check:catalog` — passed (49 routes/contracts/exports).
- `pnpm --dir apps/vue typecheck` — passed.
- `pnpm --dir apps/vue build` — passed (Vite production build).
- `git diff --check` — passed; Git printed existing line-ending normalization warnings for dirty worktree files.
