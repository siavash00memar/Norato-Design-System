# Baseline DoD ledger

Status meanings:

- **Evidence recorded**: project ledger/checklist contains responsive visual review plus a primary interaction/RTL review. It is ready to map to Baseline, not a standalone pass of every Baseline gate.
- **Open**: an explicit Baseline item remains missing.

| Family | Evidence status | Baseline note |
| --- | --- | --- |
| Split Button | Baseline passed | Strict DoD is complete; desktop/mobile comparison, RTL, ≥48px targets and pointer/keyboard paths are verified. |
| Input | Baseline passed | Matched desktop/mobile top specimen, 48px+ target, RTL, no overflow, and primary field/keyboard paths are recorded. Full adapter/state visual matrix remains Final DoD. |
| Select | Baseline passed | Matched desktop/mobile specimen and open-menu checks, bounded RTL layout, 48px+ targets, primary selection and keyboard paths are recorded. Full state screenshots and screen-reader review remain Final DoD. |
| Combobox | Baseline passed | Matched desktop/mobile specimen, bounded field/menu, RTL, 48px+ targets, primary search/selection and keyboard paths are recorded. Cold-load, exhaustive matrix and screen-reader review remain Final DoD. |
| Checkbox | Baseline passed | Strict DoD is complete; matched desktop/mobile visual review, RTL, ≥48px targets and pointer/keyboard paths are verified. |
| Radio Button | Baseline passed | Matched desktop/mobile gallery and frame comparisons, intrinsic radio circles, RTL, 48px rows and primary pointer/keyboard paths are recorded. Exhaustive live cross-product and screen-reader review remain Final DoD. |
| Switch | Baseline passed | Matched desktop/mobile comparisons, bounded track geometry, RTL, 48px targets and primary pointer/keyboard paths are recorded; Norato yellow/on and neutral/off states are retained. Exhaustive live cross-product and screen-reader review remain Final DoD. |
| Segmented Control | Evidence recorded; audit open | Existing responsive and keyboard evidence. |
| Range | Baseline passed | Strict DoD is complete; desktop/mobile comparison, RTL, ≥48px targets and pointer/keyboard paths are verified. |
| Rating | Evidence recorded; audit open | Component checklist contains desktop/mobile and keyboard evidence. |
| Date Picker | Evidence recorded; audit open | Existing responsive and keyboard/range-selection evidence. |
| Time Picker | Evidence recorded; audit open | Existing responsive and keyboard evidence. |
| File Upload | Evidence recorded; audit open | Existing responsive and keyboard evidence; OS drag/drop remains Final DoD. |
| Navbar | Evidence recorded; audit open | Existing desktop/mobile variant and interaction evidence. |
| Sidebar | Evidence recorded; audit open | Existing desktop/mobile and interaction evidence. |
| Tabs | Evidence recorded; audit open | Existing desktop/mobile and keyboard evidence. |
| Breadcrumbs | Evidence recorded; audit open | Existing desktop/mobile and RTL navigation evidence. |
| Pagination | Baseline passed | Matched desktop/mobile comparisons, bounded layout, RTL, ≥48px controls and primary pointer/keyboard paths are recorded. Final screen-reader review remains separate. |
| Stepper | Baseline passed | Desktop and mobile comparison recorded. At mobile, Norato switches to Compact per the reference's mobile usage guidance; frame stays bounded, RTL and Norato palette remain intact, and the primary keyboard path works. Full matrix remains Final DoD. |
| Menu | Evidence recorded; audit open | Existing responsive and keyboard evidence. |
| Command Palette | Evidence recorded; audit open | Existing responsive and keyboard/search evidence. |
| Tree View | Evidence recorded; audit open | Existing responsive and keyboard/navigation evidence. |
| Alert | Evidence recorded; audit open | Existing responsive and interaction evidence. |
| Banner | Evidence recorded; audit open | Existing responsive and action evidence. |
| Toast | Evidence recorded; audit open | Existing responsive and open/close evidence. |
| Tooltip | Evidence recorded; audit open | Existing responsive and keyboard evidence. |
| Progress | Evidence recorded; audit open | Existing responsive, RTL and control evidence. |
| Spinner | Evidence recorded; audit open | Existing responsive and configuration evidence. |
| Skeleton | Evidence recorded; audit open | Existing responsive and configuration evidence. |
| Empty State | Evidence recorded; audit open | Existing responsive and action evidence. |
| Notification Center | Evidence recorded; audit open | Existing responsive and interaction evidence. |
| Badge | Evidence recorded; audit open | Existing responsive and interaction evidence. |
| Table | Evidence recorded; audit open | Existing responsive and selection evidence. |
| List | Baseline passed | Matched desktop and 414px mobile comparison, bounded three-row RTL specimen, ≥48px targets and primary pointer/keyboard paths are recorded. Final screen-reader review remains separate. |
| Card | Baseline passed | Matched desktop and mobile comparisons, six adapter coverage, bounded media/text without stretch, RTL, ≥48px interactive controls and pointer/keyboard paths are recorded. Final screen-reader review remains separate. |
| Tag | Evidence recorded; audit open | Existing responsive and interaction evidence. |
| Chip | Evidence recorded; audit open | Existing responsive and keyboard evidence. |
| Avatar | Evidence recorded; audit open | Existing responsive and focus evidence. |
| Timeline | Evidence recorded; audit open | Existing responsive and direction/layout evidence. |
| Charts | Evidence recorded; audit open | Existing responsive and chart interaction evidence. |
| Divider | Evidence recorded; audit open | Existing responsive and contract evidence. |
| Accordion | Evidence recorded; audit open | Component checklist contains desktop/mobile and keyboard evidence. |
| Modal | Evidence recorded; audit open | Existing responsive, keyboard and dialog evidence. |
| Drawer | Evidence recorded; audit open | Existing responsive and keyboard evidence. |
| Popover | Evidence recorded; audit open | Existing responsive and interaction evidence. |
| Image | Evidence recorded; audit open | Existing responsive and image-state evidence. |
| Carousel | Evidence recorded; audit open | Existing responsive and keyboard/scroll evidence. |
| Chat | Evidence recorded; audit open | Existing responsive and interaction evidence. |

## Summary

- **Audit correction (2026-11-10):** the earlier 48/48 Baseline pass claim was unsupported and is withdrawn. Responsive/interaction notes alone do not prove each required matched desktop/mobile comparison.
- Baseline DoD verified: **12/48 families (25%)** — Split Button, Input, Select, Combobox, Checkbox, Radio Button, Switch, Range, Pagination, Stepper, List and Card. The remaining 36 family rows stay open pending the same evidence mapping; this is a verified-stage rate, not a measure of all implementation work already completed.
- Shared Button-like page structure: confirmed in the common renderer and a live family page; catalog validation is included in the technical gate.
- The Baseline stage remains open until all family rows and global technical gates are independently reconciled.
- Final DoD completion remains tracked by `checklist.md` and family-specific records.
