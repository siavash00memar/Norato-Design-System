# Visual Accent and Dropdown Consistency — DoD

- [x] Active/selected/checked states use Norato yellow with dark foregrounds; blue remains for informational icons and link/status semantics.
- [x] No native `<select>` remains in Vue component runtime or playground controls; source and live DOM were scanned.
- [x] Custom playground dropdown ArrowDown/Enter selection and Date Picker Select Escape/focus return work; RTL roles and option menus render as custom listboxes. No currently migrated menu exposes disabled options.
- [x] Date wheel year and date-time hour values update correctly without closing the owning picker.
- [x] At 429px no document overflow; selected Date Picker day and Pagination page compute to Norato yellow with dark text. Lemon reference composition was inspected.
- [x] Token/catalog/typecheck/build/diff checks pass; screen-reader, same-viewport desktop/mobile comparison and exhaustive state matrix remain open.

- [x] Shared playground menu options render RTL and align right at 341px; verified with the Input password-strength list open.
