# Tasks — Input yellow Stroke recheck

- [x] Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze recorded in sequence.
- [x] Inspect current adapter and shared hover/focus selector source.
- [x] Review local resting top specimen and keyboard/programmatic focus for all eight adapters at Medium; verify pointer is away during each focused screenshot.
- [x] Review hover-only state across all eight adapters while AX focus remained on the Disabled showcase checkbox; each field showed yellow Stroke without a duplicate outer ring. All eight adapters reported disabled in AX; hovered disabled Amount retained neutral styling. Restore the disabled toggle and verify playground defaults.
- [x] Compare observed Stroke against the current neutral-rest/yellow-hover-focus contract; no CSS defect reproduced, and evidence/remaining coverage are recorded in the Input checklists.
- [x] No implementation change was needed; `git diff --check` passed. Token/catalog/typecheck/build were not rerun because this recheck changed documentation only.
- [x] Exercise pointer hover-only on all eight adapters at Medium and confirm the showcase defaults and non-input AX focus remain unchanged.
- [x] Select Small, Large, and XLarge in the live size control; confirm every adapter's generated Vue size prop tracks the selection, inspect the narrow rendering for obvious stretch/clipping, then restore Medium.
- [ ] Measure every adapter's rendered dimensions against same-viewport reference at all sizes; recapture 390px/320px states and obtain independent screen-reader review.
- [ ] Exercise the exhaustive adapter/state matrix.
