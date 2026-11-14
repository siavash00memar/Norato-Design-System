# Specify — Breadcrumbs disclosure hover

## Problem

The collapsed-path disclosure has a documented Hover state, but the live button uses the same pale-yellow fill at rest and hover. A fresh browser check confirmed no visible hover difference at Small, Medium, or Large.

## Acceptance

- On pointer hover, the disclosure uses the semantic Norato brand-yellow surface and primary text.
- Pointer exit restores the existing pale-yellow resting surface.
- Small, Medium, and Large retain a 48px target; RTL, disclosure behavior, and keyboard focus appearance remain unchanged.
- No raw page-local color or new API is introduced.
