# Range — acceptance specification

Source: `https://lemonui.ir/#range`, inspected in browser 2026-11-01; Norato API policy: Vue 3 controlled components and root AGENTS instructions.

## Acceptance contract

- Present a compact RTL range field with Persian label, current numeric value above the thumb, track/fill/thumb, and Persian min/max labels below.
- Minimum is on the physical right; the selected track fills from right to left.
- Support controlled single number and two-thumb range values, `small` and `medium`, disabled, and a related error message.
- Every thumb has a 48×48px minimum interactive target. The visible rail/thumb proportions remain compact; do not stretch a thumb or field vertically.
- Preserve native slider keyboard semantics and accessible names/current values. Use Norato semantic tokens and focus ring.
- Keep the page shell identical to Button: visual preview, accurate executable Vue example/playground, and nine meaningful contract sections with copy controls.
- Use an optional numeric input in exact-value scenarios; document that sliders alone are not appropriate for exact payment values.

## Source observations

- Lemon preview is one labeled value slider in a dotted-glass frame with a Default marker.
- Lemon documents 8 Range Input combinations (Single/Range × Small/Medium × Default/Disabled), 10 Slider Thumb combinations (Small/Medium × Default/Hover/Pressed/Disabled/Focus), 5 anatomy parts, and keyboard arrow changes.
- Lemon describes white thumb with dark ring and right-to-left fill. Norato will use its own colors, a 48px target, and focus tokens.

## Unknowns

- None requiring user input. Use number for single-value model and an ordered two-number tuple for range model; min/max/step are explicit props.
