# Analysis — Command Palette reduced motion

- Browser emulation confirmed `matchMedia('(prefers-reduced-motion: reduce)')` is true. The live RTL dialog opens at 390px with no document overflow, receives focus, reports `transition: none`, and closes on Escape.
- In Loading mode, the live dialog retains `aria-busy`; visible status is present and the spinner retains its `norato-spin` animation name with `1e-05s` duration and one iteration. This finite one-frame behavior is avoidable; explicit `animation: none` gives a clearer zero-motion guarantee while retaining the static ring and status.
- No geometry, keyboard, API, or non-reduced-motion changes are required.
