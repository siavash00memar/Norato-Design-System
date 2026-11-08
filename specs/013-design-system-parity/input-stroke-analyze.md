# Input Stroke — Analyze

The page-wide visual rule draws a 36px capsule with a pseudo-element inside a 48px target. The legacy `.norato-input-field__control` also retained its own 1px border, creating two adjacent lines; core CSS kept that border neutral on hover. Removing the shell border leaves one visible stroke, then the capsule pseudo-element can turn Norato yellow on hover. Existing default and focus colors remain token based.
