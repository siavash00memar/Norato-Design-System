# Implement — Shared implementation marker text color

The shared `.usage-is-implementation .usage-indicator` modifier now sets both a neutral surface and `--norato-color-text-secondary`. This prevents green success text inherited from the base “Do” marker.

A fresh local browser review after the change shows the Split Button Usage group with green Do, red Avoid, yellow RTL, and a neutral gray implementation icon. Chip shows neutral Accessibility tiles and yellow RTL markers; Empty State retains its green guidance markers and neutral Accessibility tiles. Screenshots were reviewed at the available 484×900 in-app viewport; this is a visual/state check, not a pixel-dimension measurement. No visible spacing, RTL, or marker-size change appeared.

`pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts/exports), `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` all pass. Build succeeds with the existing 454KB main JS chunk advisory.

The correction is cross-family documentation styling only; component DoDs and independent screen-reader reviews remain open as recorded in their family checklists.
