# Image family — Definition of Done

## Specification

- [x] Four Vue adapters match the four documented parts: Image, Thumbnail, Gallery and Lightbox.
- [x] Four ratios × four image states, three thumbnail sizes × three states, three gallery layouts and Lightbox are documented (29 contract combinations).
- [x] `src`, meaningful/decorative `alt`, crop behavior, controlled selection, modal open state and RTL direction are represented in the API.
- [x] Image geometry uses aspect ratio and object fit; media must not stretch to fit the preview frame.

## Browser and behavior evidence

- [x] Open local Image route in the refreshed Vite render: preview, Vue implementation/playground, copyable snippet and all nine rendered contract sections (Overview through Tokens) are visible to the browser accessibility tree.
- [x] Compare the same desktop and mobile viewports with the supplied design reference; record frame and media dimensions and visible differences in `docs/figma-component-rules.md`. Frame geometry differs from the shared Button frame and is retained for review; media remains proportional.
- [x] Verify Default, Loading and Error across four ratios (12 combinations). Loading uses a Norato-yellow spinner on a stable ratio frame; Error preserves the frame with a contained icon and accessible fallback name. Actual failed-network retry remains open.
- [x] Browser hover on the live Image adapter at a wide ratio showed the dark shade and gentle 1.025 zoom without changing the frame ratio. Cross-ratio hover review and reduced-motion emulation remain open.
- [x] At a wide ratio, `contain` showed the full 4:3 source with neutral side gutters; `cover` filled and cropped the frame without squashing. The generated Vue example followed the selected ratio and fit. Failed-source retry remains open.
- [x] All nine thumbnail size/state combinations were inspected across 48px, 64px and 80px sizes with Default, Selected and More; `+12` was visible and exposed in the accessible name.
- [x] AX confirmed selected state, Persian thumbnail name and disabled semantics. Clicking while disabled left it inactive; Space activated it and produced the selected state. A keyboard-visible yellow focus ring appeared around the thumbnail.
- [x] At 390px and 320px, Norato page widths measured 375px and 305px with no overflow. Media measured 320×240px and 263×197.25px respectively (4:3 preserved); reference media measured 320.76×243px and 245×243px. Norato shared preview frame measured 343×288px and 273×288px; reference frame measured 327×315px and 257×315px. Grid rendered in two columns at 390px; Masonry kept independent intrinsic ratios; Featured showed the selected main image and thumbnail rail. At 320px the reference document grew to 326px while Norato stayed within 305px.
- [x] Fresh responsive pass after adding the thumbnail controls: at 390×844, the Image Playground is 343px wide, preview frame 309×231.75px, thumbnail row 309×73px, single-column controls 343px wide, and code block 343px wide; document width equals its 375px client width. At 320×640, Playground is 273px wide, preview frame 239×179.25px, thumbnail row 239×73px, controls 273px wide, and code block 273px wide; document width equals its 305px client width. Both viewport screenshots show a single-column control stack and no horizontal page overflow. The viewport override was reset.
- [x] Lightbox opened with its close button focused; Escape dismissed it and returned focus to the opener. ArrowRight from index 0 wrapped to item 4 in RTL, with image alt, title and live position 4/4 exposed.
- [x] Fresh browser pass: Previous and Next buttons changed the live position 1/4 ↔ 4/4 in RTL and retained the invoking button focus. Tab and Shift+Tab cycled through close, Previous and Next without escaping the modal; Escape returned focus to the “نمایش تمام‌صفحه” opener.
- [x] Exact Lightbox image bounds measured with the live browser: desktop 1920×908 → 944.31×708.23px at (487.84, 62.28); mobile 390×844 → 270×202.5px at (60, 291.16); narrow mobile 320×640 → 200×150px at (60, 215.41). All retain 4:3, stay inside the modal, and produce no horizontal document overflow. The temporary viewport override was reset.
- [x] Browser accessibility tree exposed image names, thumbnail labels/pressed state, the disabled state, dialog title and live position. Independent screen-reader review remains open.
- [x] After fixing the hover scrim pseudo-element, inspected the live Image adapter at Square, Landscape, Wide and Portrait ratios. The dark shade is visible in each ratio and the image geometry retains its selected aspect ratio.
- [ ] Review reduced-motion emulation and run an independent screen-reader review.

## Browser follow-up — 2026-11-10

- [x] Fresh direct Image route rendered the shared preview frame, 4:3 image, Button-style implementation section, Vue playground and nine contract sections. The image stayed proportional within its frame.
- [x] In the live playground, selecting Error exposed the fallback as «غروب خورشید بر فراز تپه‌ها؛ تصویر در دسترس نیست» in the browser accessibility tree; returning to Default restored the named image. This verifies the documented state prop, not a real failed-network request or retry.
- [x] Opening Lightbox exposed its titled dialog, close/previous/next controls, image name and 1/4 position. Escape closed it and restored focus to «نمایش تمام‌صفحه».
- [ ] Reduced-motion browser emulation, real network failure/recovery, and independent screen-reader review remain open; this follow-up does not close Image DoD.

## Repository gates

- [x] `pnpm check:tokens`
- [x] `pnpm check:catalog`
- [x] `pnpm --dir apps/vue typecheck`
- [x] `pnpm --dir apps/vue build`
- [x] `git diff --check`
- [x] Browser viewport evidence and checklist status recorded in `docs/request-validation-checklist.md` and `specs/013-design-system-parity/families.md`.

Do not mark the family DoD complete until every required evidence item is observed or the unavailable check is explicitly reported.

## Baseline visual re-audit — 2026-11-10

- [x] Fresh matched desktop renders confirm the same 4:3 media ratio and bottom caption over a shade. The image remains intrinsic; local/reference frame size and vertical placement differ slightly with the documentation layout, as recorded above.
- [x] Existing matched 390×844 and 320×844 comparisons show proportional media, bounded RTL layouts and no horizontal overflow; gallery, thumbnail, Lightbox and primary keyboard paths cover the Baseline interaction gate.
- [ ] Reduced-motion emulation, real network failure/recovery and independent screen-reader review remain open for Final DoD.
