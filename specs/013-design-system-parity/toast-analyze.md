# Toast — Analyze

## Evidence inspected
- design reference `#toast` live page: 20 visual combinations (Dark/Glass × Simple/Rich × Neutral/Success/Warning/Danger/Loading), one toast card, right-side icon, title/optional description, optional action and close, and a remaining-time bar. Its usage guidance says keep messages short, offer Undo for reversible operations, don't put important errors in Toast, and avoid stacking.
- design reference live sample screenshot at 1280×720 shows a centered light/glass Rich Success example in the dotted preview frame. The source screenshot itself is the evidence; exact element dimensions are not inferred from visual estimates.
- Existing Norato contract is Proposed and contains no execution API. `ComponentSpecimen.vue` uses a generic legacy `.sample-toast` card; `component-specimen.css` includes legacy toast-specific rules. No adapter or playground exists.
- Installed `reka-ui@2.11.0` locally exports ToastProvider/Root/Title/Description/Action/Close/Viewport, typed `duration`, `type`, pause/resume/update-open and accessibility support. Reka's documentation declares 5000ms default and duration 0/Infinity as persistent; Loading status is never automatically dismissed. Norato will set six seconds and pass persistent loading intentionally.
- No shadcn-vue toast package is installed; the existing Vue primitive package is the direct supported match and avoids adding another dependency.
- Norato semantic status, inverse, glass, focus and typography tokens exist; the old Toast contract incorrectly lists brand blue as if it were the status/focus accent. It must be replaced by the semantic palette and yellow focus token.

## Risks and controls
- Timer announcements/readability: use Reka's single announcement system; six seconds, timer pause during hover/focus, persistent opt-in and persistent Loading. No duplicate custom live region.
- Control remains discoverable: action and close are 48px minimum; F8 viewport shortcut is localized and documented.
- Do not implement queueing or inferred navigation. Action emits only; at most one toast in the playground.
- The actual desktop/mobile visual matrix, screen-reader review and all browser behavior are not yet verified; do not represent any as complete.
