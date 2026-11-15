# Clarify — Shared Component Header Context

## Decisions

- Category is sourced from `**حوزه:**` in the component contract. Chip and Tag will receive the missing `Data Display` value; search-only catalog tags will not be repurposed as visual categories.
- Summary is the first paragraph beneath `## Overview` in that same contract. Inline Markdown delimiters are removed for the header copy.
- Summary is visually clamped to two lines with an ellipsis; the complete Overview remains in its normal contract section immediately below.
- Variant counts are omitted because no canonical count field exists and some documented combination totals vary by scope.
- No component API, specimen sizing, color, or interaction behavior changes are intended.

## Open decisions

None. These choices use existing authoritative contract data and do not infer undocumented component behavior.
