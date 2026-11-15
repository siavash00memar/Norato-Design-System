# Checklist — Segmented selected surface geometry

- [x] Audit and supersede the old selected full-height background rule; no duplicate selector was layered.
- [x] Keep the full 48px/56px interaction target; visually inset the selected capsule by 8px at both block edges.
- [x] Verify selected Glass and Contrast, focus ring and disabled priority in both styles. Reduced motion is preserved by disabling the pseudo-surface transition in the existing media query.
- [x] Verify RTL order and controlled value/key behavior (ArrowLeft moves focus; Space selects and updates status/snippet).
- [x] Compare same-viewport local/reference desktop renders; post-change mobile screenshots at 390×844 and 320×720 confirm the selected capsule and all three labels remain inside the specimen frame without horizontal clipping.
- [x] Update component contract, Figma rule, error log and request-validation record.
- [x] Run token check, Vue typecheck/build and `git diff --check`; commit verified work locally.
- [ ] Compare the full style × selected/disabled × size state set against the reference at mobile widths; only the default Glass/Medium/3-option state was captured post-change.
- [ ] Leave independent screen-reader review open unless actually performed.
