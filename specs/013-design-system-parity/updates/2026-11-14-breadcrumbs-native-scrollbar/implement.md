# Implement — Breadcrumbs narrow-path scrollbar

- Added `packages/vue/src/components/breadcrumbs.css`, imported by the package entry. The selectors hide scrollbar chrome only on `.norato-breadcrumbs__list`; the existing `overflow-x: auto` remains authoritative.
- Updated the component contract, Figma component rules, Breadcrumbs DoD, request-validation checklist, and error log.
- Fresh local browser render confirms no visible scrollbar chrome in the available narrow view; horizontal scrolling still moves the trail. The expanded disclosure exposes three hidden links, Space closes it, and Tab reaches the next visible link. RTL and left-pointing separators remain.
- `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- Still open: exact post-change 390px/320px bounding boxes, a matched-size screenshot pair, and independent screen-reader review. This correction does not close the family DoD.
