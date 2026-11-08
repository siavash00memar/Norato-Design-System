# Select — Specify

## Need

The Select documentation page must present a compact, polished design reference-like specimen matching the Button page structure. Its Select preview should have the same frame, glass/dot treatment and `Default` status marker used by neighboring completed specimens, with Norato colors. Its option geometry must remain bounded and avoid vertical or horizontal stretch.

## Existing behavior contract

The existing Vue adapter supports controlled single and staged multi-selection, search, grouped options, keyboard navigation, field states, label placement, sizes and Chips/Summary. This task preserves that contract and verifies it rather than expanding it.

## Acceptance criteria

1. The fixed specimen is inert and shows one selected Persian Select field plus an upper-right `Default` marker.
2. The frame uses semantic Norato glass, subtle dot pattern, brand color wash, border, radius and elevation tokens, matching design reference composition without copying its palette.
3. The desktop frame uses the established 640×288px maximum proportion and fills the available detail column without overflow; on a 390px viewport it fits a 320px frame with no document overflow.
4. The control and menu options retain a minimum 48px interaction target and RTL alignment.
5. Existing Select keyboard, single selection, multi staging/confirm/cancel, search, disabled, error, loading and read-only behavior remains intact.
6. The page retains Preview, Vue implementation/playground and all nine Button-like contract sections.
7. Token, catalog, Vue typecheck, production build and diff checks pass; browser request-validation checklist items are recorded against the actual render.
