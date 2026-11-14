# Analyze — Shared implementation marker text color

- Evidence: local Split Button Usage shows green Do, red Avoid and yellow RTL markers. The implementation/API marker has a neutral surface but its glyph remains green. Shared CSS sets green text on the base `.usage-indicator`; `.usage-is-implementation` overrides only background. Chip browser review also confirms neutral Accessibility tiles and yellow RTL marker positioning.
- Root cause: missing `color` override in the implementation modifier, not a family-specific selector.
- Decision: add `--norato-color-text-secondary` to that one modifier. Leave Anatomy badges and other yellow or semantic markers unchanged.
- Risk: the shared selector applies across component pages; recheck a representative page with Do, Avoid, RTL and implementation entries after the change.
