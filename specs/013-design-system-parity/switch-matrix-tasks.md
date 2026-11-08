# Switch Matrix — Tasks

1. [x] Audit the Switch contract, tokens/CSS, renderer, reference and current DoD evidence.
2. [x] Implement dedicated 30-cell Switch and 6-cell Switch Field static matrices.
3. [ ] Inspect matrix desktop/mobile proportions and compare same viewport with design reference; desktop DOM and design reference hierarchy/on-color have now been checked, while matrix mobile measurement and equal-viewport section comparison remain.
4. [x] Prior browser evidence confirms live playground keyboard, checked/value, disabled/error and 48px targets; this request confirmed the static gallery and executable playground remain separate.
5. [x] Run project technical gates and update contract/request/family evidence; checks pass with the recorded bundle-size warning.
6. [x] Commit `bbb95f0` pushed; local HEAD matches remote `master`.

7. [x] Correct stale blue checked/hover/focus styles and align checked knobs across adapter, state galleries, and playground switches with Norato yellow/dark styling.
8. [x] Re-render all five state groups after the stroke correction; computed-style audit covered every size/value cell and the 6 Switch Field cells. Full DoD remains open for exact mobile/matched design reference review and screen-reader validation.
9. [x] Remove the legacy gray `border-strong` token from checked static Switch/Switch Field matrix tracks; verify checked Default/Focus are yellow while Error/Disabled retain semantic colors.
