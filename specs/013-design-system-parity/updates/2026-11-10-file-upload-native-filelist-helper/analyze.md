# Analyze — File Upload native FileList helper

- The project has no installed Playwright, Puppeteer, jsdom, or happy-dom dependency, so a DOM-backed test cannot be added without a new dependency.
- A pure internal adapter tests the exact mapping and assignment decision while retaining the browser `DataTransfer` path unchanged.
- Strongest limitation: these tests cannot establish browser `ValidityState`, actual `FormData`, picker lifecycle, or drag/drop; keep those checks open.
