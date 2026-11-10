# Specify — OTP visual capsule and target

The live OTP adapter currently renders square 48/52/56/60px inputs with pill radius, making them appear circular. The approved shared Input rule requires a 36px visual capsule inside a 48px-or-larger interaction target.

## Acceptance

- Render each OTP capsule at 36px high while preserving 48/52/56/60px interactive target boxes.
- Apply the capsule's own 1px neutral resting Stroke; hover/focus yellow; preserve semantic error/success colors, disabled neutral priority, and no extra outline/shadow.
- Align the inert Input variant/state OTP samples with the same 36px capsule geometry.
- Preserve RTL group order, per-cell labels, disabled/readonly/required states, paste, navigation, clear/backspace, and 4/5/6 lengths.
- Verify desktop, 390px and 320px layouts, state strokes, target dimensions, behavior, and technical gates.
