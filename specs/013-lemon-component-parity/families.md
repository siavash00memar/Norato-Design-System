# Component delivery ledger

Each family is complete only when its own DoD in checklist.md passes. Order follows the current catalog.

| Done | Family | Slug | Current maturity | Evidence |
| --- | --- | --- | --- | --- |
| [x] | Split Button | split-button | Implemented | Lemon desktop/mobile comparison; connected 288px Norato frame, six-variant/four-size/five-state galleries, split/dropdown runtime, keyboard/menu/AX and 32/40/48/56px geometry verified. Final 390px viewport: 375px document, 320×288px frame, 48px control, no overflow. |
| [ ] | Input | input | Implemented | Input preview frame revised from stretched 540×147px to bounded glass/wash/dot composition with Default marker and 324px field cap. Equal 1920×863 desktop: Lemon 636×300px, Norato 584×288px (column-constrained), fields both 324px wide; Norato control remains 48px. Equal 390×844 mobile: Lemon 327×300px, field group 321px; Norato frame 320×288px, field 310×48px, document 375px. RTL, inertness and Button-like nine-section page verified. API family clarification and remaining visual/state DoD are still open. |
| [ ] | Select | select | Implemented | Corrected inert Lemon-composition frame/Default marker; same-viewport Lemon comparisons: desktop 1920×863 (636×300 vs 584×288px, column-limited) and mobile 390×844 (327×300 vs 320×288px; document 375px). Norato field stays 300×48px RTL. Browser tests cover 4 sizes, grouped search, single selection, staged multi-select cancel/confirm, and error/disabled/read-only/loading semantics. Active option has tokenized 2px focus outline/4px offset/halo; ArrowDown + Enter selection confirmed. Open menu re-captured at enforced 390×844: bounded 343×384.5px, six 48px rows, no horizontal overflow; Escape returns focus to trigger. The 96-case combined mode/label/size/state geometry and ARIA matrix passed. The static States gallery now matches Lemon's title+description hierarchy and retains exactly 18 entries; desktop cards are 139.98×87.56px (Lemon 151.5×88.59px) in 4 columns, mobile Norato 2-column cards are 167.5×68.38px vs Lemon 158.5px; document width is 375px at 390 viewport and RTL is preserved. Full live-adapter screenshot review of all visual state combinations and independent screen-reader run remain open. |
| [ ] | Combobox | combobox | Adapted | Same-viewport desktop compare at 1195×765: Lemon frame 636×300px, field shell 324×68px; Norato frame 540×288px, field 310×50px, with narrower Norato content column. Added missing Default marker and visible semantic blue dots to the inert specimen; page has Preview, Vue playground and nine contract sections. Browser checked 16 mode × label × size geometries, RTL/48px floor, Persian filter/match, keyboard select/Escape, multi/chips, clear, recents, loading, empty/create, required/error/disabled, ARIA. Post-fix mobile comparison at 390×844: Lemon 327×300px vs Norato 320×288px; both documents 375px, no horizontal overflow. Focus ring is 2px blue/4px offset with 2px yellow halo; Clear is Tab reachable and Reka trigger is out of tab order while ArrowDown operates the composite. Exhaustive visual gallery and independent screen-reader pass remain open. |
| [x] | Checkbox | checkbox | Implemented | Standalone Vue adapter, Lemon-shaped inert specimen and live playground. Lemon desktop/mobile compared; 4 Anatomy parts, no stretch/overflow, 48px row, RTL, Space/focus, mixed AX value, required/error/disabled verified. All 30 size/value/state combinations exercised; all 6 Checkbox Field variants represented and checked. |
| [ ] | Radio Button | radio | Implemented | Lemon-like static States gallery now has 8 title/description cards (5 Radio Button + 3 Radio Field), no fake pill artwork, and Norato status accents. Equal desktop 1195×765: 3-column cards 174.7px wide, 71.6–90.8px tall (Lemon 4-column 151.5×88.6px; Norato content column is narrower). Equal mobile 390×844: 2-column 167.5px cards, 68.4–87.6px tall; document 375px, RTL, no overflow. Fresh browser check reconfirmed ArrowDown/Up controlled selection and one non-selected row hover; initial monthly value and snippet restored. Technical gates pass. Full 20-cell focus/hover visual matrix and independent screen reader remain open. |
| [ ] | Switch | switch | Adapted | Static States gallery now uses eight Lemon-style title/description cards (5 Switch + 3 Switch Field), semantic Norato accents; desktop 1195×765 is 3 columns constrained by Norato content width, mobile 390×844 is 2 columns at 167.5×87.6px vs Lemon 158.5×88.6px. No overflow/stretch. Live six size/value cells retain a 48×48px target; hover, Space/Enter, error and disabled behavior verified. Complete 30-cell visual matrix, keyboard-focus measurement, independent screen-reader and full family gates remain open. |
| [ ] | Segmented Control | segmented | Adapted | Reka ToggleGroup adapter; Lemon desktop/mobile and 24 style×size×count combinations previously compared. At 390×844, XLarge + Contrast + 4 items remained in one horizontal row with matching generated snippet. ArrowLeft/Space/Right/Space verified RTL focus and selection, then Glass/Medium/3 with روزانه selected was restored. Full 64 item-state combinations, exact DOM geometry/focus-ring measurement, independent screen reader and final technical gates remain open. |
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
