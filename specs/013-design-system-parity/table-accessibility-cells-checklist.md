# Checklist — Table image and progress playground cells

## Scope / implementation

- [x] One labeled Norato checkbox controls both additional sample columns and defaults off. Its label row has `min-block-size: var(--norato-control-target-min)` and the token resolves to 48px; Space toggles it on/off and keyboard focus shows the yellow ring.
- [x] Existing default Table playground and static specimen remain unchanged while the option is off.
- [x] Enabled sample includes a meaningful image `{ src, alt }` and numeric progress values in the 0–100 range.
- [x] Generated Vue snippet reflects both enabled column definitions and corresponding row data; disabling restores the original columns and placeholder rows. The rendered closing `</script>` is valid.

## Browser DoD

- [x] At desktop width, both cells render with no obvious clipping/stretch; progress shows RTL placement, visible values and yellow fill, and the image remains a bounded square.
- [x] Browser accessibility tree exposes `progressbar` names «پیشرفت پروژه (درصد)» and current values 72/46/100, plus the informative image alternative «منظرهٔ نمونه با خورشید زرد و تپه‌ها».
- [x] At 390px and 320px, screenshot review shows legible RTL labels and vertically stacked rows without visible clipping or stretch. Numeric document overflow measurement remains open.
- [x] Restored the control to off and confirmed the original default sample and generated snippet; Space also toggles the option on and back off.
- [ ] Independent screen-reader speech review remains a separate DoD item; do not infer it from browser AX.

## Technical gates

- [x] `pnpm check:tokens`
- [x] `pnpm check:catalog`
- [x] `pnpm --dir apps/vue typecheck`
- [x] `pnpm --dir apps/vue build`
- [x] `git diff --check`

## Remaining evidence

- [ ] Independently review screen-reader speech and measure exact 390/320 document overflow geometry before closing this feature checklist.
