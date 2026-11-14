# Timeline preview update — Clarify

- Fresh 1265×713 reference frame: 636×327.5px at x=317. Existing local frame: 631.98×300px at x=309.02. The shared Button-like shell is 300px tall; this family needs its own content-driven specimen height.
- Fresh matched 390×844 reference: frame 327×311.5px at x=24. Existing local frame: 343×300px at x=16. Fresh 320×844 reference: 257×311.5px at x=24; surrounding reference docs scroll to 326px, so only the sample/page local overflow is constrained.
- At 390px the reference has four rail segments about 59.8px high; success/neutral dots are 10.8px and the active marker is 12.96px. Local default currently uses two 32px icon markers and has ~65.4px event rows.
- Keep the public API, order, event types and caller-selected icon/avatar markers unchanged. Apply the measured dot and row geometry to the shared adapter as well, so its live 26-case matrix does not revert to the short/stretched rows; the narrow-screen RTL rail and dot shift together.
