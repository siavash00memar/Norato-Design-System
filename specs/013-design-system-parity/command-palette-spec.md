# Command Palette — Specify

Implement `NoratoCommandPalette`, a controlled Vue 3 command/search dialog and a Button-structured documentation page.

## Contract

- Props: stable `id`, grouped `groups`, optional accessible `label`, controlled `open`, controlled `query`, `loading`, `dir`, and a configurable global shortcut (`'k'` by default or `false`).
- `NoratoCommandGroup`: stable id, Persian/RTL title and command items. Enforce at most eight enabled/disabled results per group in the rendered surface.
- `NoratoCommandItem`: stable id, label, optional description, search keywords, Vue icon component, LTR shortcut, kind (`command`, `navigation`, `recent`) and `disabled`.
- Emits: `update:open`, `update:query`, and `select(item)` only for enabled results.
- Search normalizes Persian/Arabic yeh and kaf variants, matches labels/keywords/descriptions, preserves group order and removes empty groups.
- Empty query shows suggested/recent groups; query with no matches shows empty state; `loading` shows a busy state without replacing the search field.
- ArrowUp/ArrowDown, Home/End, Enter and Escape work without moving focus out of search. Disabled items are skipped. Dialog closes on Escape/outside; focus returns to the opener.

## Visual acceptance

- design reference default specimen: 600px panel, approximately 15vh from the top, blurred overlay, search row, suggested group, two compact commands and keyboard-hint footer.
- Norato uses bounded `min(600px, viewport - 32px)` geometry, semantic glass/elevation, yellow active row/focus, RTL icons right and LTR shortcut badges left; responsive width never overflows.
- Under `prefers-reduced-motion: reduce`, disable the loading spinner animation entirely while preserving the static yellow spinner ring, visible/live Loading status, and `aria-busy`.
- Inert preview is not interactive. Playground is separate, runs the global shortcut and can exercise results/loading/empty/disabled.
- Page sections and ordering match Button; all geometry uses existing semantic tokens or newly named tokens.
