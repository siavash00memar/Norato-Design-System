# Analyze — Breadcrumbs preview frame parity

- `ComponentSpecimen.vue` does not assign Breadcrumbs the shared Button-style specimen class, so the root keeps the generic 136px minimum height and solid border.
- The existing shared Button-style class already uses the 636px/300px semantic frame tokens, dotted Norato surface, and responsive width bounded by the page.
- The static Breadcrumbs template has no state marker. The existing `sample-checkbox-state` marker is positioned in the top-right and is used by other inert specimens.
- The smallest change is limited to the specimen class binding and one non-interactive Default marker; no adapter or live-playground code needs modification.
