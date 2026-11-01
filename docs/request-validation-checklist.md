# Norato Request Validation Checklist

## گزارش این درخواست — Input preview مستقل (2026-11-01)

- [x] قرارداد subfeature فقط قاب و نمونهٔ ثابت است؛ پرسش API هشت زیرنوع همچنان باز است و adapter اجرایی/گالری تغییر نکرد.
- [x] selectorهای فعلی `.sample-input-specimen` و `.component-sample:has(.sample-form-controls)` audit شدند؛ قاب و field با قانون scoped موجود و توکن semantic اصلاح شدند.
- [x] Lemon و Norato در viewport یکسان desktop 1920×863 مقایسه شدند: قاب 636×300 در برابر 584×288px (محدود به ستون محتوا)، field group Lemon 324×94.4px و Norato 324×97.2px؛ control نوراتو 324×48px.
- [x] Lemon و Norato در viewport یکسان mobile 390×844 مقایسه شدند: قاب 327×300 در برابر 320×288px؛ گروه Lemon 320.8×94.4px؛ کنترل Norato 310×48px. Norato سند 375px عرض دارد، بدون overflow؛ RTL حفظ شده است.
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

- [x] معیار پذیرش: نمونهٔ ثابت Select مانند Lemon یک فیلد مرکزی در قاب نقطه‌دار شیشه‌ای و نشانگر Default داشته باشد؛ قاب با پالت و توکن Norato، صفحه هم‌ساختار Button و hit target حداقل ۴۸px باقی بماند.
- [x] توالی Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze ثبت شد؛ دامنهٔ این اصلاح فقط نمونهٔ ثابت و تأیید رفتار موجود بود.
- [x] قبل از تغییر، selector قدیمی `.component-sample.sample-select-preview:not(.compact)` و markup نمونه audit شد؛ همان قانون اصلاح شد و marker scoped `sample-select-state` اضافه شد.
- [x] رندر واقعی روی سرور تازهٔ Vite در viewport همسان desktop برابر 1920×863: قاب Lemon برابر 636×300px و Norato برابر 584×288px (محدود به ستون محتوا) است؛ فیلدها به‌ترتیب 302.4×68.2 و 300×48px هستند.
- [x] در viewport همسان mobile برابر 390×844، قاب Lemon برابر 327×300px و Norato برابر 320×288px است؛ فیلد Norato برابر 300×48px، وسط‌چین و RTL است. عرض سند 375px و بدون overflow است.
- [x] screenshotهای هم‌viewport قاب نقطه‌ای، هالهٔ زرد/آبی و marker مشابه را نشان می‌دهند؛ Norato رنگ‌مایهٔ خود را حفظ می‌کند.
- [x] در مرورگر تازه: منوی جستجو و گروه‌ها باز شدند، ArrowDown گزینهٔ فعال را جابه‌جا کرد، انتخاب تکی وضعیت را تغییر داد؛ در چندانتخابی مقدار تا زمان تأیید ثابت ماند، انصراف مقدار قبلی را حفظ کرد و تأیید گزینه را ثبت کرد. حالت loading کنترل را disabled کرد و status بارگذاری را نمایش داد.
- [x] RTL و ارتفاع trigger برابر ۴۸px، ۴ اندازه (۴۸/۴۸/۴۸/۵۶px)، حالت‌های error/disabled/read-only/loading با semantics وابسته، ساختار Preview + Vue + ۹ بخش قرارداد، و گزینهٔ disabled در درخت دسترس‌پذیری بررسی شدند. ماتریس کامل ترکیب حالت‌های بصری هنوز باز است.
- [x] `pnpm check:tokens`، `pnpm check:catalog` (۴۹ مسیر/قرارداد)، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` پاس شدند. build هشدار chunk برابر 634.56KB بالاتر از 500KB داد.
- [ ] DoD خانواده Select باز است تا ماتریس کامل visual state/variantها (از جمله ترکیب size × label placement × single/multi) مرور شود؛ مقایسهٔ responsive قاب و رفتارهای محوری تا اینجا پاس است.

## گزارش این درخواست — Input، ممیزی پیش از اصلاح (2026-11-01)

- [x] صفحهٔ Lemon و صفحهٔ Norato در مرورگر واقعی بررسی شدند؛ Lemon یک فیلد ایمیل منفرد در frame با ابعاد desktop حدود 636×300px و بدنهٔ کنترل 324×41px دارد.
- [x] Norato در viewport موبایل واقعی 390×844 بررسی شد: عرض document/body برابر 375px، frame برابر 343×123px، input برابر 317×48px، helper و label متصل و جهت خود input برابر LTR هستند؛ overflow افقی وجود ندارد.
- [x] تفاوت بصری ثبت شد: frame فعلی Norato در موبایل 123px ارتفاع دارد و marker/Icon/glass treatment نمونهٔ Lemon را نشان نمی‌دهد. اندازهٔ 48px هدف تعاملی Norato عمدی است و نباید کاهش یابد.
- [ ] مقایسهٔ دقیق هم‌viewport، تغییر visual specimen، ماتریس تعاملی و گیت‌های فنی هنوز انجام نشده‌اند. پرسش دامنهٔ اجرایی هشت زیرگونه در `input-clarify.md` در انتظار پاسخ است؛ پیاده‌سازی وابسته آغاز نشده است.

## گزارش این درخواست — Split Button تکمیل و بازبینی موبایل نهایی (2026-11-01)

- [x] Split Button در viewport موبایل 390×844 واقعی مرورگر باز شد؛ `innerWidth=390`، عرض سند و بدنه 375px، قاب 320×288px و کنترل نمونه 48px ارتفاع دارد. هیچ overflow افقی مشاهده نشد.
- [x] Lemon در همان viewport بازبینی شد؛ قاب حدود 314×288px است. نسبت و تراکم نمونهٔ Norato هم‌تراز است و palette اختصاصی Norato حفظ می‌شود. Screenshot مرورگر موبایل قاب‌ها و کنترل مرکزی را نشان داد.
- [x] دکمهٔ متصل RTL، موقعیت منوی سمت چپ، اندازه‌های چهارگانه، گالری‌های variant/state/size و playground اجرایی قبلاً در مرورگر بررسی شده‌اند؛ keyboard و focus/AX evidence در DoD ثبت است.
- [x] `docs/request-validation-checklist.md`، contract، task/checklist، ledger و error log بعد از بررسی واقعی به‌روز شدند؛ Split Button DoD بسته شد.
- [ ] اجرای صفحه‌خوان مستقل انجام نشد؛ درخت دسترس‌پذیری و صفحه‌کلید مرورگر بررسی شده است.

## گزارش این درخواست — Range (2026-11-01)

- [x] Lemon و Norato در viewport دسکتاپ 1280×720 و موبایل 390×844 بازبینی شدند؛ یک field برچسب‌دار، value روی thumb، marker، track/fill و min/max زیر آن حفظ شد. Norato palette معنایی خودش را دارد؛ قاب به‌دلیل ستون detail در desktop برابر 584×288px و در mobile برابر 320×288px است.
- [x] در هر دو viewport ماتریس ۱۶حالتهٔ Single/Range × Small/Medium × Default/Disabled اجرا شد؛ slider ارتفاع 48px و هر thumb اندازهٔ 48×48px داشت؛ document mobile برابر 375px و بدون overflow بود.
- [x] RTL و جهت fill از راست به چپ سنجیده شد. ArrowLeft/Right، Home/End، pointer drag، ترتیب دو thumb، focus ring دوپیکسلی با offset چهارپیکسلی، disabled واقعی، `aria-invalid` و توضیح error متصل بررسی شدند.
- [x] AX tree برای هر thumb role/name/min/max/current value و برای خطا description و alert نشان داد. صفحه Preview + playground اجرایی + هر ۹ بخش و دکمه‌های copy دارد.
- [x] legacy `.sample-range input` حذف شد و مقدار تکراری از label row برداشته شد؛ اندازهٔ thumb از target جداست تا کنترل کش نیاید.
- [x] پس از آخرین تغییرات `pnpm check:tokens`، `pnpm check:catalog`، Vue TypeScript، `pnpm --dir apps/vue build` و `git diff --check` پاس شدند؛ build هشدار chunk بزرگ‌تر از 500KB با اندازهٔ 575.88KB دارد.

## گزارش این درخواست — Segmented Control و ارسال تغییرات موجود (2026-11-01)

- [x] Lemon و Norato در viewport دسکتاپ 1280×900 مقایسه شدند؛ preview Norato قاب 632×288px و Lemon حدود 630px عرض دارد. در هر دو، track افقی، سه گزینه، Default marker و گزینهٔ انتخاب‌شده در سمت راست دیده می‌شوند.
- [x] مقایسهٔ موبایل در 390×844: Norato frame=320×288px، target گزینه‌ها 48px، عرض سند375px و بدون overflow؛ قاب مرجع Lemon هم در همین viewport بازبینی شد.
- [x] پس از fresh Vite startup مسیر کامپوننت Preview، اجرای adapter و هر ۹ بخش مستقل را نشان داد. سرور قبلی به علت cache قدیمی `import.meta.glob` بخش‌های سند را بارگذاری نمی‌کرد؛ restart-only dev server این مشکل نمایش را برطرف کرد.
- [x] ماتریس ۲۴ گروه (۲ سبک × ۴ اندازه × ۳ تعداد گزینه) در مرورگر: RTL و اولین گزینه در سمت راست، بدون متن بریده، target اندازه‌های Small/Medium/Large=48px و XLarge=56px.
- [x] رفتار مرورگر: pointer hover، حرکت فوکوس با ArrowLeft/Right در RTL، انتخاب با Space/Enter، Home/End، جلوگیری از خالی‌شدن انتخاب، `aria-pressed`، گروه نام‌دار، فوکوس ۲px، disabled تکی و گروهی بررسی شدند.
- [x] `pnpm check:tokens`، `pnpm check:catalog`، Vue TypeScript، build و `git diff --check` پس از تغییرها پاس شدند. هشدار chunk بالاتر از 500KB در build گزارش شد.
- [ ] DoD کامل Segmented: صفحه‌خوان مستقل و کل حاصل‌ضرب ۶۴ حالت آیتم اجرا نشده؛ بلوغ Adapted باقی می‌ماند.

## گزارش این درخواست — Switch و وضعیت Radio (2026-11-01)

- [x] مرجع Lemon Switch مرور شد: یک Switch Field با label/description و marker، track خاموش glass، حالت روشن مشکی در Lemon، سه اندازه، ۳۰ variant کنترل و ۶ variant فیلد؛ پالت اجرایی Norato از semantic blue استفاده می‌کند.
- [x] مقایسهٔ بصری desktop در مرورگر با Lemon: هر دو یک Switch Field با marker و متن فارسی در قاب dotted-glass نمایش می‌دهند؛ قاب desktop Norato به عرض ستون محتوا محدود است. در اندازه‌گیری DOM فعلی Norato، frame=320×288px، control=48×48px و track متوسط=40×24px است؛ قاب نمونه و خود track کشیدگی عمودی ندارند.
- [x] مقایسهٔ mobile در viewport 390×844 (اندازه‌گیری ثبت‌شده در همین اجرای مرورگر): frame=320×288px، document width=375px و بدون overflow؛ کنترل/متن RTL و target=48px باقی ماندند.
- [x] سه اندازه × خاموش/روشن در DOM سنجیده شد: trackها 32×20، 40×24 و 48×28px؛ target هر شش حالت 48×48px. در RTL روشن‌شدن knob را به چپ منتقل کرد.
- [x] Space و Enter در اجرای مستقیم مرورگر مقدار `aria-checked` را به‌ترتیب false→true و true→false تغییر دادند؛ AX tree نقش switch و نام اعلان‌ها را نشان داد. `:focus-visible` با outline آبی ۲px و offset چهارپیکسلی مشاهده شد. `aria-invalid=true`، پیام error و اتصال description/error با `aria-describedby` بررسی شد؛ disabled واقعی نیز `disabled=true` و `:enabled=false` بود.
- [x] صفحهٔ Switch مطابق ساختار component detail، ۹ بخش سند، API snippet/copy، specimen غیرفعال و playground اجرایی دارد.
- [x] پس از آخرین تغییرات `pnpm check:tokens`، `pnpm check:catalog`، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` موفق شدند؛ build هشدار اندازهٔ chunk بالاتر از 500KB دارد.
- [ ] DoD نهایی Switch باز است: همهٔ ۳۰ state/size/value، hover pointer، صفحه‌خوان مستقل و screenshot matrix مرور نشده‌اند.
- [ ] Radio هم بسته نیست: ماتریس hover pointer و صفحه‌خوان مستقل همچنان باز است.

## گزارش این درخواست — Radio Button و ادامه با مدل جدید (2026-11-01)

- [x] منبع Lemon در همان مرورگر برای ترکیب preview، ۳ گزینه، marker، ۴ Anatomy، ۲۰ variant، RTL و keyboard بررسی شد.
- [x] نمونهٔ نوراتو یک گروه سه‌ردیفی وسط قاب با palette و tokenهای خود Norato است؛ در viewport موبایل 390×844 قاب 320×288px، عرض سند 375px، سه ردیف 48px و کنترل راست‌چین است.
- [x] مقایسهٔ desktop در viewport 1920: قاب 584×288px (محدود به عرض محتوای صفحه)؛ سه ردیف 48px و بدون کشیدگی کنترل. این عرض با frame Lemon که در محتوای خودش حدود 630px است کاملاً برابر نیست.
- [x] ArrowDown بین گزینه‌ها و selection را جابه‌جا کرد؛ AX tree گروه نام‌دار و سه radio با selected value درست گزارش کرد؛ focus ring دوپیکسلی بررسی شد.
- [x] required روی یک ورودی، aria-invalid/error association، disabled واقعی، RTL و هدف کلیک 48px را در browser DOM سنجیدم. اندازه‌های 16/20 در کنترل playground موجود است.
- [x] `pnpm check:tokens`، `pnpm check:catalog` و `pnpm --dir apps/vue typecheck` موفق شدند.
- [x] `pnpm --dir apps/vue build` موفق شد؛ هشدار پیشین bundle بزرگ‌تر از 500KB همچنان هست. `git diff --check` موفق شد.
- [x] Radio required بدون انتخاب بازآزمایی شد: پیام الزام انتخاب و aria-invalid روی گروه/ورودی‌ها ظاهر شدند و پیام با aria-describedby به ورودی required متصل شد.
- [x] ماتریس کنترل اصلی مرورگر برای هر دو اندازهٔ ۱۶ و ۲۰px و مقدار checked/unchecked در حالت‌های Default/Error/Disabled مرور شد؛ اندازهٔ واقعی، checked، disabled و invalid در DOM برای هر ۱۲ ترکیب ثبت شد. ردیف‌ها همگی ۴۸px باقی ماندند.
- [x] در screenshot هم‌اندازهٔ ۱۲۸۰×۹۰۰، قاب Norato ۵۸۴×۲۸۸px و Lemon Radio نمونهٔ سه‌گزینه‌ای روی قاب شیشه‌ای بود؛ class تعریف‌نشدهٔ `sr-only` باعث نمایش ناخواستهٔ legend می‌شد. selector دسترس‌پذیرِ legend اصلاح شد؛ پس از اصلاح legend به ۱×۱px clip شد و از دید بصری پنهان ماند، ولی در AX باقی است.
- [x] پس از ArrowDown، عنصر فعال همان radio انتخاب‌شده بود؛ `:focus-visible` true، outline دوپیکسلی با offset چهارپیکسلی و حلقهٔ دوپیکسلی semantic ثبت شد.
- [ ] DoD نهایی Radio باز است: hover اشاره‌گری مستقل و صفحه‌خوان نرم‌افزاری اجرا نشده‌اند؛ مرورگر Lemon بعد از resize ابعاد DOM قاب را آشکار نکرد. ترکیب‌بندی و اندازهٔ mobile با Lemon مرور شده است.

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
## گزارش درخواست — تطبیق ۴۸ کامپوننت با Lemon (در جریان، 2026-10-31)

- [x] لینک مرجع `https://lemonui.ir/`، تعریف DoD و هدف پیوستهٔ ۴۸ کامپوننت در spec و ledger ثبت شد.
- [x] اندازهٔ قاب و فرزند اصلی نمونهٔ ۴۸ صفحه در مرورگر محلی اندازه‌گیری شد؛ اندازه‌گیری، جایگزین مقایسهٔ دیداری هر صفحه نیست.
- [x] Input در Lemon و Norato به‌صورت دیداری بررسی شد؛ نمونهٔ بالای صفحه به یک فیلد فشرده تبدیل شد. فیلد ۴۸px است و سرریز افقی در viewport بررسی‌شده ندارد.
- [x] نمونهٔ اجرایی Input: ورود متن، پیام خطا/aria-invalid، غیرفعال، بارگذاری و الزامی در مرورگر بررسی شد.
- [x] Input در موبایل ۳۹۰px کنار Lemon بازبینی شد؛ پس از اصلاح شکست مسیر بلند در کد اجرایی، عرض سند Norato برابر ۳۷۵px در viewport ۳۹۰px است. فیلد ۴۸px و قاب ۱۲۳px است.
- [x] Tab از ورودی به کنترل بعدی حرکت کرد و focus-visible حلقهٔ ۲px زرد با outline آبی نشان داد.
- [x] حالت Loading در NoratoField با `aria-busy` و پیام status زندهٔ مرتبط اعلام می‌شود؛ Error با متن و `aria-invalid` همراه است و Disabled ورودی را غیرفعال می‌کند.
- [x] Select در Lemon و Norato روی desktop و viewport موبایل ۳۹۰px مقایسه شد؛ عرض سند موبایل هر دو ۳۷۵px است. قاب نمونهٔ تک‌فیلدی Norato حدود ۱۲۲px در desktop و ۹۸px در mobile؛ کنترل در RTL به‌ترتیب ۵۱۲×۴۸px و ۳۱۸×۴۸px است و عمودی کش نیامده.
- [x] انتخاب مقدار Select با رویداد change و ArrowDown/Enter بررسی شد؛ مقدار انتخاب‌شده در وضعیت زنده منعکس می‌شود. گزینهٔ disabled، required، error/`aria-invalid`، loading/`aria-busy` و status مرتبط، و غیرفعال شدن کنترل بررسی شدند.
- [x] فوکوس صفحه‌کلیدی Select با `:focus-visible` و حلقهٔ دوپیکسلی زرد با outline آبی در desktop اندازه‌گیری شد.
- [x] کنترل‌های تغییر وضعیت playground حداقل target ۴۸px دارند؛ عرض سند در ۳۹۰px اندازه‌گیری شد و overflow ندارد.
- [x] adapter جدید Select منوی شیشه‌ای با گروه و جست‌وجو را باز کرد؛ فیلتر «اصفهان» و انتخاب آن با ArrowDown/Enter، و انتخاب چندتایی مرحله‌ای با لغو/تأیید در مرورگر اجرا شد.
- [x] Select جدید در viewport ۳۹۰px بازبینی شد: پنل داخل عرض ۳۹۰px ماند، شش گزینه هرکدام ۴۸px بودند، و عرض سند در حالت باز ۳۹۰px بود. جست‌وجو هنگام بازشدن فوکوس گرفت؛ ArrowDown فوکوس را به گزینه برد؛ Escape منو را بست.
- [x] Error با `aria-invalid` و پیام مرتبط، Disabled با کنترل غیرفعال، Loading با کنترل غیرفعال و پیام status، Read-only با `aria-readonly` و منوی بسته بررسی شد. چهار اندازهٔ Small/Medium/Large/XLarge به‌ترتیب ارتفاع کنترل ۴۸/۴۸/۴۸/۵۶px داشتند.
- [ ] DoD نسخهٔ جدید Select هنوز باز است: تکمیل مقایسهٔ جزئیات بصری منوی باز و تمام حالت‌های مرجع Lemon لازم است.
- [x] آزمون منوی بدون جست‌وجو در مرورگر: End آخرین گزینهٔ فعال را فوکوس کرد؛ ArrowDown گزینهٔ غیرفعال بعدی را رد کرد و به اولین گزینهٔ فعال برگشت.
- [x] کشیدگی چندانتخابی رفع شد: پیش از اصلاح، Chip نمایشی ۴۸px و فیلد ۶۶px بود؛ پس از اصلاح، Chip به ۲۴px و فیلد به ۴۸px رسید. در نمای دسکتاپ کنترل مستقل از قاب نمونه اندازه‌گیری و دیده شد.
- [x] مقایسهٔ تازهٔ نمونهٔ Select با Lemon در دسکتاپ و موبایل ۳۹۰px: کنترل Lemon حدود ۳۰۲×۴۱px و کنترل Norato پس از اصلاح ۳۰۰×۴۸px است؛ اختلاف ارتفاع به هدف تعاملی ۴۸px نوراتو مربوط است. قاب نمونهٔ Norato اکنون ۲۹۶px ارتفاع دارد و فیلد در مرکز آن قرار می‌گیرد؛ در موبایل عرض سند ۳۷۵px و بدون overflow است.
- [x] فلش متنی Select با SVG برداری ۲۴px جایگزین شد؛ در مرورگر سمت چپ کنترل RTL دیده شد. در منوی چندانتخابی دسکتاپ فوتر ۶۵px داخل پنل ماند؛ در موبایل ۳۹۰px پنل ۳۴۳px عرض داشت، دکمه‌های فوتر کامل دیده شدند و overflow افقی رخ نداد.
- [x] گزینه‌های Multi Select اکنون از نشانگر چک‌باکس برداری مشترک استفاده می‌کنند: شش قاب ۲۴px در منو و ردیف‌های ۴۸px در مرورگر دیده شد. انتخاب موقت دو گزینه تا پیش از تأیید مقدار والد را تغییر نداد؛ انصراف مقدار قبلی را نگه داشت و تأیید هر دو Chip را ثبت کرد. در موبایل ۳۹۰px فوتر کامل و بدون overflow بود.
- [x] Select تک‌انتخابی با انتخاب «اصفهان» همان لحظه مقدار والد را ثبت کرد. حالت برچسب داخلی با Summary و دو Chip پس از اصلاح در دسکتاپ و موبایل ۳۹۰px دقیقاً ۵۶px ارتفاع داشت؛ خلاصهٔ موقت پیش از تأیید ۲ مورد را نشان داد و مقدار والد تا تأیید تغییر نکرد. Anatomy بعد از جابه‌جایی توضیح اضافی دوباره شش جزء دارد.
- [x] با پنج انتخاب در حالت Chips، فیلد به‌جای چند ردیف فقط «تهران +۴» نمایش داد و ارتفاع ۴۸px ماند؛ در مرورگر تأیید شد.
- [ ] تکمیل نهایی Input و Select و بررسی ۴۶ خانوادهٔ باقی‌مانده باز است.

## گزارش این درخواست — Rating با مرجع Lemon (DoD مرورگری پاس شد، 2026-11-01)

- [x] Lemon Rating در دسکتاپ 1280×900 و موبایل 390×844 بازبینی شد؛ specimen نوراتو 584×288px در ستون دسکتاپ و 320×288px در موبایل، عرض سند موبایل 375px و بدون overflow بود.
- [x] قاب، پس‌زمینهٔ dotted-glass، Default/نقطهٔ سبز، ترتیب RTL، 4.0، چهار ستارهٔ پر، یک ستارهٔ خالی و 128 نظر کنار Lemon مقایسه شد.
- [x] صفحه مثل Button، نمونهٔ بالایی، playground و ۹ بخش قرارداد مستقل دارد؛ playground سه حالت input/display/summary و snippet را عرضه می‌کند.
- [x] ۲۴ ترکیب display شامل ۸ مقدار مستند Lemon در سه اندازه بررسی شد؛ fillها درست و ستاره‌ها 16/20/24px بودند. نیم‌ستاره از سمت راست پر شد.
- [x] Input با کلیک و فلش‌ها انتخاب شد؛ تغییر controlled به کد نمونه رسید. هر ۵ target برابر 48×48px است؛ در Large ستاره 32px ماند.
- [x] حلقهٔ focus صفحه‌کلیدی 2px و offset مطابق قاعدهٔ Button (4px) بود؛ hover و selected دیده شدند؛ disabled هر پنج radio را واقعاً غیرفعال کرد.
- [x] AX/DOM نقش radio، نام هر گزینه، checked، نام گروه، متن score زنده و progressbarهای توزیع 5→1 با مقدار درصد را نشان داد.
- [x] `aria-labelledby` نام Rating Input و `aria-describedby` راهنمای زنده را به گروه radio وصل می‌کند.
- [x] `check:tokens`، `check:catalog`، Vue typecheck، build و `git diff --check` پس از مستندسازی نهایی دوباره اجرا شدند و موفق شدند.
- صفحه‌خوان مستقل اجرا نشد؛ گزارش به مرورگر، DOM/AX و تعامل صفحه‌کلید محدود است.
## گزارش درخواست — Split Button با مرجع Lemon (در جریان، 2026-10-31)

- [x] صفحهٔ Split Button در Lemon و Norato در دسکتاپ و موبایل ۳۹۰px به‌صورت دیداری مقایسه شد؛ رنگ Primary مطابق نوراتو زرد است.
- [x] نمونهٔ دو قرص جدا به کپسول متصل با جداکننده تبدیل شد؛ دکمهٔ اصلی و فلش اجرایی هر دو حداقل ۴۸px هستند.
- [x] اکشن اصلی، انتخاب گزینه، ArrowDown، Escape، کلیک بیرون، غیرفعال و بارگذاری در مرورگر اجرا شدند.
- [x] منوی موبایل پس از اصلاح کاملاً در عرض ۳۹۰px قرار گرفت؛ هیچ overflow افقی گزارش نشد.
- [x] گالری اختصاصی Variants/States/Sizes مانند Button اضافه شد؛ شش ترکیب پایه و چهار ارتفاع بصری در موبایل دیده شدند و سرریز نداشتند.
- [x] ArrowUp، Home/End، Tab خروج از منو، گونه‌های Primary/Secondary/Destructive/Tertiary و فوکوس دیداری در مرورگر بررسی شدند.
- [x] چهار اندازهٔ Split Button اکنون در API اجرایی هستند؛ در مرورگر ظاهر ۳۲/۴۰/۴۸/۵۶px و هدف تعاملی حداقل ۴۸px برای Small/Medium اندازه‌گیری شد. DoD کامل و تغییر وضعیت Proposed هنوز باز است.

## پیگیری DoD — Split Button (2026-11-01)

- [x] در viewport محلی 1920×863، Norato با Lemon باز و مقایسه شد: frame نوراتو 584×288px (محدود به ستون صفحه) و قاب Lemon حدود 630×298px است. هر دو control متصل، جداکنندهٔ یکتا و نمونهٔ متمرکز دارند؛ ارتفاع control نوراتو 48px است. رنگ Norato زرد معنایی خودش را نگه می‌دارد.
- [x] specimen بالای صفحه به adapter واقعی و inert وصل شد؛ نشان Default اضافه شد؛ selectorهای قدیمی `.sample-split` حذف شدند تا CSS موازی باقی نماند.
- [x] گالری اختصاصی به صفحه متصل شد: ۶ گونهٔ پایه، ۴ اندازه، ۵ حالت؛ گالری اندازه‌ها از DOM چهار ارتفاع 32/40/48/56px را نشان داد.
- [x] رفتار مرورگر: primary event/status، انتخاب منو/event، بستن با outside click، ArrowDown/Up، Home/End، Escape و بازگشت فوکوس به toggle، Tab خروج از منو، expanded state و هدف‌های مستقل مرور شدند.
- [x] حالت Disabled هر دو دکمه را واقعاً disable می‌کند؛ Loading هر دو را disable و `aria-busy=true` می‌کند و spinner دیداری دارد. reduced-motion fallback در CSS ثبت است. Invalid برای این قرارداد تعریف نشده است.
- [x] در هر چهار اندازه، ارتفاع بصری دقیق 32/40/48/56px است؛ در Small/Medium هر دو target حداقل 48×48px هستند. RTL در DOM تأیید شد: main در سمت راست و toggle در سمت چپ.
- [x] کاتالوگ/قرارداد به Implemented ارتقا یافت؛ usage، قوانین Figma، error log، DoD و task ledger به‌روزرسانی شدند.
- [ ] مرورگر متصل در این نوبت API تغییر viewport نداشت؛ اجرای مجدد viewport 390px پس از تغییر قاب به 288px لازم است. پیش‌تر رفتار منوی mobile/no-overflow در 390px ثبت شده بود، اما آن شاهد تغییر قاب نهایی را پوشش نمی‌دهد.
- صفحه‌خوان مستقل اجرا نشد؛ بررسی به DOM، keyboard و accessibility tree مرورگر محدود است.

## گزارش درخواست — شروع adapter اجرایی Combobox با مرجع Lemon (در جریان، 2026-11-01)

- [x] صفحهٔ Lemon Combobox و صفحهٔ Norato در مرورگر مشاهده شدند؛ مرجع ۹ بخش مستقل و preview فشرده دارد. مرجع Lemon در این نوبت در desktop دیده شد؛ mobile Lemon هنوز بررسی نشده است.
- [x] Combobox از Proposed به Adapted تغییر کرد؛ adapter، export، usage example و playground تعاملی به مسیر مستقل متصل شدند.
- [x] در صفحهٔ Norato هر ۹ بخش قرارداد، بخش Vue اجرایی و نمونهٔ پیش‌نمایش دیده شد.
- [x] فیلتر فارسی و متن تطبیق‌یافته، ArrowDown و Enter، ثبت مقدار انتخاب‌شده، پیام بدون نتیجه، خطا/`aria-invalid`/`aria-describedby` و Disabled در مرورگر بررسی شدند.
- [x] ایراد جای‌گذاری پنل به‌علت نبود `ComboboxAnchor` شناسایی و رفع شد؛ پنل پس از اصلاح هم‌راستا با فیلد و درون viewport موبایل باز شد.
- [x] viewport محلی 390×844: ارتفاع فیلد 50px، جهت گروه RTL و عرض سند 375px در برابر viewport 390px اندازه‌گیری شد؛ overflow افقی وجود نداشت.
- [x] صفحهٔ desktop در viewport 1280×900 باز شد؛ نمونهٔ Combobox داخل قاب 584×129px و فیلد 512×50px دیده شد. اندازه‌گیری جزئیات desktop Lemon و mobile Lemon هنوز انجام نشده است.
- [x] `pnpm check:tokens` و Vue typecheck و production build موفق شدند.
- [x] `pnpm check:catalog` پس از اصلاح قاعدهٔ validator برای adapterهای اختیاری Adapted موفق شد؛ `pnpm check:tokens` و `git diff --check` نیز موفق شدند.
- [x] Vue typecheck و production build موفق شدند؛ build هشدار bundle بالای 500KB داد.
- [x] صفحه‌کلید: فهرست باز شد، گزینهٔ فعال `aria-activedescendant` گرفت و Escape منو را بست؛ پنل با فاصلهٔ حدود ۹px زیر کنترل و هم‌عرض فیلد اندازه‌گیری شد.
- [ ] DoD باز است: Multi، چهار اندازه، loading/recent/create، Clear، keyboard/focus matrix کامل، مقایسهٔ Lemon در mobile و اندازه‌گیری هم‌ارز desktop تکمیل نشده‌اند.

## ادامهٔ بررسی درخواست — تکمیل رفتارهای Combobox و رفع سرریز (2026-11-01)

- [x] API و playground اکنون controlled single/multi، چیپ فشرده، چهار size، برچسب داخل/بیرون، clear، recent options، loading، empty، create و error/disabled/required را پوشش می‌دهند.
- [x] انتخاب تکی با ArrowDown/Enter، انتخاب چندتایی دو گزینه با ثبت آرایه، چیپ `+۱` در همان ارتفاع ۵۰px، پاک‌کردن جست‌وجو پس از انتخاب، ساخت و ثبت گزینهٔ تازه و نمایش اخیرها در مرورگر اجرا شد.
- [x] Loading در مرورگر `aria-busy=true`، status زنده و سه خط skeleton نشان داد. Error به پیامش اشاره می‌کند و `aria-invalid=true` و `required` بومی را می‌گذارد؛ Disabled هم ورودی و هم trigger را غیرفعال می‌کند.
- [x] اندازهٔ بیرونی فیلد در حالت label بیرونی: Small/Medium/Large برابر ۵۰px، XLarge برابر ۵۸px؛ در حالت XLarge/داخل: قاب ۶۴px و ردیف تعاملی ۵۶px. حداقل hit area رعایت شد.
- [x] Lemon در viewport موبایل 390×844 و Norato در همان viewport بازبینی شدند؛ فیلد preview در هر دو حدود ۳۱۰px است. Norato قاب 320×288px دارد، RTL است، و عرض سند 375px بدون overflow است.
- [x] پنل در موبایل زیر فیلد باز شد، با فیلد هم‌عرض ماند، گزینهٔ فارسی را bold کرد و پس از انتخاب بسته شد. `aria-activedescendant` با گزینهٔ فعال تنظیم شد.
- [x] سرریز playground ناشی از wrapper Reka (سند 417px در viewport 390px) با محدودکردن wrapper/فیلد رفع شد؛ پس از اصلاح عرض سند 375px است.
- [ ] مرور کامل بصری دسکتاپ با اندازه‌گیری دقیق کارت و همهٔ variantها، صفحه‌خوان واقعی، فوکوس همهٔ اکشن‌ها و ماتریس کامل Lemon هنوز باز است؛ DoD Combobox بسته نشود.
- [x] گیت‌های فنی بعد از این batch اجرا شدند و نتیجهٔ آن‌ها در انتهای همین گزارش ثبت شده است.
- [x] گیت‌ها پس از تغییرات جدید اجرا شدند: `pnpm check:tokens`، `pnpm check:catalog`، `pnpm --dir apps/vue typecheck`، `pnpm --dir apps/vue build` و `git diff --check` همگی موفق شدند.
- [x] production build هشدار bundle بالای ۵۰۰KB داد (518.24KB minified)، ولی build موفق بود.
- [ ] DoD همچنان باز است: صفحه‌خوان واقعی و review همهٔ variantها/حالت‌ها و تمام اکشن‌های focus دیده نشده‌اند؛ کوچک‌شدن frameها و کمبودهای بصری با شواهد تازه در نوبت بعد بازبینی شوند.

## ادامهٔ DoD Combobox — اصلاح نمونه و مرور میان‌مرحله‌ای (2026-11-01)

- [x] صفحه‌های Lemon و Norato در همان پنجره و viewport 1195×765 مقایسه شدند: Lemon قاب 636×300px، field shell برابر 324×68.2px و body برابر 324×41px؛ Norato قاب 540×288px، field برابر 310×50px و برچسب بیرونی 310×20.8px. ستون محتوا در Norato باریک‌تر است؛ قاب محدود می‌ماند و کشیدگی ندارد.
- [x] کمبود marker و نقطه‌ها در screenshot واقعی تأیید شد. `Default` به نمونهٔ inert اضافه شد؛ نقطه‌ها از mix 14٪ توکن آبی semantic Norato ساخته شدند. مرورگر پس از اصلاح قاب نقطه‌دار، wash زرد/آبی Norato، marker، field مرکزی 310×50px و قاب 540×288px را نشان داد.
- [x] نمونه از playground جداست و DOM صفحه Preview، Vue، و همهٔ ۹ بخش قراردادی را دارد.
- [x] ۱۶ حالت اندازه‌گیری‌شده (single/multi × label outside/inside × چهار اندازه)، در viewport فعلی: بیرون 50/50/50/58px؛ داخل 56/56/56/64px؛ هدف تعاملی 48px و XLarge 56px. RTL درست و عرض سند 1180px در viewport 1195px بود.
- [x] منوی اخیر دو گزینه دارد؛ جست‌وجوی فارسی متن تطبیق را Bold کرد؛ منوی نتایج هم‌عرض 540px، 7.9px زیر فیلد و گزینه‌ها 48px بود. ArrowDown/Enter انتخاب تکی، انتخاب Multi و نمایش تک‌چیپ + شمارنده، Clear، create/ثبت گزینهٔ جدید، empty و loading/سه skeleton/`aria-busy`/status بررسی شدند.
- [x] required/error/`aria-required`/`aria-invalid`/`aria-describedby`/alert و disabled واقعی ورودی و trigger بررسی شد. Escape منو را بست و بعد از پاک‌کردن، مقدار و status خالی ماند.
- [ ] DoD نهایی باز است: مقایسه و screenshot موبایل پس از اصلاح marker/dot، مرور کامل ماتریس بصری ۹۶ حالت، تمرین فوکوس تمام کنترل‌ها در هر حالت و screen-reader مستقل هنوز انجام نشده‌اند. این دور viewport واقعی موبایل نبود.
- [x] ترتیب Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze قبل از اصلاح ثبت شد؛ اصلاح فقط بر نقص رندر مشاهده‌شده محدود ماند.
- [x] ادامهٔ موبایل پس از اصلاح در viewport واقعی 390×844 بررسی شد: قاب 320×288px، فیلد 212×48px، marker `Default` قابل‌دیدن و عرض سند 375px بدون سرریز است؛ screenshot پس از اصلاح ثبت شد.
- [x] مقایسهٔ موبایل Lemon/Norato در یک viewport 390×844 با screenshot مرورگر تکمیل شد: Lemon frame 327×300px و Norato 320×288px؛ عرض سند هر دو 375px و field shell نوراتو 310×50px است. نشانگر و نقطه‌های نوراتو دیده می‌شوند و قاب کشیدگی ندارد.
- [x] با Tab، action پاک‌کردن فوکوس visible می‌گیرد (۲px آبی، offset چهار پیکسل، halo زرد ۲px). trigger طبق Reka با `tabindex=-1` از ترتیب Tab حذف شده؛ ورودی composite با ArrowDown فهرست را باز و گزینه را با `aria-activedescendant` فعال می‌کند.
- [x] مرورگر پس از reload و ArrowDown یک outline اضافی 3px روی input نشان داد؛ override عمومی حذف و selector scoped به `outline:0` تغییر کرد. اندازهٔ computed بعد از اصلاح: outline داخل input صفر، حلقهٔ field برابر 2px آبی با offset 4px و halo زرد 2px؛ active descendant به گزینهٔ فوکوس‌شده اشاره می‌کند.
- [x] گیت‌های بعد از تغییر: `pnpm check:tokens`، `pnpm check:catalog`، Vue typecheck، production build و `git diff --check` پاس شدند؛ build هشدار 635.58KB داد.
- [ ] DoD همچنان باز است: مرور ۹۶ حالت ظاهری، ماتریس فوکوس همهٔ اکشن‌ها و screen-reader مستقل انجام نشده‌اند.

## گزارش انتشار — Preview در Vercel (2026-11-01)

- [x] تصویر Deployment بررسی شد: Production موفق است و یک Preview ناموفق.
- [x] جزئیات Vercel برای دیپلوی ناموفق بررسی شد: `NEXT_NO_VERSION`؛ Vercel پروژهٔ Vite را با چارچوب Next.js پیکربندی کرده و نسخهٔ Next پیدا نکرده است.
- [x] فهرست دیپلوی‌ها تطبیق داده شد: همان commit با شناسهٔ کوتاه `531c98e` یک دیپلوی `READY` جداگانه دارد؛ شکست Preview به معنی شکست Production نیست.
- [ ] برای حذف تکرار خطا، تنظیم Framework Preset پروژه در Vercel باید روی Vite اصلاح شود؛ این تغییر تنظیمات هنوز انجام نشده است.

## گزارش این درخواست — Checkbox با مرجع Lemon (در جریان، 2026-11-01)

- [x] Lemon Checkbox در desktop و mobile دیده شد؛ ترکیب‌بندی preview تک‌کنترلی، frame شیشه‌ای نقطه‌دار، چهار بخش Anatomy و ۳۶ variant ثبت شد.
- [x] مقایسه در viewport موبایل 390×844: Norato frame برابر 320×288px و عرض سند 375px است؛ سرریز افقی ندارد. Desktop در viewport یکسان 1280×900 نیز مقایسه شد؛ frame نوراتو 584×288px در ستون 584px و frame Lemon حدود 630×298px است؛ اختلاف عرض از محدودیت محتوای صفحهٔ Norato می‌آید.
- [x] قاب، نشانگر Default/نقطهٔ سبز، glass token و border با DOM Lemon مقایسه شدند؛ چهار جزء Anatomy بعد از انتقال یادداشت اندازه به Sizes در مرورگر تأیید شد.
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
- [x] مقایسهٔ موبایل Lemon/Norato در 390×844 با screenshot واقعی انجام شد. قاب Lemon حدود 312×288px دیده می‌شود؛ قاب Norato بعد از اصلاح responsive با اندازه‌گیری DOM برابر 320×306px است. صفحهٔ Norato 375px عرض دارد و سرریز افقی ندارد.
- [x] پنل بازه در موبایل در x=12..370 و y≈329..820 داخل viewport است؛ ماه دوم در breakpoint موبایل پنهان می‌شود و هفت روز هفته به ترتیب RTL می‌مانند. هر هفت hit area تعاملی 48×48px اندازه‌گیری شدند.
- [x] صفحه‌کلید در مرورگر: ArrowLeft/Right و ArrowUp/Down جابه‌جایی روز، PageUp/Down تغییر ماه، Home/End مرزهای هفته، Enter انتخاب مقدار و بستن پنل، Escape بستن پنل و بازگشت فوکوس به trigger. حلقهٔ فوکوس 2px است.
- [x] Error دارای `aria-invalid=true` و `aria-describedby` به متن خطاست؛ Disabled فیلد و trigger را غیرفعال کرد؛ روز disabled انتخاب‌ناپذیر بود؛ جمعه و تاریخ تعطیلی داده‌شده توسط مصرف‌کننده کلاس/رنگ قرمز گرفتند. Date & Time نمایش فارسی `۱۶:۴۵` و مدل محلی `16:45` را حفظ کرد.
- [x] مقایسهٔ desktop در viewport برابر 1920×863 با screenshot مرورگر انجام شد: Lemon card حدود 266×211px، Norato card برابر 272×213px؛ قاب Norato برابر 584×302px است و به‌دلیل ستون محتوای صفحه از قاب Lemon باریک‌تر می‌ماند. نسبت و ارتفاع خود تقویم هم‌تراز است؛ پالت Norato طبق قرارداد حفظ شد.
- [x] مرور بصری هر هفت mode در حالت باز انجام شد؛ Range دو ماه، Presets، Date & Time، Month، Year و Wheel از نظر RTL، تراکم و تناسب مرور شدند. انتخاب preset، ماه، سال و چرخ ماه مدل را به‌روز کردند.
- [x] Loading در مرورگر: spinner دیده شد، فیلد و trigger disabled شدند، wrapper کنترل `aria-busy=true` داشت و پیام status در tree ظاهر شد؛ پنل باز نشد و snippet اجرایی `loading` را درج کرد.
- [x] DoD مرورگر و گیت‌های فنی کامل است؛ وضعیت کاتالوگ `Implemented` است. صفحه‌خوان مستقل اجرا نشد؛ Accessibility tree و صفحه‌کلید مرور شدند.
- [x] Build موفق است؛ bundle جاوااسکریپت 626.87KB هشدار بالای 500KB می‌دهد.
