# Checklist — Tree View pointer hover

- [x] Confirm the old hover selector applied without checking pointer capability.
- [x] Gate the existing neutral hover surface to hover-capable fine pointers.
- [x] Preserve the selected, disabled, focus, RTL, and geometry rules in the source diff.
- [ ] In the local browser, verify mouse hover changes only an enabled unselected row; verify selected/disabled/focused states remain correct.
- [ ] In a browser configured for coarse pointer/no-hover, verify tapping does not leave a hover surface.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build emits a 443.80KB main JavaScript chunk (120.37KB gzip) without a >500KB warning.
- [ ] Commit, push, and verify the remote hash and clean worktree.
