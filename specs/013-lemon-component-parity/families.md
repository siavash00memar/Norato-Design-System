# Component delivery ledger

Each family is complete only when its own DoD in checklist.md passes. Order follows the current catalog.

| Done | Family | Slug | Current maturity | Evidence |
| --- | --- | --- | --- | --- |
| [x] | Split Button | split-button | Implemented | Lemon desktop/mobile comparison; connected 288px Norato frame, six-variant/four-size/five-state galleries, split/dropdown runtime, keyboard/menu/AX and 32/40/48/56px geometry verified. Final 390px viewport: 375px document, 320×288px frame, 48px control, no overflow. |
| [ ] | Input | input | Implemented | Lemon desktop/mobile render compared; 390px overflow corrected (document 375px); field 48px, specimen 123px. Live value, error, disabled, loading, required, `aria-busy`, and Tab focus ring checked. Remaining family variants and final visual DoD pending. |
| [ ] | Select | select | Implemented | Corrected inert Lemon-composition frame/Default marker; same-viewport Lemon comparisons: desktop 1920×863 (636×300 vs 584×288px, column-limited) and mobile 390×844 (327×300 vs 320×288px; document 375px). Norato field stays 300×48px RTL. Browser tests cover 4 sizes, grouped search, single selection, staged multi-select cancel/confirm, and error/disabled/read-only/loading semantics. Active option now has tokenized 2px focus outline/4px offset/halo; ArrowDown + Enter selection confirmed. Desktop and specimen geometry gates pass; full combined visual state matrix and enforced 390px open-menu capture remain open. |
| [ ] | Combobox | combobox | Adapted | Same-viewport desktop compare at 1195×765: Lemon frame 636×300px, field shell 324×68px; Norato frame 540×288px, field 310×50px, with narrower Norato content column. Added missing Default marker and visible semantic blue dots to the inert specimen; page has Preview, Vue playground and nine contract sections. Browser checked 16 mode × label × size geometries, RTL/48px floor, Persian filter/match, keyboard select/Escape, multi/chips, clear, recents, loading, empty/create, required/error/disabled, ARIA. Post-fix mobile comparison at 390×844: Lemon 327×300px vs Norato 320×288px; both documents 375px, no horizontal overflow. Focus ring is 2px blue/4px offset with 2px yellow halo; Clear is Tab reachable and Reka trigger is out of tab order while ArrowDown operates the composite. Exhaustive visual gallery and independent screen-reader pass remain open. |
| [x] | Checkbox | checkbox | Implemented | Standalone Vue adapter, Lemon-shaped inert specimen and live playground. Lemon desktop/mobile compared; 4 Anatomy parts, no stretch/overflow, 48px row, RTL, Space/focus, mixed AX value, required/error/disabled verified. All 30 size/value/state combinations exercised; all 6 Checkbox Field variants represented and checked. |
| [ ] | Radio Button | radio | Implemented | Dedicated API and sample; core desktop/mobile behavior checked, full reference state matrix remains open |
| [ ] | Switch | switch | Adapted | Dedicated controlled Reka adapter, three track sizes, Lemon-composition preview, RTL and Space/Enter checked; complete state/hover/screenreader DoD remains open |
| [ ] | Segmented Control | segmented | Adapted | Reka ToggleGroup adapter and playground implemented; browser keyboard/state/size DoD pending |
| [x] | Range | range | Implemented | Reka controlled single/range; Lemon desktop/mobile compared; all 16 type/size/disabled combinations at both viewports, pointer/keyboard/RTL/AX and technical gates pass. |
| [x] | Rating | rating | Implemented | Reka-controlled display/input/summary; Lemon desktop/mobile, 24 display combinations, RTL/half-star, keyboard, focus, disabled, AX and technical gates pass. |
| [ ] | Date Picker | date-picker | Proposed | Pending visual and behavior comparison |
| [ ] | Time Picker | time-picker | Proposed | Pending visual and behavior comparison |
| [ ] | File Upload | file-upload | Proposed | Pending visual and behavior comparison |
| [ ] | Navbar | navbar | Proposed | Pending visual and behavior comparison |
| [ ] | Sidebar | sidebar | Adapted | Pending visual and behavior comparison |
| [ ] | Tabs | tabs | Adapted | Pending visual and behavior comparison |
| [ ] | Breadcrumbs | breadcrumbs | Proposed | Pending visual and behavior comparison |
| [ ] | Pagination | pagination | Proposed | Pending visual and behavior comparison |
| [ ] | Stepper | stepper | Proposed | Pending visual and behavior comparison |
| [ ] | Menu | menu | Proposed | Pending visual and behavior comparison |
| [ ] | Command Palette | command-palette | Proposed | Pending visual and behavior comparison |
| [ ] | Tree View | tree-view | Proposed | Pending visual and behavior comparison |
| [ ] | Alert | alert | Adapted | Pending visual and behavior comparison |
| [ ] | Banner | banner | Proposed | Pending visual and behavior comparison |
| [ ] | Toast | toast | Proposed | Pending visual and behavior comparison |
| [ ] | Tooltip | tooltip | Proposed | Pending visual and behavior comparison |
| [ ] | Progress | progress | Adapted | Pending visual and behavior comparison |
| [ ] | Spinner | spinner | Proposed | Pending visual and behavior comparison |
| [ ] | Skeleton | skeleton | Proposed | Pending visual and behavior comparison |
| [ ] | Empty State | empty-state | Adapted | Pending visual and behavior comparison |
| [ ] | Notification Center | notification-center | Proposed | Pending visual and behavior comparison |
| [ ] | Badge | badge | Adapted | Pending visual and behavior comparison |
| [ ] | Table | table | Proposed | Pending visual and behavior comparison |
| [ ] | List | list | Proposed | Pending visual and behavior comparison |
| [ ] | Card | card | Adapted | Pending visual and behavior comparison |
| [ ] | Tag | tag | Adapted | Pending visual and behavior comparison |
| [ ] | Chip | chip | Adapted | Pending visual and behavior comparison |
| [ ] | Avatar | avatar | Proposed | Pending visual and behavior comparison |
| [ ] | Timeline | timeline | Proposed | Pending visual and behavior comparison |
| [ ] | Charts | charts | Proposed | Pending visual and behavior comparison |
| [ ] | Divider | divider | Proposed | Pending visual and behavior comparison |
| [ ] | Accordion | accordion | Adapted | Pending visual and behavior comparison |
| [ ] | Modal | modal | Proposed | Pending visual and behavior comparison |
| [ ] | Drawer | drawer | Proposed | Pending visual and behavior comparison |
| [ ] | Popover | popover | Proposed | Pending visual and behavior comparison |
| [ ] | Image | image | Proposed | Pending visual and behavior comparison |
| [ ] | Carousel | carousel | Proposed | Pending visual and behavior comparison |
| [ ] | Chat | chat | Proposed | Pending visual and behavior comparison |

Count excluding Button: 48.
