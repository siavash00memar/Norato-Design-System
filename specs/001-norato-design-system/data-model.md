# Norato Design System Data Model

## Design Token

Represents a named visual or behavioral value.

| Field | Required | Rules |
|---|---:|---|
| `name` | yes | Stable kebab-case semantic name. |
| `category` | yes | color, typography, spacing, shape, elevation, motion, layout, direction. |
| `primitiveValue` | yes | Raw value derived from approved source. |
| `semanticRole` | yes | Role consumed by components and surfaces. |
| `sourceNode` | yes | Figma node or documented Material rule. |
| `usageRule` | yes | Where the token may and may not be used. |
| `verification` | yes | Visual, contrast, responsive, or behavioral check. |

## Component Contract

Represents a reusable Norato component.

| Field | Required | Rules |
|---|---:|---|
| `name` | yes | Stable public component name. |
| `sourceNode` | yes | Figma node when visual inspiration exists. |
| `primitive` | yes | shadcn/Radix/Base candidate or custom justification. |
| `anatomy` | yes | Named structural parts. |
| `variants` | yes | Intentional, bounded variants only. |
| `states` | yes | default, hover where applicable, pressed, focus, selected, disabled, loading, error, empty, success as applicable. |
| `contentRules` | yes | Labels, wrapping, truncation, localization, and validation. |
| `responsiveRules` | yes | Behavior across adaptive width classes. |
| `a11yRules` | yes | Role, name, state, target, focus, keyboard, contrast, and non-color communication. |
| `frameworkAdapters` | yes | Vue, Next.js, HTML/CSS, and Tailwind consumption notes. |
| `verificationCases` | yes | Linked checks proving the contract. |

## Verification Case

Represents a repeatable acceptance check.

| Field | Required | Rules |
|---|---:|---|
| `id` | yes | Stable identifier. |
| `requirement` | yes | FR or SC reference. |
| `surface` | yes | Token, component, page, or adapter. |
| `setup` | yes | Viewport, direction, content, and theme. |
| `action` | yes | User or reviewer action. |
| `expected` | yes | Observable result. |

## Relationships

- A `Figma Source Node` inspires many `Design Tokens` and `Component Contracts`.
- A `Design Token` may be consumed by many `Component Contracts`.
- A `Component Contract` owns one or more `Verification Cases`.
- A `Verification Case` traces to one or more specification requirements.
