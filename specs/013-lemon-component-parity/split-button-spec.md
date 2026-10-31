# Split Button — component acceptance contract

Source: `https://lemonui.ir/#split-button`, inspected 2026-10-31; Norato contract: `docs/component-contracts/split-button.md`. Governing constitution is v1.2.0 as recorded in the parent feature.

## Purpose and anatomy

Pair a direct primary action with a left-side menu toggle and related alternatives. The parts are Main Action, one divider, Menu Toggle, and an Action Menu aligned to the toggle's left edge. Dropdown-only mode has no direct action.

## Variants and state

Primary uses Norato yellow, Secondary uses a yellow border, Destructive uses the error token. The visual-only reference also lists Tertiary for dropdown mode. Runtime state must include closed/open, disabled, loading, focus, and hover. The trigger arrow rotates upward when open. The two buttons retain independent focus targets of at least 48px.

## Interaction and accessibility

- Main click emits the default action; toggle click opens related actions.
- Escape closes the menu and restores toggle focus. ArrowDown opens and focuses the first item; ArrowUp may focus the last. Home/End navigate menu items. Outside click closes the menu.
- Menu items are real buttons with separate keyboard targets. `aria-expanded`, `aria-controls`, and an accessible toggle label reflect state.
- Keep the menu under the toggle and aligned to its left physical edge in RTL. No horizontal overflow at mobile width.

## Source and policy differences

Lemon uses a dark main button; Norato's approved primary is yellow. Lemon lists 32/40px small sizes; Norato's 48px minimum target prevails for runtime interaction. For Small and Medium, draw the 32/40px capsule inside two 48px native button targets, centered vertically. Large uses a 48px capsule/target; XLarge uses a 56px capsule/target. The visual divider follows capsule height and must not enlarge the target.
