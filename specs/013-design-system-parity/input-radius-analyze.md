# Input Radius — Analyze

## Evidence before implementation

- The user's latest screenshot shows elongated form controls with fully rounded capsule ends.
- The previous 12px rule came from an earlier design reference comparison and conflicts with the user's current explicit shape instruction.
- Norato's `--norato-radius-pill` token resolves to 50px; CSS caps the rendered corner radius against the actual control dimensions.
- Apply the pill token to shared runtime field shells, OTP cells and their inert family/state gallery counterparts; leave unrelated components unchanged.

## Gate

The latest screenshot is the visual authority for this correction; no API decision blocks implementation.
