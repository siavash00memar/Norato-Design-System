# Drawer — Definition of Done

## Visual parity

- [x] Button-style documentation page includes an inert specimen, live playground, copyable Vue sample and component contract.
- [x] Same-window 1265×713 comparison: outer frames are 628×324px locally and 629×322px in the reference; the right-side panels are 234×234px and 234×232px. The default RTL panel stays on the physical right edge with only the inner left corners rounded. The static specimen's frame and panel now closely match in desktop proportions.
- [x] Live left-side panel renders on the physical left with only its inner right corners rounded. Bottom Sheet occupies the bottom edge and shows its decorative handle.
- [x] Wired the playground stylesheet into the page; it had not been imported, leaving the controls unformatted and the fieldset in browser-default styling. Removed the fieldset border treatment while keeping semantic field grouping.
- [x] Compared the responsive experience at 390px and 320px. Side panels and all three bottom detents stayed within the viewport; document width matched the viewport.
- [x] Reviewed all three side sizes at desktop and auto/half/full Bottom Sheet detents. The panels stay within their expected width/height and content does not stretch to fill unused space.
- [x] Complete visual focus/hover review at 390×844 for the close button, checked and unchecked checkboxes, and Secondary/Primary actions. Real pointer hover confirms: close and Secondary use the yellow warning container; both checkbox states receive the brand-yellow Stroke; Primary retains its yellow surface. Keyboard Tab reaches every dialog control; each exposes `:focus-visible` with a 2px brand-yellow outline and no extra shadow. Focus wraps back to the first filter control.
- [ ] Fresh 390/320px visual measurement after the static panel width/bottom inset refinement remains open; prior responsive behavior and viewport-fit checks are retained.
- [x] Side/detent geometry was checked separately at desktop and 390/320px; the shared visual interaction rules remain consistent across the panel placements.
- [x] Long content scrolls inside the panel at all Bottom Sheet detents at 390px and 320px without clipping or horizontal overflow.

## Behavior and accessibility

- [x] Default right-side panel opens. Left side selection opens at the left edge. Escape closes the panel and restores focus to the trigger.
- [x] Bottom side opens as a sheet with a visible decorative handle; its filter controls and actions are reachable.
- [x] Default outside click dismisses. `dismissible=false` prevents Escape and outside-click dismissal while the explicit close button still works. Selecting a filter and applying it closes the panel.
- [x] Verified each filter independently; clear-filters resets both options, leaves the drawer open and announces completion. Apply announces completion and closes the drawer.
- [x] Confirmed the live panel exposes `role="dialog"`, `aria-modal="true"`, and title/description references; Tab remains within the dialog across close, filters and actions. LTR direction reaches both drawer and checkbox adapters.
- [ ] Independent screen-reader review remains unverified.
- [x] Reduced-motion browser emulation at 390×844: Chromium reported `prefers-reduced-motion: reduce`; the right-side panel opened as an RTL modal dialog, 374px wide and flush with the viewport edge, with document width matching the viewport. Focus entered the dialog; panel and overlay computed styles had `transition: none` and `animation-name: none`; the close action closed it. The isolated browser target was closed afterward.
- [x] Verified tall-content scroll containment at 390px and 320px for all Bottom Sheet detents. Desktop size/detent dimensions remain within viewport.

## Technical and delivery gates

- [x] `pnpm check:tokens` and `pnpm check:catalog` pass.
- [x] Vue typecheck and production build pass.
- [x] Repository scan has no prohibited reference-brand text.
- [x] `git diff --check` passes; commit and push are tracked at handoff.

Do not mark Drawer complete until every required check above is closed or explicitly accepted as a documented limitation.
