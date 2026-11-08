# Avatar — Feature Specification

## Goal

Provide Vue 3 adapters for Avatar, Avatar Group, Avatar Label and Avatar Status, covering Lemon's 55 documented variants with Norato visuals and accessible naming.

## Scope

- `NoratoAvatar`: `name`, `type` (`image|initials|icon`), optional `src` and `initials`, `size` (`xs|s|m|l|xl|2xl`), `shape` (`circle|square`), `status` (`none|online|busy|away|offline`), `dir`, and `decorative`.
- Avatar Group: `items` with stable id/name and optional src/initials; `size` (`s|m|l|xl`), `max` (`3|4|5`), and `dir`. Show at most `max` person avatars followed by a `+N` overflow indicator.
- Avatar Label: named user with optional description, image/fallback props, and size (`s|m|l`).
- Avatar Status: standalone visual dot/name pair for all four presence states.
- A live playground demonstrates all four adapters, while the top specimen remains inert. Contract gallery and usage example follow Button's page structure.

## Acceptance criteria

1. Six avatar sizes span 24–64px; Image/Initials/Icon × six sizes × Circle/Square produce 36 variants.
2. Group size S/M/L/XL × max 3/4/5, Label S/M/L, and four statuses bring the total to 55 variants.
3. Images preserve aspect ratio and fall back to initials/icon on load failure. Initials never exceed two grapheme clusters.
4. RTL group order places the first person on the right and overflow count on the left; status remains bottom-left.
5. Accessible names expose the person and status; decorative use is explicitly supported. Group and label semantics avoid duplicate announcements.
6. Lemon and Norato renders are reviewed at matched desktop and mobile widths. All variants retain intrinsic geometry with no document overflow.
7. Token/catalog checks, Vue typecheck/build and `git diff --check` pass; feature documents and readiness remain truthful.

## Out of scope

Profile retrieval, upload/cropping, navigation, online presence polling and interactive profile menus. Hosts own those behaviors.
