# Checklist — File Upload native FileList helper

- [x] Helper retains real File identities and input order.
- [x] Queue-only items without a File do not enter the native FileList.
- [x] Empty controlled queues clear the native FileList.
- [x] Missing input/DataTransfer leaves safely without mutating input.
- [x] Public component behavior and API remain unchanged.
- [ ] Browser required validity, FormData, cancel/reselection and removal remain verified separately.
- [x] File Upload tests and repository engineering gates pass.
