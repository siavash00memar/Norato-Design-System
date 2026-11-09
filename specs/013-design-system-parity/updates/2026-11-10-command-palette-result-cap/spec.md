# Specification — Command Palette result cap verification

## Question

The contract states that each group may display at most eight rows. Verify this when a group receives more than eight matching items, and confirm separate groups retain their own independent cap.

## Acceptance

- A group with more than eight matching items renders exactly eight option rows.
- A second group with one matching item still renders its own one row.
- Verification uses the live browser render; temporary fixture data is removed afterward.
