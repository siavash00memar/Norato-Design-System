# Shared Component Header Context — Specification

## Scope

Improve the common header on all 49 component detail pages so it carries the same information hierarchy as the visual reference while remaining grounded in Norato contracts.

## Acceptance contract

- Show the component area from the contract's `حوزه` metadata, separate from Norato readiness status.
- Show a concise summary sourced from the first paragraph of the contract's `Overview` section.
- Keep the summary visually bounded to two lines so long contracts do not stretch the page header; the full Overview remains available below.
- Preserve the existing title, readiness badge, preview position flow, nine-section structure, and RTL alignment.
- Do not add variant or component counts unless a canonical, validated data field exists; the current catalog has none.
- All 49 component pages must render a non-empty category and summary with no Markdown artifacts.
- The two contracts missing `حوزه` metadata (Chip and Tag) must be brought into parity before the shared renderer depends on it.
- No component runtime API or specimen geometry changes are in scope.
