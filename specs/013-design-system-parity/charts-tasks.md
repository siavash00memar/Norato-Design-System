# Charts — Tasks

- [x] Constitution: define brand, direction, fidelity, data, and access rules.
- [x] Specify: define the four-component Vue family and 14 variants.
- [x] Clarify: record decisions for rendering, series palette, interactions, invalid data, and actions.
- [x] Plan: sequence tokens, APIs, specimen, playground, docs, QA, and delivery.
- [x] Checklist: set DoD before implementation.
- [x] Tasks: track concrete implementation/evidence work below.
- [x] Analyze: audit tokens, catalog/page wiring, legacy CSS, dependencies, and design reference source.
- [x] Implement and verify the family; independent screen-reader review remains open, so do not close DoD yet.

## Implementation tasks
- [x] Add fixed semantic palette tokens for chart series 1–8 and token schema entries.
- [x] Add typed Vue 3 adapters and safe SVG geometry for all six chart types.
- [x] Implement Stat Tile trends, Legend Item 1–4, and accessible dark Tooltip.
- [x] Add accessible summary/table alternative and invalid-data handling.
- [x] Replace legacy `.sample-chart` with reusable adapter; remove its selectors after audit.
- [x] Add playground for 14 variants, direction, keyboard/focus and responsive review.
- [x] Wire index, example, catalog, contract and Figma rules without marking DoD complete prematurely.
- [x] Run required engineering gates; browser-check design reference parity, all variants, RTL/LTR and responsive widths.
- [x] Record final results/defects, commit `c9b2344`, push, and verify remote revision against `origin/master`.
- [x] Follow-up 2026-11-09: replace the undefined chart typography token and reserve axis headroom for exact-ceiling maxima; add the regression check and rerun the browser/engineering gates.
