# Breadcrumbs — DoD

## Lemon parity and composition

- [x] Lemon reference inspected at 1280×720 and 390×844; Norato detail page inspected at matched desktop/mobile sizes. Both show an RTL path, left-pointing chevron, raised current item and a home marker; Norato keeps its semantic blue palette and the Button page hierarchy.
- [x] Desktop Norato specimen frame is 584×136px and the breadcrumb is 212×48px. At 390px, specimen frame is 343×136px and the document width is 375px. At 320px, document width remains 320px; the path scrolls internally to preserve labels and 48px targets.

## Runtime and accessibility

- [x] Plain/Glass, Small/Medium/Large, Chevron/Slash and expanded/collapsed controls were exercised; each sampled link/disclosure remains 48px high.
- [x] Six-step RTL path shows first, ellipsis, final parent and current page. Disclosure exposes the three middle links; pointer click and Enter toggle it. `aria-expanded`, valid `aria-controls`, one `aria-current="page"`, named `nav` and ordered list semantics were verified.
- [x] Keyboard tab reaches the disclosure and computes a 2px focus outline. Static specimen contains no interactive descendants. Browser console has no recorded errors.
- [ ] Independent screen-reader review and exhaustive visual cross-product of all 42 Lemon variants/states remain open; maturity stays Adapted.

## Repository gates

- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), Vue typecheck, production build and `git diff --check` passed. Vite reports a JS chunk above 500KB.
