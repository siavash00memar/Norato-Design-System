---
description: "Task list for Norato Design System Foundation"
---

# Tasks: Norato Design System Foundation

**Input**: Design documents from `/specs/001-norato-design-system/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Validation tasks are included because the Constitution requires visual, behavioral,
accessibility, responsive, and cross-framework verification before implementation approval.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the package and documentation structure without implementing components.

- [X] T001 Create the planned package directories under `packages/` and validation directories under `tests/`.
- [X] T002 Initialize the workspace metadata and approved TypeScript/Tailwind tooling configuration in `package.json`, `pnpm-workspace.yaml`, and `tsconfig.json`.
- [X] T003 [P] Add the initial design-system documentation entry point at `docs/norato-design-system.md`.
- [X] T004 [P] Record the source references and decision links in `docs/sources.md`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build the framework-neutral contracts that every story depends on.

**⚠️ CRITICAL**: No user-story implementation can begin until this phase is complete and analyzed.

- [X] T005 Define the reference, semantic, and component token schema in `packages/tokens/src/schema.ts` using `contracts/token-contract.md` [FR-002, FR-010].
- [X] T006 [P] Define Light Mode color tokens and source mappings in `packages/tokens/src/color.css` from the approved Figma palette and Material semantic roles [FR-003, FR-003B].
- [X] T007 [P] Define typography tokens, role-specific unitless line-heights, and `@font-face`/font-family fallback contract in `packages/tokens/src/typography.css` using the exact Figma sizes recorded in `spec.md` [FR-003A, FR-003C, FR-003D, FR-003E].
- [X] T008 [P] Define spacing, shape, elevation, motion, direction, adaptive layout, `65ch` readable measure, and class-specific gutters in `packages/tokens/src/layout.css` [FR-002A, FR-009A, FR-009D].
- [X] T009 Generate the canonical token entrypoint in `packages/tokens/src/index.css` and prevent raw component hex usage through documentation and lint rules [FR-002, FR-008].
- [X] T010 Create the Tailwind preset mapping semantic Norato tokens in `packages/tailwind-preset/src/index.ts` without duplicating token values.
- [X] T011 Create framework-neutral HTML/CSS primitives and naming conventions in `packages/core-html/src/` based on `contracts/component-contract.md`.
- [X] T012 Create the shared component contract registry in `packages/components/src/contracts/` with Figma source links and Material rationale fields [FR-004, FR-007, FR-010].
- [X] T013 [P] Create contract validation fixtures in `tests/contract/fixtures/` for RTL, Light Mode, typography, spacing, and adaptive width classes.
- [X] T014 [P] Create the accessibility and responsive review matrix in `tests/accessibility/matrix.md` and `tests/responsive/matrix.md`.

**Checkpoint**: Token and contract foundation is complete; user stories may begin after foundational review,
with the formal Analyze gate remaining after Tasks and Polish according to the project sequence.

---

## Phase 3: User Story 1 - Reuse Norato UI Consistently (Priority: P1) 🎯 MVP

**Goal**: Provide traceable tokens and representative shared components so future pages can reuse Norato consistently.

**Independent Test**: A reviewer can select a representative component, trace it to a token and Figma source, and find its complete anatomy, variants, states, responsive behavior, and verification criteria.

### Implementation for User Story 1

- [X] T015 [US1] Inventory the approved v1 component scope from Figma section `8772:1368` in `packages/components/src/inventory.ts`.
- [X] T016 [US1] Define the Button contract and Material purpose mapping in `packages/components/src/button/button.contract.ts`.
- [X] T017 [US1] Define the Field/Input contract and Material purpose mapping in `packages/components/src/field/field.contract.ts`.
- [X] T018 [US1] Define Tag, Search, Checkbox, Radio, Date Picker, Upload, and Tree View contracts in `packages/components/src/contracts/selection-and-input.contract.ts`.
- [X] T019 [US1] Map shadcn/ui candidate primitives and custom-build justifications in `packages/components/src/primitive-map.ts`.
- [X] T020 [US1] Create the representative Button and Field framework-neutral HTML/CSS implementations in `packages/core-html/src/components/`.
- [X] T021 [US1] Create the Vue adapters for representative Button and Field components in `packages/vue/src/components/`.
- [X] T022 [US1] Create the Next.js adapters for representative Button and Field components in `packages/next/src/components/`.
- [X] T023 [US1] Create cross-framework parity cases for representative components in `tests/contract/us1-parity.md`.
- [X] T024 [US1] Create the visual traceability matrix from representative components to Figma nodes in `tests/visual/us1-traceability.md`.

**Checkpoint**: User Story 1 is independently reviewable as the MVP design-system foundation.

---

## Phase 4: User Story 2 - Build Across Supported Environments (Priority: P1)

**Goal**: Make the same token and component contracts consumable from Vue, Next.js, and plain HTML/CSS with parity.

**Independent Test**: The same representative component contract is documented and consumable in all three environments without changing token meaning or required behavior.

- [X] T025 [P] [US2] Define the HTML/CSS consumption guide in `packages/core-html/README.md` with RTL and Light Mode examples.
- [X] T026 [P] [US2] Define Vue 3 adapter conventions and usage guide in `packages/vue/README.md`.
- [X] T027 [P] [US2] Define Next.js adapter conventions and usage guide in `packages/next/README.md`.
- [X] T028 [US2] Configure Tailwind consumption examples in `packages/tailwind-preset/README.md` and prohibit local token redefinition.
- [X] T029 [US2] Document equivalent component APIs, slots/children, events, and state semantics in `tests/contract/us2-framework-parity.md`.
- [X] T030 [US2] Document framework-neutral RTL, localization, browser zoom, and narrow viewport acceptance cases in `tests/responsive/us2-adaptive.md`.

**Checkpoint**: User Story 2 is independently reviewable across all supported environments.

---

## Phase 5: User Story 3 - Apply Safe Interaction Conventions (Priority: P2)

**Goal**: Complete state, accessibility, feedback, and adaptive behavior contracts while preserving Norato direction.

**Independent Test**: Representative interactive components have explicit state, recovery, keyboard, focus, contrast, RTL, reduced-motion, and responsive requirements.

- [X] T031 [P] [US3] Define the shared interaction-state contract in `packages/components/src/contracts/states.contract.ts`.
- [X] T032 [P] [US3] Define the shared accessibility contract in `packages/components/src/contracts/accessibility.contract.ts`.
- [X] T033 [P] [US3] Define form validation, loading, empty, error, success, and recovery contracts in `packages/components/src/contracts/feedback.contract.ts`.
- [X] T034 [US3] Define immediate switch behavior and transactional Save/Apply with Cancel/Revert behavior in `packages/components/src/contracts/interaction-mode.contract.ts` [FR-005A].
- [X] T035 [US3] Define adaptive behavior at Compact `<600px`, Medium `600–839px`, Expanded `840–1199px`, Large `1200–1599px`, and Extra Large `≥1600px` boundaries, including readable max-width and meaningful wide-layout context, in `packages/components/src/contracts/adaptive.contract.ts` [FR-009A, FR-009B, FR-009C].
- [X] T045 [US3] Define the multi-row form two-block alignment contract with title left-edge alignment, field right-edge alignment, and 12px inter-block gap in `packages/components/src/contracts/form-section.contract.ts` [FR-012].
- [X] T046 [US3] Add the reusable two-block form-section layout primitive and RTL responsive rules in `packages/core-html/src/form-section.css` [FR-012].
- [X] T036 [US3] Add keyboard, focus, accessible-name, non-color-state, and text-scaling requirement cases in `tests/accessibility/us3-interaction.md`.
- [X] T037 [US3] Add reduced-motion and interaction feedback requirements in `tests/accessibility/us3-motion.md`.
- [X] T038 [US3] Add contrast and Light Mode semantic-role review cases in `tests/accessibility/us3-contrast.md`.
- [X] T039 [US3] Add Material component decision records for Button, Field, Checkbox, Radio, Search, Date Picker, Dialog, Snackbar, and Upload in `docs/material-decisions.md`.

**Checkpoint**: User Story 3 is independently reviewable for safe interaction and accessibility quality.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Complete documentation and prepare the artifacts for Analyze.

- [X] T040 [P] Update `docs/norato-design-system.md` from approved token and component contracts.
- [X] T041 [P] Add the legacy-guide conflict register to `docs/legacy-decisions.md` without promoting unapproved values.
- [X] T042 Run every scenario in `specs/001-norato-design-system/quickstart.md` and record findings in `tests/quickstart-results.md`.
- [X] T043 Review all task-to-requirement and task-to-contract traceability in `tests/traceability.md`.
- [X] T044 Confirm no task introduces dark mode, Lalezar, undocumented raw values, or framework-specific source-of-truth drift.

## Dependencies & Execution Order

### Phase Dependencies

- Setup must complete before Foundational.
- Foundational must complete before any user-story task.
- User Story 1 establishes the MVP component inventory and representative contracts.
- User Story 2 depends on the token and representative component contracts from User Story 1.
- User Story 3 depends on the shared component contracts from User Story 1 and may proceed in parallel with User Story 2 after those contracts exist.
- Polish depends on the desired user stories and is required before Analyze.

### Parallel Opportunities

- T003, T004 can run in parallel.
- T006, T007, T008, T013, T014 can run in parallel after T005.
- T025, T026, T027 can run in parallel after representative contracts exist.
- T031, T032, T033 can run in parallel.
- T039, T040 can run in parallel after story artifacts exist.

## Implementation Strategy

### MVP First

1. Complete Setup and Foundational phases.
2. Complete User Story 1 only.
3. Stop at the checkpoint and run Analyze before expanding scope.

### Incremental Delivery

1. Add User Story 2 after the MVP contracts are stable.
2. Add User Story 3 for complete interaction and accessibility coverage.
3. Complete Polish, then run Analyze.
4. Only after Analyze passes may Implement be authorized.

## Notes

- Every task has a checkbox, sequential ID, required story label where applicable, and an exact file path.
- No task authorizes guessing; unresolved decisions must return to Clarify.
- No task authorizes dependency installation before the implementation gate.
