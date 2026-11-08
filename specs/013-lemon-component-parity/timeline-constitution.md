# Timeline — Constitution

## Purpose
Present chronological events and grouped activity in a reusable, RTL-first Vue 3 family.

## Invariants
- Lemon is the composition reference; Norato semantic tokens and yellow accent remain authoritative.
- The rail sits at the right in RTL and mirrors naturally in LTR; content and timestamps remain readable.
- Timeline items render as a semantic ordered list. Decorative rails and markers do not duplicate item names.
- Active markers use an elevated neutral surface, never Lemon's blue or a Norato blue accent.
- Event order is caller-controlled and must remain consistent. Consumers paginate beyond 20 events.
- Preserve marker and avatar intrinsic proportions; no stretched icons or avatars.
- The detail page follows Button: inert visual sample, executable playground, copyable usage, and nine contract sections.

## Scope
Timeline Item (Default/Card/Compact × First/Middle/Last), Marker (Dot/Icon/Avatar × Neutral/Active/Success/Warning/Danger), and Activity Feed (Default/Compact): 26 reference variants.
