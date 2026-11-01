# Split Button — source and render analysis

- Lemon reference: one visually joined dark capsule, physical left arrow segment, one vertical separator, centered 48px-high example within a tinted preview frame. Menu opens below and aligns to the left edge.
- Norato current preview: `ComponentSpecimen.vue` renders two `.button.primary` elements. Each receives full pill radius from the shared button CSS, so the segments remain two adjacent pills rather than one component. The measured buttons are both 48px high, 62.9px and 40.8px wide; the toggle is below the required 48px target width. The 136px preview frame is taller than the component but does not itself stretch the child.
- Current catalog status is Proposed and correct: no Vue adapter or working action menu exists. The generic nine-section page shell already matches Button's section count, but variant/state content is generic reference data and the implementation area has only a maturity note.
- Fix path: connected token-driven silhouette, at least 48px toggle width, runtime Vue component, then page demonstration and validation. Do not flip maturity before the behavior is proven.
- Follow-up size audit: runtime buttons currently have 48px height across all modes; the separate Sizes gallery draws 32/40/48/56px silhouettes. A size prop can close this gap by moving the shared capsule fill/border/shadow to a control pseudo-element and keeping the two native buttons transparent with independent 48px minimum boxes. The divider must share the visual capsule's height. This avoids shrinking keyboard and pointer targets.

## Final analysis — 2026-11-01

- Current source has an exported Vue adapter and live playground. Earlier findings that no adapter existed are superseded.
- Desktop browser comparison found the control shape and divider matched the Lemon composition, but the Norato frame was 136px high. A 288px tokenized frame now places the 48px control at center; the Lemon frame observed on the same page was about 298px high. The Norato content column limits its frame to 584px while Lemon is about 630px wide.
- The dedicated SplitButtonShowcase component was present but unused; it now renders the six variant combinations, four sizes and five states instead of generic contract glyphs.
- Runtime tests passed for Split and Dropdown modes, Primary/Secondary/Destructive/Tertiary mappings, selected menu actions, primary event feedback, disabled/loading semantics, ArrowUp/Down, Home/End, Escape focus restoration, Tab exit, outside click, RTL order, focus ring and 48px minimum targets. A visible spinner was added for loading.
- Current status is Implemented after catalog/contract/export/usage integration and the executed DoD. The last 390px check predates the new frame CSS; re-run it before closing the family task.
