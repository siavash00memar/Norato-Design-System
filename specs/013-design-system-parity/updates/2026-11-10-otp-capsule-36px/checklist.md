# Checklist — OTP visual capsule and target

- [x] Browser screenshot shows capsule-shaped cells with one visible Stroke; CSS draws the visual at the 36px token within 48/52/56/60px hit-target shells. Exact computed values for all four sizes remain unverified.
- [x] Browser verified neutral default, red error, yellow focused cell overriding error, and neutral/muted Error+Disabled. Hover, success, loading and readonly Stroke states remain unverified.
- [x] Live playground emitted 4/5/6 fields; sequential entry and 6-digit paste populated cells and advanced focus; Backspace cleared a digit and moved to the previous empty cell; ArrowLeft moved to the previous input; native disabled was exposed for all six cells.
- [ ] Exact RTL group order at matched 390/320px viewports, no-overflow measurements, required/loading/readonly interaction, and inert OTP gallery re-capture remain open.
- [x] Token, catalog, Vue typecheck, production build and `git diff --check` pass after removal of the final legacy selectors.
- [ ] Commit and push are confirmed; record the remote SHA.
- [ ] Independent screen-reader review remains open.
