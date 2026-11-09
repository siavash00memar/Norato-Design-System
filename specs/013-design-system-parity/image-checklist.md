# Image family — Definition of Done

## Specification

- [x] Four Vue adapters match the four documented parts: Image, Thumbnail, Gallery and Lightbox.
- [x] Four ratios × four image states, three thumbnail sizes × three states, three gallery layouts and Lightbox are documented (29 contract combinations).
- [x] `src`, meaningful/decorative `alt`, crop behavior, controlled selection, modal open state and RTL direction are represented in the API.
- [x] Image geometry uses aspect ratio and object fit; media must not stretch to fit the preview frame.

## Browser and behavior evidence

- [x] Open local Image route in the refreshed Vite render: preview, Vue implementation/playground, copyable snippet and all nine rendered contract sections (Overview through Tokens) are visible to the browser accessibility tree.
- [x] Compare the same desktop and mobile viewports with the supplied design reference; record frame and media dimensions and visible differences in `docs/figma-component-rules.md`. Frame geometry differs from the shared Button frame and is retained for review; media remains proportional.
- [ ] Verify Default/Hover/Loading/Error across all four ratios (16 combinations); check load error, retry via changing `src`, crop/contain and stable dimensions.
- [x] Browser observed 12 combinations: Default, Loading and Error at each of four ratios. Loading uses a Norato-yellow spinner on a stable ratio frame, and Error preserves the frame with a contained icon and accessible fallback name. Hover, actual failed-network retry and crop/contain appearance remain open.
- [ ] Verify all 9 thumbnail combinations, more-count accessible name, selected styling, disabled behavior, 48px minimum target, keyboard activation and focus visibility.
- [x] At 390px and 320px, Norato page widths measured 375px and 305px with no overflow. Media measured 320×240px and 263×197.25px respectively (4:3 preserved); reference media measured 320.76×243px and 245×243px. Norato shared preview frame measured 343×288px and 273×288px; reference frame measured 327×315px and 257×315px. Grid rendered in two columns at 390px; Masonry kept independent intrinsic ratios; Featured showed the selected main image and thumbnail rail. At 320px the reference document grew to 326px while Norato stayed within 305px.
- [x] Lightbox opened with its close button focused; Escape dismissed it and returned focus to the opener. ArrowRight from index 0 wrapped to item 4 in RTL, with image alt, title and live position 4/4 exposed. Focus containment, previous/next buttons, reduced motion and exact media bounds remain open.
- [ ] Inspect browser accessibility tree for image names, thumbnail button labels/pressed state, dialog title and live position; independent screen-reader review remains separate.

## Repository gates

- [x] `pnpm check:tokens`
- [x] `pnpm check:catalog`
- [x] `pnpm --dir apps/vue typecheck`
- [x] `pnpm --dir apps/vue build`
- [x] `git diff --check`
- [x] Browser viewport evidence and checklist status recorded in `docs/request-validation-checklist.md` and `specs/013-design-system-parity/families.md`.

Do not mark the family DoD complete until every required evidence item is observed or the unavailable check is explicitly reported.
