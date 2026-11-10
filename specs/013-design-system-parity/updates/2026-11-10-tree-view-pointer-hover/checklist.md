# Checklist — Tree View pointer hover

- [x] Confirm the old hover selector applied without checking pointer capability.
- [x] Gate the existing neutral hover surface to hover-capable fine pointers.
- [x] Preserve the selected, disabled, focus, RTL, and geometry rules in the source diff.
- [ ] In the local browser, verify mouse hover changes only an enabled unselected row; verify selected/disabled/focused states remain correct. A fresh Chrome screenshot placed the pointer over an unselected inert row without changing selection/expansion or the AX tree; the screenshot did not establish a reliable before/after color difference at the full-page scale.
- [ ] In a browser configured for coarse pointer/no-hover, verify tapping does not leave a hover surface.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build emits a 443.80KB main JavaScript chunk (120.37KB gzip) without a >500KB warning.
- [x] Commit `b488494` contains the pointer-capability source correction and is on `origin/master`; latest confirmed remote is `c9417dc`. This screenshot follow-up is a separate uncommitted documentation update.
