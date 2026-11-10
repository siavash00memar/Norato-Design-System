# Clarify — Component specimen first paint

- Browser evidence: a fresh Combobox route first painted a dotted frame with only a gray placeholder pill; the Default marker was absent. The immediately subsequent render contained the complete sample.
- Source evidence: `ComponentSpecimen` is lazy-loaded and uses `ComponentSpecimenLoading` with zero delay; the fallback already reserves the correct frame and is marked `aria-hidden`/`inert`.
- Decision: keep lazy loading and improve the shared fallback marker. Do not delay the route or eagerly import every specimen.

