# Tooltip — Checklist / Definition of Done

- [x] Required eight-stage workflow recorded in exact order.
- [x] Reka API, trigger description, keyboard focus opening, Escape dismissal, focus ring, and delayed pointer open/close verified; a shared `NoratoTooltipProvider` and two-trigger timing fixture are implemented.
- [x] API/export/catalog/specimen/playground/usage/contract align; page matches Button structure.
- [x] Legacy `.sample-tooltip` selectors are removed; recurring conflicts are logged.
- [x] At 1265×720, design reference (about 628×294px) and Norato (about 578×286px) frames were compared. Default dark/simple/top composition, dotted frame and RTL trigger/arrow align; frame widths differ and are recorded as a visual delta.
- [x] All 16 surface/layout/placement combinations rendered within viewport without stretch/clipping; RTL and arrow orientation verified. Rich Top naturally flips to Bottom when there is insufficient space.
- [x] Pointer hover opens the Tooltip without keyboard focus, then closes it after pointer exit; keyboard focus opens it, Escape closes it while retaining focus, and the 2px yellow outer ring is verified.
- [x] At 390px and 320px, no horizontal document overflow; all measured Tooltip bubbles and 48px targets remained in viewport. At 320px, Rich Right collision flips to Left and stays visible.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
- [x] Shared Reka skip-delay between sibling triggers verified: first opens delayed; rapid pointer traversal opens the sibling instantly; after the skip window expires, normal delay applies again.
- [ ] Independent screen-reader semantics review remains open; keep DoD open until evidence is recorded.

## Follow-up review (2026-11-09)

- [x] Disabled the playground's forced-open switch and verified delayed pointer behavior on the live trigger with no keyboard focus: after 100ms there was no live bubble; after a further 450ms the bubble appeared with `data-state="delayed-open"` at the requested top placement.
- [x] Moving from the live trigger to the labeled text field closed and removed the live bubble; the keyboard focus moved to the field. The static inert specimen remains separate from the live playground content.
- [x] The shared fixture is pointer-only. With no trigger focus, first opened as `delayed-open`; after moving from outside to the sibling during the skip interval, second opened as `instant-open`. With the pointer outside beyond the skip interval, second returned to `delayed-open`.
- [ ] Independent screen-reader announcement and reading-order review remains open.
