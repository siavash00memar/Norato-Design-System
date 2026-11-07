# Navbar — Lemon parity specification

## Acceptance contract

Implement the six component parts described by Lemon: responsive Navbar, mobile header, Nav Link, Brand, Mega Menu and Mobile Menu. Preserve the reference's three desktop layouts × three styles (9), four mobile types × two styles (8), two link styles × two sizes × five states (20), and two brand sizes. Norato keeps its semantic tokens and uses yellow as the primary action/selection accent; blue remains for links and informational semantics.

- Desktop layout types: App, Website and Centered. Styles: Bar, Floating and Transparent.
- Mobile types: Default, Back, Search and Large Title. Styles: Bar and Transparent. Switch to mobile at the shared navigation breakpoint; desktop links are replaced with a drawer trigger.
- Navigation items are controlled data. Provide label, href, optional icon/count, disabled/current flags and optional child links. A parent with children opens a website-style disclosure/mega panel, not an ARIA menubar.
- Active link renders `aria-current="page"`; disabled links are not focusable or navigable. The menu uses links with native Tab behavior and the Reka NavigationMenu keyboard model on desktop.
- The mobile drawer is modal, keyboard-dismissible, focus-managed, labeled and directionally RTL using installed Reka Dialog.
- Brand uses an intrinsic mark/wordmark composition and supports a consumer slot. Header actions and avatar/search content can be supplied by consumer slots; Norato does not invent application navigation destinations.
- The top specimen and runtime share Norato yellow/dark for the primary CTA and brand mark; the warm/neutral dotted frame does not let blue dominate. Active, open, and hover navigation affordances use yellow; information/count semantics may retain blue.
- Search mobile mode has controlled `v-model:search`; Back mode emits `back`; large-title mode accepts a separate title. Default state is Website + Bar + Default mobile header + Bar mobile style.
- Preview stays inert and independent from runtime interaction. Detail page follows Button: preview, playground/code and nine contract sections.

## Verified Lemon source observations (2026-11-01)

- Live page `https://lemonui.ir/#navbar` identifies 6 parts and 41 variants and provides 9 sections.
- Overview: App layout for product/dashboard actions, Website layout for marketing links, Centered layout for center-positioned links; Bar, Floating and Transparent styles; mobile header, mega menu and mobile drawer are included.
- Anatomy: brand/right, nav links after it, actions/left, avatar as account affordance.
- Accessibility: navigation role, RTL-first tab order, and 2px keyboard focus ring outside the element.
- Usage: favor 5–7 links, identify the current page, keep action counts limited, and avoid text-transparent headers on busy imagery without additional contrast support.
- The Lemon default specimen shows a compact brand + three links + primary action inside its dotted glass frame. Norato uses the same hierarchy with its own semantic palette.

## Out of scope

- Router integration, site-specific destinations, authentication, notification data, search backend and application-defined page content.
- A `menu`/`menubar` role or desktop-app keyboard behavior for ordinary website navigation.
