# Charts — Specify

## Outcome
Deliver design reference-parity Charts as a reusable Vue 3 family with six chart types, three Stat Tile trends, four Legend series, and one dark Tooltip. Use Norato's own stable eight-color series palette with yellow first; avoid using brand blue as the primary brand accent.

## Contract
- `NoratoChartCard`: controlled data input, chart type (`bar|grouped-bar|horizontal-bar|line|area|donut`), Persian title/subtitle, categories, series, optional direct-value label and optional header action slot.
- `NoratoStatTile`: value, label, trend (`up|down|neutral`), optional delta and accessible label.
- `NoratoChartLegendItem`: fixed series index 1–4 and label, visual-only unless the consumer explicitly supplies an action.
- `NoratoChartTooltip`: series label/value/date; dark surface and `role=tooltip` only when attached to a described target.
- Chart output keeps category order and exact data values. Donut requires non-negative values and a positive total; invalid data is visibly/semantically reported without NaN SVG geometry.
- Use native SVG for crisp, intrinsic rendering without an added chart dependency. Chart marks are aria-hidden; include a named summary and semantic data table.
- `more` remains a consumer-owned slot; no arbitrary action behavior is invented.

## Acceptance
Follow design reference's 520px chart-card reference proportions and compact hierarchy; Norato's dotted Button specimen frame remains the same shared size as peer components. RTL headings and legend align right, SVG numeric scale remains LTR, and fixed series colors never stretch/crop marks. Data/card content stacks fluidly at narrow widths.
