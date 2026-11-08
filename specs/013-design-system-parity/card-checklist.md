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
- [ ] Check image/media intrinsic proportions, long Persian text, RTL/LTR and 390px/320px overflow. RTL and LTR render with no stretching at desktop; mobile overflow and long-text behavior need viewport-specific checks.
- [ ] Review the accessibility tree and independently confirm screen-reader announcements when available. Browser accessibility tree exposes named links, radio/checkbox controls, checked values and disabled state; no separate screen-reader session was available for this review.

## Technical gates

- [x] Token check (`pnpm check:tokens`)
- [x] Component catalog check (`pnpm check:catalog`; 49 unique routes and contracts)
- [x] Vue TypeScript validation (`pnpm --dir apps/vue typecheck`)
- [x] Vue production build (`pnpm --dir apps/vue build`; existing large-bundle advisory not emitted in this run)
- [x] Git diff check (`git diff --check`)
- [x] Scan project text for the prohibited external reference name (no matches; lockfile, dependencies and build output excluded).

Do not close until each required browser and technical item is evidenced.
