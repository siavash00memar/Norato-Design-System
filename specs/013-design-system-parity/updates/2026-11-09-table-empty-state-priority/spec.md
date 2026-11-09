# Specification — Table empty-state priority

## Goal
Show the correct empty-state message when the Table receives no rows, including when a prior search query remains active.

## Acceptance contract
- While loading, render the loading status and do not render either empty-state message.
- When `rows.length === 0`, render `emptyLabel`, regardless of the current search query.
- When source rows exist but the query has no matches, render `noResultsLabel`.
- When matches exist, render the matching rows.
- Add a live playground selector that switches between sample data and an empty source dataset without clearing the search field, so both cases can be reviewed.
- Expose RTL/LTR direction in the live playground, default RTL, and keep the code sample synchronized.
- When keyboard or pointer activation moves to the last page and disables the Next button, focus must move to the enabled Previous button; the inverse applies when returning to the first page.
- The current page value exposes a polite live region when pagination changes; independent screen-reader behavior remains an open DoD check.
- Pagination arrows must follow text direction: previous points left / next right in LTR, and previous right / next left in RTL.
- Preserve RTL layout, semantic Norato styles and all current Table interactions.

## Out of scope
No global disabled API, server-side filtering or change to selection persistence semantics.
