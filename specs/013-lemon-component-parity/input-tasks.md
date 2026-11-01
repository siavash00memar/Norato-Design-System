# Input — Tasks

1. [x] Review the Norato constitution, Input specification and source API/exports.
2. [x] Record user scope: eight independent executable adapters; preserve generic `NoratoField` and existing `NoratoTextarea`.
3. [x] Resolve Phone prefix, Amount currency, Password strength, OTP and Search interaction defaults in Clarify.
4. [x] Audit and align the eight adapter types/props, shared field semantics and visual token mappings.
5. [x] Implement seven missing adapters; extend Textarea while preserving compatibility.
6. [x] Update CSS and neutralize conflicting textarea sizing; maintain proportions and minimum 48px targets.
7. [x] Add real playground coverage, contract-specific input family galleries and reviewed examples/exports.
8. [ ] Browser-review desktop/mobile Lemon parity, all state behavior, keyboard, RTL/LTR and accessibility; four sizes, OTP wrapping, success/loading, read-only, stacked number and mobile non-overflow are checked, but full state/focus coverage remains incomplete.
9. [x] Run token/catalog/typecheck/build/diff gates after the latest size and native-spinner corrections; update docs/catalog/readiness and log remaining browser evidence.
10. [ ] Historical implementation checkpoint `663af1f` was pushed; this refinement checkpoint still needs its own commit/push.
11. [x] Translate the accepted minimum target and no-stretch rules into measured sizes; remove native Number spinners that duplicated Norato actions, preserving ArrowUp bounds.
