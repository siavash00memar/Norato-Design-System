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
