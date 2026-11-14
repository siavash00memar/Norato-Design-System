# Analyze — Carousel preview width

## Verified cause

The live reference uses a compact centered slide composition at 367.2px inside a 636px stage. Norato's preview stage is 631.984×300px; its track is already capped at the medium token (360px), but `.sample-carousel` itself is `width:100%`. The header therefore stretches across 622px and separates the title and arrows across almost the full frame. The cards are not stretched; the composition wrapper is.

## Selected fix

Cap only the inert `.sample-carousel` wrapper at medium track max + the existing inter-slide gap token, yielding 368px, with `min(100%, …)` so smaller parents constrain it naturally. This targets the wrapper cause and leaves card aspect ratio, track dimensions, theme, and runtime API unchanged.

## Alternative considered

Constraining just the header would leave a wide preview wrapper and permit the controls to drift away from the track at other sizes. A dedicated new raw width token is unnecessary because existing medium size and gap tokens already express the composition.
