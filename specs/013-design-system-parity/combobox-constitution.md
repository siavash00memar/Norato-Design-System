# Combobox — Constitution Gate

## Authority

The current user direction makes design reference (`design reference) the visual reference, keeps Norato's palette, requires Button-equivalent component-page structure, and rejects stretched geometry. Project authority also requires RTL-first Vue 3 behavior, semantic tokens, 48px minimum targets, keyboard and visible focus, and browser-render validation. The component contract and current Vue adapter define the existing API.

## Constraints

- Preserve the current single/multiple API, recent/loading/empty/create states unless browser evidence proves a defect.
- Compare the actual design reference and Norato pages at equivalent viewport sizes; keep raw geometry distinct from visual judgement.
- Audit existing selectors before changing CSS; use Norato semantic tokens and do not add a competing override.
- Keep every change within the established Vue 3 component contract and preserve RTL.
- Follow the exact sequence: Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement.

## Gate

**Passed for a bounded Combobox parity and DoD audit.** Existing evidence says the component and nine-section page exist, while the visual/interaction matrix and some mobile comparisons remain open.
