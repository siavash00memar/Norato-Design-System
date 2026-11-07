# Stepper — Specify

Build a public Vue 3 progress adapter and a Button-structured documentation page. Support horizontal, vertical, compact and dots compositions; small, medium and large indicator scales; derived Upcoming/Current/Completed/Error states; optional step descriptions; and RTL/LTR direction.

The adapter receives a controlled ordered list of steps and a current step id. The host updates the current id after its own validation/business action. The Stepper itself never changes progress and never exposes navigable controls. An optional error step id marks the affected step and is accompanied by a visible, accessible error explanation. Lemon recommends 3–6 steps; the adapter must not truncate longer host data.

## Acceptance

- First logical step is on the right in RTL and on the left in LTR; vertical indicator is beside the text in logical inline-start.
- Completed steps use a checkmark, the current step gets a 2px Norato yellow ring, upcoming steps are subdued, and error has an explicit red marker plus explanation.
- Compact shows the current label and step count in a constrained single-line layout; Dots shows labeled accessible progress with visual indicators only.
- Horizontal/vertical layouts do not stretch circles or icons; mobile horizontal content scrolls internally if necessary and never expands document width.
- Root is a semantic ordered list with one `aria-current="step"`; changes announce “مرحلهٔ N از M” politely.
- Page has bounded inert preview, interactive playground, copyable snippet and Overview/Anatomy/Variants/Sizes/States/Parts/Usage/Accessibility/Tokens sections.
