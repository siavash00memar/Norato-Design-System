# Tasks — Notification Center Popover fit

- [x] T001 Reproduce and record the clipped Popover geometry.
- [x] T002 Audit the installed Reka Popper available-height variable and legacy Notification Center selectors.
- [x] T003 Apply collision-aware sizing only to Popover content; add a live direction selector for the existing `dir` API.
- [ ] T004 Finish independent screen-reader coverage and assess fixed-mobile-navigation overlap at 390×1000 initial scroll. Exact 390×844/320×640 layout and no-overflow review plus a real-pointer near-bottom Popover placement pass at 390×1034; Popover keyboard-only open/navigation/activation/close/focus-return passes at 1536×647; Panel keyboard-only open/navigation/activation/close/focus-return passes at 1280×720; 430×676 top-edge/RTL-LTR/Panel regression passed.
- [x] T005 Update DoD, request validation and error log; run required gates and push (`779ba38`; remote parity verified).
