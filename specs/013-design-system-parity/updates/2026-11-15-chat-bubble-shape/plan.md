# Plan — Chat bubble shape and typography

1. Audit current Chat specimen/runtime selectors and existing typography/radius tokens; remove no unrelated rules.
2. Add `--norato-chat-bubble-radius` and `--norato-chat-message-line-height` to token CSS/schema.
3. Update static and runtime message typography, radius and RTL lower sender-side corners so specimen and adapter share one contract.
4. Compare Norato and reference at equal 1280×720, 390×844 and 320×844 viewports; measure frame, bubble shapes, line heights, direction and overflow.
5. Exercise message content wrapping across sender × type examples; preserve palette and focus behavior.
6. Record comparison, update contract/checklists/error log and run all required gates.
