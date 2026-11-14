# Checklist — Date Picker keyboard activation follow-up

- [x] Constitution, specification, clarification, and plan recorded in order.
- [x] Local page opened at `#component-date-picker`; starting value was `۱ آبان ۱۴۰۵`.
- [x] Calendar trigger opened the popup; AX exposed the RTL weekday order `ش ی د س چ پ ج`, November 1405, selected day 1, and disabled-day semantics.
- [x] RTL Right Arrow moved focus from 1 Aban to 30 Mehr across the month boundary without committing selection.
- [x] Enter selected 30 Mehr 1405, closed the popup, and updated both the field and Vue snippet to `1405-07-30`.
- [x] Reset restored field and snippet to 1 Aban 1405 / `1405-08-01`.
- [ ] Independent screen-reader announcement and reading-order review remains open; this browser AX check does not satisfy it.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` passed.
- [x] Evidence update pushed to `origin/master` in commit `c4188a0`.
