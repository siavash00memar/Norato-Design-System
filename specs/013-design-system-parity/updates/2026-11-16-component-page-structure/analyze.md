# Component Page Structure — Analyze

## Findings

- The existing catalog checker confirms required headings exist, but does not compare their order.
- Manual source audit found all 49 contracts currently begin with the required ten headings in exact order.
- `App.vue` uses one shared detail template: the preview and conditional implementation precede the contract sections rendered from the parsed contract list. The on-page navigation uses the same section list.
- The implementation template contains a duplicate `Chip` playground branch. The second branch is unreachable and does not change the current render, but it is dead routing markup and the current integrity check does not detect duplicates.

## Design

Extend the existing catalog integrity check to compare each contract's first ten headings to the canonical Button sequence, assert the shared detail anchors occur in order, and reject duplicate named playground branches. Remove only the extra Chip branch. Keep the visual renderer and component APIs unchanged.

## Risk

The catalog checker is source-pattern based rather than a Vue compiler AST. Keep these assertions narrow to stable named section anchors and playground conditional syntax; the Vue typecheck/build remains the parser and compilation gate.
