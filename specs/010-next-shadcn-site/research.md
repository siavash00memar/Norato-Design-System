# Research

## Decision: Radix-based shadcn source components

Rationale: the project already selected Radix compatibility and needs accessible keyboard/focus behavior while retaining source ownership for Norato customization.

## Decision: Next.js App Router for public docs

Rationale: it is the requested public-site target and provides a clear Vercel deployment path.

## Decision: Norato tokens override visual defaults

Rationale: Figma is the UI authority; Material Design 3 informs interaction/accessibility. Colors, typography, 36px visual controls, 48px targets, and 24px gutters come from Norato evidence.

## Decision: Vue remains a first-class package target

Rationale: the user explicitly requires Vue and Next.js support. Contracts are shared; implementation adapters may differ by framework.
