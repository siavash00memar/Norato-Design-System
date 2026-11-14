# Specification — OTP required completion

## Problem

The adapter marks only its first native cell `required`. If a user enters that digit but leaves the rest empty, every native field is valid, so a containing form can accept an incomplete code.

## Requirement

When `required` is true, every cell in the configured OTP length must be non-empty for native form validation to pass. When `required` is false, no cell is natively required. Keep each cell independently labeled and preserve the component's existing visual and interaction behavior.

## Acceptance

- Required 4-, 5-, and 6-cell instances expose native `required` on every cell.
- A partly filled required code is invalid; the complete code is valid.
- Optional empty codes remain valid.
- Digit input, paste, arrow navigation, Backspace, focus, disabled/loading states, labels and status descriptions remain unchanged.
