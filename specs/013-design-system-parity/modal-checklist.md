# Modal — Definition of Done

## Visual parity

- [x] Page follows the Button structure: inert specimen, live playground, copyable Vue example and documented contract.
- [x] Compared local and reference desktop captures in the same browser window. Both show a centered destructive confirmation in the dotted frame; the local frame is narrower and shorter because of the documentation layout.
- [x] Default playground confirmation uses the destructive tone and Norato palette; its neutral cancel and danger action retain RTL order.
- [x] Browser measured the dialog at all three sizes and four tones on desktop: small 320px, medium 480px and large 640px; all 12 combinations kept a natural 256px content height. At 390px and 320px viewports, the dialog stayed within the viewport (320px and 288px wide) with no horizontal document overflow.
- [ ] Finish hover and full visual-state review for every action and nested field. Verified so far: 2px yellow keyboard ring on Dialog confirm; disabled confirm; busy actions; and invalid form field with associated error text.

## Behavior and accessibility

- [x] Form opens, accepts Persian text, submits, closes on success and restores focus to its trigger.
- [x] Dialog closes with Escape and restores focus. Busy state disables actions and prevents Escape dismissal until the busy interval ends.
- [x] Default Escape and outside-click dismiss the dialog. With `dismissible=false`, Escape and outside click leave it open; Cancel remains operable and closes it.
- [x] Public Modal close button works, has a 48×48px target, closes the dialog and restores focus to the launch trigger.
- [x] Cancel and confirm emit their respective outcomes and close; both action buttons become disabled while busy, the dialog exposes `aria-busy="true"`, and the playground reports busy completion. Busy state prevents Escape dismissal.
- [x] Browser accessibility tree exposes the confirmation as a named `alertdialog` and the form as a named `dialog`, each with its title and description references resolving to live elements.
- [x] Disabled confirmation remains open and cannot emit confirm. Tab and Shift+Tab wrap between Dialog actions; keyboard focus on the confirm button renders the yellow 2px ring. LTR direction propagates to the form field. At 320×640, the 288px dialog stays inside the viewport and its body scrolls 758px of content within 396px. Empty required form state exposes `aria-invalid=true` and an associated error; valid input clears the error and submits.
- [ ] Controlled/uncontrolled `open` updates and independent screen-reader review remain open.
- [x] Reduced-motion browser emulation at 390×844: Chromium reported `prefers-reduced-motion: reduce`; opening the live Dialog produced a 320px-wide RTL `alertdialog` with no horizontal document overflow. Computed dialog and overlay styles both reported `transition: none` and `animation-name: none`; Cancel closed the dialog. The browser's inert animation duration was `1e-05s`, but no animation was active. The temporary browser target was closed after the check.
## Technical and delivery gates

- [x] `pnpm check:tokens` and `pnpm check:catalog` pass; catalog reports 49 unique routes/contracts.
- [x] Vue typecheck and production build pass; build retains the existing JavaScript chunk advisory.
- [x] Repository scan for prohibited reference-brand text reports no matches.
- [x] `git diff --check` passes; latest browser findings and the updated checklist are included in the current commit checkpoint.

Do not mark the Modal family complete until every required check above is closed or explicitly accepted as a documented limitation.
