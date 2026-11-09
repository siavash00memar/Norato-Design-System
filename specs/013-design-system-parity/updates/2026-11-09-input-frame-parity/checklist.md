# Checklist — Input preview frame parity

- [x] Matched local/reference viewport is recorded (1536×647 CSS px).
- [x] Local non-compact desktop frame measures 635.98×300px after correction, matching the 636×300px reference.
- [x] Field anatomy is verified: 36px visual capsule inside 48px target, RTL placeholder and title/icon placement remain intact.
- [ ] Mobile width override remains bounded with no overflow.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build and `git diff --check` pass.
- [ ] Checkpoint is pushed to `origin/master` and remote head is verified.
