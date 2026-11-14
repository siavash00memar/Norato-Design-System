# Implement — File Upload native form payload proof

- Added a playground-only submit handler in `apps/vue/src/FileUploadPlayground.vue`; it constructs browser `FormData`, stores field/file metadata, and never sends it.
- Added a 48px accessible submit button and live RTL report. Existing public Vue adapters and APIs remain unchanged.
- Browser selected `edited-landing-mobile.png` through the native chooser. The report showed `attachments` and `avatar` names with `174524` bytes each; after Dropzone removal it reported no attachment. Same-file reselection succeeded for both adapters after clear.
- Native `required` blocked empty submission and accepted both selected files. Enter activation kept the local route unchanged. Clearing Avatar removed stale output.
- At 390px and 320px the page stayed bounded (375/375 and 305/305 client/scroll); submit target heights were 48px, with widths 343px and 273px.
- Direct access to native FileList entries remains hidden in the browser inspection evaluator; native FormData behavior is verified through the page's actual browser output. Picker-cancel restoration, OS drag/drop and independent screen-reader review remain open.

## Gates

- `pnpm check:tokens` — passed.
- `pnpm check:catalog` — passed (49 routes/contracts/exports).
- `pnpm --dir apps/vue typecheck` — passed.
- `pnpm --dir apps/vue build` — passed.
- `git diff --check` — passed before documentation finalization; rerun after these notes.
