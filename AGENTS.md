# Norato Design System — Agent Guide

## Mission

Build and maintain Norato as a reusable, RTL-first Persian design system for Vue and Next.js. The legacy static HTML/CSS site is fallback-only and is not the primary implementation target.

## Required workflow

Every feature MUST follow this exact sequence:

`Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement`

Do not skip, merge, or silently backfill a stage. Do not begin implementation while a material decision is unknown; ask a focused clarification question and record the answer in the feature spec.

## Source authority

- Figma file and selected sections: visual UI reference.
- Material Design 3: interaction, accessibility, responsive behavior, and UX rules.
- Norato tokens and contracts: implementation authority.

## Component rules

- RTL and Persian content are the default.
- Use Vazirmatn for body/input content and Estedad for headings/titles.
- Never use Lalezar; any former Lalezar display role MUST use Estedad Black (weight 900).
- Use semantic Norato tokens; do not add page-local raw design values.
- Preserve the minimum 48px interaction target.
- Keep Vue and Next.js contracts equivalent. Do not add new feature behavior to the legacy static HTML/CSS site.
- Evaluate shadcn primitives before custom implementations.
- Update the feature spec, plan, checklist, tasks, and error log when decisions or defects are found.
- Before changing a component visual, audit and remove or neutralize its legacy selectors; never stack undocumented temporary overrides. Record recurring CSS conflicts in `docs/error-log.md`.
- After every user request, run `docs/request-validation-checklist.md` against the actual browser render. Do not report completion until the checklist passes; if it fails, report the exact failed items and continue fixing.
- Treat the user's latest explicit visual instruction as the active source of truth. Before implementing, translate it into a short acceptance contract, search for and supersede conflicting older rules, implement only that contract, and validate the exact requested placement before reporting completion. Do not repeat a previously logged interpretation error.
- RTL is a non-negotiable global rule: every page, component, layout direction, text flow, icon relationship, flex/grid alignment, and interactive state must explicitly preserve RTL unless the user approves a documented exception.
- Record every user-approved component rule in the component contract and `docs/figma-component-rules.md`; do not rely on conversation history as the source of truth.

## Validation

Run `pnpm check:tokens` and TypeScript validation before handoff. Confirm RTL, keyboard, focus, disabled, loading, invalid, and responsive behavior for each interactive component.

## Do not

- Guess unresolved UX, API, typography, or interaction decisions.
- Document a component as implemented before its tasks and validation are complete.
- Change the Figma visual language without recording the rationale.
