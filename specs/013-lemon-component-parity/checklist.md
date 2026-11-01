# Definition of Done per component

- [ ] Matching Lemon page and current Norato page inspected at desktop and mobile widths.
- [ ] Preview composition, hierarchy, spacing, radius, icon order, and proportions compared; intentional Norato color/type/target deviations documented.
- [ ] No accidental vertical or horizontal stretch; component box geometry checked independently of its preview frame.
- [ ] Same page structure as Button: preview, runtime snippet or maturity note, and all nine contract sections with meaningful family-specific content.
- [ ] RTL reading order, Persian labels, and 48px minimum interaction targets verified.
- [ ] Supported interactions, keyboard, focus, disabled, loading, invalid, and responsive states checked; unsupported states labeled visual-only.
- [ ] Contract, Figma component rules, tasks, request-validation checklist, and error log updated when behavior or visual rules change.
- [ ] `pnpm check:tokens`, `pnpm check:catalog`, `pnpm --dir apps/vue typecheck`, and `pnpm --dir apps/vue build` pass after the change.

Only check a line when the corresponding evidence was observed for that component. Record unavailable checks explicitly; do not mark the family complete while a required check is open.

## Switch evidence (2026-11-01)

- [x] Lemon page and Norato page inspected in the browser; Lemon preview has one label/description field and Default marker; Norato uses the same composition and its own semantic blue palette.
- [x] Current Norato geometry measured: frame 320×288px, target 48×48px, medium track 40×24px; RTL and no horizontal document overflow. Earlier 390×844 browser measurement also found a 375px document width.
- [x] Browser keyboard check: Space toggled `aria-checked` false→true; Enter toggled true→false. AX tree exposed role `switch`, name “اعلان‌ها” and associated description.
- [x] Three track sizes × off/on retained the 48×48 target in the earlier browser matrix; track geometry was 32×20, 40×24 and 48×28px.
- [ ] Full 30 Switch + 6 Switch Field visual state combinations, pointer hover behavior and independent screenreader review remain open.
- [x] Current Reka adapter revision: error exposes `aria-invalid=true` and associated error text; disabled is a real disabled switch; keyboard focus shows a 2px outline with 4px offset.
- [x] `check:tokens`, `check:catalog`, Vue typecheck, production build and `git diff --check` passed; build retains the >500KB chunk warning.
- [ ] Full 30 Switch + 6 Switch Field visual state combinations, pointer hover behavior and independent screenreader review remain open.

## Select behavior acceptance checklist

- [x] Reka UI 2.11.0 با Vue peer `>=3.4.0` و Vue پروژه `^3.5.0` سازگار است؛ primitiveهای SelectRoot/Content/Item در بستهٔ نصب‌شده بررسی شدند.
- [x] انتخاب تکی کنترل‌شده منوی شیشه‌ایِ توکن‌دار را باز می‌کند و با انتخاب «اصفهان» مقدار والد همان لحظه تغییر کرد و منو بسته شد؛ در مرورگر بررسی شد.
- [x] جست‌وجوی اختیاری گزینه‌ها را فیلتر می‌کند، گروه‌ها را نگه می‌دارد و برای نتیجهٔ خالی پیام status نشان می‌دهد؛ در مرورگر بررسی شد.
- [x] چندانتخابی Chips/Summary، قاب چک‌باکس گزینه‌ها، مقدار موقت، انصراف و تأیید را پشتیبانی می‌کند؛ خلاصه از ۱ به ۲ مورد پیش از ثبت تغییر کرد ولی وضعیت والد تا تأیید ثابت ماند؛ پس از تأیید دو مقدار ثبت شد.
- [x] Escape تغییر ثبت‌نشدهٔ چندانتخابی را لغو کرد؛ ArrowDown از جست‌وجو به گزینه رسید؛ در منوی بدون جست‌وجو End روی «رشت» (آخرین گزینهٔ فعال) ایستاد و ArrowDown با عبور از «به‌زودی» غیرفعال به «تهران» رفت.
- [x] چهار اندازه با ارتفاع حداقل ۴۸px، برچسب داخل/بیرون، RTL، required، error، disabled، loading و read-only در playground و مرورگر بررسی شدند؛ برچسب داخلیِ Summary/Chips در دسکتاپ و موبایل ۳۹۰px ارتفاع ۵۶px دارد.
- [ ] Desktop/mobile browser DoD and technical gates pass; per-family status may be checked only after all rows above pass.
