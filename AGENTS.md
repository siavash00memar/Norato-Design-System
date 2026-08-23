# Norato Design System — Agent Guide

## Mission

Build and maintain Norato as a reusable, RTL-first Persian design system for HTML/CSS, Vue, and Next.js.

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
- Never use Lalezar.
- Use semantic Norato tokens; do not add page-local raw design values.
- Preserve the minimum 48px interaction target.
- Keep HTML/CSS, Vue, and Next.js contracts equivalent.
- Evaluate shadcn primitives before custom implementations.
- Update the feature spec, plan, checklist, tasks, and error log when decisions or defects are found.

## Validation

Run `pnpm check:tokens` and TypeScript validation before handoff. Confirm RTL, keyboard, focus, disabled, loading, invalid, and responsive behavior for each interactive component.

## Do not

- Guess unresolved UX, API, typography, or interaction decisions.
- Document a component as implemented before its tasks and validation are complete.
- Change the Figma visual language without recording the rationale.
