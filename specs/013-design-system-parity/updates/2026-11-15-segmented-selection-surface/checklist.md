# Checklist — Segmented selected surface geometry

- [x] Audit and supersede the old selected full-height background rule; no duplicate selector was layered.
- [x] Keep the full 48px/56px interaction target; visually inset the selected capsule by 8px at both block edges.
- [x] Verify selected Glass and Contrast, focus ring and disabled priority in both styles. Reduced motion is preserved by disabling the pseudo-surface transition in the existing media query.
- [x] Verify RTL order and controlled value/key behavior (ArrowLeft moves focus; Space selects and updates status/snippet).
- [x] Compare same-viewport local/reference desktop renders; prior mobile widths and overflow evidence exist, but post-change mobile state screenshots remain open.
- [x] Update component contract, Figma rule, error log and request-validation record.
- [ ] Run token/catalog checks, Vue typecheck/build and `git diff --check`.
- [ ] Leave independent screen-reader review open unless actually performed.
