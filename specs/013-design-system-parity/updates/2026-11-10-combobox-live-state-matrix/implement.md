# Implement — Combobox live state matrix

No source correction was indicated by the live matrix.

## Coverage and measured result

- Exercised 16 base configurations: Single/Multi × Small/Medium/Large/XLarge × Outside/Inside.
- For each configuration, verified all six contract states: Default, Hover, Typing, Filled, Error and Disabled (96 state cells). Also measured Disabled+Error and Focus+Pointer in all 16 configurations (112 state records total plus the independent hover pass).
- All 16 pure-hover checks had `:hover=true`, `:focus-within=false`, 1px Norato-yellow Stroke. All 16 default states had neutral `#e8e8e8` Stroke with neither hover nor focus.
- Typing showed the query `پژوهش`, opened the menu, set a resolving `aria-activedescendant`, and used the yellow Stroke. Filled committed `طراحی محصول`; Multi showed one bounded chip and its hidden selected-value description.
- Error set `aria-invalid=true` and the semantic red Stroke. Disabled set the native input's disabled state and neutral Stroke. Disabled+Error retained the neutral Stroke while preserving the invalid state.
- For every configuration, direction remained RTL; capsule geometry was 36px with a 1px border. Small/Medium/Large target rows were 48px; XLarge target rows were 56px. XLarge Inside uses a 64px field wrapper to accommodate its label while the interactive row remains 56px.
- At desktop 1920×903, document width remained 1905px with no horizontal overflow. At 390×844 the live group was 343px wide inside a 375px document; at 320×844 it was 273px wide inside a 305px document. Both mobile renders retained a 36px capsule and 56px row for XLarge. The open menu at 320px was 273px wide at x=16, ended at x=289, and its active option ID resolved without document overflow.
- Keyboard ArrowDown and Enter selected the active Multi option; Escape closed the menu and removed `aria-activedescendant` while preserving the chip. Tab reached the Clear button with a visible 2px contrast outline and yellow focus halo.

## Limits

- The reference desktop/mobile frame comparisons and the six-state reference inventory remain documented in `combobox-checklist.md`; this run focused on the live adapter.
- This is a measured browser matrix, not a saved screenshot for every cell. Independent screen-reader review and throttled cold-load fallback capture remain open; this stage does not close the Combobox DoD.
- A first automation pass attempted to change playground toggles while the Multi menu was open, so those readings were discarded and rerun after closing the menu. The corrected 96-cell data above was checked against the actual toggle states.
