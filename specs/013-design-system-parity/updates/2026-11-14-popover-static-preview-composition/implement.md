# Implement — Popover static preview composition

The inert specimen in `ComponentSpecimen.vue` now contains only the share panel; the visible trigger and anchor wrapper were removed. `popover-specimen.css` now fills the shared frame, centers the panel, draws the arrow at its top edge, and presents a compact inset link row with a decorative SVG copy icon. The copy action is a small inline SVG marked decorative, and the sample uses a Norato-owned URL; no reference-brand text was added.

Fresh local browser review at the available 484×900 viewport confirms the centered RTL panel, upward arrow, Default marker at the frame's upper-right, and absence of a visible trigger. The live playground still exposes its trigger; it opened and Escape closed it, leaving the trigger collapsed. No clipping or distortion was visible in this viewport.

Exact post-change 390×844 and 320×640 frame/panel measurements were not available in this browser session and remain open. Independent screen-reader review also remains part of the parent Popover DoD. `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts/exports), `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build succeeds with the existing 454.48KB main JS chunk advisory. A repository scan finds no occurrences of the prohibited reference-brand name.
