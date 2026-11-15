# Implement — Chat bubble shape and typography

- Added `--norato-chat-bubble-radius` as an alias for the existing semantic 20px radius and `--norato-chat-message-line-height: 1.8` to canonical layout tokens and token schema.
- Updated the inert Chat specimen and Vue adapter to use body-small message text, the shared Chat line-height/radius tokens, and a 6px lower sender-side corner that mirrors for LTR.
- Kept the shared Button preview frame, Norato yellow outgoing accent, message behavior, and Chat public API unchanged.
- Simplified the outgoing Persian fixture text to keep its visual width closer to the short reference example without copying its branding.
- Current browser evidence: fresh local/reference screenshots at 1280×720 were reviewed, and the live Chat accessibility tree shows the expected fixture messages and named controls.
- Technical gates passed: token checker, catalog checker, Vue typecheck, Vue production build, and `git diff --check`.
- Remaining: responsive 390/320 recapture, the full sender × message-type screenshot matrix after this update, and independent screen-reader review. The Chat Final DoD stays open.
