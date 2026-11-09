# Analysis — Pagination playground bounds

- Before the change, reducing total pages from 13 to 2 left `current` at 13. The adapter rendered page 2 as current through its clamped display value, while the playground stepper and generated snippet still said page 13.
- A computed setter for the playground total can clamp the controlled sample page without changing adapter behavior. Separate computed setters also prevent zero, blank, or fractional playground values from leaking into the generated sample.
