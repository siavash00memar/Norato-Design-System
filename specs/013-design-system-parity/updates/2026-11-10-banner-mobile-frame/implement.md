# Implement — Banner mobile preview frame

- Added `--norato-banner-preview-frame-mobile-inline-size: 342px` to the semantic layout tokens.
- Added a ≤599px rule scoped to `.sample-banner-preview`; it subtracts `--norato-space-4` from the available inline size, caps at the new token, and keeps the frame centered. The live `NoratoBanner` adapter is not selected by this rule.
- Updated Banner contract, Figma rule, DoD, family ledger, request validation, and ERR-205 with evidence and remaining work.
- Browser measurements after HMR: 390×844 → frame 342×300 at x=24, document 390/390; 320×844 → frame 272×300 at x=24, document 320/320. At desktop CSS viewport 1265×720, the frame remains 631.984×300px.
- Visual screenshots at both mobile widths show the reference-matched frame with Norato content/colors. Full 12-case screenshot matrix and independent screen-reader review remain open.
