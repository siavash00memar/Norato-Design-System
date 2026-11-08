# List DoD

Status: in progress

## Implementation and visual review

- [x] Public Vue `NoratoList`, `NoratoListGroup`, and `NoratoListItem` adapters, catalog/export/usage entry, contract, specimen, and interactive playground are present.
- [x] Compared desktop local rendering with the supplied visual reference at approximately 1265×720. Inner settings panel is about 300px wide in both; Norato's dotted specimen frame follows the narrower documentation column.
- [x] RTL row order, compact density, yellow active/focus palette, grouped/inset/plain variants, and inert specimen composition reviewed.

## Browser interactions

- [x] Switch changes controlled state and visible value.
- [x] Selectable button rows update selected state; grouped variant renders headings and nested rows.
- [x] Native checkbox can be toggled; keyboard focus is visibly yellow.
- [ ] Verify links, action events, disabled cases, tab order and keyboard activation across all row actions.
- [ ] Verify responsive behavior at 390px and 320px, including document overflow.
- [ ] Independently confirm screen-reader announcements and row-action roles.

## Technical gates

- [ ] `pnpm check:tokens`
- [ ] `pnpm check:catalog`
- [ ] Vue TypeScript validation
- [ ] Vue production build
- [ ] `git diff --check`
- [ ] Scan project files for prohibited external reference name.

Close this checklist only after all remaining items pass or are explicitly documented as unavailable with evidence.
