# Notification Center — Definition of Done

Status: implementation checkpoint; DoD remains open until all required browser and technical checks below have evidence.

## Visual parity and page structure

- [x] Compare the selected design reference's Notification Center at the same 1920×900 browser viewport with Norato's top specimen. Frame estimates: reference 630×300px; local 580×288px due to the narrower docs column. Inner panel estimates are close: reference ~322×174px; local ~320×171px after spacing correction.
- [x] Confirm Button-equivalent dotted specimen frame and page section order: visual specimen, live Vue playground, then contract sections.
- [x] Reviewed specimen frame, panel, rows and avatar/icon proportions; changed avatars to 32px small-avatar token and aligned specimen panel height with reference. No stretched geometry is visible in desktop captures.
- [x] Compared Popover, Panel and Empty states; Norato yellow is used for unread/selected cues, with neutral user/system marks.
- [x] Review exact 390×844 and 320×640 browser layouts. At 390×844 the document is 375px wide; Popover is 320×382.2px at x=47,y=8, and Panel is 390×844px at x=0; no document overflow. At 320×640 the document is 305px wide; Popover is 296×401.4px at x=8,y=8, and Panel is 320×640px at x=0; no document overflow. In both Popover sizes the 483px content scrolls internally and the 48px bell has an 8px panel gap.

## Behavior

- [x] Verify bell opens Popover and Panel. Escape closes both and restores focus to the bell. Outside-click not separately exercised.
- [x] Verify controlled and uncontrolled notification models, `open` model, mark one read, mark all read, and event feedback in the playground.
- [x] Verify All/Mentions filter, removal of non-matching items, and empty result behavior.
- [x] Verify row selection closes the surface, marks the item read and emits its selection; action buttons emit the selected action without closing the Popover.
- [x] Verify disabled trigger cannot be opened. Empty state was verified through the playground toggle; initial default-empty API state is source-verified only.

## RTL, keyboard and accessibility

- [x] At 430×676, verify RTL and LTR Popover/Panel placement and text direction; RTL Panel bounds x=0..400px, LTR Panel x=29.6..429.6px, and every bell/filter/action/item target is at least 48px. The generated snippet follows the selected `dir`.
- [x] Keyboard-only Popover check on the live 1536×647 browser: Enter opens from the bell; Tab advances through Mark all → All → Mentions → notification item; Enter selects the item, closes the Popover and returns focus to the bell; Enter reopens and Escape closes with focus returned to the bell.
- [x] Keyboard-only Panel check on the live 1280×720 browser: Enter opens the panel and focuses its close button; Tab advances inside the dialog through Mark all → All → Mentions → notification item; Enter selects and closes with focus returned to the bell; reopening and Escape also closes and restores focus. Panel bounds are 400×720px at x=0 in RTL; document width remains 1280px.
- [x] Verify visible focus, disabled state, dialog/popover names, grouped list semantics and live unread status via browser accessibility tree.
- [ ] Record independent screen-reader review; source/DOM inspection alone does not close this item.

## Technical gates

- [x] `pnpm check:tokens`
- [x] `pnpm check:catalog`
- [x] Vue TypeScript check
- [x] Vue app production build
- [x] `git diff --check`
- [x] Repository scan confirms no forbidden reference-brand name has been introduced.

## Evidence and open findings

Record same-viewport dimensions, tested interactions, viewport sizes, console findings and exact remaining checks in `docs/request-validation-checklist.md` before closing this DoD.

## Popover collision fit and direction playground — 2026-11-09

- [x] Reproduced on the live 430×676 mobile browser: Popover height 480px, top -173.6px, bottom 306.4px while the bell was at y=314.2px; panel was clipped above the viewport.
- [x] Scoped `.norato-notification-center__content` max block size to the smaller of the Norato 480px cap, Reka Popper's available collision height, and the viewport inset. In the same edge case, the panel now measures 298.2px high at y=8..306.2px; Reka available height is 298.2px and internal scrollHeight exceeds clientHeight.
- [x] Notification rows remain 70.4px and all bell, filter, header and action controls remain at least 48px; document width is 414px at a 430px viewport with no horizontal overflow.
- [x] Added a live RTL/LTR playground selector, default RTL, and generated snippet sync. In LTR, Popover stays inside the viewport and panel aligns to inline-end; Escape closes Popover and restores focus to the bell.
- [x] Exact 390×844 and 320×640 layout/no-overflow review is recorded above. At 390×1034, real pointer activation with the bell at y=921..969 and navigation starting at y=977 opens Popover at x=47,y=433,w=320,h=480; it ends at y=913, leaving 8px to both bell and navigation. Content scrolls internally (483/478px) and document width remains 375px.
- [ ] At 390×1000 and initial page scroll, the fixed mobile navigation overlaps the lower 26px of the bell; review whether this is acceptable with the page's scroll-to-reveal behavior. Outside-click dismissal, independent screen-reader review and reduced-motion emulation also remain open; family DoD stays open.
