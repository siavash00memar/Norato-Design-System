# Time Picker — implementation plan

1. Audit the Time Picker legacy specimen selectors and existing contract/page pipeline; remove or replace conflicting legacy selectors before styling.
2. Implement one Vue 3 controlled adapter for single/range values and all five picker modes, with 24-hour serialization, configurable steps, explicit slots, bounds, RTL/LTR separation, disabled/loading/error/required semantics, and anchored open/close behavior.
3. Replace the inert specimen with a compact design reference-shaped default and add a live playground with mode, variant, size, state and value controls plus synchronized copyable code.
4. Integrate package export, public usage, catalog readiness, primitive-map note, contract, Figma rules, and Button-parity page layout.
5. Compare live design reference and Norato at matched desktop/mobile viewports; measure frame/input/panel/target geometry and check overflow/stretching. Exercise each mode, pointer, keyboard, focus restoration, range ordering, slots, invalid/disabled/loading and accessibility tree.
6. Record exact browser evidence and remaining gaps in checklist, tasks, request-validation checklist and error log. Run token/catalog/typecheck/build/diff gates; keep maturity truthful until evidence is complete.

## 2026-11-07 accent correction

Audit the existing specimen selector and replace its blue selected-cell fill directly with the semantic brand-yellow token and dark foreground. The live adapter already uses this token; do not add a second override or change information/status colors. Verify the inert sample and live selected cells at the browser render, then rerun the repository gates.

Primitive evaluation: Reka is installed, but no time-picker primitive exists. A custom bounded Vue panel over native buttons/selectors is the smallest fit and avoids bringing in an unrelated dependency; Popover primitives may be used only if current runtime behavior supports the required positioning/focus contract.
