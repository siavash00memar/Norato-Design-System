# Specify — List playground direction control

## Problem

The public List adapters accept `dir="rtl" | "ltr"`, but the live playground hardcodes RTL on the List and its child items. That prevents exercising and visually validating the supported LTR path, including switch-thumb travel.

## Acceptance contract

- Add a labeled RTL/LTR direction selector to the List playground, with RTL as the default.
- Apply the selected direction to the List, groups, and every List item in grouped and ungrouped layouts.
- Keep the generated Vue example synchronized, including explicit `dir` on nested adapters whose own defaults are RTL.
- Preserve the existing controlled values, visual composition, keyboard behavior, and Norato palette.
- Verify both directions in the local browser, including checked/unchecked switch position and direction-aware layout; run the required project gates.
