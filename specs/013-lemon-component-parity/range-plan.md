# Range — implementation plan

1. Inspect and neutralize the legacy `.sample-range` selectors before visual changes; retain token semantics.
2. Build `NoratoRange` from installed Reka SliderRoot/Track/Range/Thumb primitives with controlled single/range values and explicit RTL.
3. Keep visual thumb compact but give each thumb a 48px hit target; display current value above the thumb, and min/max below. Add disabled/error/focus semantics.
4. Add inert source-shaped preview and an interactive Vue playground with type, size, disabled and value controls; connect catalog, export, copyable usage, primitive map, contract and page.
5. Compare exact Lemon page and Norato at desktop and 390px mobile. Measure track, thumbs, specimen frame, overflow and target boxes; exercise pointer/keyboard, single/range, RTL, focus, disabled, error and accessibility tree.
6. Complete range-checklist and request-validation evidence, update `range-analyze.md`/error log, run token/catalog/TypeScript/build checks and only then advance maturity.

Shadcn evaluation: use the Vue Reka Slider primitives already installed, rather than a custom pointer/keyboard slider; style with Norato tokens. Avoid a second slider implementation or dependency.
