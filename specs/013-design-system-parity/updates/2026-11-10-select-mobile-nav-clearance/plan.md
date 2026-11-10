# Plan — Select mobile navigation clearance

1. Use a mobile-only max-height derived from Reka's available popover height minus the established mobile navigation/content clearance tokens.
2. Make the popup a three-row grid so search and optional multi-select actions retain intrinsic height while the option viewport can shrink and scroll.
3. Validate exact 320×844 and 390×844 popup bounds, final-option reachability, keyboard focus return, RTL, and desktop regression in the browser.
4. Run token/catalog/typecheck/build/diff gates and update Select/request/error records.

**Plan gate: passed.**
