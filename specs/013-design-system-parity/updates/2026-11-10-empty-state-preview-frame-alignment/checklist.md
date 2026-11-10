# Checklist — Empty State preview frame alignment

- [x] Existing selectors audited; no conflicting Empty State frame width rule.
- [x] Desktop frame measures 635.98×300px against the 636×300px reference at the matched 1920×903 window.
- [x] Centering and intrinsic content sizing remain intact; content measures 625.98×216.89px within the 635.98×300px frame.
- [x] The new selector is active only above 600px; the existing 390px/320px measurements and mobile rules are unaffected by its media condition. No fresh narrow viewport capture was available in this browser session.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, and Vue build pass.
- [x] `docs/request-validation-checklist.md` records the rendered evidence; `git diff --check` passes.
- [x] Component DoD and family ledger retain all unrelated outstanding accessibility requirements.
