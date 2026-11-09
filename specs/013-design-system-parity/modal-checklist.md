# Modal — Definition of Done

## Visual parity

- [x] Page follows the Button structure: inert specimen, live playground, copyable Vue example and documented contract.
- [x] Compared local and reference desktop captures in the same browser window. Both show a centered destructive confirmation in the dotted frame; the local frame is narrower and shorter because of the documentation layout.
- [x] Default playground confirmation uses the destructive tone and Norato palette; its neutral cancel and danger action retain RTL order.
- [x] Browser measured the dialog at all three sizes and four tones on desktop: small 320px, medium 480px and large 640px; all 12 combinations kept a natural 256px content height. At 390px and 320px viewports, the dialog stayed within the viewport (320px and 288px wide) with no horizontal document overflow.
- [ ] Review hover, focus, disabled, busy and validation appearances for all actions and nested fields.

## Behavior and accessibility

- [x] Form opens, accepts Persian text, submits, closes on success and restores focus to its trigger.
- [x] Dialog closes with Escape and restores focus. Busy state disables actions and prevents Escape dismissal until the busy interval ends.
- [x] Default Escape and outside-click dismiss the dialog. With `dismissible=false`, Escape and outside click leave it open; Cancel remains operable and closes it.
- [x] Public Modal close button works, has a 48×48px target, closes the dialog and restores focus to the launch trigger.
- [x] Cancel and confirm emit their respective outcomes and close; both action buttons become disabled while busy, the dialog exposes `aria-busy="true"`, and the playground reports busy completion. Busy state prevents Escape dismissal.
- [x] Browser accessibility tree exposes the confirmation as a named `alertdialog` and the form as a named `dialog`, each with its title and description references resolving to live elements.
- [ ] Verify disabled confirmation, controlled/uncontrolled `open` updates, a complete keyboard-only focus loop, independent screen-reader review, LTR layout, reduced motion and viewport-bounded long-content scrolling.
- [ ] Verify LTR layout, focus order, reduced motion and viewport-bounded scrolling.

## Technical and delivery gates

- [x] `pnpm check:tokens` and `pnpm check:catalog` pass; catalog reports 49 unique routes/contracts.
- [x] Vue typecheck and production build pass; build retains the existing JavaScript chunk advisory.
- [x] Repository scan for prohibited reference-brand text reports no matches.
- [x] `git diff --check` passes; browser findings and this checklist are committed and pushed in the latest checkpoint.

Do not mark the Modal family complete until every required check above is closed or explicitly accepted as a documented limitation.
