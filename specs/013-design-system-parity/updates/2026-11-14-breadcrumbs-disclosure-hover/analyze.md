# Analyze — Breadcrumbs disclosure hover

- The disclosure's default fill is `--norato-color-warning-container`; no disclosure hover selector exists, so all three sizes remain `rgb(255, 248, 224)` under the pointer.
- Breadcrumb links also use that pale-yellow surface on hover, but their resting surface is transparent. Reusing it for the disclosure would still leave its state visually unchanged.
- The semantic brand-yellow token creates a clear reversible hover distinction with primary text. Keyboard focus already has a separate 2px amber contrast outline and 2px yellow halo, so the hover rule must exclude `:focus-visible` to avoid merging the visual states.
- The selected token is `#FDC101` with primary text `#1A1A1A`; the foreground/background contrast is approximately 10.4:1. No geometry or hit-target change is needed.
