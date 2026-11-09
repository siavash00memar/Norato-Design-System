# Definition of Done per component

- [ ] Matching design reference page and current Norato page inspected at desktop and mobile widths.
- [ ] Preview composition, hierarchy, spacing, radius, icon order, and proportions compared; intentional Norato color/type/target deviations documented.
- [ ] No accidental vertical or horizontal stretch; component box geometry checked independently of its preview frame.
- [ ] Same page structure as Button: preview, runtime snippet or maturity note, and all nine contract sections with meaningful family-specific content.
- [ ] RTL reading order, Persian labels, and 48px minimum interaction targets verified.
- [ ] Supported interactions, keyboard, focus, disabled, loading, invalid, and responsive states checked; unsupported states labeled visual-only.
- [ ] Contract, Figma component rules, tasks, request-validation checklist, and error log updated when behavior or visual rules change.
- [ ] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, and `pnpm --dir apps/vue build` pass after the change.

Only check a line when the corresponding evidence was observed for that component. Record unavailable checks explicitly; do not mark the family complete while a required check is open.

## Switch evidence (2026-11-01)

- [x] design reference page and Norato page inspected in the browser; design reference preview has one label/description field and Default marker; Norato uses the same composition and its own semantic yellow palette.
- [x] Current Norato geometry measured: frame 320×288px, target 48×48px, medium track 40×24px; RTL and no horizontal document overflow. Earlier 390×844 browser measurement also found a 375px document width.
- [x] Browser keyboard check: Space toggled `aria-checked` false→true; Enter toggled true→false. AX tree exposed role `switch`, name “اعلان‌ها” and associated description.
- [x] Three track sizes × off/on retained the 48×48 target in the earlier browser matrix; track geometry was 32×20, 40×24 and 48×28px.
- [x] Earlier implementation check observed a blue hover border; that stale result is superseded by the Norato yellow hover rule and current yellow checked track. Space/Enter, error association and true disabled behavior were previously verified; full live state recheck remains open.
- [x] Current Reka adapter revision: error exposes `aria-invalid=true` and associated error text; disabled is a real disabled switch; keyboard focus shows a 2px outline with 4px offset.
- [x] Token/catalog, Vue typecheck, production build and `git diff --check` passed; build retains the >500KB chunk warning.
- [ ] Full 30 Switch + 6 Switch Field visual state combinations, keyboard focus-ring measurement, and independent screenreader review remain open.

## Segmented Control evidence (2026-11-01)

- [x] design reference and Norato renders compared in the same desktop (1280×900) and mobile (390×844) viewports. Preview is one three-option group, with rightmost first option selected, dotted glass, Default marker and Norato yellow/blue surface tones.
- [x] Desktop frame measured 632×288px (design reference approximately 630px wide); mobile frame 320×288px. The preview group is 260px wide; mobile document width is 375px, with no horizontal overflow.
- [x] Reka ToggleGroup DOM reports a named group, native buttons with `aria-pressed`, RTL direction, visible keyboard focus, and 48px targets for Small/Medium/Large, 56px for XLarge.
- [x] All 24 combinations of style, size and item count (2–4) retained RTL first-option placement, minimum hit target, and no label overflow.
- [x] At mobile viewport 390×844, XLarge + Contrast + four items rendered as one horizontal row with no vertical label stretch; the generated Vue snippet matched all three settings.
- [x] Pointer hover, keyboard arrows in RTL, Space, Enter, Home, End, keeping selection non-empty, single-item disabled and whole-group disabled were checked in the browser.
- [x] In a fresh mobile keyboard check, ArrowLeft moved focus from روزانه to هفتگی without changing selection; Space selected هفتگی. Right + Space restored روزانه, and the controlled value/snippet reflected the change.
- [x] Playground restored to Glass/Medium/3 with روزانه selected; temporary viewport override reset.
- [x] Fresh Vite render shows the same detail structure as Button: preview, Vue adapter/playground and all nine contract sections. The older running dev process had a stale glob; a fresh process fixed the render without a source workaround.
- [x] Variants now renders the 64 Segment Item style×size×selection×state combinations in an inert gallery. Desktop browser review covered both styles and their state groups; Contrast selected remains yellow with dark text, including Hover, and Focus remains high-contrast.
- [ ] Independent screenreader software, exact DOM bounding-box/focus-ring measurements, mobile gallery inspection, and interactive runtime review across the full 64 item-state cross-product remain open; DoD stays open.
- [x] After this evidence update, `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build and `git diff --check` passed; build retains the >500KB chunk warning.

## Segmented selected item disabled — controlled-state follow-up (2026-11-09)

- [x] The Playground preserves its controlled value when the selected item becomes disabled; it resets only if the selected item is removed by reducing option count.
- [x] Browser confirmed Month stays the selected value after disabling that item; its disabled semantics and neutral disabled styling take precedence over selection in both Glass and Contrast.
- [ ] Full interactive runtime state cross-product and independent screen-reader review remain open.

## Select behavior acceptance checklist

- [x] Reka UI 2.11.0 با Vue peer `>=3.4.0` و Vue پروژه `^3.5.0` سازگار است؛ primitiveهای SelectRoot/Content/Item در بستهٔ نصب‌شده بررسی شدند.
- [x] انتخاب تکی کنترل‌شده منوی شیشه‌ایِ توکن‌دار را باز می‌کند و با انتخاب «اصفهان» مقدار والد همان لحظه تغییر کرد و منو بسته شد؛ در مرورگر بررسی شد.
- [x] جست‌وجوی اختیاری گزینه‌ها را فیلتر می‌کند، گروه‌ها را نگه می‌دارد و برای نتیجهٔ خالی پیام status نشان می‌دهد؛ در مرورگر بررسی شد.
- [x] چندانتخابی Chips/Summary، قاب چک‌باکس گزینه‌ها، مقدار موقت، انصراف و تأیید را پشتیبانی می‌کند؛ خلاصه از ۱ به ۲ مورد پیش از ثبت تغییر کرد ولی وضعیت والد تا تأیید ثابت ماند؛ پس از تأیید دو مقدار ثبت شد.
- [x] Escape تغییر ثبت‌نشدهٔ چندانتخابی را لغو کرد؛ ArrowDown از جست‌وجو به گزینه رسید؛ در منوی بدون جست‌وجو End روی «رشت» (آخرین گزینهٔ فعال) ایستاد و ArrowDown با عبور از «به‌زودی» غیرفعال به «تهران» رفت.
- [x] چهار اندازه با ارتفاع حداقل ۴۸px، برچسب داخل/بیرون، RTL، required، error، disabled، loading و read-only در playground و مرورگر بررسی شدند؛ برچسب داخلیِ Summary/Chips در دسکتاپ و موبایل ۳۹۰px ارتفاع ۵۶px دارد.
- [ ] Desktop/mobile browser DoD and technical gates pass; per-family status may be checked only after all rows above pass.

## Radio Button evidence (2026-11-01)

- [x] design reference Radio and Norato Radio were compared at desktop and mobile; the design reference specimen uses a glass ring/dot, three Persian choices, and Default marker. Norato keeps its own semantic tokens and yellow primary-selection accent.
- [x] Norato’s mobile specimen is 320×288px with a 375px document at 390×844; its three rows remain 48px, RTL, and free of horizontal overflow. Desktop frame is bounded by the documentation content column.
- [x] The playground exposes a named radio group, accurate selected value, required/error/disabled controls, and synchronized Vue snippet. `ArrowDown` changed monthly to quarterly and `ArrowUp` restored monthly; one non-selected quarterly row visibly entered hover without changing selection.
- [x] The 12 checked/value/size combinations for Default/Error/Disabled were measured; targets stayed 48px and focus ring was 2px. The page contains Preview, executable Vue playground, and all nine contract sections.
- [x] After this evidence update, `pnpm check:tokens`, `pnpm check:catalog`, Vue typecheck, production build and `git diff --check` passed; build retains the >500KB chunk warning.
- [ ] Full 20-cell focus/hover visual matrix and independent screen-reader review remain open; do not close Radio DoD yet.
- [x] Radio playground empty simulation, visible status and generated Vue value now share one effective model; selecting from empty clears the simulation. Required-empty and selected-error feedback were browser-verified.
- [x] After the playground correction, token/catalog/type/build/diff gates passed; production build warns that the 642.00KB chunk exceeds 500KB.
