# Specify — Empty State preview frame alignment

## Goal

Align the Empty State inert specimen frame with its measured desktop design reference without changing the Empty State content, adapter behavior, or mobile sizing.

## Acceptance criteria

- At a matched 1920×903 browser window, Norato frame width is 636px and height is 300px, matching the reference.
- The adjustment uses existing semantic spacing/frame tokens and is scoped to the Empty State specimen at desktop breakpoints.
- The specimen remains centered and keeps its intrinsic content dimensions; no stretch is introduced.
- At 390px and 320px, the current mobile frame rule and no-overflow behavior remain unchanged.
- Token/catalog, TypeScript, build, browser-validation checklist, and diff checks pass.

## Out of scope

- Live Empty State API, visuals, actions, state semantics, or component copy.
- Other component preview widths.
