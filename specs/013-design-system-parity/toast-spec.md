# Toast — Feature Specification

## Goal
Deliver a public Vue 3 NoratoToast adapter and Button-structured documentation page that follows design reference's Toast composition while using Norato tokens and palette.

## Scope
- 20 visual combinations: style `dark | glass` × layout `simple | rich` × tone `neutral | success | warning | danger | loading`.
- Right-side status icon or loading spinner in RTL, title, optional rich description, optional action, optional close, and timer/progress bar.
- Controlled/uncontrolled visibility; caller-owned action event; configurable duration; pause/resume events; close event. No stacking/queue, route, or persistence behavior.
- Reka UI ToastProvider/Root/Viewport family for live announcement, timer, pause/resume and swipe semantics, wrapped with Norato styling.
- Inert visual specimen, separate executable playground, copyable Vue example, package export/catalog entry and Button-style nine-section documentation.

## Acceptance
- Default style Dark, Simple layout, Neutral tone; six-second default duration, `0` means persistent; Loading never auto-dismisses. Pausing occurs on hover/focus and follows Reka's pause/resume behavior.
- `title` is required; `description` appears only in Rich; action is optional and emits without navigation. Close is optional and has a localized accessible label.
- Playground exposes `actionCloses` so consumers can inspect both action-dismissal and non-dismissing callback behavior; the generated usage tracks the selected setting and action feedback remains distinct from manual-close feedback.
- Playground exposes controlled and uncontrolled visibility modes; each mode can open, close, and regenerate a matching copyable usage example.
- RTL order: status icon at right, close at left. The content wraps without stretching fixed SVGs, timer, or controls. Interactive action and close each retain a 48px minimum target and yellow 2px keyboard focus.
- Danger uses assertive alert announcement; other tones use polite status announcement. Loading is polite and persistent. Do not announce the same text twice through parallel live regions.
- Norato status tones remain semantic; the brand accent remains yellow. Glass uses Norato glass/border/elevation tokens; Dark uses Norato inverse surface/text tokens.
- Validate at desktop and 390/320 CSS-pixel widths, no document overflow, design reference-matched screenshot, all 20 variants, controlled/uncontrolled close, action, timer/pause, keyboard, RTL and technical gates before marking DoD complete.
