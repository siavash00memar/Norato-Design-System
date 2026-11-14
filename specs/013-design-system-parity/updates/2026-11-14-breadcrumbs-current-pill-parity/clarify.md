# Clarify — Breadcrumbs current-page specimen

- The local static specimen renders a compact noninteractive current label; it does not need a 48px hit target. Only links and disclosure retain the 48px minimum.
- The difference is not an intentional Plain/Glass playground setting: the top sample is a hand-authored inert specimen and currently misses the reference's raised surface, radius, and vertical geometry.
- Use existing Norato tokens: `--norato-color-glass-surface`, `--norato-color-glass-shadow`, `--norato-radius-card`, and `--norato-space-1` for vertical inset. No new token or API behavior is needed.

