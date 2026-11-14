# Clarify — OTP required completion

## Decision

No additional product decision is needed. Treat the segmented cells as one required code: each native digit input is required when the adapter's `required` prop is true.

## Evidence and rationale

The current public contract describes one controlled OTP code and exposes a shared `required` prop. A live browser inspection showed that only cell zero receives the native attribute; after entering only that digit, all six inputs reported valid. Applying the existing required contract to every digit preserves native form submission semantics with the smallest API change.
