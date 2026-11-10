# Plan — File Upload required accessibility

1. Add a conditional visually-hidden «الزامی» label node in `NoratoFileUpload`.
2. Reference it from the hidden input and keyboard Dropzone action only while the `required` prop is true.
3. Update the File Upload contract, component rule, DoD checklist, request checklist, and error log.
4. Verify true/false accessible names and native empty validity in the local browser; run token and TypeScript gates, then commit/push.
