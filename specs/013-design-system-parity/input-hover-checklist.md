# Input Hover Stroke — Checklist

- [x] Runtime default stroke is one 1px `#E8E8E8` capsule.
- [x] Reproduce hover stroke as yellow for enabled normal, invalid, and success fields. Local pointer path: click the field, Tab away while the pointer stays over it, then confirm its yellow border remains. Repeated with the Error and Success playground states; both return to semantic status color when pointer leaves.
- [x] Disabled hover is excluded by the explicit rule; the local browser capture stayed neutral with its muted surface while the pointer targeted the disabled field.
- [x] No extra field outline, ring, or shadow is rendered; wrapper border is 0px and the capsule stroke is 1px.
- [x] Local browser confirms hover-only yellow across default, invalid, and success; disabled remains neutral; resting states restore their status stroke.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build retains the existing 1,015.47KB chunk advisory.

