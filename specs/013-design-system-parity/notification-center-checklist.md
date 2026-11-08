# Notification Center — Definition of Done

Status: implementation checkpoint; DoD remains open until all required browser and technical checks below have evidence.

## Visual parity and page structure

- [x] Compare the selected design reference's Notification Center at the same 1920×900 browser viewport with Norato's top specimen. Frame estimates: reference 630×300px; local 580×288px due to the narrower docs column. Inner panel estimates are close: reference ~322×174px; local ~320×171px after spacing correction.
- [x] Confirm Button-equivalent dotted specimen frame and page section order: visual specimen, live Vue playground, then contract sections.
- [x] Reviewed specimen frame, panel, rows and avatar/icon proportions; changed avatars to 32px small-avatar token and aligned specimen panel height with reference. No stretched geometry is visible in desktop captures.
- [x] Compared Popover, Panel and Empty states; Norato yellow is used for unread/selected cues, with neutral user/system marks.
- [ ] Review layout at 390px and 320px; verify document and panel have no unintended horizontal overflow.

## Behavior

- [x] Verify bell opens Popover and Panel. Escape closes both and restores focus to the bell. Outside-click not separately exercised.
- [x] Verify controlled and uncontrolled notification models, `open` model, mark one read, mark all read, and event feedback in the playground.
- [x] Verify All/Mentions filter, removal of non-matching items, and empty result behavior.
- [x] Verify row selection closes the surface, marks the item read and emits its selection; action buttons emit the selected action without closing the Popover.
- [x] Verify disabled trigger cannot be opened. Empty state was verified through the playground toggle; initial default-empty API state is source-verified only.

## RTL, keyboard and accessibility

- [ ] Verify RTL and LTR geometry, badge placement, text flow and 48px interaction targets.
- [ ] Verify keyboard-only open, navigation/activation, close, and focus return for both presentations; Escape close and focus return passed, keyboard-only open is not checked.
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
