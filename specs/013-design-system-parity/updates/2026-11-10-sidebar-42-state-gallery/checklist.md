# Checklist — Sidebar 42-state visual gallery

- [x] Six gallery families render the documented 4 + 20 + 8 + 2 + 4 + 4 combinations.
- [x] Every specimen has a visible family/state label and static examples are inert/aria-hidden.
- [x] Desktop render reviewed in Chrome; 390px/320px browser views, intrinsic proportions at narrow widths, and no-overflow verification remain open.
- [x] Existing Playground remains in the page; its accessible interactive behavior and minimum 48px targets were previously browser-verified and no Playground code changed.
- [x] Component contract, Figma rules, request validation and feature checklist describe the gallery; no recurring selector collision was found, so no error-log entry was needed.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [x] Commit `bb3acf9` was pushed and origin/master matched local HEAD at verification.
