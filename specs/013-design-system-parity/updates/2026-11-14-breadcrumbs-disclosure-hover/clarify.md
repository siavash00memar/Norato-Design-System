# Clarify — Breadcrumbs disclosure hover

- **Resolved from evidence:** the reference defines Hover as the pointer-over state, but does not prescribe a component-specific fill value. The disclosure already rests on Norato's pale-yellow semantic container, so reusing that fill for hover cannot communicate the state.
- **Decision:** use the existing Norato brand-yellow token on hover with primary text. Keep the existing focus ring separate and unchanged. No new API or user input is needed.
