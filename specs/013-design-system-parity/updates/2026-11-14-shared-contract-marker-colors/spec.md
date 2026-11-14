# Specify — Shared contract marker colors

## Problem
Shared Usage and Accessibility decorations use informational blue for generic guidance, and Tag, Chip, and Empty State override those same shared markers inconsistently.

## Acceptance contract
- Usage “Do” uses semantic success container and success text tokens.
- “Avoid” remains semantic error; RTL keeps Norato yellow; implementation remains neutral.
- Accessibility symbols are neutral and do not imply link/information status.
- Shared examples render consistently across component families; legitimate blue links and informational statuses remain untouched.
- RTL and existing layout/geometry remain unchanged.
