# Analyze — Sidebar specimen parity

## Evidence

- At local 1280×720 CSS viewport, the Sidebar's inner dotted stage measured 605.98×300px because the generic specimen shell added 12px padding on each side. The selected reference stage measured 636×311.5px at the same browser width; the project explicitly standardizes this frame at Button's 636×300px.
- Local static panel measured 220×216px. The reference panel measured 216×221.94px.
- Local specimen adds a workspace label and user footer not present in the reference's compact brand + group title + four-row composition.
- Current frame and panel sizes come from Sidebar tokens; CSS is dedicated to the inert specimen. This can be corrected without changing the live adapter.

## Decision

Reuse the shared Button specimen class and its 636×300px frame. Remove only Sidebar's nested stage padding/background, target a 216×222px panel through semantic tokens, and simplify the inert markup. Keep the active surface in Norato yellow. Validate actual rendered geometry before recording completion.

## Verification

- Browser at 1280×720 CSS px: local frame 635.98×300px and panel 216×222px; document width 1265/1265px.
- Browser at 390×844: frame 327×300px, panel 216×222px, document 375/375px.
- Browser at 320×844: frame 257×300px, panel 216×222px, document 305/305px.
- `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --filter @norato/vue-app typecheck`, `pnpm --filter @norato/vue-app build`, and `git diff --check` pass.
