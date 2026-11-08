# Modal — Definition of Done

## Visual parity

- [x] Page follows the Button structure: inert specimen, live playground, copyable Vue example and documented contract.
- [x] Compared local and reference desktop captures in the same browser window. Both show a centered destructive confirmation in the dotted frame; the local frame is narrower and shorter because of the documentation layout.
- [x] Default playground confirmation uses the destructive tone and Norato palette; its neutral cancel and danger action retain RTL order.
- [ ] Compare all three sizes and four tones at matched desktop and mobile widths; verify 390px and 320px without horizontal overflow or stretched content.
- [ ] Review hover, focus, disabled, busy and validation appearances for all actions and nested fields.

## Behavior and accessibility

- [x] Form opens, accepts Persian text, submits, closes on success and restores focus to its trigger.
- [x] Dialog closes with Escape and restores focus. Busy state disables actions and prevents Escape dismissal until the busy interval ends.
- [ ] Verify outside-click dismissal and `dismissible=false` for Escape and outside click; verify the public close button remains operable when intended.
- [ ] Verify all size/tone combinations, cancel and confirm events, disabled confirmation, busy completion, and controlled/uncontrolled `open` updates.
- [ ] Verify `dialog`/`alertdialog` role and name/description in the browser accessibility tree; conduct an independent screen-reader review and keyboard-only pass.
- [ ] Verify LTR layout, focus order, reduced motion and viewport-bounded scrolling.

## Technical and delivery gates

- [ ] Token and catalog checks pass.
- [ ] Vue typecheck and production build pass.
- [ ] Repository scan has no prohibited reference-brand text.
- [ ] `git diff --check` passes; commit and push all changes.

Do not mark the Modal family complete until every required check above is closed or explicitly accepted as a documented limitation.
