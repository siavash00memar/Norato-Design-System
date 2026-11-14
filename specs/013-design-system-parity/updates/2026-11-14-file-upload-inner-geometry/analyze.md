# Analyze — File Upload inner geometry
The preview and live Large Dropzone both consume the same existing inner-size tokens. Changing only those tokens fixes their oversized shape consistently and avoids specimen-only overrides. At narrow widths, inline-size remains constrained by min(100%, token); vertical height becomes 152px. Compact Dropzone remains at the minimum control target.
