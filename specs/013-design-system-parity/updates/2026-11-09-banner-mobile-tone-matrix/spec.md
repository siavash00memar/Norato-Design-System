# Specify — Banner mobile tone matrix

## Problem
The family checklist covers six desktop tones but only the Neutral mobile tone. Five mobile tone states and exact document-width evidence remain open.

## Acceptance contract
- Inspect `info`, `success`, `warning`, `danger`, `neutral` and `inverse` using the Mobile layout at 390px and 320px.
- Record role, tone, rendered content/action/close geometry, RTL placement and document overflow for each state.
- Compare the mobile composition to the supplied design reference while retaining Norato colors.
- Fix any verified rendering defect without changing Banner API or minimum hit target.
- Keep Banner DoD open if any required check remains unverified.
