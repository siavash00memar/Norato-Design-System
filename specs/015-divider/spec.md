# Divider — Specify

## User need
Authors need a compact, consistent way to separate adjacent content groups without inserting controls or losing RTL-aware label placement.

## Scope
Deliver a public Vue 3 `NoratoDivider`, an inert 640×288 Button-style dotted specimen, a separate interactive playground with generated/copyable usage, package export, catalog entry, primitive decision, and a complete independent Divider contract page.

## User scenarios
1. A developer separates content with a subtle horizontal line that expands only along the inline axis.
2. A developer places a Persian «یا» label at the center or inline-start of a horizontal divider.
3. A developer uses a vertical separator between inline content and chooses subtle/strong tone and 0/4/8px logical spacing.
4. A developer marks a divider decorative (default) or supplies an accessible label for a semantic separator.

## Functional requirements
- FR-001: Provide controlled props `orientation: horizontal|vertical` (default horizontal), `type: line|label-center|label-start` (default line), `spacing: 0|4|8` (default 8), `tone: subtle|strong` (default subtle), `label`, and `decorative` (default true).
- FR-002: Render an intrinsic 1px CSS rule using semantic border tokens. Subtle uses border-default; strong uses border-strong.
- FR-003: Horizontal dividers use full available inline size and never gain unintended block size. Vertical dividers use 1px inline size and stretch only when a host gives them a bounded block size; otherwise use a documented intrinsic fallback.
- FR-004: Labeled variants visibly render the label between two rule segments; Label Start anchors to inline-start and respects `dir=rtl|ltr`.
- FR-005: Spacing maps to 0/4/8px along the perpendicular logical axis (block for horizontal, inline for vertical) and uses existing Norato spacing tokens.
- FR-006: Decorative mode removes the separator from the accessibility tree. Semantic mode exposes `role=separator`, the correct orientation, and a localized accessible name when provided.
- FR-007: Do not create keyboard, focus, hover, disabled, loading, or validation behavior for this noninteractive component.
- FR-008: The page has a bounded inert preview followed by a distinct live playground, copyable source, and all contract sections in the same order as Button.

## Non-functional requirements
- Persian and RTL are defaults. Typography uses Vazirmatn for the visible label.
- All geometry remains intrinsic and does not distort when parent dimensions change.
- No page-local raw color or spacing values; component CSS consumes Norato tokens.
- Preserve responsive width and avoid horizontal overflow at 390px and 320px viewport widths.

## Success criteria
- SC-001: All 12 combinations of orientation × type × tone render without console/runtime errors; spacing is independently configurable at 0, 4 and 8.
- SC-002: Browser-measured horizontal rule thickness and vertical rule width are exactly 1 CSS px; horizontal component height stays content-driven (one line) and no 288px preview-frame height leaks into the control.
- SC-003: RTL Label Start appears at the right; LTR Label Start appears at the left.
- SC-004: Accessibility tree reports no decorative separator and reports orientation/name for semantic mode.
- SC-005: Desktop and mobile same-viewport composition is reviewed against design reference; Norato token differences are documented.
- SC-006: Token/catalog checks, Vue typecheck/build and `git diff --check` pass.

## Assumptions
- The 12 named variants count orientation × type × tone (2×3×2); spacing is an independent dimension, consistent with design reference's own 12-variant statement.
- The project's 640×288 preview frame is shared with Button/Split Button. It is specimen framing only; it must not set the adapter height.
- No clarifying decision remains because this component is noninteractive and the repository's approved delegation asks the assistant to choose defaults where appropriate.

**Gate:** User value, measurable outcomes, scope and assumptions recorded. Proceed to Clarify.
