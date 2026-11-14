# Implement — Select state gallery parity

Added a Select-only projection for Default, Hover, Open, Filled, Error, Disabled, Read-only, Selected, and Focus. The selected/focus cases reuse Select Option source entries; duplicate Multi Select states are not copied into this section. Removed the repeated family caption and applied an 88px minimum card block size using existing Norato control/spacing tokens. The live playground, Parts contracts, and all non-Select galleries are unchanged.

Matched 1265×713 browser review confirms a 4/4/1 desktop layout with even card heights and RTL. A narrow mobile render confirms a single-column gallery without horizontal clipping. Browser accessibility tree exposes the nine states; the playground remains selected to Tehran.

Full per-state screenshot matrix and independent screen-reader review remain open.
