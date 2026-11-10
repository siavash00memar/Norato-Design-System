# Checklist — Date Picker preview parity

- [x] Constitution, specification, clarification, and plan recorded in order.
- [x] Existing specimen class and legacy frame/backdrop selectors audited before editing.
- [x] At 1280×720, the stage measures 628×300px, matching the recorded reference frame.
- [x] At 390×844 and 320×844, the stages measure 327×300px and 257×300px respectively, with 24px inset and no horizontal overflow.
- [x] Shared dotted/warm-to-cool backdrop is visible in the local desktop browser; inner calendar remains legible and Norato-colored.
- [x] Exact desktop/mobile geometry is measured; document client/scroll widths are equal at 1265px, 375px and 305px.
- [x] Change is scoped to the inert specimen/CSS; the interactive adapter and seven-mode behavior code are unchanged.
- [x] Token/catalog/typecheck/build/diff gates pass.
- [x] Commit `2d67c15` pushed to `origin/master`.
