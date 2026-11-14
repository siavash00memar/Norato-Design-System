# Analyze — Modal specimen backdrop

- Browser evidence shows the inner scene is uniformly gray, unlike the reference's visibly textured, softened scene. The modal surface and primary/cancel hierarchy are already centered and bounded.
- The global scrim token is translucent (`rgba(26, 26, 26, 0.48)`), so increasing transparency globally would risk every live overlay. Instead, expose the existing Norato dotted/gradient scene behind the static specimen scrim.
- Falsification: if the live Modal's computed overlay styles change or mobile geometry overflows after the specimen-only change, revert and isolate the selector more narrowly.
