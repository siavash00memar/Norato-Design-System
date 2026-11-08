# Banner — Feature Specification

## Goal
Deliver a Vue 3 Norato Banner for important site-wide announcements, using design reference's six-tone desktop/mobile composition with Norato palette and tokens.

## Scope
- 12 combinations: `tone` info/success/warning/danger/neutral/inverse × `layout` desktop/mobile.
- RTL icon at inline end, title and description in the middle, optional caller action and close affordance at inline start.
- `modelValue` can control visibility; uncontrolled close is supported. No timer/autodismiss.
- Desktop lays message and actions horizontally; explicit mobile stacks text and action. At narrow viewport, desktop layout adapts to the mobile arrangement.
- Inert Banner specimen, interactive Vue playground, public typed adapter, usage snippet and Button-style nine-section documentation.

## Out of scope
Global placement management, persisted dismissal, route navigation, multiple-banner queues and automatic announcement timing. The consuming app mounts this component before navigation and handles the emitted action.

## Acceptance
- Semantic Norato tones, including Inverse on the designated dark surface; no brand-blue substitution for Norato yellow.
- Full-width, bounded content; message wraps and controls do not stretch. SVGs retain intrinsic dimensions.
- Dismiss and action are keyboard operable; both targets are at least 48px; focus is yellow.
- RTL, all 12 variations, desktop/mobile widths, screen-reader roles/order and required technical gates are verified before DoD closure.
