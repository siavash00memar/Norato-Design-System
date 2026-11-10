# Analysis — Switch live toggle recheck

## Evidence before the recheck

The Switch matrix checklist already records all 30 static Switch cells, all 6 Switch Field cells, same-viewport mobile comparisons, 24 live combined-state combinations, and semantic error/disabled behavior. Independent screen-reader validation is still open.

## Fresh browser result

On `http://127.0.0.1:5173/#component-switch`, the live adapter was the second `.norato-switch` (the first is a separate specimen). It rendered at 48×48px with a 40×24px track and `aria-checked=false`. Pointer activation changed it to true. Pressing Space changed it back to false. It remained enabled and had no `aria-invalid`. The generated sample returned to the unchecked default. This recheck confirms this single live path only; it does not replace the full interaction/state matrix or independent screen-reader review.
