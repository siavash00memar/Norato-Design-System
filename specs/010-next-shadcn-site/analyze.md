# Analyze Gate

Status: READY TO IMPLEMENT

- Specification, plan, checklist, and tasks are aligned.
- No unresolved material UX or architecture decision remains for this implementation slice.
- The static site is explicitly fallback-only.
- Remaining risk: local package linking/build environment must be verified before replacing the fallback preview.
# Analyze Amendment — Tree View Fidelity Correction (2026-08-25)

## Evidence

- `apps/docs/components/tree-view.tsx` already consumed the canonical Checkbox, but it used
  a separate arrow asset from the Select component.
- `apps/docs/components/ui/select.tsx` contained the active Figma Select arrow asset.
- Legacy CSS contained text-arrow rules and multiple historical Checkbox rules; the final
  Tree View contract must not introduce another checkbox or text glyph.

## Decision

Keep the Select arrow unchanged and use the exact Figma Tree View arrow asset from
`8822:10129` as `public/icons/tree-arrow.svg`. Keep Checkbox rendering in
`apps/docs/components/ui/checkbox.tsx`; Tree View only composes that component and does
not recreate its SVG states.

## Acceptance Contract

- Parent rows use the shared 24×24 SVG arrow and toggle nested children.
- Every node uses the canonical Norato Checkbox SVG states.
- Card/box/row colors and hierarchy follow the active Figma Tree View reference.
- RTL visual order remains checkbox → text → arrow from right to left.
