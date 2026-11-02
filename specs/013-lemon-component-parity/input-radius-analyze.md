# Input Radius — Analyze

## Evidence before implementation

- Lemon's live `#input` preview field computes to a 12px corner radius.
- Norato's `--norato-radius-card` token is 12px; `--norato-radius-control` is 25px.
- Local browser inspection shows `.input-family-field` and `.input-state-field` at 25px. `.norato-input-field__control` is already 12px, while `.norato-otp__cell` is 25px.
- The narrow correction is to change the Input gallery/playground declarations and live OTP cell selector to `--norato-radius-card`; unrelated controls remain unchanged.

## Gate

Source audit is complete. The verified target is 12px; no unresolved visual/API decision blocks implementation.
