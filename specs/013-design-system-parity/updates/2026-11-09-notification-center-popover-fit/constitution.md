# Constitution — Notification Center Popover fit

- Keep the Popover inside the actual collision-safe viewport when it opens near the top or bottom edge.
- Preserve the Reka Popover placement, focus management, RTL behavior, and the 48px minimum targets for notification actions.
- Let long notification lists scroll within the Popover; do not compress notification rows to force a fit.
- Use the Popper available-height value exposed by the installed Reka primitive and existing Norato size tokens.
- Do not change the controlled/uncontrolled API or panel presentation.
