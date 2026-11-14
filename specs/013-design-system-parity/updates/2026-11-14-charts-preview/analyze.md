# Charts preview update — Analyze

- The shared Button-style sample currently produces a 300px frame, while the current reference frame is 331.69px tall on desktop. Use a family-scoped rule rather than changing other components.
- The local specimen card caps at 360px and uses 12px padding; the reference card is 367.2px wide with a 334.8px plot. Increasing the outer cap and padding together preserves plot width while matching card bounds.
- The 280px mobile plot minimum is appropriate for live data exploration but forces a horizontal scrollbar in the inert 320px specimen. Disable the minimum only under the static sample selector.
- Series 1 must remain Norato yellow even when the reference uses another series color. No data values, SVG geometry, or live-playground state need to change.
