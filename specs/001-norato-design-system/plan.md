# Implementation Plan: Norato Design System Foundation

**Branch**: `001-norato-design-system` | **Date**: 2026-08-23 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-norato-design-system/spec.md`

**Note**: This template is filled in by the `$speckit-plan` command; its definition describes the execution workflow.

## Summary

Create a reusable, RTL-first Norato design-system foundation whose behavior and accessibility follow
Material Design 3, whose visual direction is informed by Figma, and whose tokens can be consumed by
Vue, Next.js, HTML/CSS, and Tailwind CSS. The implementation will begin with framework-neutral CSS
contracts, then adapters and customized shadcn primitives.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript for adapters; CSS custom properties and HTML contracts for the core.

**Primary Dependencies**: Tailwind CSS; shadcn/ui primitives evaluated per component; Vue/Next adapters.

**Storage**: N/A.

**Testing**: Contract fixtures, browser interaction checks, accessibility checks, responsive visual
verification, and cross-framework parity checks.

**Target Platform**: RTL web; Vue, Next.js, and plain HTML/CSS; Light Mode v1.

**Project Type**: Framework-neutral web design-system library with framework adapters.

**Performance Goals**: No blocking runtime overhead from the token layer; interactions remain responsive
and motion respects reduced-motion preferences.

**Constraints**: RTL-first; Light Mode only; Material is authoritative for behavior and accessibility;
Figma is visual inspiration; adaptive classes are Compact `<600px`, Medium `600–839px`, Expanded
`840–1199px`, Large `1200–1599px`, and Extra Large `≥1600px`; no raw component hex values; no
undocumented arbitrary values.

Typography line-height MUST be unitless and role-specific. Font fallbacks MUST be Vazirmatn → Tahoma
→ sans-serif and Estedad → Vazirmatn → Tahoma → sans-serif.

Wide layouts MUST preserve readable maximum content width and use additional space for context,
persistent navigation, list-detail, supporting panes, or comparison.
Readable content is capped at `65ch`; gutters are 16px, 24px, 32px, 48px, and 64px for Compact,
Medium, Expanded, Large, and Extra Large respectively.
Independent controls such as switches are immediate; multi-field or reviewable changes are
transactional with Save/Apply and Cancel/Revert behavior.

**Scale/Scope**: v1 token foundation, typography, spacing, layout, and representative shared components;
full product page migration is out of scope.

Multi-row form sections use an explicit two-block alignment contract: title left edges align with each
other, field right edges align with each other, and the inter-block gap is exactly `12px`.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Pass. The plan is spec-first, token-driven, evaluates shadcn before custom work, defines complete
component contracts, supports RTL/accessibility, preserves traceability, and does not implement before
the remaining gates. No constitution violation requires complexity tracking.

## Project Structure

### Documentation (this feature)

```text
specs/001-norato-design-system/
├── plan.md              # This file ($speckit-plan command output)
├── research.md          # Phase 0 output ($speckit-plan command)
├── data-model.md        # Phase 1 output ($speckit-plan command)
├── quickstart.md        # Phase 1 output ($speckit-plan command)
├── contracts/           # Phase 1 output ($speckit-plan command)
└── tasks.md             # Phase 2 output ($speckit-tasks command - NOT created by $speckit-plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
packages/
├── tokens/                 # CSS variables, token source, and generated maps
├── tailwind-preset/        # Tailwind mappings to semantic Norato tokens
├── core-html/              # Framework-neutral HTML/CSS contracts
├── vue/                    # Vue 3 adapters
├── next/                   # Next.js adapters
└── components/             # Shared component contracts and implementations
tests/
├── contract/
├── accessibility/
├── responsive/
└── visual/
docs/
└── norato-design-system.md # Published guidance after approval
```

**Structure Decision**: Use a packages-based design-system library. Tokens and core HTML/CSS remain
framework-neutral; Tailwind, Vue, and Next.js are adapters. Tests are organized by contract concern.

## Complexity Tracking

No Constitution violations were identified. The packages-based structure is required by the
framework-neutral core plus Vue, Next.js, HTML/CSS, and Tailwind adapters defined in the approved plan.
