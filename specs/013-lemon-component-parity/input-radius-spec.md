# Input Radius — Specification

## Acceptance contract

- Input fields must use a compact rounded rectangle, not a capsule.
- Match Lemon's live Input field radius of 12px using Norato's semantic `--norato-radius-card` token.
- Apply consistently to the eight subtype specimens, state cards and OTP cells, and to actual OTP cells in the Vue adapter. Existing shared field shells already use this 12px token.
- Keep labels, values, focus/error/disabled treatments, dimensions, spacing, and behavior unchanged. Do not alter Select, Combobox, or unrelated controls.

## Evidence

The live Lemon Input preview field computes to `border-radius: 12px`; the Norato `--norato-radius-card` token is 12px. The current Norato subtype and state specimens compute to 25px from the generic control-radius token, causing the capsule appearance.
