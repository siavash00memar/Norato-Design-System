# Tooltip — Clarify

- Visual source: user-approved design reference `design reference (observed 2026-11-08).
- No material product decision is unresolved. Use installed Reka Tooltip rather than a custom hover implementation.
- Rich action in design reference is a visual affordance only; honor design reference's instruction not to put links/forms in simple Tooltip. Keep Tooltip content noninteractive; any action belongs on the trigger/host.
- Position API is physical placement top/bottom/right/left; direction remains RTL. Reka collision flips are allowed, and the resolved side is exposed to styles.
- Tooltip content is not dismissible by click and contains no close button. Escape and loss of trigger/content hover or focus dismiss it through Reka.
