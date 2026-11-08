# Skeleton — Specify

## Scope
Build a Vue Skeleton family with four base shapes (Line, Circle, Rectangle, Pill) and eight presets (Text, Avatar Text, List Item, Card, Card Horizontal, Input, Table Row, Stat), each supporting Pulse and Shimmer: 24 visual combinations.

## Acceptance contract
- Provide separate `NoratoSkeleton` and `NoratoSkeletonPattern` exports with typed shape/effect and pattern/effect APIs.
- Preserve intrinsic, non-stretched geometry. Width/height overrides are optional and bounded by the host container; circle remains square.
- The authored `dir` must determine computed CSS direction, flex order, and the direction-specific shimmer rule; no inherited-direction override may mask it.
- Patterns remain inert and RTL-first, matching realistic content rather than rendering generic repeated blocks.
- Use Norato semantic neutral base/highlight tokens; do not copy design reference's default dark color.
- A single labeled loading region exposes `aria-busy="true"`; decorative skeleton blocks are hidden from assistive technology. The primitive itself is not focusable.
- Pulse and Shimmer share one effect per pattern. RTL Shimmer moves left-to-right; LTR mirrors it. Reduced-motion disables animation.
- Component page follows Button: inert 576×288 dotted specimen, separate executable playground and generated Vue usage, then Overview/Anatomy/Variants/Sizes/States/Parts/Usage/Accessibility/Tokens/DoD.
- DoD includes design reference/Norato visual comparison, 24 variants, RTL/LTR, accessible busy region, reduced motion, responsive geometry at 390/320, and technical gates.
