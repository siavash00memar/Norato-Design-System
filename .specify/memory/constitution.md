# Norato Design System Constitution

<!--
Sync Impact Report
- Version change: 1.0.0 → 1.1.0
- Added Principle VIII: Process Integrity and Evidence-Based Clarification.
- Expanded Spec-Driven Quality Gates with a no-skip rule and explicit uncertainty handling.
- Added mandatory question protocol for material unknowns and conflict resolution.
- No principles removed.
- Follow-up TODOs: none.
-->

## Core Principles

### I. Spec-First Design
Every new component, pattern, token, or behavior MUST be described in a reviewable specification
before implementation. The specification MUST define purpose, anatomy, variants, states,
responsive behavior, accessibility requirements, and acceptance criteria.

### II. Token-Driven Consistency
Visual decisions MUST use named tokens for color, typography, spacing, radius, elevation, motion,
and responsive behavior. Components MUST consume semantic tokens rather than hard-coded values.

### III. Customize Before Rebuild
The team MUST evaluate the relevant shadcn/ui component before creating one from scratch. Existing
primitives SHOULD be customized through Norato tokens, variants, composition, and accessibility-
preserving behavior. A new implementation requires justification in its specification.

### IV. Complete Component Contracts
Each production component MUST define anatomy, API, variants, states, interaction rules, content
constraints, keyboard behavior, focus behavior, loading and error behavior, and responsive reflow.

### V. Accessible and RTL-Ready by Default
Accessibility and right-to-left support MUST be designed from the first specification. Components
MUST preserve semantic HTML, keyboard operation, visible focus, sufficient contrast, readable
reflow, reduced-motion preferences, and correct Persian/RTL behavior.

### VI. Evidence and Traceability
Every significant design decision MUST link to a user need, product requirement, research insight,
platform convention, or documented design-system principle. Decisions MUST remain traceable from
Constitution through Specify, Plan, Tasks, implementation, and verification.

### VII. Quality Gates Before Code
Implementation MAY NOT begin until the specification is clarified, the plan is reviewed, the
checklist is actionable, and tasks are consistent with the specification. Visual and behavioral
verification MUST cover representative breakpoints and component states.

### VIII. Process Integrity and Evidence-Based Clarification
The project MUST follow the sequence `Constitution → Specify → Clarify → Plan → Checklist → Tasks →
Analyze → Implement` in order. No stage MAY be skipped, merged, silently backfilled, or treated as
complete solely because an artifact with a similar name already exists. Every stage MUST produce or
review its own required artifact and MUST record its gate status before the next stage begins.

The team MUST NOT invent, infer, or silently assume a value when the missing information can materially
change scope, UX, architecture, implementation, validation, or accessibility. The agent MUST ask a
targeted clarification question before proceeding, record the accepted answer in the relevant artifact,
and update dependent decisions when an answer changes an earlier assumption. When evidence is missing
or a source cannot be inspected, the limitation MUST be recorded and the affected decision MUST remain
deferred rather than being fabricated.

**Rationale:** A complete audit trail prevents undocumented drift and makes every design-system decision
reviewable, reproducible, and safe to implement.

## Design System Constraints

Norato will use shadcn/ui as a composable starting point and may use Radix/Base primitives when
they satisfy the specified interaction and accessibility contract. Fluent 2 and Material Design 3
are reference systems for platform conventions and interaction quality; neither is copied
uncritically. Norato-specific brand expression, tokens, naming, RTL behavior, and contracts take
precedence.

The system MUST support theming and future product surfaces without duplicating component logic.
Components MUST expose intentional variants and composition points instead of accumulating one-off
overrides. Content MUST remain resilient under Persian text, long labels, localization, browser
zoom, and narrow viewports.

## Spec-Driven Quality Gates

The project follows this mandatory sequence:

1. Constitution — define governing principles and constraints.
2. Specify — describe the user-facing need and measurable behavior.
3. Clarify — resolve ambiguity before architecture or implementation decisions.
4. Plan — define tokens, composition, technical approach, and verification strategy.
5. Checklist — validate requirement quality and completeness.
6. Tasks — produce dependency-ordered implementation work.
7. Analyze — check consistency across specification, plan, and tasks.
8. Implement — build only approved and traceable tasks.

Each transition MUST be explicit. The agent MUST report the current stage, completed artifacts, open
questions, and the next permitted stage. If a required input is absent or contradictory, work MUST pause
at that gate and the user MUST be asked a concise question; implementation MAY NOT proceed by assumption.

Skipping a gate requires an explicit rationale in the relevant artifact. Changes discovered during
implementation MUST flow back to the specification or plan rather than becoming undocumented drift.

## Governance

This Constitution is the governing design and delivery contract for the Norato Design System.
Every specification, plan, task list, component review, and implementation review MUST verify
compliance with it. Amendments require a documented reason, impact assessment, updated semantic
version, and review of affected artifacts. Removing or redefining a principle requires a MAJOR
version; adding or materially expanding one requires MINOR; wording-only clarification requires
PATCH.

When a conflict exists, a more specific approved specification may refine a principle but MAY NOT
silently contradict it. Complexity, custom primitives, and deviations from shadcn/ui or reference
systems MUST be justified in the relevant artifact.

**Version**: 1.1.0 | **Ratified**: 2026-08-23 | **Last Amended**: 2026-08-23
