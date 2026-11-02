# Switch Toggle Consistency — Clarify Gate

## Decisions

- The latest instruction explicitly sets the checked knob to white and requests no stroke; this supersedes the older dark checked-knob contract.
- “Like the specimen above” means use the same medium track and knob proportions and preserve a 4px inset at both physical ends in RTL.
- Keep the track's existing checked yellow/unchecked neutral palette and its track border; the no-stroke rule applies to the circular knob.
- Apply the rule consistently to the adapter, static Switch variants, and generic playground toggles. Do not alter toggle state behavior or public API.

No material UX/API decision remains unresolved.
