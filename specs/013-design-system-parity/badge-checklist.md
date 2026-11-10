# Badge — Checklist / Definition of Done

## Contract and implementation
- [x] Public Vue adapter, typed props and accessible scoped anchor slot are exported and match the contract.
- [x] Button-shaped page includes inert Preview, live Playground, copyable Vue usage and nine contract sections.
- [x] Generic legacy Badge specimen is removed or neutralized; no duplicate/undocumented CSS layer remains.

## Visual and responsive
- [x] Matched 1265×720 comparison: the Norato specimen frame is 631.98×300px and the selected reference frame is 636×300px; the height is exact and width differs by 4.02px.
- [x] All 16 type × size × tone combinations reviewed in the live playground. After the Neutral tone contrast correction, Count and Dot Neutral were rechecked at Medium; after the long-count geometry correction, Small Count at 100→99+ was rechecked for horizontal expansion.
- [x] RTL Badge sits at physical top-left; LTR mirrors at top-right; CSS uses a 2px surface ring.
- [x] Small/Medium markers use 16/20px minimum Count and exact 8/10px Dot tokens inclusive of their ring; longer Count text grows horizontally; the anchor button measures 48×48px by token.
- [x] Exact 390×844 comparison: local and reference specimen frames both measure 327×300px at x=24px; document width is 375px in both, with no horizontal overflow.
- [x] Exact 320×844 comparison: local and reference specimen frames both measure 257×300px at x=24px. Norato document width is 305px with no overflow; reference document width is 326px (6px wider than the viewport). RTL is preserved.

## Behavior and accessibility
- [x] Count 0, ordinary count, 99 boundary and 100→99+ render correctly; Dot ignores count.
- [x] Anchor's slot-provided accessible name includes the marker meaning; visible Badge is hidden from the accessibility tree.
- [x] Anchor keyboard/focus/disabled behavior remains owned by host: keyboard focus is visible, native disabled is exposed and skipped by Tab.
- [x] Browser accessibility tree reviewed; the host control exposes its name, focus and disabled semantics.

- [ ] Independent screen-reader review remains open; the desktop and mobile visual checks do not replace it.

## Engineering
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- [x] Request-validation checklist, contract, Figma component rules and error log reflect observed results and residuals.

## Baseline visual re-audit — 2026-11-10

- [x] Fresh matched desktop browser renders show the Badge marker anchored at the same corner of the icon button in local and reference specimens; the glyph remains intrinsic and the specimen has no visible stretch.
- [x] Existing exact 390×844 and 320×844 local/reference geometry, RTL, no-overflow observations, 48×48px host target, count boundaries, and keyboard/focus/disabled evidence cover the remaining Baseline gates.
- [ ] Independent screen-reader review remains open for Final DoD.
