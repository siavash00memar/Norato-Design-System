# Implement — Table image and progress playground cells

## Changes

- Added a labeled, false-by-default Norato checkbox for the image and progress sample columns.
- Added one locally embedded SVG illustration, informative Persian `alt` text, and progress values 72, 46 and 100.
- Generated Vue code now reflects the optional columns and an example row while enabled; when disabled it returns to the baseline columns and placeholder rows. The generated closing script tag is valid.
- Kept the Table adapter, shared CSS, static specimen and default columns unchanged.

## Browser evidence

- At a 1265×713 viewport, the live table displayed square thumbnails and yellow progress bars within the RTL column layout; no visible clipping or stretching was seen.
- At 390px and 320px viewports, the responsive layout displayed vertically stacked row cards with readable RTL labels and bounded image/progress cells. This was a screenshot review; exact document scroll-width measurements were not collected.
- The browser accessibility tree exposed three progress indicators named «پیشرفت پروژه (درصد)» with values 72, 46 and 100, and images named «منظرهٔ نمونه با خورشید زرد و تپه‌ها».
- After toggling the option off, the checkbox returned to value 0 and the generated snippet returned to the baseline rows without optional columns.
- Space toggles the checkbox on and off; the focused control has the visible yellow focus ring. Its full-width label row has a tokenized 48px minimum block size.
- Independent screen-reader speech and exact mobile overflow geometry remain open.

## Technical checks

- `pnpm check:tokens` — passed.
- `pnpm check:catalog` — passed.
- `pnpm --dir apps/vue typecheck` — passed.
- `pnpm --dir apps/vue build` — passed.
- `git diff --check` — passed; Git reported only its normal LF-to-CRLF normalization notice for the Vue source.
