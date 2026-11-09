# Analyze — Input preview frame parity

- The matched DOM reports a 634px local frame and a 636px reference frame at 1536×647; both are 300px tall.
- The desktop CSS currently adds `--norato-border-medium` to the available inline size. The remaining gap is 2px; `--norato-space-1` is the existing 4px spacing token and supplies that allowance without raw values.
- The Input-specific mobile override sets the width independently, so changing the desktop expression should not change the mobile cap. Browser validation is still required to prove that assumption.
- The adjustment must remain scoped to `.sample-input-preview`; applying it to the shared component sample would alter unrelated component frames.
