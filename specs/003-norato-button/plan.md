# Implementation Plan: Norato Button Component

**Branch**: `003-norato-button` | **Date**: 2026-08-23 | **Spec**: [spec.md](./spec.md)

## Summary

Implement text and Icon-only Norato Button contracts across HTML/CSS, Vue, and Next.js, reusing Norato tokens and Material interaction/accessibility guidance. Icon-only is a separate public contract.

## Technical Context

**Language/Version**: TypeScript 5.7, CSS, HTML; Vue 3 and React/Next adapters
**Primary Dependencies**: Existing Norato tokens, core HTML package, Tailwind preset, shadcn evaluation
**Storage**: N/A
**Testing**: TypeScript compile, token validation, contract matrix, keyboard/accessibility review
**Target Platform**: Modern browsers
**Project Type**: Cross-framework design-system component library
**Constraints**: Light Mode v1, RTL-compatible, minimum 48px target, semantic tokens only
**Scale/Scope**: Text Button and separate Icon-only Button

## Constitution Check

PASS — follows all Constitution principles and the required Spec Driven sequence. No implementation begins before artifacts and clarification are complete.

## Project Structure

```text
packages/core-html/src/components.ts
packages/core-html/src/norato.css
packages/vue/src/components/NoratoButton.vue
packages/next/src/components/NoratoButton.tsx
packages/components/src/contracts/button.contract.ts
specs/003-norato-button/contracts/button-contract.md
```

**Structure Decision**: Extend the existing shared core and framework adapter boundaries.
