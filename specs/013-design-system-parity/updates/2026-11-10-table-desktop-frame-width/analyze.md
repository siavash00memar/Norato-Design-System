# Analyze — Table desktop frame width

- The shared Button-style frame already caps specimen width using the shared maximum token. Table overrides only its frame height, so its content column constrains the desktop frame to 631.98px.
- A 4px token-based inline-size extension brings the measured outer frame to the reference target while staying under the shared width cap.
- A `min-width:601px` media rule keeps the previously measured mobile frames unchanged. The table itself, inner 562px geometry, responsive column widths, and live adapter do not need edits.
- The browser integration is timing out on local route access; post-change geometry must remain unverified until a fresh browser recapture is available.
