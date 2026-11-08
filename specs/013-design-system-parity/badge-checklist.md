# Badge — Checklist / Definition of Done

## Contract and implementation
- [x] Public Vue adapter, typed props and accessible scoped anchor slot are exported and match the contract.
- [x] Button-shaped page includes inert Preview, live Playground, copyable Vue usage and nine contract sections.
- [x] Generic legacy Badge specimen is removed or neutralized; no duplicate/undocumented CSS layer remains.

## Visual and responsive
- [x] design reference/Norato preview composition reviewed at the same 1265×720 viewport. The dotted specimen geometry is similar; local content width is 576×288px versus design reference 636×300px due to their different documentation columns.
- [x] All 16 type × size × tone combinations reviewed in the live playground. After the Neutral tone contrast correction, Count and Dot Neutral were rechecked at Medium; after the long-count geometry correction, Small Count at 100→99+ was rechecked for horizontal expansion.
- [x] RTL Badge sits at physical top-left; LTR mirrors at top-right; CSS uses a 2px surface ring.
- [x] Small/Medium markers use 16/20px minimum Count and exact 8/10px Dot tokens inclusive of their ring; longer Count text grows horizontally; the anchor button measures 48×48px by token.
- [x] Narrow local browser rendering showed no horizontal page overflow at its available 484px view; exact 390px/320px measurements were not available in this browser session.

## Behavior and accessibility
- [x] Count 0, ordinary count, 99 boundary and 100→99+ render correctly; Dot ignores count.
- [x] Anchor's slot-provided accessible name includes the marker meaning; visible Badge is hidden from the accessibility tree.
- [x] Anchor keyboard/focus/disabled behavior remains owned by host: keyboard focus is visible, native disabled is exposed and skipped by Tab.
- [x] Browser accessibility tree reviewed; independent screen-reader testing remains explicitly open.

## Engineering
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- [x] Request-validation checklist, contract, Figma component rules and error log reflect observed results and residuals.
