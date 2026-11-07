# Combobox — Clarify Gate

## Confirmed decisions

- Lemon Combobox at `https://lemonui.ir/#combobox` is the visual benchmark.
- Keep the Norato color palette and RTL as defaults.
- Preserve the current Vue 3 adapter contract: single/multiple, sizes, label placement, clear, recent, loading, empty and create-new.
- The existing contract describes a 48px interactive floor in Norato, even where Lemon's visual scale lists 32px/40px.

## Unresolved decisions

None for this audit. It verifies existing behavior and visual parity without expanding the API.

**Clarify gate: passed.**

## Cross-component Input visual contract follow-up (2026-11-08)

- The user's latest Input rule applies to Combobox text entry as well: a 36px visible capsule inside a minimum 48px interactive target, Estedad Bold label, RTL 12px Vazirmatn Light placeholder in `#a1a1a1`, neutral 1px `#e8e8e8` stroke, and a single 1px Norato-yellow field stroke on hover/focus.
- Independent action controls keep their own keyboard focus indicator; the field itself must not add a blue/black outer halo or outline.
- Preserve Combobox menu, value, size, label placement and state APIs. Text entry remains RTL by default; the text area sizing rule does not apply to this single-line control.
- This is a visual correction to the existing adapter, not an API expansion.

**Decision source:** latest explicit user-approved cross-component Input styling. This supersedes the older Combobox blue focus-ring note below/in historical evidence.
