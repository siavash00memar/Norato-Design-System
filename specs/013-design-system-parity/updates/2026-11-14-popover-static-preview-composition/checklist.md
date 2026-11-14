# Checklist — Popover static preview composition

- [x] At the available 484×900 local browser view, the static preview shows a centered panel only, with no trigger beneath it.
- [x] Arrow attaches to panel top and points upward.
- [x] Panel uses a compact title and inset link row with a decorative SVG copy icon; sample text does not name the external brand.
- [x] Panel remains undistorted, RTL, bounded, and inside the shared frame at the available local viewport.
- [x] Live Popover playground still exposes its trigger and default sample; opening then Escape-closing leaves it collapsed.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- [x] No repository files mention the visual reference by name.

