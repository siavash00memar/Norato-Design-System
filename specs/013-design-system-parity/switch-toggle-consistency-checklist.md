# Switch Toggle Consistency — DoD Checklist

- [x] Shared playground knob is 16×16px inside a 40×24px track; checked and unchecked states retain a 5px visible inset from the nearest physical edge in RTL (4px CSS inset plus 1px track border).
- [x] Knob is white in checked and unchecked states with no border, outline, or shadow; checked track is yellow without gray stroke and unchecked track uses a light-gray surface.
- [x] Runtime adapter and inert Switch galleries use the same white, stroke-free knob contract.
- [x] Local browser: unchecked adapter track computes to `rgb(242, 242, 242)` fill with subtle `rgb(232, 232, 232)` boundary; checked track computes to Norato yellow `rgb(253, 193, 1)` for both fill and border, with a white knob. Both states retain 40×24px RTL track geometry.
- [x] Clicking the runtime Switch changed `data-state` from unchecked to checked; `aria-checked` changed false to true, preserving the separate track focus indicator contract.
- [ ] Narrow viewport overflow was not verified in this browser session.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass; production JS chunk advisory is recorded.
- [x] Contract, Figma rules, request validation and error log record the verified off/on styles.
