# Implement — Time Picker field capsule

## Change

- Wrapped the native readonly time input in a non-semantic `.norato-time-picker__field`.
- Moved the visible shape/state stroke to a 36px pseudo-capsule using existing semantic border/radius/height tokens; the input remains a transparent 48px hit target (56px for XLarge).
- Removed the input's legacy card radius and strong border. Hover/focus use one yellow stroke; Error remains semantic red; Disabled/Loading restore neutral treatment.
- Updated the Time Picker contract, the shared component visual rules, DoD checklist, request-validation checklist, and error log ERR-271.

## Browser verification

- At local 375×844, Small/Medium/Large/XLarge retain the inset pill geometry and LTR 24-hour value in the RTL page.
- Focus after Escape shows one yellow stroke with no visible browser-black or duplicate ring. ArrowDown moved hour focus 14→15; Space selected 15:30 and synchronized the field/example; Escape closed and returned focus.
- Invalid showed the semantic red stroke. Error+Disabled used the neutral disabled surface and disabled both input and trigger in the accessibility tree. Loading showed its status and kept selection unavailable.
- Restored the playground to Single/Columns/Medium/5-minute/enabled/no-error/no-loading/optional and 14:30.
- `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` all pass.

## Remaining

- Pointer-hover screenshot, exact computed DOM dimensions, matched 390/320px responsive geometry, and independent screen-reader review are not yet complete. Do not close the Time Picker family DoD from this follow-up.
