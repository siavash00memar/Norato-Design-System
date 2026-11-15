# Checklist — Shared Component Header Context

- [ ] All 49 contracts provide category metadata and an Overview paragraph.
- [ ] Header category and summary derive from the selected contract, not search tags or guessed counts.
- [ ] Markdown formatting does not leak into the summary text.
- [ ] Summary is clamped to two lines; the full Overview remains visible below.
- [ ] Button and Input pages retain title, readiness, category, summary, RTL order, and their normal specimen geometry.
- [ ] Narrow viewport keeps category, title/status, and summary inside the content width without horizontal overflow.
- [ ] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- [ ] Browser evidence and any limitations are added to the request checklist and error log.
