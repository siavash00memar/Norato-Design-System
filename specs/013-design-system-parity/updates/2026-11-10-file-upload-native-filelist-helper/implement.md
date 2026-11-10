# Implement — File Upload native FileList helper

- Extracted controlled `FileList` assignment into an internal helper; the component still uses the browser `DataTransfer` constructor and exposes no new public API.
- Added contract tests for preserved file identity/order, omission of model rows without a `File`, empty-queue clearing, and safe no-op when unavailable.
- `pnpm test:file-upload` passes 8/8; token/catalog checks, Vue typecheck/build and `git diff --check` pass.
- No DOM/browser test dependency is installed. Native `ValidityState`, `FormData`, chooser lifecycle, drag/drop, visual render and independent screen-reader review remain open in the family DoD.
