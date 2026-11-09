# Tooltip — Specify

## Scope
One reusable Vue adapter with 16 combinations: Dark/Glass × Simple/Rich × Top/Bottom/Right/Left. Simple renders concise text; Rich renders title, description, and an action-shaped informational affordance only if the reference does not make it interactive. Tooltip content itself remains noninteractive per design reference usage rules.

## Acceptance contract
- design reference 16-variant matrix and a compact Default specimen inside Button's dotted 576×288 preview frame.
- RTL-first. For a collapsed sidebar, prefer left placement; collision logic may flip placement to remain visible.
- Pointer hover and keyboard focus both reveal content; dismiss with pointer leave/blur/Escape, with accessible description relationship.
- Standalone `NoratoTooltip` supplies a default provider; sibling instances can share 500ms delay and 300ms skip-delay through `NoratoTooltipProvider`.
- Use Reka Tooltip primitive, Norato tokens, Estedad title, Vazirmatn body; brand accent/focus is yellow, no design reference blue.
- Never stretch arrow/icon or clip text; responsive viewport collision and reduced motion are respected.
- Page structure mirrors Button: preview, executable Vue API/playground, nine contract sections, usage snippet, source metadata.
- DoD includes browser comparison with design reference, RTL, all variants, keyboard/accessibility, 390/320 and required repository gates.
