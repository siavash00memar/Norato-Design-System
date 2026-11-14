# Implement — Select contract copy parity

Updated the Select component contract, canonical family checklist, request-validation log, family ledger, and ERR-243. The runtime is unchanged; the local, user-approved placeholder remains `یک شهر انتخاب کنید` and the live playground fixture remains Tehran.

Matched desktop browser review and the focused option-group/keyboard interaction passed. Full state-by-state screenshot comparison and independent screen-reader review remain open.

`pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
