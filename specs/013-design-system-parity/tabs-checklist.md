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
- [x] Full 24-configuration style × size × orientation × global-disabled matrix exercised in the live browser. Every state retained four triggers, exactly one selected tab and one linked panel; enabled mode retained only the individually disabled tab, and global-disabled mode disabled all four. Controls and selection restored to defaults.
- [x] In Line/Medium/Horizontal, keyboard ArrowLeft moved through enabled tabs in RTL order and looped past the disabled Drafts tab; each move updated the linked panel. Screenshot confirms the focus indicator has a high-contrast outline and yellow halo, enabled hover uses a yellow-tinted surface, and the disabled tab stays muted without hover treatment.
- [ ] Exhaustive per-trigger hover/focus combinations and independent screen-reader review remain open. Existing narrow viewport checks are recorded in the 2026-11-02 checkpoint; fresh exact-size screenshots were not captured in this follow-up. Do not mark DoD complete.

## Tabs preview frame correction — 2026-11-10

- [x] The inert Tabs specimen previously inherited the generic 136px frame; it now uses the shared dotted Button-aligned frame and the existing 300px Tabs frame token.
- [x] Matched desktop reference/local frame measures 636×300px at 1920×959; local measurement is 636×300px after a component-scoped 4px semantic width extension.
- [x] At 390×844, reference and local frame measure 327×300px at x=24; at 320×844 they measure 257×300px at x=24. Local documents remain 375px/305px wide with no overflow, and HTML direction is RTL.
- [x] All three inert labels remain 48px high and RTL. At 320px the row's `overflow-y:hidden` removes the 1px vertical native-scrollbar defect; horizontal scrolling remains available, with no current horizontal content overflow.
- [ ] Interactive playground behavior was previously verified and its CSS/API were untouched; exhaustive per-trigger hover/focus and independent screen-reader review remain open. Tabs DoD remains open.
