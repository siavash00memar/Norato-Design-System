# Specification — File Upload playground actions

## Problem

The sample queue action now uses the shared Button treatment, but the queue status controls and optional clear/state actions still look like unstyled text beside it.

## Acceptance contract

- All playground actions that mutate sample queue, Tile, or Avatar state use the shared secondary Button treatment.
- Actions remain compact by content, retain the common 48px minimum target, and wrap without horizontal overflow in the narrow RTL layout.
- Existing Persian labels, event handlers, status values, and optional visibility remain unchanged.
