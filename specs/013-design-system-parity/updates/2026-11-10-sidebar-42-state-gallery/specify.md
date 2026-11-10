# Specify — Sidebar 42-state visual gallery

## Scope

Render every combination documented in `docs/component-contracts/sidebar.md` inside the Sidebar Variants contract section. The gallery contains 4 Sidebar styles, 20 Item states, 8 Sub Item states, 2 Section Title states, 4 Header states, and 4 Footer states. The separately documented Mobile Trigger/Drawer is not part of this 42-state count.

## Acceptance

- The rendered gallery exposes six labeled groups and exactly 42 individually labeled specimens.
- Combinations match the contract axes: Glass/Bar × expanded/collapsed; Item collapsed × Small/Medium × Default/Hover/Active/Disabled/Focus; Sub Item Small/Medium × Default/Hover/Active/Focus; Section Title collapsed; Header Brand/Workspace × collapsed; Footer User/Card × collapsed.
- Gallery samples are inert and hidden from assistive technology because they are explanatory visuals; playground remains the accessible interactive implementation.
- RTL, Norato semantic tokens, fixed intrinsic icon sizes, and bounded responsive layout are preserved.
- Existing Button-style page sections, live adapter, and Playground behavior remain unchanged.
