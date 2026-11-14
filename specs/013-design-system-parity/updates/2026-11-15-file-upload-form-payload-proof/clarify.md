# Clarify — File Upload native form payload proof

## Decision

No product decision is outstanding. The probe will run only inside the existing local Vue playground, call `new FormData(form)`, display field names and file metadata, and never transmit data.

## Rationale

This reveals actual browser serialization without changing consumer-facing adapters or adding a remote endpoint. The output is a local QA aid and resets when the selected values change.
