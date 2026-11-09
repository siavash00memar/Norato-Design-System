# Clarification — Pagination playground bounds

- The issue is in the local documentation playground, not the public adapter: the adapter intentionally derives a bounded display value from controlled props.
- Resolved behavior: normalize totals to an integer of at least one; clamp current page to `1..totalPages` in the playground.
