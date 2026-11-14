# Progress Sizes Gallery — Clarify

- The available 1265×713 browser capture measures the reference Sizes stage at 636×134.125px. The current local gallery measures 631.984×339.984px because it renders three full-width description rows.
- At 390×844, the reference Sizes stage is 327×134.125px. At 320×844 it is 257×214.25px and wraps three 64px samples into a second centered row; the surrounding reference document itself is 326px wide against a 305px client width.
- The existing Progress contract already resolves the two variants, all six intrinsic measurements, Norato colors, and RTL behavior. No API or UX decision remains unresolved.
- Decision: preserve all six Progress samples by pairing Linear and Circular inside three Small/Medium/Large cards. Keep one row at desktop/390px; wrap to two cards plus one centered card at 320px. This mirrors the reference's size-card reflow while making the actual Progress dimensions visible.
