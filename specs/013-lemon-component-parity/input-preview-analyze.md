# Input Preview — Analyze

## Pre-implementation evidence

- Lemon `#input` shows one email field with label/helper in a dotted/glass color-wash frame. At 1920×919 the frame is 636×300px and its field group is 324px wide.
- Norato currently has a single email sample and a separate live playground, but the sample is 490px wide in a 540×147px wrapper at 1195px viewport. It has no Default marker or component-specific frame, so it is wider and much shorter than the reference composition.
- The actual field shell is 48px high in Norato, consistent with the global minimum target; Lemon's ~41px shell is not adopted as an interactive Norato size.
- Existing frame CSS is scoped to Select/Combobox/Checkbox/Radio/Switch. Input is routed through `.sample-form-controls` and `.component-sample:has(...)`, causing the stretch/short-frame behavior. The Input selector can be corrected specifically without changing generic layout or other families.
- Layout tokens already use 640px desktop and 320px mobile preview caps, 288px Norato frame height, and 300–310px bounded input widths for neighboring form previews. These are the established Norato frame conventions.

## Decisions

- Use a 640px max frame and 320px mobile cap; actual width remains constrained by the page's content column.
- Use 288px frame height, 24px radius, tokenized glass surface/line, brand wash and visible blue dots.
- Bound the field at 324px to match Lemon's measured width, while retaining 48px minimum height.
- Place the same inert `Default` marker used by related reference specimens.
- Keep runtime API scope, state galleries and behavior outside this preview-only change.

## Risk and verification

The main regression risk is the broad `:has(.sample-form-controls)` rule overriding preview geometry. The Input-specific rule must win at the existing selector location; verify computed box sizes and other form previews remain unaffected. The different viewport widths mean frame width can be column-limited; compare field width and height independently and state that constraint.
