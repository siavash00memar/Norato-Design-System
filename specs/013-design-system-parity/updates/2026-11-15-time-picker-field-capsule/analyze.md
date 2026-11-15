# Analyze — Time Picker field capsule

## Source findings

- `NoratoTimePicker.vue` currently places the readonly `<input>` directly in `.norato-time-picker__control`; its native interactive box is also its visible surface.
- The canonical `.norato-time-picker__input` rule gives that element a 48px minimum height, `--norato-radius-card`, and `--norato-color-border-strong`. XLarge raises the input to 56px. This conflicts with the user's 36px pill/neutral-stroke field rule.
- Hover/focus selectors for this input are absent. Error and disabled selectors directly change the input border, so they must move to the decorative wrapper when the visible stroke moves there.
- The control grid already reserves the 48px clock action. XLarge increases the action to 56px; keeping that larger target is compatible with the minimum-target rule.
- TimePicker has no dedicated field wrapper. A wrapper is required to separate the visible 36px capsule from the full-size readonly input target without changing its native label, readonly, required, ARIA, or keyboard semantics.

## Decision

Add a non-semantic wrapper with a centered, token-sized 36px `::before` capsule. Keep the native input absolutely/full-area interactive inside it at the existing 48px minimum (56px at XLarge). Replace, rather than stack on, all input stroke/radius/surface rules with wrapper state selectors and explicitly preserve disabled precedence.
