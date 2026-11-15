# Analyze — Shared Component Header Context

## Evidence

- A matched 1265×713 local/reference Button screenshot shows the title aligned closely, but the local preview begins about 70px earlier. This is a screenshot estimate, not a DOM measurement.
- The current shared renderer displays the generic eyebrow, component title, readiness badge, and catalog `note` before the preview.
- All 49 component contracts contain an Overview section. Chip and Tag are the only component contracts missing `حوزه`; the other 47 have category metadata.
- The overview's first paragraph is available from the existing eagerly loaded Markdown contracts. Its length varies substantially, so an unbounded paragraph would shift all following content unpredictably.
- The catalog has no canonical variant-count field. Contract count claims vary by scope, so a numeric badge would risk asserting a false total.

## Design decision

Use the contract's `حوزه` as the shared eyebrow and its first Overview paragraph as the header summary, clamped to two lines. Add the missing area metadata to Chip and Tag. Keep the readiness badge and title. Do not add speculative counts or spacing to the preview itself.

## Risks and checks

- Markdown punctuation must not leak into plain header text; cover code, bold, links, and whitespace normalization.
- Every contract must resolve a non-empty area and summary. The catalog integrity check should fail with the affected component name if either is missing.
- Verify both long summaries (Input/Select) and shorter summaries at desktop and narrow widths; preserve the full Overview below the specimen.
- This content change improves hierarchy but may not eliminate the full measured preview-start difference; record the post-change result without claiming exact alignment unless measured.
