# Drawer — Definition of Done

## Visual parity

- [x] Button-style documentation page includes an inert specimen, live playground, copyable Vue sample and component contract.
- [x] Compared the desktop specimen to the design reference at the same 1920×900 browser viewport. Local frame is about 580×300px and the reference is about 630×324px because the documentation column is narrower. The initial local specimen incorrectly placed the default RTL panel on the left; corrected it to the physical right edge with only the inner left corners rounded.
- [x] Live left-side panel renders on the physical left with only its inner right corners rounded. Bottom Sheet occupies the bottom edge and shows its decorative handle.
- [x] Wired the playground stylesheet into the page; it had not been imported, leaving the controls unformatted and the fieldset in browser-default styling. Removed the fieldset border treatment while keeping semantic field grouping.
- [x] Compared the responsive experience at 390px and 320px. Side panels and all three bottom detents stayed within the viewport; document width matched the viewport.
- [x] Reviewed all three side sizes at desktop and auto/half/full Bottom Sheet detents. The panels stay within their expected width/height and content does not stretch to fill unused space.
- [ ] Review visual focus/hover states and reduced-motion behavior.
- [x] Long content scrolls inside the panel at all Bottom Sheet detents at 390px and 320px without clipping or horizontal overflow.

## Behavior and accessibility

- [x] Default right-side panel opens. Left side selection opens at the left edge. Escape closes the panel and restores focus to the trigger.
- [x] Bottom side opens as a sheet with a visible decorative handle; its filter controls and actions are reachable.
- [x] Default outside click dismisses. `dismissible=false` prevents Escape and outside-click dismissal while the explicit close button still works. Selecting a filter and applying it closes the panel.
- [x] Verified each filter independently; clear-filters resets both options, leaves the drawer open and announces completion. Apply announces completion and closes the drawer.
- [x] Confirmed the live panel exposes `role="dialog"`, `aria-modal="true"`, and title/description references; Tab remains within the dialog across close, filters and actions. LTR direction reaches both drawer and checkbox adapters.
- [ ] Independent screen-reader review and reduced-motion browser emulation remain unverified.
- [x] Verified tall-content scroll containment at 390px and 320px for all Bottom Sheet detents. Desktop size/detent dimensions remain within viewport.

## Technical and delivery gates

- [x] `pnpm check:tokens` and `pnpm check:catalog` pass.
- [x] Vue typecheck and production build pass.
- [x] Repository scan has no prohibited reference-brand text.
- [x] `git diff --check` passes; commit and push are tracked at handoff.

Do not mark Drawer complete until every required check above is closed or explicitly accepted as a documented limitation.
