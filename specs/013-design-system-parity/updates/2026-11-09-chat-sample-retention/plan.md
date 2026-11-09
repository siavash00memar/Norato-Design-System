# Plan — Chat sample retention

1. Preserve the adapter and audit the playground's current message aggregation.
2. Render fixture messages only when the toggle is on, then append user-created messages unconditionally.
3. In the browser verify the empty initial timeline, send a message with fixtures hidden, then show fixtures again and confirm both sources appear.
4. Record native chooser limitation and the observed behavior in Chat DoD, request-validation checklist, error log and family ledger.
5. Run token, catalog, TypeScript, build and diff checks; commit and push the verified change.
