# Chip default preview — Checklist

- [x] Static specimen uses `modelValue=false`, no check icon, and the reference label in RTL.
- [x] Matched desktop visual comparison after edit; capsule is 65.188×34.56px versus 65.07×34.56px in the reference.
- [x] Matched 390×844 and 320×640 specimen-frame comparisons after edit; both frame widths and 300px height match the reference (327×300px and 257×300px).
- [x] Confirmed neutral 1px stroke and independent Norato-yellow selected state in the 20-case gallery.
- [x] Capsule dimensions match the 60×32px reference layout at 1.08 specimen scale, within 0.12px rendered width.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, `git diff --check`, and repository prohibited-string scan pass.
- [ ] Independent screen-reader review remains open for strict Final DoD.
