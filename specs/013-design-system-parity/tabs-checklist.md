# Tabs — DoD
## Tabs — implementation checkpoint (2026-11-02)

- [x] design reference composition and variants reviewed; desktop 1280×720 and mobile 390×844 renders inspected.
- [x] Playground style/orientation, controlled panel, disabled tab, RTL keyboard navigation and focus ring exercised; Small/Medium/Large and vertical layout keep 48px targets.
- [x] Catalog, public API, snippet and contract agree; inert preview has no interactive descendants; 390px and 320px document widths do not overflow. At 320px, the horizontal tablist scrolls internally to preserve target sizes.
- [x] Token, catalog, typecheck, build and diff gates recorded below.
- [ ] Independent screen-reader review and exhaustive combination/state matrix remain open; maturity remains Adapted.

## Tabs — follow-up browser review (2026-11-09)

- [x] Local desktop browser: Soft + Large + Vertical rendered without visible tab stretching or clipping; the active surface is the Norato pale-yellow token. All four triggers and the selected panel remain present.
- [x] Global disabled on that combination disabled all four triggers, including the one already individually disabled; turning it off restored the individual disabled state.
- [x] With Vertical orientation restored, ArrowDown from “همه” selected “فعال” and updated its linked panel content. Preview controls and selection were restored to Line/Medium/Horizontal, enabled, “همه”.
- [x] Found and corrected a stale visual contract that described the active indicator as blue; current Line underline and Soft selected surface are yellow-based, as implemented.
- [ ] Full 24-configuration style × size × orientation × global-disabled matrix, exhaustive per-trigger state/focus/hover combinations, exact narrow viewport captures, and independent screen-reader review remain open. Do not mark DoD complete.
