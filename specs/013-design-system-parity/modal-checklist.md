# Modal — Definition of Done

## Visual parity

- [x] Page follows the Button structure: inert specimen, live playground, copyable Vue example and documented contract.
- [x] Same-window 1265×713 comparison: outer frame 625×298px locally vs 629×344px in the reference; inner scene 445×252px vs 446×255px; dialog 297×196px vs 299×198px. Norato retains its shared ~300px frame height for consistency with other component specimens; the preview's inner geometry now closely matches and its dotted background shows through the softened scrim.
- [x] Default playground confirmation uses the destructive tone and Norato palette; its neutral cancel and danger action retain RTL order.
- [x] Browser measured the dialog at all three sizes and four tones on desktop: small 320px, medium 480px and large 640px; all 12 combinations kept a natural 256px content height. At 390px and 320px viewports, the dialog stayed within the viewport (320px and 288px wide) with no horizontal document overflow.
- [x] Desktop hover/full visual-state pass at matched 1280×720: Dialog cancel/confirm, Form cancel/create/close, and the nested project-name field were reviewed. Interactive actions show the expected Norato yellow/neutral hover surfaces without activation or layout movement; the close action keeps a 48×48px target. The input stays 36px high with 50px radius, `#e8e8e8` resting Stroke, and one 1px yellow hover/focus Stroke. The available reference exposes only the static confirmation specimen, so interactive Form hover parity is not directly comparable there.

## Behavior and accessibility

- [x] Form opens, accepts Persian text, submits, closes on success and restores focus to its trigger.
- [x] Dialog closes with Escape and restores focus. Busy state disables actions and prevents Escape dismissal until the busy interval ends.
- [x] Default Escape and outside-click dismiss the dialog. With `dismissible=false`, Escape and outside click leave it open; Cancel remains operable and closes it.
- [x] Public Modal close button works, has a 48×48px target, closes the dialog and restores focus to the launch trigger.
- [x] Cancel and confirm emit their respective outcomes and close; both action buttons become disabled while busy, the dialog exposes `aria-busy="true"`, and the playground reports busy completion. Busy state prevents Escape dismissal.
- [x] Browser accessibility tree exposes the confirmation as a named `alertdialog` and the form as a named `dialog`, each with its title and description references resolving to live elements.
- [x] Disabled confirmation remains open and cannot emit confirm. Tab and Shift+Tab wrap between Dialog actions; keyboard focus on the confirm button renders the yellow 2px ring. LTR direction propagates to the form field. At 320×640, the 288px dialog stays inside the viewport and its body scrolls 758px of content within 396px. Empty required form state exposes `aria-invalid=true` and an associated error; valid input clears the error and submits.
- [ ] Controlled/uncontrolled `open` updates and independent screen-reader review remain open. Browser accessibility-tree inspection is not an independent screen-reader review.
- [x] Reduced-motion browser emulation at 390×844: Chromium reported `prefers-reduced-motion: reduce`; opening the live Dialog produced a 320px-wide RTL `alertdialog` with no horizontal document overflow. Computed dialog and overlay styles both reported `transition: none` and `animation-name: none`; Cancel closed the dialog. The browser's inert animation duration was `1e-05s`, but no animation was active. The temporary browser target was closed after the check.
## Technical and delivery gates

- [x] `pnpm check:tokens` and `pnpm check:catalog` pass; catalog reports 49 unique routes/contracts.
- [x] Vue typecheck and production build pass; build retains the existing JavaScript chunk advisory.
- [x] Repository scan for prohibited reference-brand text reports no matches.
- [x] `git diff --check` passes; latest browser findings and the updated checklist are included in the current commit checkpoint.

Do not mark the Modal family complete until every required check above is closed or explicitly accepted as a documented limitation.
