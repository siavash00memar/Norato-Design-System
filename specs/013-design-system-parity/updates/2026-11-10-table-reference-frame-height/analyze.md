# Analyze — Table reference frame height

- Same-viewport 1536×703 measurement: reference `.stage.solo` is 636×345.25px; local Table specimen is 631.98×300.50px.
- The local specimen currently inherits `--norato-split-button-preview-frame-block-size:300px` through the shared Button-style specimen class.
- Table is the measured exception: the reference table itself is 561.60×258.39px, while the local static sample is 560×274.50px. Increasing only the frame height centers the table within a similarly tall canvas without altering row geometry.
- The prior rule to retain the shared 300px frame was an overgeneralization from Button-specific sizing; direct per-component reference geometry takes precedence for Table.
