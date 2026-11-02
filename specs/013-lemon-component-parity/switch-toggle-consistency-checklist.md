# Switch Toggle Consistency — DoD Checklist

- [x] Shared playground knob is 16×16px inside a 40×24px track; checked and unchecked states retain a 5px visible inset from the nearest physical edge in RTL (4px CSS inset plus 1px track border).
- [x] Knob is white in checked and unchecked states with no border, outline, or shadow; track retains its Norato yellow/neutral states.
- [x] Runtime adapter and inert Switch galleries use the same white, stroke-free knob contract.
- [x] Browser verified checked/unchecked styling, keyboard focus, Space toggling, RTL direction, and visible spacing. Focus ring remains on the control track for accessibility and does not belong to the knob.
- [ ] Narrow viewport overflow was not verified in this browser session.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass; production JS chunk advisory is recorded.
- [x] Contract, Figma rules, request validation, error log, family ledger and tasks match verified behavior; change pushed to GitHub as `89cf424`.
