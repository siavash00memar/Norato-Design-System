# Visual Accent and Dropdown Consistency — Clarify

The user clarified that Norato's primary accent is yellow and delegated implementation decisions. Therefore selected/current/checked/toggled/progress states use yellow with readable dark foregrounds; blue remains for links and info/status-only semantics. Reuse the existing `PlaygroundSelect` for demo controls and the existing `NoratoSelect`/Reka primitives for runtime selections. Date Picker wheel mode must retain column selection and date-time must retain numeric hour/minute values. Avoid native option popups.
