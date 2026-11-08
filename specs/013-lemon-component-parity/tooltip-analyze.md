# Tooltip — Analyze

## Evidence
- Lemon Tooltip route (`https://lemonui.ir/#tooltip`) inspected live on 2026-11-08: 16 variants = Dark/Glass × Simple/Rich × Top/Bottom/Right/Left; reference default is a dark compact bubble above an icon-only trigger. RTL collapsed sidebar opens left.
- Lemon anatomy is bubble, short text, arrow; keyboard focus must open it; focus ring is 2px outside the trigger. Essential content should not live only in Tooltip; avoid stacking.
- Installed Reka UI exposes TooltipProvider/Root/Trigger/Portal/Content/Arrow. Provider delay defaults 700ms, skip delay 300ms, and supports ignoreNonKeyboardFocus, disableHoverableContent, disabled. Root supports controlled `open`/`update:open`, `defaultOpen`, per-tooltip delay and disabled. Content inherits Popper placement/collision properties and handles Escape; primitive supplies accessible description relationship.
- Existing `.sample-tooltip` rules use raw dimensionless tokens for a generic dark bubble and lack a Button-sized preview frame, adapter, playground or execution API. No Tooltip-specific semantic tokens exist. Use existing radius, spacing, inverse surface, text, shadow, focus tokens; arrow uses the same surface.
- Reka Tooltip is the correct primitive; no package addition needed.

## Decision and risk
- Reconcile Lemon's Rich visual action with Tooltip semantics: tooltip content must not become a focusable/action region because ARIA tooltip patterns cannot receive focus. Treat any displayed action label as noninteractive context; actual actions remain on the trigger/host. If a future true action is required, use Popover instead.
- Accept a trigger slot as the adaptable child, plus a Playground button trigger. Preserve consumer's semantic trigger and keyboard target; do not create a hidden duplicate.
- Full matched viewport and variant interaction has not yet been executed for Norato; DoD remains open until verified.
