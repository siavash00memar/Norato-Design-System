# Timeline — Specify

## User outcomes
- Read a sequence of order or workflow events with title, optional description, and timestamp.
- Distinguish neutral, active, success, warning, and danger markers without using color alone for the active event.
- Choose dot, icon, or avatar marker; view the same event in default, card, or compact layout.
- Read a day-grouped activity feed at default or compact density.

## Vue 3 API
- `NoratoTimeline`: controlled-by-data ordered list of `NoratoTimelineEvent[]`, layout, direction, and accessible label.
- `NoratoTimelineItem`: public item renderer with explicit first/middle/last position for standalone compositions.
- `NoratoTimelineMarker`: standalone marker with type/tone and icon/avatar inputs.
- `NoratoActivityFeed`: groups of labeled events and density.
- Event fields: stable `id`, `title`, `time`, optional `description`, `tone`, `markerType`, `icon`, `avatarName`, and `avatarSrc`.
- Icons are a small named union (`package`, `check`, `clock`, `user`), not arbitrary HTML. Avatar markers require a person name; image failure falls back to initials.
- No automatic sorting or hidden truncation. Input array order is the rendered order; consumers keep direction consistent and paginate above 20 events.

## Reference coverage
- Timeline Item: 3 layouts × 3 positions = 9.
- Timeline Marker: 3 types × 5 tones = 15.
- Activity Feed: 2 density variants.
- Total: 26.

## Page
Replace the old inventory-only placeholder with a Button-structured detail page and a live playground that covers the 26 reference combinations.
