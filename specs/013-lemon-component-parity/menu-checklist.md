# Menu — Checklist / Definition of Done

## Contract and page
- [x] Contract, token list, Figma component rule, maturity ledger, usage example and error log reflect the implemented Vue API.
- [x] Catalog export and exact stable route resolve; page uses the same sections/order as Button.
- [x] Preview is inert; runtime playground is independently interactive; code copy matches the actual API.

## Visual
- [x] Compare Lemon and Norato at the same desktop viewport; record frame/panel/row sizes and visible differences.
- [x] Menu is bounded, layered above content and has no unintended clipping or document overflow at 390px; submenu collision placement stays in viewport.
- [x] RTL places icons at right, shortcuts at left and submenu arrow points left; LTR mirrors these.
- [x] Small/Medium/Large sizes differ proportionally without stretching icons; runtime action target is 48px and static visual rows are 36px.
- [x] Norato yellow hover/active accent, neutral default and semantic red danger style are used. Live browser capture confirms the hovered row stays yellow while keyboard focus is on another row; 2px yellow keyboard focus remains distinct.
- [x] Danger action is separated and last; specimen contains four leaf items.

## Behavior and accessibility
- [x] Trigger opens with pointer, exposes expanded state and accessible name. ArrowDown enters menu; Home returns focus to the first item and End reaches the last item.
- [x] Nested menu opens; ArrowRight enters submenu for LTR; menu and item roles/names are exposed, including disabled state.
- [x] Escape closes and restores focus; outside pointer dismisses; Tab closes without trapping focus.
- [x] Leaf selection emits once and closes; selected submenu leaf was observed. Disabled item is exposed disabled and not in roving focus.
- [x] Decorative icons are hidden from assistive technology; no browser-native menu fallback appears.
- [x] No menu-specific animation or transition is added, so reduced-motion preference has no motion to suppress.
- [x] At 390px, no horizontal overflow is visible; open root/submenu fit within the viewport. 320px remains unverified.

## Engineering
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass after the final edits. Build retains the existing 877.63KB JS chunk-size advisory.
- [x] Actual local browser render and interactions are checked; independent screen-reader review is recorded separately.
- [x] No completion claim exceeds the evidence; 320px and independent screen-reader review remain open.
