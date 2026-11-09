# Analysis — Command Palette mobile specimen parity

- Same-viewport browser evidence confirms the reference frame changes from 342×318px at 390px to 272×341px at 320px; its panel changes from 337×246px to 261×271px. The frame width is consistently 16px less than Norato's current frame.
- The reference search row naturally wraps to 72px at 320px; its keyboard footer uses two grouped rows and measures 73px at both sizes; visual rows measure 43px.
- Norato's current frame uses 12px padding and an unused mobile width token, leaving a 358/288px frame; its footer has ungrouped flex items and stays 32px tall. The 320px search text is forced to one-line ellipsis.
- Responsive discrepancy is isolated to the inert specimen CSS/markup and semantic preview tokens. The executable dialog remains separately styled and already has 48px rows.
