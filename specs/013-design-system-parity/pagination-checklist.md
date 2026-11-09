# Pagination — DoD

- [x] Desktop visual comparison (2026-11-09) after specimen geometry change: at the same 1920×1080 browser viewport, the local preview now uses the centered dotted glass frame, a 288px frame height, and the Norato yellow selected page; the default outlined circles around specimen arrows were removed. The reference frame is about 630px wide and local available content constrains it to about 580px, with no visible stretch.
- [ ] Recheck frame width and overflow at 390px/320px after the frame change; mobile visual comparison remains open.
- [x] Live browser exercised all four Numbers/Simple × Small/Medium combinations. Page selection, generated Vue usage, selected state and Simple summary stayed in sync. The 1, 7, 8 and 12 page totals were inspected; at 1/1 both Simple controls disabled, at page 1/12 Previous disabled and Next enabled, and at page 8/8 Next disabled. Numbers mode showed the bounded window and ellipsis for page 8/8.
- [ ] Additional very large/irregular totals and independent screen-reader review remain open.
- [x] Prior live-browser evidence confirms RTL layout, keyboard focus ring (2px), 48px live targets, mobile Simple mode without document overflow, and Numbers mode with internal scrolling. This specimen-only change was also rechecked in the desktop browser.
- [x] Button-style page, controlled adapter, copyable snippet, catalog, export, primitive map and nine-section contract are present and agree.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck and production build pass after the final code edits; build retains the known large-chunk advisory. `git diff --check` is recorded in the shared request checklist.
- [ ] Independent screen-reader review and very large/irregular total edge cases remain open; maturity stays Adapted.
- [x] Live Simple-mode boundary check: selecting page 1 disabled Previous and kept Next enabled; the status announced page 1 of 12. A11y names now remain “رفتن به صفحهٔ قبلی/بعدی” at boundaries instead of announcing page 0 or 13.
- [x] After the accessible-name fix, browser AX confirmed the Numbers Previous control at page 1 is disabled and named “رفتن به صفحهٔ قبلی”; the fixture was restored to page 3 of 12, Numbers, Medium.
