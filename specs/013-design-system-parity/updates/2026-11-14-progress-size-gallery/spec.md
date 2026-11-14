# Progress Sizes Gallery — Specification

## Scope

Recompose the inert Progress Sizes gallery in the existing Button-structured page.

## Acceptance contract

- Use one dotted, softly tinted stage matching the reference's 636×134.125px desktop composition.
- Show three size cards. Each card pairs its Linear and Circular sample, preserving tokenized 4/8/12px linear thicknesses and 24/32/40px circular diameters, with the size and both measurements visible.
- Keep markers intrinsic, Norato yellow, RTL, inert, and hidden from the accessibility tree.
- At 390px, keep three cards in one row; at 320px, wrap to two cards plus one centered card. Prevent document overflow or clipping; markers remain intrinsic.
- Do not change the live adapter, playground, other sections, or component API.
