# Norato Request Validation Checklist

## Active navigation brand-color correction (2026-11-09)

- [x] Fresh local Input page render showed the active component category using a blue-tinted surface despite Norato's yellow accent rule.
- [x] Desktop and mobile active-navigation selectors now use the semantic yellow warning container; current desktop screenshot confirms the selected category is pale yellow and readable.
- [ ] Mobile screenshot validation remains open because the current browser viewport was desktop-sized.

## Shared component specimen cold-load — implementation checkpoint (2026-11-09)

- [x] On a fresh direct load of Combobox, the first narrow-browser capture showed the preview title and note but no specimen; the next capture of the unchanged page showed the full frame and field.
- [x] In the same narrow viewport, Button showed its specimen immediately. Source review confirms `ComponentSpecimen` is wrapped in `defineAsyncComponent` without a loading fallback in `App.vue`.
- [x] Added an inert, reduced-motion-aware, Norato-tokenized fallback for `ComponentSpecimen`; it reserves the documented base/large frame height and a compact inventory state while leaving the real specimen code-split.
- [x] Fresh direct browser renders of Button and Combobox show their respective real specimens in the desktop browser capture after load. The 288px preview frames remain bounded and the Button sample contains only its Primary and Secondary examples.
- [x] Production build passes without a chunk-size warning: the initial JS is 426.85 KB (117.35 KB gzip), and the async specimen is 33.71 KB (8.75 KB gzip). The earlier eager import produced a 542.77 KB (144.42 KB gzip) initial chunk.
- [ ] Verify the transient fallback itself on a deliberately throttled cold load, and validate exact mobile frame heights for both direct routes; the current browser backend did not provide a controlled viewport/network throttle.

## Tooltip shared skip-delay provider — implementation checkpoint (2026-11-09)

- [x] Added a public `NoratoTooltipProvider` for sibling tooltips; standalone `NoratoTooltip` retains its default local provider. Shared provider defaults are 500ms open delay and 300ms skip-delay.
- [x] Playground renders two tooltip triggers under one shared provider; both labels and controls appear in the browser.
- [x] Token/catalog/typecheck/build/diff checks pass.
- [x] Pointer-only timing: first trigger entered `delayed-open`; immediately moving from outside to the sibling trigger showed `instant-open`. After the skip window elapsed, the second trigger returned to delayed opening.
- [ ] Independent screen-reader review remains open for Tooltip.

## Switch responsive Variants gallery — browser review (2026-11-09)

- [x] Matched mobile screenshots and measurements at 390×844 and 320×640. Norato preview frames are 320×288px and 273×288px; reference frames are 327×300px and 257×300px.
- [x] Norato document width is 375px/305px with no horizontal overflow; the reference document reaches 326px at the 320px viewport.
- [x] All 30 Switch and 6 Switch Field gallery states rendered. The 36 targets are 48×48px; tracks remain intrinsic at 32×20, 40×24 and 48×28px. Knobs stay white with no border/shadow and 5px nearest-edge inset; checked, disabled, hover and error treatments use the correct state colors.
- [ ] Independent screen-reader review remains open for Switch.

## Segmented disabled-selection priority — browser review (2026-11-09)

- [x] At 390×844 and 320×640, Norato page widths remained within the CSS viewport (375px and 305px); 64 inert cells rendered in eight cards and the matrix did not create horizontal overflow.
- [x] Same-viewport reference comparison: static frame 320×288px vs 327×300px at 390; 273×288px vs 257×300px at 320. Norato preserves its shared frame height and avoids the reference's 320px document overflow.
- [x] The full 64-case visual audit found Contrast + Selected + Disabled still yellow due to selector specificity. Fixed both the live component rule and static matrix rule; confirmed neutral `rgb(245,245,245)` surface, disabled `rgb(107,107,107)` text and no elevation in the live disabled selected state.
- [ ] Independent screen-reader review remains open for Segmented Control.

## Segmented selected item disabled — controlled-state follow-up (2026-11-09)

- [x] Changed the live Playground reset condition to preserve the controlled selected value when its matching item becomes disabled; changing the option count still resets only when the selected item is removed.
- [x] In browser, selected Month then enabled its disabled toggle. `month` remained the generated controlled model value, while the Month button exposed selected and disabled semantics.
- [x] Screenshot review in Glass and Contrast confirmed neutral disabled surface/text and no selected elevation; disabled styling overrides the selected yellow/raised treatment.
- [ ] Independent screen-reader review remains open for Segmented Control.

## Chip implementation checkpoint (2026-11-09)

- [x] Added `NoratoChip` with controlled filter and removable input modes, RTL/LTR direction, leading icon, size options, disabled state and named removal control.
- [x] Connected package exports, styles, tokens, catalog, usage examples, static specimen, interactive playground and component contract. The page uses the Button-style documentation structure.
- [x] Browser review confirmed Space/Enter activation and synchronized pressed state, correct removal label, disabled removal, and focus progression to Restore and back to Remove. RTL/LTR control screenshots confirm correct icon placement.
- [x] Browser screenshots exposed and helped remove a duplicate yellow focus halo. The 20-case matrix covers four sizes across five states, including default, hover, selected, disabled and focus.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), Vue typecheck, production build and `git diff --check` pass. Repository scan found no prohibited reference-name matches.
- [ ] Long-label truncation, exact 390/320 overflow and independent screen-reader review remain open; see `specs/013-design-system-parity/chip-checklist.md`. Chip DoD remains open.

## Tag implementation checkpoint (2026-11-09)

- [x] Added the public non-interactive `NoratoTag` Vue adapter with semantic tones, soft/outline appearance, four intrinsic sizes, optional icon/status dot, RTL default and explicit LTR support.
- [x] Connected export, stylesheet, token names, catalog, usage example, contract, static specimen and live Button-style playground.
- [x] Removed Tag from its old generic specimen selector so the new adapter owns its own visual treatment.
- [x] Same-window desktop comparison in a 1905×951 browser: Norato frame about 580×288px, reference frame about 630×300px; the local frame remains bounded by its docs column. The local Success pill follows semantic Norato colors.
- [x] Keyboard changed Success to Warning and the generated code followed. Enabling leading and trailing icons updated both preview and Vue snippet; Outline and Small selections appeared in the generated usage.
- [x] Accessibility tree exposes noninteractive text only; decorative icon and dot wrappers are hidden from assistive technology.
- [x] Replaced generic blue anatomy/size/state examples with Tag-based previews and yellow Norato accents; corrected the usage example so it renders as one concise rule.
- [x] Reviewed all 40 rendered tone × appearance × size combinations in the desktop browser; semantic text pairings retain at least 4.51:1 contrast on white.
- [x] Token/catalog checks, Vue typecheck/build and `git diff --check` pass. Repository scan found no prohibited reference-name matches.
- [x] LTR icon ordering, long text/narrow container, and 390/320 widths are covered by the browser follow-up below; see `specs/013-design-system-parity/tag-checklist.md`.
- [ ] Independent screen-reader review remains open; Tag DoD stays open.

## Carousel inert specimen correction — browser review (2026-11-08)

- [x] Matched reference/Norato screenshot review at 1265×713. The inert preview has a dotted frame, Default marker, right-aligned title, correctly ordered arrows, three square local illustrations, and a centered yellow active indicator.
- [x] The card art is CSS geometry with semantic Norato tokens; no remote image or added blue accent is used. Legacy text-only `i` slide styling was removed from the component specimen stylesheet.
- [ ] Exact 390/320 measurements, live pointer/touch and LTR/boundary cross-product, and independent screen-reader review remain open; see `carousel-checklist.md`.

## Carousel runtime height and navigation follow-up — browser review (2026-11-08)

- [x] At slide 5, text-only cards previously inherited the tallest slide's height. After the flex alignment correction they keep their natural height; the five-item playground now includes local art for each card.
- [x] Next advanced slide 1→2; direct selection moved to slide 5 and the Next control disabled; ArrowRight in RTL returned to slide 4. The active indicator and controlled-index selector stayed synchronized, with visible track focus.
- [ ] Mouse/touch gesture, LTR keyboard flow, programmatic external model changes, exact mobile widths and independent screen-reader run remain open.

## ناوبری فهرست کامپوننت‌ها — 2026-11-08

- [x] از Charts به Avatar رفتیم: URL به `#component-avatar` تغییر کرد، عنوان صفحه Avatar شد و فقط یک مورد در فهرست کناری `aria-current="page"` داشت.
- [x] مورد فعال رنگ زرد Norato گرفت؛ برای Avatar فهرست کناری به‌صورت داخلی پیمایش شد (scrollTop از 0 به 1887)، بدون حرکت دادن ناحیهٔ سند.
- [x] Back مرورگر URL و وضعیت فعال را به Charts برگرداند. اپ shell و محتوای Charts در همان صفحه باقی ماندند.
- [x] بارگذاری مستقیم `#component-accordion` همان کامپوننت را فعال کرد و داخل محدودهٔ قابل‌دید فهرست قرار داد؛ Forward مرورگر هم Avatar و نشان فعال آن را بازیابی کرد.
- [x] با Enter روی Charts، مسیر و انتخاب فعال تغییر کرد؛ حلقهٔ فوکوس صفحه‌کلید قابل مشاهده بود. کنسول مرورگر خطای تازه‌ای نداشت.
- [x] `pnpm check:tokens`، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` گذشتند. Build فقط هشدار اندازهٔ bundle بزرگ‌تر از ۵۰۰KB را گزارش کرد.

## Skeleton browser review — 2026-11-08

- [x] Compared design reference and Norato at 1265×720. The Norato page uses the Button-style dotted frame and preserves the avatar/text silhouette with Norato's neutral palette.
- [x] Actual Vue page exposes base/pattern, effect, and direction controls; selecting Shimmer updates the generated code example.
- [x] Exercised all 24 shape/pattern-effect combinations in the live playground; measured intrinsic shape dimensions and pattern blocks with no vertical stretching.
- [x] Found and fixed a CSS direction override. Browser measurements now show RTL avatar at inline-end and LTR avatar at inline-start; generated code keeps the selected `dir`.
- [x] Browser reports `prefers-reduced-motion: reduce`; all Skeleton animations compute to `none`. The single playground busy region has a Persian name, decorative content is hidden, and it contains zero focusable descendants.
- [x] No browser-rendered page overflow was observed at the 1280×720 viewport.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), Vue typecheck/build, and `git diff --check` pass. Build reports a 1,032.62KB JavaScript chunk advisory.
- [ ] Browser preference prevented visual confirmation of normal-motion shimmer travel. Exact 390/320 overflow measurements and independent screen-reader review also remain open; Skeleton DoD stays open.

## Banner desktop/mobile and keyboard follow-up — 2026-11-08

- [x] design reference/Norato same-viewport desktop review at 1265×720. Norato's inert default now uses a one-line announcement and no extra vertical padding; the action keeps its minimum 48px target.
- [x] All six desktop tone visuals inspected; Mobile Neutral inspected at 390px and 320px. Five Mobile tone combinations and exact document overflow measurement remain open.
- [x] RTL icon/message/action/close order, semantic tone palette and dark Inverse + yellow accent reviewed.
- [x] Action feedback has no navigation; controlled and uncontrolled dismiss/restore work. Space activates both action and close; keyboard focus shows the yellow ring.
- [ ] Independent screen-reader review and browser AX role announcement remain open; Banner DoD stays open.

## Spinner browser review — 2026-11-08

- [x] Fresh local render at `/#component-spinner` shows the component status as Adapted, a separate live playground with type/tone/size controls, copyable Vue usage, and all nine Button-order contract sections. Browser accessibility tree exposes all sections and names the playground controls; this is not treated as an independent screen-reader pass.
- [x] At 1265×720, the inert Spinner preview is a centered Norato-yellow Ring in the 576×288px Button-style dotted frame; same-viewport design reference review showed a 40px dark Ring, so Norato uses its 48px token (about 41px visible arc) with the approved yellow palette.
- [x] Exercised all 45 type/tone/size configurations in the actual Spinner playground. Each rendered an intrinsic square box matching 16/20/24/32/48px; expected tone colors computed in all states and no combo failed.
- [x] Verified Ring and Norato use an SVG arc; Dots use three CSS dots. The browser reports `prefers-reduced-motion: reduce`; Ring and all three Dots compute to `animation:none`, with Dots remaining at full opacity.
- [x] Exercised Inline, Refresh, Overlay and Page. All use one polite status label, hide the decorative child from the accessibility tree, and preserve the selected RTL/LTR direction. Overlay is host-relative and pointer-transparent; Page spans the current viewport and is pointer-transparent.
- [x] Loader `active=false` removes its status; reactivating restores one status region. LTR moves the spinner to the inline-start side of the label.
- [x] Responsive verification at 390px/320px is recorded in the later “Spinner responsive verification” entry below (343×288px / 273×288px frames, no document overflow); this older browser-view limitation does not apply to those captured checks.
- [x] Follow-up browser review: the live reference and local Spinner pages both show the centered ring in the dotted preview stage; Norato retains its yellow arc. Switching the local playground to Loader exposed the inline Persian status and copyable `NoratoLoader` usage; unchecking Active removed the status region and rendered the inactive message. These browser tree observations do not replace the still-open independent screen-reader review.
- [ ] Independent screen-reader review remains unverified; keep Spinner DoD open until completed.

## Menu local browser review — 2026-11-08

- [x] Actual desktop page renders an inert action-menu specimen and a separate interactive adapter playground.
- [x] Opened the live menu and verified its accessible name and menu/item tree. Home moves focus to the first item. Pointer hover on the submenu parent remained yellow while keyboard focus was on Delete (`:hover=true`, focused row different, `rgb(255, 248, 224)` background); a hovered disabled Rename stayed transparent and `aria-disabled=true`.
- [x] The documented 390px root/submenu, RTL/LTR, selection, close and focus-return checks are recorded in the Menu DoD.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass after the hover correction; build reports the 877.63KB JS chunk advisory.
- [ ] Inspect at 320px and conduct an independent screen-reader review. Do not close Menu DoD until these pass.

## Select default specimen alignment — 2026-11-08

- [x] At 1280×720, the inert specimen shows no selected value and uses مرجع طراحی's Persian placeholder `به شهر انتخاب کن`; the executable playground remains selected to Tehran.
- [x] At 1280×720, the 300×48px field and 288px dotted frame remain proportional, with Default marker, RTL document direction, no horizontal overflow, and Tehran preserved in the executable playground. The active browser tool did not permit enforcing the 390×844 viewport; mobile is not claimed as rechecked for this correction.

## Input stroke hover follow-up — browser evidence (2026-11-08)

- [x] On the live Password Input, pointer hover remained active while keyboard focus moved to the adjacent visibility action; the input was not focused, its only capsule stroke computed to Norato yellow (`rgb(253, 193, 1)`), and the outer layout wrapper computed to `0px` border.
- [x] Error+Disabled Text and OTP kept neutral strokes while retaining the error message. Disabled and invalid state styling does not get recolored by hover.
- [x] The line in question is the capsule's own field Stroke; the wrapper must not draw a second border. The page had no extra gray shell line in this verified hover state.
- [x] Follow-up on the reported Password field: moving/clicking the actual eye action left the pointer over the field while input focus was absent; the capsule remained `1px solid rgb(253, 193, 1)` and the wrapper remained `0px` border. The intended hover state is present in the current local render.

## Command Palette — local browser review (2026-11-08)

- [x] Fixed inert preview width: at 1280×720 the dotted frame is 584×288px and panel is 448×240px, no longer content-shrunk.
- [x] Fixed RTL live dialog centering: at 1280×720 dialog is 600×375px at x=340/y=108; search receives focus and its focus stroke is yellow without the generic blue outline/halo.
- [x] Persian query `تنظیمات` yields the matching grouped option; Enter selects it, closes the dialog and restores focus to the trigger.
- [x] Loading and empty states render live status content. Their combobox no longer references a missing listbox/active descendant; Escape closes.
- [x] Ctrl+K opens while the trigger is focused. Disabled Settings exposes `aria-disabled=true` and ArrowDown skips it to Projects.
- [ ] 390/320 viewport, Home/End/ArrowUp, outside-click/Tab, configurable shortcut exclusions, IME/repeat, 8-item cap stress, design reference matched-viewport comparison and independent screen-reader review remain pending.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` passed. Build reports a 898.75KB JS chunk above the 500KB advisory threshold.
- [x] GitHub checkpoint `c15eff741cce17ddd3190da84069825a66df2c92` is pushed to `origin/master`; local and remote hashes matched and the worktree is clean.

## Input Text-state and OTP five-cell follow-up — browser evidence (2026-11-08)

- [x] Text Input's required/error/disabled/loading/success/read-only behavior was inspected in the live playground, including native state flags, status/description associations, and stroke colors. Four size choices and both label placements were exercised.
- [x] OTP length 5: sequential typing advanced through five cells; ArrowLeft/ArrowRight moved focus; Backspace cleared the focused digit and moved back when the cell was empty; paste populated all five cells and focused the final cell. The playground was restored to six empty cells with every shared toggle off.
- [ ] Full screenshot comparison across every design reference Text variant and independent screen-reader review remain open.

## Input page-wide styling — mobile recheck (2026-11-08)

- [x] At 390×844, the Input page is RTL and document width is 375px, so no horizontal overflow occurs.
- [x] All eight Input adapters were inspected in the live playground: labels compute to Estedad 700; each single-line capsule uses a 48px target with a centered 36px visual face. OTP keeps its 48px cell target and 36px visual face; Textarea remains multiline.
- [x] Persian placeholders present on Text, Phone and Search compute to RTL, Vazirmatn Light 12px and `#a1a1a1`. Empty Password/OTP/numeric adapters do not render placeholder text. The inert top Email specimen has no helper/message beneath it.
- [x] Removed generic helper copy from the live Text Input playground and backward-compatible `NoratoField` lab; error/loading/success messages remain state-driven. Optional helper-text APIs remain available to consumers.
- [x] Desktop browser recheck at 1280×720: six single-line adapter controls measure 48px targets with 36px pseudo-capsules; all field labels compute to Estedad 700. Text, Phone and Search placeholders compute to RTL, Vazirmatn 12px and `rgb(161, 161, 161)`. Textarea remains 108px/multiline. Input page document width is 1265px within the 1280px viewport.
- [ ] design reference screenshot comparison for every variant/state and an independent screen-reader review remain open; this style recheck does not close Input DoD.

## Combobox alignment with cross-component Input styling (2026-11-08)

- [ ] At desktop and 390×844, confirm 36px capsule inside a 48px target, Estedad Bold label, RTL/Vazirmatn Light 12px `#a1a1a1` placeholder, and no document overflow/stretch.
- [x] At the current live 499×932 viewport, confirmed neutral 1px `#e8e8e8` rest stroke, isolated yellow 1px hover with keyboard focus moved elsewhere, yellow focus Stroke, no field outline/shadow, Clear's independent 2px keyboard outline + yellow halo, and ArrowDown/Escape behavior. Disabled+invalid computes to neutral Stroke; disabled hover cannot activate yellow.
- [ ] Recompare design reference Combobox at matched desktop and 390×844 viewports after this correction.
- [x] After the latest Combobox changes: `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build` and `git diff --check` pass; build reports the existing >500kB main JavaScript chunk advisory.
- [x] Desktop follow-up: neutral 1px rest stroke, 36px capsule in 48px target, yellow 1px keyboard-focus Stroke, no field outline/shadow, and Escape-to-close verified. Independent action focus, mobile viewport and matched design reference comparison remain open.
- [x] Current 499×932 browser pass covered all 16 size × label × single/multi geometry combinations; all visual capsules remained 36px, target rows 48px (56px XLarge), document width 484px with no horizontal overflow. Exact desktop and 390×844 screenshots after this correction remain open.
- [x] Menu accessibility regression fixed and verified: active descendant points to a live option while open, is removed after Escape closes the menu, and is valid again after reopening.

## Number Input precision refinement — browser evidence (2026-11-01)

- [x] Playground controls expose min/max/step and the generated code updates with them; defaults restored to `0/99/1`.
- [x] With `min=0`, `max=0.3`, `step=0.1`, three increment clicks emitted exactly `0.1 → 0.2 → 0.3`; max disabled the increment. ArrowUp/ArrowDown followed `0.1` steps. With `0.05/0.35/0.1`, min/max button disabling also passed.
- [x] All four sizes were checked against each of six isolated shared states (24 combinations); control dimensions respected the 48px floor. Required/error/disabled/loading/success/read-only semantics remained consistent.
- [x] Keyboard traversal reached 32 playground focus targets and each exposed a 2px solid ring; console had no errors.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 contracts), Vue typecheck/build and `git diff --check` pass; JavaScript chunk is 683.73KB and Vite reports its >500KB advisory.
- [ ] Independent screen-reader review, OTP length-five per-cell keyboard and adapter-specific combined state sequences remain open. Length-four interaction and length-five paste evidence is recorded in the Input checklist.

## ادامهٔ بررسی زندهٔ Input — desktop (2026-11-01)

- [x] در playground واقعی، هر چهار اندازه و هر دو جایگاه Label تغییر داده شد؛ پوستهٔ تک‌خطی 50/52/56/60px در Outside و 62/64/68/72px در Inside، سلول OTP برابر 48/52/56/60px و Textarea سه‌ردیفه 103/108/120/128px بود. viewport برابر 1280px و عرض سند 1265px ماند.
- [x] OTP طول‌های 4/5/6 را با همان تعداد سلول نشان داد؛ paste شش‌رقمی، حرکت فوکوس با ArrowRight و حذف رقم با Backspace در ورودی واقعی مشاهده شد.
- [x] Number در step=1 با ArrowUp و ArrowDown از min=0 و max=99 عبور نکرد؛ حالت stacked هر دو action را در 48×48px نگه داشت.
- [x] وضعیت‌های Required/Error/Disabled/Loading/Success/Read-only روی کنترل‌های واقعی بررسی شدند؛ loading هشت `aria-busy`/spinner، 13 ورودی غیرفعال و سه action غیرفعال داشت. پیام خطا به `aria-describedby` وصل و `aria-invalid` فعال شد.
- [x] کنسول مرورگر error نداشت و انتخاب‌های playground به حالت پیش‌فرض برگشتند. ماتریس کامل ترکیب‌های حالت/اندازه/focus و بررسی صفحه‌خوان مستقل هنوز باز است.

## گزارش مقایسهٔ گالری States در Input — مرجع طراحی و Norato، موبایل (2026-11-01)

- [x] مرجع طراحی و Norato در viewport یکسان 390×844 باز شدند. مرجع طراحی برای Stateها کارت‌های توصیفی دو ستونه دارد؛ گالری Norato پیش از اصلاح، ۴۱ مورد را به‌صورت یک‌ستونه و بدون کنترل نمونه نمایش می‌داد.
- [x] Norato اکنون هر ۴۱ خانواده/حالت را با mini-control محدود و anatomy خانوادهٔ مربوط نشان می‌دهد؛ Error قرمز و دارای پیام، Success سبز با تیک، Disabled خاکستری، Loading دارای spinner، Active دارای حلقهٔ focus، Hover و Typing با مرز برند، Read-only با سطح ملایم و Filled با متن دارند.
- [x] چیدمان Norato در عرض ۳۹۰px دو ستون 167.5px در ظرف 343px دارد؛ همهٔ ۴۱ کارت در قاب‌اند، document width برابر 375px است. Previewهای حالت `aria-hidden` و inert هستند؛ تفاوت رفتار باید در playground زنده سنجیده شود.
- [x] Error در گالری به‌درستی `invalid` و Success به‌درستی `success` نگاشت می‌شوند؛ قبلاً Success به Default می‌افتاد. Search Typing نیز اکنون حالت مستقل دارد.
- [x] console مرورگر پس از اصلاح خالی از error بود؛ `pnpm check:tokens`، `pnpm check:catalog`، Vue TypeScript/production build و `git diff --check` پاس شدند. Vite برای chunk 683.73KB هشدار >500KB می‌دهد.
- [x] checkpoint اصلاح گالری `ee5f809` به `origin/master` push و هش remote تأیید شد؛ ماتریس ترکیبی تعاملی و screen-reader مستقل همچنان باز هستند.

## گزارش بازبینی Input و اصلاح اندازه‌ها — موبایل و دسکتاپ (2026-11-01)

- [x] صفحهٔ واقعی مرجع طراحی و نوراتو در مرورگر بررسی شد؛ viewport موبایل مرجع طراحی و نوراتو 390×844 بود. زبان/جهت Norato `fa`/`rtl`، document width برابر 375px و overflow افقی نداشت.
- [x] نمونهٔ بالای نوراتو در موبایل دیده شد: قاب محدودشدهٔ شیشه‌ای با marker و نقطهٔ سبز، فیلد ایمیل، آیکن و راهنما؛ ارتفاع کنترل 48px و چیدمان عمودی بدون کشیدگی بود.
- [x] playground موبایل: Text/Password/Phone/OTP/Textarea/Number/Amount/Search همگی در viewport قابل مشاهده‌اند؛ متن تلفن LTR، شماره‌گیر OTP افقی در Medium و کنترل‌ها در اندازهٔ عرض والد جا می‌گیرند.
- [x] چهار اندازهٔ OTP در مرورگر 390px: 48/52/56/60px؛ شش سلول در Small/Medium یک ردیف و در Large/XLarge دو ردیف می‌شوند، سند در تمام حالت‌ها 375px می‌ماند.
- [x] چهار اندازهٔ Text Input با Label Inside در مرورگر دسکتاپ واقعی: 62/64/68/72px؛ Label Outside: 50/52/56/60px. اندازه‌های Textarea سه‌ردیفه 103/108/120/128px هستند و با افزایش اندازه، قد می‌گیرند نه اینکه به ارتفاع گالری کش بیایند.
- [x] هر حالت مشترک در playground موبایل جداگانه روشن شد: Required هشت ورودی required؛ Error هشت alert و `aria-invalid` روی ۱۳ کنترل (شش سلول OTP و هفت ورودی تک‌عنصری)؛ Disabled/Loading شانزده کنترل/اکشن غیرفعال؛ Loading هشت `aria-busy` و هشت spinner؛ Success روی هر هشت adapter؛ Read-only روی ۱۳ مقدار و غیرفعال‌شدن actionهای Number. وضعیت مستقل playground هم‌زمان موجود بود.
- [x] Number در حالت Stacked دو action عمودی 48×48px دارد؛ در موبایل فلش‌های بومی تکراری پنهان شدند و ArrowUp از 98 به max=99 رسید. Search دکمهٔ پاک‌کردن اختصاصی و میانبر پیش‌فرض را حفظ می‌کند.
- [x] Amount مقدار `9007199254740993` را بدون خطای دقت به `۹٬۰۰۷٬۱۹۹٬۲۵۴٬۷۴۰٬۹۹۳` قالب‌بندی کرد؛ برای مقدار خارج از بازهٔ safe integer متن مبلغ به حروف نشان داده نمی‌شود.
- [x] حالت پایهٔ playground بازیابی شد: Medium، Label Outside، OTP6، Number Stepper، calling code +98 و تمام toggleهای مشترک خاموش. اندازهٔ صفحهٔ نمونه پس از بررسی: viewport 390×844.
- [x] مرجع طراحی مرجع هفت/هشت زیرنوع، چهار اندازه و label placement داخل/بیرون دارد؛ تفاوت حداقل hit target نوراتو عمداً بر مبنای قرارداد 48px نگه داشته شده. بررسی کامل همهٔ ترکیب‌ها و screen-reader مستقل باز است.
- [ ] مقایسهٔ نهایی مرجع طراحی/Norato برای تغییرات اخیر desktop با viewport یکسان و اجرای دوبارهٔ همهٔ ماتریس‌های states/focus هنوز لازم است؛ در نشست قبلی تغییر viewport برای tab دسکتاپ اعمال نشد.
- [x] `pnpm check:tokens`، `pnpm check:catalog`، Vue typecheck/build و `git diff --check` پس از اصلاح اجرا و پاس شدند؛ Vite هشدار chunk بزرگ‌تر از 500KB می‌دهد (678.91KB).
- [x] اصلاح دقت Amount و شواهدش در `93f2507` به GitHub push شد؛ full state/focus matrix و بررسی مستقل صفحه‌خوان همچنان باز هستند.

## ادامهٔ DoD Segmented Control — دسکتاپ، موبایل و صفحه‌کلید (2026-11-01)

- [x] در صفحهٔ واقعی `#component-segmented`، با منوی واقعی تعداد گزینه از ۳ به ۴ و اندازه از Medium به XLarge تغییر کرد؛ چهار گزینه و props انتخابی در کد Vue همگام شدند. Contrast هم از منوی واقعی فعال و در رندر تأیید شد.
- [x] اسکرین‌شات در viewport مرورگر 1180×755 چهار گزینه را افقی، بی‌wrap و بدون کشیدگی عمودی نشان داد؛ اندازهٔ XLarge رندر شد و سبک Contrast آبی Norato داشت.
- [x] در viewport موبایل 390×844 نیز playground با چهار گزینهٔ XLarge/Contrast بررسی شد؛ هر چهار گزینه در یک ردیف افقی ماندند، متن عمودی نشد و کد Vue با `size="xlarge"`، `style="contrast"` و چهار item همگام بود.
- [x] آزمون صفحه‌کلید در RTL: `ArrowLeft` فوکوس را از روزانه به هفتگی برد بی‌آنکه مقدار انتخابی عوض شود؛ `Space` هفتگی را انتخاب کرد؛ `Right` و `Space` مقدار را به روزانه برگرداندند. مقدار controlled و متن انتخاب playground به‌روز شدند.
- [x] playground به Glass/Medium/3 و روزانهٔ منتخب برگردانده شد؛ viewport موقت reset شد.
- [ ] اندازه‌گیری دقیق bounding box، اجرای مستقل ۶۴ ترکیب حالت آیتم و صفحه‌خوان مستقل باقی است؛ این بررسی جزئی DoD خانواده را نمی‌بندد.
- [x] پس از ثبت این شواهد `pnpm check:tokens`، `pnpm check:catalog` (۴۹ مسیر/قرارداد)، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` اجرا و موفق شدند؛ build هشدار chunk بزرگ‌تر از 500KB دارد. batch matrix قدیمی timeout شده و PASS محسوب نمی‌شود.

## گزارش درخواست — راهنمای قابل‌استفاده برای عامل‌های AI (2026-11-01)

- [x] صفحهٔ واقعی `#team` در اپ محلی بازبینی شد؛ بخش معرفی Skill و مسیر `.agents/skills/norato-design-system/SKILL.md` در render موجود است.
- [x] صفحه RTL است و در viewport مرورگر 1195px، عرض سند 1180px است؛ overflow افقی ندارد.
- [x] Skillهای Codex و عمومی Agent Skills به‌صورت هش یکسان تأیید شدند؛ منابع کاتالوگ، قرارداد، export و نمونه‌ها در دستورالعمل مشخص‌اند.
- [x] `pnpm check:tokens`، `pnpm check:catalog` (49 قرارداد/مسیر)، Vue typecheck، production build و `git diff --check` موفق شدند.
- [x] محدودیت اعتبارسنجی: این تغییر مستندات قابلیت کشف خودکار در Codex و render راهنمای اپ را بررسی می‌کند؛ سازگاری اجرایی در تمام پلتفرم‌های AI مستقل آزمایش نشده است.
- [x] تغییر commit و به GitHub push شد؛ هنگام ثبت اولیهٔ گزارش، `origin/master` برابر `1b6c7a5b677213ee6ededf9eb51844bab54cc169` تأیید شد.
- هشدار build: bundle اصلی JavaScript برابر 637.21KB است و از آستانهٔ 500KB عبور می‌کند؛ build موفق ماند.

## ادامهٔ DoD Select — ماتریس ترکیبی (2026-11-01)

- [x] در مرورگر محلی، ۹۶ ترکیب playground اجرا شدند: single/chips/summary × برچسب داخل/بیرون × چهار اندازه × required+error، error+disabled، error+read-only و error+loading.
- [x] در هر مورد ارتفاع trigger حداقل ۴۸px، جهت `rtl`، عرض سند ۱۱۸۰px در viewport ۱۱۹۵px و semantics مورد انتظار بررسی شد؛ خطا alert و `aria-invalid` دارد، required با `aria-required` همراه است، disabled واقعی disable می‌شود، read-only `aria-readonly` دارد و loading علاوه بر disable، `aria-busy` و status زنده دارد.
- [x] هیچ مورد geometry/ARIA/overflow ناموفق نبود؛ playground بعد از آزمون به single، medium، label بیرونی، بدون خطا و بدون حالت بارگذاری برگشت.
- [ ] این اجرا مقایسهٔ تصویری screenshot به screenshot از تمام خانه‌ها یا صفحه‌خوان مستقل نیست؛ مرور pixel-level حالت‌های hover/focus/selected هنوز برای بستن DoD باز است.

## Select — هم‌ترازی گالری States با مرجع طراحی (2026-11-01)

- [x] DOM مرجع مرجع طراحی در `#select` نشان داد States شامل ۹ کارت عنوان+توضیح است؛ کنترل‌های نمونه در Preview/Variants هستند. گالری Norato از pill عمومی به کارت متنی Select-only تغییر کرد.
- [x] هر ۱۸ حالت Select/Multi Select/Select Option باقی ماندند؛ عنوان، نام خانواده، توضیح فارسی و accent توکنی در render تأیید شدند. یادداشت اضافه در قرارداد با parser تداخل داشت و حذف شد؛ تعداد نهایی دقیقاً ۱۸ است.
- [x] Desktop viewport 1920×863: Norato گالری 584px با چهار ستون auto-fit و کارت‌های 139.98×87.56px؛ مرجع طراحی گالری 636px با چهار ستون و کارت‌های 151.5×88.59px. عرض سند Norato 1905px در برابر viewport 1920px است.
- [x] Mobile viewport 390×844: Norato دو ستون، کارت 167.5×68.38px، document 375px؛ مرجع طراحی دو ستون و document 375px. RTL صریح است و سرریز افقی وجود ندارد.
- [x] رگرسیون Button: ۱۱ state card همان renderer عمومی را حفظ کردند؛ static state gallery همچنان inert و جدا از adapter است.
- [ ] صفحه‌خوان مستقل و مقایسهٔ کامل screenshot همهٔ stateهای اجرایی Select همچنان در DoD خانواده باز است.
- [x] گیت‌های نهایی: `pnpm check:tokens`، `pnpm check:catalog` (49 قرارداد/مسیر)، Vue typecheck، production build و `git diff --check` موفق شدند. Build هشدار bundle 638.78KB بالاتر از 500KB داد.
- [x] Commit `bb99f4d948664ed1c2b9ec9f3700d400bd4c9af3` به GitHub push شد و `origin/master` با آن برابر است.

## گزارش این درخواست — Input preview مستقل (2026-11-01)

- [x] قرارداد subfeature فقط قاب و نمونهٔ ثابت است؛ پرسش API هشت زیرنوع همچنان باز است و adapter اجرایی/گالری تغییر نکرد.
- [x] selectorهای فعلی `.sample-input-specimen` و `.component-sample:has(.sample-form-controls)` audit شدند؛ قاب و field با قانون scoped موجود و توکن semantic اصلاح شدند.
- [x] مرجع طراحی و Norato در viewport یکسان desktop 1920×863 مقایسه شدند: قاب 636×300 در برابر 584×288px (محدود به ستون محتوا)، field group مرجع طراحی 324×94.4px و Norato 324×97.2px؛ control نوراتو 324×48px.
- [x] مرجع طراحی و Norato در viewport یکسان mobile 390×844 مقایسه شدند: قاب 327×300 در برابر 320×288px؛ گروه مرجع طراحی 320.8×94.4px؛ کنترل Norato 310×48px. Norato سند 375px عرض دارد، بدون overflow؛ RTL حفظ شده است.
- [x] رندر واقعی: نشانگر Default، نقطه‌ها و wash قابل مشاهده‌اند؛ preview دارای `aria-hidden="true"` و `inert` است؛ صفحه Preview، Vue playground و ۹ بخش مستقل Button را نشان می‌دهد.
- [x] گیت‌ها: `pnpm check:tokens`، `pnpm check:catalog`، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` موفق شدند. build هشدار bundle بزرگ‌تر از 500KB دارد.
- [ ] DoD کل Input باز است: دامنهٔ API، گالری‌های خانواده و ماتریس کامل رفتار/دسترس‌پذیری هنوز تعیین یا اجرا نشده‌اند.

## پیگیری Select — منوی باز در موبایل (2026-11-01)

- [x] viewport مرورگر روی 390×844 اعمال و از `innerWidth/innerHeight` تأیید شد.
- [x] صفحهٔ واقعی Select در حالت باز اندازه‌گیری شد: menu برابر 343×384.5px در x=16..359 و y=10..394.5؛ عرض سند 390px؛ شش ردیف گزینه هرکدام 48px.
- [x] screenshot واقعی نشان داد منو در viewport محدود می‌ماند؛ جستجو و گروه‌ها RTL هستند و گزینهٔ غیرفعال هم در فهرست دیده می‌شود.
- [x] Escape منو را بست و فوکوس را به `select-playground-city-trigger` بازگرداند؛ مقدار تهران بدون تغییر ماند.
- [ ] ماتریس ترکیبی تمام variant/stateهای Select و مستقل از صفحه‌خوان در این نوبت اجرا نشد؛ DoD خانواده باز است.

## گزارش این درخواست — Select، اصلاح قاب و بررسی میان‌مرحله‌ای (2026-11-01)

- [x] نقص فوکوس گزینه از روی رندر واقعی پیدا شد: `outline:none` بدون جایگزین بود. CSS با توکن‌های focus نوراتو اصلاح شد؛ مرورگر روی گزینهٔ فعال `:focus-visible=true`، outline آبی ۲px، offset چهارپیکسلی، هاله زرد ۲px و ارتفاع ردیف ۴۸px نشان داد.
- [x] ArrowDown سپس Enter گزینهٔ متفاوت اصفهان را انتخاب کرد و مقدار زندهٔ playground به اصفهان به‌روزرسانی شد.
- [ ] درخواست viewport موبایل ۳۹۰×۸۴۴ در مرورگر فعلی اعمال نشد (ابعاد گزارش‌شده ۱۱۹۵×۷۶۵ بود)؛ این تلاش به‌عنوان آزمون موبایل حساب نشده. DoD باز می‌ماند تا منوی باز با viewport دقیق و ماتریس کامل حالت‌های بصری بررسی شود.

- [x] معیار پذیرش: نمونهٔ ثابت Select مانند مرجع طراحی یک فیلد مرکزی در قاب نقطه‌دار شیشه‌ای و نشانگر Default داشته باشد؛ قاب با پالت و توکن Norato، صفحه هم‌ساختار Button و hit target حداقل ۴۸px باقی بماند.
- [x] توالی Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze ثبت شد؛ دامنهٔ این اصلاح فقط نمونهٔ ثابت و تأیید رفتار موجود بود.
- [x] قبل از تغییر، selector قدیمی `.component-sample.sample-select-preview:not(.compact)` و markup نمونه audit شد؛ همان قانون اصلاح شد و marker scoped `sample-select-state` اضافه شد.
- [x] رندر واقعی روی سرور تازهٔ Vite در viewport همسان desktop برابر 1920×863: قاب مرجع طراحی برابر 636×300px و Norato برابر 584×288px (محدود به ستون محتوا) است؛ فیلدها به‌ترتیب 302.4×68.2 و 300×48px هستند.
- [x] در viewport همسان mobile برابر 390×844، قاب مرجع طراحی برابر 327×300px و Norato برابر 320×288px است؛ فیلد Norato برابر 300×48px، وسط‌چین و RTL است. عرض سند 375px و بدون overflow است.
- [x] screenshotهای هم‌viewport قاب نقطه‌ای، هالهٔ زرد/آبی و marker مشابه را نشان می‌دهند؛ Norato رنگ‌مایهٔ خود را حفظ می‌کند.
- [x] در مرورگر تازه: منوی جستجو و گروه‌ها باز شدند، ArrowDown گزینهٔ فعال را جابه‌جا کرد، انتخاب تکی وضعیت را تغییر داد؛ در چندانتخابی مقدار تا زمان تأیید ثابت ماند، انصراف مقدار قبلی را حفظ کرد و تأیید گزینه را ثبت کرد. حالت loading کنترل را disabled کرد و status بارگذاری را نمایش داد.
- [x] RTL و ارتفاع trigger برابر ۴۸px، ۴ اندازه (۴۸/۴۸/۴۸/۵۶px)، حالت‌های error/disabled/read-only/loading با semantics وابسته، ساختار Preview + Vue + ۹ بخش قرارداد، و گزینهٔ disabled در درخت دسترس‌پذیری بررسی شدند. ماتریس کامل ترکیب حالت‌های بصری هنوز باز است.
- [x] `pnpm check:tokens`، `pnpm check:catalog` (۴۹ مسیر/قرارداد)، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` پاس شدند. build هشدار chunk برابر 634.56KB بالاتر از 500KB داد.
- [ ] DoD خانواده Select باز است تا ماتریس کامل visual state/variantها (از جمله ترکیب size × label placement × single/multi) مرور شود؛ مقایسهٔ responsive قاب و رفتارهای محوری تا اینجا پاس است.

## گزارش این درخواست — Input، ممیزی پیش از اصلاح (2026-11-01)

- [x] صفحهٔ مرجع طراحی و صفحهٔ Norato در مرورگر واقعی بررسی شدند؛ مرجع طراحی یک فیلد ایمیل منفرد در frame با ابعاد desktop حدود 636×300px و بدنهٔ کنترل 324×41px دارد.
- [x] Norato در viewport موبایل واقعی 390×844 بررسی شد: عرض document/body برابر 375px، frame برابر 343×123px، input برابر 317×48px، helper و label متصل و جهت خود input برابر LTR هستند؛ overflow افقی وجود ندارد.
- [x] تفاوت بصری ثبت شد: frame فعلی Norato در موبایل 123px ارتفاع دارد و marker/Icon/glass treatment نمونهٔ مرجع طراحی را نشان نمی‌دهد. اندازهٔ 48px هدف تعاملی Norato عمدی است و نباید کاهش یابد.
- [ ] مقایسهٔ دقیق هم‌viewport، تغییر visual specimen، ماتریس تعاملی و گیت‌های فنی هنوز انجام نشده‌اند. پرسش دامنهٔ اجرایی هشت زیرگونه در `input-clarify.md` در انتظار پاسخ است؛ پیاده‌سازی وابسته آغاز نشده است.

## گزارش این درخواست — Split Button تکمیل و بازبینی موبایل نهایی (2026-11-01)

- [x] Split Button در viewport موبایل 390×844 واقعی مرورگر باز شد؛ `innerWidth=390`، عرض سند و بدنه 375px، قاب 320×288px و کنترل نمونه 48px ارتفاع دارد. هیچ overflow افقی مشاهده نشد.
- [x] مرجع طراحی در همان viewport بازبینی شد؛ قاب حدود 314×288px است. نسبت و تراکم نمونهٔ Norato هم‌تراز است و palette اختصاصی Norato حفظ می‌شود. Screenshot مرورگر موبایل قاب‌ها و کنترل مرکزی را نشان داد.
- [x] دکمهٔ متصل RTL، موقعیت منوی سمت چپ، اندازه‌های چهارگانه، گالری‌های variant/state/size و playground اجرایی قبلاً در مرورگر بررسی شده‌اند؛ keyboard و focus/AX evidence در DoD ثبت است.
- [x] `docs/request-validation-checklist.md`، contract، task/checklist، ledger و error log بعد از بررسی واقعی به‌روز شدند؛ Split Button DoD بسته شد.
- [ ] اجرای صفحه‌خوان مستقل انجام نشد؛ درخت دسترس‌پذیری و صفحه‌کلید مرورگر بررسی شده است.

## گزارش این درخواست — Range (2026-11-01)

- [x] مرجع طراحی و Norato در viewport دسکتاپ 1280×720 و موبایل 390×844 بازبینی شدند؛ یک field برچسب‌دار، value روی thumb، marker، track/fill و min/max زیر آن حفظ شد. Norato palette معنایی خودش را دارد؛ قاب به‌دلیل ستون detail در desktop برابر 584×288px و در mobile برابر 320×288px است.
- [x] در هر دو viewport ماتریس ۱۶حالتهٔ Single/Range × Small/Medium × Default/Disabled اجرا شد؛ slider ارتفاع 48px و هر thumb اندازهٔ 48×48px داشت؛ document mobile برابر 375px و بدون overflow بود.
- [x] RTL و جهت fill از راست به چپ سنجیده شد. ArrowLeft/Right، Home/End، pointer drag، ترتیب دو thumb، focus ring دوپیکسلی با offset چهارپیکسلی، disabled واقعی، `aria-invalid` و توضیح error متصل بررسی شدند.
- [x] AX tree برای هر thumb role/name/min/max/current value و برای خطا description و alert نشان داد. صفحه Preview + playground اجرایی + هر ۹ بخش و دکمه‌های copy دارد.
- [x] legacy `.sample-range input` حذف شد و مقدار تکراری از label row برداشته شد؛ اندازهٔ thumb از target جداست تا کنترل کش نیاید.
- [x] پس از آخرین تغییرات `pnpm check:tokens`، `pnpm check:catalog`، Vue TypeScript، `pnpm --dir apps/vue build` و `git diff --check` پاس شدند؛ build هشدار chunk بزرگ‌تر از 500KB با اندازهٔ 575.88KB دارد.

## گزارش این درخواست — Segmented Control و ارسال تغییرات موجود (2026-11-01)

- [x] مرجع طراحی و Norato در viewport دسکتاپ 1280×900 مقایسه شدند؛ preview Norato قاب 632×288px و مرجع طراحی حدود 630px عرض دارد. در هر دو، track افقی، سه گزینه، Default marker و گزینهٔ انتخاب‌شده در سمت راست دیده می‌شوند.
- [x] مقایسهٔ موبایل در 390×844: Norato frame=320×288px، target گزینه‌ها 48px، عرض سند375px و بدون overflow؛ قاب مرجع مرجع طراحی هم در همین viewport بازبینی شد.
- [x] پس از fresh Vite startup مسیر کامپوننت Preview، اجرای adapter و هر ۹ بخش مستقل را نشان داد. سرور قبلی به علت cache قدیمی `import.meta.glob` بخش‌های سند را بارگذاری نمی‌کرد؛ restart-only dev server این مشکل نمایش را برطرف کرد.
- [x] ماتریس ۲۴ گروه (۲ سبک × ۴ اندازه × ۳ تعداد گزینه) در مرورگر: RTL و اولین گزینه در سمت راست، بدون متن بریده، target اندازه‌های Small/Medium/Large=48px و XLarge=56px.
- [x] رفتار مرورگر: pointer hover، حرکت فوکوس با ArrowLeft/Right در RTL، انتخاب با Space/Enter، Home/End، جلوگیری از خالی‌شدن انتخاب، `aria-pressed`، گروه نام‌دار، فوکوس ۲px، disabled تکی و گروهی بررسی شدند.
- [x] `pnpm check:tokens`، `pnpm check:catalog`، Vue TypeScript، build و `git diff --check` پس از تغییرها پاس شدند. هشدار chunk بالاتر از 500KB در build گزارش شد.
- [ ] DoD کامل Segmented: صفحه‌خوان مستقل و کل حاصل‌ضرب ۶۴ حالت آیتم اجرا نشده؛ بلوغ Adapted باقی می‌ماند.

## گزارش این درخواست — Switch و وضعیت Radio (2026-11-01)

- [x] مرجع مرجع طراحی Switch مرور شد: یک Switch Field با label/description و marker، track خاموش glass، حالت روشن مشکی در مرجع طراحی، سه اندازه، ۳۰ variant کنترل و ۶ variant فیلد؛ در نسخهٔ قبلی Norato برای حالت روشن از semantic blue استفاده می‌شد؛ اصلاح 2026-11-02 accent فعال را به زرد تغییر داد.
- [x] مقایسهٔ بصری desktop در مرورگر با مرجع طراحی: هر دو یک Switch Field با marker و متن فارسی در قاب dotted-glass نمایش می‌دهند؛ قاب desktop Norato به عرض ستون محتوا محدود است. در اندازه‌گیری DOM فعلی Norato، frame=320×288px، control=48×48px و track متوسط=40×24px است؛ قاب نمونه و خود track کشیدگی عمودی ندارند.
- [x] مقایسهٔ mobile در viewport 390×844 (اندازه‌گیری ثبت‌شده در همین اجرای مرورگر): frame=320×288px، document width=375px و بدون overflow؛ کنترل/متن RTL و target=48px باقی ماندند.
- [x] سه اندازه × خاموش/روشن در DOM سنجیده شد: trackها 32×20، 40×24 و 48×28px؛ target هر شش حالت 48×48px. در RTL روشن‌شدن knob را به چپ منتقل کرد.
- [x] Space و Enter در اجرای مستقیم مرورگر مقدار `aria-checked` را به‌ترتیب false→true و true→false تغییر دادند؛ AX tree نقش switch و نام اعلان‌ها را نشان داد. `:focus-visible` با outline آبی ۲px و offset چهارپیکسلی مشاهده شد. `aria-invalid=true`، پیام error و اتصال description/error با `aria-describedby` بررسی شد؛ disabled واقعی نیز `disabled=true` و `:enabled=false` بود.
- [x] صفحهٔ Switch مطابق ساختار component detail، ۹ بخش سند، API snippet/copy، specimen غیرفعال و playground اجرایی دارد.
- [x] پس از آخرین تغییرات `pnpm check:tokens`، `pnpm check:catalog`، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` موفق شدند؛ build هشدار اندازهٔ chunk بالاتر از 500KB دارد.
- [ ] DoD نهایی Switch باز است: همهٔ ۳۰ state/size/value، hover pointer، صفحه‌خوان مستقل و screenshot matrix مرور نشده‌اند.
- [ ] Radio هم بسته نیست: ماتریس hover pointer و صفحه‌خوان مستقل همچنان باز است.

## گزارش این درخواست — Radio Button و ادامه با مدل جدید (2026-11-01)

- [x] منبع مرجع طراحی در همان مرورگر برای ترکیب preview، ۳ گزینه، marker، ۴ Anatomy، ۲۰ variant، RTL و keyboard بررسی شد.
- [x] نمونهٔ نوراتو یک گروه سه‌ردیفی وسط قاب با palette و tokenهای خود Norato است؛ در viewport موبایل 390×844 قاب 320×288px، عرض سند 375px، سه ردیف 48px و کنترل راست‌چین است.
- [x] مقایسهٔ desktop در viewport 1920: قاب 584×288px (محدود به عرض محتوای صفحه)؛ سه ردیف 48px و بدون کشیدگی کنترل. این عرض با frame مرجع طراحی که در محتوای خودش حدود 630px است کاملاً برابر نیست.
- [x] ArrowDown بین گزینه‌ها و selection را جابه‌جا کرد؛ AX tree گروه نام‌دار و سه radio با selected value درست گزارش کرد؛ focus ring دوپیکسلی بررسی شد.
- [x] required روی یک ورودی، aria-invalid/error association، disabled واقعی، RTL و هدف کلیک 48px را در browser DOM سنجیدم. اندازه‌های 16/20 در کنترل playground موجود است.
- [x] `pnpm check:tokens`، `pnpm check:catalog` و `pnpm --dir apps/vue typecheck` موفق شدند.
- [x] `pnpm --dir apps/vue build` موفق شد؛ هشدار پیشین bundle بزرگ‌تر از 500KB همچنان هست. `git diff --check` موفق شد.
- [x] Radio required بدون انتخاب بازآزمایی شد: پیام الزام انتخاب و aria-invalid روی گروه/ورودی‌ها ظاهر شدند و پیام با aria-describedby به ورودی required متصل شد.
- [x] ماتریس کنترل اصلی مرورگر برای هر دو اندازهٔ ۱۶ و ۲۰px و مقدار checked/unchecked در حالت‌های Default/Error/Disabled مرور شد؛ اندازهٔ واقعی، checked، disabled و invalid در DOM برای هر ۱۲ ترکیب ثبت شد. ردیف‌ها همگی ۴۸px باقی ماندند.
- [x] در screenshot هم‌اندازهٔ ۱۲۸۰×۹۰۰، قاب Norato ۵۸۴×۲۸۸px و مرجع طراحی Radio نمونهٔ سه‌گزینه‌ای روی قاب شیشه‌ای بود؛ class تعریف‌نشدهٔ `sr-only` باعث نمایش ناخواستهٔ legend می‌شد. selector دسترس‌پذیرِ legend اصلاح شد؛ پس از اصلاح legend به ۱×۱px clip شد و از دید بصری پنهان ماند، ولی در AX باقی است.
- [x] پس از ArrowDown، عنصر فعال همان radio انتخاب‌شده بود؛ `:focus-visible` true، outline دوپیکسلی با offset چهارپیکسلی و حلقهٔ دوپیکسلی semantic ثبت شد.
- [ ] DoD نهایی Radio باز است: ۲۰ سلول ماتریس دیداری در desktop اکنون حاضر و مرور شده‌اند؛ مرور matrix موبایل، مقایسهٔ هم‌اندازهٔ همان قاب با مرجع طراحی و صفحه‌خوان مستقل باقی است.

## ادامهٔ DoD Radio — ماتریس دیداری ۲۰حالته (2026-11-01)

- [x] بخش Variants از placeholder عمومی به پنج کارت state اختصاصی Radio تغییر کرد؛ هر کارت چهار ترکیب checked/unchecked و اندازهٔ ۱۶/۲۰px دارد (۲۰ سلول در مجموع). حلقه، نقطهٔ انتخاب و state accentها با شکل دایره‌ای و توکن‌های semantic Norato نمایش داده می‌شوند؛ بخش inert است.
- [x] رندر واقعی desktop در `http://127.0.0.1:5175/#component-radio` مرور شد. Screenshot همهٔ پنج گروه و ۲۰ سلول را نشان داد؛ کنترل‌ها کشیدگی ندارند. مرجع زندهٔ مرجع طراحی `#radio` نیز بررسی شد: بخش Variants از کارت‌های نمونه + محورهای Size/Checked/State استفاده می‌کند؛ Norato اکنون همان محورها را کامل و یک‌جا نشان می‌دهد و رنگ خود را حفظ می‌کند.
- [x] رگرسیون playground: کلیک سه‌ماهه و ArrowDown تا سالانه مقدار controlled/status/snippet را sync کردند؛ ArrowUp مقدار ماهانه را بازگرداند. Playground همچنان واقعی و جدا از ماتریس ایستا است.
- [ ] viewport این مرورگرها برابر نبود (Norato: 1180×765، مرجع طراحی: 1900×900)، بنابراین مقایسهٔ هم‌اندازهٔ همین matrix و مرور واقعی mobile در این مرحله ثبت نمی‌شود. صفحه‌خوان مستقل هم اجرا نشده است؛ Radio DoD باز می‌ماند.
- [x] گیت‌ها پس از اصلاح tokenها: `pnpm check:tokens`، `pnpm check:catalog` (۴۹ route/contract)، `pnpm --dir apps/vue typecheck` و `pnpm --dir apps/vue build` موفق شدند. Bundle جاوااسکریپت 643.57KB است و هشدار بالای 500KB پابرجاست.

## ادامهٔ DoD Radio — آزمون تازهٔ صفحه‌کلید و hover (2026-11-01)

- [x] در صفحهٔ واقعی `#component-radio`، `ArrowDown` از ماهانه به سه‌ماهه رفت؛ مقدار controlled و کد Vue به `quarterly` تغییر کردند. `ArrowUp` انتخاب ماهانه و کد اولیه را برگرداند.
- [x] نشانگر روی گزینهٔ انتخاب‌نشدهٔ سه‌ماهه قرار گرفت؛ برجستگی hover ردیف دیده شد و مقدار انتخابی همچنان ماهانه بود.
- [x] در AX پس از آزمون، ماهانه selected باقی ماند؛ کد playground به مقدار اولیه برگشته بود.
- [x] `pnpm check:tokens`، `pnpm check:catalog`، Vue typecheck، production build و `git diff --check` پس از ثبت آزمون موفق شدند؛ build هشدار chunk بزرگ‌تر از 500KB دارد.
- [ ] ماتریس کامل ۲۰ حالت focus/hover و اجرای صفحه‌خوان مستقل همچنان برای بستن DoD لازم‌اند.

## اصلاح همگامی playground رادیو (2026-11-01)

- [x] بازتولید در `#component-radio`: بعد از «بدون انتخاب»، هر سه radio خالی بودند اما status/snippet هنوز ماهانه را نشان می‌دادند؛ انتخاب از حالت خالی نیز نمی‌توانست خالی‌بودن را کنار بگذارد.
- [x] پس از اصلاح، رندر خالی، متن status و snippet همگی `undefined` را نشان دادند. انتخاب سه‌ماهه خالی‌بودن را خاموش کرد و radio، status و snippet روی `quarterly` همگام شدند.
- [x] Required + empty پیام «انتخاب یک دوره الزامی است.» و prop `required` را نشان داد؛ Error با سه‌ماههٔ منتخب، پیام خطای درست را داد و وضعیت «بدون انتخاب» گزارش نشد.
- [x] Regression صفحه‌کلید: پس از خالی‌کردن گروه، با Shift+Tab به رادیو بدون انتخاب رسیدم؛ Space سالانه را انتخاب کرد، حالت خالی را بست و value/status/snippet را به `yearly` همگام کرد. ArrowDown/Up در گروه عادی نیز انتخاب controlled را تغییر داد و برگرداند.
- [x] اندازهٔ ۱۶px و disabled پس از اصلاح دوباره رندر شدند؛ snippet هر دو prop را منعکس کرد. اندازهٔ ۲۰px، ماهانهٔ منتخب، و حالت‌های required/error/disabled/empty به وضعیت عادی برگشتند.
- [x] Playground به حالت اولیهٔ ماهانه، بدون required/error/disabled/empty و اندازهٔ ۲۰ برگشت.
- [ ] این اصلاح ماتریس کامل ۲۰ حالت بصری و صفحه‌خوان مستقل را نمی‌بندد؛ آن بررسی‌ها همچنان بازند.
- [x] پس از اصلاح و ثبت مستندات `pnpm check:tokens`، `pnpm check:catalog`، Vue typecheck، production build و `git diff --check` موفق شدند؛ build هشدار chunk 642.00KB بالاتر از 500KB دارد.

## گزارش این درخواست — استانداردسازی صفحه‌های کامپوننت، batch 1 (2026-10-28)

- [x] چهار مسیر مستقل Input، Select، Checkbox و Radio Button با قراردادهای ۹‌بخشی خودشان بررسی شدند.
- [x] چیدمان دسکتاپ صفحه‌ها به یک ستون فشرده و ویرایشی تغییر کرد؛ Button و CSS اختصاصی‌اش دست‌نخورده ماند.
- [x] هر ۹ بخش هر صفحه کنترل کپی مستقل با بازخورد و هدف حداقل ۴۸px دارد.
- [x] نمونه‌های واقعی فقط از adapterهای موجود ساخته شدند؛ نمایش‌ها inert و کنترل‌های preview غیرفعال‌اند.
- [x] Loading/Error/Disabled و Selected فقط برای adapterهایی نمایش داده شدند که props/events متناظر دارند؛ Multi Select، Success و Indeterminate/اندازهٔ ChoiceGroup به‌عنوان مرجع بصری برچسب خوردند.
- [x] راست‌چین‌بودن و نبود overflow افقی ناخواسته در رندر دسکتاپ Input بررسی شد؛ کنتراست/رنگ از توکن معنایی استفاده می‌کند.
- [x] Vue TypeScript، build و `pnpm check:tokens` موفق شدند.
- [x] مسیرهای Select، Checkbox و Radio Button هم جداگانه در رندر واقعی مرورگر بازبینی شدند.
- [x] Button نیز پس از تغییرها جداگانه بازبینی شد؛ سه نمونهٔ تأییدشده و کد تیره بدون تغییر باقی‌اند.
- [ ] تعامل کامل کپی صفحه‌کلیدی در این مرورگر آزموده نشد.
- [ ] breakpoint موبایل به‌صورت رندر واقعی بررسی نشده است.

## گزارش این درخواست — هم‌ترازی با فایل دیزاین سیستم فعلی Figma (2026-10-28)

- [x] فریم overview و هر ۱۴ فصل فایل Figma با metadata، design context و screenshot بررسی شدند.
- [x] نمای کلی محلی با شناسه/وضعیت سند، خط زرد، عنوان شماره‌دار، آمار، فهرست فصل‌ها و rail توضیح شواهد بازطراحی شد.
- [x] Foundation شامل نمونهٔ بصری رنگ، تایپوگرافی، فاصله، اندازه، شعاع، مرز، سایه، خانواده‌های کامپوننت، وضعیت‌ها، الگوهای RTL و naming شد.
- [x] Blue به `#134F89` اصلاح شد؛ Yellow `#FDC101` و جفت‌های Info/Tag طبق مقادیر مشاهده‌شده از هم تفکیک شدند.
- [x] مقدارهای فاصله/شعاع/سایه با tokenهای نام‌گذاری‌شدهٔ منبع اضافه و مرجع کامل همراه اختلاف/عدم‌قطعیت در `docs/figma-source-ledger.md` ثبت شد.
- [x] سیاست پروژه برای تایپوگرافی (Estedad/Vazirmatn) بر فونت‌های legacy مرجع اولویت دارد و دلیل در اسناد ثبت شد.
- [x] رندر دسکتاپ Overview، Foundation و Button در مرورگر محلی بررسی شدند؛ ستون‌ها از راست به چپ، component routes مستقل و نمونهٔ تأییدشدهٔ Button حفظ شد.
- [x] در viewport مرورگر متصل، عرض سند ۱۲۶۵px و viewport برابر ۱۲۸۰px اندازه‌گیری شد؛ overflow افقی وجود نداشت.
- [x] `pnpm check:tokens`، `pnpm --dir apps/vue typecheck` و `pnpm --dir apps/vue build` موفق شدند.
- [ ] viewport موبایل واقعی برای این درخواست قابل تنظیم نبود؛ responsive CSS در 600/840/1024px تعریف شده اما این نوبت با رندر موبایل بررسی نشده است.
- [ ] رفتار صفحه‌کلید برای scroll-to-section فصل‌ها در این نوبت با Tab/Enter جداگانه آزمایش نشد.
- وضعیت: PASS برای رندر دسکتاپ و اعتبارسنجی فنی؛ محدودیت‌های viewport باریک و activation با صفحه‌کلید باز هستند.

## گزارش این درخواست — کاربرد تیم Vue و اصلاح UI داشبورد

- قرارداد پذیرش: داشبورد برای اسکن و دسترسی روشن باشد؛ ۴۹ کارت از specimen اختصاصی هر خانواده استفاده کند؛ یک renderer canonical و guide کاربرد تیم Vue وجود داشته باشد؛ محدودیت API/انتشار شفاف بماند.
- [x] renderer قدیمی با متن generic حذف شد؛ جزئیات از سند مستقل همان کامپوننت می‌آید.
- [x] برای هر ۴۹ خانواده نمونهٔ مختص خودش در کارت inventory متصل شد؛ نمونه‌ها inert هستند.
- [x] rail تکراری inventory حذف و راهنمای status کنار فیلتر اضافه شد.
- [x] مسیر راهنمای تیم Vue، barrel export و مثال‌های API فعلی افزوده شد؛ package منتشرشده ادعا نشده است.
- [x] کمبودهای موجود API صریح‌اند: controlled update/v-model برای برخی adapterها و پنل انتخاب Date Picker کامل نیست.
- [x] مرورگر desktop: راهنما، inventory با نمونه‌های متفاوت، و صفحهٔ Button/Usage بررسی شدند؛ مسیر RTL از سمت راست و لینک sectionها حاضرند.
- [x] نمونه‌های inventory در accessibility tree به‌عنوان کنترل قابل‌تعامل ظاهر نمی‌شوند؛ کنترل‌های واقعی ناوبری/فیلتر باقی مانده‌اند.
- [x] صفحه‌کلید: با Tab، دکمه‌های ناوبری «نمای کلی» و «راهنمای تیم Vue» به ترتیب focus دریافت کردند.
- [x] همهٔ tokenهای مصرفی dashboard/specimen تعریف شده‌اند؛ `pnpm check:tokens`، Vue typecheck و build موفق شدند.
- [ ] viewport موبایل برای این follow-up در مرورگر فعلی قابل تنظیم نبود؛ responsive CSS در این نوبت به‌صورت دیداری موبایل تأیید نشده است.
- [ ] تست کاربری با اعضای تیم انجام نشده است.
- وضعیت: PASS برای تغییرات سورس و desktop evidence؛ موبایل و بازخورد تیم هنوز تأیید نشده‌اند.

## گزارش این درخواست — سیستم طراحی Norato با رنگ‌های اختصاصی

- قرارداد پذیرش: inventory کامل کامپوننت‌ها در Norato ثبت شود؛ زرد و آبی Norato تنها accent برند باشند؛ preview اصلی با Vue 3، RTL و semantic token ارائه شود.
- [x] صفحهٔ overview، foundation، component showcase و inventory در preview لوکال قابل مشاهده‌اند.
- [x] inventory شامل ۴۹ کامپوننت مستقل با وضعیت Implemented / Adapted / Proposed است.
- [x] معماری نمایش شامل navigation، صفحات مستقل کامپوننت و On this page است.
- [x] هر ۴۹ کارت inventory یک specimen قابل‌مشاهده دارد؛ نمونه‌های Proposed به‌عنوان preview نمایشی از implementation جدا هستند.
- [x] برای هر ۴۹ خانواده قرارداد مستقل با بخش‌های Overview، Anatomy، Variants، Sizes، States، Parts، Usage، Accessibility و Tokens ثبت شده است.
- [x] لیست کامل ۴۹ کامپوننت در پنل `On this page` نمایش داده می‌شود و هر مورد به inventory فیلترشده متصل است.
- [x] برای هر ۴۹ کامپوننت فایل Markdown جدا ساخته شده؛ مسیر hash-addressable و نمایش سند اختصاصی در مرورگر روی Button بررسی شد.
- [ ] مسیر و محتوای اختصاصی هر ۴۹ صفحه به‌صورت جداگانه در مرورگر بررسی نشده است.
- [ ] ۴۹ صفحه با anatomy، variants، states، usage و RTL/accessibility اختصاصی بررسی شده‌اند.
- [x] هر قرارداد status نوراتو و صفحهٔ مستقل دارد.
- [x] رنگ‌های brand از tokenهای Norato مصرف می‌شوند و treatment glass از رنگ برند جدید استفاده نمی‌کند.
- [x] نمونهٔ تعاملی Input حالت invalid و نمونه‌های Button حالت focus، disabled و loading را نمایش می‌دهند.
- [x] TypeScript، build و `pnpm check:tokens` موفق شدند.
- [x] رندر واقعی مرورگر در desktop بررسی شد؛ navigation و متن RTL در accessibility tree دیده شد.
- [x] viewport موبایل 390×844 در preview محلی بررسی و تصویر واقعی رندر بازبینی شد؛ RTL و ناوبری موبایل دیده شدند.
- وضعیت نهایی: موارد بصری و فنی ثبت‌شده در این درخواست بررسی شدند.

این چک‌لیست برای هر درخواست، تغییر کامپوننت یا اصلاح طراحی باید تکمیل شود.

## گزارش این درخواست — قراردادهای ۹‌بخشی همهٔ کامپوننت‌ها و فعال‌سازی Terminator

- [x] Terminator با مسیر skill و رفتار جایگزین در `AGENTS.md` ریشه و دستورهای پوشهٔ طراحی سیستم ثبت شد.
- [x] دادهٔ اختصاصی هر ۴۹ خانواده بازبینی شد؛ نام‌گذاری Variant، اندازه، حالت، اجزای زیرمجموعه، قواعد استفاده، دسترس‌پذیری، RTL و token مرجع استخراج شدند.
- [x] هر ۴۹ سند مستقل دقیقاً بخش‌های Overview، Anatomy، Variants، Sizes، States، Parts، Usage، Accessibility و Tokens را به همین ترتیب دارد.
- [x] هر بخش با دادهٔ خانوادهٔ خودش پر شده؛ مشخصات ناموجود در قرارداد صریحاً «در منبع مشخص نشده» ثبت شده‌اند.
- [x] tokenهای هر کامپوننت از نقش‌های semantic نوراتو استفاده می‌کنند.
- [x] همهٔ ۴۹ مسیر محلی در مرورگر باز شدند؛ عنوان، ۹ بخش و نمونهٔ متناسب با خانواده دیده شد.
- [x] نمای موبایل 390×844 برای صفحهٔ Checkbox بررسی شد؛ RTL و ناوبری موبایل دیده شدند و overflow افقی در رندر مشاهده نشد.
- [x] `pnpm check:tokens`، `pnpm --dir apps/vue typecheck` و `pnpm --dir apps/vue build` موفق شدند.
- [ ] پیاده‌سازی production و آزمون تعاملی کامل برای خانواده‌های Proposed در این اصلاح مستندات ادعا نمی‌شود.
- وضعیت این درخواست: PASS برای اسناد مستقل، محتوای ۹‌بخشی، مسیرها و پیش‌نمایش؛ اعتبارسنجی رفتار production هر ۴۹ کامپوننت موضوع جداگانه است.

## گزارش این درخواست — چیدمان کارت‌های کامپوننت‌ها

- قرارداد پذیرش: همه‌ی نمونه‌ها و کارت‌ها فرزند مستقیم یک grid RTL باشند؛ در desktop هر card
  360px با فاصله‌ی دقیق 20px داشته باشد و در عرض محدود به یک ستون بدون overflow تبدیل شود.
- [x] نمونه‌ها از `SectionTitle` خارج و در `ComponentShowcase`/`component-grid` یکپارچه شدند.
- [x] selector قدیمی Tag که CardHeader و CardContent را هم‌زمان هدف می‌گرفت، حذف و ساختاری شد.
- [x] رندر واقعی در viewport 1440px: دو track دقیق 360px، فاصله 20px و شروع RTL ثبت شد.
- [x] رندر واقعی در viewport پیش‌فرض: یک track 360px، تمام کارت‌ها با لبه راست مشترک، و
  `scrollWidth` 960 در viewport 975 (بدون overflow) ثبت شد.
- [x] viewport آزمایشی پس از تست به حالت پیش‌فرض بازگردانده شد.
- [x] قرارداد در spec، plan، taskها، قوانین Figma و error log ثبت شد.

## گزارش این درخواست — ثبات فونت Tree View

- درخواست نهایی: همه‌ی سطح‌ها در تمام stateها ۱۲px باشند.
- [x] Parent: Estedad Bold 12px؛ Child و Leaf: Vazir Bold 12px.
- [x] shorthandهای قدیمی با قرارداد کامل 12px برای هر depth جایگزین شدند.
- [x] selector `is-expanded` با specificity برابر override شد.
- [x] selector Childهای بسته نیز مستقل از حالت باز روی 12px قفل شد.
- [x] ارتفاع فشرده‌ی ردیف باز باقی مانده، اما typography تغییر نمی‌کند.
- [x] قانون در spec، قوانین Figma، taskها و error log ثبت شد.
- [ ] رندر واقعی مرورگر با Figma مقایسه شود.

## گزارش این درخواست — Button / Third `8818:9982`

- درخواست: افزودن دکمه‌ی Figma `8818:9982` به نمونه‌های دکمه.
- [x] variant مشترک `third` به primitive دکمه اضافه شد.
- [x] سطح سفید، border `#E8E8E8` با ضخامت ۲px، radius 25px و متن `#1A1A1A` اعمال شد.
- [x] ابعاد 121×36px و padding Figma اعمال شد.
- [x] Lalezar فیگما با قرارداد Estedad Black 13px نوراتو جایگزین شد.
- [ ] رندر واقعی مرورگر با Figma مقایسه شود.

## تطبیق با درخواست کاربر

- [ ] آخرین دستور صریح کاربر به‌عنوان منبع حقیقت انتخاب شده و با قوانین قدیمی متناقض نشده است.
- [ ] `dir="rtl"` و جهت داخلی همه عناصر، متن‌ها، آیکن‌ها و alignmentها بررسی شده و هیچ استثنای بدون تأیید وجود ندارد.
- [ ] قبل از کدنویسی، معیار پذیرش درخواست در یک جمله‌ی دقیق ثبت شده است.
- [ ] هیچ تفسیر قبلیِ ردشده دوباره استفاده نشده است.
- [ ] درخواست دقیقاً به یک خروجی قابل مشاهده تبدیل شده است.
- [ ] هیچ بخش مهمی از درخواست حذف یا با حدس جایگزین نشده است.
- [ ] اندازه‌ها، فاصله‌ها، alignment، فونت، رنگ و حالت‌ها با خواسته‌ی کاربر تطبیق داده شده‌اند.
- [ ] مرجع Figma یا assetهای ارائه‌شده، در صورت وجود، بررسی و استفاده شده‌اند.
- [ ] رفتار واقعی کامپوننت با ظاهر آن یکی است.

## بررسی فنی و بصری

- [ ] CSS قدیمی و selectorهای متعارض بررسی و حذف یا خنثی شده‌اند.
- [ ] حالت‌های خاموش، روشن، focus، disabled، invalid و loading در صورت ارتباط بررسی شده‌اند.
- [ ] RTL، فاصله متن و آیکن، تراز افقی و responsive بودن بررسی شده است.
- [ ] رندر واقعی مرورگر بررسی شده است؛ فقط بررسی کد کافی نیست.
- [ ] صفحه‌ی لوکال با نتیجه‌ی مورد انتظار مقایسه شده است.
- [ ] برای Field Group: فیلدها سمت چپ، لبه‌ی راست فیلدها هم‌راستا، عنوان‌ها سمت راست با فاصله ۱۲px، و padding هر چهار طرف محتوا ۱۲px است.
- [ ] Field Group card and inner dropdown container both have 12px padding on all four sides.
- [ ] برای Field Example نهایی: کنترل‌ها سمت چپ، عنوان‌های ردیف سمت راست، لبه‌ی راست کنترل‌ها و لبه‌ی چپ عنوان‌ها مشترک، فاصله‌ی بین دو ستون ۱۲px، عنوان اصلی بالای باکس و سمت راست است.
- [ ] در گزینه‌های جنسیت، ترتیب بصری آیکن → متن → Radio بررسی شده است.

## معیار اعلام نتیجه

- [ ] همه موارد بالا پاس شده‌اند.
- [ ] اگر موردی پاس نشده، نتیجه نباید «انجام شد» اعلام شود؛ باید مشکل و وضعیت دقیق آن اعلام شود.
- [ ] پس از پاس‌شدن، لینک یا preview قابل مشاهده به کاربر ارائه شود.

## گزارش هر درخواست

- درخواست:
- فایل‌ها/کامپوننت‌های بررسی‌شده:
- نتیجه‌ی مورد انتظار کاربر:
- موارد پاس‌شده:
- موارد باقی‌مانده:
- وضعیت نهایی: `PASS` / `BLOCKED`

## گزارش این درخواست — Tree View / استفاده از پیاده‌سازی‌های موجود

- درخواست: استفاده‌ی مستقیم از Checkbox پیاده‌سازی‌شده، فلش Dropdown موجود، ساختار و رنگ‌های Figma در Tree View.
- فایل‌ها/کامپوننت‌های بررسی‌شده: `tree-view.tsx`، `ui/checkbox.tsx`، `ui/select.tsx`، `figma-refine.css`.
- نتیجه‌ی مورد انتظار کاربر: هر Node همان Checkbox canonical را داشته باشد؛ Parent همان فلش Select را با فریم ۲۴×۲۴ داشته باشد؛ hierarchy و RTL حفظ شود.
- موارد پاس‌شده:
  - [x] Tree View مستقیماً `Checkbox` نوراتو را import و render می‌کند.
  - [x] SVG حالت‌های Checkbox از `public/icons` و همان فایل canonical مصرف می‌شوند.
  - [x] asset فلش فقط در `NORATO_SELECT_ARROW` تعریف شده و Select و Tree View همان را مصرف می‌کنند.
  - [x] glyph متنی و selector قدیمی `norato-tree-arrow` حذف شد.
  - [x] Tree View recursive، nested و دارای `aria-expanded`/`role="tree"` است.
  - [x] token check و TypeScript پاس شدند.
- موارد باقی‌مانده: بررسی تصویری تعاملی داخل مرورگر هنوز توسط ابزار خودکار این نشست قابل ثبت نیست و باید در preview لوکال دیده شود.
- وضعیت نهایی: `BLOCKED` تا تأیید رندر واقعی؛ preview: `http://localhost:3000/#components`

## گزارش این درخواست — Tree View حالت بسته Figma `8822:10129`

- درخواست: اضافه‌کردن حالت بسته‌ی Tree View بر اساس نود Figma.
- موارد پاس‌شده:
  - [x] Parent در شروع بسته است و با کلیک باز می‌شود.
  - [x] ردیف ۳۰۰×۳۶، زمینه `#F5F5F5`، radius `12px` و متن ۱۲px ثبت و اعمال شد.
  - [x] فلش دقیق Figma در `public/icons/tree-arrow.svg` با فریم ۲۴×۲۴ استفاده شد.
  - [x] Checkbox canonical نوراتو حفظ شد.
  - [x] TypeScript و token check پاس شدند.
- موارد باقی‌مانده: تأیید تصویری تعاملی در مرورگر.
- وضعیت نهایی: `BLOCKED` تا مشاهده‌ی preview؛ preview: `http://localhost:3000/#components`

## گزارش این درخواست — Typography و داده‌ی نمونه Tree View

- درخواست: Parentها Estedad Bold، Childها Vazir Bold، و چند Child/Leaf برای هر شاخه.
- موارد پاس‌شده:
  - [x] Parentها Estedad با weight `700` هستند.
  - [x] Childها و Leafها Vazir با weight `700` هستند.
  - [x] هر Parent سه Child و هر Child سه Leaf دارد.
- موارد باقی‌مانده: بررسی تایپوگرافی و بازشدن چند شاخه در preview.
- وضعیت نهایی: `BLOCKED` تا مشاهده‌ی preview؛ preview: `http://localhost:3000/#components`

## اصلاح گزارش — تراز Leaf زیر فلش Child

- علت عدم قبولی قبلی: CSS قدیمی با `!important` inset محاسبه‌شده را خنثی کرده بود.
- اصلاح پاس‌شده:
  - [x] Leaf inset با CSS variable نهایی اعمال می‌شود.
  - [x] Leaf در level سوم inset `60px` می‌گیرد: `6 + 24 + 24 + 6`.
  - [x] محور Checkbox Leaf با محور فلش Child یکسان است.
- وضعیت نهایی: نیازمند تأیید بصری preview؛ `BLOCKED` تا مشاهده‌ی رندر.

## گزارش این درخواست — منطق Checkbox درختی

- درخواست: Parent و Child با توجه به انتخاب زیرمجموعه‌ها checked یا indeterminate شوند.
- موارد پاس‌شده:
  - [x] همه‌ی Leafهای انتخاب‌شده → Parent/Child checked.
  - [x] حداقل یک Leaf انتخاب‌نشده در کنار Leaf انتخاب‌شده → Parent/Child indeterminate.
  - [x] هیچ Leaf انتخاب نشده → Parent/Child unchecked.
  - [x] کلیک Parent/Child، همه‌ی descendant Leafها را انتخاب یا لغو می‌کند.
- موارد باقی‌مانده: تست تعاملی همه‌ی transitionها در preview.
- وضعیت نهایی: `BLOCKED` تا مشاهده‌ی preview؛ preview: `http://localhost:3000/#components`

## گزارش این درخواست — تراز Leaf زیر فلش Child

- درخواست: محتوای Child بازشده جلوتر بیاید و Checkbox آن زیر فلش Child قرار گیرد.
- موارد پاس‌شده:
  - [x] Leafها یک frame `24px` و gap `6px` نسبت به Child جلوتر رفتند.
  - [x] Checkbox Leafها با محور فلش Child هم‌راستا هستند.
  - [x] Checkbox Leaf زیر Checkbox Child قرار نمی‌گیرد.
- موارد باقی‌مانده: تأیید بصری تراز در preview.
- وضعیت نهایی: `BLOCKED` تا مشاهده‌ی preview؛ preview: `http://localhost:3000/#components`

## گزارش این درخواست — ترتیب Child `8822:10568`

- درخواست: ترتیب Child از راست به چپ Checkbox، فلش، عنوان باشد.
- موارد پاس‌شده:
  - [x] Checkbox Child در سمت راست قرار دارد.
  - [x] فلش 24px بلافاصله بعد از Checkbox قرار دارد.
  - [x] عنوان Child پس از فلش قرار می‌گیرد.
- موارد باقی‌مانده: تأیید بصری ترتیب در preview.
- وضعیت نهایی: `BLOCKED` تا مشاهده‌ی preview؛ preview: `http://localhost:3000/#components`

## گزارش این درخواست — Tree View Child باز `8822:10493`

- درخواست: نمایش Tree View بعد از بازشدن Child.
- موارد پاس‌شده:
  - [x] Child باز به Header نیمه‌انتخاب `36px` تبدیل شد.
  - [x] Parent surface به `153px` رشد می‌کند و سه leaf `36px` دارد.
  - [x] ترتیب حالت leafها انتخاب‌شده، خالی، انتخاب‌شده است.
  - [x] labelهای Child و leafها Estedad Black `11px` هستند.
- موارد باقی‌مانده: بررسی رندر واقعی expansion سطح سوم در preview.
- وضعیت نهایی: `BLOCKED` تا مشاهده‌ی preview؛ preview: `http://localhost:3000/#components`

## گزارش این درخواست — Tree View Parent باز `8822:10470`

- درخواست: نمایش حالت باز یک Tree View.
- موارد پاس‌شده:
  - [x] Parent باز radius پایین ندارد و فلش آن رو به بالا می‌رود.
  - [x] Childها در سطح سفید borderدار و با ارتفاع `48px` قرار گرفتند.
  - [x] Child اولیه Checkbox canonical انتخاب‌شده و عنوان Estedad Black `13px` دارد.
  - [x] Child قابل بازشدن، فلش تو‌رفته‌ی `24px` دارد.
- موارد باقی‌مانده: مشاهده‌ی رندر تعاملی باز/بسته در preview.
- وضعیت نهایی: `BLOCKED` تا مشاهده‌ی preview؛ preview: `http://localhost:3000/#components`

## گزارش این درخواست — Card مستندات Tree view

- درخواست: قرارگیری کامپوننت در Card با عنوان `Tree view`.
- موارد پاس‌شده:
  - [x] wrapper Card مستقل با عنوان `Tree view` اضافه شد.
  - [x] Card داخلی Figma بدون تغییر اندازه یا ساختار حفظ شد.
  - [x] عنوان RTL با Estedad Black 13px است.
- موارد باقی‌مانده: بررسی رندر نهایی مرورگر.
- وضعیت نهایی: `BLOCKED` تا مشاهده‌ی preview؛ preview: `http://localhost:3000/#components`

## گزارش این درخواست — Tree View مجموعه Parentها `8822:10469`

- درخواست: تبدیل Tree View به Card شامل چند Parent.
- موارد پاس‌شده:
  - [x] Card با Search داخلی و چهار Parent بسته اجرا شد.
  - [x] اندازه‌ی Card `324×248` و اندازه‌ی Search/Parent برابر `300×36` است.
  - [x] Search-to-list gap برابر `8px` و Parent-to-Parent gap برابر `12px` است.
  - [x] هر Parent از Checkbox نیمه‌انتخاب canonical و فلش آبی Tree View استفاده می‌کند.
  - [x] Parentها مستقل و recursive باقی ماندند.
- موارد باقی‌مانده: بررسی تصویری، جست‌وجوی تعاملی و بازشدن Parentها در مرورگر.
- وضعیت نهایی: `BLOCKED` تا مشاهده‌ی preview؛ preview: `http://localhost:3000/#components`
## پیگیری UI و آماده‌سازی تیم Vue — 2026-10-27

- [x] بسته‌های خصوصی workspace `@norato/vue` و `@norato/tokens` ساخته و از اپ محلی resolve شدند.
- [x] استایل مشترک token-backed از entrypoint Vue و token CSS از export مشخص package بارگذاری شدند.
- [x] `v-model` برای Field و Select و `v-model:selected` برای Checkbox/Radio در مرورگر تغییر مقدار والد را نشان داد.
- [x] Select با ArrowDown و Enter انتخاب شد؛ Field با ورودی فارسی به‌روزرسانی زنده داشت.
- [x] نمای کلی، راهنمای تیم و صفحهٔ کامپوننت با RTL در دسکتاپ مرور شدند؛ داشبورد و کنترل‌ها خوانا و منظم رندر شدند.
- [x] توکن‌ها، TypeScript و build تولیدی پاس شدند.
- [ ] بازبینی در viewport موبایل 390×844؛ در browser این نشست قابلیت تغییر viewport موجود نبود.
- محدودیت ثبت‌شده: Date Picker هنوز تقویم تعاملی ندارد و Proposed است. packageها workspace-private هستند و در registry انتشار نیافته‌اند.

## گزارش این درخواست — فاصله‌ی Childهای Tree View

- درخواست نهایی: فاصله‌ی عمودی بین Childهای هم‌سطح `0px` باشد.
- [x] فقط container Childهای مستقیم Parent از `gap: 0` استفاده می‌کند.
- [x] فاصله‌ی Leafهای داخل Child تغییر نکرده است.
- [x] قرارداد در spec، قوانین Figma، taskها و error log ثبت شد.
- [x] اعتبارسنجی فنی: بررسی توکن‌ها و TypeScript/build اجرا می‌شود.
- وضعیت دیداری: نیازمند تأیید در پیش‌نمایش محلی.

## گزارش این درخواست — بازبینی UI/UX با Emil Design Engineering

- [x] مرور heuristic، دسترس‌پذیری، responsive، سلسله‌مراتب، تایپوگرافی، رنگ، تراکم اطلاعات، design system، spacing، typography scale، motion، feedback و Fitts انجام شد.
- [x] Markdown سندها به heading/list/code/link امن و معنایی تبدیل شده؛ متن خام HTML اجرا نمی‌شود.
- [x] تایپوگرافی مستندات با tokenهای اختصاصی خواناتر شد؛ مقیاس‌های Figma برای خود کامپوننت‌ها دست‌نخورده ماند.
- [x] فوکوس زرد مصوب حفظ و با outline آبی کنتراست‌دار همراه شد؛ هر دو در صفحه با Tab دیده شدند.
- [x] کنتراست متن placeholder/disabled از 2.58:1 به 5.33:1 رسید؛ آبی outline در برابر سفید 4.82:1 است. جفت‌های ثبت‌شده: متن اصلی 17.40:1، متن ثانویه روی سفید 9.20:1، لینک 5.35:1، آبی action 4.82:1، متن secondary روی سطح `#f7f7f7` برابر 8.54:1، status success 4.51:1 و warning 4.66:1.
- [x] وضعیت‌ها متن دارند و به رنگ تنها متکی نیستند؛ حرکت روی transform محدود است و reduced-motion پوشش دارد.
- [x] `pnpm check:tokens`، Vue typecheck و build تولیدی پاس شدند؛ صفحهٔ سند کامپوننت و فوکوس کیبورد در رندر واقعی دسکتاپ بررسی شد.
- [ ] viewport موبایل در مرورگر فعلی قابل تنظیم نبود؛ CSS responsive بررسی شده ولی تصویر واقعی موبایل برای این follow-up تأیید نشده است.
- وضعیت: اصلاحات سورس و desktop QA پاس؛ mobile visual QA باز است.

## گزارش این درخواست — جداسازی ۴۹ کامپوننت

- [x] sidebar به فهرست تخت ۴۹ لینک مستقل تبدیل شد؛ هر لینک مسیر hash مستقل همان کامپوننت را باز می‌کند.
- [x] برچسب دسته از کارت‌های inventory حذف شد؛ search فقط نام مستقل کامپوننت را جست‌وجو می‌کند.
- [x] جزئیات هر کامپوننت همچنان سند منبع‌دار، specimen و مسیر/قرارداد جدا دارد.
- [x] دسترس‌پذیری بازرسی شد: tree ناوبری شامل ۴۹ دکمهٔ مجزا بود؛ کلیک Checkbox مسیر `#component-checkbox` و سند اختصاصی آن را باز کرد.
- [x] token check، Vue typecheck و build production پاس شدند.
- [ ] بازکردن تک‌تک ۴۹ مسیر از sidebar به‌صورت دستی انجام نشده؛ یک مسیر representative بررسی شد. بازبینی viewport موبایل نیز در این نشست در دسترس نیست.
- وضعیت: ساختار مستقل پیاده و به‌صورت representative بررسی شد؛ تست کامل ۴۹ لینک و viewport موبایل باز است.

## گزارش این درخواست — کاهش فضای خالی نسخهٔ دسکتاپ

- [x] عرض محتوای اصلی در viewportهای دسکتاپ افزایش یافت؛ railهای ثابت از محتوای اصلی کم‌تر فضا می‌گیرند.
- [x] صفحهٔ جزئیات کامپوننت به دو ستون معنایی برای نمونه/استفاده و بخش‌های قرارداد تبدیل شد؛ عرض متن خوانا می‌ماند.
- [x] راهنمای تیم و صفحهٔ Foundation از عرض اضافه استفاده می‌کنند؛ راهنمای تیم روی دسکتاپ شبکهٔ دو ستونه دارد.
- [x] inventory با حداقل عرض کارت به‌صورت خودکار ستون‌ها را پر می‌کند؛ breakpointهای تبلت/موبایل به چیدمان تک‌ستونه/مناسب برمی‌گردند.
- [x] رندر دسکتاپ صفحات Checkbox، راهنمای تیم و Foundation بررسی شد.
- [x] `pnpm check:tokens`، Vue typecheck و production build موفق شدند.
- [ ] viewport موبایل در مرورگر این نشست قابل تنظیم نبود؛ چیدمان responsive در سورس حفظ شده اما بازبینی واقعی موبایل انجام نشد.
- وضعیت: تغییرات و مرور desktop پاس؛ mobile visual QA باز است.

## گزارش این درخواست — ارائهٔ Norato بدون ارجاع بیرونی

- [x] نام‌ها، لینک‌ها، attributionها و token labelهای خارجی از رابط، راهنمای تیم و ۴۹ قرارداد مستقل حذف شدند.
- [x] صفحهٔ Overview دیگر الهام/منشأ بیرونی را معرفی نمی‌کند؛ صفحهٔ جزئیات لینک خروجی ندارد.
- [x] اطلاعات اختصاصی هر کامپوننت و ۹ بخش قراردادی حفظ شدند؛ رفتارهای تعریف‌نشده با متن «در قرارداد Norato مشخص نشده» ثبت شده‌اند.
- [x] جست‌وجوی متنی کل repository برای نام و دامنهٔ حذف‌شده نتیجه‌ای نداشت؛ ۴۹ قرارداد از نظر ترتیب ۹ بخش بررسی شدند.
- [x] مرورگر محلی: Inventory فهرست مستقل را نشان می‌دهد؛ مسیر Button باز شد و عنوان، نمونه، API و قرارداد Norato را بدون لینک خارجی نشان داد.
- [x] `pnpm check:tokens`، Vue typecheck و production build موفق شدند.
- وضعیت: موارد رابط و مستندات بررسی‌شده پاس؛ viewport موبایل/دسکتاپ دقیق در این مرورگر معلوم نیست.

## گزارش این درخواست — الگوی کارت Button

- [x] چیدمان Button از grid مشترک جدا شد؛ Preview، Vue usage و کارت‌های قرارداد در شبکهٔ معنایی اختصاصی قرار گرفتند و سایر خانواده‌ها تغییر ظاهری نگرفتند.
- [x] Variantها با نمونهٔ UI نمایش داده می‌شوند؛ ۴ variant اجرایی (`primary`, `secondary`, `inverse`, `destructive`) از انواع صرفاً بصری مشخص‌اند. اندازه‌ها و حالت‌ها هم visual نمونه دارند و API فاقد prop اندازه معرفی شده است.
- [x] پیش‌نمایش اصلی Button از `NoratoButton` واقعی استفاده می‌کند؛ `aria-pressed` ناخواسته حذف شد تا نمونهٔ عادی به‌عنوان checkbox/toggle اعلام نشود.
- [x] کپی نمونهٔ Vue، متن قرارداد و نمونه‌های قابل اجرا کنترل کپی دارند؛ target حداقل ۴۸px است و پیام موفقیت/خطا برای صفحه‌خوان اعلام می‌شود.
- [x] مرور واقعی در `http://localhost:5174/#component-button`: RTL، کارت‌ها، variantها، sizes، states، focus visible، clipboard success و تغییر برچسب کپی بررسی شدند.
- [x] `pnpm check:tokens`، `pnpm --filter @norato/vue-app typecheck` و build تولیدی پاس شدند.
- [ ] نمای دسکتاپ عریض‌تر از viewport در دسترس مرورگر این نشست بود؛ CSS breakpointهای عریض را پوشش می‌دهد اما تأیید دیداری آن باز است.
- وضعیت: Button به‌عنوان الگوی اولیه آماده؛ تعمیم به بقیهٔ کامپوننت‌ها پس از بازخورد کاربر.

## گزارش این درخواست — اصلاح کشیدگی و اکسنت Button

- [x] علت کشیدگی کارت‌های Variant/State (`align-content: space-between`) ثبت شد و چیدمان به فاصله‌های فشرده و تراز بالا تغییر کرد.
- [x] پیش‌نمایش Button با کلاس محدود خودش کوتاه‌تر شد؛ نمونه‌های سایر کامپوننت‌ها از این کاهش ارتفاع اثر نمی‌گیرند.
- [x] Primary با زرد نوراتو و متن تیره رندر می‌شود؛ Secondary Stroke زرد ۲px دارد.
- [x] اندازه‌ها و حالت‌های بصری Button هم با اکسنت زرد هماهنگ شدند؛ فوکوس حلقهٔ زرد و outline کنتراست‌دار را حفظ می‌کند.
- [ ] رندر محلی، کپی/فوکوس، token check، TypeScript و build نهایی بررسی شود.
- وضعیت: پیاده‌سازی انجام شده؛ اعتبارسنجی نهایی باقی است.

## گزارش این درخواست — اصلاح کشیدگی و رنگ Button

- [x] Primary در adapter و نمونه‌های داشبورد زرد با متن تیره است.
- [x] Secondary در adapter و نمونه‌های داشبورد Stroke زرد ۲px دارد.
- [x] کارت‌های Variant/State در بالای کارت و با gap منظم چیده می‌شوند؛ specimen Button فشرده‌تر شده و محتوای snippet می‌شکند.
- [x] مرور در localhost: رنگ Primary/Secondary و تناسب specimen دیده شد؛ فوکوس دکمهٔ کپی با Tab قابل مشاهده ماند.
- [x] `pnpm check:tokens`، Vue typecheck و production build پاس شدند.
- [ ] viewport دسکتاپ عریض در این نشست در دسترس نبود؛ مرور بصری روی viewport فعلی انجام شد.
- وضعیت: اصلاح Button کامل؛ الگو هنوز فقط روی Button اعمال شده است.

## گزارش این درخواست — تایپوگرافی و فرم Button

- [ ] Button واقعی Vue، Button داشبورد و نمونه‌های بصری Button با Estedad Bold نمایش داده می‌شوند.
- [x] انتهای دکمه‌ها کاملاً گرد و با `--norato-radius-pill` هستند؛ گوشهٔ کارت‌ها، فیلدها و دکمه‌های کپی تغییر نمی‌کنند.
- [ ] مرورگر محلی، فوکوس، `pnpm check:tokens`، TypeScript و build بررسی شوند.

## گزارش این درخواست — Estedad Bold و گوشه‌های کپسولی Button

- [x] `NoratoButton` و نمونه‌های واقعی Button از Estedad با weight 700 استفاده می‌کنند.
- [x] شعاع `--norato-radius-control` روی Button واقعی، Button داشبورد و mockهای Button اعمال شد؛ کنترل‌های کپی و کارت‌ها همان شعاع خودشان را دارند.
- [x] مرور محلی: متن پررنگ و دو سر کاملاً گرد در Primary زرد و Secondary با Stroke زرد ۲px دیده شد؛ gallery حالت‌ها هم با همان قاعده هماهنگ است.
- [x] `pnpm check:tokens`، Vue typecheck و production build پاس شدند.

## گزارش این درخواست — کارت‌ها و داده‌های Button (2026-10-28)

- [x] علت چیدمان تأیید شد: CSS سه ستون desktop و دو ستون در breakpoint میانی داشت؛ اکنون Button در همهٔ اندازه‌ها یک ستون دارد و قواعد جابه‌جایی ستون حذف شده‌اند.
- [x] صفحهٔ محلی `#component-button` بررسی شد؛ Preview، استفاده در Vue و ۹ کارت مستقل قرارداد در ترتیب عمودی قرار دارند.
- [x] متن سند Button کوتاه و فارسی‌محور شد؛ API و tokenها در مرورگر به‌صورت قطعه‌های LTR مجزا خوانا هستند.
- [x] کارت‌ها سطح ساده‌تر و فاصلهٔ فشرده‌تر دارند؛ نمونه‌های بصری و دکمه‌های کپی حفظ شدند.
- [x] `pnpm check:tokens`، `pnpm --dir apps/vue typecheck` و `pnpm --dir apps/vue build` موفق شدند.
- [ ] رندر واقعی viewport عریض desktop بررسی نشد؛ viewport متصل باریک است. قانون تک‌ستونه از CSS در تمام breakpointها تأیید شد.

## گزارش این درخواست — مینیمال‌سازی ارائهٔ اطلاعات Button (2026-10-28)

- [x] محدوده با دستور کاربر ثبت شد: فقط قاب مستندات و سلسله‌مراتب اطلاعات؛ ظاهر نمونه‌ها و خود کامپوننت‌ها تغییر نکرد.
- [x] سربرگ جمع‌وجور، تیترهای کوچک‌تر، متن ۱۴px، جداکننده‌های ظریف و کد/کپی کم‌تأکید در رندر محلی بررسی شدند.
- [x] ترتیب RTL و ۹ بخش سند باقی است؛ فوکوس صفحه‌کلید قابل مشاهده و هدف کپی حداقل ۴۸px است.
- [x] نمونهٔ Button همچنان زرد/ثانویهٔ دورخط‌دار و با همان ابعاد قبلی دیده می‌شود؛ selectorهای showcase دست‌نخورده‌اند.
- [x] `pnpm check:tokens`، `pnpm --dir apps/vue typecheck` و `pnpm --dir apps/vue build` موفق شدند.
- [ ] نمای عریض دسکتاپ در مرورگر متصل موجود نبود؛ بازبینی بصری در viewport باریک انجام شد.

## گزارش این درخواست — رنگ بلوک کد Button (2026-10-28)

- [x] بلوک «استفاده در Vue» با پس‌زمینهٔ `#484848` و متن سفید در مرورگر محلی دیده شد.
- [x] رنگ‌ها از توکن‌های معنایی `--norato-color-surface-code` و `--norato-color-text-on-code` می‌آیند.
- [x] محدودهٔ استایل فقط بلوک کد Button است؛ کنترل‌های نمونه، رنگ درون‌خطی و دکمهٔ کپی تغییر نکردند.
- [x] نسبت کنتراست سفید روی `#484848`: ۹٫۱۵:۱؛ LTR و شکستن خطوط کد باقی است.
- [x] `pnpm check:tokens`، `pnpm --dir apps/vue typecheck` و `pnpm --dir apps/vue build` موفق شدند.

## گزارش این درخواست — چیدمان گالری Variantهای Button (2026-10-28)

- [x] تصویر کاربر و علت ۴/۴/۱ در grid چهارستونه بررسی شد.
- [x] CSS دسکتاپ به سه ستون تغییر کرد تا ۹ variant در سه ردیف کامل قرار بگیرند.
- [x] نمونه‌های بصری دیگر در نوارهای خاکستری کشیده نمی‌شوند؛ فضای کارت‌ها فشرده‌تر شد.
- [x] مرورگر باریک: دو ستون و کارت آخر وسط‌چین؛ breakpoint موبایل به یک ستون می‌رسد.
- [x] نمونه‌های Button و دکمه‌های کپی بدون تغییر ماندند؛ هر ۹ نمونه در accessibility tree هستند.
- [ ] مرور تصویری بعد از تغییر روی viewport عریض در دسترس نبود؛ قانون دسکتاپ در CSS تأیید شد.

## گزارش این درخواست — حذف زمینهٔ Variant و مورد تکراری (2026-10-28)

- [x] زمینهٔ طوسی پشت نمونه‌ها حذف شد؛ پرشدگی ظریف Tertiary بخشی از خود نوع آن است و Text شفاف باقی می‌ماند.
- [x] Danger Solid که از نظر بصری با Danger اجرایی یکی بود از گالری و قرارداد Button حذف شد؛ Danger/destructive حفظ شد.
- [x] قرارداد Button به ۷ نوع و ۱۶۸ ترکیب به‌روز شد؛ محتوای Icon Button تغییر نکرد.
- [x] مرورگر محلی: ۸ نمونهٔ گالری دیده می‌شوند؛ کارت‌های کپی و وضعیت API حفظ شده‌اند.
- [x] `pnpm check:tokens`، `pnpm --dir apps/vue typecheck` و `pnpm --dir apps/vue build` موفق شدند.

## گزارش این درخواست — نمونهٔ بصری Button (2026-10-28)

- [x] Primary زرد و Secondary دورخط زرد حفظ شدند.
- [x] نمونه‌های مشکی Inverse و قرمز Destructive از بخش Preview بالای صفحه برداشته شدند؛ API و گالری Variant تغییری نکردند.
- [x] نمونهٔ غیرفعال و صرفاً بصری «انصراف» با فرم کپسولی و دورخط خاکستری به تصویر نزدیک است.
- [x] قانون و توکن دورخط در سند Button و قوانین بصری ثبت شد؛ RTL و جای‌گذاری preview بررسی شدند.
- [x] `pnpm check:tokens`، `pnpm --dir apps/vue typecheck` و `pnpm --dir apps/vue build` موفق شدند.

## گزارش این درخواست — گردی کامل Buttonها (2026-10-28)

- [x] علت اختلاف ثبت شد: شعاع ۲۵px برای نمونه‌های نزدیک به ۶۰px ارتفاع، انتهای کاملاً کپسولی نمی‌سازد.
- [x] توکن معنایی `--norato-radius-pill` به مقدار مشاهده‌شدهٔ ۵۰px متصل شد؛ `--norato-radius-control` تغییر نکرد.
- [x] Button اجرایی، نمونهٔ «انصراف» و گالری Variant/Size/State از شعاع pill استفاده می‌کنند؛ کنترل‌های غیر Button از شعاع قبلی استفاده می‌کنند.
- [x] مسیر Button در مرورگر محلی دیده شد؛ هر سه نمونهٔ بالای صفحه انتهای کاملاً گرد دارند و ترتیب RTL حفظ است.
- [x] `pnpm check:tokens`، `pnpm --dir apps/vue typecheck` و `pnpm --dir apps/vue build` موفق شدند.

## گزارش این درخواست — مهندسی داده و دسترسی کاتالوگ (2026-10-28)

- [x] یک بستهٔ تایپ‌شدهٔ `@norato/components` برای ۴۹ هویت پایدار، مسیر، tag جست‌وجو، وضعیت، سند مستقل، specimen و adapter/export ایجاد شد.
- [x] متن قراردادها در ۴۹ فایل مستقل باقی ماند؛ validator وجود هر فایل و ۹ بخش الزامی را تأیید می‌کند.
- [x] دادهٔ Foundation یک‌بار ثبت شده؛ کارت‌های Overview از فصل‌های ۰۱ تا ۱۳ مشتق می‌شوند و ناوبری از همان ۱۴ فصل می‌خواند.
- [x] نقشهٔ primitiveهای قدیمی با IDهای پایدار کاتالوگ هم‌راستا شد؛ فهرست نمایشی همچنان flat است.
- [x] جست‌وجوی مرورگر با شناسهٔ `radio` فقط Radio Button را برگرداند؛ فهرست کامل ۴۹ رکورد مستقل را نمایش داد.
- [x] `pnpm check:catalog`، `pnpm check:tokens`، Vue typecheck و production build موفق شدند.
- [x] هر ۴۹ مسیر مستقیم در مرورگر باز شد؛ عنوان و ۹ بخش مستقل سند برای هر مسیر حاضر بود. Foundation، Button، Radio Button، Date Picker و راهنمای تیم جداگانه از نظر متن/وضعیت بررسی شدند.
- [ ] مرور دیداری موبایل و ناوبری کامل صرفاً با صفحه‌کلید در این نشست انجام نشد.




## گزارش این درخواست — قاب مشترک و نمایش دیداری دادهٔ کامپوننت‌ها (2026-10-28)

- [x] هر ۴۹ مسیر مستقل در مرورگر باز شد؛ هر صفحه ۹ عنوان اصلی و نمونهٔ دیداری اختصاصی خودش را دارد.
- [x] قاب همهٔ صفحه‌ها از الگوی Split Button پیروی می‌کند: سربرگ RTL و وضعیت، نمونه، وضعیت استفاده، سپس سند با جداکننده‌های سبک.
- [x] اطلاعات Overview، Anatomy، Variants، Sizes، States، Parts، Usage، Accessibility و Tokens به خلاصه، دیاگرام، مقایسه، مقیاس، کارت حالت، راهنمای تصویری و swatch تبدیل می‌شوند؛ منبع هرکدام قرارداد همان کامپوننت است.
- [x] مرور همهٔ مسیرها: ۴۹ صفحه، بدون بخش خالی، محتوای خام Markdown یا overflow افقی در viewport متصل.
- [x] نمونه‌های Button و گالری Variant/State/Size حفظ شدند؛ کارت‌های Button از همان قاب مشترک استفاده می‌کنند.
- [x] status، specimenها و کد Vue به metadata واقعی کاتالوگ مقیدند؛ نمونه‌های بدون adapter اجرایی، inert و «مرجع بصری» هستند.
- [x] با Tab به کنترل کپی رسیدم و focus ring دوپیکسلی در رندر واقعی دیده شد؛ clipboard را برای آزمون overwrite نکردم.
- [x] Input، Split Button، Table، Date Picker و Button به‌صورت دیداری بازبینی شدند.
- [x] `pnpm check:catalog`، `pnpm check:tokens`، `pnpm --dir apps/vue typecheck` و `pnpm --dir apps/vue build` موفق شدند.
- [ ] viewport عریض دسکتاپ، موبایل 390px و آزمون با screen reader در ابزار مرورگر این نشست در دسترس نبودند.

## گزارش این درخواست — نقشهٔ انفجاری Anatomy دکمه (2026-10-28)

- [x] بخش Button → Anatomy جای نمای شماره‌ای عمومی را با نمونهٔ یکپارچه و exploded map چهار جزء قراردادی عوض کرد.
- [x] ترتیب نقشه Container، Leading Icon، Label و Trailing Icon در راست‌به‌چپ حفظ شد؛ اتصال قطعات دیداری است.
- [x] نمونه inert است؛ آیکن‌های اختیاری صریحاً فاقد پشتیبانی API فعلی معرفی شدند.
- [x] متن معنایی قطعات و عمل کپی کل بخش باقی ماند.
- [x] با Tab به کنترل «کپی بخش Anatomy» رسیدم و حلقهٔ فوکوس ۲px را در مرورگر دیدم؛ نقشه کنترل تعاملی اضافه نکرد.
- [x] مسیر Button در مرورگر واقعی بازبینی شد؛ عرض 575px، راست‌به‌چپ و بدون overflow افقی بود.
- [ ] مرور موبایل 390px و screen reader در این نشست در دسترس نبود.
- [x] `pnpm check:tokens` و `pnpm check:catalog` موفق شدند؛ TypeScript check نیز پیش از build به مرحلهٔ build رسید و بدون خطا پایان یافت.
- [x] Production build با Vite موفق شد (33.15s)؛ `git diff --check` بدون خطای whitespace بود (فقط هشدارهای line-ending موجود مخزن).

## گزارش این درخواست — رفع تکرار Container در Anatomy دکمه (2026-10-28)

- [x] Container از نمونهٔ دومِ دارای متن به پوستهٔ خالی و خط‌چین تغییر کرد؛ Label فقط یک‌بار و جداگانه نمایش داده می‌شود.
- [x] قرارداد Button پوسته را به‌عنوان بخش دربرگیرندهٔ محتوا روشن می‌کند؛ ترتیب RTL و محدودیت آیکن حفظ شد.
- [x] رندر واقعی: چهار قطعه حاضر، متن پوسته خالی، Label یکتا و overflow افقی غایب بود.
- [x] Parts هم در مرورگر باز شد؛ چهار عضو فهرست‌شده باقی ماندند.
- [x] `pnpm check:tokens`، `pnpm check:catalog` و `pnpm --dir apps/vue typecheck` موفق شدند.
- [x] Production build موفق شد (Vite 8.3.5، 26.17s)؛ `git diff --check` بدون خطای whitespace بود.
- [ ] viewport عریض، موبایل 390px و screen reader در دسترس نبودند.

## گزارش این درخواست — کنترل‌های متحرک Button (2026-10-28)

- [x] قرارداد درخواست تصویر به برچسب‌های راست‌به‌چپ، چیدمان فشرده، سوییچ‌های دارای بازخورد و کپی کنار کد تبدیل شد.
- [x] مرورگر محلی در عرض ۵۷۵px: کنترل‌ها بدون سرریز، پیش‌نمایش و کد با وضعیت بارگذاری همگام؛ aria-pressed برای دکمهٔ عادی حذف شد.
- [x] هدف تعاملی برچسب سوییچ‌ها و سایر کنترل‌ها ۴۸px است؛ CSS کاهش حرکت موجود است.
- [x] check:tokens، check:catalog، Vue typecheck و build موفق شدند.
- [ ] آزمون viewport عریض، ۳۹۰px و screen reader در این نشست انجام نشد.

## گزارش این درخواست — فلش انتخاب‌گر و قاب سوییچ Button (2026-10-28)

- [x] هر دو فلش در مرورگر محلی ۱۶px از لبهٔ چپ فاصله دارند و در مرکز عمودی کنترل هستند.
- [x] برچسب سوییچ‌ها بدون border و background دیده شد؛ ارتفاع هدف کلیک هر سه ۴۸px است.
- [x] چیدمان RTL در عرض ۵۷۵px بدون سرریز افقی بازبینی شد.
- [x] check:tokens، Vue typecheck و production build موفق شدند.
- [ ] آزمون viewport ۳۹۰px و screen reader در این نشست انجام نشد.

## گزارش این درخواست — منوی بازشوندهٔ Button (2026-10-28)

- [x] هر دو کنترل Variant و HTML type به منوی درون‌صفحه‌ای تبدیل شدند؛ منو زیر کنترل و با انتخاب زرد دیده شد.
- [x] انتخاب Secondary و submit در مرورگر واقعی، پیش‌نمایش و قطعه‌کد Vue را به‌روز کرد.
- [x] ArrowDown، Escape و بازگشت فوکوس به دکمهٔ بازکننده در مرورگر بررسی شد.
- [x] منوی بازشونده در عرض ۵۷۵px سرریز افقی نداشت؛ هدف گزینه‌ها ۴۸px و حالت کاهش حرکت در CSS تعریف شده است.
- [x] check:tokens، Vue typecheck و production build موفق شدند.
- [ ] آزمون screen reader و viewport ۳۹۰px در این نشست انجام نشد.

## گزارش این درخواست — فارسی‌سازی اعداد رابط (2026-10-28)

- [x] شماره‌های Overview و Anatomy، اندازه‌ها و شمارندهٔ زندهٔ Button در مرورگر با رقم فارسی دیده شدند.
- [x] نمونهٔ Date Picker بررسی شد؛ روزهای تقویم با رقم فارسی دیده شدند.
- [x] متن غیر فنی مسیرهای Button، Inventory و Date Picker برای رقم لاتین اسکن شد؛ موردی باقی نماند.
- [x] کد Vue و مقدارهای فنی توکن‌ها به‌صورت ASCII ماندند تا کپی و اجرا درست باشد.
- [x] check:tokens، check:catalog، Vue typecheck و production build موفق شدند.
- [ ] مرور تک‌تک ۴۹ مسیر و آزمون صفحه‌خوان در این نشست انجام نشد.
## گزارش درخواست — تطبیق ۴۸ کامپوننت با مرجع طراحی (در جریان، 2026-10-31)

- [x] لینک مرجع `مرجع طراحی تعریف DoD و هدف پیوستهٔ ۴۸ کامپوننت در spec و ledger ثبت شد.
- [x] اندازهٔ قاب و فرزند اصلی نمونهٔ ۴۸ صفحه در مرورگر محلی اندازه‌گیری شد؛ اندازه‌گیری، جایگزین مقایسهٔ دیداری هر صفحه نیست.
- [x] Input در مرجع طراحی و Norato به‌صورت دیداری بررسی شد؛ نمونهٔ بالای صفحه به یک فیلد فشرده تبدیل شد. فیلد ۴۸px است و سرریز افقی در viewport بررسی‌شده ندارد.
- [x] نمونهٔ اجرایی Input: ورود متن، پیام خطا/aria-invalid، غیرفعال، بارگذاری و الزامی در مرورگر بررسی شد.
- [x] Input در موبایل ۳۹۰px کنار مرجع طراحی بازبینی شد؛ پس از اصلاح شکست مسیر بلند در کد اجرایی، عرض سند Norato برابر ۳۷۵px در viewport ۳۹۰px است. فیلد ۴۸px و قاب ۱۲۳px است.
- [x] Tab از ورودی به کنترل بعدی حرکت کرد و focus-visible حلقهٔ ۲px زرد با outline آبی نشان داد.
- [x] حالت Loading در NoratoField با `aria-busy` و پیام status زندهٔ مرتبط اعلام می‌شود؛ Error با متن و `aria-invalid` همراه است و Disabled ورودی را غیرفعال می‌کند.
- [x] Select در مرجع طراحی و Norato روی desktop و viewport موبایل ۳۹۰px مقایسه شد؛ عرض سند موبایل هر دو ۳۷۵px است. قاب نمونهٔ تک‌فیلدی Norato حدود ۱۲۲px در desktop و ۹۸px در mobile؛ کنترل در RTL به‌ترتیب ۵۱۲×۴۸px و ۳۱۸×۴۸px است و عمودی کش نیامده.
- [x] انتخاب مقدار Select با رویداد change و ArrowDown/Enter بررسی شد؛ مقدار انتخاب‌شده در وضعیت زنده منعکس می‌شود. گزینهٔ disabled، required، error/`aria-invalid`، loading/`aria-busy` و status مرتبط، و غیرفعال شدن کنترل بررسی شدند.
- [x] فوکوس صفحه‌کلیدی Select با `:focus-visible` و حلقهٔ دوپیکسلی زرد با outline آبی در desktop اندازه‌گیری شد.
- [x] کنترل‌های تغییر وضعیت playground حداقل target ۴۸px دارند؛ عرض سند در ۳۹۰px اندازه‌گیری شد و overflow ندارد.
- [x] adapter جدید Select منوی شیشه‌ای با گروه و جست‌وجو را باز کرد؛ فیلتر «اصفهان» و انتخاب آن با ArrowDown/Enter، و انتخاب چندتایی مرحله‌ای با لغو/تأیید در مرورگر اجرا شد.
- [x] Select جدید در viewport ۳۹۰px بازبینی شد: پنل داخل عرض ۳۹۰px ماند، شش گزینه هرکدام ۴۸px بودند، و عرض سند در حالت باز ۳۹۰px بود. جست‌وجو هنگام بازشدن فوکوس گرفت؛ ArrowDown فوکوس را به گزینه برد؛ Escape منو را بست.
- [x] Error با `aria-invalid` و پیام مرتبط، Disabled با کنترل غیرفعال، Loading با کنترل غیرفعال و پیام status، Read-only با `aria-readonly` و منوی بسته بررسی شد. چهار اندازهٔ Small/Medium/Large/XLarge به‌ترتیب ارتفاع کنترل ۴۸/۴۸/۴۸/۵۶px داشتند.
- [ ] DoD نسخهٔ جدید Select هنوز باز است: تکمیل مقایسهٔ جزئیات بصری منوی باز و تمام حالت‌های مرجع مرجع طراحی لازم است.
- [x] آزمون منوی بدون جست‌وجو در مرورگر: End آخرین گزینهٔ فعال را فوکوس کرد؛ ArrowDown گزینهٔ غیرفعال بعدی را رد کرد و به اولین گزینهٔ فعال برگشت.
- [x] کشیدگی چندانتخابی رفع شد: پیش از اصلاح، Chip نمایشی ۴۸px و فیلد ۶۶px بود؛ پس از اصلاح، Chip به ۲۴px و فیلد به ۴۸px رسید. در نمای دسکتاپ کنترل مستقل از قاب نمونه اندازه‌گیری و دیده شد.
- [x] مقایسهٔ تازهٔ نمونهٔ Select با مرجع طراحی در دسکتاپ و موبایل ۳۹۰px: کنترل مرجع طراحی حدود ۳۰۲×۴۱px و کنترل Norato پس از اصلاح ۳۰۰×۴۸px است؛ اختلاف ارتفاع به هدف تعاملی ۴۸px نوراتو مربوط است. قاب نمونهٔ Norato اکنون ۲۹۶px ارتفاع دارد و فیلد در مرکز آن قرار می‌گیرد؛ در موبایل عرض سند ۳۷۵px و بدون overflow است.
- [x] فلش متنی Select با SVG برداری ۲۴px جایگزین شد؛ در مرورگر سمت چپ کنترل RTL دیده شد. در منوی چندانتخابی دسکتاپ فوتر ۶۵px داخل پنل ماند؛ در موبایل ۳۹۰px پنل ۳۴۳px عرض داشت، دکمه‌های فوتر کامل دیده شدند و overflow افقی رخ نداد.
- [x] گزینه‌های Multi Select اکنون از نشانگر چک‌باکس برداری مشترک استفاده می‌کنند: شش قاب ۲۴px در منو و ردیف‌های ۴۸px در مرورگر دیده شد. انتخاب موقت دو گزینه تا پیش از تأیید مقدار والد را تغییر نداد؛ انصراف مقدار قبلی را نگه داشت و تأیید هر دو Chip را ثبت کرد. در موبایل ۳۹۰px فوتر کامل و بدون overflow بود.
- [x] Select تک‌انتخابی با انتخاب «اصفهان» همان لحظه مقدار والد را ثبت کرد. حالت برچسب داخلی با Summary و دو Chip پس از اصلاح در دسکتاپ و موبایل ۳۹۰px دقیقاً ۵۶px ارتفاع داشت؛ خلاصهٔ موقت پیش از تأیید ۲ مورد را نشان داد و مقدار والد تا تأیید تغییر نکرد. Anatomy بعد از جابه‌جایی توضیح اضافی دوباره شش جزء دارد.
- [x] با پنج انتخاب در حالت Chips، فیلد به‌جای چند ردیف فقط «تهران +۴» نمایش داد و ارتفاع ۴۸px ماند؛ در مرورگر تأیید شد.
- [ ] تکمیل نهایی Input و Select و بررسی ۴۶ خانوادهٔ باقی‌مانده باز است.

## گزارش این درخواست — Rating با مرجع مرجع طراحی (DoD مرورگری پاس شد، 2026-11-01)

- [x] مرجع طراحی Rating در دسکتاپ 1280×900 و موبایل 390×844 بازبینی شد؛ specimen نوراتو 584×288px در ستون دسکتاپ و 320×288px در موبایل، عرض سند موبایل 375px و بدون overflow بود.
- [x] قاب، پس‌زمینهٔ dotted-glass، Default/نقطهٔ سبز، ترتیب RTL، 4.0، چهار ستارهٔ پر، یک ستارهٔ خالی و 128 نظر کنار مرجع طراحی مقایسه شد.
- [x] صفحه مثل Button، نمونهٔ بالایی، playground و ۹ بخش قرارداد مستقل دارد؛ playground سه حالت input/display/summary و snippet را عرضه می‌کند.
- [x] ۲۴ ترکیب display شامل ۸ مقدار مستند مرجع طراحی در سه اندازه بررسی شد؛ fillها درست و ستاره‌ها 16/20/24px بودند. نیم‌ستاره از سمت راست پر شد.
- [x] Input با کلیک و فلش‌ها انتخاب شد؛ تغییر controlled به کد نمونه رسید. هر ۵ target برابر 48×48px است؛ در Large ستاره 32px ماند.
- [x] حلقهٔ focus صفحه‌کلیدی 2px و offset مطابق قاعدهٔ Button (4px) بود؛ hover و selected دیده شدند؛ disabled هر پنج radio را واقعاً غیرفعال کرد.
- [x] AX/DOM نقش radio، نام هر گزینه، checked، نام گروه، متن score زنده و progressbarهای توزیع 5→1 با مقدار درصد را نشان داد.
- [x] `aria-labelledby` نام Rating Input و `aria-describedby` راهنمای زنده را به گروه radio وصل می‌کند.
- [x] `check:tokens`، `check:catalog`، Vue typecheck، build و `git diff --check` پس از مستندسازی نهایی دوباره اجرا شدند و موفق شدند.
- صفحه‌خوان مستقل اجرا نشد؛ گزارش به مرورگر، DOM/AX و تعامل صفحه‌کلید محدود است.
## گزارش درخواست — Split Button با مرجع مرجع طراحی (در جریان، 2026-10-31)

- [x] صفحهٔ Split Button در مرجع طراحی و Norato در دسکتاپ و موبایل ۳۹۰px به‌صورت دیداری مقایسه شد؛ رنگ Primary مطابق نوراتو زرد است.
- [x] نمونهٔ دو قرص جدا به کپسول متصل با جداکننده تبدیل شد؛ دکمهٔ اصلی و فلش اجرایی هر دو حداقل ۴۸px هستند.
- [x] اکشن اصلی، انتخاب گزینه، ArrowDown، Escape، کلیک بیرون، غیرفعال و بارگذاری در مرورگر اجرا شدند.
- [x] منوی موبایل پس از اصلاح کاملاً در عرض ۳۹۰px قرار گرفت؛ هیچ overflow افقی گزارش نشد.
- [x] گالری اختصاصی Variants/States/Sizes مانند Button اضافه شد؛ شش ترکیب پایه و چهار ارتفاع بصری در موبایل دیده شدند و سرریز نداشتند.
- [x] ArrowUp، Home/End، Tab خروج از منو، گونه‌های Primary/Secondary/Destructive/Tertiary و فوکوس دیداری در مرورگر بررسی شدند.
- [x] چهار اندازهٔ Split Button اکنون در API اجرایی هستند؛ در مرورگر ظاهر ۳۲/۴۰/۴۸/۵۶px و هدف تعاملی حداقل ۴۸px برای Small/Medium اندازه‌گیری شد. DoD کامل و تغییر وضعیت Proposed هنوز باز است.

## پیگیری DoD — Split Button (2026-11-01)

- [x] در viewport محلی 1920×863، Norato با مرجع طراحی باز و مقایسه شد: frame نوراتو 584×288px (محدود به ستون صفحه) و قاب مرجع طراحی حدود 630×298px است. هر دو control متصل، جداکنندهٔ یکتا و نمونهٔ متمرکز دارند؛ ارتفاع control نوراتو 48px است. رنگ Norato زرد معنایی خودش را نگه می‌دارد.
- [x] specimen بالای صفحه به adapter واقعی و inert وصل شد؛ نشان Default اضافه شد؛ selectorهای قدیمی `.sample-split` حذف شدند تا CSS موازی باقی نماند.
- [x] گالری اختصاصی به صفحه متصل شد: ۶ گونهٔ پایه، ۴ اندازه، ۵ حالت؛ گالری اندازه‌ها از DOM چهار ارتفاع 32/40/48/56px را نشان داد.
- [x] رفتار مرورگر: primary event/status، انتخاب منو/event، بستن با outside click، ArrowDown/Up، Home/End، Escape و بازگشت فوکوس به toggle، Tab خروج از منو، expanded state و هدف‌های مستقل مرور شدند.
- [x] حالت Disabled هر دو دکمه را واقعاً disable می‌کند؛ Loading هر دو را disable و `aria-busy=true` می‌کند و spinner دیداری دارد. reduced-motion fallback در CSS ثبت است. Invalid برای این قرارداد تعریف نشده است.
- [x] در هر چهار اندازه، ارتفاع بصری دقیق 32/40/48/56px است؛ در Small/Medium هر دو target حداقل 48×48px هستند. RTL در DOM تأیید شد: main در سمت راست و toggle در سمت چپ.
- [x] کاتالوگ/قرارداد به Implemented ارتقا یافت؛ usage، قوانین Figma، error log، DoD و task ledger به‌روزرسانی شدند.
- [ ] مرورگر متصل در این نوبت API تغییر viewport نداشت؛ اجرای مجدد viewport 390px پس از تغییر قاب به 288px لازم است. پیش‌تر رفتار منوی mobile/no-overflow در 390px ثبت شده بود، اما آن شاهد تغییر قاب نهایی را پوشش نمی‌دهد.
- صفحه‌خوان مستقل اجرا نشد؛ بررسی به DOM، keyboard و accessibility tree مرورگر محدود است.

## گزارش درخواست — شروع adapter اجرایی Combobox با مرجع مرجع طراحی (در جریان، 2026-11-01)

- [x] صفحهٔ مرجع طراحی Combobox و صفحهٔ Norato در مرورگر مشاهده شدند؛ مرجع ۹ بخش مستقل و preview فشرده دارد. مرجع مرجع طراحی در این نوبت در desktop دیده شد؛ mobile مرجع طراحی هنوز بررسی نشده است.
- [x] Combobox از Proposed به Adapted تغییر کرد؛ adapter، export، usage example و playground تعاملی به مسیر مستقل متصل شدند.
- [x] در صفحهٔ Norato هر ۹ بخش قرارداد، بخش Vue اجرایی و نمونهٔ پیش‌نمایش دیده شد.
- [x] فیلتر فارسی و متن تطبیق‌یافته، ArrowDown و Enter، ثبت مقدار انتخاب‌شده، پیام بدون نتیجه، خطا/`aria-invalid`/`aria-describedby` و Disabled در مرورگر بررسی شدند.
- [x] ایراد جای‌گذاری پنل به‌علت نبود `ComboboxAnchor` شناسایی و رفع شد؛ پنل پس از اصلاح هم‌راستا با فیلد و درون viewport موبایل باز شد.
- [x] viewport محلی 390×844: ارتفاع فیلد 50px، جهت گروه RTL و عرض سند 375px در برابر viewport 390px اندازه‌گیری شد؛ overflow افقی وجود نداشت.
- [x] صفحهٔ desktop در viewport 1280×900 باز شد؛ نمونهٔ Combobox داخل قاب 584×129px و فیلد 512×50px دیده شد. اندازه‌گیری جزئیات desktop مرجع طراحی و mobile مرجع طراحی هنوز انجام نشده است.
- [x] `pnpm check:tokens` و Vue typecheck و production build موفق شدند.
- [x] `pnpm check:catalog` پس از اصلاح قاعدهٔ validator برای adapterهای اختیاری Adapted موفق شد؛ `pnpm check:tokens` و `git diff --check` نیز موفق شدند.
- [x] Vue typecheck و production build موفق شدند؛ build هشدار bundle بالای 500KB داد.
- [x] صفحه‌کلید: فهرست باز شد، گزینهٔ فعال `aria-activedescendant` گرفت و Escape منو را بست؛ پنل با فاصلهٔ حدود ۹px زیر کنترل و هم‌عرض فیلد اندازه‌گیری شد.
- [ ] DoD باز است: Multi، چهار اندازه، loading/recent/create، Clear، keyboard/focus matrix کامل، مقایسهٔ مرجع طراحی در mobile و اندازه‌گیری هم‌ارز desktop تکمیل نشده‌اند.

## ادامهٔ بررسی درخواست — تکمیل رفتارهای Combobox و رفع سرریز (2026-11-01)

- [x] API و playground اکنون controlled single/multi، چیپ فشرده، چهار size، برچسب داخل/بیرون، clear، recent options، loading، empty، create و error/disabled/required را پوشش می‌دهند.
- [x] انتخاب تکی با ArrowDown/Enter، انتخاب چندتایی دو گزینه با ثبت آرایه، چیپ `+۱` در همان ارتفاع ۵۰px، پاک‌کردن جست‌وجو پس از انتخاب، ساخت و ثبت گزینهٔ تازه و نمایش اخیرها در مرورگر اجرا شد.
- [x] Loading در مرورگر `aria-busy=true`، status زنده و سه خط skeleton نشان داد. Error به پیامش اشاره می‌کند و `aria-invalid=true` و `required` بومی را می‌گذارد؛ Disabled هم ورودی و هم trigger را غیرفعال می‌کند.
- [x] اندازهٔ بیرونی فیلد در حالت label بیرونی: Small/Medium/Large برابر ۵۰px، XLarge برابر ۵۸px؛ در حالت XLarge/داخل: قاب ۶۴px و ردیف تعاملی ۵۶px. حداقل hit area رعایت شد.
- [x] مرجع طراحی در viewport موبایل 390×844 و Norato در همان viewport بازبینی شدند؛ فیلد preview در هر دو حدود ۳۱۰px است. Norato قاب 320×288px دارد، RTL است، و عرض سند 375px بدون overflow است.
- [x] پنل در موبایل زیر فیلد باز شد، با فیلد هم‌عرض ماند، گزینهٔ فارسی را bold کرد و پس از انتخاب بسته شد. `aria-activedescendant` با گزینهٔ فعال تنظیم شد.
- [x] سرریز playground ناشی از wrapper Reka (سند 417px در viewport 390px) با محدودکردن wrapper/فیلد رفع شد؛ پس از اصلاح عرض سند 375px است.
- [ ] مرور کامل بصری دسکتاپ با اندازه‌گیری دقیق کارت و همهٔ variantها، صفحه‌خوان واقعی، فوکوس همهٔ اکشن‌ها و ماتریس کامل مرجع طراحی هنوز باز است؛ DoD Combobox بسته نشود.
- [x] گیت‌های فنی بعد از این batch اجرا شدند و نتیجهٔ آن‌ها در انتهای همین گزارش ثبت شده است.
- [x] گیت‌ها پس از تغییرات جدید اجرا شدند: `pnpm check:tokens`، `pnpm check:catalog`، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` همگی موفق شدند.
- [x] production build هشدار bundle بالای ۵۰۰KB داد (518.24KB minified)، ولی build موفق بود.
- [ ] DoD همچنان باز است: صفحه‌خوان واقعی و review همهٔ variantها/حالت‌ها و تمام اکشن‌های focus دیده نشده‌اند؛ کوچک‌شدن frameها و کمبودهای بصری با شواهد تازه در نوبت بعد بازبینی شوند.

## ادامهٔ DoD Combobox — اصلاح نمونه و مرور میان‌مرحله‌ای (2026-11-01)

- [x] صفحه‌های مرجع طراحی و Norato در همان پنجره و viewport 1195×765 مقایسه شدند: مرجع طراحی قاب 636×300px، field shell برابر 324×68.2px و body برابر 324×41px؛ Norato قاب 540×288px، field برابر 310×50px و برچسب بیرونی 310×20.8px. ستون محتوا در Norato باریک‌تر است؛ قاب محدود می‌ماند و کشیدگی ندارد.
- [x] کمبود marker و نقطه‌ها در screenshot واقعی تأیید شد. `Default` به نمونهٔ inert اضافه شد؛ نقطه‌ها از mix 14٪ توکن آبی semantic Norato ساخته شدند. مرورگر پس از اصلاح قاب نقطه‌دار، wash زرد/آبی Norato، marker، field مرکزی 310×50px و قاب 540×288px را نشان داد.
- [x] نمونه از playground جداست و DOM صفحه Preview، Vue، و همهٔ ۹ بخش قراردادی را دارد.
- [x] ۱۶ حالت اندازه‌گیری‌شده (single/multi × label outside/inside × چهار اندازه)، در viewport فعلی: بیرون 50/50/50/58px؛ داخل 56/56/56/64px؛ هدف تعاملی 48px و XLarge 56px. RTL درست و عرض سند 1180px در viewport 1195px بود.
- [x] منوی اخیر دو گزینه دارد؛ جست‌وجوی فارسی متن تطبیق را Bold کرد؛ منوی نتایج هم‌عرض 540px، 7.9px زیر فیلد و گزینه‌ها 48px بود. ArrowDown/Enter انتخاب تکی، انتخاب Multi و نمایش تک‌چیپ + شمارنده، Clear، create/ثبت گزینهٔ جدید، empty و loading/سه skeleton/`aria-busy`/status بررسی شدند.
- [x] required/error/`aria-required`/`aria-invalid`/`aria-describedby`/alert و disabled واقعی ورودی و trigger بررسی شد. Escape منو را بست و بعد از پاک‌کردن، مقدار و status خالی ماند.
- [ ] DoD نهایی باز است: مقایسه و screenshot موبایل پس از اصلاح marker/dot، مرور کامل ماتریس بصری ۹۶ حالت، تمرین فوکوس تمام کنترل‌ها در هر حالت و screen-reader مستقل هنوز انجام نشده‌اند. این دور viewport واقعی موبایل نبود.
- [x] ترتیب Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze قبل از اصلاح ثبت شد؛ اصلاح فقط بر نقص رندر مشاهده‌شده محدود ماند.
- [x] ادامهٔ موبایل پس از اصلاح در viewport واقعی 390×844 بررسی شد: قاب 320×288px، فیلد 212×48px، marker `Default` قابل‌دیدن و عرض سند 375px بدون سرریز است؛ screenshot پس از اصلاح ثبت شد.
- [x] مقایسهٔ موبایل مرجع طراحی/Norato در یک viewport 390×844 با screenshot مرورگر تکمیل شد: مرجع طراحی frame 327×300px و Norato 320×288px؛ عرض سند هر دو 375px و field shell نوراتو 310×50px است. نشانگر و نقطه‌های نوراتو دیده می‌شوند و قاب کشیدگی ندارد.
- [x] با Tab، action پاک‌کردن فوکوس visible می‌گیرد (۲px آبی، offset چهار پیکسل، halo زرد ۲px). trigger طبق Reka با `tabindex=-1` از ترتیب Tab حذف شده؛ ورودی composite با ArrowDown فهرست را باز و گزینه را با `aria-activedescendant` فعال می‌کند.
- [x] مرورگر پس از reload و ArrowDown یک outline اضافی 3px روی input نشان داد؛ override عمومی حذف و selector scoped به `outline:0` تغییر کرد. اندازهٔ computed بعد از اصلاح: outline داخل input صفر، حلقهٔ field برابر 2px آبی با offset 4px و halo زرد 2px؛ active descendant به گزینهٔ فوکوس‌شده اشاره می‌کند.
- [x] گیت‌های بعد از تغییر: `pnpm check:tokens`، `pnpm check:catalog`، Vue typecheck، production build و `git diff --check` پاس شدند؛ build هشدار 635.58KB داد.
- [ ] DoD همچنان باز است: مرور ۹۶ حالت ظاهری، ماتریس فوکوس همهٔ اکشن‌ها و screen-reader مستقل انجام نشده‌اند.

## گزارش انتشار — Preview در Vercel (2026-11-01)

- [x] تصویر Deployment بررسی شد: Production موفق است و یک Preview ناموفق.
- [x] جزئیات Vercel برای دیپلوی ناموفق بررسی شد: `NEXT_NO_VERSION`؛ Vercel پروژهٔ Vite را با چارچوب Next.js پیکربندی کرده و نسخهٔ Next پیدا نکرده است.
- [x] فهرست دیپلوی‌ها تطبیق داده شد: همان commit با شناسهٔ کوتاه `531c98e` یک دیپلوی `READY` جداگانه دارد؛ شکست Preview به معنی شکست Production نیست.
- [ ] برای حذف تکرار خطا، تنظیم Framework Preset پروژه در Vercel باید روی Vite اصلاح شود؛ این تغییر تنظیمات هنوز انجام نشده است.

## گزارش این درخواست — Checkbox با مرجع مرجع طراحی (در جریان، 2026-11-01)

- [x] مرجع طراحی Checkbox در desktop و mobile دیده شد؛ ترکیب‌بندی preview تک‌کنترلی، frame شیشه‌ای نقطه‌دار، چهار بخش Anatomy و ۳۶ variant ثبت شد.
- [x] مقایسه در viewport موبایل 390×844: Norato frame برابر 320×288px و عرض سند 375px است؛ سرریز افقی ندارد. Desktop در viewport یکسان 1280×900 نیز مقایسه شد؛ frame نوراتو 584×288px در ستون 584px و frame مرجع طراحی حدود 630×298px است؛ اختلاف عرض از محدودیت محتوای صفحهٔ Norato می‌آید.
- [x] قاب، نشانگر Default/نقطهٔ سبز، glass token و border با DOM مرجع طراحی مقایسه شدند؛ چهار جزء Anatomy بعد از انتقال یادداشت اندازه به Sizes در مرورگر تأیید شد.
- [x] صفحه ساختار ۹‌بخشی مستقل دارد؛ adapter Vue و playground اجرایی از specimen inert جدا هستند. وضعیت کاتالوگ به Adapted اصلاح شد تا DoD باز را پنهان نکند.
- [x] browser behavior: Space، ۲px focus، کلیک کامل label، mixed/`aria-checked="mixed"`، RTL/control-right، target 48.78px، size 16/20، required، disabled و error/description association بررسی شد.
- [x] مرور ماتریس: ۱۸ ترکیب مقدار false/true/mixed × اندازه 16/20 × حالت default/error/disabled؛ شش ترکیب فوکوس و چهار ترکیب hover برای false/true در هر دو اندازه بررسی شدند. Accessibility tree مقدار mixed را به‌صورت Value 2 و خطا را به‌عنوان پیام مرتبط اعلام می‌کند.
- [x] `pnpm check:tokens`، `pnpm check:catalog` و `pnpm --dir apps/vue typecheck` موفق شدند؛ `pnpm --dir apps/vue build` موفق شد.
- [x] build هشدار bundle اصلی بالای 500KB داد؛ build را متوقف نکرد.
- [x] ترکیب mixed+hover در هر دو اندازه با اشاره‌گر واقعی بررسی شد؛ `:indeterminate:hover` فعال است، رنگ Norato Blue اعمال می‌شود و Accessibility tree همچنان mixed را گزارش می‌کند. ماتریس ۳۰ ترکیب Checkbox و ۶ گونهٔ Checkbox Field مرور شدند.
- [x] `pnpm check:tokens`، `pnpm check:catalog`، Vue typecheck، production build و `git diff --check` پس از اصلاحات نهایی موفق شدند.
- صفحه‌خوان مستقل اجرا نشد؛ مرور DOM/Accessibility tree و تعامل صفحه‌کلید انجام شد.
- وضعیت: PASS برای DoD مرورگر و gateهای فنی Checkbox.

## گزارش این درخواست — Date Picker (2026-11-01، در جریان)

- [x] صفحهٔ محلی Date Picker ساختار مستقل Button را دارد: Preview، playground اجرایی، نمونهٔ Vue و هر ۹ بخش قرارداد.
- [x] adapter کنترل‌شدهٔ Jalali، مقدارهای date/range/date-time و هفت mode در API و playground متصل شدند؛ تغییر حالت‌های Single، Range، Presets، Date & Time، Month، Year و Wheel و انتخاب‌های تاریخ در مرورگر اجرا شده‌اند.
- [x] مرورگر RTL را با ترتیب شنبه تا جمعه از راست نشان می‌دهد. در حالت بازه، ماه جاری سمت راست و ماه بعد سمت چپ است؛ بازهٔ انتخاب و دو preset «این هفته» و «ماه قبل» در مرورگر بررسی شدند.
- [x] ایراد پنل بازه رفع شد: inline width کنترل، قانون 760px دوماهه را خنثی می‌کرد. اکنون پنل desktop در viewport 1920×863 اندازهٔ 760×491px دارد، از control تا x=540.5..1300.5 قرار می‌گیرد و در viewport جا می‌شود؛ دو ماه هرکدام 361px هستند.
- [x] روزهای تقویم target 48×48px دارند؛ در حالت single درخت دسترس‌پذیری، نام تقویم/روزها، امروز، تعطیلی، انتخاب و ماه‌های مجاور را نشان می‌دهد. انتخاب range، Preset، Month، Year و Wheel مدل کنترل‌شده را به‌روزرسانی کردند.
- [x] گیت‌ها پس از اصلاح چیدمان: `pnpm check:tokens`، `pnpm check:catalog`، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` موفق شدند.
- [x] `git diff --check` بدون whitespace error است؛ هشدارهای پایان‌خط CRLF در checkout ویندوزی باقی‌اند.
- [x] مقایسهٔ موبایل مرجع طراحی/Norato در 390×844 با screenshot واقعی انجام شد. قاب مرجع طراحی حدود 312×288px دیده می‌شود؛ قاب Norato بعد از اصلاح responsive با اندازه‌گیری DOM برابر 320×306px است. صفحهٔ Norato 375px عرض دارد و سرریز افقی ندارد.
- [x] پنل بازه در موبایل در x=12..370 و y≈329..820 داخل viewport است؛ ماه دوم در breakpoint موبایل پنهان می‌شود و هفت روز هفته به ترتیب RTL می‌مانند. هر هفت hit area تعاملی 48×48px اندازه‌گیری شدند.
- [x] صفحه‌کلید در مرورگر: ArrowLeft/Right و ArrowUp/Down جابه‌جایی روز، PageUp/Down تغییر ماه، Home/End مرزهای هفته، Enter انتخاب مقدار و بستن پنل، Escape بستن پنل و بازگشت فوکوس به trigger. حلقهٔ فوکوس 2px است.
- [x] Error دارای `aria-invalid=true` و `aria-describedby` به متن خطاست؛ Disabled فیلد و trigger را غیرفعال کرد؛ روز disabled انتخاب‌ناپذیر بود؛ جمعه و تاریخ تعطیلی داده‌شده توسط مصرف‌کننده کلاس/رنگ قرمز گرفتند. Date & Time نمایش فارسی `۱۶:۴۵` و مدل محلی `16:45` را حفظ کرد.
- [x] مقایسهٔ desktop در viewport برابر 1920×863 با screenshot مرورگر انجام شد: مرجع طراحی card حدود 266×211px، Norato card برابر 272×213px؛ قاب Norato برابر 584×302px است و به‌دلیل ستون محتوای صفحه از قاب مرجع طراحی باریک‌تر می‌ماند. نسبت و ارتفاع خود تقویم هم‌تراز است؛ پالت Norato طبق قرارداد حفظ شد.
- [x] مرور بصری هر هفت mode در حالت باز انجام شد؛ Range دو ماه، Presets، Date & Time، Month، Year و Wheel از نظر RTL، تراکم و تناسب مرور شدند. انتخاب preset، ماه، سال و چرخ ماه مدل را به‌روز کردند.
- [x] Loading در مرورگر: spinner دیده شد، فیلد و trigger disabled شدند، wrapper کنترل `aria-busy=true` داشت و پیام status در tree ظاهر شد؛ پنل باز نشد و snippet اجرایی `loading` را درج کرد.
- [x] DoD مرورگر و گیت‌های فنی کامل است؛ وضعیت کاتالوگ `Implemented` است. صفحه‌خوان مستقل اجرا نشد؛ Accessibility tree و صفحه‌کلید مرور شدند.
- [x] Build موفق است؛ bundle جاوااسکریپت 626.87KB هشدار بالای 500KB می‌دهد.

## Date Picker — تازه‌سازی DoD و رفع مغایرت ledger (2026-11-07)

- [x] مرجع زندهٔ مرجع طراحی و صفحهٔ Norato در viewport یکسان 1280×720 و 390×844 بررسی شدند. Desktop: قاب مرجع طراحی برابر 628×300px و Norato برابر 584×302px (محدود به ستون صفحه). Mobile: مرجع طراحی برابر 327×300px، Norato برابر 320×288px؛ عرض سند Norato برابر 375px و بدون overflow است.
- [x] نمونهٔ تقویم Norato در موبایل bounded است: card برابر 256px عرض دارد؛ روزهای تقویم هدف 48×48px و سلول‌های ماه/سال ارتفاع 48px دارند. Wheel سه کنترل RTL با ارتفاع 56px و پنل 358×117px دارد؛ پنل موبایل در viewport جا می‌شود.
- [x] هر هفت mode باز و بررسی شدند: Single، Range، Range + Presets، Date & Time، Month، Year و Wheel. مقدار کنترل‌شده با انتخاب روز، بازهٔ وارونه (که به ترتیب زمانی نرمال شد)، preset «این هفته»، تغییر ساعت به 15:30، انتخاب ماه/سال و تغییر سال/ماه در Wheel به‌روز شد. Native `select` وجود ندارد.
- [x] RTL و ترتیب شنبه تا جمعه از راست، صفحه‌کلید ArrowLeft و PageDown، Escape و بازگشت فوکوس، نام dialog/grid/day در AX tree، تاریخ disabled، `aria-invalid` و اتصال پیام خطا، و `aria-busy`/status/disabled شدن کنترل در Loading بررسی شدند.
- [x] `pnpm check:tokens`، `pnpm check:catalog` (49 مسیر/قرارداد)، Vue typecheck، production build و `git diff --check` پس از تازه‌سازی دوباره اجرا و موفق شدند.
- [ ] صفحه‌خوان مستقل در این بررسی اجرا نشد؛ نام‌گذاری، نقش‌ها، وضعیت‌ها و صفحه‌کلید در Accessibility tree مرور شدند.

## گزارش این درخواست — اصلاح گالری States کامپوننت Radio (2026-11-01)

- [x] مرجع زنده مرجع طراحی `#radio` در viewport دسکتاپ 1195×765 و موبایل 390×844 بررسی شد. بخش States مرجع پنج کارت عنوان/شرح دارد و نسخهٔ Norato اکنون همان سلسله‌مراتب را با palette و accentهای معنایی Norato نشان می‌دهد.
- [x] هشت کارت Norato حفظ شده‌اند: پنج Radio Button و سه Radio Field. خانواده و شرح فارسی خوانا هستند؛ نمایش کپسول عمومی از بخش States حذف شده و نمونهٔ واقعی فقط در Preview/playground باقی مانده است.
- [x] Desktop: مرجع طراحی کارت‌های 151.5×88.6px در چهار ستون دارد؛ Norato به‌علت ستون مستندات سه ستون با عرض 174.7px و ارتفاع 71.6–90.8px دارد. ارتفاع نزدیک مرجع است؛ artwork کنترلی کشیده وجود ندارد.
- [x] Mobile: viewport برابر 390×844؛ مرجع طراحی در دو ستون کارت‌های 158.5×88.6px دارد؛ Norato دو ستون با عرض 167.5px و ارتفاع 68.4–87.6px دارد. عرض سند 375px، جهت RTL، هشت کارت و نبود overflow افقی بررسی شد.
- [x] رگرسیون: Button با 11 نمونهٔ generic و Select با 18 کارت اختصاصی حفظ شدند؛ انتخاب Radio در playground کار کرد و مقدار اولیهٔ ماهانه بازگردانده شد. ردیف‌های قابل کلیک 48px هستند.
- [x] گیت‌های `pnpm check:tokens`، `pnpm check:catalog`، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` موفق شدند. Build bundle برابر 640.11KB دارد و هشدار بیش از 500KB می‌دهد.
- [x] commit `6091212` به GitHub push شد و `origin/master` با HEAD محلی برابر است.
- [ ] DoD کامل Radio هنوز باز است: ماتریس بصری 20 ترکیب و screen-reader مستقل بررسی نشده‌اند.

## گزارش این درخواست — اصلاح گالری States کامپوننت Switch (2026-11-01)

- [x] رندر States به کارت‌های ایستای عنوان/توضیح مطابق مرجع طراحی تغییر کرد؛ پنج Switch و سه Switch Field، نام خانواده، متن فارسی و accent معنایی Norato حفظ شدند. کپسول تزئینی عمومی در این گالری وجود ندارد.
- [x] مقایسهٔ مرورگر desktop در 1195×765: مرجع طراحی چهار ستون و Norato سه ستون به‌علت عرض محدودتر ستون مستندات؛ mobile در 390×844 هر دو دو ستون‌اند. کارت Norato موبایل 167.5×87.6px، مرجع طراحی 158.5×88.6px؛ سند 375px، RTL و بدون overflow افقی. خود Switch در نمونهٔ بالای صفحه قبلاً سنجیده و بدون کشیدگی (track متوسط 40×24px، target 48×48px) ثبت شده است.
- [x] playground زنده بعد از تغییر renderer با نام accessible «اعلان‌ها» از Value 0 به 1 رفت و متن وضعیت و نمونهٔ کد updated شد؛ مقدار در UI موقتاً روشن ماند تا مورد آزمون دیده شود.
- [x] Radio پس از renderer مشترک در صفحهٔ واقعی باز شد؛ هشت entry، family captions و توصیف‌های معنایی بدون خطای render حاضرند؛ playground با مقدار ماهانه در AX tree دیده شد.
- [x] `pnpm check:tokens`، `pnpm check:catalog` (49 route/contract)، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` موفق شدند. Build bundle جاوااسکریپت 641.48KB است و هشدار حجم بالای 500KB می‌دهد.
- [ ] بررسی رگرسیون کارت‌های Button و Select در مرورگر فعلی و مقایسهٔ desktop/mobile نهایی، pointer hover و صفحه‌خوان مستقل هنوز انجام نشده‌اند؛ DoD کامل Switch باز است.
- [x] رگرسیون مرورگری پس از اشتراک state-card renderer: Radio صفحه و هشت کارت خانواده/شرح حاضرند؛ Select درخت AX و 18 شرح حالت/خانواده حفظ شده؛ Button صفحه و 11 گالری/قرارداد variants همچنان حاضرند. تعامل playground Radio با این درخواست تغییر نکرد.
- [x] تکمیل بررسی رفتاری Switch در adapter زنده: هر شش ترکیب اندازهٔ کوچک/متوسط/بزرگ × خاموش/روشن در DOM دیده شدند؛ trackها به‌ترتیب 32×20، 40×24 و 48×28px و هدف در هر شش حالت 48×48px بود. RTL برقرار است.
- [x] Hover با اشاره‌گر روی Switch track مرز آبی معنایی را نشان داد. Space مقدار false→true و Enter مقدار true→false را تغییر داد. Error مقدار `aria-invalid=true`، متن خطا و هر دو شناسهٔ description/error را در `aria-describedby` داشت. Disabled واقعی بود و با حالت checked track غیرفعال‌شده و مقدار روشن را حفظ کرد.
- [x] کنترل playground پس از بررسی به وضعیت اولیه برگشت: خاموش، فعال، بدون خطا و اندازهٔ متوسط.
- [ ] ماتریس کامل ۳۰ ترکیب دیداری و حلقهٔ فوکوس واقعی با صفحه‌کلید/اندازه‌گیری مرورگر همچنان باز است؛ تمرین جداگانهٔ صفحه‌خوان اجرا نشد. تلاش برای batch تمام حالت‌ها به پایان مهلت مرورگر خورد و نتیجه به‌عنوان PASS ثبت نشده است.

## گزارش این درخواست — ماتریس Variants کامپوننت Switch (2026-11-01)

- [x] ترتیب Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze پیش از implementation ثبت شد.
- [x] Renderer اختصاصی Variants از ۳۰ سلول Switch و ۶ سلول Switch Field ساخته شده است؛ گالری `inert` و `aria-hidden` است و playground واقعی جدا باقی مانده.
- [x] اندازه‌های track به توکن و CSS adapter وصل‌اند: ۳۲×۲۰، ۴۰×۲۴ و ۴۸×۲۸px؛ موقعیت knob با logical inline و جهت RTL تنظیم شده است. Hover، focus، disabled و error از توکن‌های معنایی Norato استفاده می‌کنند.
- [x] رندر محلی صفحه Switch و ساختار کارت‌های مرجع مرجع طراحی در مرورگر دیده شد. رنگ on در مرجع طراحی تیره و در قرارداد Norato آبی برند است؛ پالت Norato حفظ شد.
- [x] قرارداد Switch اصلاح شد تا newlineهای literal خراب حذف شوند و ماتریس جدید و محدودیت‌های شواهد را مستند کند.
- [ ] مقایسهٔ ماتریس Variants در viewport دقیقاً برابر مرجع طراحی، viewport موبایل/overflow و اندازه‌گیری DOM هنوز انجام نشده است.
- [x] `pnpm check:tokens`، `pnpm check:catalog`، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` پس از اصلاح قرارداد موفق‌اند؛ chunk اصلی 646.51KB و بالاتر از هشدار 500KB است.
- [ ] DoD کامل Switch بسته نیست؛ صفحه‌خوان مستقل و اندازه‌گیری واقعی focus ring و بررسی ماتریس در موبایل باز هستند.
- [x] commit `bbb95f0` با ماتریس ۳۶ سلولی و شواهد فعلی به `origin/master` push شد؛ HEAD محلی و remote برابرند.

## Input — design reference visual comparison and eight-adapter DoD progress (2026-11-01)

- [x] Reviewed actual `#component-input` render in the local Vue app and live design reference reference at matching desktop 1280×900 and mobile 390×844 viewport sizes. Top specimen retains the single email input, helper, Default marker, dotted/glass frame, Norato color palette and now includes the trailing email icon.
- [x] Desktop Norato frame/field: 584×288px and 324×49.6px; mobile: 320×288px and 310.4×49.6px. design reference mobile frame/field: 327.2×300px and 321.4×41px. Norato's larger control target remains at least 48px; its dimensions are column-constrained rather than vertically stretched.
- [x] Mobile Input family gallery renders eight recognizable subtype specimens with no internal/document horizontal overflow; document width is 375px at a 390px viewport. RTL document language/direction are `fa`/`rtl`.
- [x] Browser interactions: password show/hide; phone `+98`; OTP digit entry, full paste, arrows and Backspace focus; Persian amount entry/grouping/words (`۱۲۳۴۵` → `۱۲٬۳۴۵`); number increment and keyboard bounds (`98→99`, `99→99`); Search clear and Ctrl+K focus without stealing focus from another input; textarea max length/counter (`179→180`) and vertical resize.
- [x] Shared playground states: all eight controls disable for disabled/loading; eight live loading messages and eight error alerts were present; all error controls expose `aria-invalid`; action buttons measure 48×48px; keyboard-focused password action has visible outline with 4px offset.
- [x] Default preview restored after interactions; browser console had no errors. `pnpm check:tokens`, `pnpm check:catalog` (49 entries), `pnpm --dir apps/vue build` (includes Vue typecheck) and `git diff --check` passed. Production JS main chunk is 673.58KB and Vite reports its >500KB advisory.
- [ ] Full size/state matrices, OTP length-five per-cell keyboard, stacked Number layout and independent screen-reader review remain open in `specs/013-design-system-parity/input-checklist.md`.
- [x] Input implementation checkpoint `663af1f` pushed to `origin/master`; local and remote refs matched immediately after push.
- [x] 2026-11-08 live desktop follow-up: found and corrected the RTL Textarea placeholder/value alignment; browser screenshot confirms Persian placeholder and entered text align right. LTR alignment was browser-verified on 2026-11-09 below. Input DoD remains open for full state screenshot parity and independent screen-reader review.
- [x] 2026-11-09 matched 1907×907 browser comparison: preview frame, dotted glass treatment, Default marker and capsule field are present in both pages. Norato retains the user-approved Persian placeholder and title-adjacent envelope, with sample address/helper omitted. The Norato frame measures about 580×288px vs 632×300px in the reference; content-column widths differ. Norato’s inert States section uses 41 family-specific field examples while the reference uses ten descriptive state cards. No stretch or desktop overflow was visible; mobile recapture, full visual-state parity and independent screen-reader review remain open.
- [x] 2026-11-09 live Textarea LTR check: selected چپ‌چین, entered Persian sample, and confirmed the text begins at the left edge while the generated Vue snippet changes to `textareaDir = ref('ltr')` and `dir="ltr"`. Cleared the sample and restored RTL in both control and snippet.

## گزارش پیگیری — ممیزی مرورگری Switch (2026-11-01)

- [x] صفحهٔ محلی Switch از نظر ساختار مرور شد: preview جدا، playground اجرایی و ۹ بخش قرارداد؛ مرجع طراحی در `مرجع طراحی همان چینش preview و سه اندازه را نشان می‌دهد. مرجع طراحی رنگ روشن مشکی دارد؛ Norato در اصلاح 2026-11-02 زرد برند خود را برای حالت روشن به کار می‌برد.
- [x] در عرض viewport دسکتاپ 1280px، DOM ماتریس دقیقاً 30 نمونه Switch و 6 نمونه Switch Field دارد؛ گالری هیچ عنصر تعاملی ندارد، جهت RTL است، trackها 32×20/40×24/48×28px هستند و سند 1265px از عرض viewport بیرون نمی‌زند.
- [x] adapter واقعی در هر سه اندازه هدف 48×48px دارد. Space روشن و Enter خاموش کرد؛ فوکوس واقعی حلقهٔ 2px با offset چهارپیکسلی داشت. حالت خطا `aria-invalid=true` و اتصال description/error در `aria-describedby` را دارد؛ حالت disabled غیرفعال است. نمونه به وضعیت پیش‌فرض بازگردانده شد.
- [x] آزمون hover قبلی مرز آبی معنایی `rgb(19, 79, 137)` را گزارش کرد؛ در اصلاح 2026-11-02 مرز hover به توکن زرد Norato تغییر کرد. آزمون تعاملی hover پس از تغییر هنوز انجام نشده است.
- [ ] viewport موبایل برای خود ماتریس در ابزار مرورگر این اجرا قابل تنظیم نبود؛ مقایسهٔ بخش Variants در viewport کاملاً یکسان، آزمون ترکیبی همهٔ stateها و صفحه‌خوان مستقل نیز باز هستند. Switch کامل اعلام نمی‌شود.
- [x] کاربر تعهد داده هر تغییر Git به مخزن برود؛ این تغییر مستنداتی پس از بررسی گیت‌ها commit/push و برابری remote تأیید می‌شود.

## گزارش پیگیری — مقایسهٔ هم‌اندازهٔ Radio با مرجع طراحی (2026-11-01)

- [x] رندر مرجع طراحی و Norato در viewport برابر 1280×720 در بخش Variants بررسی شد. مرجع طراحی چهار specimen کارت‌مانند و selector اندازه/checked/state را در گالری 636px دارد؛ Norato پنج گروه و 20 ترکیب قرارداد را در ستون 584px نشان می‌دهد.
- [x] هندسهٔ DOM ماتریس Norato تأیید شد: 20 حلقه، اندازهٔ ذاتی 16×16 و 20×20px، target سلول 128×48px، RTL و صفر فرزند interactive. screenshot همهٔ پنج state group، حلقهٔ دایره‌ای و نقطهٔ انتخاب آبی را نشان می‌دهد.
- [ ] ماتریس کامل Radio هنوز در viewport موبایل مرور نشده؛ 20 ترکیب کامل و مقایسهٔ مستقل صفحه‌خوان نیز باز هستند. DoD بسته نمی‌شود.

## گزارش پیگیری — OTP چهاررقمی در Input (2026-11-01)

- [x] مرورگر محلی روی viewport دسکتاپ 1280×720 بود. انتخابگر طول دقیقاً چهار خانه نشان داد؛ Paste چهار رقم هر چهار خانه را پر کرد و فوکوس را به آخرین خانه برد.
- [x] ورود متوالی با کیبورد چهار رقم را به‌ترتیب ثبت کرد. ArrowLeft و ArrowRight فوکوس را یک خانه جابه‌جا کردند. Backspace رقم خانهٔ فوکوس‌شده را پاک کرد؛ Backspace روی خانهٔ خالی به خانهٔ قبلی برگشت و رقم قبلی را حذف کرد.
- [x] پس از آزمون طول به ۶ بازگشت، مقدار هر شش خانه پاک شد و فهرست خطاهای مرورگر خالی بود.
- [x] طول پنج خانه در مرورگر: paste همهٔ پنج رقم را در پنج خانه ثبت کرد و فوکوس را به خانهٔ آخر برد؛ ArrowLeft فوکوس را یک خانه جابه‌جا کرد و Backspace رقم خانهٔ فوکوس‌شده را پاک کرد. مرورگر خطا نداشت و playground با OTP شش‌رقمی خالی بازیابی شد.
- [ ] وضعیت‌های اختصاصی error/disabled/success برای OTP، توالی ترکیبی stateها و صفحه‌خوان مستقل هنوز باز هستند؛ DoD خانواده Input بسته نیست.
- [x] مستندات Input، دفتر ۴۸ خانواده و Request Validation به‌روز شدند. Number refinement پیش‌تر در commit `e9364e2` روی `origin/master` منتشر و هم‌ترازی remote تأیید شده است.

## Time Picker — design reference comparison and adapter DoD progress (2026-11-01)

- [x] design reference and Norato rendered at matching desktop 1280×720 and narrow mobile 499×932 viewports. Desktop frame/card: design reference 636×300 / 138×179px, Norato 584×288 / 136×172px (column constrained); mobile: design reference 436×300px, Norato 452×288px. Norato document width 484px; no horizontal overflow or vertical stretch.
- [x] Default specimen is inert, uses a bounded dotted glass frame, Default marker, two compact columns and Norato blue selection. The live page has the Button-style preview, executable Vue playground/code and all nine contract sections.
- [x] Single and range v-model; Columns, Columns 12h, Wheel, Slots and Range modes; 24-hour canonical values; 12h AM/PM mapping; 5 and 15 minute steps; explicit disabled slot; chronological range crossing all verified in the live browser.
- [x] Popup tested above/below anchor and within viewport at both widths; outside click closes, Escape returns focus; ArrowDown/Enter select; 48px minimum targets and visible 2px focus ring/4px offset observed.
- [x] Error/required/helper associations, `aria-invalid`, disabled, loading/`aria-busy`, LTR values within RTL page, all nine page sections and synchronized example inspected.
- [ ] Independent screen-reader review and final technical gates remain. Exact viewport 390px was unavailable in this browser; mobile comparison used 499px (below the 600px responsive breakpoint). DoD remains open until technical gates pass.

## File Upload — design reference comparison and adapter DoD progress (2026-11-02)

- [x] design reference preview and Norato inert specimen reviewed at desktop 1280×720; design reference frame 636×300px, Norato frame 584×288px because the component-doc content column is narrower. At mobile 499×932, Norato specimen is 320×288px; the document remains inside the viewport. Inner dropzone is bounded, the marker sits at the upper-right, and the sample stays inert.
- [x] Live File Upload page has independent Preview, Vue playground/copyable usage, and all nine contract sections. Catalog status is Adapted and package exports include all four adapters.
- [x] Tile geometry is 112×112px and avatar is 96×96px; action target measured 48×48px. Persian page and filename direction are separately set; document widths at 1280 and 499 did not exceed their respective viewport widths.
- [x] Controlled queue fixture traversed selected → uploading (42% host-provided progress) → error (visible reason) → retry/uploading → cancel/removal. No simulated network request or automatic progress is used. Dropzone Enter key left focus on the button and matched `:focus-visible`; disabled checkbox set both the native file input and dropzone button to disabled. Compact mode was selected in the live playground and measured 452×125px on the 499px-wide narrow viewport; text wraps without clipping or horizontal overflow.
- [ ] Real file chooser selection by pointer/keyboard, browser drag/drop payload, accepted/rejected MIME/extension, size, max-count and single-mode cases were not verified: this browser wrapper lacks file injection/filechooser support and its evaluate context lacks `File`/`DataTransfer` constructors. No actual screen-reader session was available; drag-over and reduced-motion were not exercised.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 records/contracts), Vue typecheck and production build pass. Build emits Vite advisory for its 726.55KB JS chunk. `git diff --check` ran without whitespace errors (Git emitted line-ending normalization notices).
- [x] GitHub push and `git ls-remote` parity both resolve to `2c399b0f5995dbc3a33dee0cf59c1ce8eaac25e6`.
- [ ] File Upload DoD stays open until real chooser/drag/validation behavior is browser-verified.
## File Upload validator extraction — 2026-11-01

- [x] Current repository state inspected; existing design reference comparison, Button-style page, browser behavior record, and unresolved native-file browser checks were reviewed before changes.
- [x] Extracted file type/size/count decisions into a pure typed validator used by the Vue adapter; malformed numeric limits now fail closed and an empty accept value follows the native unrestricted convention.
- [x] Added Node built-in tests for accepted extension/MIME/wildcard files, exact size boundary, mixed valid/rejected batches, each rejection reason, count capacity, single mode, empty accept, and invalid limits.
- [ ] Browser checklist still fails for native chooser selection, drag payload and actual rendered validation feedback because the available CUA browser context cannot inject files or create browser File/DataTransfer objects. Existing browser layout checks remain valid; this request's full browser checklist is not claimed as passed.

## File Upload preview and chooser recheck — 2026-11-07

- [x] Removed duplicate/shadowed specimen branch; desktop 1280×720 and mobile 390×844 show Default marker, dotted frame, centered dropzone and yellow SVG affordance. Norato mobile document width is 375px with no overflow.
- [x] Matched comparison: design reference/Norato desktop frame 636×300 / 584×288px and inner dropzone 367×154 / 380×160px. Mobile frame 327×300 / 320×288px and inner dropzone 321×154 / 302×160px; column-limited frame size is not mistaken for a stretch defect.
- [x] Real browser chooser verified pointer and keyboard activation (Enter/Space), PNG acceptance, unsupported type, 10,000,001-byte rejection, count rejection, single-file replacement, multiple count ceiling and native input reset.
- [x] File Upload playground exposes `multiple`; changing the selection mode updates the generated Vue snippet. Both runtime and inert icons use SVG and Norato yellow/dark; the lower specimen wash is neutral.
- [ ] Native OS drag/drop payload, independent screen-reader review, reduced-motion, and full combined keyboard/state matrix remain open. File Upload maturity stays Adapted.
- [x] `pnpm test:file-upload` passes 5/5; `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), Vue typecheck/build and `git diff --check` pass. Vite warns that the production JS chunk is 817.78KB (>500KB).
- [x] Commit `7ac56caf0eedb707ce6567f648e247fea88a7d0d` is pushed to `origin/master`; `git ls-remote` returned the same hash and the worktree was clean.

## Navbar — implementation checkpoint (2026-11-02)

- [x] Added and publicly exported `NoratoNavbar`, a standalone Button-style interactive playground, copyable Vue usage, an inert bounded specimen, 20 link state variants, 9 contract sections, responsive token rules, primitive decision, catalog mapping and Figma rules.
- [x] Default local page reviewed at 1280×720 with design reference's Navbar reference reviewed in the available browser. design reference reference defines 6 parts/41 variants and confirms the default Website/Bar composition, right-side brand, links after brand, left actions, 48px focus outline behavior, and mobile drawer. Norato keeps its own blue/yellow brand palette.
- [x] Local DOM confirms RTL, no document overflow at 1280px, bounded 584×65px default preview row, 48px nav-link minimum targets, and exactly one `aria-current="page"` link. A Centered/Floating/Underline configuration remains within its 558px local bar. Enter opens the nested menu; Escape closes it and restores trigger focus. Nested links report the current item with `aria-current="page"`.
- [x] design reference and Norato were compared at the same 1280×720 viewport. design reference's static frame was about 628×296px with a 574×50px row; Norato's Button-style content column constrained its frame to 584×288px and the static row to about 514×60px. Difference follows Norato's narrower documentation column and 48px interaction target. All nine App/Website/Centered × Bar/Floating/Transparent combinations measured without horizontal overflow; centered nav stayed exactly centered in its bar.
- [x] Review found Back mobile type would hide every menu trigger along with its desktop bar. A separate 48px drawer trigger was added to the Back title row and the CSS hide rule was scoped to the hidden top bar.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), Vue typecheck, production build and `git diff --check` pass after catalog validator was extended to recognize the new usage example. Vite still warns that the app JS chunk exceeds 500KB (768.04KB).
- [ ] Same-size 390px/320px mobile comparison, mobile drawer focus/Escape/outside behavior, controlled search/Back event, full link-state matrix, mobile header matrix, outside action and independent screen-reader review remain open because this browser interface cannot set a custom narrow viewport. Navbar is not marked `Implemented` until these required checks are complete.

## Sidebar — implementation checkpoint (2026-11-02)

- [x] Added public NoratoSidebar Vue adapter, Button-style Playground, copy example, inert specimen with dedicated bounded CSS, 42-part design reference contract, token/primitive/catalog/export records, and API/accessibility docs. Legacy .sample-sidebar is no longer rendered; dedicated selectors have intrinsic icon sizes and fixed panel bounds.
- [x] design reference reference inspected at 1280×720: six component parts, 42 variants, 3px right active marker, tooltip labels when collapsed, 2px focus ring, max two submenu levels. Local 1280×720: document 1265px, specimen frame 494×288 (column constrained), specimen panel 220×216; design reference frame about 628×296 and panel about 214×220. The local panel retains its proportions rather than stretching across the frame. Interactive links have 48px block size and exactly one current page in the default playground.
- [x] At local 499×932, mobile trigger opened a labeled Reka Dialog containing nav links; close button closed it. At desktop, collapsing retained 48px links with accessible labels and titles; control restored to expanded.
- [ ] Exact 390px/320px compare could not be set in available browser. Escape, outside click/focus restoration, expanded/collapsed × Glass/Bar combinations, all design reference state matrix, screen reader and host route behavior require more verification; maturity stays Adapted.
- [ ] Required technical gate commands being rerun after final geometry adjustment.

## Sidebar — DoD browser record (2026-11-02)

- [x] Existing design reference desktop comparison and local desktop/mobile interactions recorded in Sidebar checkpoint above; geometry was corrected after observed vertical stretch.

## Sidebar — selection follow-up (2026-11-09)

- [x] Selecting nested `بایگانی` in the playground updates the active item and status without leaving the Sidebar docs page; the parent `پروژه‌ها` label stays visible and the active child uses a distinct pale-yellow surface.
- [ ] 390/320px geometry, full Glass/Bar × expanded/collapsed state matrix, mobile drawer dismissal/focus restoration and independent screen-reader review remain open.
- [ ] The browser bridge became unavailable during the final rerender attempt (rowser.user is unavailable), so the exact post-adjustment screenshot and remaining keyboard/modal/320px cases are unverified. DoD remains open; no completion claim.

## Sidebar — Bar, disabled and collapsed follow-up (2026-11-09)

- [x] Fresh desktop browser review confirmed Bar style and its pale-yellow active marker. Toggling `غیرفعال` removed links from link semantics and disabled the collapse button; restoring the control brought links back.
- [x] Collapsing changed the button's accessible name/state while item links retained their accessible names; expanding restored section headings, nested links and footer content.
- [ ] Exact 390px/320px comparison, mobile dismissal/focus restoration, keyboard activation, complete visual state matrix, and independent screen-reader review remain open in `specs/013-design-system-parity/sidebar-checklist.md`.

## Sidebar — icon and palette follow-up (2026-11-09)

- [x] Replaced collapse/expand and mobile menu/close glyph characters with fixed 20px inline SVG icons. The two direction-specific collapse states preserve the button's accessible names and `aria-expanded` behavior.
- [x] Changed the Sidebar brand and user marks to Norato pale yellow with primary text; the contrast-focused keyboard outline continues using its dedicated contrast token.
- [x] Fresh browser screenshot confirms the inert specimen and live Sidebar brand/avatar use the pale-yellow token with primary text. Toggling collapse changed the accessible name and collapsed state; expanding restored section headings and nested links.
- [x] Post-change token/catalog checks, Vue TypeScript validation, production build, `git diff --check`, and repository scan for the prohibited reference name passed.
- [ ] Mobile menu/close icons, exact 390px/320px layout, modal dismissal/focus restoration and screen-reader review remain unverified; see `specs/013-design-system-parity/sidebar-checklist.md`.

## Tabs — implementation checkpoint (2026-11-02)

- [x] Added exported controlled `NoratoTabs` on the installed Reka Tabs primitive, an inert design reference-mapped preview, a Button-style page/playground, snippet, nine-section contract and semantic API docs.
- [x] Fresh design reference/local renders inspected at 390×844; exact size/orientation interaction, RTL ArrowLeft/End, disabled-tab skipping, focus style, 390/320 responsive dimensions and technical gates recorded below.


## Tabs — DoD browser and technical record (2026-11-02)

- [x] design reference live page reviewed at 1280×720 and 390×844: 4 parts, 39 variants, Line underline, Soft surface, 3 sizes, 2 orientations, RTL order and 2px focus ring. Norato live page rendered at matched 390×844 and 1280×720; the 390px document width stays within the viewport and its specimen frame is 343×136 with a 317×49 tablist. At 320px the 262×49 preview tablist retains four 48px targets with internal horizontal scrolling and no document overflow. The page structures differ, so compare the component treatment rather than overall section height.
- [x] Live DOM confirms 4 triggers/4 panels, one selected trigger, matching active panel, disabled tab semantics and 48px targets for Small, Medium, Large. RTL ArrowLeft moves to the visually left next tab; End focuses/selects last enabled tab; focus ring computes to 2px blue outline + 2px yellow halo. Vertical/Soft at 429px has no horizontal document overflow.
- [x] Copyable example displays a valid `</script>` closing tag. Preview has `inert` and `aria-hidden`; no interactive descendants.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, `git diff --check` pass. Build reports advisory that the JS chunk exceeds 500KB.
- [ ] Independent screen-reader review and exhaustive cross-product of all variant/state combinations remain open; keep maturity `Adapted`.

## Tabs — follow-up browser review (2026-11-09)

- [x] Desktop live playground: Soft + Large + Vertical remains legible without visible stretching/clipping. Global disabled disables all four tabs and is reversible; the individually disabled tab remains disabled after toggling global disabled off.
- [x] Vertical ArrowDown from “همه” selects “فعال” and updates the associated panel. Restored playground to Line/Medium/Horizontal, enabled, “همه”.
- [x] Updated component-contract indicator wording to match the yellow active indicator/surface in the runtime styles.
- [x] Live AX matrix covered all 24 style × size × orientation × global-disabled combinations; each state retained four tabs, exactly one selected trigger, one linked panel, and the expected disabled count (one individually disabled or all four globally disabled). Restored Line/Medium/Horizontal, enabled, “همه”.
- [x] In the default live layout, ArrowLeft follows RTL order and skips the disabled tab while updating the panel; screenshot confirms high-contrast focus plus yellow halo, yellow-tinted enabled hover and neutral disabled hover.
- [ ] Exhaustive hover/focus state combinations and independent screen-reader review remain unverified. Prior narrow viewport results are listed in the 2026-11-02 record; fresh 320/390px captures were not taken in this follow-up.

## Breadcrumbs — implementation checkpoint (2026-11-02)

- [x] Added public `NoratoBreadcrumbs`, Button-style playground, copyable usage and nine-section contract; catalog readiness is Adapted.
- [x] design reference/Norato same-viewport desktop and mobile render compared. Desktop Norato specimen is 584×136px with a 212×48px path; 390px specimen 343×136px/document 375px; 320px document remains 320px with internal path scroll. 48px links/disclosure, 2px keyboard focus, RTL separators, current-page ARIA, pointer/Enter disclosure and 3 hidden middle links verified; console error list empty.
- [x] Token/catalog/typecheck/build/diff gates passed; the JS chunk is 800.06KB and Vite warns above 500KB.
- [ ] Independent screen-reader review and exhaustive visual combination matrix remain open; maturity stays Adapted.

## Breadcrumbs — glass current item surface (2026-11-09)

- [x] Browser exercised Small sizing, Glass style and Slash separator together. The current-page pill incorrectly used the blue information surface; changed it to a raised neutral glass surface with Norato elevation, preserving the yellow disclosure.
- [x] Fresh local screenshot confirms the neutral current-page surface and RTL trail.
- [x] Token, catalog, Vue typecheck, production build and diff checks pass; build still reports the existing large JS chunk advisory.
- [ ] Full 42-case visual matrix and independent screen-reader review remain open.

## Breadcrumbs — composed configuration audit (2026-11-09)

- [x] Browser exercised all 24 combinations of style, size, separator and collapse, checking the selected states after every change. Screenshot samples for Glass/Small/Slash and Glass/Large/Slash show a neutral current item, yellow disclosure and RTL flow.
- [x] Disclosure opens to expose all three hidden links by pointer and closes by Enter; the hidden links leave the accessibility tree when closed. Playground controls were restored to Plain/Medium/Chevron/collapsed.
- [ ] Hover/focus visual cross-product and independent screen-reader review remain open.

## Pagination — implementation checkpoint (2026-11-02)

- [x] Added public `NoratoPagination`, Button-style playground, copyable controlled Vue usage and nine-section contract; catalog maturity is Adapted.
- [x] Browser evidence before final specimen CSS/RTL chevron adjustment: page 5 selection updates controlled state and `aria-current`; first/last boundaries disable navigation; focus ring is 2px; live targets are 48px; mobile Numbers scroll internally while Simple fits without document overflow; no console errors.
- [x] Removed the legacy static pagination sizing rules that forced the specimen to live-control dimensions. Updated the inert specimen to compact 32px design reference-like page cells; corrected chevron direction from `dir`.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 records/contracts), Vue typecheck, production build and `git diff --check` pass after final source edits. Production build has a 806.97KB JS chunk advisory.
- [ ] Browser re-render and matched design reference/local geometry after the compact specimen and RTL-chevron changes, exhaustive page-window/size/mode combinations, and independent screen-reader review remain open. Keep readiness `Adapted`; DoD is not closed.

## Primary accent and dropdown consistency — implementation checkpoint (2026-11-02)

- [x] Primary selected/checked/current/progress styles in the Vue package and visible inert samples now use Norato yellow with dark foregrounds; blue remains for informational icons and link/status semantics.
- [x] Replaced browser-native option controls in Date Picker wheel/date-time and all docs playground filters/settings with Norato custom dropdowns. Source scan finds no native `<select>`/`<option>` tags in the Vue runtime or app.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build and `git diff --check` pass. Build reports an 806.90KB JS chunk advisory.
- [x] Live browser confirms 429px page width without document overflow; zero native selects in the DOM; custom dropdown ArrowDown/Enter selection; Date Picker custom listbox updates wheel year and date-time hour without closing its parent; Escape closes the menu and returns focus; yellow selected date/current page use dark text; browser console has no errors.
- [ ] Same-viewport design reference/Norato desktop and narrow mobile comparison, exhaustive interaction/state matrix and independent screen-reader review remain open. Keep DoD open.

## Playground dropdown RTL alignment — implementation checkpoint (2026-11-02)

- [x] Removed the explicit LTR direction override from shared playground dropdown option rows; Persian labels now flow RTL and align right.
- [x] At 341px mobile width, opened the Input password-strength dropdown and visually confirmed selected and unselected options align right. Keyboard behavior and RTL page layout remain intact.
- [x] Token/catalog checks, Vue typecheck/build and diff check pass; build retains the large-JS-chunk advisory.

## Navbar icons, active state and chevron — implementation checkpoint (2026-11-02)

- [x] Replaced the demo's home/grid Unicode glyphs and menu chevron with consistently sized SVG icons; chevron rotates when its menu opens.
- [x] Current/open links use Norato yellow with dark text; hover is neutral and focus remains accessible.
- [x] Browser render confirms SVG icons, open menu/rotated arrow, current state colors and no horizontal page overflow. Vue typecheck/build pass; only the existing large-JS-chunk advisory remains.

## Switch colors and focus — 2026-11-02

- [x] Screenshot issue traced to Switch focus contrast and found stale blue on-state/hover styles in the static matrix; Norato Switch accent is yellow.
- [x] Updated live adapter focus to dark outline with yellow halo, interactive preview checked knob to dark, and static Switch/Switch Field matrix checked/hover/focus styles to yellow/dark.
- [x] After the live rerender, browser-computed styles confirm the active adapter is yellow with a dark knob and keyboard focus shows a 2px dark outline with a 2px yellow halo. The checked static matrix cell also computes to yellow with a dark knob; the live adapter was restored to off. RTL remains in effect.
- [ ] Switch family DoD remains open for exhaustive live combined-state coverage and independent screen-reader review; mobile matrix comparison was completed in the 2026-11-09 follow-up.

## Checkbox focus color correction — 2026-11-02

- [x] Screenshot shows a selected checkbox with a blue outer focus outline. The input's own :focus-visible rule used --norato-color-focus-contrast, which resolves to Norato blue.
- [x] Replaced the Checkbox outline with --norato-color-text-primary; retained the 2px yellow focus halo and yellow selected fill with dark checkmark.
- [x] Browser keyboard check after rerender: selected Checkbox computes to yellow fill `rgb(253, 193, 1)`, dark checkmark `rgb(26, 26, 26)`, dark 2px outline and yellow 2px halo; `:focus-visible=true` and RTL is intact. The control was restored to unchecked afterward.

## Range thumb alignment and focus — 2026-11-02

- [x] Screenshot matches the Range playground focus state. RTL inset: 50% overconstrained both physical sides, shifting the visual thumb away from its 48px focus target; outline on the 48px hit area also made the ring oversized.
- [x] Centered the visual thumb using a physical center anchor, kept the 48px hit target, and moved the dark outline/yellow halo to the visual thumb.
- [x] Browser rerender confirms target bounds are 48×48px, the 16px visible knob is centered within the target, focus-visible draws a dark 2px outline and yellow halo on the visible knob, and keyboard arrows change 60→61→60. The browser screenshot shows the knob and ring concentric in RTL.

## Button specimen equal sizing — 2026-11-02

- [x] Primary, Secondary and Cancel use the same token-derived 128px × 60px specimen frame; the first control no longer reads as a circle.
- [x] All three frames use a 2px stroke, with yellow Secondary and neutral Cancel borders.
- [x] Browser at `http://127.0.0.1:5174/#component-button`, 1280×720: all three preview frames measure 128×60px, RTL is preserved, and computed borders measure 2px. Screenshot confirms the first Primary button is visibly pill-shaped; Cancel remains neutral and Secondary yellow.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), `pnpm --dir apps/vue typecheck`, production build and `git diff --check` pass. Build retains the advisory that the app JS chunk exceeds 500KB.

## Breadcrumbs — arrow direction correction (2026-11-02)

- [x] Bidi-sensitive chevron glyphs in the runtime component and inert top specimen were replaced with fixed left-pointing SVG chevrons; the specimen home marker is now the same SVG icon used by the adapter.
- [x] Local browser render of collapsed RTL Breadcrumbs shows all visible separators pointing left, with intrinsic 16×16px icon geometry and no text-based mirroring. Slash remains an independent option.
- [ ] Independent screen-reader review, full visual variant matrix and 320px/390px design reference comparison remain outside this screenshot correction's DoD.

## Range track/thumb endpoint alignment — 2026-11-02

- [x] Removed the duplicated legacy thumb pseudo-track and unconditional disabled thumb override. The enabled thumb is surface white with a 2px dark border; muted styling applies only when disabled.
- [x] Kept the full-width Reka SliderTrack for correct pointer mapping and inset its visual rail by 24px on both inline ends; SliderRange now sizes relative to that inset rail.
- [x] At 380px and 1920px, RTL values 0/52/100 place the visible fill boundary within 0.02 CSS px of the thumb center; targets remain 48×48px. Pointer clicks on both visible rail endpoints selected 0 and 100, and the 25–75 range fill aligned with both thumbs.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, Vue production build and `git diff --check` passed. The production build emits an advisory for its 812.63KB JavaScript chunk.

## Switch playground toggle inset and knob — 2026-11-02

- [x] The checked playground knob no longer reaches the physical track corner; both checked and unchecked states keep a 5px visible inset from the nearest physical edge in RTL (4px CSS inset plus 1px border).
- [x] Playground dimensions match the medium specimen (40×24 track, 16px knob); knob is white with no border, outline or shadow. Track is yellow when checked and neutral when unchecked.
- [x] Runtime adapter and inert gallery use the same white, stroke-free knob; labels and keyboard focus ring remain intact. The focus ring is separate from the knob.
- [ ] Narrow viewport layout was not verified in this browser session.
- [x] Required project gates pass. Change pushed to GitHub as `89cf424`.

## Input field radius — 2026-11-02

- [x] design reference input radius is verified at 12px; Input-family fields and OTP use the Norato 12px card radius instead of the capsule radius.
- [x] Browser confirms runtime OTP, eight subtype specimens, 41 state cards and playground fields compute to 12px; other component radii are untouched and RTL is intact.
- [x] Token/catalog/typecheck/build and `git diff --check` pass. Change is pushed to GitHub as `28c12ce`.
- [ ] Mobile viewport and interactive state combinations were not re-exercised in this radius-only request.

## Input capsule radius correction — browser verification (2026-11-02)

- [x] The latest user screenshot supersedes the previous 12px radius correction. Shared runtime field shells, OTP cells, eight subtype specimens and state cards now resolve to Norato's 50px pill token.
- [x] Actual Input page at `http://127.0.0.1:5177/#component-input`, 1280px: RTL preserved, document width 1265px, no horizontal overflow. Live adapter shells measured 52px high and report 50px radius; OTP cells measure 52×52px and report the same pill token.
- [ ] Mobile viewport and keyboard/focus state combinations were not repeated for this visual-only radius correction.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue TypeScript validation, production build, and `git diff --check` pass. Existing JS chunk-size advisory remains.
- [x] User's capsule instruction and live browser render agree. Mobile viewport and combined interactive state sequences remain unverified for this visual-only correction.
- [x] Changes committed and pushed to `origin/master` as `684fe48`; working tree was clean after push.

## Input neutral and focused stroke — 2026-11-02

- [x] Live page `http://127.0.0.1:5177/#component-input`: idle Text Input shell computes to `1px solid rgb(232, 232, 232)`; keyboard-focused Password Input computes to `1px solid rgb(253, 193, 1)`, with `box-shadow: none` and no outline style.
- [x] Browser render confirms the existing Norato tokens resolve to the requested neutral `#e8e8e8` and brand yellow; RTL and 1px field geometry remain.
- [x] Runtime Input/OTP and static family/state specimens use neutral resting strokes and yellow focus indications. (Superseded in the 2026-11-02 hover follow-up: pointer hover is now yellow as requested.)
- [x] `pnpm check:tokens`, Vue TypeScript validation, and `git diff --check` pass.
- [ ] Mobile viewport, full Input state matrix, and independent screen-reader checks were not run in this request.

## Switch track off/on visual correction — 2026-11-02

- [x] Local Switch page at `http://127.0.0.1:5177/#component-switch`: unchecked runtime track computes to fill `rgb(242, 242, 242)` with `rgb(232, 232, 232)` subtle border; knob remains white.
- [x] Checked runtime track computes to Norato yellow `rgb(253, 193, 1)` for fill and border, so no gray stroke remains; knob remains white. Track geometry is 40×24px and direction is RTL.
- [x] Clicking toggles data state and `aria-checked`; no public API or behavior change.
- [ ] Mobile viewport, complete state matrix and screen-reader behavior were not rechecked in this request.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build reports the existing >500KB JavaScript chunk advisory (813.93KB).

## Button specimen dotted glass background — 2026-11-02

- [x] Actual Button page at `http://127.0.0.1:5177/#component-button`: computed background contains a 14px dotted grid, warning yellow wash at top-left, info blue wash at bottom-right, dotted border and Norato elevation.
- [x] At the active 499px browser viewport, frame width is 452px and document width is 484px; no horizontal overflow. RTL is preserved; the inert specimen retains the existing two button elements and visual cancel action.
- [ ] The attached reference uses a taller frame; this request changed only the background, so Button specimen sizing/content was kept as-is. A 390px viewport and desktop-wide capture were not separately run.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build reports the existing 814.29KB JavaScript chunk advisory.

## Button specimen sizing — Split Button parity (2026-11-02)

- [x] Live browser screenshot: Button specimen contains only Primary and Secondary, with the dotted warm/cool glass background; no Cancel sample remains.
- [x] Same browser and viewport comparison against Split Button: both frames measure 583.98×288px with 24px radius. Button controls measure 63.73×48px and 81.78×48px; Split Button main/toggle measure 64×48px and 48×48px.
- [x] RTL is preserved; document width is 1265px at a 1280px viewport, with no horizontal overflow.
- [x] Same-browser mobile comparison at 390×844: Norato Button and Split Button frames are both 343×288px, with 375px document width and RTL intact. At 320×844, both frames are 273×288px and document width is 305px; no horizontal overflow.
- [x] The design-reference Button frame at 390×844 measures 327×300px. Norato's 343×288px geometry is an intentional adaptation to the approved Split Button parity; the only visual specimens remain Primary and Secondary.
- [ ] Keyboard and shared Button state matrix were not re-exercised; this change only alters inert specimen layout/content and leaves the interactive playground/API untouched.

## Input email specimen — label icon, placeholder and visual height (2026-11-02)

- [x] Actual Input page at 1280px: envelope is beside the Email title within a native label associated with `#specimen-email`; icon no longer appears in the field.
- [x] Title computes to Estedad 12px/700. Persian placeholder is inside the field and computes to Vazirmatn 12px/300 `#A1A1A1`; English `name@example.com` is removed.
- [x] Inert specimen control is exactly 36px high. Interactive playground input remains 48px; shared runtime target behavior is not reduced.
- [x] Default marker, helper, RTL and no horizontal document overflow remain.
- [ ] Mobile 390px and independent screen-reader check were not run in this correction.

## Input page-wide field rule — 2026-11-02

- [x] Top email field: visible shell 36px, RTL Persian placeholder, Estedad 700 label, and no helper text.
- [x] Static Input variant shells: six sampled controls measure 36px; sampled labels are Estedad 700 and placeholders RTL/Vazirmatn Light.
- [x] Live playground: single-line target inputs remain 48px or larger; the centered visible capsule is 36px; phone placeholder is RTL while phone entry stays LTR.
- [x] Generic `NoratoField` in the all-components lab measures a 48px target with 36px capsule, Estedad 700 label and RTL/Vazirmatn Light 12px placeholder; keyboard focus uses a 1px yellow outline with no shadow.
- [x] OTP target measures 48×48px with a 36px visual face; Textarea remains multiline (108px for current three-row Medium). No horizontal overflow.
- [ ] Mobile viewport plus all variant/state combinations and independent screen-reader review were not rerun for this styling request.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build reports the >500KB JavaScript chunk advisory (817.04KB).

## Input hover stroke correction — 2026-11-02

- [x] Removed the redundant native shell border; a single 1px visible capsule stroke remains.
- [x] Browser computed style confirms the shared wrapper border is 0px and the single capsule pseudo-stroke is 1px; default color is `#e8e8e8`.
- [x] Compiled stylesheet assigns Norato yellow to pointer hover on enabled shared Input/OTP shells, generic `NoratoField`, and `NoratoTextarea`; focus remains yellow.
- [ ] This browser tool could not keep a pointer hover active for a hover-only screenshot/computed-color capture; mobile and independent screen-reader review were not run.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), Vue typecheck, Vue build, and `git diff --check` pass. Build reports the >500KB JavaScript chunk advisory (817.03KB).

## Input hover stroke — duplicate border follow-up (2026-11-07)

- [x] Source cascade audit found the package wrapper hover selector was more specific than the page-level border reset and could restore a gray second line.
- [x] Added app-scoped specificity to the wrapper reset and explicitly kept its hover border transparent; the capsule's pseudo-element remains the sole visible stroke and uses the Norato yellow token on hover.
- [x] Local Input page, Password adapter: moved the pointer over the field without focusing it. `:hover=true`, `:focus=false`, `:focus-visible=false`; wrapper border `0px`, capsule pseudo-stroke computes to `1px solid rgb(253, 193, 1)`. Screenshot confirms a single yellow capsule stroke; the muted bars below are the password-strength meter, not a second field border.
- [x] The visible line is the field's capsule Stroke. Neutral state remains `#e8e8e8`; pointer hover and keyboard focus use Norato yellow.

## Time Picker selected accent correction — 2026-11-07

- [x] At desktop 1280×720, Norato static and interactive selected cells compute to yellow `rgb(253, 193, 1)` with dark `rgb(26, 26, 26)` text; frame is 584×288px.
- [x] At mobile 499×932, Norato's 452×288px frame remains bounded, document width is 484px, and no horizontal overflow occurs. design reference comparison frame is 436×300px and its black selected fill remains unchanged.
- [x] RTL and selected-cell color were captured in the actual local browser. Independent screen-reader review remains open and is not claimed as passed.

## Input hover stroke consistency — 2026-11-08

- [x] Root cause identified in the published Vue stylesheet: enabled, valid Input wrapper hover explicitly restored the neutral border token, while the docs page painted the capsule pseudo-element yellow and masked the wrapper layer locally.
- [x] Published Input hover selector now uses --norato-color-brand-yellow; the docs page keeps the duplicate wrapper border transparent and paints a single 1px capsule stroke.
- [x] Local Password Input focus render shows one yellow 1px capsule; the eye action's separate keyboard focus outline is distinct from the field stroke. Earlier no-focus pointer hover evidence remains recorded under ERR-084.
- [x] The local app consumes the published package stylesheet. Pointer remained over the Password capsule while focus moved to its visibility action; the unfocused field retained the single yellow hover stroke. Independent screen-reader and broader Input state/focus matrix remain outside this visual fix.

## Navbar visual and responsive follow-up — 2026-11-08

- [x] design reference/Norato measured at desktop 1280×720 and mobile 390×844; static row is 50px and nearly fills frame width while keeping 48px controls.
- [x] At 320px, document scroll width equals client width (305px) with no horizontal scrollbar; all four mobile header types remain within bounds.
- [x] Nine desktop layout/style combinations, seven runtime target heights, submenu Enter/Escape focus return, drawer Escape/outside close, controlled Search and Back activation were checked.
- [ ] Independent screen-reader review and wider full state/focus/current/disabled matrix remain open.

## Radio matrix mobile geometry and accent alignment — 2026-11-08

- [x] Matched 390×844 browser render: design reference Variants gallery is 327px wide and 651.5px high; its property selector adds 272.5px. Norato matrix is 343px wide, 886.9px high, five 162.2px cards, four 48px cells per group and 20 cells total.
- [x] Norato document width is 375px with no horizontal overflow. Gallery is inert and RTL; no interactive descendants. Ring sizes are intrinsic 16px/20px and are not stretched.
- [x] Checked dot and hover border resolve to yellow `rgb(253, 193, 1)`, matching live adapter selection; disabled stays gray, error red, focus ring/halo remains dedicated.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49), Vue typecheck/build and `git diff --check` passed after the color update; the 818.95KB JS chunk still triggers Vite's >500KB advisory.
- [ ] Independent screen-reader and full cross-product live-state review remain open.

## OTP state semantics follow-up — 2026-11-08

- [x] At 390×844, six OTP cells in Error expose `aria-invalid=true`, all reference the same error alert, and the neutral-size capsule outline resolves to the error token (`rgb(199, 32, 56)`).
- [x] Success exposes the success message as a status, associates all six cells with it and uses the success outline (`rgb(23, 131, 75)`).
- [x] Disabled state sets all six native OTP cells disabled and presents the muted surface/neutral outline; AX reports each cell disabled. RTL remains on the field wrapper.
- [x] Error, Success and Disabled toggles were reset; playground returns to six empty cells with all shared state switches off.
- [ ] Combined state sequences and independent screen-reader review remain open; Input family DoD remains open.

## Input combined state precedence — 2026-11-08

- [x] Browser revealed Success was announced alongside Loading, and OTP could reference an unrendered Success message when Error was present.
- [x] Error suppresses Success; Loading suppresses Success until Loading ends. Existing Error remains visible during Loading.
- [x] Applied the precedence consistently to shared-shell inputs, OTP and Textarea; success data attributes/classes and `aria-describedby` IDs follow what is rendered.
- [x] Live playground verified Error+Success, Error+Disabled, Error+Loading+Success and Success+Loading → Success. All status IDs resolve, 13 controls are disabled as expected, and toggles were restored.
- [ ] Independent screen-reader review and exhaustive Input visual/state matrix remain open.

## Stepper component DoD (2026-11-08)
- [x] Same-viewport design reference/Norato desktop 1280×720 comparison; Norato preview frame measured 584×288px versus design reference 636×300px in their different-width documentation columns. Horizontal step row is 416×55px and design reference 454×55px; the narrower Norato content column explains the width difference. RTL first step is right; palette uses Norato yellow and neutral surfaces.
- [x] Desktop browser rendered Horizontal, Vertical, Compact and Dots; no false interactive elements in the adapter. Vertical indicators align with each step's text; indicator sizes remain tokenized and circular.
- [x] Playground controlled transition advanced from Address to Payment and updated polite announcement; LTR put Cart first on the left. Dots with Address flagged as Error showed red marker, label and supplied message; semantic list identified the error and live status included the explanation.
- [x] Compact Error shows a red marker, affected step name and explanation. Dots Small/Medium/Large scale to 4/8px, 8/12px and 12/16px outer diameters, including the current ring; browser was restored to the default horizontal, medium, RTL, Address state.
- [ ] Mobile 390×844 and 320px overflow/scroll comparison and independent screen-reader review remain open because the current browser control has no viewport override and no separate screen-reader run was available.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts/exports), `pnpm --dir apps/vue typecheck` and `pnpm --dir apps/vue build` passed. Build reports one existing-size advisory: JS bundle 833.79KB > 500KB.
- [x] `git diff --check` and final CSS/docs review passed for this checkpoint; GitHub checkpoint follows this entry.

## گزارش درخواست — Stroke فیلدها و Tree View (2026-11-08)

- درخواست Input: ماهیت خط و رنگ Stroke هنگام hover بررسی شد. در مرورگر محلی روی 5174 و 5175، پوستهٔ control مرز/outline/shadow ندارد؛ تنها pseudo-element فیلد Stroke یک‌پیکسلی دارد: default برابر `#E8E8E8` و Hover برابر Norato Yellow `#FDC101`. هیچ کد Input تغییر نکرد چون render فعلی همین رفتار را دارد. تصویر ارسالی pointer را نشان نمی‌دهد؛ بنابراین از روی تصویر به‌تنهایی نمی‌شود Hover را تأیید کرد.
- Tree View: مرجع طراحی در viewport دسکتاپ 1280×720 مرور شد؛ الگوی قاب نقطه‌دار، پنل درخت، RTL، فاصلهٔ 20px، offset فایل 16px، Guides Off و پنج state مرجع ثبت شد. Norato در 5176 همان ساختار صفحهٔ Button و هر 9 بخش قرارداد را render می‌کند؛ قاب 584×288px در عرض ستون محدود صفحه است.
- نمونهٔ Norato در قاب نقطه‌دار 288px و پنل شیشه‌ای 256px قرار دارد. ردیف‌های preview برابر 28px و runtime برابر حداقل 48px هستند. در DOM، تورفتگی level 2 برابر 20px و offset فایل 16px است؛ لبهٔ inline انتهای برچسب فایل و پوشهٔ هم‌سطح برابر 745.5px بود.
- رفتار مرورگر: Guide روشن شد و border راهنما 1px شد؛ انتخاب تکی با کلیک و Enter، باز/بسته‌شدن با chevron و کلیدهای Left/Right، جابه‌جایی با ArrowUp و Home/End، و حلقهٔ فوکوس زرد 2px با offset برابر 2px تأیید شد. کلیک chevron انتخاب قبلی را حفظ کرد؛ End نود disabled را رد کرد؛ فرزند پوشهٔ بسته از درخت دسترس‌پذیری حذف شد.
- [ ] viewportهای 390px و 320px، فوکوس‌گذاری مستقل صفحه‌خوان و بررسی دستی فعال‌سازی disabled با pointer اجرا نشده‌اند؛ Tree View DoD باز می‌ماند.
- [x] `pnpm check:tokens`، `pnpm check:catalog` (49 مسیر و قرارداد)، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` پس از آخرین اصلاحات پاس شدند؛ build هشدار اندازهٔ bundle برابر 916.37KB بالاتر از 500KB داد.
- [x] بازبینی نهایی CSS و مستندات انجام شد؛ GitHub checkpoint پس از ثبت این گزارش انجام می‌شود.

## Alert — 2026-11-08

- [x] مرجع طراحی و Norato در viewport یکسان 499×932 بررسی شدند: قاب مرجع طراحی 436×300 و alert داخلی 410×74px؛ قاب Norato 452×288 و alert 420×69px. اختلاف قاب از عرض ستون‌های متفاوت صفحه ناشی است؛ alert Norato 10px عریض‌تر و 5px کوتاه‌تر است.
- [x] پیش‌نمایش Alert داخل قاب نقطه‌دار Button، inert و بدون target تعاملی است؛ playground از آن جداست. صفحه ۹ بخش هم‌سطح Button دارد.
- [x] هر ۲۰ ترکیب tone/style/layout از رابط واقعی انتخاب و رندر شد؛ همه اندازهٔ غیرصفر داشتند، جهت RTL بود، Danger نقش alert و چهار لحن دیگر status داشتند. رنگ ظرف Soft برای پنج لحن با tokenهای Norato هم‌خوان بود؛ اندازهٔ SVG برابر 24×24px بود.
- [x] Inline اکشن Expanded را مخفی می‌کند؛ action مصرف‌کننده در Expanded نمایش دارد. بستن کنترل‌شده با Space مقدار `v-model` را بست؛ فوکوس کیبورد روی Close حلقهٔ ۲px زرد با offset برابر ۴px و هدف ۴۸×۴۸px نشان داد.
- [x] در viewport 499px عرض سند 484px بود و overflow افقی نداشت.
- [ ] viewportهای 390px و 320px، مرور تصویری مستقل برای هر ۲۰ ترکیب، بررسی uncontrolled dismiss با دکمه، و screen reader مستقل باقی‌اند؛ Alert DoD باز است.
- [x] `pnpm check:tokens`، `pnpm check:catalog` (49 مسیر/قرارداد)، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` پس از آخرین تغییرها پاس شدند؛ build هشدار حجم JS برابر 925.88KB بالاتر از 500KB داد. GitHub checkpoint پس از ثبت این گزارش انجام می‌شود.

## Input hover Stroke in state gallery — 2026-11-08

- [x] Root cause: the inert Input state gallery grouped `hover` with `typing` and assigned both the neutral border token. This made the documented Hover examples look gray even though the interactive Input adapter uses a yellow hover Stroke.
- [x] Separated the gallery states: Hover now uses Norato yellow; Typing retains the neutral Stroke. Default remains `#e8e8e8`; active/error/disabled retain their dedicated treatments.
- [x] Local Input States browser screenshot confirms Text/Phone Hover use a yellow capsule Stroke; Default remains neutral, while Error, Success and Disabled preserve their own treatments. No extra outer Stroke is drawn by this inert gallery.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build retains the existing 934.28KB JavaScript chunk advisory (>500KB).

## Input Stroke hover/focus correction — 2026-11-08

- [x] At the actual local Input playground, the password field showed a single 1px Norato-yellow Stroke on focus, without the dark generic outline or an outer halo.
- [x] The shared interactive input shell keeps its yellow hover Stroke; legacy native field, textarea, date input, and select trigger now also use the yellow Stroke on hover/focus. Disabled fields remain excluded from hover recoloring.
- [x] Generic focus styling remains for buttons, switches, choices, and independent actions; only field controls remove the dark outer outline.
- [ ] Matched design reference screenshot comparison across all Input types and independent screen-reader review remain open.

## Toast implementation wiring — 2026-11-08

- [x] NoratoToast exported from `@norato/vue`; catalog resolves the adapter and `toast` usage example; component detail page mounts ToastPlayground.
- [x] Static Toast preview uses Button-sized dotted specimen composition and package Toast styling without a portal.
- [x] At 1270×720, visually compared design reference and Norato: both frames are about 576×288px; design reference default Toast is about 366×72px and Norato is about 368×70px. Verified the live RTL success message exposes title/description/action/close and closing emits feedback.
- [ ] Full 20-variant visual matrix, timer/pause, keyboard, independent screen-reader and 390/320 widths remain unverified; Toast DoD stays open.
- [x] Token/catalog checks, Vue typecheck/build and `git diff --check` pass. Build reports a 965.16KB JS chunk above the 500KB advisory threshold.

## Tooltip first implementation pass — 2026-11-08

- [x] design reference route inspected; 16 combinations, default dark icon-trigger composition, Bubble/Arrow anatomy, RTL collapsed-sidebar left placement and keyboard focus requirement recorded.
- [x] Norato page uses Button-sized dotted preview + inert sample + separate executable playground; at 1270×720 frame geometry is visually comparable. Rich info remains noninteractive; host owns actions.
- [x] Keyboard focus reveals the tooltip, Escape closes it, and the trigger retains a single 2px yellow focus ring. Trigger description and content are present in the accessibility tree.
- [ ] Pointer delay, 16-combination render matrix, Popper collision at 390/320, independent screen-reader review and final technical gates remain open.

## Progress implementation pass — 2026-11-08

- [x] design reference Progress route inspected: linear/circular forms, 4/8/12px bar thicknesses, 24/32/40px rings, right-to-left fill, 12 o'clock start and small-ring label omission recorded.
- [x] Norato local detail page uses the shared Button-style dotted preview frame and a distinct executable playground; screenshot confirms the 62% linear value and yellow fill from the right.
- [x] Accessibility tree exposes one `progressbar` named “بارگذاری فایل” with value 62; the adapter clamps numeric input to 0–100, displays Persian percent text, and leaves it non-focusable.
- [x] On Linear/Medium/Default, browser values 0/25/50/75/100 update the progressbar value; on Circular/Medium/Default at 25%, the yellow arc starts at 12 o’clock; Circular/Small at 100% has no center percentage.
- [x] Source geometry uses fixed intrinsic sizes for circle/track; legacy `.sample-progress` rules removed.
- [x] The earlier full-loop attempt timed out and was reset. The follow-up correction review subsequently exercised all 120 combinations in RTL and all 120 in LTR through the real playground, with zero geometry, fill-direction, tone, value or accessibility-value mismatches; the partial attempt is superseded by that completed pass.
- [x] Matched desktop review at 1280×720 confirms metadata above a full-width track: reference stage 636×300px/track 302.4×8.6px; Norato Button-style frame 584×288px/track 304×8px. Current local render was rechecked against the reference: RTL title/value placement and right-starting Norato-yellow fill remain correct.
- [x] 390px and 320px viewport checks keep document width bounded to 375px/305px content widths; sample frame remains 343×288px/273×288px and track remains responsive without vertical stretch.
- [x] Boundary checks verify -10→0, 120→100 and 42.6→43 in visual fill, `aria-valuenow` and Persian `aria-valuetext`.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build and `git diff --check` pass for the first implementation pass.

## Spinner responsive verification — 2026-11-08

- [x] Local browser at `/#component-spinner`: viewport widths 390px and 320px show the Button-style specimen fully within the page; `documentElement.scrollWidth` and `body.scrollWidth` did not exceed `innerWidth`.
- [x] Measured specimen geometry remains fixed-height at 288px and shrinks only in width with the containing column (343px at the 390px test setting; 273px at 320px); spinner remains centered and square. The browser’s content width was 375px and 305px respectively because its vertical scrollbar occupies 15px.
- [ ] Independent screen-reader review remains outstanding for Spinner; browser accessibility tree inspection is not being treated as a substitute.

## Progress visual and matrix correction — 2026-11-08

- [x] Source: design reference `#progress`, matched browser viewport 1280×720. design reference stage is 636×300px; metadata row spans 302.4px and the neutral track directly below is 302.4×8.6px. Norato had put the track between the label and value, so that first pass failed visual acceptance.
- [x] Corrected Norato to label/value metadata above a full-width track. The inert Button-style sample frame is 584×288px with a 304px token-capped track at 8px Medium thickness; visual hierarchy and row order now match design reference while retaining Norato's yellow.
- [x] All 120 variants were selected through the actual Progress playground in RTL and all 120 in LTR. Current/min/max, localized value text, tone mapping, exact 4/8/12px Linear thickness, 24/32/40px square Circular geometry, percentage center rules, fill ratios and logical start edges all passed with zero failures.
- [x] At browser viewport settings 390px and 320px, actual content widths were 375px/305px because the scrollbar uses 15px; document width matched content width, with no horizontal overflow. Frame dimensions were 343×288px/273×288px and the track remained horizontally fluid at 304px/263px.
- [x] Actual UI value input clamps -10 to 0 and 120 to 100; 42.6 rounds to 43. `aria-valuenow`, Persian `aria-valuetext`, and visual fill agree at each boundary.
- [ ] Independent screen-reader review remains open. Browser accessibility tree exposes the progress name and value but is not treated as a screen-reader substitute.

## Progress — parity record aligned with completed matrix review (2026-11-08)

- [x] The older 120-variant timeout note is superseded by the completed 120 RTL + 120 LTR pass documented in “Progress visual and matrix correction” above.
- [x] Fresh side-by-side render confirms the reference composition while preserving Norato's yellow accent and the already-recorded natural track geometry.
- [ ] Independent screen-reader review remains the only open Progress DoD item; browser AX is not counted as that review.

## Input hover Stroke follow-up — 2026-11-08

- [x] Interpreted the reported line as the field's own 1px capsule Stroke; computed input outline and shadow are both absent.
- [x] Hovered Password with a real browser pointer on local `http://127.0.0.1:5177/#component-input`: capsule Stroke is 1px Norato yellow (`rgb(253, 193, 1)`), outer layout wrapper is 0px/transparent, and no second gray line appears. Resting capsule Stroke remains `#e8e8e8`.
- [x] Repeated on `https://norato-design-system.vercel.app/#component-input`: hover resolves to one 1px yellow wrapper Stroke, with no pseudo-element layer or focus outline. Local and production implementations differ in which single layer paints the Stroke, but the visible behavior matches the approved contract.
- [ ] The supplied screenshot has no visible pointer position, so it cannot confirm that the field was actually hovered at capture time. Keyboard focus and disabled hover were not retested for this visual follow-up.

## Divider — browser review (2026-11-08)

- [x] Local Divider route renders the Button-style nine-section page, fixed inert dotted specimen, distinct live playground, copyable Vue usage and public contract.
- [x] Browser playground exercised all 12 orientation/type/tone combinations and spacing 0/4/8. Rules measured 1 CSS px in their thickness axis; horizontal line remains content-driven, vertical lines remain 1px wide, vertical labels stay upright, and RTL/LTR label-start follows logical inline-start.
- [x] Decorative mode is hidden from the browser accessibility tree; semantic mode exposes `role=separator`, orientation and label name where supplied. This verifies browser AX output, not a screenreader session.
- [x] At 390px and 320px viewport settings, the specimen is 343×288px and 273×288px; document width is 375px and 305px respectively, with no horizontal overflow.
- [x] Matched design reference/Norato screenshots and measurements at 1280×720: reference stage/rule 636×300px / 345.6×1.08px (320px CSS width with the reference's 1.08 scale); Norato stage/rule 584×288px / 320×1px. Rule/stage proportions are 54.3% and 54.8%. At 390×844, reference stage/rule 327×300px / 320.76×1.08px; Norato 343×288px / 320×1px. At 320×844, reference 257×300px / 245.16×1.08px and document width 326px; Norato 273×288px / 263×1px and document width 305px. The 320px reference screenshot has a horizontal scrollbar while Norato does not. Frame width/height differences remain visible; the centered line treatment is close. Norato retains its neutral semantic border palette.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build` and `git diff --check` pass. Build reports the existing advisory that the main JS chunk exceeds 500 kB.
- [ ] Independent screenreader review remains open; browser accessibility-tree inspection is not treated as a substitute.

## Toast — browser review (2026-11-08)

- [x] design reference and Norato were rendered in the same 1265×720 browser viewport. Both show the centered rich success Toast in the shared dotted frame with icon on the right and close on the left; Norato keeps its semantic green success, glass surface and yellow accent.
- [x] Used the live playground to open and close all 20 combinations (5 tones × 2 surfaces × 2 layouts); the generated Vue props followed each selected combination. The 20 states were exercised, but not all received individual screenshot geometry review.
- [x] A default 6-second success Toast closed after a 7-second wait. Loading stayed visible after 7 seconds and closed with its manual close control.
- [x] Action and close controls both activated with Space through the browser accessibility target; the callback was also verified through the live playground with both action-dismissal settings. Natural Tab order reached title, action, close, then the following field. Focus paused the timer and leaving resumed it. Pointer hover also paused a persistent Toast; moving/clicking outside resumed it. The playground reflects timer state in aria-hidden helper text.
- [x] Playground now exposes the action-closes choice and generates the corresponding `action-closes` prop. In browser, callback feedback remains visible when the action closes the toast; with `actionCloses=false`, the toast remains open and callback feedback is visible. Manual close keeps its separate close feedback. Defaults were restored after the pass.
- [x] A focused playground text field computes to the yellow border token with no outline or shadow; its rendered border is 0.8 CSS px at the current device scale.
- [x] Keyboard Tab navigation visibly focuses both Toast action and close. Screenshots show the yellow outline following the pill action and circular close target; the source uses `--norato-border-focus` (2px) with `--norato-space-1` (4px) offset on both controls. This is distinct from the text-field Stroke.
- [x] The playground mode selector exercises uncontrolled `defaultOpen`; opening, manual close, reopen, non-closing action callback and generated `:default-open="true"` snippet were verified. The uncontrolled snippet omits the unused Vue `ref` import.
- [x] Live DOM review: one populated Reka `role="alert"` node is present; Success uses `aria-live="polite"`, Danger uses `"assertive"`, and the text includes localized tone/title/description/action in order. Reduced-motion CSS disables entry/timer transitions and limits the spinner to one near-instant cycle; audible screen-reader output and browser emulation remain unverified.
- [ ] Exact 390/320 viewport geometry, per-variant screenshots and independent screen-reader review remain open. The earlier 484px width is not used as a substitute for mobile breakpoints.
- [x] Narrow local 484px screenshot showed no horizontal page overflow; exact 390px/320px mobile viewports are not available in this browser session and remain open.
- [ ] Independent screenreader review and the remaining interaction/responsive checks above remain open; do not treat the browser accessibility tree as a screenreader substitute.

## Input hover Stroke — follow-up (2026-11-08)

- [x] User screenshot confirms the visible capsule Stroke remained gray on pointer hover; interpreted it as the field's own Stroke, not an extra ring.
- [x] Local browser on the Input page: moved pointer over the text field, then moved keyboard focus away with Tab; the field remained yellow while unfocused, distinguishing hover from focus. Repeated while Error and Success playground statuses were enabled; the hovered field turned yellow and other fields retained their semantic colors. Playground toggles were restored afterward.
- [x] Source now explicitly matches hover on the native input and its wrapper after state styles; focus retains its yellow Stroke and no new ring/shadow was added.
- [x] Disabled Input remained muted with its neutral Stroke when targeted by the pointer. Browser viewport was the existing narrow view; the page's broader responsive DoD remains independently tracked.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass. Build reports the existing 1,015.47KB chunk advisory.

## Input hovered Stroke clarification — 2026-11-08

- [x] The line in the supplied screenshot corresponds to the Input field's own 1px capsule Stroke; it is not a second wrapper border or browser focus outline.
- [x] Existing local behavior has been verified with the pointer over the password field while focus moved elsewhere: hover Stroke is Norato yellow, rest Stroke is `#e8e8e8`, and the outer layout wrapper has no border.
- [x] No duplicate CSS override was added because the current render already satisfies the requested yellow hover Stroke. The user's screenshot may show an earlier/stale render or pointer no longer over the field; the screenshot alone does not show pointer location.

## Avatar implementation checkpoint — browser evidence (2026-11-08)

- [x] Local Avatar route presents the inert dotted preview, separate executable playground, copyable Vue usage, and contract sections in Button page order.
- [x] Browser accessibility tree reports 36 Avatar, 12 Group, 3 Label, and 4 Status variants; broken-image fallback is exposed with a person name. RTL group members and overflow accessible labels are present.
- [x] Direction and size custom menus open and close in the live playground. design reference's Avatar page was reviewed and supplies the same 55-variant scope, circle/square, ring/status placement, group RTL rule, and accessibility name guidance.
- [x] At this checkpoint, the 55-variant geometry, keyboard and engineering review were still pending; the 2026-11-09 follow-up records those checks.
- [ ] Exact mobile widths and independent screen-reader review remain open. Avatar DoD remains open.

## Avatar visual and keyboard follow-up — 2026-11-09

- [x] Same desktop viewport captures compared the reference anatomy/variant tiles with Norato's preview and full matrix. Norato's preview is about 580×288px versus the reference's 630×300px, reflecting the narrower documentation column; its yellow/neutral palette remains distinct.
- [x] Browser screenshots reviewed the 36 Avatar, 12 Group, 3 Label and 4 Status cases. Token geometry is fixed at Avatar 24–64px, Group 32–56px with 8–14px overlap, Label 32/40/48px and 10px presence dot. The matrix shows fixed circles/squares and no stretching; groups overlap and `+N` appears on the opposite side of the first person for RTL/LTR.
- [x] Broken-image example renders two Persian initials within the same fixed avatar frame. Source constrains explicit initials to two grapheme clusters and derives no more than two.
- [x] Tab traversed all six controls. Type menu ArrowDown/ArrowUp/Enter updated type and generated code; screenshots confirm a single yellow focus ring for controls/options. Presence remains bottom-left in both directions.
- [x] Added the missing Default marker to the inert specimen; tuned Avatar playground focus from the generic dark/halo treatment to one yellow outline.
- [x] At 390×844 and 320×844, document widths are 375px and 305px; the Avatar playground measures 343px and 273px. No horizontal overflow, descendant overflow, or off-viewport element was found; all group-grid cells fit the 273px playground at 320px.
- [ ] Independent screen-reader review remains open; see `specs/013-design-system-parity/avatar-checklist.md`.
- [x] Token/catalog checks, Vue typecheck/build, repository scan and `git diff --check` pass after this checkpoint.
- [x] Checkpoint `99f8b3f` pushed to `origin/master`; remote hash matched.

## Tag — long text and mobile geometry follow-up (2026-11-09)

- [x] Added a short/long label control to the interactive playground; generated Vue code reflects label, direction, size and icon/dot settings.
- [x] At 320×844 and 390×844, document widths were 305px and 375px. Long text clipped with ellipsis inside the available Tag width and did not stretch its 28px medium height.
- [x] Exercised all eight optional dot/leading/trailing icon combinations at 320px; icons stayed 14×14px, the dot 6×6px, and Tag height stayed fixed. RTL and LTR visual ordering were confirmed. All four size heights matched 24/28/32/36px.
- [x] Fresh local browser reads at 390×844 and 320×844 confirm document widths of 375px/305px and static specimen geometry of 76.1×28px at both widths; no horizontal overflow.
- [x] Browser accessibility tree exposes the Tag static preview as text with no interactive role; the live page contains Preview, Vue playground/snippet and nine Button-aligned contract sections.
- [ ] Independent screen-reader review remains open; see `specs/013-design-system-parity/tag-checklist.md`.

## Avatar direction and keyboard follow-up — 2026-11-08

- [x] Selected LTR in the live playground; the displayed group order mirrored and the generated Vue example changed to `dir="ltr"`. Restored RTL after the check.
- [x] The single Avatar's presence dot remains at physical bottom-left in both RTL and LTR renders. Static specimen has no interactive descendants in browser AX.
- [x] Direction menu opened using keyboard; Home + Enter selected RTL and closed the menu. Visible keyboard focus is present, though its contrast treatment still needs review across every playground control.
- [ ] This browser does not expose exact viewport dimensions or a viewport override. Do not count zoom as a 390px/320px viewport measurement; exact mobile document overflow and matched-width design reference comparison remain open, as do all-55 pixel measurements and independent screen-reader review.

## Badge — implementation and browser review (2026-11-08)

- [x] Badge detail page follows Button structure: inert dotted preview, separate live playground, copyable Vue example, and Overview/Anatomy/Variants/Sizes/States/Parts/Usage/Accessibility/Tokens sections.
- [x] design reference and Norato were reviewed at the same 1265×720 browser viewport. Both center a count marker on a rounded bell anchor inside a dotted card; local card geometry is 576×288px and design reference is 636×300px because their content columns differ.
- [x] Count/Dot × Small/Medium × Danger/Inverse/Neutral/Success were selected in the actual playground. Count minimum sizes are 16/20px; Dot sizes are exact 8/10px, including 2px white ring. Longer Count text expands horizontally. Neutral's low-contrast first render was corrected with a dedicated neutral status token; Neutral Count and Dot were rechecked afterward.
- [x] RTL places the marker at the physical top-left; LTR mirrors it to the top-right. Anchor target remains 48×48px; its size does not stretch with the absolute-positioned marker.
- [x] Count 0 and 3, the 99 boundary, and 100→99+ were checked. Dot hides the value control and exposes “مورد جدید” in the host button label.
- [x] Browser accessibility tree exposes the host button once with the complete accessible label; the visible marker is aria-hidden. Keyboard focus is visible, native disabled is exposed, and Tab skips the disabled host anchor. This is browser/AX evidence, not a screen-reader session.
- [x] The available local narrow view (484px screenshot) showed no horizontal page overflow. Exact 390px/320px measurements and independent screen-reader review remain open.
- [x] Token/catalog checks, Vue typecheck, production build and `git diff --check` pass after final changes. Build retains the existing advisory that the main JavaScript chunk exceeds 500 kB.

## Switch matrix checked Stroke — follow-up (2026-11-08)

- [x] Real local Switch adapter on/off checked states confirm Norato-yellow active track, neutral muted off track, white knob with no Stroke/shadow, and 48×48px target. Hover was isolated from focus: an off Switch remains neutral-filled while its 1px border turns yellow.
- [x] Static matrix had a legacy `border-strong` token on checked Default and Focus cells. The existing selector now uses Norato yellow; all 30 Switch and 6 Switch Field cells were audited across state, size and value. Checked Default/Focus are yellow, Hover yellow, Disabled neutral, Error red; all knobs remain white and stroke-free.
- [x] Browser screenshots reviewed all five static Switch state groups at the available 499×932 local view; document width 484px, no horizontal overflow. At that checkpoint, exact mobile matrix comparison and independent screen-reader review remained open; the mobile comparison was completed at 390×844 and 320×640 in the 2026-11-09 follow-up. Independent screen-reader review remains open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass for this correction; build retains the existing >500kB main bundle warning.

## Segmented Control Contrast hover — follow-up (2026-11-08)

- [x] At the same 1280×720 viewport, design reference shows raised white Glass selection; Norato retains its dotted glass frame and Norato-yellow brand accent.
- [x] Reproduced the old bug: selected Contrast hover had white text on `rgb(253, 193, 1)`. After the selector correction, the hovered selected option computes `rgb(26, 26, 26)` text on Norato yellow; resting Glass remains raised white.
- [x] Exercised the actual playground across 24 combinations (2 styles × 4 sizes × 3 item counts): all groups remained RTL, non-wrapping, selected, and within the group width; targets measured 48px for Small/Medium/Large and 56px for XLarge.
- [x] Keyboard verified on the live group: ArrowLeft moves focus without changing value; Space selects; Home/Enter and End/Space work; a disabled Month option is skipped; group-disabled disables every native segment button; clicking the current selection does not clear the controlled value.
- [x] Playground restored to Glass/Medium/3 with Daily selected and disabled toggles off.
- [ ] Exact 390×844 viewport verification remains open: the browser viewport override API did not change the active tab from 1280×720. The full 64 item-state cross-product and an independent screen-reader session also remain open; do not close component DoD.
- [x] `pnpm check:tokens`, `pnpm check:catalog` (49 routes/contracts), `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` completed successfully. The generated JS bundle is 1,024.79KB; this build emitted no separate chunk-size warning.
## Empty State — implementation review (2026-11-08)

- [x] Same-viewport 1280×720 design reference/Norato preview captured and compared. design reference frame is 636×300px; Norato's shared Button frame is 584×288px. Both use the dotted preview and Default marker; Norato keeps its yellow/dark primary action and yellow-outline secondary action. The frame difference follows the page content columns.
- [x] All 12 layout × size × container combinations rendered in the live Vue playground. Each root remained RTL and within the page; both action targets measured 48px high.
- [x] Exercised all 24 visual type × size × tone combinations in four short browser batches. Icon geometry measured 20/24/32px inside 40/48/64px circles; illustration geometry measured 40×35/48×42/64×56px inside the same boxes. No visual overflow occurred across all tones.
- [x] Primary/secondary action slots render named NoratoButton controls; click reports the selected host action, Tab reaches the secondary action with visible focus, and both action targets measure 48px.
- [x] Horizontal RTL/LTR geometry mirrors: RTL visual at x=772px and content at x=541px; LTR visual at x=541px and content at x=605px in the 584px frame. No internal horizontal overflow.
- [x] In the rendered preview, a consumer-sized 40×40 SVG visual fit its slot at 40×40px. Raw anchor and button children in the action slot each computed to a 48px minimum/actual height.
- [x] Chromium mobile emulation at 390×844 and 320×844 showed `innerWidth`, document width and body width equal to each viewport (390/320), with no element outside the viewport. The Button-style dotted frame measured 358×288px at 390px and 288×288px at 320px; horizontal mode stacks below 600px.
- [x] design reference captures were made at the same 390px and 320px physical widths. Its responsive navigation retains offscreen links in the DOM, while document width stays bounded to its viewport; these hidden/overflow-clipped navigation nodes were not counted as page overflow.
- [x] Browser AX shows one named section associated with heading/description, hides decorative visual, and retains action names. Independent screen-reader review remains required.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, `pnpm --dir apps/vue build`, and `git diff --check` pass after correcting the invalid slot selector.
- [ ] Independent screen-reader review and the full exhaustive behavior cross-product remain open; browser AX is not counted as a screen-reader session.

## Timeline — browser review (2026-11-08)

- [x] Local Timeline detail page follows Button structure: inert dotted preview, executable playground, Vue usage example, and nine contract sections. Public adapters/types and catalog/contract/Figma records are wired.
- [x] Rendered all 9 item variants, 15 marker variants, and both feed densities. Browser shows no horizontal overflow at the available 499×932 viewport (document width 484px); exact 390px/320px widths remain unavailable.
- [x] RTL rail is on the right and LTR rail mirrors to the left. First/middle/last connectors, fixed marker bounds, Avatar circle geometry and image fallback, array order, group boundaries, and status cues were inspected.
- [x] Browser AX exposes named ordered lists, item heading/time and marker names; static specimen has zero focusable descendants. Keyboard opened and selected the layout menu with visible yellow focus; playground controls were restored to defaults.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, and `git diff --check` pass after latest changes. Build retains the existing large-main-bundle advisory.
- [x] Matched 1907×907 browser comparison completed on 2026-11-09. The local inert specimen now has the reference's four chronological states; event times are below titles and vertical rhythm is closer. RTL rail remains on the right; Norato's active marker stays yellow/neutral.
- [x] Source-level review confirms responsive width constraints and no fixed-height stretching in Timeline items; actual 390×844 and 320×844 browser captures remain open.
- [ ] The local preview frame is still about 580×288px versus about 630×326px in the reference. Independent screen-reader review and current engineering gates also remain open; keep DoD open.

## Charts — mobile axis, data and visual checkpoint (2026-11-08)

- [x] Compared design reference and Norato at the matched 1280×720 viewport. The dotted Norato preview frame is 584×288px versus about 636×332px in the reference, while the inner chart plot is 336×157.7px versus 334.8×156.9px; both retain a 2.13 aspect ratio.
- [x] The inert sample renders one bar series with the reference values 34, 58, 42, 72, 51 and 66; its scale is 0/40/80, the first five bars are subdued, and the final bar is Norato yellow with one direct value label.
- [x] Selected all six chart types in the live playground. All six categories remained ordered; bar/horizontal/donut showed one series, grouped-bar/line/area showed two, and the correct marks rendered without data issues.
- [x] Opened the data table for all six chart types. Every table retained the rendered category order and each visible series' exact values.
- [x] Exercised Up, Down and Neutral Stat Tile choices. Each changed the leading tile's trend shape, color, arrow and Persian status text. Four Legend items render; all eight token colors are distinct and series 1 is `#fdc101`.
- [x] Switched the live playground RTL→LTR→RTL; chart and Stat Tile direction changed while the SVG plot wrapper stayed LTR. Tooltip uses `role="tooltip"`; trigger `aria-describedby` resolves to its ID. Static preview has zero focusable descendants.
- [x] At 390×844, document width is 375px and plot geometry is 309×145px with no internal overflow. At 320×844, document width is 305px; the 280×131px plot preserves its ratio and scrolls internally. The LTR viewport keeps the numeric axis visible; document width remains bounded.
- [x] Corrected the mobile plot wrapper's inherited RTL direction after the first 320px render clipped the left numeric axis; explicit `dir="ltr"` is now on the SVG viewport.
- [ ] Browser accessibility tree is reviewed; independent screen-reader review remains open.
- [x] Final `pnpm check:tokens`, `pnpm check:catalog`, `pnpm test:charts` (7/7), Vue typecheck/build, and `git diff --check` passed after the latest markup change. Build output is 1,096.07KB and retains the >500KB advisory. Checkpoint `c9b2344` was pushed and matched `origin/master` on verification.

## Drawer browser review — 2026-11-08

- [x] Opened the design reference Drawer page and confirmed the documented default is physical right in RTL, with only inner corners rounded; the reference includes side panel and bottom-sheet variants.
- [x] Norato Drawer is a controlled Reka Dialog adapter with title/description, close action, side positioning, sizes, bottom detents, footer slot, and dismissible control; actual page exposes an interactive Vue playground and copyable usage.
- [x] At 1920×863, default RTL side panel measured 400×863 at the physical right edge. The left side measured 400px at x=0. At 390×844, bottom half detent measured 390×422, and document width remained 390px.
- [x] Escape closed the panel and restored focus to the opener. With dismissible disabled, Escape and pointer outside both left it open. Dialog role, title association, named 48×48 close target were present.
- [x] At 320×844, right and left side panels each measured 304px and stayed against their physical edge; the document stayed 320px wide. Full Bottom Sheet measured 320×812 with its 32px top inset and no horizontal overflow. At 390×844, half Bottom Sheet measured 390×422.
- [x] Compared local and design-reference default specimen screenshots at 390×844. Both use a dotted scene with the panel aligned to the physical right, panel height near the scene height, and a visible underlay; Norato panel proportion is about 56% of scene width. Norato keeps the existing Button preview frame and yellow palette.
- [x] Vue typecheck/build, token and catalog checks, and diff whitespace checks passed; build reports the existing large JavaScript chunk advisory.
- [ ] Independent screen-reader review remains open; the browser accessibility tree and keyboard interaction were reviewed, but no screen reader was run.

## Popover — implementation checkpoint (2026-11-08)

- [x] Detail page follows the Button structure: inert preview, executable playground, copyable Vue example, and nine contract sections.
- [x] Corrected the preview's RTL centering; removed overlapping background copy and replaced the external sample URL with a Norato example link.
- [x] Browser confirmed trigger exposes `aria-haspopup`, `aria-expanded`, and the generated content relationship; dialog name comes from the trigger and its description is associated. Escape closes and restores focus. Collision handling moved the requested bottom placement to top near the viewport edge.
- [ ] Compare matched viewport captures with the design reference; review all 12 type × placement combinations, alignments, modal/disabled states, outside click, keyboard focus, arrow direction, and 390/320 widths. Independent screen-reader review also remains open.
- [ ] Run final tokens/catalog checks, Vue typecheck/build, forbidden brand scan and `git diff --check` after the current preview/example updates. Do not close Popover DoD yet.

## Popover — visual and interaction follow-up (2026-11-09)

- [x] Matched desktop browser review confirms the shared dotted preview frame, centered Norato trigger, Persian RTL layout, and yellow focus treatment. Local preview uses the shared Button-sized frame; its documentation column is narrower than the design reference.
- [x] Verified all four physical placements (bottom, top, right, left) and their arrow attachment; start/center/end alignment, all three content types, disabled trigger, modal setting, default outside dismissal, Escape dismissal and focus return were exercised in the browser.
- [x] Verified Actions content and form content. Form focuses the email field and exposes submit/cancel actions; sample submit announces local feedback. Copy action was not activated, so the user's clipboard was not changed.
- [x] Fixed the playground stylesheet omission by importing `popover-playground.css`; post-fix screenshot confirms the stage, three aligned controls, checkboxes, form field and action buttons use the intended Norato styling.
- [x] Rechecked default outside click and Escape dismissal in the browser; both close the panel. Modal Escape behavior was checked in the earlier pass.
- [x] At 390×844 and 320×640, the reference frame is 327×300/257×300px and Norato is 343×288/273×288px; Norato's document remains within 375/305px respectively.
- [x] Fixed the static specimen's inherited minimum-height stretch and capped its panel to the frame. Long live content now respects Popper's computed viewport space and scrolls inside the body. Side placement falls back to bottom on ≤840px screens to avoid covering the trigger.
- [x] Verified long-content scrolling, LTR, vertical collision, non-modal Tab exit/dismissal and modal focus loop. Accessibility tree reports a named dialog and trigger expanded state.
- [ ] Independent screen-reader announcement review remains open; see `specs/013-design-system-parity/popover-checklist.md`.
- [x] Tokens and catalog checks pass; Vue typecheck/build succeeds; forbidden-name scan is clean; `git diff --check` passes with line-ending normalization warnings. Production build retains the known 1,238.40 kB minified JS chunk advisory.
- [ ] Keep Popover DoD open for the independent screen-reader review.

## Accordion — selected row separation follow-up (2026-11-08)

- [x] Switched the live playground from the first open row to the second. The first title remained visible in the accessibility tree and browser render.
- [x] Open trigger computed to `rgb(255, 248, 224)` while the associated content region computed to white; RTL heading and chevron stayed in place.
- [ ] Verify other row styles, multiple-open mode, and mobile viewport after this visual correction; final component DoD remains open.

## Accordion — desktop interaction and reference review (2026-11-08)

- [x] Compared the rendered preview with the selected visual reference at the same 1536×642 browser viewport. Both use the same centered, compact accordion composition, Persian RTL title/chevron placement and expanded first row; Norato frame is narrower because its docs column is narrower.
- [x] Playground verified single-row switching, multiple rows, custom slot content, separated/card selections, disabled item and disabled group. ArrowDown skipped a disabled row, Home returned to the first trigger and Enter toggled the focused row.
- [x] Browser accessibility tree reports expanded/collapsed state, named content regions and disabled triggers. No vertical stretching appeared in the reviewed desktop sample.
- [x] Follow-up keyboard pass: Tab moved focus to the next trigger with a visible yellow 2px ring; ArrowUp, Space and End worked. Closed custom-content panels removed their nested action from the accessibility tree.
- [x] Playground size control applied Small, Large and XLarge and synchronized the usage snippet; the XLarge live row grew naturally without filling/stretching the preview.
- [x] At 390px, document width stays 390px; sample frame is 358.4×288px and live accordion 320×190.4px. At 320px, document width stays 320px; frame is 288×288px, accordion 254.4px wide, trigger 52px high and expanded panel ~252.8×50.4px. RTL text wraps naturally with no vertical stretch or page overflow.
- [x] Matched 390px reference capture measured 342.4×300px frame and 337.8px inner accordion. At 320px, reference frame measured 272×300px and reference document overflowed to 326px; Norato stayed at 320px. Frame difference follows Norato's shared Button specimen and available docs column.
- [ ] Complete size/style matrix, `collapsible=false`, LTR direction, reduced-motion rendering and independent screen-reader review remain open. See `specs/013-design-system-parity/accordion-checklist.md`; DoD remains open.

## Image — implementation checkpoint (2026-11-08)

- [x] Four exported Vue adapters added: `NoratoImage`, `NoratoImageThumbnail`, `NoratoImageGallery`, and `NoratoLightbox`; catalog route resolves to a Button-style detail page with preview, executable playground, usage snippet and nine contract sections.
- [x] Intrinsic image aspect ratios and `object-fit` prevent geometric stretching; source errors preserve frame geometry. Yellow selection and keyboard focus use distinct visual treatments; thumbnail target is at least 48px.
- [x] Fresh Vite browser render confirmed Button-style preview/playground/snippet plus all nine rendered contract sections. Same mobile viewport was used while viewing the design reference and Norato (385×630). Grid/Masonry/Featured render; at 385px Grid is two columns without visible overflow. Default, Loading and Error frames retain their ratio and accessible name. Lightbox opens focused on close, ArrowRight wraps 1→4 in RTL, Escape closes and returns focus.
- [x] Matched viewport measurements at 1280×720: Norato preview frame 584×288px and media 320×240px; reference frame 636×331px and media 324×243px. At 390px: Norato frame 343×288px, media 320×240px, document 375px; reference frame 327×315px, media 320.76×243px, document 375px. At 320px: Norato frame 273×288px, media 263×197.25px, document 305px; reference frame 257×315px, media 245×243px, document 326px. Responsive art preserves its 4:3 ratio; frame geometry still differs and is recorded for review.
- [x] Playground now controls image `object-fit` (`cover`/`contain`) and includes the selected fit in the generated Vue snippet. Static preview media is capped at the 320px semantic Norato token so it no longer forces the specimen frame taller.
- [x] Same browser viewport compared the refreshed inert specimen with the live image reference. Abstract artwork now uses a warm field, soft sun disc, cooler lower edge and shaded caption; media remains 320×240px and the shared preview frame remains 288px tall.
- [x] Image Playground exposes thumbnail size, Default/Selected/More state and disabled mode. Browser inspected all nine size/state combinations, verified the +12 accessible name, disabled activation block, Space activation and yellow keyboard focus ring. The generated snippet tracks size and selected/more/disabled values.
- [x] Live Image hover adds a dark shade across Square, Landscape, Wide and Portrait ratios while preserving their aspect ratios. At 16:9, `contain` preserves the complete source with side gutters and `cover` crops to fill without distortion. Snippet output followed the selected ratio and fit.
- [x] Fresh Lightbox browser pass verified previous/next controls, RTL 1/4↔4/4 positions, focus retention, Tab/Shift+Tab containment and Escape focus return. Exact image bounds were measured at 1920×908, 390×844 and 320×640; the media stays within the modal, retains 4:3, and the document does not overflow horizontally.
- [x] Post-thumbnail-playground responsive screenshots and geometry checks pass at 390×844 and 320×640: stacked controls, bounded preview/thumbnail/code regions and no document overflow.
- [ ] Failed-network behavior, reduced-motion emulation, and independent screen-reader review remain open. See `specs/013-design-system-parity/image-checklist.md`.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck and production build pass. Build emits the existing warning that its JavaScript chunk exceeds 500KB; `git diff --check` passes with line-ending normalization warnings only.

## Carousel — implementation checkpoint (2026-11-08)

- [x] Button-style detail route exposes inert visual preview, executable Vue playground, copyable snippet, and all nine contract sections.
- [x] Four adapter exports, controlled index, RTL previous/next semantics, indicator, and native scroll-snap are present.
- [x] Browser review at 385px confirmed adjacent-slide peek, first slide/dot at right, Norato yellow active indicator, intrinsic art ratio, direct slide-2 selection, and Space-key next navigation to slide 3.
- [x] Added a visible 22-combination matrix for 3 Carousel sizes, 3 Slot sizes, 8 Indicator variants and 8 Dot variants; accessibility tree confirms all 19 Slot/Indicator/Dot samples render.
- [x] Replaced manual RTL scroll-delta arithmetic with inline-centered slide scrolling (`block: nearest`) after review identified RTL index/scroll mismatch.
- [ ] Matched desktop comparison, 320px overflow, 390px layout, touch/mouse, no-wrap boundaries, first/middle/last direct selection, LTR, external controlled-model updates and screen-reader review remain open in `specs/013-design-system-parity/carousel-checklist.md`.
- [x] Token/catalog checks, Vue typecheck/build and `git diff --check` pass. Build warns about the >500KB JavaScript chunk.

## Chat — implementation checkpoint (2026-11-08)

- [x] Button-style route provides an inert structured preview, interactive Playground, copyable Vue snippet and nine contract sections.
- [x] Six Vue exports cover the root conversation, message, header, date divider, typing indicator and composer.
- [x] Reference/local narrow viewport comparison confirmed RTL incoming-right/outgoing-left, grouped metadata, and Norato yellow outgoing accent.
- [x] Keyboard Enter sent and announced a message; draft cleared. Sender/type controls and display-only recording state were exercised; the recording status correctly disables text entry.
- [ ] Full 10 sender × type visuals, six part states, 320/390/desktop geometry, file event, LTR, remaining keyboard/disabled behavior and independent screen-reader review remain open in `specs/013-design-system-parity/chat-checklist.md`.

## Input — Textarea direction follow-up (2026-11-08)

- [x] Browser selected LTR in the live Input playground; its generated example synchronized to `textareaDir = ref('ltr')` and `dir="ltr"`.
- [x] Typed Persian sample rendered at the left edge in LTR; RTL behavior and right-edge alignment had already been visually verified in the prior follow-up.
- [x] Token/catalog checks, Vue typecheck/build and `git diff --check` passed. Build reports the existing >500KB JavaScript chunk advisory.
- [ ] Independent screen-reader review and full visual matching remain open; Input DoD stays open.

## Segmented Control — Segment Item visual matrix (2026-11-08)

- [x] Added an inert 64-cell gallery covering both styles, four sizes, selected/unselected and Default/Hover/Disabled/Focus states; the live playground remains the interactive source.
- [x] Local desktop browser review shows the Contrast selected state in yellow with dark text for Default and Hover; focus examples retain a visible high-contrast ring. RTL ordering and fixed target layout remain represented by the existing adapter.
- [ ] 390px gallery, exact bounding-box/focus-ring measurements, interactive review of all 64 item-state combinations and independent screen-reader session remain open; Segmented DoD stays open.
- [x] Final token/catalog checks, Vue typecheck/build, `git diff --check`, and repository no-reference-text scan passed. Build warns that the JS chunk is above 500KB.

## Tree View — browser review (2026-11-09)

- [x] Compared the local preview and reference at the same browser window size. Raster measurements are approximate: frame 577×288 vs 630×299; inner panel 256×129 vs 258×134. Default marker, compact glass panel, RTL folder/file order and open/closed arrow direction align; local preview uses Norato text/palette and preserves its narrower docs-column frame.
- [x] The interactive page exposes Guides Off/On and controlled/uncontrolled models. Guide toggle leaves selection/expansion intact. Controlled and default IDs initialize nested items; clicking a folder selects and expands it, then clicking its chevron toggles expansion without changing selection. Generated snippets track both modes.
- [x] Keyboard review: Up/Down/Home/End, RTL Left/Right, Enter/Space and typeahead all work. Disabled node is skipped and cannot be selected; global disabled marks every row disabled and blocks expansion/selection. Tab enters the tree at its first item and exits to the next control.
- [x] Accessibility tree exposes one named tree and nested rows/groups, with selected, expanded, and disabled states. Reka TreeItem supplies level/position metadata. Independent screen-reader announcement remains unverified.
- [x] Focus screenshot exposed a second browser-default dark outline. Clearing the focused item root fixed the duplicate; the fresh screenshot shows one 2px yellow row ring with the 2px tokenized offset.
- [x] At 390×844 and 320×844, document widths are 375px/305px; the Tree View playground measures 343px/273px and all visible rows are 48px. Icons remain intrinsic at 18px with 16px chevrons. A shared accessibility-card overflow was fixed; Tree View and Input both now remain at 305px document width in 320px mode.
- [ ] Pointer-only hover, reduced-motion browser emulation and independent screen-reader review remain open.

## Input — follow-up browser review (2026-11-09)

- [x] Compared local and design-reference Input pages in the same 1920×900 browser window. Raster frame estimates are 580×288px locally and 632×300px in the reference; local frame width follows the content column.
- [x] Local top specimen visibly uses the envelope beside its title, a Persian RTL placeholder, no sample email and no generic helper line. Token/source inspection confirms a 36px pill shell in a 48px interaction target, 1px neutral `#e8e8e8` default stroke and a single yellow stroke on focus.
- [x] Focused the live name field; the screenshot showed the yellow capsule stroke without a second dark outline. Input page remains on the fresh browser route; no sample value or playground toggles were changed.
- [ ] Exact 390/320 current browser comparison, all visual variant screenshots and independent screen-reader review remain open; Input DoD stays open.

## Notification Center — implementation and browser checkpoint (2026-11-09)

- [x] Added a typed Vue adapter with Popover and side-panel presentations, controlled/uncontrolled notification data, All/Mentions filtering, grouped days, unread updates, mark-all-read, optional actions, disabled trigger and empty state. Added a live Playground, a static Button-sized specimen, usage example and component contract.
- [x] Compared local and reference screenshots in the same 1920×900 browser viewport. Approximate frames are 580×288px locally and 630×300px in the reference, constrained by the docs column; inner preview panel is about 320×171px locally and 322×174px in the reference. Spacing and 32px avatar geometry were adjusted. Yellow unread state and neutral marks are retained.
- [x] Browser verified Popover/Panel open, Escape close and trigger focus return; All/Mentions filtering; empty state; mark-all-read and individual read state; action event feedback; selection closes and updates read status; controlled/uncontrolled models; disabled bell. Browser accessibility tree exposes names, groups, disabled state and live unread status.
- [ ] 390/320 responsive comparison and no-overflow evidence remain open; exact LTR placement and target-size measurements remain open; keyboard-only open and outside-click dismiss were not tested. Independent screen-reader review remains open.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, Vue production build, and `git diff --check` pass. Build reports the existing large JavaScript chunk advisory (1,238.52KB). Repository scan found no forbidden reference-brand name after removing the one temporary checklist mention.

## Modal — implementation review (2026-11-09)

- [x] Reconciled the component ledger with the existing public `NoratoModal` and `NoratoDialog` adapters; recorded the remaining DoD gates in `specs/013-design-system-parity/modal-checklist.md`.
- [x] Local browser shows the static preview, playground, copyable Vue sample and contract sections in the Button page structure. Compared the desktop frame with the reference in the same browser window; the local frame follows the narrower documentation column and is shorter. Form mode opened, accepted Persian text, submitted and returned focus to its trigger. Dialog mode closes with Escape and restores focus. Busy mode disabled its actions and resisted Escape during the busy interval.
- [x] Default interactive Dialog tone now matches the destructive delete specimen. `NoratoModal` exposes `busy` as `aria-busy`; the public contract now documents it.
- [x] Browser verified default outside-click dismissal, and with `dismissible=false`, both Escape and outside click leave the dialog open; Cancel closes it. Escape in the default state also closes the dialog and restores focus to its trigger.
- [x] Matched responsive viewport measurements, all sizes/tones and named `dialog`/`alertdialog` semantics were subsequently verified in the 2026-11-09 Modal browser follow-up below; the earlier snapshot limitation is superseded.
- [x] Token/catalog checks, Vue typecheck/build, forbidden-name scan and `git diff --check` passed at the Modal follow-up checkpoint.

## Cross-page playground input styling — browser follow-up (2026-11-09)

- [x] Updated shared text/number/select demo controls and affected specimen controls to use the 36px visual-height token, pill radius and Norato neutral/yellow strokes. Playground field titles use Estedad Bold and placeholders use the established RTL Vazirmatn Light treatment.
- [x] Follow-up on Pagination and Foundation: numeric controls and Foundation name/search examples visibly render as capsules; keyboard/pointer focus on Pagination's current-page field and Foundation's name field shows one yellow Stroke without a dark outer ring.
- [ ] Mobile sizing, disabled-state styling and same-viewport reference comparison for the Pagination and Foundation controls remain open.
- [x] Table search uses a 36px visible capsule centered in its 48px interaction target; browser focus shows the single yellow Stroke and keeps the search field accessible.
- [ ] Table search mobile sizing and same-viewport reference comparison remain open.
- [x] Date Picker value field now uses a 36px capsule within its 48px target. Local browser confirmed keyboard opening, Escape close/focus return, hover/focus yellow Stroke, invalid state, and muted disabled state. The calendar action retains its 48px target.
- [ ] Date Picker field mobile sizing and same-viewport reference comparison remain open.
- [x] Select trigger and internal search now use 36px capsule surfaces inside their minimum 48px interaction targets. Desktop browser review confirms one yellow Stroke on the open trigger and focused search field, with no duplicate outer border.
- [ ] Select capsule mobile sizing and same-viewport reference comparison remain open.
- [x] Combobox: after selecting `پژوهش کاربر`, reopening no longer filters suggestions by the selected label; the two recent choices return and the committed label stays visible. Typing `پژوهش` shows its matching option and create action; selecting the existing option, closing with Escape and reopening all preserve the correct selected label. Multi mode shows the selected chip with an empty search field and no duplicated label.
- [x] Refreshed the live Input page at desktop size. Phone prefix, min/max/step and select controls visibly render as compact capsules; focus on the phone prefix shows one yellow stroke without a dark outline.

## Input radius — keyboard focus and error state follow-up (2026-11-09)

- [x] On the live Input page, keyboard focus on the name field shows the yellow capsule Stroke with no dark or blue outer ring.
- [x] With the shared error state enabled, the focused field keeps the yellow Stroke and displays its red error message; the error toggle and fixture were restored afterward.
- [ ] Mobile viewport and the full combined-state sequence remain open; this browser session did not provide a reliable viewport-resize control.
- [x] Token and catalog checks, Vue typecheck/build and `git diff --check` pass.
- [ ] Other component routes, 390/320px layouts, hover and disabled states remain unverified for this shared styling change.

## Drawer — desktop visual review (2026-11-09)

- [x] Compared the local and design-reference pages at 1920×900. Frame estimates are 580×300px locally versus 630×324px in the reference; the local content column is narrower. The initial screenshot exposed the local default RTL specimen on the left, contrary to the reference. Updated specimen placement and live side-panel inner-corner radii to use physical left/right edges.
- [x] Fresh local screenshot shows the static default panel on the right. Live left-side selection renders at the left edge with opposite inner corners; Bottom Sheet opens from the bottom with its handle. Escape closes and restores focus to the launch trigger. Browser accessibility tree exposes dialog title, description, close action, filter group, checkboxes and footer actions, but the surface is mapped as a generic container by this snapshot and the role still needs explicit confirmation.
- [x] Found that `drawer-playground.css` was not imported at all; this left the controls unformatted and native fieldset styling visible. Imported it and removed the fieldset border while retaining semantic grouping.
- [x] Browser reviewed all three side-panel sizes and all three Bottom Sheet detents. Default outside click closes; with dismissible off, Escape and outside click leave it open while the explicit close remains functional. Selecting a filter and applying closes the sheet. Current page settings were restored to right/medium/auto and dismissible on.
- [x] Follow-up browser review at 390×844 and 320×640 confirmed right/left side panels fit, and auto/half/full Bottom Sheets remain in bounds with no document overflow. Long content scrolls inside the panel in all three detents at both mobile widths.
- [x] Each filter toggles independently. Clear resets both and keeps the drawer open with a polite status announcement; Apply announces and closes.
- [x] Confirmed runtime `role="dialog"`, `aria-modal`, title/description references, LTR propagation into the Drawer and Checkbox adapters, and Tab focus containment across close, filters and actions.
- [x] Token/catalog checks, Vue typecheck/build, forbidden-name scan and `git diff --check` pass.
- [ ] Visual hover/focus review, reduced-motion emulation and independent screen-reader review remain open; Drawer is not fully DoD-complete.

## Card — implementation checkpoint (2026-11-09)

- [x] Added six Vue adapters, public exports, catalog readiness, a Button-sized static specimen, interactive playground and component contract. Norato surfaces retain the yellow selection/focus accent.
- [x] Same 1905×951 viewport comparison measured the Norato frame/card at about 580×288/272×248px and the design reference at 630×299/270×250px. Reduced the specimen card to 272px and inset/rounded its media; the page frame remains narrower because of the documentation column.
- [x] Browser exercised all six card kinds, four base styles and their selected/disabled states, four content layouts, three stat trends, both profile layouts, pricing feature state, radio and checkbox selection. Generated Vue examples synchronize with chosen variant/state.
- [x] Token/catalog checks, Vue typecheck, production build, `git diff --check` and project scan for prohibited reference-brand text passed.
- [x] Browser confirmed article navigation to `/guide`, radio ArrowDown/Space selection, yellow keyboard focus, checkbox toggling and disabled radio exposure.
- [ ] 390/320 overflow, long text and independent screen-reader review remain open in `specs/013-design-system-parity/card-checklist.md`.

## Timeline — responsive collision fix (2026-11-09)

- [x] Browser review at 390px and 320px found and fixed a mobile collision: an undefined spacing token had removed the Timeline item's reserved marker gutter.
- [x] Rechecked all 26 cases (9 item, 15 marker, 2 feed); no horizontal document overflow or matrix-cell overflow. Closest marker/title separation is 16px at both widths.
- [x] RTL and LTR positions switch correctly at 320px. Playground restored to RTL/default before review ended.
- [x] Compared the desktop static specimen with the selected reference at 1907×907; Norato's shared Button-style frame remains about 580×288px versus 630×326px in the reference because the documentation content column is narrower.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck/build, and `git diff --check` pass. Commit `37565c0547c5cf834119dd06821583c9fc158ac8` is pushed and matches the GitHub branch. Independent screen-reader review remains open.

## Charts — browser accessibility tree follow-up (2026-11-09)

- [x] Opened the chart data disclosure in the local browser. The accessibility tree exposed a named table, caption, category row headers, series column header, and all six values in source order.
- [x] Pressed Space on the disclosure; the tree changed from expanded/table-present to collapsed/table-absent. The decorative SVG stayed out of the accessibility tree; chart title and summary remained available.
- [ ] Independent screen-reader session remains unperformed; see `specs/013-design-system-parity/charts-checklist.md`.

## Divider — semantic and decorative output follow-up (2026-11-09)

- [x] Browser review confirmed the playground control is named «تزئینی» and defaults on. In decorative mode, the rendered separator has `aria-hidden="true"` and `role="none"`.
- [x] With decoration off and orientation vertical, the rendered component exposes `role="separator"` and `aria-orientation="vertical"`; its measured rule is 1×48px. Playground was restored to decorative/horizontal/subtle/8px/RTL.
- [ ] Independent screen-reader review remains open; no claim of announced output was made.

## Accordion — direction and interaction matrix follow-up (2026-11-09)

- [x] Added playground controls and generated-code options for `dir` and `collapsible`; corrected the component root's inherited direction so LTR placement mirrors as expected.
- [x] Browser verified `collapsible=false`, measured all four trigger sizes (48/52/56/64px), and exercised 16 layout/style/size configurations expanded and collapsed (32 states).
- [x] Verified all trigger/panel `aria-controls` and `aria-labelledby` references, hidden closed panels, and closed custom-content exclusion from keyboard/AX navigation.
- [ ] Reduced-motion browser emulation and independent screen-reader review remain open in `specs/013-design-system-parity/accordion-checklist.md`.

## Modal — size, tone and mobile follow-up (2026-11-09)

- [x] Browser checked all 12 size × tone combinations. Dialog widths are 320/480/640px at desktop and all twelve kept a natural 256px height.
- [x] At 390/320px viewports, the dialog measured 320/288px wide, remained within the viewport and caused no horizontal document overflow.
- [x] Cancel and confirm outcomes, public close action, focus restoration, dialog/alertdialog roles and title/description references were inspected. Close target measured 48×48px.
- [x] Busy mode exposed `aria-busy="true"`, disabled both actions and reported completion; busy dismiss behavior remains blocked as intended.
- [ ] Controlled/uncontrolled `open`, reduced-motion and independent screen-reader review remain open in `specs/013-design-system-parity/modal-checklist.md`.

## Modal — focus ring and validation follow-up (2026-11-09)

- [x] Browser found that a broad Modal `:focus-visible` rule removed the NoratoButton focus shadow. Removed the conflicting rule; keyboard focus now renders a 2px yellow ring.
- [x] Added direction, disabled-confirm, long-content and required-field validation controls to the live Playground; generated Vue examples now include selected direction and relevant form state.
- [x] Browser verified confirm disabled behavior, Tab/Shift+Tab wrapping, LTR propagation into the nested field, and invalid-to-valid form recovery.
- [x] At 320×640, the 288px modal stays in the viewport; the inner body scrolls 758px content within a 396px body box. No horizontal overflow.
- [ ] Full hover matrix, controlled/uncontrolled `open`, reduced-motion emulation and independent screen-reader review remain open in `specs/013-design-system-parity/modal-checklist.md`.

## List — selection and keyboard follow-up (2026-11-09)

- [x] Selected row changed from `زبان` to `حساب کاربری` and back. Both row titles remained visible, and the active row used a pale-yellow fill distinct from its surrounding list surface in both inset and grouped layouts.
- [x] In grouped layout, Tab moved through switch → selectable row → checkbox → selectable row. Enter and Space changed the selected row; switch and checkbox toggled and reported their values in the browser accessibility tree. Fixture values and layout were restored.
- [x] At 390×844 and 320×844, plain, inset and grouped layouts fit within document widths of 375px and 305px. The stage measures 300px/273px, inner List 282px/255px; rows remain at least 48px tall. No horizontal overflow.
- [ ] Independent screen-reader review remains open; see `specs/013-design-system-parity/list-checklist.md`.

## Card — mobile media proportion follow-up (2026-11-09)

- [x] At 320×844 and 390×844, the Card page remained within the viewport (document widths 305px and 375px). The preview frame measured 273×288px and 343×288px; its static content cards measured 263×244px and 272×248px. RTL stayed intact.
- [x] Same-viewport reference review at 390×844 measured the reference stage/card at 327×324px / 270×253px and Norato at 343×288px / 272×248px. Norato keeps the shared 288px frame while the content card remains close to the reference dimensions.
- [x] Found and fixed the horizontal Content Card thumbnail stretching beside a taller text column. The square media now measures 112×112px at 320px LTR and 390px RTL; vertical media remains 16:9 at 309×174px. The direction control and generated Vue code were checked; the playground was restored to RTL/vertical afterward.
- [x] Added a short/long Persian content control; selected text is reflected in both the rendered Card and generated Vue code.
- [x] Long-copy matrix passed at 320×844 and 390×844 across vertical, horizontal, overlay and text layouts in RTL and LTR (16 cases). Document widths stayed 305px/375px; horizontal media stayed square at 112×112px; vertical media retained 16:9 proportions (239×134px at 320px, 309×174px at 390px). No horizontal overflow or media stretching.
- [ ] Independent screen-reader review remains open; see `specs/013-design-system-parity/card-checklist.md`.

## Alert — mobile layout follow-up (2026-11-09)

- [x] At 390×844 and 320×844, both Inline and Expanded playground layouts fit without horizontal overflow. Document widths are 375px and 305px; Alert widths are 343px and 273px.
- [x] Expanded content grows to 117px naturally; Inline is 62px. The semantic icon remains 24×24px and the close target remains 48×48px. RTL and `status` role are intact.
- [ ] Full screenshot review across all 20 tone/style/layout combinations, independent screen-reader review, and assistive-technology review of uncontrolled dismissal/focus remain open; see `specs/013-design-system-parity/alert-checklist.md`.

## Chip — long-label removal and mobile preview follow-up (2026-11-09)

- [x] At 390×844 and 320×844, document widths are 375px and 305px; the long 300+ character Persian Chip remains 240×48px in Filter and removable Input modes.
- [x] Found a tall-state regression in the playground: removing the long Input Chip expanded its preview to 469px. Separated the live status text from Restore and clamped the visible message to two lines; the preview now stays 85px high at both widths while the status retains its full 350-character text in the accessibility tree.
- [x] Restore remains 78×48px and receives focus after removal; restoring the Chip returns focus to its remove action. RTL remains intact and no horizontal overflow occurs.
- [ ] Independent screen-reader review remains open; see `specs/013-design-system-parity/chip-checklist.md`.

## List — links and disabled state follow-up (2026-11-09)

- [x] Added enabled link, toggleable disabled-link state, and disabled button examples to the interactive Playground and its generated Vue example. Link activation updates the polite status without navigating away from the docs page. Disabled link changes to non-link content and both disabled rows are omitted from sequential Tab navigation.
- [x] Enabled and disabled link/button samples remain within the responsive layout at both tested widths.
- [ ] Independent screen-reader review remains open; see `specs/013-design-system-parity/list-checklist.md`.

## Custom dropdown source audit (2026-11-09)

- [x] Source search found no native `<select>` or `<option>` tags in `apps/vue/src` or `packages/vue/src`. Shared `PlaygroundSelect` uses a button plus `role="listbox"`/`role="option"`, with ArrowUp/ArrowDown, Home/End, Enter, Space and Escape handling in source.
- [x] Live browser verification on Select: its searchable grouped list opened, exposed a disabled option, Escape closed and returned focus to its trigger, ArrowDown/ArrowUp moved option focus and Enter committed a selection. Fixture was restored to Tehran and both field and status summary showed the baseline value.
- [ ] Fresh rendered and keyboard verification across the other dropdown-consuming component pages remains open; source audit and this Select pass do not cover every page.

## Pagination specimen comparison (2026-11-09)

- [x] Compared local and reference previews in the same 1920×1080 browser viewport. Local specimen now has the centered 288px Norato dotted-glass frame and a yellow current page; its previous/next arrows have no browser-default outline circles. The local frame is about 580px wide due to the documentation column versus about 630px in the reference; no visible distortion.
- [x] `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck and production build passed after the change.
- [ ] Mobile viewport comparison, complete visual state/size/edge matrix and independent screen-reader review remain open; see `specs/013-design-system-parity/pagination-checklist.md`.

## Pagination interaction follow-up (2026-11-09)

- [x] Live browser exercised all four type/size combinations and page totals 1, 7, 8 and 12. Boundary buttons disabled at both ends; Simple summary and generated snippet tracked the selected values.
- [x] Found and fixed the boundary accessible name that previously announced page 0/13; browser AX now reports stable Previous/Next names, including disabled boundaries.
- [ ] Very large/irregular totals, mobile viewport comparison and independent screen-reader review remain open.

## Pagination — mobile frame follow-up (2026-11-09)

- [x] At 390×844 and 320×844 in Simple mode, frames measure 343×74px and 273×74px; document widths remain 375px and 305px. The controls remain 48px high.
- [x] With 120 pages/current page 60, Numbers mode scrolls internally: the nav's content width is 483px while its visible width is 317px at 390px, and 247px at 320px. Document width stays bounded at both sizes.
- [ ] Same-viewport mobile comparison, complete large/irregular totals matrix and independent screen-reader review remain open; see `specs/013-design-system-parity/pagination-checklist.md`.

## Switch and Checkbox specimen audit — browser follow-up (2026-11-09)

- [x] Source audit found legacy choice/Switch styles with no matching templates; removed them instead of recording an ineffective visual correction.
- [x] Browser shows the Checkbox specimen uses `NoratoCheckbox`. The live Switch in RTL measured a 48×48px target and a 40×24px track; checked track is Norato yellow, with a 16×16px white knob, zero border and no shadow. The playground was returned to unchecked.
- [x] Live Switch Error + Disabled was exercised with On=false and On=true. In the off state, the error selector previously overrode the disabled border and left a red stroke; disabled CSS now applies the same neutral track border for both values. AX continued to expose a disabled switch and the error alert remained visible.
- [x] Live follow-up at Small size rendered On=true + Error and both On values with Error + Disabled; disabled interaction preserved its value. Playground restored to Medium, off, enabled and no-error.
- [x] Keyboard follow-up captured visible focus and Space toggling for all six Size × On combinations; pointer-only Hover was inspected separately for both values at Medium and retained the yellow treatment. Error + Disabled is now browser-checked for both values at each of the three sizes.
- [x] After the Switch correction, token/catalog checks, Vue TypeScript validation, production build and `git diff --check` passed; the 428.44KB production entry chunk emitted no large-chunk warning.
- [ ] Matched mobile comparison is complete (2026-11-09); exhaustive live combined-state coverage and independent screen-reader review remain open for Switch. Checkbox's independent screen-reader review remains open.

## Checkbox live behavior follow-up (2026-11-09)

- [x] Local RTL page shows the Checkbox preview, separate live playground, and nine documentation sections. Both 16px and 20px visual sizes rendered without stretching; the row retains its full target.
- [x] Live 16px/20px examples rendered unchecked, checked, and indeterminate. Accessibility tree reported `Value: 2` for indeterminate and `Value: 1` for checked; Space changed mixed to checked, and clicking the visible label changed the value.
- [x] Required shows its label marker and appears in the generated example; Error shows a red control boundary, red description, and associated error alert; Disabled exposes the input as disabled in the Accessibility tree. Playground restored to unchecked, enabled, optional, no-error, 20px.
- [ ] Independent screen-reader validation remains open; browser Accessibility tree review is not a substitute for hearing the announced result.

## Radio Button live behavior follow-up (2026-11-09)

- [x] In the local RTL playground, ArrowDown changed the selected option from monthly to quarterly and updated the status and generated Vue snippet. The focused radio showed the 2px high-contrast ring with yellow halo.
- [x] Error on a selected option showed the error styling and alert. With the group disabled, all three radio inputs became disabled; clicking another option did not change the selection. Required + no selection showed its message, and selecting Yearly cleared the empty state.
- [x] Both 16px and 20px circles rendered proportionally beside RTL labels. Playground restored to monthly, enabled, optional, no-error and 20px.
- [ ] Full live focus/hover/state cross-product and independent screen-reader review remain open for Radio Button.

## Segmented Control live interaction follow-up (2026-11-09)

- [x] ArrowLeft in RTL moved focus Day → Week without changing the selection; Space selected Week, updated the status and snippet, and Right + Space restored Day.
- [x] Disabling Month while selected preserved `month` and showed the neutral disabled appearance; AX exposed the item as both selected and disabled. Arrow navigation skipped disabled Month. Disabling the group exposed all three items as disabled.
- [x] Playground restored to Glass/Medium/3 options, Day selected, group and items enabled.
- [ ] Full live runtime state cross-product and independent screen-reader review remain open for Segmented Control.

# Select warm-focus contrast follow-up — browser evidence (2026-11-09)

- [x] Replaced the blue focus contrast outline with a dark amber Norato focus contrast token (`#805A00`) while keeping the yellow outer focus ring. Measured contrast is 6.21:1 on white and 3.79:1 on the Norato-yellow ring.
- [x] The static Select Focus marker now appears dark amber. In the live Select, ArrowDown moved focus from the searchable field to Tehran without changing the controlled selection; the screenshot showed the amber outline and yellow ring. Escape closed the Reka listbox and returned focus to its trigger.
- [x] Token validation, catalog integrity (49 routes/contracts), Vue TypeScript validation, production build, and `git diff --check` pass.
- [ ] Full visual state/variant screenshot comparison and independent screen-reader review remain open; Select DoD is not complete.

## Shared component detail frame geometry — browser follow-up (2026-11-09)

- [x] Fixed the shared `.component-doc` width cap that constrained the preview to the old 65ch reading measure. The detail page now allows 65ch + the existing 48px spacing token; preview remains bounded by its 640px semantic token and available column width.
- [x] Adjusted shared documentation-column proportions/gap and component preview-frame height tokens to align the rendered Input frame with the Button-sized page and the supplied reference.
- [x] Same-browser measurements: Input and Button frames are both 632×300px at a 1280×540 inner viewport; the visual-reference Input frame is approximately 636×300px. At 390×844, document/frame widths are 375/328px; at 320×844 they are 305/273px. No horizontal overflow or stretched frame was observed at either mobile width.
- [ ] Only Input and Button desktop frame geometry was directly compared at this checkpoint. Other families' content geometry, all state variants, responsive behavior, and independent screen-reader review remain open; do not infer all-family DoD from shared frame tokens.

## Input specimen label spacing — browser follow-up (2026-11-09)

- [x] In a matched 1536×703 browser viewport, reference Input frame measured 636×300px; Norato measured 632×300px. Both inner fields are 324px wide.
- [x] Scoped the spacing correction to the inert Input specimen. Local label top is 102px and 36px field stroke top is 128px relative to the frame; reference is approximately 103px/130px. The title-adjacent email icon, RTL placeholder, and removed sample address/helper remain intact.
- [ ] This correction covers the Input top specimen only. Other variants, responsive captures after the shared frame change, and independent screen-reader review remain open.

## Select shared-frame follow-up — browser evidence (2026-11-09)

- [x] Matched the 1536×703 browser viewport: reference preview is 636×300px and Norato is 632×300px. The reference field is 302.4px wide; Norato's 300px Select control remains centered, RTL and proportionate.
- [x] The preview retains the project-wide 36px visual field inside its 48px interactive target. Label/trigger placement remains compact and the chevron points down in the closed state.
- [x] Fresh matched mobile recapture after the shared frame update was completed at 390×844 and 320×844; exact geometry is recorded in the follow-up below. Full state-gallery and independent assistive-technology review remain open.

## Combobox frame and control width — browser evidence (2026-11-09)

- [x] Matched 1536×703 viewport: frame measures 632×300px locally and 636×300px in the visual reference. The inert Combobox control width is 324px in both renders after setting its semantic preview token to 324px.
- [x] The local control preserves RTL text and both chevrons/search icon placement; its 36px visual capsule remains inside the 48px target.
- [x] Post-refinement matched mobile captures: at 390×844, reference frame 327.2×300px and Norato 326.4×300px; both documents 375px. At 320×844, reference frame 256.8×300px and Norato 256×300px; local document 305px with no horizontal overflow, reference document 326px with a horizontal scrollbar. The local 48px interactive target is retained.
- [ ] Combobox States gallery currently uses a generic blue dot/bar instead of six state-accurate fields; verify scoped correction, state strokes, 36px/48px geometry, RTL and mobile layout in the rendered page before closing this item.
- [ ] Exhaustive combined-state screenshot matrix, cold-load fallback capture, and independent screen-reader review remain open for Combobox.

## Checkbox shared-frame comparison — browser evidence (2026-11-09)

- [x] In the matched 1536×703 viewport, the static frame measures 632×300px locally and 636×300px in the visual reference.
- [x] Checkbox control is 20×20px locally vs 19.44×19.44px in the reference; its row remains 48px high, with the Persian label, description, and checkbox in the expected RTL order. Frame marker placement is 12.8px from the top in both renders.
- [ ] The checkbox comparison covers the static desktop specimen only; it does not add checkbox-specific mobile recapture or screen-reader evidence.

## Radio Button inert specimen spacing — browser evidence (2026-11-09)

- [x] Matched the 1536×703 browser viewport: reference frame 636×300px, Norato 632×300px. The reference radio row pitch is 36.72px; the inert Norato preview now measures 36.8px. First/second/third 20px radio centers differ from the reference by less than 2px relative to their frame.
- [x] Scoped the compact row height and 16px row gap to the inert preview. The live playground remains unchanged; fresh DOM measurement shows three live rows at 48px, 48.8px, and 48px.
- [x] At 390×844, the local Radio Button specimen frame measures 328×300px and the document remains 375px wide (no horizontal overflow). The specimen renders all three options on mobile.
- [ ] A same-viewport mobile comparison against the visual reference, the full live visual-state/focus cross-product, and independent screen-reader review remain open.

## Shared playground input typography — browser follow-up (2026-11-09)

- [x] On the live Input page, four setting fields changed from inherited Estedad Bold to explicit Vazirmatn regular 12px; measured RTL direction, 36px height, pill radius and `#e8e8e8` resting border on every field.
- [x] Shared generic playground text controls exclude checkbox switches from the text-field sizing rule.
- [ ] Hover/focus transition and remaining Input visual variants still require browser review; this does not close the Input family DoD.

## Input matched mobile comparison — 2026-11-09

- [x] At 390×844, both reference and Norato documents measure 375px wide. Preview frame measures 327.2×300px in the reference and 328×300px in Norato.
- [x] Norato's top field is a 36px visual capsule in a 48px target. Label computes to Estedad/700; RTL placeholder computes to Vazirmatn/12px/300. User-approved removal of example address/helper remains in effect.
- [ ] This verifies only the top specimen at mobile width; full Input variants/states and independent screen-reader review remain open.


## Select matched mobile frame follow-up — 2026-11-09

- [x] At 390×844, reference frame is 327.2×300px and Norato is 326.4×300px (0.8px narrower). Reference field width is 302.4px; Norato trigger is 300×48px, preserving the 48px interaction target. Both documents measure 375px.
- [x] At 320×844, reference frame is 256.8×300px and Norato is 256×300px (0.8px narrower). Norato document is 305px wide with no overflow; the reference document is 326px and shows horizontal overflow. The local 48px trigger is 246.4px wide vs reference field 245.4px.
- [x] Responsive frame cap now uses the available viewport and Norato spacing token, retaining the 300px frame height without narrow-screen stretch.
- [ ] Full Select state screenshot matrix and independent screen-reader review remain open.

## Shared contract gallery corrections — 2026-11-09

- [x] Source correction: restore `entry.label` for the shared Variants card heading; keep Combobox state normalization scoped to Combobox cards.
- [x] Source correction: use Norato yellow for the static clock accent and neutral tokens for non-selected Anatomy markers; preserve blue for links and informational semantics.
- [ ] Browser review of affected generic Variants, Anatomy and Time Picker pages at desktop/mobile sizes remains pending. The local Chrome tab is minimized and tab automation timed out; the in-app browser also timed out. No rendered result is claimed.
- [ ] Recheck Combobox six-state gallery mappings and 36px/48px geometry at desktop/mobile sizes; the prior visual data predates the final mapper change.
