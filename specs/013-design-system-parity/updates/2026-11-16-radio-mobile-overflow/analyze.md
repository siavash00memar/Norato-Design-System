# Radio mobile overflow — Analyze

## Current source evidence

- `NoratoRadioGroup.vue` uses a native `<fieldset>` with `dir="rtl"`; each option is a native radio input and associated label.
- `packages/vue/src/components.css` declares the group `min-inline-size: 0`, each `.norato-radio` row `inline-size: 100%`, `min-inline-size: 0`, and `min-block-size` from the 48px target token.
- The same stylesheet explicitly sets the radio glyph to 20×20px and to 16×16px for the small size; the input is `flex:none`. Source rules do not support a 52px visual glyph.
- The continuation report identifies a 16px horizontal overflow at 320×720, but the current browser viewport has not yet reproduced or measured that exact condition. Treat the report as a defect lead, not as a verified computed measurement.

## Decision

Do not alter the Radio glyph or target based on the unverified 52px figure. First measure the browser's document, group, row, and glyph separately. If overflow reproduces, correct the offending ancestor/inline-size rule only. Preserve visible radio circles and the target contract.

## Browser result — 2026-11-16

- Used the actual local Radio page and browser viewport overrides at 320×720 and 390×844.
- At 320×720, `innerWidth=320`, document `clientWidth=305`, `scrollWidth=305`; no horizontal overflow. At 390×844, document `clientWidth=375`, `scrollWidth=375`; no horizontal overflow.
- The live playground's three rows measured 48/48.8/48px, each circle 20×20px. RTL direction was computed as `rtl`.
- ArrowDown from Monthly selected Quarterly and updated status and generated Vue value; ArrowUp restored Monthly. The final screenshot showed the restored selection and bounded content.
- Result: the reported overflow and 52px radio glyph were not reproduced. No component source change is warranted from this evidence. The CSS root-cause step is closed as not reproducible; an exact environment reproduction would reopen it.
- `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts/exports), `pnpm --filter @norato/vue-app build` (includes `vue-tsc --noEmit`), and `git diff --check` all pass after recording the audit.
- Remaining family DoD includes the exhaustive live state/focus cross-product and independent screen-reader review.

## Falsification checks

- If document and parent widths are bounded at 320×720, do not add a speculative CSS override; diagnose whether the alleged overflow is a screenshot/device-scale artifact.
- If the radio input itself measures 16×16 or 20×20, reject any fix that scales its box to 48/52px; the hit target belongs to the row.
- If the group is bounded but another page section overflows, scope the fix to that measured section rather than Radio styles.
