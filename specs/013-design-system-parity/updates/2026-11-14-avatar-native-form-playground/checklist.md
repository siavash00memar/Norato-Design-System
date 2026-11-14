# Checklist — Avatar native-form playground

- [x] Preview wrapper is a native form with no submit button, action, or network behavior; existing controls remain explicit `type="button"`.
- [ ] A real selected file is verified in `FormData` under each input name. The browser's read-only evaluation surface does not expose a constructible `FormData` global, so this is still open.
- [x] With Required enabled, an empty Avatar field reports `valueMissing=true`/invalid; selecting an image makes it valid. Clearing restores `valueMissing=true`.
- [x] The form owns named `attachments` and `avatar` inputs. The Avatar clear action emptied the native input value and preview; selecting the same image again after clear restored both.
- [x] Shared Disabled control disables both named native file inputs and restores them when turned off.
- [x] Matched 320px local screenshot remains RTL, 305/305px document width, and the file-upload preview layout is visually unchanged after replacing the wrapper element.
- [x] `pnpm test:file-upload` (8/8), token/catalog, Vue typecheck/build, and `git diff --check` pass.
