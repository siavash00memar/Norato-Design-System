# Image family — Definition of Done

## Specification

- [x] Four Vue adapters match the four documented parts: Image, Thumbnail, Gallery and Lightbox.
- [x] Four ratios × four image states, three thumbnail sizes × three states, three gallery layouts and Lightbox are documented (29 contract combinations).
- [x] `src`, meaningful/decorative `alt`, crop behavior, controlled selection, modal open state and RTL direction are represented in the API.
- [x] Image geometry uses aspect ratio and object fit; media must not stretch to fit the preview frame.

## Browser and behavior evidence

- [x] Open local Image route in the refreshed Vite render: preview, Vue implementation/playground, copyable snippet and all nine rendered contract sections (Overview through Tokens) are visible to the browser accessibility tree.
- [ ] Compare the same desktop and mobile viewports with the supplied design reference; record frame and media dimensions and visible differences.
- [ ] Verify Default/Hover/Loading/Error across all four ratios (16 combinations); check load error, retry via changing `src`, crop/contain and stable dimensions.
- [x] Browser observed Default, Loading and Error at Landscape ratio; loading uses a Norato-yellow spinner on a stable gray frame, and Error preserves the frame with a contained icon and accessible fallback name. Remaining cross-product and actual failed-network retry checks are open.
- [ ] Verify all 9 thumbnail combinations, more-count accessible name, selected styling, disabled behavior, 48px minimum target, keyboard activation and focus visibility.
- [x] At 385×630 mobile viewport, Grid rendered as two columns and Masonry retained separate intrinsic image ratios; Featured showed the selected main image and thumbnail rail. RTL order and no visible horizontal overflow were observed. Exact 390px/320px measurements remain open.
- [x] Lightbox opened with its close button focused; Escape dismissed it and returned focus to the opener. ArrowRight from index 0 wrapped to item 4 in RTL, with image alt, title and live position 4/4 exposed. Focus containment, previous/next buttons, reduced motion and exact media bounds remain open.
- [ ] Inspect browser accessibility tree for image names, thumbnail button labels/pressed state, dialog title and live position; independent screen-reader review remains separate.

## Repository gates

- [ ] `pnpm check:tokens`
- [ ] `pnpm check:catalog`
- [ ] `pnpm --dir apps/vue typecheck`
- [ ] `pnpm --dir apps/vue build`
- [ ] `git diff --check`
- [ ] Browser viewport evidence and checklist status recorded in `docs/request-validation-checklist.md` and `specs/013-design-system-parity/families.md`.

Do not mark the family DoD complete until every required evidence item is observed or the unavailable check is explicitly reported.
