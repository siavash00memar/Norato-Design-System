# Combobox — Plan

1. Inspect the current contract, adapter, playground, tokens, CSS cascade and recorded browser results.
2. Capture design reference and Norato in matched desktop and mobile browser viewports; compare the preview frame, field, menu and selected visual states.
3. Walk the state/variant matrix in the playground, recording actual values, dimensions, RTL, focus, keyboard and accessibility semantics.
4. Fix only confirmed mismatches; remove or rewrite legacy selectors instead of stacking temporary CSS.
5. Re-run the exact browser request checklist and technical gates; update the contract, parity ledger and error log.
6. Keep DoD open where independent screen-reader or any visual/interaction evidence is still missing; push verified changes to GitHub.
7. For the cross-component Input rule, replace the Combobox's existing native field border/blue outer focus treatment with a centered 36px tokenized capsule inside its unchanged 48px target, and align label/placeholder typography. Validate actual desktop/mobile render and interaction.
8. Fix the shared cold-load gap in the async `ComponentSpecimen` host with an inert, tokenized frame fallback; verify Button and Combobox and inspect production bundle impact.

## Known gaps going into the audit

- Existing request logs explicitly leave desktop visual matrix and independent screen-reader evaluation open.
- Prior mobile comparison says no overflow at 390px but does not cover every menu state/variant.
- Adapter code has a visible focus rule for option/trigger/clear; confirm it is actually visible for keyboard focus in the browser.
