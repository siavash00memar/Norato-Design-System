# Accordion — Definition of Done

**Status:** Adapter and reference-shaped page are implemented; final DoD remains open.

## Specification coverage

- [x] Detail page follows the Button structure: inert specimen, executable Vue playground, copyable example, then Overview, Anatomy, Variants, Sizes, States, Parts, Usage, Accessibility and Tokens.
- [x] RTL Persian content; title on the right, chevron on the left; Norato yellow interaction accent and semantic tokens.
- [x] Controlled and uncontrolled single/multiple expansion, collapsible behavior, per-item/group disabled state, custom content slot, grouped/separated layout, plain/card row style and four sizes.
- [x] Semantic headings, native trigger buttons, `aria-expanded`, stable `aria-controls`, named `region`, 48px minimum trigger target, visible keyboard focus and reduced-motion rule.

## Browser review evidence (2026-11-08)

- [x] Same browser viewport screenshot comparison at 1536×642: reference frame about 632×300px, Norato frame about 578×286px; Norato documentation column constrains the sample. Both frames center a compact accordion, keep Persian titles right and chevrons left, and show the first row expanded. Norato preview follows the shared dotted Button frame and its own yellow palette.
- [x] Page hierarchy and rendered preview/playground/content are present. In the inert preview, first item is open and no visible vertical stretching occurs.
- [x] In the live default single mode, opening the second row collapses the first; the accessibility tree reports only the second trigger expanded and its content region visible.
- [x] Multiple mode produces two independently open rows and status “۲ ردیف باز است.” Switching modes resets to a valid value for that mode.
- [x] Disabled second item is exposed as a disabled button; disabled whole group exposes all enabled triggers as disabled. A disabled expanded item retains its value and panel.
- [x] ArrowDown from the first trigger moved focus to the next enabled trigger, skipping the disabled second item. Home moved focus to the first trigger; Enter opened the focused row. Focused trigger remained represented in the accessibility tree.
- [x] Custom content slot renders its supplied paragraph and Norato action. Generated Vue snippet updates to match custom-content and multiple settings.
- [x] Separated + card row options update the live preview; selection is exposed through the custom listbox, not a native browser dropdown.
- [x] Desktop screenshot shows intrinsic row/content height and no vertical stretching in grouped/separated samples.
- [ ] Verify 320px and 390px viewport geometry, horizontal overflow and narrow-screen wrapping.
- [ ] Compare Small, Medium, Large and XLarge trigger geometry and complete layout × row-style × size × expansion × state combinations.
- [ ] Verify actual Accordion trigger focus-ring color/contrast, Space activation, ArrowUp, End, collapsible=false, LTR direction and reduced-motion rendering.
- [ ] Verify focus remains within expected tab order for closed panels and inspect actual panel `aria-labelledby`/`aria-controls` relations beyond the accessibility tree labels.
- [ ] Independent screen-reader review.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build` and `git diff --check` pass. Build reports the existing >500kB JavaScript chunk advisory.

**DoD decision:** Keep Accordion open until the unchecked viewport, variant, interaction and assistive-technology items pass. The desktop review is evidence of a close structural match, not proof of the complete component DoD.
