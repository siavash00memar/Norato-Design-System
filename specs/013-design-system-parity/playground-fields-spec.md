# Playground Field Styling — Specification

## Scope

Normalize text and numeric setting fields used by component playgrounds. This affects Button, Split Button, Input, Progress, Rating, Spinner, Pagination, Divider, Toast, and Tooltip settings. It does not change fields rendered by component adapters or checkbox, range, file, radio, and select controls.

## Acceptance contract

- Every playground text/number field has a 36px visual capsule with 1px neutral `#E8E8E8` stroke.
- Hover and keyboard focus recolor that same stroke yellow without an added outline or shadow.
- Field labels use bold Estedad; entered content uses 12px Vazirmatn.
- Placeholder, when present, is RTL, light Vazirmatn 12px, and `#A1A1A1`.
- Preserve each field's current native type, value binding, constraints, accessible name, and explicit LTR entry where declared.
- The whole field label/control remains at least 48px high as an interaction target.
- Checkboxes, toggles, sliders, file controls, select triggers, and runtime component fields retain their current styling.
