# Tooltip — Checklist / Definition of Done

- [x] Required eight-stage workflow recorded in exact order.
- [x] Reka API, trigger description, keyboard focus opening, Escape dismissal, focus ring, and delayed pointer open/close verified; a shared `NoratoTooltipProvider` and two-trigger timing fixture are implemented.
- [x] API/export/catalog/specimen/playground/usage/contract align; page matches Button structure.
- [x] Legacy `.sample-tooltip` selectors are removed; recurring conflicts are logged.
- [x] Historical 1265×720 comparison recorded an undersized frame; the 2026-11-10 matched-viewport follow-up below supersedes that measurement.
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

## Tooltip desktop frame width follow-up — 2026-11-10

- [x] Fresh matched 1265×720 browser render measured the reference Tooltip stage at 636×300px and Norato at 631.98×300px before correction.
- [x] A global shell-width increase was rejected after it made Input 4px and Select 2px wider than their recorded references. That change was reverted; the 4px semantic-token extension is now scoped directly to the Tooltip specimen frame.
- [x] Fresh isolated Chrome DOM measurement after the async specimen settles: at a 1249×569 CSS viewport, Tooltip is 635.984×300px. Button, Input and Select captured in the same viewport measure 631.984×300px, 635.984×300px and 633.984×300px respectively; only Tooltip gets the 4px scoped extension. The 1265px window's initial screenshot showed the loading fallback (~632px), which explains the earlier inconclusive capture.
- [x] Re-measured final Tooltip frame geometry and confirmed the Tooltip-only scope leaves Button/Input/Select on their own frame rules in the same viewport.
- [x] The frame remains centered, with the same rounded dotted glass surface, RTL content, and centered tooltip/trigger composition.
- [x] Fresh mobile DOM captures after async settlement: at 390×844 the preview is 358×431.09px and the sample frame is 358×300px; at 320×844 they are 288×431.09px and 288×300px. Both document client/scroll widths equal the viewport (390/390 and 320/320), so there is no horizontal overflow and the stage retains its 300px height.
- [ ] Independent screen-reader review remains open; Tooltip DoD stays open.
