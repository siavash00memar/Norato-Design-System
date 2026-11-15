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
- [x] 2026-11-15 switch correction: the live checked List switch moved its white knob outside the track in RTL. After reversing the directional translations, checked places the white, stroke-free knob inset at the physical left; unchecked places it inset at the physical right. AX state changed on/off with the control, and the playground was restored to its original checked state.
- [x] 2026-11-15 direction control: RTL/LTR selector updates the List, both Groups, and all child Items. In live LTR, the checked white knob stays inset at physical right and unchecked at physical left; row leading/trailing placement changes with direction. Generated standalone usage includes explicit matching `dir` on parent and nested adapters. Tested grouped and inset layouts; restored RTL/inset and checked defaults.
- [x] Keyboard Tab order reaches switch, selectable button, checkbox and second selectable button in sequence. Enter and Space activate the selectable rows; switch and checkbox each toggle and expose their updated values in the accessibility tree. Playground values were restored afterward.
- [x] Playground now includes an enabled link, a toggleable disabled-link state, and a disabled button. Browser activation emitted the link event without changing the docs URL; turning the disabled-link control on removed the item from link semantics, and disabled button/link rows were skipped by Tab.
- [x] At 390×844 and 320×844, plain, inset and grouped layouts stay within document widths of 375px and 305px. The stage measures 300px/273px and list content 282px/255px; all row targets remain at least 48px tall. No horizontal overflow.
- [x] Matched mobile browser review at the same 414px viewport: the reference and local specimens both show a three-row RTL settings list in a bounded dotted frame. Norato's inner panel and row spacing remain proportionate; the wider Norato stage reflects the shared documentation frame. No visible clipping or stretched rows; Norato yellow controls and selection keep the project palette.
- [x] 2026-11-15 browser semantic inspection: DOM shows selectable rows as native `BUTTON` elements with `aria-pressed=true/false`, the link as an anchor, checkbox as a native checkbox, and the switch as a button with `role=switch` and checked state. The browser-provided accessibility tree labels selectable `aria-pressed` buttons as checkboxes, so role parity is unresolved; this tool output is not treated as screen-reader speech evidence.
- [x] 2026-11-15 targeted check: adding explicit `role="button"` did not change the browser accessibility tree (it still reported checkbox), while DOM already showed native BUTTON and correct `aria-pressed`. The redundant role was reverted; no interaction/API change is justified by this bridge-only mismatch.
- [ ] Independently confirm screen-reader announcements and determine whether the browser-bridge role discrepancy is present in an actual assistive technology.
- [x] 2026-11-15 mobile LTR flow comparison: at a 390px viewport the List content is 282×317px inside a 300×335px stage; at 320px it is 255×317px inside a 273×335px stage. Document client/scroll widths are 375/375 and 305/305 respectively (15px browser scrollbar); List client/scroll widths match at both sizes. Leading icons stay on the left, while trailing controls, values, and chevrons stay on the right; selected surface remains pale yellow and rows show no clipping or stretching. Compared the directional relationships and bounds with the supplied RTL specimen at the same 390px viewport; the reference remains RTL and has a shorter three-row frame, so this records directional/geometry parity rather than an identical LTR reference render.

## Technical gates

- [x] `pnpm check:tokens`
- [x] `pnpm check:catalog`
- [x] Vue TypeScript validation
- [x] Vue production build
- [x] `git diff --check`
- [x] Scan project files for prohibited external reference name.

Close this checklist only after all remaining items pass or are explicitly documented as unavailable with evidence. Independent screen-reader review remains open.
