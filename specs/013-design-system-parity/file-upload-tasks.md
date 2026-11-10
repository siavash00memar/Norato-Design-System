# File Upload — ordered tasks

- [x] T001 Constitution gate: confirm RTL, token, target, API/page and evidence requirements.
- [x] T002 Specify design reference-backed acceptance and validation scope.
- [x] T003 Clarify controlled queue, transfer boundary, defaults and rejection behavior.
- [x] T004 Plan primitive selection and verification workflow.
- [x] T005 Create DoD checklist before implementation.
- [x] T006 Audit and replace legacy preview; implement four adapters, playground, exports and docs.
- [ ] T007 Compare design reference desktop/mobile and verify chooser/drop/validation/status/focus/RTL/accessibility.
- [x] T008 Run all technical gates, record browser limits in DoD/error log, commit/push and verify GitHub parity (`2c399b0f5995dbc3a33dee0cf59c1ce8eaac25e6`).
- [x] T009 Extract type/size/count decisions into a pure validator and cover valid files, partial rejection, limits, single-file mode, empty accept, and invalid limits with Node's built-in test runner.
- [x] T010 Fix the shadowed inert File Upload specimen branch so its Default marker and centered inner Dropzone render; verify bounded desktop/mobile geometry and design reference comparison.
- [x] T011 Expose the existing `multiple` prop in the playground/snippet; real chooser evidence covers click and Enter/Space selection, accepted/rejected behavior, limits, replacement and input reset. Native OS drag/drop remains open under T007.
- [x] T012 Updated the component contract, request/error logs and DoD; validation tests and repository gates pass. Commit `7ac56ca` is pushed to `origin/master` and the full remote hash matches. Keep maturity Adapted while drag/drop and accessibility gates remain open.
- [x] T013 Preserve focus across File Item retry/cancel/delete transitions. Browser verified replacement-action focus and next/previous/Dropzone targets; native OS drag/drop, reduced motion and independent screen-reader review remain open.
- [x] T014 Expose required status on the accessible Dropzone name because the clipped native file input is omitted from the browser AX tree; preserve its native required constraint and verify both enabled/disabled prop states.
- [x] T015 Scope the File Upload playground Tile progress slider to the semantic Norato-yellow accent and a 48px target after live review found the blue default and 16px hit area; keyboard behavior remains intact.
