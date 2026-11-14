# Implement — OTP required completion

## Change

`NoratoOtpInput` now passes the existing `required` prop to each native digit cell. The public API, visual capsule, value model, and event handlers are unchanged. Updated the Input component contract, Norato component rules, error log, Request Validation record, and Input DoD.

## Browser evidence

- Before: with Required on, only the first cell was required; entering its first digit made all six cells valid while five remained empty.
- After: lengths 4, 5 and 6 each mark all configured cells required. After entering only the first digit, 3/4/5 cells remain missing and only the first is valid. Filling the remaining digits makes all cells valid.
- Required off: empty 4/5/6-cell instances have no required cells and all inputs remain valid.
- A six-digit paste fills every position and focuses the last cell; ArrowLeft moves one cell backward; Backspace from an empty cell moves to the preceding cell. Existing sequential-entry evidence remains in the Input DoD; its handler is unchanged.
- Screenshot review confirms the RTL field label, LTR OTP row, rounded capsules, and yellow focused-cell Stroke. No visual or size CSS changed.
- The temporary browser tab was closed after resetting the playground; the user-owned browser tabs were not modified.

## Technical gates

- `pnpm check:tokens` — passed.
- `pnpm check:catalog` — passed: 49 unique routes/contracts.
- `pnpm --dir apps/vue typecheck` — passed.
- `pnpm --dir apps/vue build` — passed; Vite emitted its existing chunk-size warning for the main bundle (>500KB).
- `git diff --check` — passed; Git emitted only existing LF-to-CRLF working-copy notices.

## Remaining Input DoD

This focused native-required defect is closed. Overall Input DoD remains open for the broader state/visual matrix and independent screen-reader validation.
