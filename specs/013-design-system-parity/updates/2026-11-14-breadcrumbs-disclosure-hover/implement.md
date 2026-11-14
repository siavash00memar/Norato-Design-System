# Implement — Breadcrumbs disclosure hover

- Added `.norato-breadcrumbs__disclosure:hover:not(:focus-visible)` using `--norato-color-brand-yellow`; no geometry, API, or resting/focus styles changed.
- Browser checks passed for Plain and Glass at Small, Medium, and Large. Hover uses `rgb(253, 193, 1)` with primary text; pointer exit returns to `rgb(255, 248, 224)`. Each target remains 48px.
- Space continues to open and close the route. Focus-visible retains the separate 2px `#805A00` outline and 2px `#FDC101` ring.
- Updated the Breadcrumbs contract, central visual rules, request-validation record, family ledger, and ERR-254.
- `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build, and `git diff --check` pass. The full family DoD remains open for exhaustive 42-part coverage and an independent screen-reader review.
