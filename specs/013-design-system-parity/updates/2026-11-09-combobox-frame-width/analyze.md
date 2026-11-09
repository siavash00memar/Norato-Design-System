# Analyze — Combobox preview frame width

- The desktop frame uses `inline-size: min(100%, var(--norato-combobox-preview-frame-inline-size))`; at the measured page width, the parent column limits the frame before its 640px token cap.
- The later mobile override clamps to available viewport width and the existing 328px token.
- Matched live DOM evidence at 1536×703 showed reference 636×300px and local 632.98×300px with the 1px allowance; the field preview token was not modified by the frame selector.
- Changing the allowance to semantic 4px `--norato-space-1` yields local 635.98×300px and preserves the 300px height. Exact field comparison and responsive follow-up remain to be recorded separately.
