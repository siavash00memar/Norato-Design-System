# Range state gallery — Analysis

- Evidence: current 5175 browser page's Range States used the generic `.state-shape`, visibly showing a blue dot and blue line inside a pill. This is not a slider model and conflicts with the approved yellow accent.
- Source: `.state-shape` is shared across unrelated families, so changing it globally could introduce regressions. Use a Range-only template branch and selector instead.
- Geometry: Range's existing contract defines a 48px target and 20px visible knob. Use existing Range, spacing, surface, border and focus tokens; retain RTL fill from the physical right.
- Risk: state card classes derive from contract labels, so inspect their actual mapping in the browser, especially disabled and focus.
- Technical uncertainty: visual screenshot must confirm percentage fill and thumb centering under RTL; static sample does not constitute runtime slider evidence.
