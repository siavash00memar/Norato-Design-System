# Clarify — File Upload native form files

No unresolved product decision. The current public contract exposes `name` and `required` and explicitly promises native file-input form validation; the controlled queue already retains the selected `File` references. The implementation will make the native input mirror queued items that contain real `File` objects. Network upload remains host-owned.
