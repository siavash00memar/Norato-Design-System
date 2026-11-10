# Implement — File Upload required accessibility

Added a conditional visually-hidden «الزامی» node and referenced it from the native file input and Dropzone button only when `required` is true. The native constraint, visible marker, styling, dimensions, event behavior, and public API remain unchanged.

Browser AX now exposes «پیوست‌ها الزامی» when required and «پیوست‌ها» otherwise. The native file input retained its label reference and reports `required/valueMissing` true in the empty required state and false in the optional state; the example snippet followed each change. Token/catalog/typecheck/build/diff gates passed. Commit `15336a9c9b648891806fb460d54952891abdcc01` is pushed and matches `origin/master`. Independent screen-reader output and actual host form submission behavior remain open.
