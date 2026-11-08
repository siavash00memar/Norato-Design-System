# Drawer — Definition of Done

## Visual parity

- [x] Button-style documentation page includes an inert specimen, live playground, copyable Vue sample and component contract.
- [x] Compared the desktop specimen to the design reference at the same 1920×900 browser viewport. Local frame is about 580×300px and the reference is about 630×324px because the documentation column is narrower. The initial local specimen incorrectly placed the default RTL panel on the left; corrected it to the physical right edge with only the inner left corners rounded.
- [x] Live left-side panel renders on the physical left with only its inner right corners rounded. Bottom Sheet occupies the bottom edge and shows its decorative handle.
- [x] Wired the playground stylesheet into the page; it had not been imported, leaving the controls unformatted and the fieldset in browser-default styling. Removed the fieldset border treatment while keeping semantic field grouping.
- [ ] Compare the responsive experience at 390px and 320px, including panel widths, Bottom Sheet detents and page overflow.
- [x] Reviewed all three side sizes at desktop and auto/half/full Bottom Sheet detents. The panels stay within their expected width/height and content does not stretch to fill unused space.
- [ ] Review focus/hover states and long-content scrolling for stretching or clipping.

## Behavior and accessibility

- [x] Default right-side panel opens. Left side selection opens at the left edge. Escape closes the panel and restores focus to the trigger.
- [x] Bottom side opens as a sheet with a visible decorative handle; its filter controls and actions are reachable.
- [x] Default outside click dismisses. `dismissible=false` prevents Escape and outside-click dismissal while the explicit close button still works. Selecting a filter and applying it closes the panel.
- [ ] Verify the clear-filters action and every filter control independently.
- [ ] Confirm `dialog` role, accessible title/description, focus containment, keyboard-only order, LTR behavior, reduced motion and independent screen-reader announcements.
- [ ] Verify scroll containment for tall content and all size/detent combinations.

## Technical and delivery gates

- [ ] Token/catalog checks pass.
- [ ] Vue typecheck and production build pass.
- [ ] Repository scan has no prohibited reference-brand text.
- [ ] `git diff --check` passes; commit and push all changes.

Do not mark Drawer complete until every required check above is closed or explicitly accepted as a documented limitation.
