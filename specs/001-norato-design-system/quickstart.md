# Norato Plan Validation Quickstart

This guide validates the design-system foundation after implementation. It is intentionally
framework-neutral and does not prescribe application code.

## Prerequisites

- Approved specification, plan, tasks, and analysis artifacts.
- A browser capable of RTL rendering and keyboard navigation.
- Representative Persian content, including long labels and mixed Persian/Latin text.
- Vue, Next.js, and plain HTML/CSS validation fixtures when adapters are implemented.

## Validation scenarios

1. Load the token fixture in Light Mode and confirm semantic colors, typography, spacing, shape,
   motion, direction, and layout tokens resolve without raw component hex values.
2. Render representative components at Compact, Medium, Expanded, Large, and Extra Large widths.
3. Repeat with keyboard navigation, visible focus, browser zoom, and long Persian labels.
4. Verify form fields expose labels, helper/error text, recoverable validation, and preserved input.
5. Verify loading, disabled, pressed, selected, success, empty, and error states where applicable.
6. Compare Vue, Next.js, and HTML/CSS fixtures for contract parity, not framework-specific markup.
7. Run contrast checks for text, focus indicators, borders, semantic states, and non-color state cues.
8. Run reduced-motion checks and confirm no essential information depends on animation.

## Expected outcomes

- All applicable checks pass with traceability to `spec.md`, a component contract, and a token.
- No undocumented token, arbitrary spacing, raw component color, or page-specific shared component is
  introduced.
- Any deviation is recorded as a decision or error before implementation continues.
