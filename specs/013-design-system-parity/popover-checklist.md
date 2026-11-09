# Popover Definition of Done

## Visual

- [x] Button-style page structure: static preview, live playground, usage example, and nine contract sections.
- [x] Norato palette, shared dotted preview frame, Persian RTL arrangement, and trigger focus styling reviewed in the browser.
- [x] Four physical placements and attached arrow checked: bottom, top, right, and left.
- [x] Simple, actions, and form variants rendered; after importing the playground stylesheet, the live control row, switches, field and actions render with Norato styling.
- [x] Source review confirms the panel width is capped at 320px and available viewport width, block size is capped, and overflow is scrollable. This is code evidence only; it does not count as a mobile browser screenshot.
- [x] Captured the reference and Norato pages at 390×844 and 320×640. Local frames measure 343×288 and 273×288px; reference frames measure 327×300 and 257×300px. The Norato docs column is 16px wider, while its shared preview frame stays at the 288px standard height.
- [x] At 320px the reference document extends to 326px; Norato remains 305px wide. Static specimen panel stays inside the frame (240px at 390; 231px at 320) with no clipping.
- [x] Live Popover long content stays inside the viewport and scrolls inside the body. Horizontal placement requests fall back to bottom at ≤840px, preventing the panel from covering its trigger; vertical collision flips within viewport bounds.

## Behavior and accessibility

- [x] Trigger opens/closes the popover; default outside click closes it.
- [x] Escape closes it and returns focus to its trigger.
- [x] Disabled trigger stays closed and is exposed as disabled.
- [x] Modal mode opened and closed with Escape; default non-modal mode keeps the page interactive.
- [x] Form receives initial focus in the email field; sample submission reports local feedback and closes; cancel closes.
- [x] Actions variant exposes copy and close actions. Copy action was not activated to preserve the user's clipboard.
- [x] Browser accessibility tree exposes trigger expanded state, dialog name/description, form field and actions.
- [x] Default outside click and Escape dismissal close the panel; modal mode also closes with Escape.
- [x] Non-modal Tab exits after the last panel action and dismisses the panel; modal Tab remains in and loops through panel actions.
- [x] Long-content scrolling and LTR direction were verified at 390×844 and 320×640, including mobile side-placement fallback and vertical collision.
- [ ] Independent screen-reader announcement review remains unverified.

## Technical gates

- [x] `pnpm check:tokens`
- [x] `pnpm check:catalog`
- [x] Vue TypeScript validation and production build
- [x] Repository scan for forbidden reference-brand text
- [x] `git diff --check` (only line-ending normalization warnings)

Production build succeeds; Vite reports the pre-existing JavaScript chunk size advisory (1,238.40 kB minified).

Popover remains in progress until the independent screen-reader review is complete.
