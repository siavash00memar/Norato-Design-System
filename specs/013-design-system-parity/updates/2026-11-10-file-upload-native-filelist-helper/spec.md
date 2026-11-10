# Specify — File Upload native FileList helper

Extract the native `DataTransfer`/`FileList` synchronization into a small internal helper that can be contract-tested without adding a DOM package. It must preserve real `File` object identity and order, omit queue-only sample items, clear an empty controlled queue, and safely no-op when the input or browser `DataTransfer` support is absent.

The separate real-browser checks for required validity, `FormData`, picker cancellation/reselection, and removal remain open.
