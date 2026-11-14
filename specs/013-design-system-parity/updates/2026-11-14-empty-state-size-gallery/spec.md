# Empty State Sizes gallery — Specification

## Request

Align the Empty State Sizes section with the live reference composition and remove its blue generic size circles.

## Acceptance

- Render three labeled samples: Small, Medium, Large.
- Match the reference sample silhouette at 64×36px for each: compact rounded rectangle, not a circle. These are documentation markers; the live Empty State Visual API remains 40/48/64px.
- Arrange English labels left-to-right as Small, Medium, Large inside this inert scale; keep the overall documentation page and live adapter RTL-first.
- Place the samples in a bounded, dotted documentation stage with Norato neutral fill and a restrained yellow tint. No blue color is used in this family-specific gallery.
- At narrow mobile width, wrap the last sample into a centered second row as the reference does at 320px; do not shrink the 64×36px samples.
- In States, do not draw the generic blue pill/dot as a fabricated component state. Show a concise inert note that the component has no independent interaction/data state; keep visual tone described as a visual-only property.
- Across Variants, Anatomy/Parts, Usage, Accessibility, and Tokens, use Norato neutral/yellow styling for descriptive markers instead of generic informational-blue defaults. Preserve semantic error/status colors where those meanings are explicitly shown.
- Preserve RTL, responsive fit at 390px/320px, and the existing button-style page section order.
- Do not change runtime component behavior, actions, or public API.
