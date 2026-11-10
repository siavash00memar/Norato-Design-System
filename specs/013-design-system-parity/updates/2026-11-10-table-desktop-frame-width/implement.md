# Implement — Table desktop frame width

- Added a Table-only desktop inline-size extension using `--norato-space-1` and the existing shared maximum-width token.
- The rule applies only above 600px and does not change mobile CSS, table contents, row heights or the public adapter.
- Post-change browser geometry remains unverified; do not mark the visual acceptance items complete until recaptured.
