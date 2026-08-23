# Plan Research: Norato Design System Foundation

## Decision 1: Authority hierarchy

- **Decision:** Material Design 3 is authoritative for UI semantics, interaction, accessibility,
  adaptive behavior, and component purpose. The Figma section `8772:1368` is visual inspiration.
- **Rationale:** This is the accepted Clarify decision and prevents visual fidelity from overriding
  usable targets, focus, contrast, keyboard behavior, and responsive rules.
- **Alternatives considered:** Figma as absolute authority was rejected by Clarify; Material as
  inspiration only was rejected because it would leave behavior under-specified.

## Decision 2: Typography

- **Decision:** Vazirmatn is the body family and Estedad is the heading/title family. Lalezar is
  excluded. Figma node `8773:27429` supplies the permitted sizes and weights.
- **Rationale:** This matches the accepted Clarify decision and the current Figma typography record.
- **Alternatives considered:** Keeping Lalezar for display was rejected explicitly.

## Decision 3: Spacing and responsive model

- **Decision:** Use a 4-unit base with primary rhythm at 8, 16, 24, 32, 48, and 64. Use adaptive,
  mobile-first layout based on available window width, with Compact, Medium, Expanded, Large, and
  Extra Large classes.
- **Rationale:** This combines the accepted Clarify decision with Material adaptive guidance and
  UI/UX Pro Max reflow and spacing guidance.
- **Alternatives considered:** Treating old guide values as the universal scale was rejected because
  they conflict with the accepted 4/8 rhythm and need component-specific justification.

## Decision 4: Styling and portability

- **Decision:** Define framework-neutral CSS custom properties and semantic contracts first. Provide
  a Tailwind CSS adapter for utility consumption. Vue and Next.js adapters consume the same tokens;
  plain HTML/CSS consumes the CSS contract directly.
- **Rationale:** This prevents a Tailwind class or framework component from becoming the design
  system source of truth.
- **Alternatives considered:** Framework-specific token definitions were rejected because they would
  duplicate behavior and make Vue/Next/HTML parity difficult.

## Decision 5: Component implementation strategy

- **Decision:** Evaluate shadcn/ui and its underlying primitives first, customize with Norato tokens,
  and create custom primitives only when the interaction contract cannot be satisfied.
- **Rationale:** This follows the Constitution and keeps ownership of the final implementation.
- **Alternatives considered:** Rebuilding every component from scratch was rejected as unnecessary
  duplication.

## Decision 6: Version 1 theme scope

- **Decision:** Version 1 supports Light Mode only. Dark Mode is a deferred future specification.
- **Rationale:** This is the accepted Clarify decision and limits token/theme scope for the first plan.
- **Alternatives considered:** Shipping dual themes or a partially supported dark theme was rejected.

## Resolved research risks

- The old pasted guide is treated as legacy reference. Compatible rules may inform contracts, but
  conflicts require explicit review against Material and the accepted Norato decisions.
- The repository URL could not be fetched in the available browsing path; no legacy implementation
  assumptions are used.
