# Avatar — Plan

1. Record Lemon/Norato constitution and the DoD boundaries.
2. Specify four Vue adapter APIs and the separate 36/12/3/4 variant matrices.
3. Clarify all defaults from the live Lemon page; explicitly label inferred intermediate sizes.
4. Define the visual, RTL, image-fallback, accessible-name, responsive and technical checklist before coding.
5. Sequence adapter implementation, exports, token CSS, page sample/playground, catalog, contract and Figma rules.
6. Audit existing specimen selectors, token values, Vue export styles, catalog readiness, Button page wiring and current Avatar docs.
7. Implement each adapter and the shared Avatar page; compare current Lemon and Norato renders, exercise variants and interactions, run gates and push a verified checkpoint.

## Risks

- Deriving initials by code point can split combining marks; use grapheme segmentation where supported and cap at two clusters.
- Invalid image URLs must transition to fallback without changing the host's `src` value or causing layout shift.
- Group overlap can reverse in RTL if physical margins are used; use logical properties and verify actual item positions.
- Status colors alone are inaccessible; the person and presence label must be represented in accessible naming.
- A fixed `max` may be confused with total displayed circles; document that it limits person avatars and the `+N` counter is additional.
