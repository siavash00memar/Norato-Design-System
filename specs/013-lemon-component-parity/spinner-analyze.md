# Spinner — Analyze

## Evidence inspected
- Lemon live Spinner page inspected in browser: 45 spinner configurations across Ring/Dots/Lemon, Default/Subtle/Inverse, and 16/20/24/32/48px; Loader compositions are Inline/Refresh/Overlay/Page.
- Norato contract is proposed-only and has no runtime adapter. Its current token list incorrectly names brand blue and focus colors for a noninteractive status indicator.
- Package stylesheet includes other one-off loading arcs for Toast, Time Picker and Command Palette; those are separate status contexts and stay unchanged.
- The inert `ComponentSpecimen.vue` currently uses a generic `.sample-spinner` and text, while component stylesheet gives it a simple arc. No Norato logo asset exists in the searched project sources.
- Existing semantic Norato brand yellow, text secondary, surface, motion and reduced-motion tokens are available; no spinner size tokens exist.

## Decisions before implementation
- Use custom CSS/SVG for the three small animated marks: no dedicated Reka primitive exists and Spinner has no interaction semantics.
- Use CSS dimensions set by named component size tokens; exact square intrinsic sizing prevents stretching.
- Make Spinner decorative and Loader the sole polite live status to avoid duplicate announcements.
- Interpret Refresh as an inline refresh-mode indicator; Overlay and Page are visual placements, not dialogs, so they do not trap focus or block interaction.
- Remove the legacy `.sample-spinner` preview rule before adding the component-specific presentation.

## Risks / verification
- A live-region can repeat announcements if placed on each spinner; keep it on the Loader composition only.
- Overlay placement depends on a positioned host; define `.norato-loader--overlay` as an absolute inset surface and document that parent contract. Page uses a fixed inset.
- Animation contrast varies by tone; validate each tone against its surface and check `prefers-reduced-motion` in an actual browser.
