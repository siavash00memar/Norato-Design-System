# Tasks — File Upload native form files

- [x] T001 Inspect the input reset behavior, queue contract, required semantics, and existing selectors.
- [x] T002 Implement native FileList synchronization for controlled queued files and picker lifecycle.
- [x] T003 Update the component contract, family DoD, request validation and error log; keep browser-only claims open until observed.
- [x] T004a Verify Required and Disabled accessibility states, generated-example synchronization and single/multiple mode binding in a real browser.
- [ ] T004b Verify named native payload and picker lifecycle; chooser-cancel restoration remains open.
  - [x] Browser selected and removed files in the controlled queue; Required validity tracked selected versus empty state.
  - [x] A real local FormData report showed selected Dropzone/Avatar names and file metadata; after Dropzone removal the next report contained «attachments: بدون فایل».
  - [x] Same-file reselection succeeded for Dropzone after row removal and Avatar after controlled clear.
  - [ ] Native chooser cancellation/restoration and direct evaluator access to FileList entries remain unverified.
- [ ] T004c Verify required form submission, OS drag/drop payload and independent screen-reader output.
  - [x] Empty required inputs block submit with native `valueMissing`; both selected inputs pass validity. FormData inspection is local and no network request/navigation occurs.
  - [ ] Native OS drag/drop payload and independent screen-reader output remain open. Reduced-motion and Dropzone keyboard focus are recorded in the 2026-11-15 recheck below.
- [ ] T005 Run gates, commit/push and verify remote parity.
