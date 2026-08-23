# Tasks: Norato Field Component

## Phase 1 — Contract and tests

- [X] T001 Add the single-line Field contract and state matrix to `specs/002-norato-field/contracts/field-contract.md`.
- [X] T002 Add HTML/CSS contract fixtures for label, helper, error, RTL, disabled, loading, focus, and filled states under `packages/core-html`.
- [X] T003 Add equivalent Vue and Next contract fixtures under `packages/vue` and `packages/next`.

## Phase 2 — Core implementation

- [X] T004 Implement shared Field markup and semantic ID/message association in `packages/core-html/src/components.ts`.
- [X] T005 Implement Field visual states using existing Norato semantic tokens and 48px minimum target.
- [X] T006 Integrate the 12px two-block form-section contract and responsive RTL alignment.

## Phase 3 — Framework adapters

- [X] T007 Implement the Vue `NoratoField` adapter with the canonical contract.
- [X] T008 Implement the Next.js `NoratoField` adapter with the canonical contract.
- [X] T009 Document shadcn Input evaluation and the decision to retain/adapt native semantics.

## Phase 4 — Validation and handoff

- [X] T010 Add Field usage documentation and update package exports.
- [X] T011 Run token validation and TypeScript compilation.
- [X] T012 Run the RTL, accessibility, state, and cross-framework contract matrix; record results.
