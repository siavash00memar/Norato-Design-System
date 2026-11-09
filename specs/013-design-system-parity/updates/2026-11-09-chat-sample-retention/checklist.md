# Checklist — Chat sample retention

- [x] Sample toggle hides fixture messages without hiding sent text/file messages.
- [x] Empty timeline is visible when fixtures are off before any message is created.
- [x] Browser shows retained sent message with fixtures off and shows both sources when toggled on.
- [x] Token/catalog checks, TypeScript, production build and `git diff --check` pass.
- [x] Native chooser attempt and limitation are precisely recorded; browser control did not open a file dialog, so the file event itself remains outside this change's verified acceptance.
