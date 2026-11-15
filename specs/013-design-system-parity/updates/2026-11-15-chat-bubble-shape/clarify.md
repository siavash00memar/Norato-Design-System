# Clarify — Chat bubble shape and typography

- Reference evidence at matched CSS viewport 320px: message bodies compute to 12px and 21.6px line-height (1.8×); bubble corners compute to a 20px main radius and 6px at the lower sender-side corner.
- Existing Norato evidence: live message bodies use the semantic 12px body-small scale but line-height 1.6 and generic 12px card radius. The inert specimen uses 11px caption/18.7px line-height, also with a 12px card radius. Both current RTL examples place the 6px corner at the top.
- Decision: add semantic `--norato-chat-message-line-height: 1.8` and `--norato-chat-bubble-radius` aliasing the established 20px radius token; use body-small font size. For RTL, the lower-right incoming and lower-left outgoing corners are 6px.
- Use concise neutral Persian fixture copy to keep bubble length near the measured example; preserve Norato yellow outgoing fill, neutral incoming surface, shared Button frame, dimensions, API and behavior.
- No unresolved API or behavior decision affects this visual correction; proceed without a user clarification.
