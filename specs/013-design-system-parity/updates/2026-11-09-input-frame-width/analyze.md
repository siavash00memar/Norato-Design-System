# Analyze — Input preview frame width

- The frame uses `inline-size: min(100%, var(--norato-input-preview-frame-inline-size))`; the measured local width is limited by the available parent width, not the 640px token cap.
- The mobile media rule replaces that width with `min(100%, var(--norato-input-preview-frame-mobile-inline-size))`, so changing the base rule can preserve responsive clamping.
- In the same browser, the initial 4px CSS allowance rendered about 4px wider than the reference; reducing the allowance to 2px made the local and reference frames appear equal in width while keeping their heights aligned at 300px.
- No other selector should receive this allowance. The mobile override prevents the desktop allowance below 600px; responsive browser behavior still needs a fresh check.
