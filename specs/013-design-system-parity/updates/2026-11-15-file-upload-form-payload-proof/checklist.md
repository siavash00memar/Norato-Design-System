# Checklist — File Upload native form payload proof

- [x] Existing form and inputs audited; submit handler is local and prevents native navigation; implementation contains no network call.
- [x] Real selected Dropzone file is shown in FormData under `attachments` with filename and size.
- [x] Real selected Avatar file is shown under `avatar`; empty named fields are represented accurately.
- [x] Removing the Dropzone file omits its filename from the next payload; both required empty fields are blocked by native validity.
- [x] Same-file reselection after clear works for Dropzone and Avatar; clearing Avatar removes stale output.
- [x] Enter activates the 48px submit target; payload is exposed in a live status region with RTL layout.
- [x] At 390px/320px the document remains bounded; the 48px submit target is 343px/273px wide.
- [x] Adapter package API remains unchanged; the report stays in the playground.
- [x] Token, catalog, Vue typecheck/build, and diff gates pass.
