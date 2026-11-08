# Charts — Analyze

## Authoritative source
- The design reference `#charts` was reviewed at 1280×720. It defines four components and 14 variants: six chart types, three trend tiles, four legend series, and one tooltip.
- Its overview specifies fixed `chart/series-1…8` order, 4px bar corners, 2px lines, a 10px terminal marker with ring, subtle gridlines, tertiary axis labels, and RTL headings/legends with LTR numeric axes.
- The reference preview plot measures about 334.8×156.9 CSS px (`viewBox 320 150`). The matched Norato preview plot measures 336×157.7px (`viewBox 520 244`), preserving the same 2.13 ratio. The outer dotted frames differ (Norato 584×288px; reference about 636×332px) because the documentation content columns differ; each inner chart card is close at 360×234px vs about 367×244px.
- design reference requires the data also be available as table or text, recommends one direct value label, legend for 2+ series, and forbids 3D/shadows.

## Repository audit
- The catalog, contract, Figma rules, Vue exports, and usage example now identify four Vue adapters; catalog readiness is Adapted while the family DoD remains open.
- `ComponentSpecimen.vue` uses `NoratoChartCard` for the inert six-bar specimen; the stale `.sample-chart` placeholder is gone.
- Native SVG keeps chart rendering self-contained. Eight semantic series colors are registered in the token layer, with Norato yellow first.

## Risks and mitigation
- SVG may distort at small widths if aspect ratio is not preserved; use viewBox and responsive width/auto height, with bounded intrinsic plot ratio.
- NaN/negative/zero-total inputs can create invalid SVG; constrain and sanitize data before geometry.
- Donut slices/line colors alone are not sufficient for access; include summary and exact table values.
- Check chart table content for overflow on mobile; allow horizontal scrolling within the table wrapper without widening the page.
- Mobile chart plots keep their intrinsic ratio and use a dedicated LTR scroll viewport so the numeric axis remains visible in RTL pages. At 320px, excess plot width scrolls inside the chart; the document itself remains bounded.

## Browser checkpoint — 2026-11-08

- Same 1280×720 desktop viewport: inner chart and plot proportions are close to the design reference. Sample bars use values `34, 58, 42, 72, 51, 66`, a 0/40/80 scale, Norato yellow, and a single directly labeled final bar.
- All six chart types rendered in the actual playground with six ordered categories and no data issues. Chart ratios stay 2.131; simple bars show 6 marks, grouped bars 12, horizontal bars 6, line 2 polylines, area 2 filled paths plus 2 polylines, and donut 6 slices.
- Up/Down/Neutral Stat Tile controls updated the first tile's trend, sparkline and text; all four Legend items render. Tooltip has `role=tooltip` and its ID matches the trigger's `aria-describedby`.
- RTL and LTR render directions were selected; root and title/legend direction followed the control while the chart plot viewport stayed LTR. The inert top specimen has no focusable descendants.
- At 390px, document width is 375px; card is 333×221px and plot is 309×145px without internal overflow. At 320px, document width is 305px; card is 263×222px and plot remains 280×131px with internal horizontal scrolling. The first numeric axis label remains visible and the page does not overflow.
- The live semantic table was opened; headers and six category/value rows preserve the original order and values. `pnpm check:tokens`, `pnpm check:catalog`, `pnpm test:charts` (7/7), Vue typecheck and production build pass; build retains a >500KB bundle advisory.
- Independent screen-reader review remains open; do not close the family DoD on browser AX evidence alone.
