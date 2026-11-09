# Analyze — Input variant-axis chips

- The shared `.variant-axis > span` rule applies the blue informational container to all component galleries. The Input-specific descendant selector is more specific and can override this without changing the shared rule.
- `--norato-color-surface-default` and `--norato-color-border-default` are already available semantic tokens; the chip fill can be neutral and the 1px outline can retain its pill/tag geometry.
- The actual field's active/focus styling belongs to `.input-family-field` and uses the Norato yellow token; changing axis chips cannot alter it.
- The gallery is inert and `aria-hidden`; there is no behavior or accessible-state change.
