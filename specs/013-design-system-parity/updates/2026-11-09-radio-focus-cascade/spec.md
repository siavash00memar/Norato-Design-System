# Specification — Radio focus cascade

## Acceptance contract

- When a Norato Radio control receives keyboard focus, the component's semantic 2px yellow focus ring is the rendered indicator.
- The fix is scoped to `.norato-radio-group`; it does not alter Checkbox, Range, other inputs, hover, selected, disabled or error styles.
- Focus remains keyboard-visible in RTL at the existing 48px-or-larger row target.
- The playground returns to its initial value and enabled/default state after browser review.

## Evidence that triggered this update

- The live page set `:focus-visible=true` and showed a yellow 1.6px outline in CSSOM, while the package's intended radio rule specifies `outline:0` and a 2px focus-ring box shadow.
- The app-wide `input[type=radio]:focus-visible` rule has greater specificity than the package's `.norato-radio__input:focus-visible` rule, so the package focus treatment is overridden.
