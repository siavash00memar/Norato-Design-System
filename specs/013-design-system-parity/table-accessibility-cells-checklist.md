# Checklist — Table image and progress playground cells

## Scope / implementation

- [x] One labeled Norato checkbox controls both additional sample columns and defaults off. At 390/320 viewport widths its label row measures 51.19px high; CSS `min-block-size` resolves to 48px. Space toggles it on/off and keyboard focus shows the yellow ring.
- [x] Existing default Table playground and static specimen remain unchanged while the option is off.
- [x] Enabled sample includes a meaningful image `{ src, alt }` and numeric progress values in the 0–100 range.
- [x] Generated Vue snippet reflects both enabled column definitions and corresponding row data; disabling restores the original columns and placeholder rows. The rendered closing `</script>` is valid.

## Browser DoD

- [x] At desktop width, both cells render with no obvious clipping/stretch; progress shows RTL placement, visible values and yellow fill, and the image remains a bounded square.
- [x] Browser accessibility tree exposes `progressbar` names «پیشرفت پروژه (درصد)» and current values 72/46/100, plus the informative image alternative «منظرهٔ نمونه با خورشید زرد و تپه‌ها».
- [x] At 390px and 320px, document/body client and scroll widths match (375/375px and 305/305px, with 15px reserved for the browser scrollbar). Table client and scroll widths also match (325/325px and 255/255px); stacked RTL labels remain legible without visible clipping or stretch.
- [x] Restored the control to off and confirmed the original default sample and generated snippet; Space also toggles the option on and back off.
- [ ] Independent screen-reader speech review remains a separate DoD item; do not infer it from browser AX.

## Technical gates

- [x] `pnpm check:tokens`
- [x] `pnpm check:catalog`
- [x] `pnpm --dir apps/vue typecheck`
- [x] `pnpm --dir apps/vue build`
- [x] `git diff --check`

## Remaining evidence

- [ ] Independently review screen-reader speech before closing this feature checklist.
