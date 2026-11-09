# Checklist — Pagination playground bounds

- [x] Lowering total pages clamps the current-page control and generated code (13→2).
- [x] Zero and fractional totals normalize to positive integers (0→1, 2.7→2).
- [x] Previous/next disable correctly at page 1/13 and 13/13; one-page total disables both.
- [x] Current page, selection and copyable snippet remain synchronized; playground restored to 3/12.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build and `git diff --check` pass.
- [x] Evidence checkpoint `d2b5840` is pushed.
- [ ] Independent screen-reader review remains open.
