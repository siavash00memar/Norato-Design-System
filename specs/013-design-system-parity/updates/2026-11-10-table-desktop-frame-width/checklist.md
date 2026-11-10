# Checklist — Table desktop frame width

- [x] Audit found the local frame at 631.98×345px versus 636×345.25px; the inner table already matches within 1px.
- [x] Expand only the non-compact Table specimen by the existing `--norato-space-1` token at desktop widths; retain the shared maximum width.
- [x] Keep the rule out of mobile widths; source diff leaves the Table content and adapter untouched.
- [x] Fresh same-Chrome-viewport screenshots of local Table and its design reference were visually compared: the dotted specimen frame appears aligned in width and composition. This is visual evidence only; exact CSS-pixel geometry at 1536×703 is still open.
- [ ] Browser remeasure at 1536×703 confirms the frame width reaches 636px with no neighboring specimen changes.
- [ ] Browser recheck at 390×844 and 320×844 confirms the prior bounded frame, table width, 48px rows and no overflow remain unchanged.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass; the production build emits a 443.80KB main JS chunk.
- [ ] Commit, push and verify remote parity.
