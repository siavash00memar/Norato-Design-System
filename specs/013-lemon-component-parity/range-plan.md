# Range — implementation plan

1. Inspect and neutralize the legacy `.sample-range` selectors before visual changes; retain token semantics.
2. Build `NoratoRange` from installed Reka SliderRoot/Track/Range/Thumb primitives with controlled single/range values and explicit RTL.
3. Keep visual thumb compact but give each thumb a 48px hit target; physically center the visible knob within that target in RTL, display current value above the thumb, and min/max below. Place the dark/yellow keyboard focus ring on the visible knob. Add disabled/error semantics.
4. Add inert source-shaped preview and an interactive Vue playground with type, size, disabled and value controls; connect catalog, export, copyable usage, primitive map, contract and page.
5. Compare exact Lemon page and Norato at desktop and 390px mobile. Measure track, thumbs, specimen frame, overflow and target boxes; exercise pointer/keyboard, single/range, RTL, focus, disabled, error and accessibility tree.
6. Complete range-checklist and request-validation evidence, update `range-analyze.md`/error log, run token/catalog/TypeScript/build checks and only then advance maturity.

Shadcn evaluation: use the Vue Reka Slider primitives already installed, rather than a custom pointer/keyboard slider; style with Norato tokens. Avoid a second slider implementation or dependency.

## Screenshot correction — 2026-11-02

1. Audit the full Range block and remove every legacy `thumb::before` selector and duplicated override; keep one canonical rule for each Range part/state.
2. Keep Reka's track fill; center the visual knob on its 48px target and let the fill boundary terminate at that center without drawing a second pseudo-track.
3. Scope muted thumb/fill colors to the disabled state; restore default surface fill and dark stroke.
4. Inspect runtime and inert specimen at 380px and 1280px with values 0/52/100, default/disabled and keyboard focus; confirm boundary/center alignment and RTL.
5. Run project technical gates, update DoD/error log, and push.
