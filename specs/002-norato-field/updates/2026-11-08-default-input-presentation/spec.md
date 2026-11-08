# Default Input Presentation Specification

## User need

Input examples throughout the component pages should share a compact, consistent appearance and avoid explanatory copy below each field.

## Acceptance

1. Single-line Input capsules and OTP visual cells are 36px high; interactive hit areas remain at least 48px.
2. Input labels use Estedad Bold; Persian placeholders are RTL, Vazirmatn Light, 12px and `#a1a1a1`.
3. Default specimens/playgrounds do not show generic helper text below fields.
4. Error, loading and success messaging remains tied to actual states; `helperText` remains an opt-in API for host applications.
5. Textarea remains multiline. Phone and amount values retain LTR entry direction.

## Out of scope

- Removing the helper-text API or state messaging.
- Changing Input interaction, focus/hover Stroke, validation, or adapter behavior.
