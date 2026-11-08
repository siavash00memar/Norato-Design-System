# Chat — Definition of Done

**Status:** Implemented; final DoD remains open.

## Specification coverage

- [x] Six runtime Vue exports: chat shell, message, header, date divider, typing indicator and composer.
- [x] Button-style page: inert preview, interactive Vue playground/copyable code, then all nine contract sections.
- [x] 10 bubble combinations in the API (5 types × 2 senders), plus 6 documented part states.
- [x] Incoming stays at the RTL right, outgoing at the left; outgoing accent uses Norato yellow.
- [x] Consecutive same-sender messages group more tightly; different senders keep separation.
- [x] Image geometry preserves 16:9; bubble width is capped; disabled/focus states and 48px targets are tokenized.
- [x] Composer accepts Enter to send, Shift+Enter for a newline, emits file selections, and labels the display-only recording state accurately.
- [x] No reference brand text in added project documentation.

## Review evidence (2026-11-08)

- [x] Reference and local pages reviewed at the matched narrow browser viewport. Header, date, conversation flow and composer hierarchy align; colors are Norato yellow/neutral.
- [x] Browser accessibility tree confirms named chat region/log, sender/time labels, named controls and selectable message variants.
- [x] Typed a message and pressed Enter; the outgoing message appeared, draft cleared and composer returned to default.
- [x] Recording toggle enters display-only state, disables text entry and exposes the stop label; helper copy states it is not real audio recording.
- [x] Message type selector changed the active specimen to image and announced its alt text.
- [ ] Review all 10 sender × message-type visuals and the six part states.
- [ ] Test 320px and 390px mobile, matched desktop and any overflow/stretch.
- [ ] Exercise file chooser/attach event, LTR, disabled form, send button, Shift+Enter, empty state and keyboard focus loop.
- [ ] Independent screen-reader verification.
- [x] Final `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, `git diff --check`, and repository no-reference-text scan passed after edits. Build warns that the JS chunk is above 500KB.

**DoD decision:** Keep checklist open until remaining breakpoint, matrix, interaction and independent assistive-technology reviews pass.
