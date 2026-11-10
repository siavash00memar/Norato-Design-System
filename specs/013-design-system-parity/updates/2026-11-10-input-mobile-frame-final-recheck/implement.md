# Implementation and verification — Input mobile frame final recheck

## Finding and correction

At 320×844 before the change, the local Input specimen frame was 273×300px at x=16px while the reference was 257×300px at x=24px. This came from the mobile selector using only its fixed 328px cap, allowing the frame to fill a wider local content column than the reference.

The mobile-only rule in `apps/vue/src/styles.css` now clamps the inert Input frame to the smaller of its available width, the viewport minus the shared `--norato-space-16` token, and the existing 328px mobile cap. Desktop styling, live adapter, and other component frames are untouched.

## Browser evidence after the change

- Exact 390×844: local frame 326×300px at x=24.5px; reference 327×300px at x=24px. Local document width is 375/375px.
- Exact 320×844: local frame 256×300px at x=24.5px; reference 257×300px at x=24px. Local document width is 305/305px; the reference page scrolls to 326px.
- At both widths, the live email specimen preserves its RTL title and adjacent envelope icon. Its 48px target contains a centered 36px capsule (`6px` block inset each side), with a 1px neutral `#e8e8e8` resting Stroke.
- Placeholder remains right aligned, RTL, Vazirmatn Light 12px, `#a1a1a1`. No vertical stretch or local horizontal overflow appeared.
- The rendered 320px capture confirms the specimen frame now tracks the reference inset while remaining fully visible.

## Remaining DoD

The change verifies the top specimen frame only. The full adapter-state visual comparison, all consuming playgrounds, and independent screen-reader review remain open for Input.
