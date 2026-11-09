# Constitution — Command Palette reduced motion

- Respect the user's system preference by removing spinner motion under `prefers-reduced-motion: reduce`.
- Preserve loading communication: keep the visible status text, `aria-live`, `aria-busy`, and yellow/dark brand treatment.
- Keep the change scoped to the Command Palette spinner; do not alter other component motion or the public API.
- Verify the resulting live render in an actual browser before closing this update.
