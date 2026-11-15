# Component Page Structure — Checklist

- [x] All 49 contracts start with the exact canonical ten-heading sequence.
- [x] Shared detail renderer orders preview, optional implementation, and contract sections consistently.
- [x] Catalog checker rejects heading-order drift and duplicate named playground branches.
- [x] Duplicate branch found during audit is removed without changing the selected component's rendered behavior.
- [x] Browser inspection confirms Button and Chip render the same shared section structure; both accessibility trees show Preview, Vue implementation, Overview, Anatomy, Variants, Sizes, States, Parts, Usage, Accessibility, Tokens.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue build/typecheck, and `git diff --check` pass.
- [ ] Changes are pushed to Git; no Vercel deployment occurs.
