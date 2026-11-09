# Plan

1. Move the existing approved NoratoField capsule treatment from the docs-only stylesheet into the published Vue package stylesheet.
2. Remove conflicting generic field declarations and the docs-only field override rather than layering another override.
3. Record the package contract, regression cause, and browser DoD.
4. Run token/catalog/typecheck/build/diff gates.
5. Verify published package styling in a browser at desktop and mobile widths, including default/hover/focus/error/disabled and RTL/LTR; leave the DoD open if browser evidence is unavailable.
