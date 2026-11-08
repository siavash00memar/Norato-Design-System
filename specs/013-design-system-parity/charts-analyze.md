# Charts — Analyze

## Authoritative source
- design reference `#charts` was opened in the browser at 1280×720. It reports 4 components / 14 variants; six chart types, three trend tiles, four legend series and a dark tooltip.
- design reference overview specifies fixed `chart/series-1…8` order, 4px bar corners, 2px line, 10px terminal marker with ring, subtle gridlines, tertiary axis labels, and RTL titles/legends with LTR numbers.
- design reference's chart card is described as 520px. Its current preview SVG measures about 335×157 CSS px at the available browser viewport (SVG viewBox 320×150); the anatomy card is 636×452px. Exact CSS content/card sizing still needs matched screenshot review.
- design reference requires the data also be available as table or text, recommends one direct value label, legend for 2+ series, and forbids 3D/shadows.

## Repository audit
- Catalog currently says Charts Proposed and has no adapter or usage key.
- `ComponentSpecimen.vue` contains a hard-coded six-bar `.sample-chart` block; `rg` found no separate chart adapter and only this legacy class reference.
- Vue dependencies include Vue and Reka UI, with no chart engine. Native SVG is viable and avoids introducing chart-package weight.
- Global tokens have no series palette; this feature must register 8 semantic token names rather than hard-code colors in styles.

## Risks and mitigation
- SVG may distort at small widths if aspect ratio is not preserved; use viewBox and responsive width/auto height, with bounded intrinsic plot ratio.
- NaN/negative/zero-total inputs can create invalid SVG; constrain and sanitize data before geometry.
- Donut slices/line colors alone are not sufficient for access; include summary and exact table values.
- Check chart table content for overflow on mobile; allow horizontal scrolling within the table wrapper without widening the page.
- Need matched viewport comparison and exact narrow-width browser evidence before marking DoD complete.
