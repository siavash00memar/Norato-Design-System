# Specify — Chat sample retention

## Need

The Chat playground's “show sample messages” toggle currently selects between a fixed sample list and an empty list. Since sent messages and attached files are stored in the same list as the samples, toggling samples off also hides newly created playground messages. This makes the empty-state toggle destructive to the visible review state and masks the attach handler's result.

## Acceptance contract

- Hiding sample messages removes only the fixture messages.
- User-created text and file messages remain visible until the playground is reset/reloaded.
- With samples hidden and no user-created messages, the timeline remains empty.
- Do not change `NoratoChat` API, default RTL direction, or the sample-toggle label.
- Verify the actual browser render for hidden samples, retained text message, and initial empty timeline; report native file chooser as unverified if the environment cannot complete it.
