# Checklist — Input preview frame parity

- [x] Matched local/reference viewport is recorded (1536×647 CSS px).
- [x] Local non-compact desktop frame measures 635.98×300px after correction, matching the 636×300px reference.
- [x] Field anatomy is verified: 36px visual capsule inside 48px target, RTL placeholder and title/icon placement remain intact.
- [x] Matched 390×844 viewport: local frame is 328×300px vs reference 327.2×300px; both documents are 375px wide with no horizontal overflow.
- [x] At 320×844, the local document is 305px wide with no horizontal overflow; the reference frame measures 256.8×300px and its document is 326px wide (6px horizontal overflow relative to the viewport).
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build and `git diff --check` pass.
- [x] Checkpoint `b863c24` is pushed to `origin/master`; remote head matches local and the worktree is clean.
