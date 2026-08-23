# Research: Norato Field

## Decision: Native semantic input as the canonical primitive

**Rationale:** A single-line HTML input provides the strongest baseline for labeling, validation, keyboard behavior, and assistive technology. Framework adapters should preserve these semantics.

**Alternatives considered:** A custom div-based control was rejected because it increases accessibility and keyboard risk.

## Decision: Evaluate shadcn Input before custom styling

**Rationale:** shadcn provides a composable input primitive, but Norato owns the visual tokens, typography, RTL layout, and state contract. Adopt only the compatible primitive behavior.

**Alternatives considered:** Direct Radix dependency was deferred because the v1 Field is a native text input, not a composite control.

## Decision: Separate future controls

**Rationale:** Textarea, Select, and Date Picker have different semantics, keyboard models, validation, and state APIs. Keeping them separate prevents a permissive Field API.

**Alternatives considered:** One polymorphic Field was rejected for v1 due to contract complexity.
