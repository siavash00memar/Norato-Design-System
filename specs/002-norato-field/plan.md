# Implementation Plan: Norato Field Component

**Branch**: `002-norato-field` | **Date**: 2026-08-23 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-norato-field/spec.md`

**Note**: This template is filled in by the `$speckit-plan` command; its definition describes the execution workflow.

## Summary

Build a reusable single-line RTL Persian text Field across HTML/CSS, Vue, and Next.js. Reuse Norato tokens and form-section alignment, evaluate the shadcn input primitive, and preserve Material Design 3 semantics and accessibility.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript 5.7, CSS, HTML; Vue 3 and React/Next adapter syntax

**Primary Dependencies**: Existing Norato token/core packages, Tailwind preset, shadcn input evaluation

**Storage**: N/A

**Testing**: TypeScript compile, token validation, contract matrices, manual RTL/accessibility checks

**Target Platform**: Modern browsers; HTML/CSS, Vue, and Next.js consumers

**Project Type**: Cross-framework design-system component library

**Performance Goals**: No additional runtime work beyond native input behavior; no layout shift on state changes

**Constraints**: Light Mode v1, RTL-first, minimum 48px target, 12px form-section gap, no raw design values

**Scale/Scope**: One single-line text Field primitive with equivalent three-framework adapters

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

PASS — follows Constitution Principles I–VIII; no new project or dependency boundary, no implementation before design artifacts, and the single-line scope is explicitly recorded.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
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
├── tokens/
├── core-html/
├── components/
├── vue/
└── next/
specs/002-norato-field/
└── contracts/
```

**Structure Decision**: Extend the existing package boundaries. The canonical Field contract lives under `specs/002-norato-field/contracts`; shared HTML/CSS behavior belongs in `packages/core-html`; framework adapters belong in `packages/vue` and `packages/next`; token changes belong in `packages/tokens`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
