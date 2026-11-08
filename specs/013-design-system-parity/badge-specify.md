# Badge — Specify

## Outcome
Ship a reusable Vue 3 `NoratoBadge` that places a compact Count or Dot marker over an independently supplied anchor and document its API on the Button-shaped component page.

## Acceptance contract
- Exactly 16 visual combinations: Count/Dot × Small/Medium × Danger/Inverse/Neutral/Success.
- The marker overlays the anchor at physical top-left in RTL (logical inline-end), remains intrinsic and does not change/stretch the anchor box.
- Count accepts a non-negative integer; values above `maxCount` display as `<maxCount>+` (default 99). Dot does not render a count.
- The marker has a 2px surface-colored separator ring. Status tones use semantic Norato tokens; Inverse uses the dark surface and readable text. No raw page-local colors.
- Minimum marker sizes including the ring: Count Small/Medium are 16/20px; Dot Small/Medium are 8/10px. Dot remains exact size; Count grows horizontally when its localized text (for example `۹۹+`) needs more room and never clips.
- The adapter does not create an interactive anchor. Its named `anchor` slot provides a computed accessible name; consumers bind it to their button/link/avatar control. The visible badge is hidden from AT to avoid duplicate announcements.
- Page follows Button's section order, keeps inert visual preview separate from live playground, and exposes copyable Vue usage.
- RTL is default; the anchor retains its host-defined minimum 48px hit target and focus treatment.

## Out of scope
Badge does not navigate, receive focus, announce live updates, or infer the meaning of a count. Count zero remains visible; hosts may choose not to render the component when no marker is needed.
