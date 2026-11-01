# Combobox — Analyze

## Evidence before this audit

- Lemon page is the visual source. Its current desktop page rendered at 1920×919; the single specimen frame measured 636×300px and its field shell including label measured 324×68.2px (input body 324×41px).
- Local Norato page rendered in a 1195×765 browser window; its specimen frame measured 540×288px and field 310×50px. These are not a same-viewport comparison and cannot establish responsive parity.
- Existing implementation uses a 640px maximum frame, 320px mobile cap, 288px minimum frame height, a 310px specimen control, and semantic focus styles. Existing report says the full state matrix and screen-reader pass remain open.
- Current adapter uses Reka Combobox primitives; playground has one/multiple, four sizes, inside/outside label, recent, clear, loading, empty, create, disabled, required and error controls.

## Risks and evidence gaps

- The live Chrome viewport override has previously failed silently; any requested mobile dimensions must be confirmed from `innerWidth` and document width before recording them.
- A visually defined focus selector is not sufficient proof; keyboard focus appearance and focus return need direct browser evidence.
- Lighthouse/DOM semantics do not replace an independent screen-reader pass; disclose if no screen-reader is available.
- Do not close family DoD based only on the pre-existing partial notes or the component's Adapted catalog status.

## Analyze gate

No product/API ambiguity blocks this audit. The only permitted implementation changes are those tied to reproduced browser defects. DoD remains open until the checklist evidence is complete.

## Browser review and correction

- At the same 1195×765 viewport, Lemon's specimen frame measured 636×300px, field shell 324×68.2px and input body 324×41px. Norato's frame measured 540×288px, field 310×50px and outside label 310×20.8px. The Norato column is narrower at this viewport; the frame is bounded rather than stretched, and its width difference is recorded as a page-grid constraint.
- The local screenshot showed the missing `Default` marker and near-invisible white dots on the light Norato glass. Added the marker to the inert specimen and changed the scoped dot fill to a 14% semantic Norato blue mix, matching the reference composition without changing Norato palette.
- The rendered page exposes Preview, Vue playground and all nine contract sections; screenshot confirms the centered 48px control, `Default` marker, dotted surface and bounded 288px frame.
- 16 live playground geometry combinations (single/multi × inside/outside × four sizes) were measured: outside field heights 50/50/50/58px; inside 56/56/56/64px; interactive rows 48px except XLarge 56px. All remained RTL with no horizontal document overflow at 1195px.
- Browser behavior: Persian filtering and bold match; ArrowDown/Enter single selection; multi selection and one-line compact chips; clear; two recent items; 3 loading skeleton lines plus `aria-busy`/live status; empty message; create option emits and is added/selected; `aria-required`, `aria-invalid`, `aria-describedby`, error alert, and actually disabled input/trigger. Menu was measured 7.9px below a 540px field, with 48px options. Escape closed it and left the cleared input/status empty.
- Mobile follow-up: at 390×844, Lemon frame is 327×300px and Norato is 320×288px; both documents measure 375px with no horizontal overflow. Norato shows its Default marker, semantic dots and a bounded 310×50px field.
- Keyboard focus follow-up: Clear is reachable by Tab and receives the semantic 2px blue outline/4px offset/2px yellow halo. The Reka trigger uses `tabindex=-1`; the input is the composite keyboard entry point and ArrowDown opens the list and sets the active descendant.
- Remaining gaps: full combined 96-variant visual comparison, every actionable focus path across states and an independent screen-reader pass. DoD stays open.
