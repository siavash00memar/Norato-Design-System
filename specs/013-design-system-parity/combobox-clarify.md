# Combobox — Clarify Gate

## Confirmed decisions

- design reference Combobox at `design reference is the visual benchmark.
- Keep the Norato color palette and RTL as defaults.
- Preserve the current Vue 3 adapter contract: single/multiple, sizes, label placement, clear, recent, loading, empty and create-new.
- The existing contract describes a 48px interactive floor in Norato, even where design reference's visual scale lists 32px/40px.

## Unresolved decisions

None for this audit. It verifies existing behavior and visual parity without expanding the API.

**Clarify gate: passed.**

## Cross-component Input visual contract follow-up (2026-11-08)

- The user's latest Input rule applies to Combobox text entry as well: a 36px visible capsule inside a minimum 48px interactive target, Estedad Bold label, RTL 12px Vazirmatn Light placeholder in `#a1a1a1`, neutral 1px `#e8e8e8` stroke, and a single 1px Norato-yellow field stroke on hover/focus.
- Independent action controls keep their own keyboard focus indicator; the field itself must not add a blue/black outer halo or outline.
- Disabled appearance has priority over an existing validation error: disabled Combobox Stroke stays neutral `#e8e8e8`, and pointer hover does not recolor it. Error Stroke is restored when enabled.
- `aria-activedescendant` may reference an option only while the menu is open; after close the reference is removed, and opening again must restore a valid active option.
- Preserve Combobox menu, value, size, label placement and state APIs. Text entry remains RTL by default; the text area sizing rule does not apply to this single-line control.
- This is a visual correction to the existing adapter, not an API expansion.

**Decision source:** latest explicit user-approved cross-component Input styling. This supersedes the older Combobox blue focus-ring note below/in historical evidence.

## Shared specimen cold-load follow-up (2026-11-09)

- A fresh direct load can render the detail heading and preview note before the asynchronous `ComponentSpecimen` is ready; the first capture may therefore show an empty preview area. The unchanged page displays the specimen on the following capture.
- Preserve the page's actual component preview from first paint. Do not solve this with a Combobox-only style override; the specimen host is shared by all component detail pages.
- Keep the specimen chunk asynchronous to avoid inflating the initial JavaScript bundle. During loading, show an inert Norato-tokenized frame that preserves the detail and compact inventory geometry, then replace it with the real specimen.

**Acceptance:** direct cold loads of Combobox and Button never show an empty specimen region at desktop or narrow widths; the frame placeholder is replaced by the correct specimen, with no horizontal overflow or meaningful frame-height jump.
