# Clarify — Table image and progress playground cells

- **Visible control:** one Norato checkbox, «سلول‌های تصویر و پیشرفت», controls both additional columns together. It defaults to off so the documented baseline table remains unchanged.
- **Image source:** use a small inline SVG data URI authored for this local fixture; do not rely on an external network image. The row value is `{ src, alt }` with Persian alternative text that accurately describes the illustration.
- **Progress contract:** use numeric sample values within 0–100 and a column label that names the measure and the percent unit. Keep the existing adapter's `progressbar` role/value implementation unchanged.
- **Snippet:** when enabled, show both columns and one representative row with matching progress and image values; use the same inline fixture URI so the copied sample is self-contained.
- **Accessibility scope:** browser accessibility-tree evidence can verify exposed name, role, value and alt text. Spoken announcement quality still needs an independent screen reader and must stay open if one is unavailable.
- **Responsive scope:** retain the existing table's desktop column layout and narrow stacked-row layout. No additional special breakpoint or raw visual token is introduced.

No API, interaction, asset-hosting or palette decision remains unresolved.
