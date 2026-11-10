# Specify — Table mobile frame width

## Problem

At 390×844, the reference inert Table frame measures 327px wide at x=24px, while Norato's is 343px wide at x=16px. At 320×844 the reference frame is 257px at x=24px and the Norato frame is 273px at x=16px. The local table itself remains bounded; the mismatch is the surrounding frame inset.

## Acceptance

- At 390×844 and 320×844 CSS viewport sizes, the inert Norato Table frame is 16px narrower than its parent and centered, yielding 327px/257px width at x=24px.
- At 1536×703, retain the desktop frame at approximately 636×345px; do not change the inner Table rendering.
- Norato's document remains bounded to its viewport, including at 320px; RTL remains active.
- Required project gates pass, and evidence is recorded without closing unrelated Table DoD items.
