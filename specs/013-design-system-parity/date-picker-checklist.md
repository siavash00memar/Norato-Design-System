# Date Picker — Definition of Done

**Maturity:** Implemented. The family DoD is open until independent screen-reader review is recorded.

## Page and implementation

- [x] The detail page follows Button's structure: inert preview, executable Vue playground and copyable example, followed by the nine canonical contract sections.
- [x] The adapter uses controlled Jalali values and implements Single, Range, Range + Presets, Date & Time, Month, Year and Wheel modes.
- [x] The user's approved first release includes single-day and date-range selection; range endpoints are ordered, and presets remain optional.

## Visual and responsive review

- [x] The live local/reference comparison and seven-mode visual review are recorded in `docs/request-validation-checklist.md`.
- [x] Latest inert preview-frame follow-up: desktop 628×300px at 1280×720; mobile 327×300px at 390×844 and 257×300px at 320×844 (reference 256.8×300px at 320px).
- [x] RTL, 24px mobile inset and no horizontal overflow are verified. The mobile range panel uses one month while desktop range uses two.
- [x] Date Input matched-width follow-up (2026-11-15): at 390×844 the reference field is 258×39.21px and Norato's visual capsule is 287×36px inside a 48px target; at 320×844 the reference is 215×32.68px and Norato's capsule is 217×36px inside a 48px target. Local document width has no horizontal overflow at either width; Norato retains the approved 36px field visual and 48px target.
- [x] Norato yellow palette, dotted shared stage, 48px interaction targets and absence of stretched calendar artwork are recorded in the prior browser evidence.

## Behavior and accessibility evidence

- [x] Single-day and range endpoints, reverse-order range selection, range presets, date-time, month, year and wheel updates are recorded in prior browser checks.
- [x] RTL weekday order, keyboard day movement, PageUp/PageDown, Home/End, Enter, Escape, focus return, 2px focus ring, invalid, disabled, loading, holiday and min/max/disabled-date semantics are recorded in prior browser checks.
- [x] Fresh 2026-11-14 browser check: RTL Right Arrow moved focus from 1 Aban to 30 Mehr across the month boundary; Enter selected it and synchronized the field/example (`1405-07-30`). Reset restored the original value (`1405-08-01`).
- [x] AX tree exposes calendar/day semantics, labels, selected/today/holiday/disabled states, described errors and busy status as documented in the original validation record.
- [ ] Independent screen-reader announcement and reading-order review remains open. Browser AX inspection and keyboard tests do not close this item.

## Repository gates

- [x] Token, catalog, TypeScript, production-build and diff checks passed in the documented implementation and preview-frame follow-ups.
- [x] After the documentation/status correction, `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. The build's main JS chunk is 443.80KB (120.37KB gzip).
- [x] Fresh 2026-11-14 keyboard-activation evidence update: `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- [x] Follow-up pushed to `origin/master`; checkpoint `4308ad9be45ed7307689fa8b960f14ee8358682d` is recorded.
- [x] Latest RTL keyboard-activation evidence pushed to `origin/master`; checkpoint `c4188a0`.

**DoD decision:** Do not mark this family complete until the independent screen-reader review passes. Full prior evidence is in `specs/006-norato-date-picker/tasks.md`, the request-validation record, and the linked preview-frame follow-up.

## Range reverse-order confirmation — 2026-11-14

- [x] In the live Range playground, selected 1405-08-27 first and then selected 1405-08-17. The controlled value normalized to start 1405-08-17 and end 1405-08-27; the Persian field and generated Vue example matched.
- [x] Reopened the calendar and confirmed the selected interval rendered continuously with the two endpoints distinguished visually; RTL weekday order and keyboard-focused calendar semantics remained exposed.
- [x] Reset returned the Range value to 1405-08-01 through 1405-08-07; returning the playground to Single restored 1405-08-01, Medium, enabled, no-error state.
- [ ] Independent screen-reader announcement and reading-order review remains open. This browser AX/visual check does not close Date Picker DoD.

## Open range calendar mobile geometry — 2026-11-14

- [x] At 390×844, the live Range input retains a 48px control target; the open calendar panel measures 358×490.78px at x=12 and remains within the viewport. The document measures 375/375px client/scroll width.
- [x] At 320×844, the live Range panel measures 288×490.78px at x=12; its one-month grid is 262px wide with seven natural 48px week rows. The document measures 305/305px without horizontal overflow.
- [x] Both screenshots show the same RTL one-month calendar, selected 1–7 Aban range band and distinguished endpoints. No calendar or day cell is visibly stretched; the range hint remains inside the panel.
- [x] Closed the calendar, restored Single/Medium/enabled/no-error with the default 1 Aban value, returned the browser to Carousel, and reset the viewport to its original 499×932.
- [ ] Independent screen-reader announcement and reading-order review remains open; this responsive geometry check does not close Date Picker DoD.

## Date Input invalid, disabled and loading combination — 2026-11-15

- [x] In the live Single/Medium playground, Invalid showed the error Stroke and message while keeping the selected Jalali value and generated Vue example synchronized.
- [x] Error + Disabled exposed both the field and calendar action as disabled in the browser accessibility tree; the input returned to the neutral disabled appearance while the error message remained visible.
- [x] Error + Disabled + Loading showed the spinner and loading announcement, kept both controls disabled, and retained the error message. The playground was restored to Single/Medium, enabled, not loading, not invalid, with 1405-08-01 selected.
- [x] The mobile Date Input sizing comparison is recorded above and in `docs/request-validation-checklist.md`.
- [ ] Independent screen-reader announcement and reading-order review remains open; browser AX and geometry evidence do not close this item.
