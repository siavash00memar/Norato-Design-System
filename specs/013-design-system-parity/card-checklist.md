# Card DoD

Status: in progress

## Implementation

- [x] Six Vue adapters cover base, content, stat, profile, pricing and selectable cards.
- [x] Public exports, catalog entry, usage sample, Button-style specimen/playground and component contract are connected.
- [x] Native link/radio/checkbox semantics and Norato token-based yellow focus/selection controls are present.
- [x] Legacy generic sample-card selectors were removed from the shared specimen stylesheet.

## Visual and runtime review

- [ ] Compare local and reference screenshots at the same desktop viewport; record frame/card dimensions and correct any anatomy or spacing mismatch. Prior screenshots were at different effective viewport widths; local frame was about 580×288px and reference about 630×299px, so this is not a matched comparison.
- [ ] Exercise all four base styles and four content layouts; inspect stat trend colors and profile/pricing variants. Browser review confirmed all four content layouts (vertical, horizontal, overlay, text) and generated code synchronization; stat trend colors and profile/pricing variants still need visual review.
- [ ] Verify selection, radio group behavior, checkbox toggle, link target, keyboard focus and disabled behavior in the browser. Browser confirmed radio group ArrowDown changes selection, checkbox mode toggles, selected value is reflected in code, and disabled radio controls are exposed as disabled in the accessibility tree. Link target and keyboard-only focus styling remain unverified.
- [ ] Check image/media intrinsic proportions, long Persian text, RTL/LTR and 390px/320px overflow.
- [ ] Review the accessibility tree and independently confirm screen-reader announcements when available.

## Technical gates

- [x] Token check (`pnpm check:tokens`)
- [x] Component catalog check (`pnpm check:catalog`; 49 unique routes and contracts)
- [x] Vue TypeScript validation (`pnpm --dir apps/vue typecheck`)
- [x] Vue production build (`pnpm --dir apps/vue build`; existing large-bundle advisory not emitted in this run)
- [x] Git diff check (`git diff --check`)
- [x] Scan project text for the prohibited external reference name (no matches; lockfile, dependencies and build output excluded).

Do not close until each required browser and technical item is evidenced.
