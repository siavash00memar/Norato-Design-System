# Specification — Segmented static specimen capsule

## Evidence

At 390×844, the local and reference specimen frames both measure 300px tall and approximately 327–328px wide. The reference selected capsule is approximately 82×28px; the inert Norato specimen currently paints its selected capsule across an 86.7×48px target. The live adapter already separates its selected surface from its minimum-size target.

## Acceptance contract

- The static specimen and live adapter use the same compact selected visual surface, with measured reference corner radius and inset geometry.
- Preserve at least 48px target height, RTL order, existing track/frame geometry, label placement, white raised Glass surface, and Norato semantic tokens.
- Do not change the public API, selected state, disabled priority, or keyboard behavior.
- Verify the actual local browser render at desktop and narrow widths; confirm no frame or document overflow and that the full target remains 48px.
