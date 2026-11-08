# Progress — Analyze

## Evidence inspected
- Lemon Progress live page (`https://lemonui.ir/#progress`) inspected 2026-11-08: two components, 120 variants total. Linear and Circular each have Size Small/Medium/Large, Tone Default/Success/Warning/Danger, Value 0/25/50/75/100.
- Lemon specifies Linear thickness 4/8/12; small Circular hides percentage, medium/large show it. Linear fills from right in RTL; Circle begins at 12 o'clock. Use progress only when duration/total is known; unknown length belongs to Spinner. Percentage can be alongside a bar. Default is black in Lemon; Norato will use brand yellow.
- At 1280×720, Lemon's actual specimen measures 636×300 CSS px; its metadata line is 302.4px wide at y=425.5 and its 8.6px track spans the full 302.4px below at y=458.9. Norato's initial implementation placed the track between the label and percentage in the same row, a visible structural mismatch. Update to metadata on top and full-width track below; preserve the user's Button-sized specimen frame.
- Installed Reka `ProgressRoot` owns progressbar role, min/max/now attributes, `aria-valuetext`, and normalized `data-state`; `ProgressIndicator` exposes `data-value`, `data-max`, `data-state`. Root supports a number, null or undefined and validates bounds. No external package is needed.
- Existing legacy `.sample-progress` styles only render one bar, use the global 48px control-height token as its rail, and have no adapter/playground or variant representation. Remove the old rules before applying component styles.
- Existing Norato status success/warning/error and brand yellow tokens cover tone fills. There are no semantic linear-size or circular-diameter tokens yet; add component-specific size tokens to `layout.css` and schema when required.

## Decisions
- Use one exported `NoratoProgress` adapter with `variant=linear|circular`; no interactive focus treatment because Progress is status.
- Keep known-length determinate values only in the public contract for this first pass. Prevent invalid input by clamping finite values; `null/undefined` are internally reserved for Reka indeterminate but aren't an exposed behavior.
- `valueLabel` is separately localized for each progress bar. Reka `getValueLabel` supplies an accessible name; `getValueText` supplies the textual percentage.
- Circular SVG uses a fixed viewBox, stroke-dasharray 100, and start rotation -90deg so shape never stretches and begins at 12 o'clock.
- Browser matrix/geometry/responsive review remains open until measured from the actual render.
