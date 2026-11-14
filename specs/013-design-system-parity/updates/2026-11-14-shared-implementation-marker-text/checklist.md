# Checklist — Shared implementation marker text color

- [x] Implementation surface and glyph both render neutral in the local browser.
- [x] Do remains green, Avoid remains red, RTL remains yellow, and Accessibility tiles remain neutral.
- [x] RTL placement, marker geometry, and layout remain unchanged.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- [x] No repository files mention the visual reference by name.
