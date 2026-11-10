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
- [x] Same-viewport screenshots of all 10 local sender × message-type combinations reviewed; the reference's four static message examples were compared directly where available. Remaining six combinations have no corresponding reference states to match.
- [x] Live browser and accessibility-tree review of all 10 sender × message-type selections and all six part states.
- [x] Browser screenshot confirms the LTR selector reverses sender placement: incoming left, outgoing right. RTL is the default selector value.
- [x] Keyboard Tab from the chat header reaches the composer and then the playground direction control; focus leaves the non-modal widget without a trap.
- [x] Enter sends and clears a draft; Shift+Enter keeps the draft without sending.
- [x] Playground can hide only fixture messages and the typing indicator. With fixtures hidden, the initial timeline is empty; a sent user message appears immediately and stays visible, and reenabling fixtures shows both samples and the sent message. This keeps the empty state reviewable without losing playground-created messages.
- [x] Same-origin browser frames rendered at 320px and 390px. At 320px, the document is 305px wide, the chat shell is 273×513px and RTL is true; at 390px, the document is 375px wide, the shell is 343×478px and RTL is true. Both document scroll widths equal their client widths; no horizontal overflow was measured.
- [x] Static specimen now uses the shared Button-style dotted frame and Default marker. Matched desktop screenshot review confirms the reference's two-bubble composition; Norato yellow replaces the reference's dark outgoing fill as required by the palette rule. Inner bubbles are intrinsic, not stretched.
- [x] Static specimen reviewed at 320px and 390px. Frames are 273×300px and 343×300px; inner message composition is 263×127px and 333×127px. Incoming/outgoing bounds confirm right/left placement; computed direction is RTL and document client/scroll widths match.
- [ ] Direct reference screenshots for all ten sender × message-type combinations remain unavailable; the source reference exposes only four static message examples.
- [x] Actual browser file chooser event and file attachment were exercised: intercepted chooser opened in `selectSingle` mode, a file was selected through the browser DOM file input, a named file message appeared, and the input reset.
- [ ] Full playground vertical geometry comparison and independent screen-reader verification.
- [ ] Independent screen-reader verification.
- [x] Final `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, `git diff --check`, and repository no-reference-text scan passed after edits. Build warns that the JS chunk is above 500KB.

**DoD decision:** Keep checklist open until remaining breakpoint, matrix, interaction and independent assistive-technology reviews pass.

## Follow-up review (2026-11-09)

- [x] Live browser/accessibility-tree review covered all 10 sender × message-type selections (text, reply, image, file, voice); incoming remained on the RTL right and outgoing on the left, with named image, file and audio content. Screenshots were reviewed for representative variants; matched screenshots of every combination remain open.
- [x] Header, date divider, typing indicator, composer default/typing/recording and disabled-chat states were inspected in the live preview. Recording remains explicitly display-only and disables text entry.
- [x] Enter sent the draft and cleared the composer. Shift+Enter retained the draft and did not send it. The send button sent a non-empty draft and returned to disabled when empty.
- [x] The playground disabled-chat toggle disabled attachment and recording controls; reenabling restored them.
- [x] Same-origin browser frames rendered at 320px and 390px. At 320px, the document is 305px wide, the chat shell is 273×513px and RTL is true; at 390px, the document is 375px wide, the shell is 343×478px and RTL is true. Both document scroll widths equal their client widths; no horizontal overflow was measured.
- [ ] Exact reference captures for all ten sender × message-type combinations remain unavailable; the source has only four static message examples.
- [ ] Full mobile playground vertical comparison and independent screen-reader verification remain open.

## Sample toggle retention follow-up (2026-11-09)

- [x] Found that hiding sample messages also hid user-created messages because both were selected by the same conditional list.
- [x] The playground now conditionally includes only fixture messages and always appends user-created text/file messages.
- [x] Browser review at `#component-chat`: toggling fixtures off produced an empty timeline; sending a text message rendered it while fixtures were hidden; toggling fixtures on rendered the fixtures and retained message together. The composer cleared and returned to its default state after send.
- [x] Follow-up 2026-11-10 verified the intercepted native chooser event and attachment handler; see the fresh evidence below.
- [ ] Independent screen-reader review remains open.
- [x] Technical checks from the adjacent Carousel change pass: token/catalog checks, Vue typecheck, production build and `git diff --check`.

## Fresh visual and attachment evidence (2026-11-10)

- [x] Captured and visually reviewed all ten local sender × type bubbles at the same 1265×713 viewport. The saved contact sheet is `evidence/chat-10-variants-2026-11-10.png`; incoming/outgoing alignment, intrinsic bubble geometry, image ratio, file/voice layout and Norato yellow were inspected. The source reference displays only four static samples, so no direct reference captures exist for its other six combinations.
- [x] Mobile playground measured in same-origin browser frames: at 390×844, document 390/390px, stage 358×478.34px, RTL; at 320×844, document 320/320px, stage 288×495.13px, RTL. No horizontal page overflow.
- [x] Empty timeline reviewed at 390×844 after hiding fixture messages and typing indicator: zero message nodes, no date divider or typing indicator, RTL remains, stage is 358×360px and composer is 356×65px. Screenshot: `evidence/chat-empty-mobile-390-2026-11-10.png`.
- [x] Attach control opened a browser-intercepted `selectSingle` file chooser; selecting a local project document produced a named outgoing file message and reset the file input. Native operating-system chooser rendering itself was not visually observed.
- [ ] Independent screen-reader verification remains open; no screen-reader result is inferred from the browser accessibility tree.

**DoD decision:** Keep Chat open until independent screen-reader verification and any available direct reference comparison are complete. The reference does not provide six of the ten live states, so those cannot receive an exact reference screenshot match.
