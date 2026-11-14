# Range mobile gallery — Implement

- Added a Range-only two-column state-gallery rule at the existing 599px breakpoint. Other component galleries and live Range behavior are unchanged.
- Matched 390×844 and 320×844 renders show seven actual states in four even mobile rows; the explanatory paragraph remains below the gallery as a full-width note. Grid height is 549.5px at both widths (down from 1164.56px at 390px). Document client/scroll widths match at 375/375px and 305/305px. RTL and 48×48px target, 96×6px rail, 20×20px thumb are preserved.
- `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts/exports), `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Browser console has no errors. Full Range DoD remains open for broader behavior coverage and independent screen-reader review.
