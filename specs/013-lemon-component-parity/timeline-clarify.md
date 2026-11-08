# Timeline — Clarify

No user decision is required; defaults are selected from the Lemon reference and current Norato rules.

1. **Order:** render the supplied array as-is. This avoids surprising mutation/sort behavior; callers can provide newest-first or oldest-first consistently.
2. **Overflow:** do not silently trim. Pagination belongs to the consumer above 20 items, as Lemon's usage rule recommends.
3. **Active marker:** use a raised white/glass surface and Norato yellow outline/detail where needed; do not use blue.
4. **Icon API:** a constrained built-in icon name set is safer and more consistent than accepting arbitrary component instances or HTML.
5. **Activity Feed:** accepts day groups explicitly so locale/timezone boundaries remain controlled by the host application.
6. **Semantics:** each group/item is a semantic ordered list; time remains a `<time>` value with visible localized text and machine-readable ISO value when supplied.

## Assumptions to validate
- Lemon states 26 variants across three subcomponents but does not define a consumer API. Norato's API above is an implementation decision.
- Timeline itself is not interactive; if future consumers need selectable events, that is a separate controlled interaction contract.
