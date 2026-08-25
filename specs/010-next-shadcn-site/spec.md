# Feature Specification: Norato Vue/Next.js shadcn Site

**Feature Branch**: `010-next-shadcn-site`
**Created**: 2026-08-25
**Status**: Revised after scope clarification

## User Scenarios & Testing

### User Story 1 - Browse the public system (Priority: P1)

As a visitor, I need the Norato public site to preserve the existing information architecture while using production-quality accessible components.

### User Story 2 - Inspect real components (Priority: P1)

As a developer, I need shadcn source components customized with Norato tokens, Figma visual rules, RTL, and Material interaction guidance.

## Requirements

- **FR-001**: The public documentation site MUST use Next.js App Router with a reusable responsive shell.
- **FR-001a**: Norato MUST provide an equivalent Vue implementation contract for reusable components and tokens.
- **FR-002**: Site MUST use shadcn source components for Button, Input, Textarea, Select, Checkbox, RadioGroup, Card, Progress, Sheet/Dialog where applicable.
- **FR-003**: Norato customization MUST preserve Estedad headings, Vazir body, RTL, Figma visual references, and semantic tokens.
- **FR-003a**: Button MUST expose the Figma `8818:9982` Third variant: 121×36px, white surface,
  2px `#E8E8E8` border, `#1A1A1A` text, 25px radius, and Estedad Black 13px label.
- **FR-004**: Desktop navigation MUST use a right sidebar; compact navigation MUST use a bottom bar.
- **FR-005**: Components page MUST render real interactive component examples, not descriptive cards only.
- **FR-006**: Existing public sections and local preview MUST remain available during migration; the legacy static site is fallback-only and receives no new feature behavior.
- **FR-007**: Site MUST pass TypeScript, accessibility, token, and responsive validation before Vercel deployment.

## Success Criteria

- **SC-001**: All six public destinations work through Next.js App Router navigation.
- **SC-002**: Component examples use shadcn source primitives with Norato customization.
- **SC-003**: Vue and Next.js expose equivalent component contracts.
- **SC-004**: Local Next.js preview runs from a documented command.

## Assumptions

- Radix-based shadcn is selected for compatibility with the existing AI Elements direction.
- The existing static site remains as a fallback until the Next.js preview is approved, then it may be retired only with explicit approval.
- Deployment to Vercel is a later step and is not performed in this feature.

## Amendment — Tree View Fidelity Correction (2026-08-25)

The Tree View example MUST reuse the existing Norato `Checkbox` implementation and the
exact Figma Tree View SVG arrow asset. It MUST render the Figma-derived
parent/child hierarchy, 24×24 icon frames, RTL order, and the documented surface colors.
The Select trigger keeps its own black arrow asset. No text glyph or parallel checkbox
implementation is allowed.

## Amendment — Tree View Multi-Parent Composition (2026-08-25)

The Tree View default documentation state MUST match Figma node `8822:10469`: a 324×248
card with a 300×36 searchable field and four closed parents. Each parent is an indeterminate
canonical Checkbox state and may independently expand into nested children.

The Figma card MUST be shown inside a standard documentation Card titled `Tree view`.

When a Parent expands, it MUST match Figma node `8822:10470`: 36px parent header with top
radii, an upward arrow, and attached 48px white child surface with a checked canonical Checkbox.

When that Child expands, it MUST match Figma node `8822:10493`: indeterminate 36px nested
header and three 36px leaves with checked, unchecked, checked states inside a 153px surface.

All Child rows MUST match Figma node `8822:10568` in RTL order: Checkbox, nested arrow, title.

When a Child expands, Leaf checkboxes MUST align below the Child arrow rather than the Child
checkbox.

Tree View selection MUST be hierarchical: checked when all descendant leaves are selected,
indeterminate when some but not all are selected, and unchecked when none are selected.

Tree View Parent titles MUST use Estedad Bold; Child and Leaf titles MUST use Vazir Bold.
Each documentation Parent MUST contain multiple Children and each Child multiple Leaves.

Direct Child siblings under the same Parent MUST have 0px vertical spacing. This spacing MUST
NOT be applied to Leaf siblings within an expanded Child.

Tree View labels MUST remain 12px across collapsed, expanded, checked, and indeterminate states.
Parents use Estedad Bold; Child and Leaf labels use Vazir Bold.
