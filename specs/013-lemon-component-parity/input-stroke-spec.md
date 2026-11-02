# Input Stroke — Specification

## Acceptance contract
- Runtime text, password, phone, textarea, number, amount, search, and OTP controls use a 1px --norato-color-border-default stroke (#e8e8e8) when idle or hovered.
- Keyboard focus uses only a 1px --norato-color-brand-yellow stroke; no black/blue outline or glow shadow.
- Idle error/success retain semantic status color; while focused, yellow border takes precedence and the message/icon keeps communicating status. No unrelated component changes.
- Static Input specimens match runtime styling.
