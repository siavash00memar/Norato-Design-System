# Badge — Clarify

- API decision: use a Vue adapter with `type`, `size`, `tone`, `count`, `maxCount`, and required Persian `anchorLabel` props; keep the actual anchor in a named scoped slot.
- Accessibility decision: expose a Persian `accessibleName` slot prop derived from `anchorLabel` and the marker meaning; the host binds it to the underlying interactive element. Hide the duplicate visible marker from assistive technology. This follows Lemon's anchor-label requirement without wrapping arbitrary interactive DOM in a new interactive role.
- Counting decision: finite non-negative integers only, show 0, cap display at `maxCount+`, default cap 99. Dot ignores count.
- Placement decision: use logical `inset-inline-end` so RTL places the marker at physical top-left; LTR mirrors naturally.
- Palette decision: Danger/Success use status tokens with on-code white text; Neutral uses the neutral surface and primary text; Inverse uses the code surface and on-code text. The 2px separator uses the component surface token.
- Size decision: map Small/Medium Count to 16/20px and Dot to 8/10px (including the ring). Lemon's text does not publish diameters; these tokenized values follow its visible proportions and Norato's existing compact icon/text scale. Browser comparison will determine whether the estimate needs revision.
- No material decisions remain unresolved.
