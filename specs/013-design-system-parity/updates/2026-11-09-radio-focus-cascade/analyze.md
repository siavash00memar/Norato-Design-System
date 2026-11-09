# Analysis — Radio focus cascade

- The app-level `input[type=radio]:focus-visible` selector has specificity `(0,2,1)` and appears after base app rules.
- The package selector `.norato-radio__input:focus-visible` has specificity `(0,2,0)`; its later stylesheet order cannot beat the more specific app selector.
- Therefore the package's `outline:0` / 2px `box-shadow` focus ring was lost to the generic yellow outline rule. The initial `:focus-visible` state and 4px offset confirmed the generic rule won.
- A selector scoped as `.norato-radio-group .norato-radio__input:focus-visible` has greater specificity and does not affect native controls outside the Radio adapter. No API or state logic change is necessary.
- After the scoped selector change, a keyboard-focused live option computes `outline: 0`, `outline-offset: 0`, and a settled yellow `box-shadow` spread of exactly 2px, matching `--norato-border-focus`. The checked state, RTL direction and 48.8px row geometry remain intact.
- The design reference's Radio States card specifies a visible 2px ring on keyboard focus. Norato retains its own yellow focus color and applies the same documented ring thickness.
