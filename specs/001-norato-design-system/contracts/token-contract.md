# Norato Token Contract

## Layers

1. **Reference tokens:** Figma-derived values and Material-derived platform guidance.
2. **Semantic tokens:** roles such as `color-primary`, `color-focus`, `text-primary`,
   `surface-page`, `border-default`, and `space-section-md`.
3. **Component tokens:** values used only inside a component contract.

Components MUST consume semantic or component tokens, never scattered raw hex values.

## Required token families

- Color: brand, neutral, semantic, text, surface, border, focus, disabled.
- Typography: family, weight, size, line-height, letter spacing, direction.
- Spacing: 4-unit base and approved 4/8 rhythm.
- Shape: component-specific radius tokens.
- Elevation: semantic levels only where separation is functional.
- Motion: duration, easing, reduced-motion behavior.
- Layout: adaptive width classes, gutters, readable measure, and container rules.

## Typography records from Figma

- Vazirmatn Bold: 13, 12, 11px.
- Vazirmatn Medium: 13, 11px.
- Vazirmatn Regular: 13, 12, 11, 10px.
- Vazirmatn Light: 13, 12, 11px.
- Estedad-VF Bold: 14, 13px.
- Estedad-VF SemiBold: 12px.
- Estedad-VF Medium: 13px.
- Estedad-VF Light: 11px.
- Lalezar: excluded from production tokens.

## Cross-framework contract

- CSS custom properties are the canonical runtime representation.
- Tailwind maps utilities to the same custom properties.
- Vue and Next.js components MUST NOT redefine token values locally.
- Plain HTML/CSS MUST be able to consume the variables without a framework runtime.
