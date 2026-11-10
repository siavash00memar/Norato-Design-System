# Baseline DoD ledger

Status meanings:

- **Evidence recorded**: project ledger/checklist contains responsive visual review plus a primary interaction/RTL review. It is ready to map to Baseline, not a standalone pass of every Baseline gate.
- **Open**: an explicit Baseline item remains missing.

| Family | Evidence status | Baseline note |
| --- | --- | --- |
| Split Button | Evidence recorded; audit open | Existing desktop/mobile, interaction and keyboard evidence. |
| Input | Evidence recorded; audit open | Existing desktop/mobile, layout and adapter behavior evidence. |
| Select | Evidence recorded; audit open | Existing desktop/mobile and single/multi-select evidence; axis labels visually rechecked. |
| Combobox | Evidence recorded; audit open | Existing desktop/mobile, keyboard and selection evidence. |
| Checkbox | Evidence recorded; audit open | Existing responsive, keyboard and state evidence. |
| Radio Button | Evidence recorded; audit open | Existing responsive and keyboard evidence. |
| Switch | Evidence recorded; audit open | Existing responsive and interaction evidence. |
| Segmented Control | Evidence recorded; audit open | Existing responsive and keyboard evidence. |
| Range | Evidence recorded; audit open | Existing responsive, pointer and keyboard evidence. |
| Rating | Evidence recorded; audit open | Component checklist contains desktop/mobile and keyboard evidence. |
| Date Picker | Evidence recorded; audit open | Existing responsive and keyboard/range-selection evidence. |
| Time Picker | Evidence recorded; audit open | Existing responsive and keyboard evidence. |
| File Upload | Evidence recorded; audit open | Existing responsive and keyboard evidence; OS drag/drop remains Final DoD. |
| Navbar | Evidence recorded; audit open | Existing desktop/mobile variant and interaction evidence. |
| Sidebar | Evidence recorded; audit open | Existing desktop/mobile and interaction evidence. |
| Tabs | Evidence recorded; audit open | Existing desktop/mobile and keyboard evidence. |
| Breadcrumbs | Evidence recorded; audit open | Existing desktop/mobile and RTL navigation evidence. |
| Pagination | Evidence recorded; audit open | Same-viewport mobile comparison completed; frame fits without visible clipping/stretch; local frame is slightly wider and keeps Norato's yellow selected state. |
| Stepper | Evidence recorded; audit open | Existing responsive and interaction evidence. |
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
| List | Evidence recorded; audit open | Existing responsive and selection evidence. |
| Card | Evidence recorded; audit open | Component checklist contains desktop/mobile and selected-card evidence. |
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

- **Audit correction (2026-11-10):** the earlier 48/48 Baseline pass claim was unsupported and is withdrawn. Responsive/interaction notes alone do not prove each required matched desktop/mobile comparison. Baseline pass count is currently **unverified** while family-by-family evidence is re-audited; do not use 48/48 as a progress percentage.
- Newly confirmed in the current re-audit: List has a same-viewport 414px visual comparison; Pagination has a matched mobile comparison; Stepper's mobile compact treatment is supported by the reference's mobile usage guidance. These checks do not establish the complete Baseline rate by themselves.
- Shared Button-like page structure: confirmed in the common renderer and a live family page; catalog validation is included in the technical gate.
- The Baseline stage remains open until all family rows and global technical gates are independently reconciled.
- Final DoD completion remains tracked by `checklist.md` and family-specific records.
