# Alert — Feature Specification

## Goal
Provide a reusable Vue 3 Norato Alert adapter matching Lemon's in-page message composition while using Norato tokens and its own palette.

## Scope
- Twenty visual combinations: `tone` info/success/warning/danger/neutral × `variant` soft/glass × `layout` inline/expanded.
- RTL-first icon placement on the inline end; optional dismiss action at the inline start.
- Inline concise message and Expanded title, description, optional action slot.
- Controlled visibility via `modelValue` and `update:modelValue` when dismissible; otherwise render persistently.
- Use semantic live regions: danger uses `role="alert"`; other tones use `role="status"` unless caller supplies a documented override.
- Inert specimen, interactive playground and Button-structured nine-section component documentation.

## Out of scope
Toast timing/queue behavior, automatic dismissal, and product-specific navigation. Caller supplies action content.

## Acceptance
- Composition follows Lemon's alert anatomy and visual density, but all colors, radii, typography and spacing resolve to semantic Norato tokens.
- No stretched icons or rows; responsive layout must wrap actions and description without horizontal overflow.
- Dismiss button is at least 48×48px and named; severity is conveyed by text and icon as well as color.
- Keyboard, screen-reader role, RTL placement, all 20 variants, 390px and 320px widths, and all required repo gates are checked before DoD closure.
