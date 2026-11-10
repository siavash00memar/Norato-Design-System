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
- [x] Browser follow-up: selecting the alternate row updates the exclusive selected value and polite status. The previously selected row's title remains visible; selected surface is pale yellow and visually distinct from the list surface. The grouped variant preserves both group headings and all row titles.
- [x] Keyboard Tab order reaches switch, selectable button, checkbox and second selectable button in sequence. Enter and Space activate the selectable rows; switch and checkbox each toggle and expose their updated values in the accessibility tree. Playground values were restored afterward.
- [x] Playground now includes an enabled link, a toggleable disabled-link state, and a disabled button. Browser activation emitted the link event without changing the docs URL; turning the disabled-link control on removed the item from link semantics, and disabled button/link rows were skipped by Tab.
- [x] At 390×844 and 320×844, plain, inset and grouped layouts stay within document widths of 375px and 305px. The stage measures 300px/273px and list content 282px/255px; all row targets remain at least 48px tall. No horizontal overflow.
- [x] Matched mobile browser review at the same 414px viewport: the reference and local specimens both show a three-row RTL settings list in a bounded dotted frame. Norato's inner panel and row spacing remain proportionate; the wider Norato stage reflects the shared documentation frame. No visible clipping or stretched rows; Norato yellow controls and selection keep the project palette.
- [ ] Independently confirm screen-reader announcements and row-action roles.

## Technical gates

- [x] `pnpm check:tokens`
- [x] `pnpm check:catalog`
- [x] Vue TypeScript validation
- [x] Vue production build
- [x] `git diff --check`
- [x] Scan project files for prohibited external reference name.

Close this checklist only after all remaining items pass or are explicitly documented as unavailable with evidence. Independent screen-reader review remains open.
