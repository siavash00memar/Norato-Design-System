# Checklist — Component specimen first paint

- [x] Fresh Combobox route first paint shows the Default label and green status dot.
- [x] Dotted glass frame and centered placeholder remain; the fallback is `aria-hidden` and inert, and reduced motion still disables the placeholder animation.
- [x] At desktop and mobile widths, the ready Combobox sample replaces the fallback in the same preview frame; mobile first/second screenshots show the frame's position and height unchanged.
- [x] The initial inventory view still shows compact fallback specimens; compact mode hides the full-size Default marker.
- [x] Browser evidence, request validation and error log are current.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.

