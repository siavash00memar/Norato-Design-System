# Avatar — Clarify Gate

## Verified Lemon evidence

- Live Lemon `#avatar` page reports 4 components and 55 variants.
- Avatar: Image/Initials/Icon × XS/S/M/L/XL/2XL × Circle/Square = 36 variants; overall range is 24–64px.
- Avatar Group: S/M/L/XL × max 3/4/5 = 12 variants; first person is on the right in RTL and `+N` is on the left.
- Avatar Label has S/M/L; Status has Online/Busy/Away/Offline. Anatomy specifies a 2px surface ring and a bottom-left presence dot.
- Usage requires initials when no photo exists, at most five people, no more than two letters, and presence meaning beyond color.

## Decisions (delegated preference)

- Use 24/32/40/48/56/64px for the six sizes. Lemon documents the endpoints and order, but not each intermediate measurement; the 8px progression is an explicit Norato inference and will be noted in the contract.
- Use `--norato-radius-pill` for Circle and `--norato-radius-tag` for Square. Keep a 2px surface ring around avatars; photos use `object-fit: cover`.
- `NoratoAvatar` defaults to `type="initials"`; derive up to two Unicode grapheme initials from the required name. If the image fails, fall back to those initials, then to the decorative icon only when no name is available.
- A presence state on a standalone Avatar is an optional part of its accessible name. Avatar Group member items do not expose presence props. Avatar Label renders status as a separate visible dot-and-text adapter so presence is never communicated by color alone.
- Group `max` means the maximum number of person avatars shown; an additional `+N` summary may follow. Default is 5. Logical DOM order plus `dir="rtl"` keeps the first person rightmost.
- All four adapters are non-interactive. Decorative mode hides a standalone Avatar from the accessibility tree when adjacent text already names the person.

**Clarify gate: passed.** Remaining exact sizes are a declared design inference, not unresolved user preference.
