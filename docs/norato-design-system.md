# Norato Design System

Norato is a reusable, RTL-first Persian design system for Vue 3. Its product foundation uses Norato semantic tokens, Estedad headings, Vazirmatn body/input text, clear implementation maturity, and standalone component contracts.

## Vue documentation surface

The local Vue workspace at `apps/vue` presents the Norato foundation, team usage guide, component inventory, and independent component detail pages. It catalogs 49 families, keeps Norato yellow/blue semantic roles, and marks implementation maturity explicitly; catalog presence does not imply a production API. The “راهنمای تیم Vue” route explains workspace imports, token setup, RTL, adapter limitations, and the Spec Kit contribution/validation workflow. Private workspace packages `@norato/vue` and `@norato/tokens` are available for repository-local use.

## Current Figma reference

The 14 chapter frames are mapped into the Overview and Foundation documentation. The source extraction is explicitly marked as preliminary, so observed values and unresolved/inconsistent evidence are kept separate in [the source ledger](figma-source-ledger.md). Brand Yellow `#FDC101` and Blue `#134F89` are canonical semantic accents. Project typography policy takes precedence over legacy Lalezar styles in the source: Estedad for headings and Vazirmatn for body/input text. The Figma source does not define global error, success, or focus colors; Norato retains its existing state tokens without attributing them to that source.

## Component contracts

Each of the 49 components has a standalone file under `docs/component-contracts/` and a direct local route. Contracts describe overview, anatomy, variants, sizes, states, parts, usage, accessibility, and semantic tokens. Proposed examples remain distinct from production-ready Vue adapters.
