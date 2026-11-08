# Progress — Clarify

- Visual source is the user-approved design reference `design reference observed 2026-11-08: Linear and Circular; Small/Medium/Large; Default/Success/Warning/Danger; values 0/25/50/75/100.
- design reference defines linear heights 4/8/12px, percentage within circular Medium/Large only, right-to-left linear fill and 12 o'clock circular start.
- No material decision remains. Implement one `NoratoProgress` adapter with `variant="linear|circular"`, `size`, `tone`, `value`, optional label and id.
- The circular `Small` omits its center label; Medium/Large show the localized percentage. Norato default fill is yellow, status tones use semantic green/amber/red.
- Use Reka ProgressRoot for semantic progressbar values; visual SVG/stroke is custom because Reka supplies state semantics, not circular geometry.
