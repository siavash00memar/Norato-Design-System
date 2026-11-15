# Component Page Structure — Specification

## Scope

Keep all 49 component detail pages aligned with the canonical Button documentation structure and catch future order drift in the existing catalog integrity gate.

## Acceptance contract

- Each independent contract begins with these ten headings, in this exact order: Preview, Overview, Anatomy, Variants, Sizes, States, Parts, Usage, Accessibility, Tokens. Additional component-specific headings may follow Tokens.
- The shared Vue detail renderer keeps Preview before the optional Vue implementation section, followed by those nine canonical contract sections in source order.
- Each component can resolve to at most one named playground branch in the detail-page renderer.
- The integrity gate reports the component or contract when an order/duplicate violation occurs.
- No visual or component-runtime behavior changes are introduced by this guard.
