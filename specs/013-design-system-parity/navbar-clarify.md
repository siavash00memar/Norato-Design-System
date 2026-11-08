# Navbar — Clarify decisions

The user delegated outstanding choices to the implementer and asked that work continue without mid-task pauses. No unresolved API decision blocks implementation.

- Desktop default: `type="website"`, `style="bar"`; consumers select App/Centered or Floating/Transparent explicitly.
- Mobile default: `mobileType="default"`, `mobileStyle="bar"`; responsive mode switches at 700px, matching the repository's established mobile CSS breakpoint.
- Controlled navigation: item records carry labels and hrefs; `current` or `activeHref` identifies the current page; disabled records do not render as focusable anchors.
- Submenus: nested link records render in a Reka NavigationMenu disclosure on desktop and expandable groups inside the Reka Dialog drawer on mobile. Website navigation remains links/disclosures, not a menubar.
- Consumer content: named Brand, Actions, Avatar, Search and Mobile Search slots avoid invented product actions; a default brand name is `نوراتو`.
- Search mobile type exposes a controlled `v-model:search` value. Back mode emits a back event. Large Title uses a separate optional title, falling back to brand.
- Transparent mode has no opaque fill; document the contrast requirement from design reference. Do not force position over an image or imply a background-image integration.
- No remote brand data, router dependency, icon package or additional npm dependency is introduced.

Decision source: the user's explicit “decide everything based on best preferences” instruction, design reference's current live contract, existing Norato tokens and installed Reka UI 2.11.0.

## Accent correction — 2026-11-07

- Apply the user's approved palette rule: primary actions, current/open/hover navigation, and the brand mark use Norato yellow with dark text; reserve blue for link/informational semantics.
- Keep the dotted frame's design reference-inspired glass composition but use a warm/neutral Norato wash so blue is not the dominant visual color. No API or interaction behavior changes.
- Matched desktop evidence (1280×720) shows the inert inner bar at 72px versus design reference's 49.68px. Compact only the inert specimen bar to 48px of content plus its border; preserve all 48px runtime interaction targets.
- Matched mobile evidence (390×844) shows the inert sample action wrapping to a second row and growing the inner bar to 106px. Keep Brand, current link, and CTA in one RTL row at the 320px preview width; do not resize their 48px hit areas.
- The same mobile comparison gives design reference a 321px inner bar inside a 327px frame while Norato's 286px bar sits inside its 320px frame. Let the specimen fill the available frame width with a 4px mobile outer inset; keep bounded desktop max width and intrinsic control sizes.
