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

## Small-size accessibility and combined-state spot check — 2026-11-14

- [x] Full browser accessibility-tree snapshot exposes the group name, all three radio option names (including the quarterly description), named required/error/disabled/empty controls, current selection, and status. The earlier incremental tree had omitted names; this full snapshot confirms they are present.
- [x] At 16px, Error + keyboard Focus keeps the red group/error treatment and the visible yellow focus ring around the selected option.
- [x] At 16px, Error + Disabled exposes every radio as disabled, keeps the error message, and gives the status the disabled priority; the selected control switches to the neutral disabled appearance.
- [x] At 16px, Required + empty shows the required message, reports no selection, and includes `required` in the generated Vue example. Selecting Yearly clears the empty/error state and synchronizes the selected radio, status and snippet.
- [x] Restored Monthly selected, 20px, optional, enabled, no-error, non-empty state.
- [ ] This spot check does not cover every live visual-state/focus combination or independent screen-reader behavior; Radio DoD remains open.

## Small-size default keyboard follow-up — 2026-11-14

- [x] At 16px and Default state, Tab focused the selected Monthly option and the live screenshot showed the yellow focus ring around the proportional radio control.
- [x] ArrowDown selected Quarterly and updated the status plus generated Vue snippet; ArrowUp restored Monthly and synchronized them again.
- [x] Restored the playground to Monthly, 20px, optional, enabled, no-error; returned the browser to its original Carousel page.
- [ ] This focused default-state path does not close the full visual/focus combination matrix or independent screen-reader review.

## Live Focus, Error and Disabled pairs at both sizes — 2026-11-15

- [x] At 16px, keyboard focus on checked Monthly showed a 2px Norato-yellow ring; the radio remained 16×16px and its RTL row was 48px high.
- [x] At 16px, Error + keyboard Focus selected Quarterly; the group exposed `aria-invalid="true"` and its linked error text, the checked radio kept the red error border, and the yellow focus ring remained 2px.
- [x] At 16px, Error + Disabled marked all radios disabled; checked Quarterly remained selected with neutral disabled fill/border, while unchecked rows kept the neutral border.
- [x] At 20px, checked Monthly had a 20×20px control, a 48px RTL row and a 2px yellow keyboard ring. Error + Focus on Quarterly retained the linked invalid message, red border and yellow 2px ring.
- [x] At 20px, Error + Disabled exposed all three radios as disabled; selected Quarterly stayed checked with the neutral disabled appearance.
- [x] Restored the live playground to Monthly, 20px, optional, enabled and no-error; the generated Vue example and live status match.
- [ ] These focused live pairs do not enumerate every checked × size × hover/focus/error/disabled combination; independent screen-reader announcement and reading-order review also remain open.

## Live required/error/disabled and value synchronization — 2026-11-15

- [x] At 16px, Required + Error + empty exposed the linked error, required state, `undefined` model and matching generated Vue snippet. Adding Disabled marked all three radio controls disabled and retained the error semantics.
- [x] At 16px, selecting Yearly while enabled and then re-enabling Disabled preserved the checked value; the rendered controls were neutral and disabled.
- [x] At 20px, monthly, quarterly and yearly were each selected in turn; each selection updated exactly one radio, status and generated `v-model` value in sync.
- [x] At 20px, Required + Error + Disabled kept the checked value and all three disabled options. The screenshot retained the RTL layout, labels/descriptions and neutral disabled circles beneath the required group label.
- [x] Restored Monthly, 20px, optional, enabled, no-error and selected; live value, status and generated usage agree.
- [ ] Full live state cross-product, mobile state-by-state visual review and independent screen-reader announcement/reading-order review remain open.

## Mobile viewport overflow audit — 2026-11-16

- [x] At viewport 320×720, browser metrics show document client/scroll widths 305/305px; no horizontal overflow. The live playground circles measure 20×20px and rows 48/48.8/48px.
- [x] At viewport 390×844, document client/scroll widths are 375/375px; the live group remains bounded and RTL.
- [x] ArrowDown selected Quarterly and updated the live status and Vue snippet; ArrowUp restored Monthly. Final browser render shows Monthly selected.
- [ ] The reported overflow is not reproducible in these tested viewports, so no CSS fix was applied. Full live state/focus cross-product and independent screen-reader validation remain open.
