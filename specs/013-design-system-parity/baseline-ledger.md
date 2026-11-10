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
| Segmented Control | Baseline passed | Matched mobile specimen comparison confirms bounded RTL layout, clear selected state and no obvious clipping/stretch; ≥48px target and primary keyboard/pointer paths are documented. Exhaustive live combinations and independent screen-reader review remain Final DoD. |
| Range | Baseline passed | Strict DoD is complete; desktop/mobile comparison, RTL, ≥48px targets and pointer/keyboard paths are verified. |
| Rating | Baseline passed | Matched desktop/mobile specimen, RTL star/value/count order, ≥48px input targets and primary keyboard/pointer paths are recorded; fresh mobile visual comparison confirms the bounded layout and star direction. Independent screen-reader review remains Final DoD. |
| Date Picker | Baseline passed | Matched mobile specimen and prior desktop/mobile frame comparisons confirm bounded calendar layout, RTL weekday order and no obvious clipping/stretch; 48px targets and primary selection/keyboard paths are recorded. Full field-state review and independent screen-reader review remain Final DoD. |
| Time Picker | Baseline passed | Matched desktop/mobile specimens show bounded compact columns without stretch; live mobile comparison confirms Norato-yellow selection, LTR time digits within the RTL page, and no obvious clipping. 48px targets and primary pointer/keyboard paths are recorded. Independent screen-reader review remains Final DoD. |
| File Upload | Baseline passed | Matched desktop/mobile dropzone comparisons show a bounded specimen without obvious stretch; fresh mobile render retains RTL copy and Norato-yellow action. 48px targets and pointer/keyboard file-picker paths are recorded. Native OS drag/drop, independent screen-reader and combined-state checks remain Final DoD. |
| Navbar | Baseline passed | Matched desktop/mobile composition and responsive 390/320px checks are recorded; fresh mobile render retains right-side brand, RTL link flow, Norato-yellow action and bounded geometry. Main pointer/keyboard paths and 48px targets are verified. Full state/focus matrix and independent screen-reader review remain Final DoD. |
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
- Baseline DoD verified: **18/48 families (37.5%)** — Split Button, Input, Select, Combobox, Checkbox, Radio Button, Switch, Segmented Control, Range, Rating, Date Picker, Time Picker, File Upload, Navbar, Pagination, Stepper, List and Card. The remaining 30 family rows stay open pending the same evidence mapping; this is a verified-stage rate, not a measure of all implementation work already completed.
- Shared Button-like page structure: confirmed in the common renderer and a live family page; catalog validation is included in the technical gate.
- The Baseline stage remains open until all family rows and global technical gates are independently reconciled.
- Final DoD completion remains tracked by `checklist.md` and family-specific records.
