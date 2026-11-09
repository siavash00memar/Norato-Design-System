# Spec — Table static avatar parity

## Problem
The selected Table specimen has named user rows but omits the decorative avatars shown beside those names in the selected visual reference.

## Acceptance
- Show one 24px Norato Avatar beside each of the three sample user names.
- Keep each avatar decorative because the same cell already displays the user's name and description.
- Preserve RTL order, existing row height and the shared specimen frame dimensions.
- At 390px and 320px, fit the static table within its specimen frame without clipping columns or forcing horizontal page overflow.
- Do not alter the interactive table adapter or add a new public behavior.
- Verify the updated specimen at 1536×703 and check 390×844 / 320×844 layouts for overflow.
