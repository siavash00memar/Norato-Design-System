# Clarify — Command Palette reduced motion

- No external UX/API decision is unresolved: the existing contract already requires reduced-motion support and keeps Loading status accessible.
- Implementation choice: disable the spinner animation completely in reduced-motion mode; retain the static spinner ring and visible/announced Loading state.
- The existing `shortcut`, item navigation, and normal-motion spinner behavior are outside this fix.
