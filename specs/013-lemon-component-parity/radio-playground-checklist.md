# Radio Playground Consistency — Checklist

- [x] The “بدون انتخاب” render, status, and generated Vue ref all show `undefined`/no selection.
- [x] Selecting a radio while empty clears the simulation and synchronizes render, status and snippet.
- [x] Required + empty exposes the required message and the generated example includes `required`.
- [x] Selected + error reports the error without falsely stating that no option is selected.
- [x] Keyboard arrows still select in RTL; keyboard selection from empty (Shift+Tab to radio, Space on yearly) exits the simulation and synchronizes snippet/status. Disabled state and 16/20 visual sizes still render; the 48px row-target measurement from the Radio DOM matrix remains valid because adapter CSS was unchanged.
- [x] Actual browser state is restored; request validation evidence is recorded in `docs/request-validation-checklist.md`.
- [x] Token/catalog/type/build/diff gates pass; production build warning at 642.00KB is recorded.
- [x] Error log records the defect and prevention in ERR-054.
