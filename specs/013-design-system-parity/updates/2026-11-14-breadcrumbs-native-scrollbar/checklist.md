# Checklist — Breadcrumbs narrow-path scrollbar

- [x] Scrollbar hiding is scoped only to the live breadcrumb list.
- [x] Horizontal scrolling and full natural labels remain available.
- [x] RTL order, left-facing separators, disclosure, and 48px targets are unchanged.
- [x] Browser screenshot no longer shows native scrollbar chrome at the available narrow viewport.
- [x] Keyboard traversal still reaches the disclosure and the next visible link; Space opens/closes the disclosure.
- [ ] Exact 390px/320px post-change bounding-box capture remains open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, and `git diff --check` pass after the documented updates.
