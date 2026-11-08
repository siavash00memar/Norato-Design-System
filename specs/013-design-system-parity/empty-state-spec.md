# Empty State — Feature Specification

## Goal

Provide reusable Vue 3 adapters for design reference's Empty State and Empty State Visual, with Norato palette, RTL-first geometry and a Button-structured documentation page.

## Scope

- `NoratoEmptyState`: `id`, `title`, `description`, `layout` (`vertical|horizontal`), `size` (`small|medium|large`), `container` (`none|card`), `visualType` (`icon|illustration`), `visualTone` (`neutral|success|warning|danger`), and `dir` (`rtl|ltr`, default `rtl`).
- `NoratoEmptyState` slots: `visual`, `primary-action`, and `secondary-action`; default visual is provided when `visual` is omitted. Actions remain caller-owned and are not navigated by the component.
- `NoratoEmptyStateVisual`: `type`, `size`, `tone`, and `dir`; renders either an icon in a soft halo or a small stacked-card illustration. Its entire visual is decorative and hidden from the accessibility tree.
- The inert catalog specimen remains non-interactive. The Vue playground separately exposes layout, size, container, visual type, visual tone and direction, plus sample action events.
- Button-like page sections, snippets, catalog export and component contract remain aligned.

## Behavior and semantics

- Render a named `<section>` with a heading and description. Do not assign `role="status"` or `role="alert"` to static empty content; callers may choose live-announcement behavior appropriate to their update flow.
- Primary and secondary action slots are optional. When provided, keep actions in logical order and preserve accessible names; rendered button/link targets must be at least 48px high.
- Horizontal layout places the visual at inline-start (right in RTL, left in LTR). Vertical layout centers its content.
- Avoid encoding meaning solely in visual tone. The title and description convey the state; visual tone is supplementary.

## Acceptance criteria

1. The catalog preview reproduces design reference's centered no-content composition in the same dotted/glass preview frame as Button, with Norato yellow/neutral palette and intrinsic visual geometry.
2. All 12 layout × size × container combinations and all 24 visual type × size × tone combinations render without vertical stretch or horizontal overflow.
3. RTL/LTR order, all three slots, 48px action targets, keyboard focus and caller-owned action behavior work in the Vue playground.
4. AX exposes one named section, heading and description; decorative visual is absent from the tree, and actions have native semantics.
5. design reference and Norato are compared at matched desktop and mobile viewports; 390px/320px document overflow and card geometry are checked.
6. `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass. Contract, Figma rules, request checklist, error log and family ledger reflect evidence and remaining gaps.

## Out of scope

No data fetching, retry behavior, automatic navigation, modal flow or implicit live-region announcements. The host owns all action behavior.
