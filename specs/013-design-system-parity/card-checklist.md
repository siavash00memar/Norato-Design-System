# Card DoD

Status: in progress

## Implementation

- [x] Six Vue adapters cover base, content, stat, profile, pricing and selectable cards.
- [x] Public exports, catalog entry, usage sample, Button-style specimen/playground and component contract are connected.
- [x] Native link/radio/checkbox semantics and Norato token-based yellow focus/selection controls are present.
- [x] Legacy generic sample-card selectors were removed from the shared specimen stylesheet.

## Visual and runtime review

- [x] Compare local and reference screenshots at the same 1905×951 desktop viewport. The Norato frame/card measured approximately 580×288px / 272×248px; the reference frame/card measured about 630×299px / 270×250px. The page frame remains narrower because of Norato's docs column; the content card now matches the reference card dimensions and has an inset, rounded media panel.
- [x] Exercise all four base styles, base selected/disabled, four content layouts, all three stat trends, both profile layouts, pricing featured toggle and selectable radio/checkbox modes. Browser confirmed generated code synchronizes with each newly added base-state, stat-trend and profile-cover selection. Pricing feature state and selectable radio/checkbox behavior were already verified.
- [x] Verify selection, radio group behavior, checkbox toggle, keyboard focus and disabled behavior in the browser. Radio group ArrowDown and Space update the controlled selection; screenshot shows the 2px yellow focus ring; checkbox mode toggles; disabled radios are exposed as disabled; activating the named article link navigates to `/guide`.
- [x] Mobile browser review at 390×844 and 320×844: document widths are 375px and 305px with no horizontal overflow. Button-style specimen frames measure 343×288px and 273×288px; static content cards measure 272×248px and 263×244px. RTL remains intact.
- [x] Same-viewport mobile reference comparison at 390×844: reference stage/card measure 327×324px and 270×253px; Norato stage/card measure 343×288px and 272×248px. The Norato frame follows its shared 288px specimen size while the content card remains within 2px width and 5px height of the reference.
- [x] Horizontal Content Card media no longer stretches with a taller text column. Browser measured the square media at 112×112px in LTR/320px and RTL/390px; vertical media remained 16:9 at 309×174px in RTL/390px. No document overflow.
- [ ] Long Persian content stress case and the full four-layout LTR/mobile matrix remain open; current playground copy is fixed and no long-copy control is provided.
- [ ] Review the accessibility tree and independently confirm screen-reader announcements when available. Browser accessibility tree exposes named links, radio/checkbox controls, checked values and disabled state; no separate screen-reader session was available for this review.

## Technical gates

- [x] Token check (`pnpm check:tokens`)
- [x] Component catalog check (`pnpm check:catalog`; 49 unique routes and contracts)
- [x] Vue TypeScript validation (`pnpm --dir apps/vue typecheck`)
- [x] Vue production build (`pnpm --dir apps/vue build`; existing large-bundle advisory not emitted in this run)
- [x] Git diff check (`git diff --check`)
- [x] Scan project text for the prohibited external reference name (no matches; lockfile, dependencies and build output excluded).

Do not close until each required browser and technical item is evidenced.
