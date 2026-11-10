# Specify — File Upload playground Range accent

## Observed problem

The File Upload playground's Tile progress slider renders a browser-default blue track/thumb. Norato's selected/interactive accent is yellow.

## Acceptance

- The Tile progress slider's active native accent uses `--norato-color-brand-yellow`.
- The range control hit target is at least `--norato-control-target-min` (48px), while its native track and thumb stay centered and do not stretch.
- Changing the slider still updates the Tile's controlled preview percentage.
- The rule is scoped only to the File Upload playground; other range controls and the public Range component remain unchanged.
- No status, public API, or RTL layout changes.

## Verification

Inspect the live slider's computed `accent-color` and 48px bounding box, move it, and confirm the displayed progress value updates. Compare the screenshot with the current blue default and confirm yellow replaces it without stretching the track/thumb.
