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
- [x] Norato yellow palette, dotted shared stage, 48px interaction targets and absence of stretched calendar artwork are recorded in the prior browser evidence.

## Behavior and accessibility evidence

- [x] Single-day and range endpoints, reverse-order range selection, range presets, date-time, month, year and wheel updates are recorded in prior browser checks.
- [x] RTL weekday order, keyboard day movement, PageUp/PageDown, Home/End, Enter, Escape, focus return, 2px focus ring, invalid, disabled, loading, holiday and min/max/disabled-date semantics are recorded in prior browser checks.
- [x] AX tree exposes calendar/day semantics, labels, selected/today/holiday/disabled states, described errors and busy status as documented in the original validation record.
- [ ] Independent screen-reader announcement and reading-order review remains open. Browser AX inspection and keyboard tests do not close this item.

## Repository gates

- [x] Token, catalog, TypeScript, production-build and diff checks passed in the documented implementation and preview-frame follow-ups.
- [x] After the documentation/status correction, `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. The build's main JS chunk is 443.80KB (120.37KB gzip).
- [x] Follow-up pushed to `origin/master`; checkpoint `4308ad9be45ed7307689fa8b960f14ee8358682d` is recorded.

**DoD decision:** Do not mark this family complete until the independent screen-reader review passes. Full prior evidence is in `specs/006-norato-date-picker/tasks.md`, the request-validation record, and the linked preview-frame follow-up.
