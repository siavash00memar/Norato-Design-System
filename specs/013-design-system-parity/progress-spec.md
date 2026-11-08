# Progress — Specify

## Scope
One Vue adapter with Linear and Circular variants. Each form has Small/Medium/Large × Default/Success/Warning/Danger × 0/25/50/75/100 = 60 states (120 total).

## Acceptance contract
- Preserve design reference's linear thicknesses 4/8/12px; circular sizes use three intrinsic diameters and show center percentage only in Medium/Large.
- Linear label and percentage share a top metadata row at opposite inline ends; a full-width track sits below, matching design reference's specimen. Logical fill grows right-to-left in RTL; circular begins at 12 o'clock. Track remains intrinsic in thickness and never stretches vertically.
- Use Reka ProgressRoot semantics and Norato status tokens; default fill uses Norato yellow, not design reference black/blue.
- `value` is finite and clamped to [0,100]; no indeterminate state is added because scope covers known-length tasks.
- `dir` is configurable as RTL/LTR and defaults to RTL; the linear indicator starts at logical inline-start. Circular geometry remains fixed in both directions.
- Display `role=progressbar`, `aria-valuenow`, `aria-valuemin/max`, and localized value text. Static previews are inert.
- Page follows Button structure: dotted 576×288 frame, inert visual specimen, executable playground, API sample, contract sections.
- DoD covers matched design reference/Norato screenshots, 120 configurations, RTL, accessible values, non-stretch geometry, 390/320 and technical gates.
