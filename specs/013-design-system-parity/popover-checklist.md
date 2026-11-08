# Popover Definition of Done

## Visual

- [x] Button-style page structure: static preview, live playground, usage example, and nine contract sections.
- [x] Norato palette, shared dotted preview frame, Persian RTL arrangement, and trigger focus styling reviewed in the browser.
- [x] Four physical placements and attached arrow checked: bottom, top, right, and left.
- [x] Simple, actions, and form variants rendered; after importing the playground stylesheet, the live control row, switches, field and actions render with Norato styling.
- [ ] Capture and compare exact 390px and 320px viewports with the design reference.
- [ ] Review narrow viewport collision handling and ensure panel content never clips or stretches.

## Behavior and accessibility

- [x] Trigger opens/closes the popover; default outside click closes it.
- [x] Escape closes it and returns focus to its trigger.
- [x] Disabled trigger stays closed and is exposed as disabled.
- [x] Modal mode opened and closed with Escape; default non-modal mode keeps the page interactive.
- [x] Form receives initial focus in the email field; sample submission reports local feedback and closes; cancel closes.
- [x] Actions variant exposes copy and close actions. Copy action was not activated to preserve the user's clipboard.
- [x] Browser accessibility tree exposes trigger expanded state, dialog name/description, form field and actions.
- [x] Default outside click and Escape dismissal close the panel; modal mode also closes with Escape.
- [ ] Check Tab exit/containment behavior in modal and non-modal modes. This adapter has no `dismissible` option, so the component contract does not require a locked-open state.
- [ ] Check long-content scrolling, LTR placement, and screen-reader announcements with an independent screen reader.

## Technical gates

- [x] `pnpm check:tokens`
- [x] `pnpm check:catalog`
- [x] Vue TypeScript validation and production build
- [x] Repository scan for forbidden reference-brand text
- [x] `git diff --check` (only line-ending normalization warnings)

Production build succeeds; Vite reports the pre-existing JavaScript chunk size advisory (1,238.40 kB minified).

Popover remains in progress until the applicable open items are reviewed.
