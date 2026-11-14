# Clarify — Carousel preview width

## Decision

No additional product decision is needed. Use the existing medium slide maximum plus the existing small gap token for the compact specimen width, while retaining `min(100%, …)` behavior.

## Evidence and rationale

At 1280×720, the reference's centered slide composition measures 367.2px. The Norato stage is 631.984×300px, but its header spans the stage while the centered track is capped at 360px. This makes the arrows/title sit at the frame edges despite the compact cards. Three medium slides and their inter-slide spacing are the same elements users scan as one carousel composition.
