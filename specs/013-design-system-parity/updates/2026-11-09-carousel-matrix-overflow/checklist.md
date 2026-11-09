# Checklist — Carousel mobile matrix overflow

- [x] Existing component-specific selectors audited before editing.
- [x] Mobile cards reflow without changing their 48px control targets.
- [x] Exact 390px and 320px browser renders have no document-level horizontal overflow.
- [x] Variant examples remain reachable and RTL placement remains correct.
- [x] Request-validation checklist and error log updated.
- [x] Token/catalog/TypeScript/build/diff checks pass.
- [x] Verified change pushed to origin.

## Result

The narrow variant gallery now uses a single column and semantic spacing. Five indicator targets fit in the sample at 320px, dot samples stack vertically, and no local or document scrollbar is needed. This correction closes only Carousel's mobile document-overflow item; it does not close the family DoD.
