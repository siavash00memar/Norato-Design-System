# Input — Tasks

1. [x] Review the Norato constitution, Input specification and source API/exports.
2. [x] Record user scope: eight independent executable adapters; preserve generic `NoratoField` and existing `NoratoTextarea`.
3. [x] Resolve Phone prefix, Amount currency, Password strength, OTP and Search interaction defaults in Clarify.
4. [x] Audit and align the eight adapter types/props, shared field semantics and visual token mappings.
5. [x] Implement seven missing adapters; extend Textarea while preserving compatibility.
6. [x] Update CSS and neutralize conflicting textarea sizing; maintain proportions and minimum 48px targets.
7. [x] Add real playground coverage, contract-specific input family galleries and reviewed examples/exports.
8. [ ] Browser-review desktop/mobile design reference parity, all state behavior, keyboard, RTL/LTR and accessibility; desktop four-size × label-placement matrices, OTP 4/5/6 cell counts, six-digit interaction, four-digit paste/sequential entry/arrows/Backspace, five-digit paste/sequential entry/arrows/Backspace, Number decimal/integer bounds, 24 isolated size/state combinations, 32 keyboard focus targets and mobile non-overflow are verified. Text Input's eight states and OTP five-cell paste/sequential/arrow/Backspace behavior are verified; OTP-specific Error/Success/Disabled and combined Error+Success, Error+Disabled, Error+Loading+Success, Success+Loading → Success sequences pass in the live playground. Full design reference visual variant screenshot matching and independent screen-reader evidence remain incomplete.
9. [x] Re-run token/catalog/typecheck/build/diff gates after the States gallery revision; update docs/catalog/readiness and log remaining browser evidence.
10. [x] Exact-integer Amount refinement `93f2507` is pushed to `origin/master`; local and remote refs were checked equal.
11. [x] Translate the accepted minimum target and no-stretch rules into measured sizes; remove native Number spinners that duplicated Norato actions, preserving ArrowUp bounds.
12. [x] Preserve exact Amount digit grouping above JavaScript's safe integer range with `BigInt`; suppress misleading spelled-out text when the value is unsafe.
13. [x] Rebuild the 41 inert Input States cards with family-specific bounded mini-controls, distinct state styling/copy and design reference-aligned responsive two-column mobile rhythm; correct Success/Typing state mapping.
14. [x] Same-viewport 390×844 design reference/Norato, inertness, 41 cards, state treatments, no overflow, empty error console and technical gates were verified; checkpoint `ee5f809` pushed to `origin/master` and remote hash matched.
15. [x] Expose Number min/max/step in the real playground and synchronized example; normalize decimal step arithmetic; verify buttons, keyboard and configured bounds in the browser.
16. [x] Re-run token/catalog/typecheck/build/diff gates after Number refinement; review the live desktop rendering and record remaining evidence.
17. [x] Commit `e9364e2` pushed; verified remote parity on `origin/master`.
