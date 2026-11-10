# Checklist — OTP visual capsule and target

- [x] Browser screenshot shows capsule-shaped cells with one visible Stroke; CSS draws the visual at the 36px token within 48/52/56/60px hit-target shells. All four shell dimensions and the 36px visual height are now measured in the live DOM.
- [x] Browser verified neutral default, red error, yellow focused cell overriding error, neutral/muted Error+Disabled, and green success with yellow focus. Hover, loading and readonly Stroke states remain unverified.
- [x] Live playground emitted 4/5/6 fields; sequential entry and 6-digit paste populated cells and advanced focus; Backspace cleared a digit and moved to the previous empty cell; ArrowLeft moved to the previous input; native disabled was exposed for all six cells.
- [x] Live OTP layout at explicit 390px and 320px browser widths: six medium cells fit one row at 390px; at 320px all four sizes wrap without horizontal overflow (Small 5+1; Medium, Large and XLarge 4+2). XLarge wraps 5+1 at 390px. At 320px the document scroll width is 305px; at 390px it is 375px.
- [x] DOM geometry at 320px confirms interactive shells of 48×48/52×52/56×56/60×60px for Small/Medium/Large/XLarge and a fixed 36px visual capsule for every size. The numeric OTP order is LTR (digit 1 at the physical left); the label and page remain RTL.
- [x] Source CSS uses `--norato-border-thin: 1px`; CSSOM confirms the OTP border declaration uses that token. The browser reports 0.8px for OTP, the preview frame, and Button playground controls alike at DPR 1.25; 0.8×1.25=1 device pixel. This is consistent with shared browser/render scaling, not an OTP-only override, so no component-specific width was added.
- [ ] Pixel-level sampling of the rendered Stroke in a stable desktop browser and independent screen-reader review remain open.
- [x] At 320px, the Success state renders green capsules and preserves the focused cell's yellow Stroke. Reference contract lists the same 4/5/6 lengths, four sizes, and Default/Active/Error/Success/Disabled states; its Parts section does not expose a live OTP specimen, so this is a responsive contract review rather than a pixel-matched OTP screenshot comparison.
- [ ] Hover/loading/read-only interaction, inert OTP gallery recapture, pixel-matched OTP reference evidence, and independent screen-reader review remain open.
- [x] Token, catalog, Vue typecheck, production build and `git diff --check` pass after removal of the final legacy selectors.
- [x] Commit `73fdcc5` is on `origin/master`; remote SHA verified as `73fdcc5d305b3bf52ed1331b1219dad000511a82`.
- [ ] Independent screen-reader review remains open.
