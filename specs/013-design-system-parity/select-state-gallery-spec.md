# Select State Gallery — Specification

## Need

The Select page's States section currently uses a generic tiny pill symbol for every state. design reference's actual Select States section presents text cards with concise state titles and explanations; its field controls are demonstrated in Variants. The Norato state gallery should communicate the same state meanings with the Norato semantic palette.

## Acceptance contract

1. Select state cards use design reference-like title + descriptive copy structure, not a generic toggle/pill illustration.
2. Every state entry currently derived from the Select contract remains present, including Select, Multi Select, and Select Option states.
3. Persian explanations distinguish default, hover, open, filled, error, disabled, read-only, selected, focus, and loading when present; category labels remain visible.
4. Cards use semantic Norato surface, border, typography, and state accent tokens; no new page-local raw styling values.
5. Desktop card columns auto-fit the content width with a token-based minimum; mobile uses two columns like design reference at 390px, while narrower content can collapse safely.
6. The layout remains RTL, responsive, bounded, and free of stretched control artwork. State cards are static, inert documentation.
7. The Select specimen, live Vue playground, and adapter API are unchanged.
8. Browser render, relevant technical gates, and the request validation checklist are updated before handoff.

## Out of scope

- Redesigning the global state gallery for all 49 components.
- Changing Select runtime behavior, package APIs, state semantics, or component maturity.
- Claiming the independent screen-reader portion of Select DoD passed.
