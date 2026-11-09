# Package NoratoField Capsule Specification

## User need

The legacy public NoratoField must look like the approved Norato input in consuming applications, not only inside the documentation site.

## Acceptance

1. The public adapter keeps a 48px interaction target and a 36px visual capsule.
2. Resting Stroke is 1px neutral; hover and keyboard focus use the single Norato-yellow Stroke.
3. Invalid uses the semantic error Stroke; disabled/loading uses the neutral disabled surface and Stroke.
4. Persian placeholder remains RTL, Vazirmatn Light 12px, and uses the semantic placeholder token.
5. Styles are shipped from the package styles.css; no app-local selector is required.
6. Existing props, model events, labels, helper/error/loading semantics and RTL/LTR values remain unchanged.
7. The public field label uses Estedad Bold from semantic typography tokens.

## Out of scope

- Changing adapter API or validation behavior.
- Changing Textarea, Select, Date Picker, or the eight specialized Input adapters.
