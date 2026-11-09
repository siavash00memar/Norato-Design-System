# Analyze — Radio disabled/error precedence

- The invalid group selector `.norato-radio-group[aria-invalid="true"] .norato-radio__input` has greater specificity than `.norato-radio__input:disabled`, so its red border wins when both states are active.
- A narrowly scoped selector `.norato-radio-group[aria-invalid="true"][data-disabled] .norato-radio__input` is more specific and can restore the neutral disabled border without weakening the global invalid rule.
- The component already exposes `aria-invalid` independently from `data-disabled`; selector order can change the visual priority without changing its semantic state or event behavior.
- Existing semantic tokens include `--norato-color-border-default`, `--norato-color-surface-subtle`, and `--norato-color-text-disabled`; no raw color is needed.
- The earlier focus fix targets `:focus-visible` only and must remain untouched.
