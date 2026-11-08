# Command Palette — Clarify

## Decisions

- The user previously delegated component-level decisions to the agent. No question is pending; decisions follow the design reference page, Norato conventions and installed Vue primitives.
- design reference's live `#command-palette` page says 600px wide, about 15% from viewport top, blurred backdrop, popular commands before typing, shortcut labels, no more than eight results per group, and 2px focus ring with 2px outside offset.
- design reference names four palette types (Default, Results, Empty, Loading), three row kinds (Command, Navigation, Recent) and three row states (Default, Active, Disabled).
- Use Reka Dialog for modal focus/close behavior. Reka has Dialog and Combobox exports but no Command Palette primitive; use the existing Dialog primitive and a purpose-built, labelled listbox so the whole panel remains one cohesive dialog rather than a nested popper.
- Global Ctrl/⌘+K defaults to enabled but is configurable/disableable; ignore key repeats, modifiers other than Ctrl/Meta, editable-target conflicts and composition events.
- Selection closes and resets query; query/open can be controlled. Search is local and synchronous except for explicit `loading`; the adapter does not perform routing or network requests.
- Icons are optional Vue components; no dependency on an external icon package is introduced.
