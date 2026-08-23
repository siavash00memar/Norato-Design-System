# Research: Norato Button

## Decisions

- Use the native semantic button as the canonical primitive for keyboard, form, and assistive-technology behavior.
- Evaluate shadcn Button for composability, while retaining Norato ownership of tokens, typography, RTL, and state styling.
- Keep Text Button and Icon-only Button as separate contracts to make the accessible-name requirement explicit.

## Alternatives considered

- A single polymorphic API was rejected because it makes icon-only accessibility and variant rules easier to misuse.
