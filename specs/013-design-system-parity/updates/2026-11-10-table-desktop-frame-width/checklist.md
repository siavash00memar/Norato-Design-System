# Checklist — Table desktop frame width

- [x] Audit found the local frame at 631.98×345px versus 636×345.25px; the inner table already matches within 1px.
- [x] Expand only the non-compact Table specimen by the existing `--norato-space-1` token at desktop widths; retain the shared maximum width.
- [x] Keep the rule out of mobile widths; source diff leaves the Table content and adapter untouched.
- [x] Fresh same-Chrome-viewport screenshots of local Table and its design reference were visually compared: the dotted specimen frame appears aligned in width and composition. This is visual evidence only; exact CSS-pixel geometry at 1536×703 is still open.
- [x] Live local browser remeasure at 1920×903 confirms the frame width is 635.984px and height is 345px; the fixed max-width remains the 636px reference bound. The inner Table measures 562×258.5px.
- [ ] Exact post-change 390×844 and 320×844 recheck remains open; see the mobile frame inset follow-up.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass; the production build emits a 443.80KB main JS chunk.
- [ ] Commit, push and verify remote parity.
