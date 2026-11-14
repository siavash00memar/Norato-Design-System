# Divider — Baseline checklist

- [x] Button-style detail page includes the visual specimen, Vue usage/playground, and nine contract sections.
- [x] Matched desktop and mobile reference renders show a continuous one-pixel line without capsule geometry or stretch. Desktop rule is 360px; mobile caps at 320px.
- [x] RTL is default; LTR, spacing, tone, label, and horizontal/vertical configuration are represented in the playground.
- [x] Primary pointer/keyboard interaction: N/A (Divider is static and non-interactive).
- [x] Decorative mode is absent from AX; semantic vertical mode is exposed as a named splitter in the browser AX tree. Reka emits `role=separator` and `aria-orientation=vertical` for this state.
- [x] Required technical and request-validation gates pass on the delivered revision.
- [ ] Independent screen-reader review remains a Final DoD item.

## Evidence

- 2026-11-14, matched 375×844 screenshots show both the reference and local 288px specimen frame with a thin centered rule spanning the available mobile frame; no visible clipping or horizontal overflow.
- 2026-11-14, matched 1265×713 desktop screenshots show the same roughly 298px frame and 360px centered rule.
- 2026-11-14, cold navigation and loaded render both show a horizontal rule. The former generic pill was the shared async loading placeholder; Divider now has a line-shaped fallback.
- 2026-11-14, toggled `decorative` off and vertical orientation on: the accessibility tree exposed `splitter یا`; then restored horizontal, simple-line, decorative, RTL defaults.
