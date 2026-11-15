# Accordion — Definition of Done

**Status:** Adapter and reference-shaped page are implemented; final DoD remains open.

## Specification coverage

- [x] Detail page follows the Button structure: inert specimen, executable Vue playground, copyable example, then Overview, Anatomy, Variants, Sizes, States, Parts, Usage, Accessibility and Tokens.
- [x] RTL Persian content; title on the right, chevron on the left; Norato yellow interaction accent and semantic tokens.
- [x] Controlled and uncontrolled single/multiple expansion, collapsible behavior, per-item/group disabled state, custom content slot, grouped/separated layout, plain/card row style and four sizes.
- [x] Semantic headings, native trigger buttons, `aria-expanded`, stable `aria-controls`, named `region`, 48px minimum trigger target, visible keyboard focus and reduced-motion rule.

## Browser review evidence (2026-11-08)

- [x] Fresh same-viewport desktop comparison at 1265×713: Norato keeps the three-row grouped RTL composition, open first answer, right-aligned titles, left-side chevrons and yellow open state. The local frame is visually close to the reference frame; its accordion rows are slightly narrower/taller, with no apparent stretching or clipping.
- [x] Fresh live interaction: opening row 2 in single mode closes row 1; enabling multiple mode starts with a valid single selection, and then opening row 2 leaves both rows open. Disabling multiple restores the default single selection and the generated snippet returns to its default configuration.
- [x] ArrowDown from row 1 moves focus to row 2; the browser accessibility state reports row 2 focused and the screenshot shows its yellow focus ring. RTL was preserved.
- [ ] Independent screen-reader review remains open; this fresh pass used the browser accessibility tree, not spoken output.
- [x] Same browser viewport screenshot comparison at 1536×642: reference frame about 632×300px, Norato frame about 578×286px; Norato documentation column constrains the sample. Both frames center a compact accordion, keep Persian titles right and chevrons left, and show the first row expanded. Norato preview follows the shared dotted Button frame and its own yellow palette.
- [x] Page hierarchy and rendered preview/playground/content are present. In the inert preview, first item is open and no visible vertical stretching occurs.
- [x] In the live default single mode, opening the second row collapses the first; the accessibility tree reports only the second trigger expanded and its content region visible.
- [x] Multiple mode produces two independently open rows and status “۲ ردیف باز است.” Switching modes resets to a valid value for that mode.
- [x] Disabled second item is exposed as a disabled button; disabled whole group exposes all enabled triggers as disabled. A disabled expanded item retains its value and panel.
- [x] ArrowDown from the first trigger moved focus to the next enabled trigger, skipping the disabled second item. Home moved focus to the first trigger; Enter opened the focused row. Focused trigger remained represented in the accessibility tree.
- [x] Additional keyboard checks: Tab moved to the next trigger and exposed the yellow 2px focus ring; ArrowUp returned to the first trigger; Space toggled it; End moved focus to the last trigger. Closed custom-content panels remove their nested action from the accessibility tree.
- [x] Custom content slot renders its supplied paragraph and Norato action. Generated Vue snippet updates to match custom-content and multiple settings.
- [x] Separated + card row options update the live preview; selection is exposed through the custom listbox, not a native browser dropdown.
- [x] Size selector applied Small, Large and XLarge; selected size was reflected in the generated Vue snippet. The XLarge live row grew naturally and did not stretch to fill the preview. Medium was the initial value.
- [x] Desktop screenshot shows intrinsic row/content height and no vertical stretching in grouped/separated samples.
- [x] At 390px content width, document width remains 390px with no horizontal overflow; the shared sample frame measures 358.4×288px and the accordion 320px wide. The open live playground measures 320×190.4px with naturally sized rows.
- [x] At 320px content width, document width remains 320px with no horizontal overflow; sample frame measures 288×288px, live playground frame 288×243.2px, accordion 254.4px wide. Expanded content measures about 252.8×50.4px and triggers 52px high; Persian content wraps without stretching.
- [x] Matched reference comparison at 390px: reference frame 342.4×300px with accordion 337.8×179.3px. At 320px reference frame is 272×300px but its document has 6px overflow from navigation/tools; Norato remains within viewport. Norato's shared Button frame and narrower documentation column account for the frame difference; row content stays compact.
- [x] Compared Small, Medium, Large and XLarge trigger geometry: 48, 52, 56 and 64px. Exercised all 16 layout × row-style × size configurations in both expanded and collapsed states (32 combinations); each retained three equal-width rows, expected trigger height and no page/component overflow.
- [x] Keyboard focus on a live trigger visibly shows the yellow 2px ring; Space activation, ArrowUp and End pass.
- [x] `collapsible=false` kept the currently open row expanded and exposed its trigger as `aria-disabled=true`; activating it did not close the row. LTR selector now sets the inherited DOM direction, with title/chevron placement mirrored correctly. The playground snippet includes both settings.
- [x] Emulated `prefers-reduced-motion: reduce` in an isolated Chrome target. `matchMedia` returned true; trigger and chevron transitions computed to `0s`. Clicking a closed row expanded it while the chevron remained at `0s`, preserving RTL and the expected multiple-open state. Restoring `no-preference` returned the trigger/chevron transitions to `0.14s`.
- [x] Inspected all three trigger/panel pairs: every `aria-controls` resolves to its panel, each panel's `aria-labelledby` resolves back to its trigger, and closed panels are hidden. Closed custom-content actions are excluded from the accessibility tree and keyboard tab sequence.
- [ ] Independent screen-reader review.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build` and `git diff --check` pass. Build reports the existing >500kB JavaScript chunk advisory.

**DoD decision:** Keep Accordion open until an independent screen-reader review passes. Reduced-motion behavior is verified in an isolated browser target. Desktop and mobile checks are evidence of a close structural match, not proof of the complete component DoD.

## Accordion — fresh live single/multiple recheck — 2026-11-16

- [x] In the live RTL playground, opening «حالت تیره هم دارد؟» collapsed «نوراتـو رایگانه؟»; AX reported the first trigger collapsed and the second expanded, with its associated panel present.
- [x] Enabling multiple mode reset to a valid single default selection. Opening the second row then left both triggers expanded and the live status reported two open rows.
- [x] Disabling multiple restored the initial single-mode value, first row expanded, second row collapsed, and the generated Vue snippet returned to `expanded='free'` without the `multiple` prop. The screenshot shows natural row heights and the RTL layout.
- [ ] This focused browser recheck does not replace independent screen-reader speech review; Accordion Final DoD remains open.

## Accordion — fresh visual cross-check — 2026-11-16

- [x] Fresh local and reference screenshots both show three RTL rows, the first row open, right-aligned Persian titles, left-side chevrons, and compact intrinsic row content. Norato uses its yellow open-state surface.
- [x] No visible vertical stretching or clipping appeared in either captured sample.
- [ ] The captures were at different viewport sizes (local narrow; reference desktop), so this pass provides qualitative structure evidence only and is not a new pixel/geometry parity measurement. Existing matched-viewport evidence remains the source for geometry.
