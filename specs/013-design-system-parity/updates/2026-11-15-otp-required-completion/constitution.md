# Constitution — OTP required completion

## Scope

Correct native form validity for the existing segmented OTP component. Preserve its controlled API, 4/5/6 digit lengths, LTR digit order, paste and keyboard behavior, capsule visuals, 48px-or-larger targets, and RTL page semantics.

## Invariants

- Required OTP means the complete configured code is required.
- Retain real native form validation; do not rely on a visual star or caller-only validation.
- Keep Persian labels and accessible names, with the digit sequence in LTR.
- Do not add dependencies or unapproved behavior such as auto-submit.
- Follow the feature sequence and validate the actual browser render before handoff.
- This work is local only; do not publish to hosting unless separately requested.
