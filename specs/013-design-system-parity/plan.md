# Implementation plan

1. Keep the existing Vue 3 route and nine-section document shell as the Button structural baseline. Compare each page with its exact `design reference<slug>` reference, then refine page-specific specimens and sections without fabricating runtime APIs.
2. For each family in catalog order after Button, inspect its contract, Vue adapter status, design reference page, source selectors, and actual rendered geometry. Record observed differences before editing.
3. Edit only the relevant Vue specimen, documentation renderer, tokens, contract, and CSS. Remove or neutralize conflicting legacy selectors before adding new rules. Keep Norato colors and typography, RTL, 48px real targets and supported API boundaries.
4. Validate the page at desktop and mobile widths. Exercise supported behavior and keyboard/focus/disabled/loading/invalid states. Compare screenshots and measured element boxes with design reference, distinguishing intentional Norato policy differences.
5. Complete the per-family checklist, update request validation and error log, run token/catalog/type/build checks, and only then mark that family done. Repeat until all 48 families pass.

## Current evidence

- Input reference page inspected at design reference: single editorial column, compact email specimen, nine numbered sections, sizes shown as 32/40/48/56px.
- Input Norato browser render inspected at 127.0.0.1:5173: the live input box is 48px high and the top specimen contains two 48px fields in a 260px frame. This is not proof that other families do not stretch.
- The current generic `.component-sample` CSS uses a shared minimum-height frame. Its descendants need per-family geometry checks; a global height override would risk harming larger examples.

## Switch current analysis

- design reference's Switch page provides one compact field specimen and documents 30 Switch variants plus 6 Switch Field variants. Norato uses the same specimen hierarchy with its semantic-blue on state.
- Current browser DOM: RTL, 48×48 target, 40×24 medium track and 320×288 specimen frame on the narrow inspected layout; no document horizontal overflow. Space and Enter toggle the controlled value.
- Remaining analysis is interaction/render-state coverage (all states/sizes/values, pointer hover, independent screenreader), not base geometry or keyboard toggling.

## Segmented Control current analysis

- design reference's page shows a 3-item single-select control, glass track, raised selected option and a second Contrast style. It documents 2/3/4 options × 2 styles × 4 sizes (24 group variants) and 64 item combinations.
- Reka ToggleGroup is installed in `@norato/vue`; it provides controlled single selection, roving focus, RTL and pressed button state. Selected state cannot be cleared in the adapter.
- Norato's 48px interaction floor changes design reference's Small/Medium visual target; text density and padding vary while all real hit targets remain at least 48px.

## Risks

- Several families are Proposed, so their visual specimen must stay labeled inert until supported Vue behavior exists.
- design reference's 32/40px controls conflict with Norato's 48px minimum target for interactive controls; preserve the Norato rule and document the visual difference.

## Tooltip desktop frame width — 2026-11-10

- A matched 1265×720 browser capture showed the shared page shell limited the Tooltip preview to 631.98px while the reference stage measured 636px; height already matched at 300px.
- A global shell-cap increase was tested and rejected because it regressed recorded Input and Select frame widths by 4px and 2px. Keep the shared shell stable and apply the existing 4px spacing-token allowance directly to Tooltip's desktop specimen frame.
- Verify the rendered Tooltip geometry, unchanged Button/Input/Select frames, page overflow, and token/catalog/type/build gates before recording the correction.

## Select refinement analysis

- Use Reka UI Select primitives for the trigger, listbox, groups, item focus, RTL and portal positioning; style through Norato tokens. Use controlled draft state around multiple selection so only Confirm commits and Cancel/Escape restore the previous value.
- Search is optional, appears inside the open menu, and filters grouped options without changing the committed value. If Select's primitive cannot safely host an editable filter while preserving its focus model, use Reka Combobox composition for the search surface and document that boundary.
- Keep option rows and trigger at least 48px high. design reference's four visual size labels may vary typography/padding, but never below the Norato interaction target.
- Check the installed Reka API and keyboard semantics before coding. The component remains incomplete until single/multiple, groups/search, confirm/cancel, RTL, focus, responsive placement and all states work in the actual browser.
