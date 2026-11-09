# Charts — Clarify

No blocking question was needed: user has delegated component/API choices to the implementation judgment and has approved design reference as the visual source with a Norato yellow palette.

## Decisions
- Implement all 14 documented variants (6 + 3 + 4 + 1) as four composable Vue adapters.
- Use self-contained SVG primitives rather than an external chart engine: the reference scope is small, static-data-focused, and the repository has no chart dependency. This avoids bundle cost and preserves full visual/token control.
- Use a fixed semantic eight-color series palette, beginning with Norato yellow; encode values and labels in the data table and do not depend on color to identify series.
- Make chart renderings static. Pointer-tooltip interaction is offered only by the standalone Tooltip API/consumer composition; no keyboard-inaccessible plot-point focus targets are introduced.
- Guard empty, mismatched, negative, and zero-total donut data; document supported input constraints and keep table data faithful to accepted input.
- Consumer action is a slot. The chart family does not assume what a “more” menu should do.

## Direct-value label headroom follow-up (2026-11-09)

- Keep direct value labels inside the SVG plot when the data maximum lands exactly on an axis tick ceiling; reserve one additional nice tick in that case instead of moving labels over the marks.
- Use only defined typography tokens for chart headings, direct labels and donut totals.

**Acceptance:** an exact-ceiling maximum has one readable tick of headroom, previously padded charts retain their current scale, and all chart text uses registered Norato typography tokens.
