# Segmented Control Yellow Contrast — Plan

1. Audit the existing Segmented Control CSS, component contract, Figma rule and prior browser evidence for conflicting blue/white hover behavior.
2. Change the existing selected Contrast hover text token to Norato primary text; avoid new overrides and leave focus treatment unchanged.
3. Update component contract, Figma rule, error log and request-validation record with the resolved yellow/dark-text rule and browser evidence.
4. In the live Vue page, inspect selected Contrast at rest and hover, all sizes/item counts for geometry, RTL order, disabled behavior, keyboard/focus and responsive width; compare design reference and Norato at matching viewport where possible.
5. Run token/catalog checks, Vue typecheck/build and `git diff --check`; report any residual DoD item honestly.

## Gate
CSS audit found the conflicting selector `.norato-segmented[data-style="contrast"] .norato-segmented__item[data-state="on"]:hover:not(:disabled)`, which sets white text on the yellow selected surface. The planned edit targets this existing rule only.
