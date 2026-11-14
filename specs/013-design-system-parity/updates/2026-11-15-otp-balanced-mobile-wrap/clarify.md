# Clarify — OTP balanced mobile wrap

## Decision

No further product decision is needed. Keep the existing minimum 48px interaction target even though six cells cannot fit on one line at a 320px viewport. Preserve the existing natural 4+2 wrapping and center each resulting row.

## Rationale

The current two-row wrap avoids horizontal overflow and preserves target size; centering fixes the observed visual imbalance without changing OTP interaction or forcing a narrow, hard-to-use single row.
