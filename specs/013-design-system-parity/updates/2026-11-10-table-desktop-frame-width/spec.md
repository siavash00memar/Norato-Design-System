# Specify — Table desktop frame width

## Observed mismatch

At 1536×703, the local frame measured 631.98×345px against the reference's 636×345.25px. The local static table itself measured 562×258.50px against 561.60×258.39px, within 1px. Prior documentation incorrectly described the frame width as within 1px.

## Acceptance contract

- Expand only the desktop inert Table frame by one existing 4px spacing token, capped at the shared frame width.
- Keep the 390px and 320px layouts, the inner table, 48px rows, RTL and live adapter unchanged.
- Directly remeasure the changed frame in the browser before closing this follow-up; preserve the open visual matrix and independent screen-reader DoD.
