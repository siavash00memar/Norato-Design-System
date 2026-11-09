# Specification — Alert uncontrolled dismissal

## Goal
Expose an explicit, reviewable uncontrolled Alert example in the live playground and verify that its adapter-owned visibility can dismiss and restore without binding `v-model`.

## Acceptance contract
- Keep the current controlled Alert demonstration and its focus-return behavior intact.
- Add a separate uncontrolled example that omits `v-model` and `modelValue` entirely.
- Dismissal must hide the Alert through its internal state and report a status in the host playground.
- Restore must remount the adapter and return focus to its close control.
- The example must remain RTL, use existing Norato tokens and preserve a minimum 48px target.
- Generated Vue usage example must reflect the selected controlled/uncontrolled mode accurately.

## Out of scope
No reusable adapter behavior change unless browser evidence reveals a defect. No visual token changes.
