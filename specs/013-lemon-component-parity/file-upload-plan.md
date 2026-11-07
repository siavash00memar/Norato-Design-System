# File Upload — implementation plan

1. Audit the existing `.sample-upload` markup/selectors and generic page layout; replace the inert preview structure and remove stale upload rules before adding styles.
2. Implement the shared queue/item types and four public Vue adapters using native file inputs and drag/drop events. Keep transport outside the package, with controlled statuses/progress.
3. Add size/type/count validation and visible/reported rejection reasons; preserve valid files when another selection contains invalid entries. Keep the decision logic pure and cover its boundary cases with Node's built-in test runner.
4. Create a live playground for Dropzone size, accept/limit, queue, progress/status, Upload Tile and Avatar Upload; synchronize copyable public Vue usage.
5. Integrate exports, usage, catalog maturity, primitive map, component contract, Figma rules, preview and Button-style page.
6. Compare Lemon/Norato desktop/mobile. Verify click/keyboard/file chooser/drop, accepted/rejected files, limits, controlled updates, item actions, statuses/progress, focus/disabled/error, RTL/LTR and no stretching/overflow.
7. Record exact evidence in DoD/request checklist/error log, run validation unit tests plus token/catalog/typecheck/build/diff gates, keep maturity truthful, commit/push and verify remote parity.

Primitive evaluation: native `<input type="file">`, `<button>` and `DataTransfer` are the platform primitives best suited to real local file selection/drop. No Reka or shadcn primitive adds value to browser file transfer; no dependency is required.

## Visual/verification follow-up — 2026-11-07

1. Remove the shadowed legacy File Upload specimen branch and keep one branch using the existing `.sample-file-upload-dropzone` styles; verify Default marker and nested frame at desktop/mobile.
2. Use the browser's real file chooser API with local accepted/rejected fixtures to test pointer and Enter/Space activation, accepted model queue, validation messages, and input reset. Attempt a true native file drag only if the browser surface supports a payload; otherwise leave that DoD item open accurately.
3. Expose the existing `multiple` prop through the File Upload playground and generated snippet, then test single selection/replacement and multiple count rejection through real chooser selections.
4. Render matching line SVGs in both inert and live Dropzone icons; use Norato yellow/dark for the action cue and a neutral lower wash, then check the browser render and package stylesheet.
