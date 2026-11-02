# Input Stroke — Specification

## Acceptance contract
- Runtime text, password, phone, textarea, number, amount, search, and OTP controls use a single 1px --norato-color-border-default stroke (#e8e8e8) at rest.
- Enabled controls change their visible stroke to 1px --norato-color-brand-yellow on pointer hover; no duplicate shell stroke is visible.
- Keyboard focus uses only a 1px --norato-color-brand-yellow stroke; no black/blue outline or glow shadow.
- Idle error/success retain semantic status color; while focused, yellow border takes precedence and the message/icon keeps communicating status. No unrelated component changes.
- Generic NoratoField and Textarea hover strokes also use Norato yellow; static Input specimens match runtime styling.
