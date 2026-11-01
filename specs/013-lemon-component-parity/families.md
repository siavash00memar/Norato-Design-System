# Component delivery ledger

Each family is complete only when its own DoD in checklist.md passes. Order follows the current catalog.

| Done | Family | Slug | Current maturity | Evidence |
| --- | --- | --- | --- | --- |
| [x] | Split Button | split-button | Implemented | Lemon desktop/mobile comparison; connected 288px Norato frame, six-variant/four-size/five-state galleries, split/dropdown runtime, keyboard/menu/AX and 32/40/48/56px geometry verified. Final 390px viewport: 375px document, 320×288px frame, 48px control, no overflow. |
| [ ] | Input | input | Implemented | Eight public Vue adapters and Button-style nine-section page are present. Latest browser review at 390×844: document 375px, top email specimen 48px high, no horizontal overflow. Outside/inside single-line sizes: 50/52/56/60px and 62/64/68/72px; OTP cells 48/52/56/60px and wrap at Large/XLarge; three-row Textarea 103/108/120/128px. Success appears on all adapters; loading exposes 8 busy controls and 8 indicators; OTP lengths 4/5/6 render; Number stacked actions are 48×48px and min/max ArrowUp/Down bounds were verified for step 1. Native number spinners are hidden to prevent duplicate actions. Latest Lemon/Norato 390×844 States review shows 41 inert family-specific cards in two columns, 375px document and no overflow; success/error/loading/focus treatments are distinct. Latest live browser audit also measured all 4 sizes × 2 label placements and exercised six-digit OTP paste/navigation. Console is error-free and latest token/catalog/typecheck/build/diff gates pass (681.86KB bundle warning). Gallery checkpoint `ee5f809` is pushed. Exhaustive runtime state/focus matrices, non-default Number step combinations and independent screen-reader review remain open.
| [ ] | Select | select | Implemented | Corrected inert Lemon-composition frame/Default marker; same-viewport Lemon comparisons: desktop 1920×863 (636×300 vs 584×288px, column-limited) and mobile 390×844 (327×300 vs 320×288px; document 375px). Norato field stays 300×48px RTL. Browser tests cover 4 sizes, grouped search, single selection, staged multi-select cancel/confirm, and error/disabled/read-only/loading semantics. Active option has tokenized 2px focus outline/4px offset/halo; ArrowDown + Enter selection confirmed. Open menu re-captured at enforced 390×844: bounded 343×384.5px, six 48px rows, no horizontal overflow; Escape returns focus to trigger. The 96-case combined mode/label/size/state geometry and ARIA matrix passed. The static States gallery now matches Lemon's title+description hierarchy and retains exactly 18 entries; desktop cards are 139.98×87.56px (Lemon 151.5×88.59px) in 4 columns, mobile Norato 2-column cards are 167.5×68.38px vs Lemon 158.5px; document width is 375px at 390 viewport and RTL is preserved. Full live-adapter screenshot review of all visual state combinations and independent screen-reader run remain open. |
| [ ] | Combobox | combobox | Adapted | Same-viewport desktop compare at 1195×765: Lemon frame 636×300px, field shell 324×68px; Norato frame 540×288px, field 310×50px, with narrower Norato content column. Added missing Default marker and visible semantic blue dots to the inert specimen; page has Preview, Vue playground and nine contract sections. Browser checked 16 mode × label × size geometries, RTL/48px floor, Persian filter/match, keyboard select/Escape, multi/chips, clear, recents, loading, empty/create, required/error/disabled, ARIA. Post-fix mobile comparison at 390×844: Lemon 327×300px vs Norato 320×288px; both documents 375px, no horizontal overflow. Focus ring is 2px blue/4px offset with 2px yellow halo; Clear is Tab reachable and Reka trigger is out of tab order while ArrowDown operates the composite. Exhaustive visual gallery and independent screen-reader pass remain open. |
| [x] | Checkbox | checkbox | Implemented | Standalone Vue adapter, Lemon-shaped inert specimen and live playground. Lemon desktop/mobile compared; 4 Anatomy parts, no stretch/overflow, 48px row, RTL, Space/focus, mixed AX value, required/error/disabled verified. All 30 size/value/state combinations exercised; all 6 Checkbox Field variants represented and checked. |
| [ ] | Radio Button | radio | Implemented | Lemon-like static States gallery has 8 title/description cards (5 Radio Button + 3 Radio Field), no pill artwork, and Norato status accents. Equal desktop 1195×765 and mobile 390×844 measurements for that gallery are recorded. New Variants area displays all 20 checked/unchecked × 16/20px × five-state cells with proportional circular glyphs and tokenized states; fresh desktop screenshot review reconfirms the full matrix without apparent stretching and qualitatively compares against Lemon's sample states/property selectors, but screenshots differ in viewport, so equal-viewport matrix and mobile matrix checks remain open. Fresh ArrowDown/Up and hover checks pass; monthly default restored. Empty playground render/status/snippet now synchronize. Technical gates pass; independent screen-reader review remains open. |
| [ ] | Switch | switch | Adapted | Static States gallery uses five Switch plus three Switch Field title/description cards. A dedicated inert Variants matrix now renders 30 Switch combinations (5 states×3 sizes×2 values) and 6 Switch Field combinations (3 states×2 values), reusing adapter tokens and logical RTL knob placement. Local browser shows both the matrix section and actual playground separately; Lemon reference hierarchy reviewed and Norato Blue palette retained. Earlier States comparison at desktop 1195×765 and mobile 390×844 recorded 3/2 columns, 167.5×87.6px Norato vs 158.5×88.6px Lemon cards, 375px mobile document and no overflow. Matrix-specific equal-viewport comparison, mobile inspection, DOM geometry/focus measurements, independent screen-reader and final gates remain open. |
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
