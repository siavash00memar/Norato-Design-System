# Combobox — Specify

## Need

Complete the open design reference parity DoD for the existing Norato Vue Combobox while keeping its one/many selection API and bounded, RTL-first layout.

## Acceptance criteria

1. The inert specimen uses the design reference composition: one centered Combobox in a dotted/glass preview frame with a Default marker, while keeping the Norato palette.
2. Compare design reference and Norato at equal desktop and 390×844 mobile viewports; document frame, field and open-menu geometry and ensure no overflow or stretched controls.
3. Verify the four sizes, inside/outside labels, single/multiple selection, clear action, keyboard navigation/selection/Escape, recent, loading, empty and create states in the real browser.
4. Verify RTL, minimum 48px interactive targets, visible focus, ARIA relationships, disabled/required/invalid/loading semantics and live value updates.
5. A disabled field keeps its neutral Stroke even when validation error is also present; a closed menu has no dangling `aria-activedescendant`, while reopening exposes an ID that resolves to a live option.
6. Confirm the component page retains Preview, Vue usage/playground and all nine Button-like contract sections.
7. Run token/catalog checks, Vue typecheck, production build and diff validation; update contract, family ledger, error log and request checklist with evidence and gaps.
8. In the inert States gallery, render six Combobox-specific RTL field previews with the current capsule, typography and state colors; do not use the shared blue dot/bar fallback for Combobox.

## Out of scope

Do not invent a new public API or behavior; fix only defects supported by the browser audit and existing contract.
