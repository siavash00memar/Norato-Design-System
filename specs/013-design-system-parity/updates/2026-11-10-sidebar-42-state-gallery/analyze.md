# Analyze — Sidebar 42-state visual gallery

- The contract renderer already parses Sidebar Anatomy/Variants/States as text and has dedicated visual galleries for several other components. Sidebar has no `Variants` visualization branch yet.
- `ComponentSpecimen.vue` imports the isolated `sidebar-specimen.css`; placing new selectors there avoids editing shared component controls and existing live Sidebar selectors.
- The contract defines exactly six variant families: 4 + 20 + 8 + 2 + 4 + 4 = 42. The Mobile Trigger/Drawer appears in Anatomy/API/Responsive behavior and is excluded from this count.
- Static miniatures can show visual state differences while remaining `aria-hidden` and `inert`; do not represent focus using actual browser focus or expose undersized samples as controls.
- The acceptance risk is a dense 320px view. Use wrapping family cards and intrinsic icon sizing, then verify document scroll width in the browser before accepting.
