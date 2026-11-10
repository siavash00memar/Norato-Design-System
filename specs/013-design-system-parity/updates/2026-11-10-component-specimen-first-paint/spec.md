# Specification — Component specimen first paint

## Goal

Prevent the shared component preview frame from looking incomplete on the first paint while its lazy-loaded specimen is pending.

## Acceptance

- The pending frame retains its geometry, dotted glass background, and a visible `Default` marker with its green status dot.
- The neutral animated field placeholder remains centered and inert.
- Motion remains disabled under `prefers-reduced-motion`.
- Once loaded, the real specimen replaces the fallback without layout shift.
- Both full-size component detail previews and compact inventory specimens preserve their existing behavior.

