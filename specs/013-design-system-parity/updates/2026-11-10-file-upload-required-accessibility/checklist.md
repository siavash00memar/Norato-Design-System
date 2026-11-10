# Checklist — File Upload required accessibility

- [x] Browser evidence confirms the clipped native input is omitted from the accessibility tree while the Dropzone button is exposed.
- [x] Required=true exposes the field label and «الزامی» in the Dropzone name; native `required` and empty value validity remain true.
- [x] Required=false removes the required wording from the Dropzone name and generated public sample; native `required` and `valueMissing` are false.
- [x] Visible marker and RTL page remain unchanged; helper description remains connected. No visual CSS or target geometry was changed.
- [ ] Token and TypeScript gates pass; commit is pushed and local/remote parity is verified.
- [ ] Independent screen-reader output and actual host form submission feedback remain open.
