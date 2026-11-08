# Timeline — Analyze

## Initial inspection
- Inventory currently marks Timeline Proposed and has no Vue adapter/export.
- The current inventory specimen is a two-row text placeholder with a literal vertical bar; it does not show the right-side rail, markers, or 26 variants.
- Component contract specifies 9 Timeline Item, 15 Marker, and 2 Activity Feed variants, but its Tokens section incorrectly lists `--norato-color-brand-blue` for the Active state.
- Existing page skeleton and inventory use `ComponentSpecimen.vue`; timeline visuals have no dedicated selectors or reusable Vue components.
- Lemon's actual page confirms: right-side rail in RTL; Dot/Icon/Avatar markers; Neutral/Active/Success/Warning/Danger tones; Active is elevated white glass; Activity Feed is day-grouped; semantic `<ol>`; stable order and page beyond 20 items.

## Risks and corrections
- Remove blue from Timeline's active-state token contract. Active should use elevated neutral glass with Norato yellow details.
- Replace the literal-bar placeholder rather than layering styles over it.
- Keep grouping/sorting outside the component to avoid timezone inference and hidden data loss.

## Implementation analysis
- `NoratoTimeline` owns only list semantics and position derivation; `NoratoTimelineItem` owns a single ordered-list item; `NoratoTimelineMarker` owns fixed intrinsic marker geometry; `NoratoActivityFeed` receives explicitly labeled groups and does not infer dates.
- First/middle/last connectors use logical placement with `dir` on each item. A single-item edge case suppresses the connector without changing the documented three-position matrix.
- Status shape symbols provide non-color cues for Dot/Avatar/Icon markers; the Active marker remains a raised white/glass circle with yellow stroke. Status and layout styling use existing Norato tokens.
- The dedicated Vue page will exercise all 26 contract combinations and expose layout, marker, direction, and feed density controls. Static preview remains inert, as required by the Button page model.
- Browser finding: the initial rail used `inset-inline-end`, which put it on the physical left in RTL. Switched rail and marker anchoring to `inset-inline-start`; browser now shows right rail in RTL and left rail in LTR. Recorded as ERR-132.
- Current browser evidence: local page has 9 item variants, 15 marker variants, and 2 density variants; at the available 499×932 viewport document width is 484px with no horizontal overflow. RTL/LTR placement is correct, static preview has zero focusable descendants, and browser AX exposes ordered list, heading, time, and marker names. Keyboard menu navigation, focus indication, and restoration of default playground state also passed.
- Remaining evidence needed: rerun engineering gates, matched Lemon viewport comparison, exact 390/320 responsive measurements, and independent screen-reader review. Browser AX cannot substitute for a screen-reader session; DoD remains open.
