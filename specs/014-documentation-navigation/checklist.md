# Documentation Navigation Checklist

- [x] Active component has an obvious yellow treatment and `aria-current="page"`.
- [x] Switching components keeps one app shell/document instance and updates the hash.
- [x] Active item is revealed within the sidebar list without scrolling the whole page to it.
- [x] Direct component URL and browser Back/Forward restore active state.
- [x] Keyboard Enter changes the current component and visible focus remains present; RTL alignment is preserved.
- [x] Browser console has no new errors.
- [x] `pnpm check:tokens`, Vue typecheck/build, and `git diff --check` pass.
