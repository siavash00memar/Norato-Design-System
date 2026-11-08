# Banner — Analyze

- Lemon's live Banner reference at 499×932 has a 436×300 preview frame and a 438×68 full-width stripe. It presents the Default marker, one-line announcement, compact action and close; the message/action arrangement stacks in mobile.
- Lemon contract specifies 12 variants: six tones (Info, Success, Warning, Danger, Neutral, Inverse) × Desktop/Mobile. Anatomy is right-side icon, title/description, action and left-side close.
- Initial Norato contract was Proposed with a static generic `.sample-banner`; the adapter, catalog/public usage, inert specimen and playground have now been added, and legacy `.sample-banner` styles removed.
- Existing Norato semantic info/success/warning/error/container and inverse/dark surface tokens are available. Yellow remains the brand/focus accent; status tones retain semantic distinction.
- There is no suitable modal primitive. Native Vue semantics fit a non-modal global message; caller handles action event and placement before navigation.
- Risks: avoid automatic dismissal or invented routes. Inverse contrast, 12 combinations, action/dismissal keyboard behavior and 390/320 widths still require browser checks. The browser tool is currently unavailable; successful HTTP 200 is not visual evidence.
