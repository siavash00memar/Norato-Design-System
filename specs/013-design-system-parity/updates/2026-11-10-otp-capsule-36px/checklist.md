# Checklist — OTP visual capsule and target

- [x] Browser screenshot shows capsule-shaped cells with one visible Stroke; CSS draws the visual at the 36px token within 48/52/56/60px hit-target shells. Exact computed values for all four sizes remain unverified.
- [x] Browser verified neutral default, red error, yellow focused cell overriding error, and neutral/muted Error+Disabled. Hover, success, loading and readonly Stroke states remain unverified.
- [x] Live playground emitted 4/5/6 fields; sequential entry and 6-digit paste populated cells and advanced focus; Backspace cleared a digit and moved to the previous empty cell; ArrowLeft moved to the previous input; native disabled was exposed for all six cells.
- [x] Live OTP layout at explicit 390px and 320px browser widths: six medium cells fit one row at 390px; at 320px the six-cell row wraps without visible horizontal overflow (medium 4+2, small 5+1, XLarge 4+2). RTL order is retained, with digit 1 at the right edge. The focused capsule remains yellow.
- [x] At 320px, the Success state renders green capsules and preserves the focused cell's yellow Stroke. Reference contract lists the same 4/5/6 lengths, four sizes, and Default/Active/Error/Success/Disabled states; its Parts section does not expose a live OTP specimen, so this is a responsive contract review rather than a pixel-matched OTP screenshot comparison.
- [ ] Exact computed dimensions for all four sizes and the Large 320px arrangement, document scroll-width metrics, hover/loading/read-only interaction, inert OTP gallery recapture, and independent screen-reader review remain open.
- [x] Token, catalog, Vue typecheck, production build and `git diff --check` pass after removal of the final legacy selectors.
- [x] Commit `73fdcc5` is on `origin/master`; remote SHA verified as `73fdcc5d305b3bf52ed1331b1219dad000511a82`.
- [ ] Independent screen-reader review remains open.
