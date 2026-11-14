# Progress gallery — Acceptance specification

## Request

Replace generic blue control illustrations in Progress Sizes/States with accurate, compact examples derived from the Progress contract.

## Acceptance

- Linear size examples use the three documented semantic thickness tokens; circular examples use their three documented diameter tokens.
- Determinate States shows a bounded RTL progress rail with Norato-yellow fill; Tone shows Default/Success/Warning/Danger using semantic tokens.
- Indeterminate is described as unsupported by this API and directs unknown-duration work to Spinner without drawing a false Progress state.
- No generic blue mark, stretch, overflow or live adapter behavior change.
