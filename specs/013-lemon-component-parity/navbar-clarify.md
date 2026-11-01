# Navbar — Clarify decisions

The user delegated outstanding choices to the implementer and asked that work continue without mid-task pauses. No unresolved API decision blocks implementation.

- Desktop default: `type="website"`, `style="bar"`; consumers select App/Centered or Floating/Transparent explicitly.
- Mobile default: `mobileType="default"`, `mobileStyle="bar"`; responsive mode switches at 700px, matching the repository's established mobile CSS breakpoint.
- Controlled navigation: item records carry labels and hrefs; `current` or `activeHref` identifies the current page; disabled records do not render as focusable anchors.
- Submenus: nested link records render in a Reka NavigationMenu disclosure on desktop and expandable groups inside the Reka Dialog drawer on mobile. Website navigation remains links/disclosures, not a menubar.
- Consumer content: named Brand, Actions, Avatar, Search and Mobile Search slots avoid invented product actions; a default brand name is `نوراتو`.
- Search mobile type exposes a controlled `v-model:search` value. Back mode emits a back event. Large Title uses a separate optional title, falling back to brand.
- Transparent mode has no opaque fill; document the contrast requirement from Lemon. Do not force position over an image or imply a background-image integration.
- No remote brand data, router dependency, icon package or additional npm dependency is introduced.

Decision source: the user's explicit “decide everything based on best preferences” instruction, Lemon's current live contract, existing Norato tokens and installed Reka UI 2.11.0.
