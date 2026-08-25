# Implementation Plan: Norato Vue/Next.js shadcn Site

**Branch**: `010-next-shadcn-site` | **Date**: 2026-08-25 | **Spec**: `spec.md`

## Summary

Build the public documentation site in Next.js App Router using shadcn source primitives, customized with Norato tokens and Figma-derived visual rules. Keep the existing Vue packages as the reusable component implementation contract and retain the static site only as a temporary fallback.

## Technical Context

**Language/Version**: TypeScript, React, Next.js App Router, Vue 3
**Primary Dependencies**: shadcn/ui, Radix primitives, Tailwind CSS, lucide-react
**Storage**: N/A
**Testing**: TypeScript, token check, local responsive and keyboard QA
**Target Platform**: Modern browsers, Vercel-ready Next.js
**Project Type**: Documentation web application plus reusable component packages
**Performance Goals**: Static-first pages, no horizontal overflow, usable at 360px
**Constraints**: RTL, Persian content, Estedad headings, Vazir body/input, 48px interaction target, Figma visual authority
**Scale/Scope**: Six documentation destinations and core form/display primitives

## Constitution Check

- Spec-first, token-driven, RTL/accessibility, evidence traceability: PASS.
- shadcn source primitives evaluated before custom work: PASS.
- Vue and Next contracts remain equivalent: REQUIRED validation gate.
- Static HTML/CSS receives no new feature behavior: PASS.

## Project Structure

```text
apps/docs/app/                 # Next.js documentation shell and routes
apps/docs/components/ui/       # shadcn source primitives customized for Norato
packages/tokens/src/            # shared design tokens
packages/vue/src/components/    # Vue equivalents
packages/next/src/components/   # reusable Next equivalents
site/                           # legacy fallback only
specs/010-next-shadcn-site/     # feature artifacts
```

**Structure Decision**: Next.js is the public documentation runtime; Vue and Next packages consume shared tokens/contracts. The static site is not part of the new feature path.

## Amendment Plan — Tree View Correction

1. Inspect all existing Tree View, Checkbox, and Select-arrow selectors before editing.
2. Export the canonical Select arrow asset once and consume it from both Select and Tree View.
3. Keep Tree View on the existing canonical Checkbox component and user-provided SVG states.
4. Apply one final, documented Tree View visual contract matching the Figma hierarchy.
5. Validate the rendered page, keyboard expansion/selection, RTL order, and TypeScript output.
