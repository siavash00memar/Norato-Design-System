# Specify — File Upload disabled-state browser check

## Acceptance

When the File Upload playground's disabled option is enabled, both the visible Dropzone trigger and nested chooser control are exposed as disabled, and the generated Vue usage reflects the `disabled` prop. Turning it off restores the enabled controls and removes the prop.

## Scope

Evidence-only browser review. Do not change runtime code unless the expected state fails. This check does not claim to prove tab-order, independent screen-reader announcements, OS drag/drop, or other open File Upload DoD items.
