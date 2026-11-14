# Card DoD

Status: in progress

## Implementation

- [x] Six Vue adapters cover base, content, stat, profile, pricing and selectable cards.
- [x] Public exports, catalog entry, usage sample, Button-style specimen/playground and component contract are connected.
- [x] Native link/radio/checkbox semantics and Norato token-based yellow focus/selection controls are present.
- [x] Legacy generic sample-card selectors were removed from the shared specimen stylesheet.

## Visual and runtime review

- [x] Fresh same-viewport desktop render at 1265×713 was compared side by side with the design reference. The Card frame, inset content card, RTL title/body hierarchy, rounded media area and Norato yellow/neutral palette remain visually aligned; no visible stretching or clipping appeared in the static specimen.
- [x] Live Card playground changed Content layout from Vertical to Horizontal and long-copy from Short to Long. The accessibility tree reported the selected values, and the generated Vue usage updated `layout="horizontal"` and the longer Persian copy. Both controls were restored to Vertical/Short; the visible page returned to its default content.
- [x] Horizontal playground media bounds are covered by the independent measured 16-combination matrix below. The fresh 2026-11-15 runtime recheck showed no obvious stretch and confirmed the live horizontal layout; the Card adapter/media styles have not changed, so the existing measurements remain applicable. Re-measure if the media slot or layout rules change.
- [x] Compare local and reference screenshots at the same 1905×951 desktop viewport. The Norato frame/card measured approximately 580×288px / 272×248px; the reference frame/card measured about 630×299px / 270×250px. The page frame remains narrower because of Norato's docs column; the content card now matches the reference card dimensions and has an inset, rounded media panel.
- [x] Exercise all four base styles, base selected/disabled, four content layouts, all three stat trends, both profile layouts, pricing featured toggle and selectable radio/checkbox modes. Browser confirmed generated code synchronizes with each newly added base-state, stat-trend and profile-cover selection. Pricing feature state and selectable radio/checkbox behavior were already verified.
- [x] Verify selection, radio group behavior, checkbox toggle, keyboard focus and disabled behavior in the browser. Radio group ArrowDown and Space update the controlled selection; screenshot shows the 2px yellow focus ring; checkbox mode toggles; disabled radios are exposed as disabled; activating the named article link navigates to `/guide`.
- [x] Mobile browser review at 390×844 and 320×844: document widths are 375px and 305px with no horizontal overflow. Button-style specimen frames measure 343×288px and 273×288px; static content cards measure 272×248px and 263×244px. RTL remains intact.
- [x] Same-viewport mobile reference comparison at 390×844: reference stage/card measure 327×324px and 270×253px; Norato stage/card measure 343×288px and 272×248px. The Norato frame follows its shared 288px specimen size while the content card remains within 2px width and 5px height of the reference.
- [x] Fresh same-viewport mobile browser review at 414px: reference and Norato show the same RTL content-card hierarchy; Norato's media and body remain bounded in the dotted frame with no visible stretch or clipping, and semantic Norato yellow remains in use.
- [x] Horizontal Content Card media no longer stretches with a taller text column. Browser measured the square media at 112×112px in LTR/320px and RTL/390px; vertical media remained 16:9 at 309×174px in RTL/390px. No document overflow.
- [x] Added a short/long Persian copy control to the Content Card playground; the rendered card and generated Vue snippet stay synchronized.
- [x] Long-copy browser matrix passed for all four content layouts, both RTL/LTR directions and both 320×844/390×844 viewports (16 combinations). Document widths stayed at 305px/375px with no horizontal overflow. At 320px, vertical media measured 239×134px and horizontal media stayed square at 112×112px; at 390px, vertical media measured 309×174px and horizontal media stayed 112×112px. Text cards grew naturally with the longer Persian content.
- [ ] Review the accessibility tree and independently confirm screen-reader announcements when available. Browser accessibility tree exposes named links, radio/checkbox controls, checked values and disabled state; no separate screen-reader session was available for this review.

## Technical gates

- [x] Token check (`pnpm check:tokens`)
- [x] Component catalog check (`pnpm check:catalog`; 49 unique routes and contracts)
- [x] Vue TypeScript validation (`pnpm --dir apps/vue typecheck`)
- [x] Vue production build (`pnpm --dir apps/vue build`; existing large-bundle advisory not emitted in this run)
- [x] Git diff check (`git diff --check`)
- [x] Scan project text for the prohibited external reference name (no matches; lockfile, dependencies and build output excluded).

Do not close until each required browser and technical item is evidenced.

## Live horizontal-layout recheck — 2026-11-15

- [x] In a fresh local browser session, the live Content Card playground changed from Vertical to Horizontal; the accessibility tree exposed Horizontal as selected and the generated example changed to `layout="horizontal"`.
- [x] The live screenshot showed the media as a bounded square beside the RTL content, with no obvious vertical stretching. This visual review did not measure the media bounds; the measured 16-combination matrix above remains the geometry evidence.
- [x] Restored the playground layout to Vertical and confirmed the generated example returned to `layout="vertical"`.
- [ ] Independent screen-reader announcement review remains open.
