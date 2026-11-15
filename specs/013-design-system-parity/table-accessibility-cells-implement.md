# Implement — Table image and progress playground cells

## Changes

- Added a labeled, false-by-default Norato checkbox for the image and progress sample columns.
- Added one locally embedded SVG illustration, informative Persian `alt` text, and progress values 72, 46 and 100.
- Generated Vue code now reflects the optional columns and an example row while enabled; when disabled it returns to the baseline columns and placeholder rows. The generated closing script tag is valid.
- Kept the Table adapter, shared CSS, static specimen and default columns unchanged.

## Browser evidence

- At a 1265×713 viewport, the live table displayed square thumbnails and yellow progress bars within the RTL column layout; no visible clipping or stretching was seen.
- Exact browser measurements: at 390px, viewport inner width is 390px and document/body client/scroll widths are 375/375px; the live Table client/scroll widths are 325/325px. At 320px, the corresponding widths are 320px and 305/305px for document/body, and 255/255px for the live Table. The 15px difference is the browser scrollbar; there is no horizontal content overflow.
- At both mobile widths the label row measures 51.19px high. All three images load at 40×40px, and each progress indicator stays 100×17.59px. The responsive table presents stacked RTL row cards without horizontal stretch.
- The browser accessibility tree exposed three progress indicators named «پیشرفت پروژه (درصد)» with values 72, 46 and 100, and images named «منظرهٔ نمونه با خورشید زرد و تپه‌ها».
- After toggling the option off, the checkbox returned to value 0 and the generated snippet returned to the baseline rows without optional columns.
- Space toggles the checkbox on and off; the focused control has the visible yellow focus ring. Its full-width label row has a tokenized 48px minimum block size.
- Independent screen-reader speech review remains open.

## Technical checks

- `pnpm check:tokens` — passed.
- `pnpm check:catalog` — passed.
- `pnpm --dir apps/vue typecheck` — passed.
- `pnpm --dir apps/vue build` — passed.
- `git diff --check` — passed; Git reported only its normal LF-to-CRLF normalization notice for the Vue source.
