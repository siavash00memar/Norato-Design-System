# Checklist — Carousel preview width

- [x] The inert composition uses the existing medium-track and gap tokens for its maximum width.
- [x] Same-viewport 1280×720 CSS comparison measures local 368px vs reference 367.2px (0.8px difference).
- [x] Three square cards remain 114.66px, indicators stay centered, heading remains RTL and arrow controls sit at the compact composition's left edge.
- [x] Fresh 390px/320px renders after the change show document client/scroll widths 375/375px and 305/305px; the composition contracts to 333px and 263px and stays inside the frame.
- [x] Live `NoratoCarousel` adapter source and behavior remain unchanged.
- [x] Update DoD, shared browser-validation record and error log if warranted.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass.
