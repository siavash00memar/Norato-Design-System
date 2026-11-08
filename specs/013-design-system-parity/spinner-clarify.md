# Spinner — Clarify

- Reference: design reference `design reference inspected 2026-11-08. It presents 45 Spinner configurations (3 types × 3 tones × 5 sizes) and four Loader compositions (Inline, Refresh, Overlay, Page).
- No unresolved API choice remains. The user explicitly delegated component decisions to the agent and asked for continuous progress.
- Spinner prop names are `type`, `tone`, `size`; `NoratoLoader` exposes `type`, `active`, `label`, `spinnerType`, `tone`, `size`, and `dir` (default RTL).
- `NoratoLoader` owns an accessible polite status label. Its child Spinner stays decorative to avoid duplicate announcements.
- Default tone is Norato brand yellow; Subtle uses semantic secondary content color; Inverse uses a contrasting surface color. This supersedes the old blue/focus tokens in `docs/component-contracts/spinner.md`.
- Refresh is a noninteractive inline refresh indicator. Overlay is host-relative; Page is viewport-fixed. Neither changes focus or locks input.
- Norato type uses a custom 45%-arc silhouette and no fabricated brand logo asset. Ring is the conventional track-and-arc form; Dots are three sequential dots.
