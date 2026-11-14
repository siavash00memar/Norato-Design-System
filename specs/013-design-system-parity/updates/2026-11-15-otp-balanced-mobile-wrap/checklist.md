# Checklist — OTP balanced mobile wrap

- [x] Narrow six-cell rows are centered at 320px; measured cell x positions are 42.5, 98.5, 154.5, 210.5px then 98.5, 154.5px.
- [x] Six medium cells remain one row at 390px; measured x positions are 21.5, 77.5, 133.5, 189.5, 245.5, 301.5px.
- [x] Existing 52×52px cell targets and 4px token gap are preserved.
- [x] Local document has no horizontal overflow: 305/305px at 320px and 375/375px at 390px.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- [x] OTP group remains LTR; ArrowRight from cell 1 focuses cell 2 at 320px, and all six values remained empty.
