# Checklist — Select mobile navigation clearance

- [x] Evidence captured: 320×844 popup bottom at y=834; navigation top at y=787.
- [x] Existing semantic clearance chosen: target-min + space-6.
- [x] CSS uses a flexible scrollable option row and mobile-only bounded height.
- [x] At 320×844, popup ends y=762 with nav at y=788; manual scroll shows the final disabled option.
- [x] Escape closes the popup and returns focus to the trigger; AX confirms groups/selected/disabled options and RTL.
- [ ] Exact 390×844 and desktop browser comparison remain unverified in the available viewport.
- [x] Token/catalog/typecheck/build/diff gates and request checklist pass; Select family DoD remains open.
