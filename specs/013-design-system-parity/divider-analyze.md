# Divider — Analyze

## Evidence

- On cold navigation, the async specimen fallback showed its generic 128×36px pill while the actual Divider chunk loaded. That loading shape was misleading for this static component.
- The loaded Divider already rendered a continuous one-pixel rule at 320px; the matched desktop reference uses a 360px rule. Mobile reference measurements stay near 320px.
- The adapter CSS left plain horizontal root height implicit, and the family loading placeholder used a generic pill. Keep the public API unchanged; give the actual plain rule explicit one-pixel geometry and make the fallback use the same horizontal rule at desktop/mobile token widths.

## Decision

Make the plain horizontal root and its rule explicitly one tokenized pixel high, and make the specimen and cold-load placeholder resolve up to 360px on desktop and 320px on mobile. Avoid touching label, vertical, semantic, or palette behavior unless browser verification identifies a regression.
