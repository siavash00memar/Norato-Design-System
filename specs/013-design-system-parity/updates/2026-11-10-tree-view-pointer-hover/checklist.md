# Checklist — Tree View pointer hover

- [x] Confirm the old hover selector applied without checking pointer capability.
- [x] Gate the existing neutral hover surface to hover-capable fine pointers.
- [x] Preserve the selected, disabled, focus, RTL, and geometry rules in the source diff.
- [x] Same-page Chrome screenshots before/after fine-pointer hover show a subtle neutral surface on the enabled, unselected inert row; the row content and page accessibility tree remain unchanged.
- [x] Follow-up Chrome review confirms selected yellow, disabled no-hover and a separate keyboard focus outline; details in `../2026-11-10-tree-view-selected-hover-priority/`.
- [ ] In a browser configured for coarse pointer/no-hover, verify tapping does not leave a hover surface.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build emits a 443.80KB main JavaScript chunk (120.37KB gzip) without a >500KB warning.
- [x] Commit `b488494` contains the pointer-capability source correction and is on `origin/master`; latest confirmed remote is `c9417dc`. This screenshot follow-up is a separate uncommitted documentation update.
