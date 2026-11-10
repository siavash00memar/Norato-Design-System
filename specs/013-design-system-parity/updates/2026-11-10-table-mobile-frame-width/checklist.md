# Checklist — Table mobile frame width

- [ ] Confirm the CSS selector is limited to the inert Table specimen at widths ≤600px.
- [ ] At 390×844, frame measures 327px at x=24px; RTL is preserved and the document has no horizontal overflow.
- [ ] At 320×844, frame measures 257px at x=24px; inner table remains contained and the document has no horizontal overflow.
- [ ] At 1536×703, frame remains approximately 636×345px and the desktop rule is unaffected.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, Vue build and `git diff --check` pass.
- [x] Commit `802555d` was pushed; `HEAD` and `origin/master` both resolved to `802555ded13416006c57a8c0c77358c94dae4900`.
