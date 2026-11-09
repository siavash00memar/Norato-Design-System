# Table — Definition of Done

Status: in progress. Last reviewed: 2026-11-09.

## Acceptance checks

- [x] Public Vue adapter, typed props/events/slots, catalog/export/usage example and live playground are connected.
- [x] Button-style component page has a reference-like static specimen and a usable live example.
- [x] Desktop preview keeps the table inside the dotted specimen frame without stretched rows or controls.
- [x] RTL header/cell order, selected row, status chips, toolbar, search and pagination appear in the browser.
- [x] Sorting numeric values produces the expected ascending order.
- [x] Search includes nested user names and returns the matching row; no-result copy is separate.
- [x] Controlled row selection and select-all checkbox semantics are exposed in the accessibility tree.
- [x] Expanding a row reveals its detail content and changes the control's expanded state.
- [x] Sort and row detail are real buttons; table uses native table semantics and named checkboxes.
- [x] Token audit, catalog audit, Vue typecheck and production build pass.
- [ ] Compare exact desktop geometry and component states against the supplied reference; record viewport and frame/row dimensions.
- [x] Verify responsive behavior at 390px and 320px viewport widths; confirm no horizontal document overflow and review stacked row content.
- [x] Keyboard-only review: search focus shows one yellow stroke; Tab reaches bulk clear, sort controls and row selection; Space sorts/selects; row detail opens from Space with a yellow ring; pagination boundaries move focus to the available opposite control. LTR and RTL page arrows point in the expected directions. The page indicator exposes `aria-live="polite"`; screen-reader speech remains unverified.
- [x] Browser review: loading displays status and disables select-all/sort; empty source shows the no-data message even while a query remains; populated source with unmatched query shows no-results, and matching data returns. Selection persists through sort and page changes; previous/next are disabled at their bounds; Compact/Default/Comfortable row treatments render at the specified 48/56/64px tokens.
- [ ] Review screen-reader announcements with an independent screen reader; inspect progress/image alt semantics where those cell types are used.

## Current evidence and limits

The live browser was reviewed at the desktop viewport and at real 390×844 and 320×844 emulated viewports. Numeric sorting, search through nested user data, group selection, row expansion, loading, empty/no-results priority, selection persistence, page bounds and all three row sizes were exercised. Keyboard review covered search, sorting, row selection, expansion and pagination; focus stays in the pager at both boundaries. RTL/LTR screenshot review confirmed table direction and mirrored page arrows. At 390px the document width is 390px and the live stacked row cards are 340px wide; at 320px the document width is 320px and live row cards are 270px wide. The static specimen shows three 24px decorative avatars and fits all columns: its table is 330px at 390×844 and 260px at 320×844; scroll width equals client width, rows stay 48px high and the page has no horizontal overflow. At 1536×703, reference stage/table measure 636×345.25px and 561.60×258.39px; Norato measures 631.98×345px and 562×258.50px. Frame and table dimensions are now within 1px of the reference. The full visual state matrix and independent screen-reader output remain open, so the family DoD is not complete.

## Empty-state and pagination follow-up (2026-11-09)

- [x] Reproduced the stale-query bug: a nonmatching query followed by an empty source used the no-results message. The source dataset now controls the distinction: empty source → empty message; nonempty source with no matches → no-results message.
- [x] Added a playground data selector that preserves the query while switching between five sample rows and an empty dataset; the sample snippet tracks the selected dataset.
- [x] Loading takes precedence over both empty states and keeps `aria-busy`, status text and disabled sort/select-all controls.
- [x] Keyboard activation of Next at page 1→2 previously lost focus because Next became disabled. Focus now transfers to Previous; moving 2→1 transfers to Next. The page indicator has a polite live-region attribute.
- [x] RTL/LTR selector defaults to RTL and updates the generated example; RTL Previous/Next point right/left and LTR Previous/Next point left/right.
- [x] Verified numeric sort order, selected row persistence across sort/page changes, 2/2 and 1/2 pager bounds, keyboard activation, and 48/56/64px density variants.
- [ ] Exact same-viewport reference geometry and independent screen-reader behavior remain open.

## Static specimen parity follow-up (2026-11-10)

- [x] Added three decorative 24px Norato avatars beside the sample user names, matching the reference table's user-cell structure.
- [x] Removed the legacy direct-cell user selectors and aligned avatar/name/description with tokenized RTL styles.
- [x] Removed the static specimen's 440px minimum table width at mobile sizes; fixed column proportions now fit the 390px and 320px frames without clipping.
- [x] Browser review at 1536×703, 390×844 and 320×844 confirms 48px row height and no static-table/page horizontal overflow.
- [x] A Table-specific 345px token now matches the measured 345.25px reference frame within 0.25px; the Button specimen remains 300px.
- [x] The static table now measures 562×258.50px, within 0.4px width and 0.11px height of the measured reference; frame remains within 0.25px in height.
- [ ] Full visual state matrix and independent screen-reader behavior remain open.
