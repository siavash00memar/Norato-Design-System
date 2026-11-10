# Checklist — remove legacy HTML Select helper

- [x] Confirmed the helper has no public export or repository consumer.
- [x] Removed the native Select helper and its orphaned HTML/CSS selectors without changing Vue Select.
- [x] Browser confirms the live Select uses a custom listbox and the page remains RTL and bounded: 1280px viewport, document width 1265px, trigger height 48px, native select count 0; opening exposes a custom listbox, Escape closes it and returns focus to the trigger.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass.
- [ ] Select visual-state screenshots and independent screen-reader checks remain open.

