# Radio Playground Consistency — Checklist

- [x] The “بدون انتخاب” render, status, and generated Vue ref all show `undefined`/no selection.
- [x] Selecting a radio while empty clears the simulation and synchronizes render, status and snippet.
- [x] Required + empty exposes the required message and the generated example includes `required`.
- [x] Selected + error reports the error without falsely stating that no option is selected.
- [x] Keyboard arrows still select in RTL; keyboard selection from empty (Shift+Tab to radio, Space on yearly) exits the simulation and synchronizes snippet/status. Disabled state and 16/20 visual sizes still render; the 48px row-target measurement from the Radio DOM matrix remains valid because adapter CSS was unchanged.
- [x] Actual browser state is restored; request validation evidence is recorded in `docs/request-validation-checklist.md`.
- [x] Token/catalog/type/build/diff gates pass; production build warning at 642.00KB is recorded.
- [x] Error log records the defect and prevention in ERR-054.

## Browser verification — live interaction follow-up (2026-11-09)

- [x] Clicking Yearly updates the checked radio, live status, and generated Vue snippet together.
- [x] Required + simulated empty removes the selection, renders the required alert, sets `aria-invalid="true"` on the group/options, and marks only the first enabled option as required.
- [x] Choosing Quarterly from the empty required state clears the simulation and alert, selects Quarterly, and updates status/snippet.
- [x] Error + Disabled leaves all three inputs natively disabled, removes native `required`, keeps the invalid semantics/error alert, and gives the live status disabled priority.
- [x] At both 16px and 20px radio sizes, option rows remain 48/48.8/48px tall. ArrowDown from Quarterly selects Yearly in RTL and updates the status/snippet.
- [x] Restored playground to enabled, no-error, no-required, Monthly selected, 20px after the review.
- [ ] This follow-up does not complete the full live visual-state/focus cross-product or independent screen-reader review.

## Browser verification — settled Hover and Focus (2026-11-09)

- [x] With the live, enabled RTL group, clicking Quarterly selected it; after the 600ms visual transition settled, `:hover` remained true and the selected control border resolved to Norato yellow `rgb(253, 193, 1)` (`--norato-color-brand-yellow: #fdc101`). The option row remained 48.8px high.
- [x] Space on the selected Quarterly option retained selection and produced `:focus-visible=true`; after the transition, the focus outline was yellow. The semantic focus token is 2px; this browser session's computed outline reported 1.6px, so final 2px optical measurement remains open.
- [x] Restored the playground to Monthly selected, enabled and without error; RTL direction was confirmed.
- [ ] Remaining: full live state/focus cross-product, final focus-ring visual measurement, and independent screen-reader review. Radio family DoD remains open.

## Browser verification — focus cascade correction (2026-11-09)

- [x] Scoped the package `:focus-visible` rule to `.norato-radio-group` so it outranks the app's generic native radio outline without changing unrelated controls.
- [x] On the live RTL playground, keyboard focus leaves `:focus-visible=true`, preserves the checked Monthly option and computes `outline: 0`, `outline-offset: 0`, with settled yellow shadow spread exactly `2px` from `--norato-border-focus`.
- [x] Live RTL row height remains 48.8px. The design reference's Focus state explicitly specifies a visible 2px keyboard ring; Norato uses its own yellow accent.
- [x] Restored the playground to Monthly/enabled/no-error after the review.
- [ ] The full live state/focus cross-product and independent screen-reader review remain open; this correction alone does not close Radio DoD.

## Browser verification — disabled plus error priority (2026-11-09)

- [x] Error-only keeps a semantic red border; Disabled-only keeps a neutral disabled border.
- [x] With both states active, the settled selected radio border and dot use the neutral disabled token color (`rgb(107, 107, 107)`). All options are natively disabled; `aria-invalid="true"`, the linked error message, and selected Monthly value remain present.
- [x] RTL and the row's 48px height remain intact. After review, the playground is restored to Monthly/enabled/no-error.
- [x] Keyboard focus still computes `outline: 0` and a yellow `2px` shadow ring.
- [ ] Full live visual-state/focus cross-product and independent screen-reader review remain open.

## Required empty recovery — fresh 320px browser review (2026-11-10)

- [x] Required + no selection rendered the Persian validation message and marked the required group in the generated Vue example; the selected-value status reported «بدون انتخاب».
- [x] Selecting Yearly cleared the no-selection simulation and validation message and synchronized the radio value, status and Vue snippet.
- [x] Restored Monthly, optional, enabled, no-error state. RTL and 48px target remain intact in the live page.
- [ ] Full live visual/focus cross-product and independent screen-reader review remain open; this check does not close Radio DoD.

## Error plus keyboard focus — fresh 320px browser review (2026-11-10)

- [x] Error state keeps the group title and message red while ArrowDown moves selection from Monthly to Quarterly; the focused option shows the visible Norato-yellow keyboard ring around its error-stroked radio.
- [x] Accessibility state reports Quarterly selected and focused; selecting Monthly and disabling Error restores the initial selection/status and generated Vue example.
- [ ] Full focus × error/disabled/required × size cross-product and independent screen-reader review remain open.

## Small-size state interaction follow-up — 320px browser (2026-11-10)

- [x] At 16px, Required + no selection displayed the linked required message and generated `required` example; selecting Yearly cleared the empty simulation and synchronized status/snippet.
- [x] At 16px, Error + keyboard focus kept the red group/message and showed the yellow ring around the smaller radio. ArrowDown selected Quarterly and updated the Vue example.
- [x] At 16px, Error + Disabled natively disabled all radios, prioritized the neutral disabled control treatment, retained the error message/invalid semantics, and reported disabled status.
- [x] Restored Monthly, 20px, optional, enabled, no-error; fresh screenshot confirms the playground reset.
- [ ] These focused pairs do not prove the complete checked × size × hover/focus × error/disabled/required cross-product or independent screen-reader behavior.
