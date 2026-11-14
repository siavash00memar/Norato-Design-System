# Implement — Modal optional trigger and uncontrolled open

- Added an optional `trigger` slot rendered through Reka `DialogTrigger as-child`.
- Added `{ open, close }` slot props to body and footer; `close()` updates the DialogRoot in both controlled and uncontrolled use.
- Added the playground's internal-open toggle, single-trigger rendering, and matching code sample. Controlled mode remains the default.
- Updated the canonical contract, Modal DoD, request-validation record, and ERR-259.
- Browser verified uncontrolled RTL opening, title/description/field accessibility exposure, cancel status, focus restoration, valid Persian submission, success status, close, and code sample.
- `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` passed. Build output retains the existing ~456KB JavaScript chunk advisory.
- Open evidence: independent screen-reader review. Direct uncontrolled Escape/close-icon focus return and outside dismissal now pass in the browser.
- Deployment: none. Git commit/push: none.
