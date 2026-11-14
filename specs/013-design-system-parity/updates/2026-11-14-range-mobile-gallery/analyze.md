# Range mobile gallery — Analyze

- The generic page rule collapses every state gallery to one column below 600px, making Range's inert samples unnecessarily long. The shared parser also exposed a long explanatory paragraph as an eighth fake slider state.
- The Range-specific illustration already constrains each visual rail to 96×6px, thumb target to 48×48px, and visible knob to 20×20px. Two mobile columns fit these fixed dimensions at 390px and 320px content widths.
- A scoped mobile selector supersedes only the generic grid-column value for Range; the actual state entries are isolated from the prose and the explanation is retained below. Neither change alters live slider layout or runtime behavior.
