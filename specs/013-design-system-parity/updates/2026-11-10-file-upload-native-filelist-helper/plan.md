# Plan — File Upload native FileList helper

1. Extract only the FileList creation/assignment logic from the component.
2. Add dependency-free contract cases for identity/order, sample omission, empty queues, and unsupported contexts.
3. Run File Upload tests, token/catalog gates, Vue typecheck/build, and diff checks.
4. Leave native form and picker verification explicitly open until observed in a real browser.
