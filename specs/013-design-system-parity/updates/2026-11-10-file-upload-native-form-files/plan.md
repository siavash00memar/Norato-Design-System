# Plan — File Upload native form files

1. Audit the existing input lifecycle, validation queue, and watcher behavior.
2. Add one in-place synchronization path that mirrors controlled queued `File` objects to the native input through `DataTransfer`.
3. Preserve existing queue files across picker cancel and accepted/rejected batches; sync after remove/cancel and controlled prop updates.
4. Update contract, family DoD, request validation, error log, and feature artifacts.
5. Verify the exact browser states where supported, run repository gates, then commit and push.
