# Specify — Alert playground dismissal focus

## Problem
In the live Alert playground, Space on the close button removes the controlled alert. The focused node disappears and browser focus falls to the document root, leaving keyboard users without a clear continuation point.

## Acceptance contract
- After close activation by Space or Enter, focus moves to the playground's visible “نمایش دوباره” button.
- The restore button remains keyboard-operable; activating it returns focus to the Alert's close control after the DOM update.
- The reusable `NoratoAlert` public API and focus behavior remain unchanged; this is playground state management only.
- Verify the final DOM focus in the actual local browser and run the required project gates.
