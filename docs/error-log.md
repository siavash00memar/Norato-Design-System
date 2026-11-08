# Norato Error Log

این سند خطاها و تصمیم‌های اصلاحی تکرارشونده را ثبت می‌کند تا دوباره ایجاد نشوند.

## ERR-001 — باقی‌ماندن CSS قدیمی روی کامپوننت

- **کامپوننت:** Radio Button و Checkbox
- **نشانه:** بعد از جایگزینی با SVG، border، background، box-shadow یا pseudo-elementهای CSS قبلی همچنان روی SVG اعمال می‌شدند.
- **علت:** استایل جدید بدون audit کردن selectorهای قبلی به انتهای فایل اضافه شده بود.
- **قاعده‌ی پیشگیری:** قبل از هر تغییر visual در یک کامپوننت، تمام selectorهای قبلی همان کامپوننت با `rg` شناسایی شوند؛ سپس یا حذف شوند یا با یک override واحد و مستند خنثی شوند. از زنجیره‌ای‌کردن overrideهای موقت خودداری شود.

## ERR-014 — فوکوس نامرئی گزینهٔ فعال Select

- **کامپوننت:** Select
- **نشانه:** پس از ArrowDown، گزینهٔ فعال از نظر DOM فوکوس داشت اما به‌دلیل `outline:none` هیچ نشانگر دیداری فوکوس نداشت.
- **علت:** قانون پایهٔ `.norato-select__option` حلقه را حذف کرده بود و قانون `:focus-visible` برای گزینه تعریف نشده بود.
- **اصلاح:** قانون scoped با توکن‌های semantic نوراتو برای outline دوپیکسلی، offset چهارپیکسلی و هالهٔ فوکوس اضافه شد؛ گزینه در مرورگر پس از ArrowDown رینگ نشان داد و ArrowDown + Enter مقدار جدید را ثبت کرد.
- **قاعدهٔ پیشگیری:** هر قانون پایه‌ای که outline را حذف می‌کند باید جایگزین `:focus-visible` مشخص داشته باشد و در DOM مرورگر با فوکوس صفحه‌کلیدی اندازه‌گیری شود.
- **محدودیت جاری:** ماتریس کامل حالت‌های بصری Select و اندازه‌گیری دقیق منوی باز در viewport موبایل هنوز انجام نشده و DoD خانواده باز است.
- **اعتبارسنجی اجباری:** حالت‌های unchecked، checked و indeterminate با رندر واقعی مرورگر بررسی شوند و اطمینان حاصل شود فقط asset نهایی فعال است.

## ثبت تغییرات

هر خطای جدید باید همراه با علت، راه اصلاح و قاعده‌ی جلوگیری از تکرار در همین فایل ثبت شود.

## ERR-021 — کشیدگی عمودی Textarea

- **کامپوننت:** Input / NoratoTextarea
- **نشانه:** ارتفاع پایهٔ Textarea از سه برابر حداقل هدف تعاملی شروع می‌شد و در نمونه‌های کوتاه نسبت به مرجع Lemon بیش از حد کشیده دیده می‌شد.
- **علت:** حداقل ارتفاع ثابت قدیمی بدون مقیاس اندازهٔ کامپوننت روی همهٔ نمونه‌ها اعمال می‌شد.
- **اصلاح:** حداقل ارتفاع پایه به دو target کاهش یافت و اندازه‌های Medium/Large/XLarge مقیاس جداگانه دارند؛ resize عمودی همچنان فعال است و هدف تعاملی در کمترین اندازه ۴۸px می‌ماند.
- **قاعدهٔ پیشگیری:** ارتفاع چندخطی را با ارتفاع input تک‌خطی یکی نکنید؛ اندازهٔ اولیه را براساس مقدار محتوای نمونه و حالت چندخطی تنظیم کنید و رندر واقعی را مقایسه کنید.

## ERR-005 — اعلام نتیجه بدون تطبیق نهایی با خواسته‌ی کاربر

- **قاعده‌ی پیشگیری:** هیچ تغییر یا تسکی بدون اجرای `docs/request-validation-checklist.md` و بررسی رندر واقعی مرورگر نهایی اعلام نشود. معیار قبولی، اجرای دقیق خواسته‌ی کاربر است؛ صرفاً سالم‌بودن build یا HTTP 200 کافی نیست.

## ERR-006 — ابهام در جهت و padding Field Group

- **قاعده‌ی معتبر:** کنترل‌ها سمت چپ، تراز راست کنترل‌ها مشترک، عنوان‌ها سمت راست با فاصله ۱۲px، و padding محتوای داخل باکس از هر چهار طرف ۱۲px است.

## ERR-007 — وارونگی ستون‌های Field Example

- **علت:** جهت ستون‌ها با مرجع بصری نهایی اشتباه تفسیر شده بود.
- **قاعده‌ی معتبر:** در Field Example عنوان‌های ردیف در چپ و کنترل‌ها در راست قرار می‌گیرند؛ عنوان اصلی بالای باکس و راست‌چین است.
- **اصلاح:** ترتیب ستون‌ها با selectorهای صریح و اولویت بالاتر تثبیت شد تا overrideهای قدیمی نتوانند جای ستون‌ها را تغییر دهند.
- **وضعیت نهایی:** طبق تصمیم صریح کاربر، کنترل‌ها ستون چپ و عنوان‌ها ستون راست هستند.

## ERR-008 — اجرای چندباره‌ی تفسیر اشتباه پیش از تثبیت معیار پذیرش

- **قاعده‌ی پیشگیری:** آخرین دستور صریح کاربر فوراً به acceptance contract تبدیل شود؛ قوانین متناقض قبلی superseded علامت‌گذاری شوند؛ سپس فقط همان قرارداد پیاده‌سازی و با رندر واقعی بررسی شود.
- **معیار Field Example فعلی:** فیلدها سمت چپ، عنوان‌ها سمت راست، تراز لبه‌ی راست فیلدها و لبه‌ی چپ عنوان‌ها، فاصله‌ی بین ستون‌ها ۱۲px.

## ERR-009 — استفاده از مرجع قدیمی Search Dropdown

- **قاعده‌ی پیشگیری:** وقتی کاربر نود جدید Figma می‌فرستد و صریحاً جایگزینی می‌خواهد، نود قبلی superseded شود و فقط آخرین نود در قرارداد و رندر فعال بماند. مرجع فعال Search Dropdown اکنون `8775:24026` است.

## ERR-010 — Tree View بدون Checkbox و با فلش متنی

- **قاعده‌ی پیشگیری:** Tree View باید در هر Node از Checkbox canonical نوراتو و در هر Parent از SVG فلش فیگما در فریم ۲۴×۲۴ استفاده کند؛ استفاده از کاراکترهایی مثل `⌄` ممنوع است.

## ERR-011 — واگرایی asset فلش Tree View از Select

- **نشانه:** Tree View از asset متفاوتی برای فلش استفاده می‌کرد و با فلش Dropdown موجود
  در Select یکی نبود.
- **علت:** asset در دو محل جداگانه تعریف شده بود و قرارداد اشتراک‌گذاری نداشت.
- **اصلاح:** asset رسمی فلش Select با نام `NORATO_SELECT_ARROW` صادر شد و Tree View همان
  constant و همان کلاس ۲۴×۲۴ را مصرف می‌کند.
- **قاعده‌ی پیشگیری:** هر کنترل باز/بسته‌شونده باید asset canonical موجود را reuse کند؛
  ساخت asset یا glyph موازی ممنوع است.

## ERR-012 — یکی‌گرفتن فلش Tree View با فلش Select

- **نشانه:** بعد از اصلاح قبلی، Tree View فلش مشکی Select را مصرف می‌کرد؛ در حالی‌که نود
  بسته‌ی Figma `8822:10129` فلش آبی `#134F89` دارد.
- **علت:** قانون عمومی reuse بدون توجه به asset اختصاصی نود Figma اعمال شده بود.
- **اصلاح:** asset دقیق Figma در `public/icons/tree-arrow.svg` ذخیره شد؛ Select بدون تغییر
  فلش مشکی خودش را نگه داشت.
- **قاعده‌ی پیشگیری:** در تعارض بین asset عمومی و نود اختصاصی Figma، نود اختصاصیِ آخرین
  درخواست معتبر است؛ فقط همان asset ذخیره‌شده و reuse شود.

## ERR-013 — نمایش یک Parent به‌جای گروه چند-Parent

- **نشانه:** نمایش اولیه‌ی Tree View فقط یک Parent یا ساختاری بدون Search داشت، در حالی که
  نود Figma `8822:10469` یک Card شامل Search و چهار Parent بسته است.
- **اصلاح:** Tree View با چهار Parent مستقل، Search داخلی، gapهای Figma و حالت اولیه‌ی بسته
  بازساخته شد؛ Parentها همچنان به‌صورت recursive قابلیت بازشدن دارند.
- **قاعده‌ی پیشگیری:** هر نود Figma که composition سطح بالاتر را نشان می‌دهد، باید تعداد
  آیتم‌ها، container و فاصله‌های آن را نیز پیاده‌سازی کند؛ صرفاً یک item نمونه کافی نیست.

## ERR-014 — نبود Card مستندات برای Tree View

- **نشانه:** Tree View مستقیماً در صفحه رندر می‌شد و نام کامپوننت یا Card مستندات نداشت.
- **اصلاح:** یک wrapper Card مستقل با عنوان `Tree view` اضافه شد؛ Card داخلی Figma بدون
  تغییر باقی ماند.
- **قاعده‌ی پیشگیری:** هر نمونه‌ی کامپوننت در صفحه‌ی مستندات باید wrapper Card و عنوان
  مشخص داشته باشد، مگر اینکه کاربر صریحاً آن را حذف کند.

## ERR-015 — بازشدن Tree View بدون سطح Child مستقل

- **نشانه:** Parent باز می‌شد اما Childها همان ردیف خاکستری و ۳۶px Parent را می‌گرفتند.
- **اصلاح:** Parent باز radius پایین خود را از دست می‌دهد و Childها در سطح سفید ۴۸px با
  border و radius پایین مستقل نمایش داده می‌شوند.
- **قاعده‌ی پیشگیری:** حالت open باید از node اختصاصی Figma خوانده شود؛ صرفاً نمایش
  recursive Child با استایل Parent معتبر نیست.

## ERR-016 — استفاده از استایل Child اول برای سطح سوم Tree View

- **نشانه:** Child بازشده و leafهای سطح سوم با ارتفاع و فونت ۴۸px/۱۳px سطح قبلی نمایش داده
  می‌شدند.
- **اصلاح:** برای Child باز، header نیمه‌انتخاب ۳۶px و برای leafها سه ردیف ۳۶px با Estedad
  Black 11px اعمال شد؛ سطح سفید Parent به ۱۵۳px رشد می‌کند.
- **قاعده‌ی پیشگیری:** برای هر depth/state جدید باید نود Figma متناظر ثبت و selector سطحی
  صریح تعریف شود؛ reuse کورکورانه‌ی استایل depth قبلی ممنوع است.

## ERR-017 — ترتیب نادرست عناصر Child در RTL

- **نشانه:** فلش Child بعد از عنوان یا در انتهای ردیف نمایش داده می‌شد.
- **اصلاح:** ترتیب flex برای Childها صریح شد: Checkbox order 1، فلش order 2، عنوان order 3
  در context RTL.
- **قاعده‌ی پیشگیری:** ترتیب RTL برای هر depth به‌صورت قراردادی ثبت شود؛ به ترتیب DOM یا
  رفتار پیش‌فرض flex اکتفا نشود.

## ERR-018 — تراز Leaf زیر Checkbox Child

- **نشانه:** Leafها با padding depth ثابت شروع می‌شدند و Checkbox آن‌ها زیر Checkbox Child
  قرار می‌گرفت.
- **اصلاح:** inset سطح سوم به اندازه‌ی frame ۲۴px Checkbox Child به‌علاوه‌ی gap شش‌پیکسلی
  افزایش یافت تا Checkbox Leaf زیر فلش Child قرار بگیرد.
- **قاعده‌ی پیشگیری:** indentation سطوح Tree View باید بر مبنای محور عناصر واقعی هر depth
  محاسبه شود، نه فقط شمارش levelها.

## ERR-019 — خنثی‌شدن indentation پویا با CSS قدیمی

- **نشانه:** با وجود محاسبه‌ی inset صحیح، Leaf در رندر همچنان زیر Checkbox Child باقی ماند.
- **علت:** `padding: 0 6px !important` در CSS مقدار inline `padding-right` را override می‌کرد.
- **اصلاح:** depth inset از طریق متغیر `--norato-tree-inset` به CSS منتقل شد و padding-right
  نهایی آن متغیر را با `!important` مصرف می‌کند.
- **قاعده‌ی پیشگیری:** وقتی property پایه با `!important` تعریف شده است، state پویا باید از
  CSS variable در همان declaration نهایی استفاده کند؛ inline style به‌تنهایی کافی نیست.

## ERR-020 — state مستقل Checkbox برای Parent/Child

- **نشانه:** Parent و Child می‌توانستند بدون توجه به وضعیت Leafهای زیرمجموعه، checked یا
  indeterminate شوند.
- **اصلاح:** وضعیت Parent/Child از شمارش Leafهای انتخاب‌شده مشتق می‌شود و تنها Leafها در
  مجموعه‌ی state انتخاب نگهداری می‌شوند.
- **قاعده‌ی پیشگیری:** برای Tree View هیچ state انتخاب مستقلی برای nodeهای دارای فرزند
  نگهداری نشود؛ همه‌ی حالت‌ها از descendant Leafها محاسبه شوند.

## ERR-021 — تایپوگرافی و داده‌ی نمونه‌ی ناکافی Tree View

- **نشانه:** Parent و Child از یک font treatment استفاده می‌کردند و همه‌ی Parentها مسیر
  چند-Child/چند-Leaf را نمایش نمی‌دادند.
- **اصلاح:** Parentها Estedad Bold و تمام Child/Leafها Vazir Bold شدند؛ هر Parent سه Child
  و هر Child سه Leaf نمونه دارد.
- **قاعده‌ی پیشگیری:** hierarchy تایپوگرافی و data shape نمونه باید دقیقاً نقش‌های واقعی
  کامپوننت را نمایش دهند، نه فقط یک شاخه‌ی استثنایی.

## ERR-022 — فاصله‌ی نامشخص بین Childهای هم‌سطح Tree View

- **نشانه:** Childهای مستقیم یک Parent بدون قرارداد فاصله‌ی عمودی رندر می‌شدند و خوانایی
  گروه‌های چندشاخه را کاهش می‌دادند.
- **اصلاح:** container مستقیم Childها به flex column با `gap: 0` تبدیل شد؛ مقدار ۱۲px از
  بازخورد دیداری کاربر حذف شد.
- **قاعده‌ی پیشگیری:** فاصله‌ی siblingها باید بر اساس عمق تعریف شود؛ فقط Childهای مستقیم
  Parent این gap را می‌گیرند و Leafهای یک Child از آن تبعیت نمی‌کنند.

## ERR-023 — کوچک‌شدن فونت Child در حالت باز Tree View

- **نشانه:** selector حالت باز برای Child، font-size آن را از ۱۳px به ۱۱px کاهش می‌داد.
- **اصلاح:** shorthand قدیمی `font` با قرارداد کامل `Vazir Bold 13px/36px` برای همان selector
  جایگزین شد؛ selector حالت `is-expanded` نیز با همان specificity override شد تا CSS پیشین
  نتواند اندازه را بازنویسی کند. قرارداد نهایی کاربر: تمام سطح‌ها ۱۲px هستند.
- **پیگیری:** selector جداگانه‌ی Childهای بسته نیز با specificity بالاتر ثبت شد تا Parentهای
  بدون Child باز، به ۱۳px بازنگردند.
- **قاعده‌ی پیشگیری:** تغییر state یا ارتفاع ردیف نباید typography قراردادی همان سطح را تغییر دهد
  مگر آن‌که مرجع Figma یا کاربر صراحتاً آن را تأیید کرده باشد.

## ERR-024 — خارج‌بودن نمونه‌های کامپوننت از grid مستندات

- **نشانه:** Field Example، Field Group، Tree View و Tag داخل title container رندر می‌شدند، در
  حالی که کارت‌های عمومی در grid دیگری بودند. در دسکتاپ فاصله‌ی واقعی کارت‌ها به‌جای ۲۰px از
  عرض trackهای کشیده‌شده ایجاد می‌شد.
- **علت:** نمونه‌ها به `SectionTitle` متصل شده بودند و دو grid مستقل با قراردادهای متفاوت وجود داشت.
- **اصلاح:** همه‌ی نمونه‌ها و Cardهای شَد‌سی‌ان به‌عنوان فرزند مستقیم `component-grid` منتقل شدند؛
  track دسکتاپ ۳۶۰px و gap برابر ۲۰px است. selector قدیمی Tag که همه‌ی `div`های مستقیم را هدف
  می‌گرفت نیز با selector ساختاری Card جایگزین شد.
- **قاعده‌ی پیشگیری:** title container هرگز محل render نمونه‌ی کامپوننت نیست. در یک صفحه‌ی
  مستندات فقط یک grid مالک چیدمان نمونه‌هاست؛ برای کارت‌های با عرض مرجع، `repeat(auto-fit, 360px)`
  و `justify-content: start` در RTL استفاده می‌شود، سپس در موبایل به یک ستون fluid تبدیل می‌شود.

## ERR-002 — ناهماهنگی ستون عنوان‌های Field Example

- **علت:** ردیف‌های مختلف از flex و حداقل‌عرض استفاده می‌کردند و عرض عنوان بر اساس متن تغییر می‌کرد.
- **قاعده‌ی پیشگیری:** Field Example همیشه با grid دو ستون ثابت ساخته شود: کنترل ۲۵۰px، فاصله ۱۲px، ستون عنوان ثابت؛ عنوان نباید با طول متن عرض ستون را تعیین کند.

## ERR-003 — تراز نشدن Date Picker با ستون کنترل‌ها

- **علت:** Date Picker عرض محتوای داخلی خود را حفظ می‌کرد و داخل ستون کنترل از لبه‌ی مشترک استفاده نمی‌کرد.
- **قاعده‌ی پیشگیری:** تمام ردیف‌ها باید grid ثابت `250px 50px` با gap دوازده پیکسل داشته باشند؛ Date Picker در ستون ۲۵۰ پیکسلی با `justify-self:end` قرار بگیرد و محتوای داخلی آن به لبه‌ی راست ستون بچسبد.
- **وضعیت:** superseded by ERR-004؛ این قاعده‌ی ثابت دیگر معتبر نیست.

## ERR-004 — فرض اشتباه عرض ثابت برای ستون‌ها

- **علت:** عرض ۲۵۰px برای کنترل و ۵۰px برای عنوان ثابت فرض شده بود؛ این قرارداد با عنوان‌ها و فیلدهای متغیر سازگار نیست.
- **قاعده‌ی پیشگیری:** ستون کنترل fluid (`minmax(0, 1fr)`) و ستون عنوان `max-content` باشد؛ تنها فاصله‌ی بین ستون‌ها ثابت و برابر ۱۲px است.
- **ERR-012 — Inventory scope vs implementation claim (2026-10-27):** مرجع طراحی شامل ۴۹ families while Norato has fewer validated Vue contracts. The local showcase catalogs all 49, but only validated items are marked Implemented; the rest remain Adapted or Proposed until contracts and browser evidence exist.
- **ERR-013 — قراردادهای تجمیعی به‌جای صفحهٔ مستقل (2026-10-27):** درخواست مستندات جداگانهٔ هر کامپوننت به اشتباه با یک فایل تجمیعی و صفحهٔ جزئیات عمومی پاسخ داده شد. اصلاح: یک فایل Markdown و یک route مستقل برای هر خانواده؛ محتوای هر route از همان فایل خوانده می‌شود و جزئیات منبع به‌صورت خانواده‌محور ثبت می‌شود.

## ERR-014 — Component documents were separate but still too generic

- **Cause:** The first correction created 49 Markdown files but reused generic Overview/Anatomy/States/Usage text and grouped many samples under shared placeholder shapes.
- **Correction (2026-10-27):** Re-reviewed each component definition and rewrote all 49 contracts with the nine requested sections, individual variant/size/state axes, anatomy/parts, usage and RTL guidance, accessibility guidance, token names, and a separately labeled Norato token mapping. Every local detail page now renders the same nine sections and its own specimen. All 49 routes were checked in the browser; titles, sources, section headings, and specimen text signatures matched.
- **Verification:** token check, Vue TypeScript check, production build, and 390×844 mobile render of the Checkbox page passed. Full production interaction/accessibility validation for all proposed component families remains outside this documentation correction and must not be inferred from specimen presence.

## ERR-026 — Duplicate component renderer and dashboard navigation noise

- **Finding:** `App.vue` contained a legacy detail route with generic Overview/Anatomy/States/Usage text beside the new Markdown-driven renderer. Inventory cards also grouped families into generic miniature renderers, and the `On this page` rail repeated all 49 navigation entries already present in the sidebar.
- **Correction:** removed the stale generic route; connected inventory cards to the selected component's family-specific specimen and made all specimens inert; reduced the second rail to page navigation; added an explicit status legend and a team guide with workspace imports and known adapter limitations.
- **Prevention:** keep one detail renderer sourced from one contract; do not present visual specimens as working controls or claim a published package where none exists.
- **Verification:** token resolution, token check, Vue typecheck/build, team-guide DOM, component route and 49-item inventory DOM were inspected. Desktop screenshot evidence captured. Mobile browser viewport was not available in the current in-app browser session and remains unverified for this follow-up.

## ERR-027 — Vue adapters were not team-consumable

- **Finding:** workspace package names were missing, adapter classes had no shared stylesheet, Field/Select/ChoiceGroup lacked controlled update events, and Date Picker's trigger did not open a calendar while the catalog marked it Implemented.
- **Correction:** added private `@norato/vue` and `@norato/tokens` workspace packages, token-backed shared component CSS, controlled model events, real Vue adapter examples, and changed Date Picker maturity to Proposed.
- **Verification:** token check, Vue typecheck, Vite production build and desktop browser checks passed; Field updates, checkbox selection, and native Select keyboard selection were observed. Mobile viewport remains unverified.

## ERR-028 — خوانایی سندها و نشانگر فوکوس کم‌کنتراست (2026-10-27)

- **یافته:** Markdown قراردادها به‌صورت متن خام دیده می‌شد؛ توکن placeholder/disabled کنتراست 2.58:1 داشت و حلقهٔ زرد فوکوس روی سطح روشن به‌تنهایی کنتراست کافی نداشت.
- **اصلاح:** رندر امن و معنایی Markdown، توکن‌های تایپوگرافی مخصوص مستندات، تیره‌تر کردن neutral، و حلقهٔ داخلی زرد همراه outline بیرونی آبی افزوده شد. فوکوس زرد مطابق قرارداد موجود Field حفظ شد.
- **پیشگیری:** هر تغییر focus باید هم‌زمان با قراردادهای component و contrast surfaceها بررسی شود؛ زرد به‌تنهایی نشانگر کنتراست‌دار محسوب نمی‌شود.
- **تأیید:** outline آبی/سفید 4.82:1، placeholder جدید 5.33:1؛ فوکوس واقعی با Tab، token check، Vue typecheck و build پاس شدند. mobile viewport در این نشست در دسترس نبود.

## ERR-029 — Component categories implied grouped pages

- **Finding:** the sidebar displayed seven category clusters, inventory cards repeated category labels, and search matched those labels. This visually suggested the components were grouped even though routes/contracts existed individually.
- **Correction:** replaced sidebar category groups with a flat, scrollable list of all 49 independent links; removed category labels from cards/detail headers and limited search to component names. Categories remain internal catalog metadata only.
- **Verification:** accessibility tree exposed 49 separate buttons; Checkbox opened `#component-checkbox` and its unique nine-section contract. Token check, typecheck and production build passed. Exhaustive 49-link and mobile viewport checks remain open.

## ERR-030 — Desktop canvas underused (2026-10-27)

- **Finding:** readable-measure max-width was applied to entire dashboard, team guide and component detail, while the desktop shell also reserved space for both fixed side rails. This left large unused canvas areas; long contract pages stayed one-column.
- **Correction:** expanded docs shell to 1600px on wide desktops, reduced gutters, removed page-level narrow caps, used a two-column semantic detail layout, made guide sections two-column, and let inventory auto-fit cards. Existing breakpoints collapse the added columns below 1024px and on mobile.
- **Verification:** desktop renders of Checkbox, Team Guide and Foundation inspected; token check, Vue typecheck and production build passed. Mobile viewport unavailable in this browser session.

## ERR-031 — External design-system attribution visible in Norato docs (2026-10-28)

- **Finding:** the app overview and detail page named an external system and linked out to it; all 49 component contracts also exposed external attribution, external token labels, and source notes. This conflicted with the user's explicit request for Norato-only team-facing presentation.
- **Correction:** removed external naming, attribution, links and foreign token labels from app copy and contracts. Reframed guidance as Norato contracts, labeled unspecified behavior against the Norato contract, removed the sample external URL, and renamed the Spec Kit feature folder to `012-norato-component-system`.
- **Verification:** repository-wide text search found zero external name/domain matches; 49 contracts passed section/order checks; token check, Vue typecheck, production build, and browser checks of inventory, overview, Button detail and team guide passed.

## ERR-032 — Button detail cards are unbalanced and variants are text-only (2026-10-28)

- **Finding:** shared detail grid sent all contract cards to one narrow column; Button variants lacked visual specimens and useful copy actions.
- **Correction:** add a Button-only responsive card grid and visual variant gallery; use the actual Vue adapter for its four supported variants, label remaining types and sizes as visual contract references, and add accessible copy controls with feedback.
- **Verification:** token, type, build and actual local browser checks passed; the narrow responsive render was inspected.
- **Accessibility detail:** actual samples are inert visual specimens; copy controls remain keyboard accessible. The default button no longer exposes an unintended pressed state.
- **Desktop limit:** wider breakpoint visual QA remains open because the in-app viewport could not be widened.

- **Verification update:** `pnpm check:tokens`, Vue `typecheck`, production build passed. Local browser at `http://localhost:5174/#component-button` confirmed RTL layout, visual variant/state/size examples, correct button semantics, visible keyboard focus, and clipboard success feedback. Narrow layout was inspected; wider desktop visual QA remains open because the in-app viewport could not be widened.

## ERR-033 — Button samples looked stretched and used the wrong accent (2026-10-28)

- **Finding:** `space-between` distributed variant/state card content across the full card height; the generic specimen minimum added excess Button preview height. Package Primary was blue and Secondary had a 1px blue stroke.
- **Correction:** align gallery content naturally, reduce Button-only specimen height, use Norato yellow for Primary and 2px yellow Secondary stroke, and preserve dark text and focus contrast. Update visual size/state references and Button contract tokens.
- **Verification:** token check, Vue typecheck and production build passed; localhost render shows yellow Primary, 2px yellow Secondary, compact gallery/specimen, readable code wrap, and preserved keyboard focus.

## ERR-034 — Button font and corner shape missing from current contract

- **Finding:** button CSS inherited the body typeface and card radius, despite the approved button rule requiring Estedad Bold and rounded ends.
- **Correction:** apply the heading font token at bold weight and the control-radius token to actual/package Button, dashboard Button, and Button-only visual shapes; explicitly exclude copy controls and other specimen buttons from legacy font inheritance.
- **Verification:** local Button render shows Estedad Bold and pill silhouette for actual and visual Button shapes; copy controls keep card radius. Token check, Vue typecheck and production build passed.

## ERR-035 — Button desktop cards were side-by-side and contract data was visually tangled (2026-10-28)

- **Finding:** Button detail used a three-column desktop grid and two-column tablet grid, placing independent documentation cards beside each other. Long Persian/English contract rows and inline tokens were difficult to scan.
- **Correction:** made the Button detail one column at every breakpoint, removed obsolete placement overrides, reduced Button card surface/spacing, rewrote the standalone contract as concise Persian-first data, and isolated inline identifiers as LTR code blocks.
- **Verification:** local page accessibility tree exposes all nine independent contract sections; narrow browser render shows sequential cards and readable token chips. `pnpm check:tokens`, Vue typecheck, and production build passed. Wide desktop visual QA remains open because the connected browser viewport is narrow.

## ERR-036 — Button documentation hierarchy overwhelmed the samples (2026-10-28)

- **Finding:** the page heading used a 32–56px display scale, section headings were 18px, body copy 16px, and every documentation section repeated a padded bordered/shadowed card. This made the documentation shell visually louder than its component specimens.
- **Correction:** applied a compact editorial hierarchy with semantic documentation tokens, light separators, transparent page metadata, and quieter code/copy chrome. Kept copy hit targets and focus rings. Scoped rules to the Button page shell and contract content; component specimen/gallery rules are unchanged.
- **Verification:** local browser shows the reduced hierarchy, all nine contract sections and RTL order; keyboard focus remains visible. Button sample controls retain their appearance. `pnpm check:tokens`, Vue typecheck, and production build passed. Wide desktop visual review remains limited by the connected narrow viewport.

## ERR-037 — Button usage snippet lacked the requested dark contrast surface (2026-10-28)

- **Finding:** the Vue example used the generic subtle surface and inherited body text, contrary to the requested `#484848` background and white code text.
- **Correction:** added semantic code surface/text tokens and applied them only to the Button usage snippet, preserving LTR formatting and copy behavior.
- **Verification:** local browser visibly shows the dark block and white code. White on `#484848` measures 9.15:1. Token check, Vue typecheck, and production build passed.

## ERR-038 — Button variant gallery left one card isolated and stretched sample wells (2026-10-28)

- **Finding:** nine variants were placed in four desktop columns, producing 4/4/1 rows; full-width sample wells exaggerated empty space around each Button.
- **Correction:** use three desktop columns for balanced 3×3 rows, two columns on tablet with the final card centered, and one on narrow mobile. Sample wells now fit their content; only gallery card spacing was tightened.
- **Verification:** supplied desktop screenshot was used to identify the 4/4/1 defect; local narrow browser shows the two-column layout and centered final card. Accessibility tree retains all nine variants and copy actions. Wide desktop post-change re-render was unavailable; CSS desktop rule is three columns.

## ERR-039 — Variant demos had gray backplates and a duplicate destructive sample (2026-10-28)

- **Finding:** gray sample wells obscured the difference between Tertiary (subtle filled surface) and Text (transparent). Danger Solid duplicated the Danger destructive red fill, without a separate Vue API variant.
- **Correction:** removed gray well backgrounds and the Danger Solid Button sample; retained Danger as the destructive type and updated Button contract count to 7 types/168 combinations. Tertiary and Text now read distinctly against the page surface. Icon Button content remains unchanged.
- **Verification:** local browser accessibility tree shows eight gallery examples and the updated contract; rendered samples have no demo backplate, and Danger Solid is absent. Token check, Vue typecheck, and production build passed.

## ERR-040 — Top Button specimen showed black/red treatments instead of the requested cancellation example (2026-10-28)

- **Finding:** the top preview included all four API variants, including black Inverse and red Destructive, while the supplied reference called for a neutral gray-outline cancellation button.
- **Correction:** retained yellow Primary and yellow-outline Secondary, removed Inverse/Destructive only from the top specimen, and added an inert `انصراف` pill with a semantic neutral border token. Documented it as preview-only; the API and variant gallery remain unchanged.
- **Verification:** local browser shows the three requested examples and preserves the dark code block; token check, Vue typecheck, and production build passed.

## ERR-041 — Implemented documentation diverged from the current Figma foundation (2026-10-28)

- **Finding:** the Vue docs used `#356AE6` instead of the observed brand Blue `#134F89`, used an unrelated page-gray background, exposed only four broad foundation cards rather than 14 chapters, and omitted the source's observed values/uncertainty. The palette also conflated Info and Tag Blue semantics.
- **Correction:** align semantic brand/neutral/info/tag values and documentation page grammar; expose all 14 chapters; present source evidence in a dedicated ledger; add observed spacing/radius/elevation values as source-labeled tokens while preserving approved component contracts and Norato's state colors.
- **Typography decision:** source includes legacy Lalezar styles, conflicting with project constitution; retain Estedad/Vazirmatn policy and record the mapping.
- **Evidence limitation:** Figma says its extraction needs review, its spacing does not form a regular scale, global error/success/focus values are missing, and old link blues conflict. Do not claim those as settled Norato standards.
- **Verification:** local desktop Overview, Foundation, and Button routes were rendered and inspected; desktop RTL column order and overflow were measured. `pnpm check:tokens`, Vue typecheck, and production build passed. Mobile viewport and chapter jump keyboard activation remain unverified.
- **Follow-up layout correction:** old logical-margin/grid rules placed the docs rail on the wrong side and forced overflow. The RTL selectors now explicitly place content and rail, with computed layout and screen render rechecked; the in-app browser did not provide a viewport-resize control, so mobile breakpoints remain source-verified only.

## ERR-042 — Non-Button detail pages lacked Button-level documentation affordances (2026-10-28)

- **Finding:** Input, Select, Checkbox and Radio Button pages shared a two-column, heavily surfaced layout; only Button had section-copy controls and visual Variant/State/Size examples. First-pass field specimens were visual HTML rather than their actual adapters.
- **Correction:** apply a scoped single-column editorial layout to non-Button pages; add copy controls to all nine contract sections; add source-labeled variant/state/size galleries for the four implemented form components; render top field and select specimens with actual Norato adapters and keep them disabled inside the inert preview.
- **API boundary:** Field/Select examples use actual modelValue/errorText/helperText/loading/disabled props. ChoiceGroup uses selected/kind/options/errorText and has no size/loading/mixed-state prop; unsupported states remain clearly marked as visual references. Select Multi Select and Input Success are also visual references only.
- **Verification:** Input, Select, Checkbox and Radio Button were opened separately in the local desktop browser; one-column hierarchy, RTL content, disabled previews, selected/invalid examples and independent navigation were visually reviewed. Accessibility tree confirms all nine contract copy buttons on Input. Vue typecheck, build and token validation passed. Mobile rendering and full keyboard clipboard interaction remain unverified.

## ERR-043 — Component and Foundation metadata drifted across duplicate sources (2026-10-28)

- **Finding:** `App.vue` held a second 49-name/category list, maturity sets, route exceptions, implementation/snippet maps and duplicate Foundation cards. `packages/components/src/inventory.ts` described only an outdated subset; the primitive decision ledger used display labels rather than stable IDs. Component docs were loaded by inferred file names.
- **Correction:** create `@norato/components` as the typed source for 49 stable IDs/slugs/names/tags/statuses/contract paths/specimen keys and verified adapter/export references; preserve each Markdown file as the sole full-contract source; derive Foundation cards from its 14-chapter list; key usage examples separately and show them only when the catalog identifies a ready adapter. Migrate the primitive ledger to stable IDs, improve inventory search to include IDs/tags, and show explicit document identity on each detail page.
- **Readiness rule:** Date Picker's exported draft is documented as experimental and Proposed; it has no interactive calendar and no product-ready usage snippet.
- **Verification:** integrity check confirms 49 unique records, 49 existing nine-section contracts, specimen mappings, current adapter exports and known usage snippets; token check, Vue typecheck and production build pass. Browser review confirms all 49 independent routes render with their headings and contract sections; Foundation, Team Guide, Button, Radio Button, Date Picker, and search-by-ID were checked individually. The `radio` query isolates Radio Button. Mobile visual review and full keyboard navigation remain unverified.


## ERR-044 — Button ends looked slightly flat at the approved control radius (2026-10-28)

- **Finding:** the Button, its dashboard examples and the “انصراف” specimen used `--norato-radius-control` (25px). At an approximately 60px visual height this leaves a visibly flatter end than the user's capsule requirement.
- **Correction:** add semantic `--norato-radius-pill` as an alias for the observed 50px radius and apply it only to Button implementations and Button specimens/galleries. Keep `--norato-radius-control` unchanged for fields and unrelated controls.
- **Verification:** local Button route visibly shows fully rounded ends on Primary, Secondary, and “انصراف”; token check, Vue typecheck and production build pass.

## ERR-045 — Component pages showed contract text with inconsistent visual data treatment (2026-10-28)

- **Finding:** the supplied Split Button detail page established the preferred document shell, but Button alone had complete visual Variant/Size/State galleries. Other pages rendered much of their nine-section contract as prose; four form pages also held a second hand-maintained gallery dataset.
- **Correction:** use one shared RTL shell matching the supplied page, preserve Button's specialized galleries, and render all nine sections of each component from its own Markdown contract through section-specific visual structures. Remove the unused hard-coded form gallery and its CSS to keep contract Markdown the single content source. Keep adapter-backed code gated by catalog metadata; mark conceptual visuals inert and reference-only.
- **Coverage:** all 49 independent routes rendered 11 page sections (specimen, usage/maturity, nine canonical sections); all nine sections had a visual presenter, with Button's existing dedicated Variant/State/Size galleries. The audit found no blank contract areas, raw Markdown render blocks, undefined placeholder text, or horizontal overflow in the connected viewport.
- **Visual review:** Button, Split Button, Input, Table and Date Picker were inspected in the local browser. Keyboard navigation reached a section-copy control and its 2px focus indicator was visible. Clipboard activation, wide desktop/mobile viewport resizing, and screen-reader testing were not performed.
- **Verification:** `pnpm check:catalog`, `pnpm check:tokens`, Vue typecheck, and production build pass.

## ERR-046 — Button Anatomy map duplicated Label inside the Container shell (2026-10-28)

- **Finding:** The first exploded map depicted the Container as a miniature outlined button containing «ذخیره» and then rendered the Label as another independent «ذخیره». This conflated the enclosing shell with its content.
- **Correction:** Render Container as an empty dashed capsule shell; update the Button contract to state that it encloses the other parts. Keep Label and icon layers separate and preserve the optional icon API boundary.
- **Verification:** Browser render shows an empty 131.75px shell and exactly one Label; RTL is preserved with no horizontal overflow at the connected viewport. Full project checks are rerunning after correction.

## 2026-10-28 — Button playground controls

- Defect: plain selects and checkboxes read as scattered controls in RTL; code copy had excessive separation from snippet. Fixed in ButtonPlayground.vue and its original CSS block with labeled fields, animated switch states and attached code toolbar.
- Defect: playground passed false to pressed for an ordinary action, adding unnecessary aria-pressed. Fixed by passing undefined until enabled.
- Defect: Overview labels were stale after adding an Icon Button limitation paragraph. Fixed label mapping.

## 2026-10-28 — Button playground select and switch presentation

- Defect: the text chevron sat 12px from the left select edge and appeared cramped. Replaced with a centered SVG chevron inset 16px, preserving the native select.
- Defect: switch labels inherited unnecessary bordered pills. Removed the enclosing border and background while retaining the 48px clickable label and track focus indicator.

## 2026-10-28 — Native popup in Button playground

- Defect: styling the closed native select did not style its Windows popup; the open options retained the system blue selection and mismatched the page. Replaced only the two playground selects with an in-page Vue listbox, preserving values and generated code.
- Validation: variant/type selection, arrow navigation, Escape focus return and local rendering passed. The package's NoratoSelect remains native and is outside this screenshot's scope.

## 2026-10-28 — Mixed Latin and Persian UI numerals

- Defect: generated section indices, size labels, date cells and live counters used Latin digits beside Persian prose. Added app-wide text normalization for initial and dynamically inserted UI text.
- Risk found during browser review: resolved token values such as #fdc101 were partially transformed. Marked those displayed values as technical so they remain valid and copyable.
## 2026-10-31 — Input preview duplicated state examples and inflated its frame

- Finding: the top Input specimen stacked a disabled filled field and an error field. The frame measured 260px high, while Lemon's Input preview presents one compact labeled field; the two examples made the preview look vertically elongated.
- Correction: replace the top stack with one inert email specimen and keep state exploration in the live Vue playground. The rendered field remains 48px high, the RTL group about 97px, and the frame about 147px at the inspected desktop width. No horizontal page overflow was observed.
- Remaining verification: mobile viewport comparison and full keyboard/focus review are open; do not mark Input complete yet.
- Browser recheck: at 430px viewport the preview input measured 48px, specimen frame 123px, and document scroll width 429px; no horizontal overflow. Loading and Disabled both disable editing; Error sets `aria-invalid="true"` and references its text.
- Accessibility correction: Field now marks its group `aria-busy` while loading and exposes a polite, associated loading status. Token, catalog and TypeScript checks pass; final visual comparison and keyboard/focus review remain open.
- Mobile QA at 390×844 found document overflow (429px) caused by the long inline adapter path in the implementation header; code sample wrapping alone did not resolve it. Added mobile wrapping for inline code and sample code. Recheck measured document width 375px, field 48px, specimen 123px, and no overflowing descendants. Tab reached the next checkbox with visible 2px yellow focus ring and blue contrast outline. Loading exposed `aria-busy=true`, an associated live status, and disabled input.
## 2026-10-31 — Split Button disconnected preview and clipped mobile menu

- Finding: the former preview used two independently rounded yellow pills; Lemon uses one connected capsule with a divider. The toggle measured about 41px wide, below Norato's 48px target.
- Correction: preview now uses the approved Norato Button silhouette in one connected shell. The experimental Vue adapter has independent 48px-or-larger action/toggle targets and a semantic token menu.
- Browser defect found during QA: at 390px viewport, menu aligned to the toggle's physical left edge extended to x≈432px, outside the 390px viewport. Mobile placement now anchors its right edge to the control, measuring x≈167–359px; no page overflow. Desktop left-edge alignment remains.
- Remaining: size API, full family variant/gallery fidelity and final DoD review. Status stays Proposed.

## 2026-11-01 — Split Button frame, galleries, and loading indicator

- Finding: the component route had the correct nine-section shell and a connected 48px control, but its top preview frame was only 136px high versus Lemon's roughly 298px desktop frame. The dedicated `SplitButtonShowcase.vue` existed but was not connected to the contract page; generic sample cards were shown in its place. The live adapter's `loading` state disabled both buttons and set `aria-busy`, but had no visual progress indicator. The Playground kept a previous menu selection as its status after the primary action, hiding the action count.
- Correction: added Norato-token-backed 288px desktop/mobile preview geometry, a 320px mobile width cap, and the Default marker; replaced the stale two-Button sample with the inert `NoratoSplitButton` specimen and removed its legacy CSS. Connected the six-variant, four-size and five-state runtime galleries. Added a reduced-motion-aware spinner; the playground clears selected-action feedback when the primary action runs.
- Browser evidence: at 1920×863 the Norato frame is 584×288px (limited by the documentation column), while Lemon's visible sample is about 630px wide and 298px high. Both show a centered connected capsule with one divider; Norato retains its semantic yellow. The control itself remains 48px high. Live checks confirmed both events, ArrowUp/Down, Home/End, Escape focus return, Tab exit, outside click, menu selection, disabled/loading, and no primary button in Dropdown mode. All four visuals measured 32/40/48/56px; both Small/Medium native targets remain at least 48×48px. AX tree exposes a named toggle, expanded state, menu and menu items.
- Limitation at initial pass: the connected Chrome surface did not provide a viewport override, so mobile remained unverified then. A later pass enabled the real 390×844 viewport and measured document=375px, frame=320×288px, control=48px and no overflow. Lemon at the same viewport measured about 314×288px. No external screen-reader application was run.

## 2026-11-01 — Input specimen audit before implementation

- Browser evidence: Lemon's top Input specimen is one email field inside a 636×300px desktop stage; the shell is 324×41px. Norato's current specimen is 317×48px within a 343×123px frame at 390×844; document/body width is 375px with no horizontal overflow.
- Visual gap: the current top sample has no Lemon-like dotted/glass preview treatment, default marker or email leading icon, and the current 123px mobile frame is 177px shorter than Lemon's measured 300px desktop frame; Lemon mobile dimensions are not yet verified. Keep the Norato target ≥48px.
- Scope gate: Lemon documents eight Input-family controls while Norato exports a generic text adapter and a separate textarea adapter. User clarification on whether all eight must be executable is pending; no scope-dependent implementation has started.
## 2026-10-31 — Select live playground and Lemon parity gap

- Finding: the catalog labeled the adapter as implemented without describing its scope, and the detail page had only disabled examples.
- Correction: added a live controlled native-select playground and loading semantics (`aria-busy`, associated polite status); removed a duplicate live announcement.
- Browser evidence: desktop and 390px Lemon/Norato comparison verified RTL, a 48px field, 375px mobile document width, keyboard value changes, required/error/disabled/loading and visible focus. The former two-field preview frame measured about 343px tall on mobile; replacing it with one default field reduced the specimen frame to 98px mobile and 122px desktop, without changing the 48px control.
- Remaining: Lemon’s glass menu, search, groups and multi-select remain unsupported by the adapter; Select DoD stays open.

## 2026-11-01 — Select Reka adapter browser review

- Multi-select with five choices risked growing the field vertically on narrow screens. Changed the chip display to one selected label plus a localized remaining-count chip, matching Lemon's compact variant. Browser shows `تهران` and `+۴` at 48px field height.

- Defect: inside-label Select stretched to 65.2px from two text lines and 8px vertical padding. Reduced only that variant's padding and internal gap with existing tokens; browser now measures 56px for both summary and two chips at desktop and 390px mobile. Also moved the checkbox explanation out of Anatomy after it was incorrectly parsed as a seventh part.

- Visual contract mismatch: multi-select options reused the single-select text checkmark, while the Lemon and Figma contracts require checkbox frames. Added a reusable 24px SVG checkbox visual with semantic Norato tokens, kept the Reka option as the sole interaction target, and verified staged Cancel/Confirm and mobile geometry in the browser.

- Visual defect: the Select chevron was a font glyph and its shape varied with font rendering. Replaced it with a 24px SVG path matching the reference direction; verified left-side RTL placement and open-state rotation in the browser.

- Visual defect: the generic form specimen selector gave the Select preview a 512px wide field inside a 123px tall frame, while the Lemon preview field was about 302px wide inside an approximately 296px frame. Added Select-specific semantic preview tokens and selector; desktop and 390px browser render now show a centered 300px field in a 296px frame without horizontal overflow. The 48px Norato interaction target remains.
- 2026-11-01 follow-up: Select's plain `sample-select-preview` rule still showed a 296px-tall white frame without the Lemon-like dotted glass or Default marker. Reworked that legacy rule in place and added a scoped inert marker. On a fresh local render at 1195px browser width, frame measured 540×288px (limited by content column), field 300×48px, RTL; screenshot shows Norato's yellow/blue dotted wash. Lemon baseline measured 636×300px at 1920px. Same-viewport Lemon/Norato comparisons: at 1920×863, Lemon 636×300px vs Norato 584×288px (column-limited), field 302.4×68.2px vs 300×48px; at 390×844, Lemon 327×300px vs Norato 320×288px, with Norato 375px document and no overflow. Screenshots confirm matching centered one-field composition and marker with Norato palette. Full combined state gallery remains open.

- Defect: the noninteractive multi-select display chip inherited the 48px interaction target and stretched the trigger to 66px. Reduced the chip to a 24px visual token; browser measurement now shows a 48px trigger. The trigger remains the 48px interactive target.

- Defect: search ArrowDown/ArrowUp queried a caller-supplied content id that Reka replaced at render time, so option focus could fail. Changed the lookup to the search input's containing menu; mobile browser now moves focus to the first enabled option with ArrowDown.

- New implementation: Reka-backed Select with grouped glass menu, search and staged multi-selection. Browser verified single selection after filtering with ArrowDown/Enter, plus multi-selection Cancel and Confirm; the committed value did not change before Confirm.
- Focus defect: the first implementation focused an option before the search input. Scheduling focus after the popup render made the search input the focused element on open.
- Remaining: full mobile and state-by-state DoD review; do not treat passing build or these focused interactions as complete parity.

## 2026-11-01 — Combobox popper missing anchor

- Finding: browser typing and filtering updated `aria-expanded`, but Reka's popup wrapper remained translated by -200%, outside the visible page because the field was not registered as `ComboboxAnchor`.
- Correction: wrapped the field in `ComboboxAnchor as-child`; the results panel now aligns to the field and stays in the mobile viewport. Browser confirmed Persian results and the empty message.
- Follow-up implementation: multi-select, compact chips, four sizes, inside/outside labels, loading/recent/create states and Clear are now in the adapter. Full visual and interaction DoD remains open.

## 2026-11-01 — Combobox mobile width and inside-label stretch

- Finding: on 390px viewport, Reka's unbounded root wrapper widened the playground field to 401px and the document to 417px. The inside XLarge label stacked above a 56px row and reached 84px.
- Correction: constrain the Reka wrapper and field to their parent, and position the inside label within a 56px/64px field. After correction the document width is 375px at a 390px viewport; outside fields measure 50px for Small/Medium/Large and 58px for XLarge. Inside XLarge is 64px with a 56px control row.
- Visual correction: the default preview now uses a 310px field in a 320px mobile frame, with Norato's semantic accent wash and a search icon, matching Lemon's preview composition while preserving Norato colors and the 48px interaction floor.

## 2026-11-01 — Checkbox specimen and standalone semantics

- Finding: Checkbox was cataloged as Implemented through `NoratoChoiceGroup`, but that adapter has no standalone indeterminate control. The top preview also lacked a true checkbox field API and its Lemon-like dot pattern had low contrast on Norato's light canvas.
- Correction: added `NoratoCheckbox` with native controlled checkbox semantics, 16/20px visual sizes, mixed state, full-row label, required/error/disabled and descriptions; kept `NoratoChoiceGroup` for groups. Added a live playground and made the top specimen a single inert Lemon-composition sample. Increased dot contrast using a low-opacity Norato blue token mix and set a preview-specific 24px radius.
- Browser evidence: at 390×844 the preview frame was 320×288px and document width 375px. Checkbox row measured 48.78px, direction RTL with control on the right. Space toggled state and showed a 2px focus ring; indeterminate exposed `aria-checked=mixed`; label click toggled it; required, invalid/error association, disabled and 16px size passed. No screen reader was run.
- Remaining: inspect full Lemon 36-variant matrix, visual states and desktop geometry before closing Checkbox DoD.

## 2026-11-01 — Checkbox reference comparison follow-up

- Finding: Lemon's preview includes an upper-right `Default`/green-dot marker. At an equal 1280×900 viewport the Lemon frame is about 630×298px while the Norato column limits its 640px target to 584×288px. Lemon's resting checkbox computes to a 78% glass fill and a #e3e3e3 border; the previous Norato fill/border was more opaque and darker. The checkbox Anatomy visual also counted an explanatory paragraph as a fifth part.
- Correction: added the Default marker, changed the box to Norato's 78% glass and light border tokens, set the label to body medium, and moved the interaction-size note into Sizes. Anatomy now contains exactly four parts. Checked state remains Norato blue.
- Browser verification: 18 value/size/default-error-disabled combinations, six focus value/size combinations (visible 2px ring), and four checked/unchecked hover combinations across both sizes were exercised. Matched mobile viewport remains 390×844 with 320×288px frame and 375px document width; equal 1280×900 desktop has no page overflow. Accessibility tree reports mixed as checkbox Value 2 and presents required/error text.
- Follow-up: captured mixed+hover with a real pointer at both 16px and 20px. All 30 checkbox state/value/size combinations and six Checkbox Field combinations were reviewed; browser AX and keyboard checks passed. Independent screen-reader software was not run. Checkbox DoD is closed based on the project browser/AX acceptance criteria; no claim is made that a 36-cell screenshot gallery exists.

## 2026-11-01 — Radio Button single-value API and preview stretch

- Finding: Radio Button was routed through the generic array-valued ChoiceGroup and its top preview stacked two groups, creating an unnecessarily tall composition. It lacked 16/20 control sizing, option descriptions, group required/disabled/error semantics and its own live example.
- Correction: created `NoratoRadioGroup` with a single optional controlled value and native radio inputs; added RTL labels, 48px rows, descriptions, 16/20 visual sizes, required/error/disabled/focus states, a Lemon-composition one-group specimen and a separate playground. All visuals use Norato semantic tokens.
- Browser evidence: Lemon and Norato Radio pages were opened. Norato mobile viewport 390×844: specimen 320×288px, document 375px, rows 48px and RTL control right. Desktop browser at 1920 width: specimen 584×288px due to content column width. ArrowDown moved selection, AX exposed a named group and selected radio, focus ring was 2px; required, invalid/error association and disabled were observed in DOM.
- Follow-up: equal 1280×900 viewport geometry confirms Norato frame 584×288px and document width 1265px; the Lemon page did not expose its preview DOM geometry after the viewport change. Added an empty-required playground state and connected its required/error message with `aria-describedby`; confirmed visible alert, `aria-invalid` and exactly one required input in browser.
- Follow-up: exercised both 16px and 20px, checked and unchecked, Default/Error/Disabled in the live browser; all 12 DOM combinations reported the intended size/value/disabled/invalid state and each row remained 48px. ArrowDown, focus ring and named radio group were checked separately.
- Visual review follow-up: same 1280×900 Lemon/Norato screenshots exposed the inert specimen's legend leaking into the composition because `.sr-only` was referenced but undefined in this app. Added a component-scoped visually-hidden legend rule; confirmed its rendered box is 1×1px clipped, while its accessible name remains in the AX tree. Keyboard focus after ArrowDown reports `:focus-visible`, 2px outline, 4px offset and 2px semantic halo.
- Remaining: review the complete 26-variant/state matrix. Independent screen-reader software was not run.

## 2026-11-01 — Switch adapter and Lemon-composition preview

- Finding: Switch was still only a generic decorative mock with no Vue 3 runtime behavior, keyboard semantics, size API, or label/description relationship.
- Correction: evaluated the installed Reka Switch primitive and wrapped `SwitchRoot`/`SwitchThumb` in `NoratoSwitch` for controlled state, `role=switch` and keyboard/AX behavior; connected label/description and customized with Norato semantic blue, 3 track sizes, 48px target, RTL knob movement, disabled/error/focus/reduced-motion styles. Added export, catalog/usage integration, 9-section contract page, inert Lemon-shaped single-field specimen and live playground.
- Browser evidence: at 1280×900 Norato frame 584×288px due to content-column width, one 48px field, 48×48 target, medium track 40×24; Lemon screenshot has the same single-field composition in a wider ~630×298 frame. At 390×844 Norato frame 320×288 and document 375px without overflow. Three track sizes × off/on all preserved 48×48 target; knob moved left in RTL when enabled. Space and Enter toggled, focus outline measured 2px, AX exposed named switch, error message association and actual disabled state verified.
- Follow-up verification: `check:tokens`, `check:catalog`, Vue typecheck, production build and `git diff --check` passed; build reports a 541.79KB JS chunk warning. Browser confirms Space/Enter toggling, 2px focus outline (4px offset), `aria-invalid` error association and actual disabled state.
- Remaining: full 30 Switch state/size/value matrix, pointer-hover behavior and independent screenreader run are open; do not close family DoD yet.
- 2026-11-01 Switch: ابتدا DoD بر اساس رندر واقعی Lemon/Norato و API فعلی محدود شد. اندازه‌گیری مجدد در viewport متصل، preview-frame را 320×288، target را 48×48 و track متوسط را 40×24 نشان داد؛ screenshot matrix کامل نیست، بنابراین وضعیت Adapted/DoD باز باقی می‌ماند. استفاده از primitiveهای `SwitchRoot`/`SwitchThumb` در Reka جای پیاده‌سازی دستی interaction را گرفت؛ Space و Enter در مرورگر هر دو وضعیت را درست تغییر دادند.

## 2026-11-01 — Range adapter and specimen

- Finding: the prior Range specimen was a bare native input in generic `.sample-range` rules, with no value above its moving thumb, two-thumb mode or executable Playground. `.sample-range input` could also accidentally size Reka's hidden input.
- Correction: added controlled Reka Slider composition for single/range, size/state props, Persian value labels inside each thumb, RTL fill, 48×48px target, Norato semantic track/fill/hover/focus tokens, error associations and disabled semantics. Removed legacy native-input selectors and placed Lemon-shaped specimen rules in the app specimen stylesheet.
- Browser evidence: desktop (1280×720) and mobile (390×844) compared to Lemon. Norato frames measured 584×288px desktop (detail-column constraint) and 320×288px mobile; mobile document width 375px. The 16 Type × Size × Disabled combinations at both viewports all kept 48px slider height and 48×48px thumbs. ArrowLeft/Right, Home/End, pointer drag, focus ring (2px/4px offset), RTL fill, range ordering, disabled and error description passed browser checks. AX tree exposed named sliders and min/max/current values.
- Visual correction: first browser render showed current value twice and outside its thumb; moved the visual value into each thumb and removed duplicate row value. Hover/drag halo uses the existing Norato info-container token.
- Remaining: no independent screen-reader software run. Browser accessibility tree and semantic states were inspected.

## 2026-11-01 — Segmented Control implementation

- Lemon's segmented page documents 2–4 related views, two selected styles, four sizes, 24 group variants and 64 item combinations. Norato's global 48px target conflicts with Lemon Small/Medium 32/40px silhouettes; keep those hit areas 48px and vary text and horizontal spacing.
- Reka ToggleGroup is installed and exports `ToggleGroupRoot`/`ToggleGroupItem`; the public API supports controlled single selection, RTL, roving focus and pressed button semantics. Selection-empty updates are ignored to keep one view active.
- Added the controlled adapter, live playground and a single inert preview. Full browser DoD and technical gate results are pending.
- Render defect: the already-running Vite process retained a stale `import.meta.glob` list after the contract file was deleted/recreated during editing, so Segmented rendered only Preview/Usage-in-Vue and omitted the nine contract sections. A fresh Vite process included `segmented.md`; all nine headings and on-page anchors then rendered. Root cause is stale dev-server glob state, not a contract-path mismatch.
- Visual correction from equal-viewport Lemon comparison: selected preview now matches Lemon's first/right option; Norato dotted glass uses semantic yellow/blue gradients; desktop frame is 632×288px vs Lemon about 630px wide, mobile frame is 320×288px. The live group is 260px wide and all options keep 48px targets (XLarge 56px).
- Browser DoD follow-up: 24 group combinations (2 styles × 4 sizes × 3 item counts) passed RTL-order, minimum-target and text-overflow checks. Arrow navigation, Space/Enter, Home/End, non-empty controlled selection, focus ring, pointer hover, item/group disabled, pressed semantics and accessible group name were verified. Remaining independent screen-reader review and the full 64 item state/style/size cross product were not completed in this Git delivery.
- Fresh Vite route displays Preview + implementation playground + all nine contract sections, with no horizontal overflow at 1280px; the 390px mobile render remains 375px document width with no overflow.

## 2026-11-01 — Rating adapter, responsive preview and interaction

- Finding: Rating was a static text mock with legacy `.sample-rating` styling, no controlled values or summary; the first implementation draft did not bind the public `id` to read-only/summary roots.
- Correction: removed the old mock selectors, added a Reka RadioGroup adapter for whole-star input and read-only/summary rendering, bound IDs on display roots, added semantic size/frame tokens, live playground and usage example. Half stars use a right-origin gradient in RTL.
- Browser evidence: Lemon and Norato were compared at 1280×900 and 390×844. Norato frame is 584×288px in the desktop detail column and 320×288px mobile; mobile document is 375px. All 24 read-only value/size combinations matched their expected full/half/empty pattern; visible stars measured 16/20/24px. Input Large stars are 32px in 48×48px targets. Arrow keys change selection, hover previews fill, focus outline is 2px with 4px offset, disabled applies to all five radio items, and `aria-labelledby`/`aria-describedby` connect group label/helper. Summary progressbars expose correct 5→1 counts and ratios.
- Final gates: `check:tokens`, `check:catalog`, Vue typecheck, production build and diff check pass. Build retains the repository warning for a 590.31KB minified JS chunk. Independent screenreader software was not run.

## 2026-11-01 — Date Picker: proposal audit and implementation in progress

- Finding: the exported adapter's trigger did not open a calendar; the inventory mock used obsolete .sample-calendar/.calendar-days styles, displayed only part of one month, and had no behavior or mode controls. The old feature draft also limited scope to one date while the current user goal requires Lemon parity.
- Scope correction: specify all seven Lemon modes and keep holiday data consumer-supplied because no authoritative public-holiday source is bundled. Record local wall-clock date-time semantics.
- Primitive audit: Reka UI exposes Calendar/RangeCalendar/DatePicker/DateRangePicker with focus and keyboard behavior, but these primitives are Alpha. The new implementation currently uses @internationalized/date PersianCalendar and a unified seven-mode grid; this custom keyboard/focus path is a risk and must be verified against Lemon and accessibility requirements before maturity changes.
- CSS correction: old date mock selectors were replaced with dedicated bounded preview-frame/card/day selectors and tokenized picker panel selectors. Final geometry and all interaction/browser checks are pending.
- Render defect: the fixed-positioning function copied the input playground's 360px width onto the popover, overriding the 760px two-month range rule. Removed the forced inline width; at desktop 1920×863 the panel now measures 760×491px, stays within the viewport, and shows the current month on the right and the following month on the left.
- Mobile refinement: the 390×844 Lemon/Norato comparison showed Norato's inert specimen larger than Lemon. Constrained its frame to 320px and calendar card to the 256px mobile token; the measured Norato frame is now 320×306px and the page remains 375px wide with no horizontal overflow. The open range panel fits at 358×491px (x=12..370, y≈329..820), collapses to one month below 800px, and day controls stay 48×48px.
- Browser interaction evidence: ArrowLeft/Right and ArrowUp/Down move in the expected RTL calendar direction; PageUp/Down change month; Home/End move to the week boundaries; Enter selects and closes; Escape closes and restores trigger focus. The focus outline measures 2px. Disabled date, Friday and consumer-supplied holiday styles were inspected; date-time display/model preserved Persian digits and local `16:45`; error uses `aria-invalid` and `aria-describedby`; disabling the picker disables both field and trigger.
- Technical status after mobile token/style changes: `check:tokens`, `check:catalog`, Vue typecheck, production build and `git diff --check` all pass. Build reported a 626.16KB minified JS chunk warning at that point. Same-viewport desktop comparison at 1920×863 is complete: Lemon card is about 266×211px; Norato card measures 272×213px in a 584×302px frame constrained by the documentation column. The reference uses dark mode while Norato keeps its own palette. Detailed seven-mode visual checks were still open at this point and are closed by the follow-up below. The calendar specimen width is tokenized at 272px and its specimen day cells at 24px to prevent vertical stretching and bring card proportions closer to Lemon.
- Loading-state correction: `loading` already prevented opening by sharing the disabled computed state, but the playground could not expose it and the user received no visual or accessible busy signal. Added a spinner, `aria-busy`, and a polite status announcement; added a playground toggle and snippet support. Browser verification confirmed the calendar did not open, the input and trigger were disabled, and the accessibility tree exposed the status. Verified all seven open modes visually at desktop, selection updates for preset/month/year/wheel, and current Lemon desktop comparison. The mobile Lemon/Norato comparison and 48px targets are recorded above. Technical gates passed; production bundle warning is 626.87KB. Date Picker status advanced to Implemented; independent screen-reader software was not run.

## ERR-047 — Combobox specimen omitted the Lemon status marker and readable dots (2026-11-01)

- **Component:** Combobox
- **Finding:** same-viewport Lemon/Norato review showed the local inert preview lacked the upper-right `Default` marker. Its dotted pattern used near-white glass-line color over a light surface, making the dots effectively invisible.
- **Correction:** added the marker in the specimen markup and made the scoped dot pattern use a 14% mix of the semantic Norato blue token. Kept the 288px bounded frame, existing glass/wash and live playground unchanged.
- **Browser evidence:** at 1195×765, the preview now shows centered field, visible dotted glass, Norato blue/yellow wash and `Default` marker; frame stays 540×288px and the field 310×50px.
- **Prevention:** every Lemon-composition specimen must include its marker as inert markup and verify dot contrast against the actual Norato surface, not infer visibility from the CSS declaration.
- **Remaining:** full state/variant visual matrix and independent screen-reader verification remain open. The post-correction mobile screenshot and matched geometry were captured at 390×844 (Lemon 327×300px, Norato 320×288px; both documents 375px).

## ERR-048 — Combobox input stacked the global outline over its field focus ring (2026-11-01)

- **Component:** Combobox
- **Finding:** keyboard focus showed a 3px global input outline in addition to the intended wrapper ring, contradicting the recorded 2px focus contract.
- **Correction:** set the input's scoped `:focus-visible` outline to zero; retained the focus-visible field wrapper rule.
- **Browser evidence:** after reload and ArrowDown, input outline computed to 0px; the field wrapper reports a 2px semantic blue outline, 4px offset and 2px semantic yellow halo, with `aria-activedescendant` pointing to the highlighted result.
- **Prevention:** inspect computed focus styles in the rendered browser, since package component CSS and app-global focus CSS both apply to exported components.

## ERR-049 — Input top specimen stretched to the form column (2026-11-01)

- **Component:** Input
- **Finding:** `.sample-form-controls` allowed the inert top specimen to grow with the content column while the generic `:has(.sample-form-controls)` rule removed its bounded preview height. At the prior 1195px viewport this produced a 490px field in a 540×147px frame, unlike Lemon's single compact field in a 636×300px stage.
- **Correction:** added the Input preview class, semantic frame/field tokens, a scoped 640px/320px glass frame with 288px Norato height, 324px field cap, and the existing inert `Default` marker pattern. Kept the actual field at 48px and left the runtime playground unchanged.
- **Browser evidence:** same-viewport desktop 1920×863: Norato frame 584×288px due to its content-column cap, field 324×48px; Lemon frame 636×300px, field group 324×94.4px. Same-viewport mobile 390×844: Norato 320×288px frame and 310×48px field; Lemon 327×300px frame and 320.8px field group. Norato document width is 375px; RTL and inert specimen attributes confirmed.
- **Prevention:** bound specimen controls independently of their frame, verify the computed field width, and inspect `:has()` shared selectors before adding family preview rules.
- **Remaining:** full Input family DoD is still open while API scope and component behavior/state matrix remain unresolved.

## ERR-050 — Select gallery metadata was parsed as an extra state (2026-11-01)

- **Component:** Select documentation gallery
- **Finding:** a descriptive presentation note placed inside the contract's parsed `States` section was interpreted by `ContractVisualShowcase` as a nineteenth state entry. The contract actually defines 18 Select/Multi Select/Select Option states.
- **Correction:** removed presentation metadata from the parser-owned state list and kept the visual rule in `docs/figma-component-rules.md`; browser render now contains exactly 18 state cards.
- **Prevention:** keep documentation rendering rules outside parser-owned contract sections unless they describe a real component state; verify generated entry counts after contract edits.

## ERR-051 — Radio States gallery used unrelated pill artwork (2026-11-01)

- **Component:** Radio Button documentation gallery
- **Finding:** Lemon's States section uses concise title/description cards, but Norato showed generic horizontal pills with decorative marks, visually resembling a stretched unrelated control. At mobile width the shared narrow-screen rule also collapsed the gallery to one column.
- **Correction:** added a Radio-only static text-card renderer with all eight Radio Button/Radio Field states, family captions, Persian descriptions, semantic Norato status accents, and an explicit two-column mobile rule. Kept Radio adapter and playground unchanged.
- **Browser evidence:** same desktop viewport 1195×765; Norato three columns at 174.7px card width and 71.6–90.8px height vs Lemon's four columns at 151.5×88.6px. Same mobile viewport 390×844; Norato two columns at 167.5px width, 68.4–87.6px height, RTL and 375px document width vs Lemon's two columns at 158.5×88.6px. Eight cards, no pill artwork, no horizontal overflow. Button's 11 generic state cards and Select's 18 specialized cards remain intact; playground selection changed and was restored.
- **Prevention:** compare the actual States section (not only the top specimen) at desktop and mobile; inspect all responsive overrides, including narrower breakpoints, and verify component-specific gallery geometry and entry count.
- **Delivery:** production gates passed; commit `6091212` is pushed and remote `master` matches local HEAD.
- **Remaining:** Radio's full visual 20-cell matrix and independent screen-reader run remain open.

## ERR-052 — Switch States gallery used unrelated generic pill artwork (2026-11-01)

- **Component:** Switch documentation gallery
- **Finding:** the shared generic pill graphic was unrelated to Lemon's title/description state cards and visually suggested a stretched control.
- **Correction:** added a static text-card renderer shared by Radio Button and Switch. Switch retains five Switch and three Switch Field entries, family labels, Persian descriptions and semantic Norato accents; interactive controls remain in Preview/playground.
- **Browser evidence:** same desktop viewport 1195×765: Norato uses three columns constrained by its documentation content width while Lemon uses four. Same mobile viewport 390×844: both use two columns; Norato cards 167.5×87.6px and Lemon 158.5×88.6px; Norato document width is 375px, RTL with no horizontal overflow. Switch runtime: six size/value cells keep 48×48 targets and track sizes 32×20, 40×24, 48×28px; hover border becomes semantic blue; Space/Enter toggle; error and disabled semantics verified.
- **Prevention:** inspect the actual state gallery and its responsive overrides separately from the top specimen; measure the visual control independently from its target and preview frame.
- **Delivery:** token/catalog/TypeScript/build/diff gates passed; bundle 641.48KB produces the existing >500KB warning. Commits `6ef28fc` and `296c925` are pushed.
- **Remaining:** complete 30-cell visual matrix, keyboard focus ring measurement and independent screen-reader run remain open.

## ERR-053 — Segmented Control evidence mixed with Switch checklist (2026-11-01)

- **Component:** Lemon parity DoD documentation
- **Finding:** the Segmented Control evidence section ended with an unrelated Switch matrix item, obscuring the actual remaining Segmented checks. Also, the first attempt to change playground values with `setValue` did not mutate the Vue component state; only real menu selections are valid evidence.
- **Correction:** replaced the cross-family checklist entry with the Switch-specific pending item and recorded only browser-observed Segmented settings from actual popup interactions.
- **Prevention:** keep per-family acceptance rows within their matching headings; confirm live state changes in generated Vue usage and accessibility tree before recording them.

## ERR-054 — Radio empty-state simulation disagreed with status and generated code (2026-11-01)

- **Component:** Radio playground
- **Finding:** enabling “بدون انتخاب” rendered an empty radio group while the live status and Vue snippet still reported the retained monthly value. Choosing an option while this mode was active kept the group empty. Selected + error also announced “یک دوره انتخاب کنید.”
- **Correction:** derive the rendered model, status and generated `ref` from one effective value; selecting an option clears the empty simulation. Error status now reports the error without claiming no option is selected.
- **Browser evidence:** on `#component-radio`, all radio values were 0 with `undefined` and “بدون انتخاب” in status/code. Selecting quarterly changed the radio value, unchecked the empty simulation, and updated status and snippet to `quarterly`. Required + empty showed the required message and prop; selected + error exposed the actual error and a non-contradictory status. Initial monthly/20px/default state was restored.
- **Prevention:** verify generated examples against the effective runtime model for simulated states; always test leaving empty/error modes through the component interaction, not only by toggling controls.
- **Remaining:** this playground fix does not close Radio's independent screen-reader or full visual state matrix DoD.

## ERR-055 — Native number controls duplicated Norato step actions (2026-11-01)

- **Component:** Input / Number Input
- **Finding:** mobile Chrome showed native number spinner arrows beside Norato's explicit increment/decrement buttons, presenting two competing step controls.
- **Correction:** scoped WebKit/Firefox spin-button appearance rules to `.norato-input-field__input[type="number"]`; ArrowUp remains enabled and a browser interaction still increments 98 to the configured maximum 99. Search's browser-native cancel decoration is also hidden because Search supplies its own labeled clear action.
- **Prevention:** whenever a custom action replaces a native affordance, inspect the actual mobile render for duplicate controls and verify the underlying keyboard operation still works.

## ERR-056 — Amount display rounded values beyond the safe integer range (2026-11-01)

- **Component:** Input / Amount Input
- **Finding:** formatting a canonical amount through JavaScript `Number` could round digits above `Number.MAX_SAFE_INTEGER`, while the editable model accepts digit strings.
- **Correction:** use `BigInt` for exact digit grouping. Continue showing spelled-out words only for safe nonnegative integers so the text cannot claim a rounded value.
- **Browser evidence:** entered `9007199254740993`; the field displayed `۹٬۰۰۷٬۱۹۹٬۲۵۴٬۷۴۰٬۹۹۳`, with no amount words, then the playground amount was restored to its default.
- **Prevention:** preserve large integer values as strings/BigInt in financial display paths; do not pass through floating point formatting.

## ERR-057 — Input States gallery omitted visual state treatments (2026-11-01)

- **Component:** Input documentation page / inert States gallery
- **Finding:** at 390×844 the 41 family/state records rendered in one text-only column. Error had no field treatment, Success mapped to Default, and Search Typing was also treated as Default; the result differed from Lemon's compact two-column state cards.
- **Correction:** added 41 bounded family-specific mini-controls, two-column mobile and three-column wide layouts, tokenized active/error/success/disabled/loading/read-only/typing visuals, and concise state descriptions. `inputStateKind` now maps Success and Typing correctly. The specimens remain inert and the playground remains the behavior source.
- **Browser evidence:** Lemon/Norato viewport 390×844; Norato grid 343px wide with two 167.5px columns, all 41 cards fit, document 375px. Error red, success green with check, disabled muted, loading spinner, active focus ring, hover/typing brand border. Gallery subtree is aria-hidden/inert.
- **Prevention:** render reference states as bounded specimens and verify visual state mapping, not just the text label or class count.

## ERR-058 — Number decimal steps accumulated binary precision errors (2026-11-01)

- **Component:** Input / Number Input and its playground
- **Finding:** Number's playground fixed `min/max/step` to `0/99/1`, leaving the public range API untestable on the page. The adapter added decimal steps using floating point arithmetic directly, which can produce values such as `0.30000000000000004`.
- **Correction:** expose labeled min/max/step controls and synchronize those values into the generated Vue example. Convert stepping operands to a common decimal BigInt scale, clamp against configured bounds, and fall back safely when the controlled value is not finite.
- **Browser evidence:** with `0/0.3/0.1`, real increment actions emitted `0.1`, `0.2`, `0.3` and disabled at max; ArrowUp/Down worked. With `0.05/0.35/0.1`, sequence and endpoint disabling were verified. Defaults and snippet returned to `0/99/1`; all four sizes passed each of six isolated common states. All 32 tab targets showed a focus ring.
- **Prevention:** exercise configurable numerical props through the actual playground; validate decimal series and endpoint disabling rather than relying on integer-only checks.
- **Remaining:** independent screen-reader review and combined cross-state sequences for the Input family remain open.

## ERR-059 — Time Picker panel stretched to the documentation column (2026-11-01)

- **Component:** Time Picker
- **Finding:** the first live render inherited the full form-column width and showed every column value at once, making the picker panel wider and visually taller than the Lemon composition.
- **Correction:** cap the panel using semantic Time Picker tokens and viewport bounds; show five neighboring values for Columns and keep the full scrollable values only in Wheel. The inert preview now has component-specific bounded geometry and no longer uses the legacy `.sample-time` selectors.
- **Browser evidence:** desktop panel measured 360×397.2px in a 1280×720 viewport; narrow mobile panel also 360px wide, remained inside 499×932, and moved above/below the anchor. Default card measured 136×172px versus Lemon 138×179px; no overflow or stretch.
- **Prevention:** measure the popup itself and its hit targets separately from the containing form column; keep visual specimen and executable panel sizing distinct.

## ERR-060 — Time Picker outside action did not dismiss the open panel (2026-11-01)

- **Component:** Time Picker
- **Finding:** during browser verification, an outside button could receive focus while the picker remained open.
- **Correction:** add focus-leave dismissal to the wrapper while keeping focus transitions within the picker intact; retain capture-phase pointer/click outside checks.
- **Browser evidence:** a real browser click on the outside reset action closed the popup, preserved focus on that action and left the controlled value at `14:30`; Escape closed and restored focus to the trigger.
- **Prevention:** test outside dismissal with an actual pointer and keyboard focus transition, not only Escape or programmatic open/close.

## ERR-061 — File Upload selected state could be confused with transfer completion (2026-11-02)

- **Component:** File Upload adapters and playground
- **Finding:** a local file selection could be misread as a successful upload.
- **Correction:** distinguish `selected` from consumer-controlled `uploading`, `complete`, and `error`; show progress only when supplied by the host. The playground exposes explicit state transitions without sending a fake request.
- **Prevention:** test selection/transport boundaries independently and verify status copy against the controlled model.
## ERR-062 — File Upload validation had no executable boundary coverage (2026-11-01)

- **Component:** File Upload validator
- **Finding:** type/size/count rules were private to the Vue SFC, and native file injection is unavailable in the current browser automation context. The actual validation decisions could not be verified independently.
- **Correction:** extract a pure typed validator and add Node built-in tests for extension/MIME/wildcard/empty accept, exact size boundary, partial acceptance, all rejection reasons, remaining count, single mode, and invalid numeric limits. Invalid maximum counts now fail closed.
- **Evidence:** `pnpm test:file-upload` passes five tests; Vue typecheck/build and repository gates are run with this change. This does not certify native chooser, real drag/drop or screen-reader behavior.
- **Prevention:** keep validation decision functions independent of UI events and test boundary conditions even when browser file injection is unavailable.

## ERR-063 — Navbar Back mobile variant hid its menu trigger (2026-11-02)

- **Component:** Navbar mobile header
- **Finding:** the Back variant hid the entire top bar at the mobile breakpoint, and the CSS rule that hid its menu trigger also matched any trigger placed in the Back title row. That made the modal mobile drawer unreachable in this variant.
- **Correction:** add a dedicated 48px menu trigger to the Back title row and scope the hide rule to the now-hidden top bar.
- **Evidence:** source selector and DOM path reviewed; the actual narrow viewport interaction remains unverified because the available browser interface did not expose viewport control.
- **Prevention:** check reachability of the mobile menu in each mobile header variant, not only Default.

## ERR-064 — Sidebar legacy specimen was a non-adapter (2026-11-02)

- **Finding:** catalog called Sidebar Adapted while only a hard-coded .sample-sidebar screenshot-like specimen existed; legacy grouped CSS hid its actual geometry contract.
- **Correction:** added a public controlled adapter, separate inert bounded specimen and executable playground; old .sample-sidebar class is no longer rendered.
- **Prevention:** require runtime API evidence before describing a component as reusable.


## ERR-065 — Tabs specimen inherited Segmented styling (2026-11-02)

- **Component:** Tabs inert specimen
- **Finding:** legacy `.sample-tabs` was grouped with `.sample-segment`, giving Tabs a filled pill surface and selected pill inconsistent with its Line/Soft contract.
- **Correction:** remove Tabs from the shared legacy selector group; define a dedicated bounded Line specimen and separate NoratoTabs adapter styles.
- **Evidence:** local rendered preview shows the inert underline specimen; interactive playground uses independent component selectors.
- **Prevention:** audit shared selectors before changing any component visual and keep family-specific specimen CSS isolated.

## ERR-066 — Breadcrumbs legacy specimen did not support long paths (2026-11-02)

- **Component:** Breadcrumbs
- **Finding:** the hard-coded specimen only showed three labels and had no runtime API, collapse, current-page semantics or responsive constraints.
- **Correction:** add an inert bounded specimen, a semantic native Vue adapter with expandable middle links and a controlled playground.
- **Evidence:** Lemon and Norato inspected at 1280×720/390×844; browser confirmed 48px links, 2px keyboard ring, current-page ARIA, expanded/collapsed disclosure, 320px no-page-overflow behavior, and an empty console error list.
- **Prevention:** require catalog maturity to match a public adapter and verify long-path behavior at narrow widths.

## ERR-067 — Pagination specimen was only a static page-number strip (2026-11-02)

- **Component:** Pagination
- **Finding:** the old specimen implied an adapter but had no controlled value, total-page bound, current-page semantics, disabled boundaries or responsive behavior.
- **Correction:** add a controlled adapter with Numbers/Simple modes, bounded page ranges, an inert specimen and an interactive playground.
- **Evidence:** browser review before the final CSS cleanup confirmed page selection and `aria-current`, both boundary-disabled controls, 48px live targets, 2px focus, mobile Simple without document overflow, and Numbers internal scrolling; console errors empty. Lemon desktop/mobile visuals were inspected, but the post-fix compact specimen and RTL chevrons have not been rechecked in browser. Token/catalog/typecheck/build/diff gates pass; independent screen-reader review remains open.
- **Prevention:** verify that pagination reflects actual page-boundary state and does not expose unbounded page lists.

## ERR-068 — Primary component states used blue and some option menus were browser-native (2026-11-02)

- **Component:** cross-component visual states, Date Picker and documentation playground controls
- **Finding:** checked/selected/active component states frequently used blue despite Norato yellow being the primary accent. Date Picker wheel/date-time and numerous playground settings used native `<select>` elements, exposing platform-default option menus.
- **Correction:** changed primary interactive states to Norato yellow with dark foregrounds while preserving blue link/information/status semantics; replaced Date Picker and playground option menus with Norato custom dropdowns.
- **Evidence:** source audit now finds no `<select>` or `<option>` markup under `packages/vue/src` or `apps/vue/src`. Runtime build and visual/keyboard browser checks are pending.
- **Prevention:** include semantic color-role and native-option scans in component review; test portal option selection does not dismiss its owning Date Picker.
- **Verification update:** Lemon's Date Picker reference and the live Norato page were reviewed separately; a same-viewport comparison remains open. At the available 429px Norato browser width the document measured 414px with no page overflow. Live Pagination selection computed to `rgb(253, 193, 1)` with dark text. Date Picker selected day computed to the same yellow with dark text. Custom playground dropdown opened with ArrowDown, navigated and selected with Enter. Wheel year changed to 1406 and remained open; date-time hour changed to 15 (15:30) and remained open; Escape closed only the option menu and returned focus to its trigger. No browser-native select exists in the DOM; browser console error list was empty. Independent screen-reader review and full state matrix remain open.

## ERR-069 — Range thumb shifted from focus ring in RTL (2026-11-02)

- **Component:** Range / Slider Thumb
- **Finding:** the visual pseudo-element used inset: 50%, setting both physical sides; in RTL this over-constrained placement and shifted the knob away from its center. The 2px focus outline was drawn around the full 48px target, making a detached oversized circle.
- **Correction:** use explicit top/left physical centering with right/bottom auto; retain the 48px target and draw dark outline/yellow halo on the visible knob.
- **Evidence:** local browser screenshot after correction shows centered knob and focus ring; computed target is 48×48px, :focus-visible=true, pseudo focus outline 2px with 4px offset and yellow 2px halo. ArrowLeft/ArrowRight changed the value 60→61→60; RTL remains intact.
- **Prevention:** in RTL CSS, avoid setting both physical insets on absolutely positioned visual pseudos; validate visible geometry separately from the interactive target.

## Breadcrumb chevron direction correction — 2026-11-02

- The user screenshot reports the displayed RTL breadcrumb arrows face the wrong direction and asks to reverse them.
- Cause: U+2039 `‹` is bidi-mirrored by the browser inside RTL navigation, so it displayed right-facing despite a left-chevron code point.
- Replace the runtime and inert specimen chevron with explicit SVG path geometry pointing left; replace the specimen's Unicode house with the package's consistent SVG house. Do not apply a global transform.
- [x] Browser rerender shows left-pointing SVG chevrons in both runtime and top specimen; technical gates passed.

# Input fields rendered as capsules — 2026-11-02

- User reports all Input fields appear capsule-shaped.
- Browser comparison: Lemon's actual `#input` field is 324×41px with a 12px radius. Local Norato's eight subtype specimens and state samples used `--norato-radius-control` (25px); the shared live field shell already used `--norato-radius-card` (12px), but OTP cells still used 25px.
- Correct only the Input gallery/playground field selectors and OTP cells to `--norato-radius-card`; preserve other component radii and input behavior.
- [x] Local browser confirms all eight family specimens, 41 state field shells, six gallery OTP cells, 20 state OTP cells, six live OTP cells, and four playground controls compute to 12px. RTL remains set and the 1280px page has no horizontal overflow. Token/catalog checks, Vue TypeScript/build and diff check pass; build emits an 813.05KB JavaScript chunk advisory. Commit `28c12ce` is pushed to `origin/master`.
- [ ] Mobile viewport and interactive focus/invalid/disabled/loading combinations were not re-exercised in this radius-only request.

## Range fill boundary and thumb state — 2026-11-02

- The user screenshot reports an apparent offset between the Range fill and thumb.
- Cause: legacy thumb `::before` painted a second yellow track segment across half of the 48px target; duplicate unconditional `::after` styles also made enabled thumbs gray.
- Remove the stale pseudo-track and consolidate the Range CSS into one rule per part/state. Use Reka's fill only and constrain disabled colors to disabled state.
- [x] Browser at 380px and 1920px: values 0/52/100 keep fill edge aligned with the visible thumb center; targets are 48×48px; RTL focus, disabled colors, two-thumb fill and clicks at both visible rail endpoints map to 0/100. Token/catalog checks, TypeScript, production build, and diff check pass; build reports an 812.63KB JavaScript chunk advisory.

## Switch playground knob flush to track — 2026-11-02

- The user reports playground toggles whose checked knob touches the track edge; they request the specimen's inset, white knob, and no knob stroke.
- Cause: shared playground used a 36×20 track and 12px knob but translated 20px in checked RTL state, although available travel after 4px padding was 16px. Runtime/gallery knobs also retained a dark fill and elevation shadow from the older approved contract.
- Correction: use the shared 40×24 medium Switch track and 16px knob, place both states with the same 4px logical inset as the live adapter, remove the dark checked fill and knob shadow/stroke across runtime/gallery/playground.
- [x] Local browser confirms shared checked and unchecked toggles plus the static Switch matrix use white 16px knobs with no border or shadow; medium track is 40×24px and the nearest physical edge gap is 5px in RTL. Space toggles the shared control; the focus ring remains on the track.
- [x] Token check, 49-route catalog check, Vue typecheck/build and `git diff --check` pass; production JS chunk advisory is 812.79KB.
- [ ] Narrow viewport overflow remains unverified in this browser session.

## Input capsule radius correction — 2026-11-02

## ERR-070 — Input focus used a blue outline and neutral stroke was too dark (2026-11-02)

- **Observed:** Input controls used `border-strong` for their idle stroke and a blue contrast outline plus yellow glow for keyboard focus. OTP cells and static Input specimens duplicated that treatment.
- **Cause:** Legacy Input selectors referenced stronger neutral and contrast-focus tokens despite the accepted yellow Norato accent.
- **Correction (2026-11-02 follow-up):** The page-wide visual shell had two stroke layers: the original shell border plus the 36px pseudo-element stroke. Removed the shell border so the capsule has one visible stroke; hover and keyboard focus use the 1px brand-yellow stroke. Default remains `#e8e8e8`; semantic error/success colors remain at rest.
- **Scope:** Input family only; no shared control or unrelated component selectors changed.

- **علت:** تصویر جدید کاربر، فیلدهای متنی کشیده با انتهای کپسولی را نشان می‌دهد و صراحتاً برداشت قبلیِ شعاع ۱۲px را اصلاح می‌کند.
- **اصلاح:** شعاع `--norato-radius-pill` برای پوستهٔ اجرایی، OTP، گالری هشت زیرنوع و ۴۱ حالت اعمال شد؛ selector جدید یا override موقت اضافه نشد.
- **پیشگیری:** آخرین تصویر و دستور صریح کاربر بر مقایسهٔ قبلی Lemon اولویت دارد؛ قرارداد Input و Figma باید همان قاعده را منعکس کنند.

## ERR-071 — Switch track neutral/checked contrast did not match the requested states (2026-11-02)

- **Observed:** Checked Switch track retained a gray `border-strong` stroke; unchecked track used near-white glass fill, so it appeared white.
- **Correction:** Checked track now uses yellow for both fill and border. Unchecked track uses the semantic muted surface (`#f2f2f2`) with its subtle default border. Runtime and shared playground toggles follow the same contract.
- **Scope:** Switch track only; knob geometry, 48px target and keyboard focus indicator are unchanged.

## ERR-072 — Button specimen inherited a plain glass surface (2026-11-02)

- **Observed:** The inert Button preview used the generic plain glass background, unlike the requested dotted glass specimen with warm/cool corner washes.
- **Correction:** Added a Button-only dotted background using shared dot-grid and semantic warning/info surface tokens. Existing three-button content and playground are unchanged.
- **Scope:** Top Button specimen only.

## ERR-073 — Button specimen frame and sample controls were oversized/mismatched (2026-11-02)

- **Observed:** Button specimen had a short frame and legacy fixed 60px controls, plus an extra Cancel sample, unlike the requested Split Button reference geometry.
- **Correction:** Reuse the Split Button preview frame tokens (288px height, 24px radius, shared responsive width), remove fixed control dimensions and Cancel specimen. Keep only Primary and Secondary at the intrinsic Large height of 48px.
- **Verified:** Live same-browser render at 1280px measured Button and Split Button frames identically (583.98×288px); both Button controls are 48px high. RTL holds with no document overflow.
- **Limitation:** 390px mobile viewport comparison could not be run because this session's browser automation does not expose viewport resizing.

## ERR-074 — Input email specimen icon, copy and sizing differed from latest reference (2026-11-02)

- **Observed:** The email envelope sat inside the control; the sample used the English `name@example.com` placeholder; shell displayed at 48px or more; placeholder typography/color did not match the approved Input rule.
- **Correction:** Added a conditional label slot passthrough and moved the decorative icon into the associated Email label. Placeholder is Persian and now uses Vazirmatn 12px/300 with semantic subtle placeholder token `#a1a1a1`. The inert specimen alone uses a 36px visual shell; the live playground/runtime preserve their 48px minimum target. Removed the obsolete global sample-icon selector.
- **Verified:** Browser computes specimen shell to 36px, label to Estedad 12px/700, placeholder to Vazirmatn 12px/300 `rgb(161,161,161)`, with label `for` matching input id. Live playground input remains 48px; RTL and document width are intact.

## ERR-075 — Input field heights and placeholder direction varied across component pages (2026-11-02)

- **Observed:** Input page gallery fields differed from the top 36px sample; live fields retained larger surfaces, LTR phone inputs caused their placeholders to stay LTR, and generic `NoratoField` in the all-components lab remained a 48px, 12px-radius box.
- **Cause:** The 36px rule was local to one component-page presentation, while live adapters inherited size-specific minimums and generic `NoratoField` used a separate native input class.
- **Correction:** Shared component-page styles render a centered 36px capsule inside minimum 48px targets for Input adapters and generic `NoratoField`. Titles use Estedad Bold; placeholders use RTL while entered phone/amount values remain LTR. Top Email helper line stays removed; Textarea retains multiline height.
- **Verified:** Actual local browser: static variant/state shells 36px; live capsule is 36px inside a 52px Medium wrapper, input hit target 48px; OTP target 48px with 36px face; Textarea remains 108px; generic `NoratoField` target 48px with centered 36px capsule; top Email shell 36px with no helper. No document horizontal overflow.

## ERR-084 — Input hover displayed a second gray wrapper stroke (2026-11-07, updated 2026-11-08)

- **Observed:** Hovering an Input showed a gray line around the intended capsule stroke, despite the capsule pseudo-element using the yellow hover token.
- **Cause:** The package stylesheet's more-specific native wrapper hover selector restored its own border after the page-level base rule set `border: 0`.
- **Correction:** Scoped the documentation app wrapper reset and capsule hover rule to the app root, then explicitly kept that wrapper border transparent on enabled, valid hover. Also changed the published Vue component stylesheet hover token from neutral gray to Norato yellow so standalone consumers receive the same single-stroke behavior. The visible capsule remains 1px.
- **Scope:** Input shell hover only; status colors, focus behavior, OTP and other component styles are unchanged.
- **Verified (2026-11-07 follow-up):** Hovered the live Password Input without focus in the local browser. The wrapper border is 0px and the sole capsule stroke computes to `1px solid rgb(253, 193, 1)`; screenshot shows no second gray outline. The short neutral bars directly below the field are the password-strength meter.

## ERR-085 — Date Picker family ledger contradicted implemented runtime evidence (2026-11-07)

- **Observed:** The feature specification, Vue export, catalog and existing browser log described a seven-mode Implemented Date Picker, while the family ledger still labeled it Proposed with visual and behavior comparison pending.
- **Correction:** Rechecked the live Lemon reference and Norato at 1280×720 and 390×844; exercised all seven modes, range ordering/preset, time/month/year/wheel updates, keyboard and state semantics. Reconciled the family ledger and feature checklist with the current browser and technical evidence.
- **Verified:** Current adapter remains exported and controlled; frames are 628×300 vs 584×302px desktop and 327×300 vs 320×288px mobile; mobile document stays 375px wide. Independent screen-reader software was not run.

## ERR-086 — Time Picker inert selected cells retained the superseded blue accent (2026-11-07)

- **Observed:** The live Time Picker adapter already used Norato yellow with dark text for selected options, while the static top specimen still used blue and its contract documented the stale token.
- **Cause:** The inert specimen's original selector and the token list were not updated when the active Norato accent rule changed to yellow.
- **Correction:** Updated that existing specimen selector to `--norato-color-brand-yellow` and `--norato-color-text-primary`; aligned the contract, Figma rule, DoD and task ledger. No runtime interaction styles or API were changed.
- **Verified:** Desktop 1280×720 static/runtime selected cells compute to `rgb(253, 193, 1)` with dark `rgb(26, 26, 26)` text. At 499×932 the Norato frame is 452×288px vs Lemon 436×300px; document width remains 484px without overflow. Independent screen-reader review remains open.

## ERR-087 — File Upload preview branch was shadowed and action icon used blue glyph (2026-11-07)

- **Observed:** The top preview rendered flat text because an earlier `v-else-if` branch shadowed the intended marker and inner dropzone. The live and static upload affordances also used a Unicode arrow on blue surfaces.
- **Correction:** Kept one preview branch with the Default marker and bounded inner dropzone; replaced both upload glyphs with a line SVG, yellow action surface and dark text. The secondary frame wash now uses a neutral semantic surface token.
- **Evidence:** Lemon/Norato matched viewports show bounded composition at desktop 1280×720 and mobile 390×844; mobile document width is 375px, no overflow. Lemon outer frame 636×300px and inner 367×154px; Norato outer 584×288px and inner 380×160px on desktop. Mobile frames are 327×300px / 320×288px and inner dropzones 321×154px / 302×160px. Real browser chooser evidence covers click, Enter/Space, valid PNG, invalid type, over-limit size, count rejection, single replacement, `multiple` mode and native input reset. Native OS drag/drop, independent screen-reader and reduced-motion remain open.
- **Technical gates:** On 2026-11-07 the File Upload validator (5/5), token check, catalog check (49), Vue typecheck/build and diff check pass. Production JS chunk is 817.78KB; Vite's >500KB advisory remains.
- **Prevention:** Keep mutually exclusive component specimen branches unique; compare live rendered geometry and all primary action accents to the current Norato contract before closing the visual DoD.

## ERR-089 — Navbar specimen and responsive details diverged from Lemon (2026-11-08)

- **Observed:** The static CTA/brand used blue, the preview wash read cool, and the static row was 72px tall and wrapped its action on narrow mobile. The documentation shell's 320px minimum width also created a horizontal scrollbar when the available viewport width was 305px.
- **Correction:** Applied the approved yellow primary accent and warm/neutral specimen wash; compacted the static row to 50px and widened it, retained three 48px mobile items on one row, removed the app-wide 320px minimum, and exposed Back activation in playground status.
- **Verified:** Matched Lemon/Norato geometry at 1280×720 and 390×844, and no overflow at 320px. Checked all four mobile header types and nine desktop layout/style combinations, keyboard submenu open/Escape focus return, mobile dialog Escape/outside close/focus return, Back activation status and controlled search input.
- **Remaining:** Independent screen-reader testing and broader full focus/current/disabled link matrix remain open; maturity remains Adapted.

## ERR-090 — Radio matrix retained the superseded blue accent (2026-11-08)

- **Observed:** The actual Radio adapter already used Norato yellow for its checked dot and hover border, but the inert 20-cell Variants matrix still showed blue, contradicting the active primary-accent rule and making the same component page inconsistent.
- **Correction:** Updated the existing matrix dot and hover selectors plus Radio contract/Figma rules to use the yellow semantic token. Disabled gray, error red and high-contrast focus treatment remain distinct. No adapter API or runtime behavior changed.
- **Verified:** At 390×844, static checked dot and hover border compute to `rgb(253, 193, 1)`, matching the live adapter dot. Five 343×162.2px cards, 20 cells, 48px targets, 16/20px proportional circles, RTL, inertness and 375px document without overflow. Lemon gallery plus property selector measures 924px versus Norato's 886.9px matrix.
- **Technical gates:** On 2026-11-08 token check, catalog check (49), Vue typecheck/build and `git diff --check` pass. Vite reports an 818.95KB JavaScript chunk above its 500KB advisory threshold.
- **Remaining:** Independent screen-reader review and exhaustive live state/focus cross-product remain open.

## ERR-091 — Input simultaneous states exposed conflicting status semantics (2026-11-08)

- **Observed:** Success and Loading simultaneously exposed both “verified” and “processing” messages. Error plus Success could leave OTP `aria-describedby` pointing to a Success message that was not rendered; shared field controls had the same stale-description possibility.
- **Correction:** Apply Error > Success and Loading > Success across the shared input shell, OTP and Textarea. Preserve Error alongside Loading; align success data/class semantics and description IDs with rendered status messages.
- **Verified:** Live Input playground: Error+Success, Error+Disabled, Error+Loading+Success and Success+Loading → Success. Across all eight adapters status precedence is correct; all 13 value controls disable under Error+Disabled/Loading, busy states are exposed, every description reference resolves, and toggles were restored.
- **Remaining:** Full Text Input state/variant review, independent screen-reader review and visual matching for every Lemon variant remain open; the Input family DoD is not closed.

## ERR-092 — Input hover/status specificity could reveal a duplicate stroke (2026-11-08)

- **Observed:** The visible line is the capsule's own Input Stroke. A package-level native wrapper border could appear as a second line in the documentation app; broad hover styling could also recolor invalid/disabled fields.
- **Correction:** Keep the app wrapper border at zero/transparent; scope the single 1px capsule hover stroke to enabled, valid controls and use Norato yellow. Focus remains yellow; disabled is neutral; invalid keeps its error stroke at rest. OTP follows the same disabled/focus/hover priority.
- **Verified:** Live Password hover with input focus moved to the adjacent visibility action: `:hover=true`, input `:focus-visible=false`, capsule `1px solid rgb(253, 193, 1)`, wrapper `0px`. Error+Disabled Text and OTP retained neutral stroke and visible error message.
- **Remaining:** Full Text Input state/variant matrix and independent screen-reader review remain open; this fix does not close Input DoD.

## ERR-093 — Select top specimen showed a preselected value in Default (2026-11-08)

- **Observed:** At the same 1280×720 viewport, Lemon's inert top Select showed an empty placeholder state, while Norato's specimen displayed Tehran as already selected.
- **Correction:** Remove the specimen-only `model-value` and align its Persian placeholder to Lemon (`به شهر انتخاب کن`). Keep the executable playground's controlled Tehran value unchanged.
- **Verification:** At 1280×720, re-render confirmed the top specimen has no selected-value label, shows the placeholder, retains the 300×48px control/288px frame and Default marker, and the live playground still reads Tehran. RTL document and no horizontal overflow were confirmed. A fresh 390×844 capture was unavailable in the active browser tool; mobile is not claimed as reverified for this correction.

## ERR-094 — Combobox field styling diverged from the approved Input rule (2026-11-08)

- **Observed:** The published Combobox field uses a border around its full 48px interaction row; keyboard focus adds a 2px blue outer outline and yellow halo. Its label/placeholder also do not inherit the newly approved cross-component Input typography contract.
- **Correction planned:** Center a 36px capsule Stroke within the existing 48px hit target; use semantic neutral `#e8e8e8` at rest and one yellow 1px Stroke on hover/focus. Remove only the field's outer outline/halo, keep independent action focus indicators, and align label/placeholder typography and RTL.
- **Verification:** Desktop browser confirms the 48px interaction row contains a 36px visual capsule with a single 1px `#e8e8e8` resting Stroke, Estedad Bold label, RTL Vazirmatn Light 12px placeholder in `#a1a1a1`, and no outer outline/shadow. Keyboard focus opens the menu as before, Escape closes it, and the field Stroke becomes Norato yellow without an extra halo. Token/catalog checks, Vue typecheck/build and `git diff --check` pass (build retains the existing >500kB chunk advisory). Mobile viewport and matched Lemon comparison remain pending.

## ERR-095 — Stepper was only a static specimen (2026-11-08)

- **Observed:** Catalog marked Stepper Proposed; page had only an inert hand-built row, no Vue API or live playground. Its sample CSS had generic geometry and no dotted Button-sized frame.
- **Correction:** Build controlled noninteractive Vue Stepper with four Lemon compositions, three sizes, derived states, accessible ordered list/live status, responsive internal scrolling, adapter export, playground and Button-style preview.
- **Verified:** Matched desktop Lemon/Norato at 1280×720; tested four compositions, controlled progression/live status, LTR ordering and error display in Horizontal/Compact/Dots. Token/catalog/typecheck/build/diff gates pass. Mobile 390/320 comparison, complete keyboard/state matrix and independent screen-reader review remain open.

## ERR-096 — Compact and Dots Stepper hid error explanations (2026-11-08)

- **Observed:** Horizontal and Vertical place the error explanation under its step, but Compact and Dots only colored their progress indicator red; the supplied error text was not visible.
- **Correction:** Add a visible red error summary with the affected step label for Compact and Dots. Keep the detailed step state in the semantic ordered list and the current-step announcement polite.
- **Verified:** Local Dots playground with Address as current/error displays the red marker, step label and error text; the named ordered list marks Address as the error step and the live status announces “مرحلهٔ ۲ از ۴” with its explanation.
- **Remaining:** Mobile overflow/comparison and independent screen-reader review remain open.

## ERR-097 — Stepper Dots ignored the selected indicator size (2026-11-08)

- **Observed:** The Dots composition used fixed 8px/12px circles for every Stepper size, while the contract offers Small, Medium and Large.
- **Correction:** Drive upcoming/current outer dot diameters from semantic Norato spacing tokens per size (Small 4/8px, Medium 8/12px, Large 12/16px); `border-box` keeps the current 2px ring inside the selected diameter.
- **Verified:** Live Stepper playground after the CSS update: Dots sizes visibly scale Small/Medium/Large and preserve the current-state yellow ring. Source sizes are border-box outer diameters: 4/8px, 8/12px, 12/16px. Playground was restored to horizontal, medium, RTL, Address, no error.

## ERR-098 — Menu stylesheet source attribute resolved outside the package (2026-11-08)

- **Observed:** The running Vite page raised an import error after the Menu SFC loaded its shared stylesheet through a template `style src` attribute; the resolver treated it as a root-level `D:\menu.css` path.
- **Correction:** Import `../menu.css` from the SFC script so the stylesheet resolves relative to the component module.
- **Verified:** Reopened the actual local Menu route; adapter, specimen and playground rendered without the Vite error overlay.

## ERR-099 — Portaled Menu escaped the inert specimen frame (2026-11-08)

- **Observed:** The first top-of-page specimen used the live Reka portal and rendered at the viewport edge instead of inside its dotted preview card.
- **Correction:** Replace the top specimen with inert markup that shares the adapter's menu/item styles; keep the separately documented playground interactive and portaled.
- **Verified:** The desktop Menu preview shows a centered compact four-action panel in its dotted frame, while the runtime playground remains operable. Remaining responsive/DoD work is tracked in the Menu checklist.

## ERR-100 — Menu pointer hover was hidden when keyboard focus moved elsewhere (2026-11-08)

- **Observed:** While Delete held keyboard focus, the pointer hovered the enabled `انتقال به` submenu row; `:hover` was true but the row background stayed transparent. The keyboard-highlight rule alone did not cover this simultaneous pointer/focus state.
- **Correction:** Add a separate Norato-yellow hover background for enabled menu items and the semantic error-container hover for enabled destructive items; exclude disabled rows and retain the 2px keyboard focus ring only on the focused/highlighted item.
- **Verified:** In the live browser, `انتقال به` remained under the pointer and not focused; computed background became `rgb(255, 248, 224)` with no outline. Hovering disabled Rename kept a transparent background and `aria-disabled=true`; focused Delete retained its 2px yellow outline and pale error background.

## ERR-101 — Command Palette preview shrank to intrinsic content width (2026-11-08)

- **Observed:** The dotted preview frame measured 584×288px, but its visible palette panel shrank to 172.5×240px despite a 448px target width.
- **Cause:** The inner specimen wrapper was a shrink-to-fit block; the frame's one-column grid did not make that child fill the available width.
- **Correction:** Make the specimen wrapper a full-width bounded grid item and center the 448px panel inside it.
- **Verified:** Live 1280×720 render: frame 583.98×288px, inner wrapper 557.98×240px, panel exactly 448×240px.

## ERR-102 — RTL Command Palette dialog was horizontally displaced (2026-11-08)

- **Observed:** In RTL, `inset-inline-start:50%` combined with `translateX(-50%)` moved the dialog outside the viewport.
- **Correction:** Center the bounded fixed dialog with symmetric logical inline insets and automatic inline margins, independent of direction.
- **Verified:** At 1280×720, live dialog measures 600×375px at x=340/y=108 and remains centered.

## ERR-103 — Command Palette search inherited a blue focus outline (2026-11-08)

- **Observed:** The generic documentation rule for `input:focus-visible` overrode the palette search reset, producing a blue outline and duplicate focus halo.
- **Correction:** Raise component-local specificity, remove the generic input outline/halo, and show a single 1px Norato-yellow inset Stroke on the search row.
- **Verified:** Computed search outline is none, search shadow none, parent Stroke is `1px solid rgb(253, 193, 1)` while the input receives initial keyboard focus.

## ERR-104 — Command Palette combobox referenced an absent listbox in loading/empty states (2026-11-08)

- **Observed:** `aria-controls` always referenced a listbox id even when loading or empty states replaced the listbox.
- **Correction:** Set `aria-controls` and `aria-activedescendant` only while results are rendered.
- **Verified:** Loading/empty combobox has no dangling references; the live status state remains exposed.

## ERR-105 — Alert inherited generic specimen styling (2026-11-08)

- **Observed:** The generic `.sample-alert` preview used one hard-coded blue edge and shared layout rules, so its 20 documented combinations could not be represented consistently.
- **Correction:** Removed `.sample-alert` from the generic shared selectors, replaced the page specimen with the semantic `NoratoAlert` adapter, and scoped all Alert presentation to its component stylesheet.
- **Status:** Source correction applied; browser parity and responsive verification remain pending.

## ERR-106 — Alert was hidden when modelValue was omitted (2026-11-08)

- **Observed:** Vue boolean prop casting supplied `false` when `modelValue` was omitted, so the uncontrolled specimen rendered an empty branch.
- **Correction:** Set the Boolean prop default explicitly to `undefined`; the adapter now treats omitted value as locally visible and supports uncontrolled dismissal.
- **Verified:** Live default specimen renders without `modelValue`; controlled playground closes by Space and updates `v-model`; initial focus uses a 2px yellow outline and the close target measures 48×48px.

## ERR-107 — Native Input controls showed dark generic focus outline (2026-11-08)

- **Observed:** The shared focus rule added a dark 2px outline and yellow outer shadow around native fields. This made the input look double-stroked and did not match the requested single yellow field Stroke.
- **Correction:** Limit the focus reset to field-like controls, set their 1px border to Norato yellow on focus, and add yellow hover borders to legacy field/textarea/date/select controls. Preserve focus rings on non-field interactive controls and independent actions.
- **Verified:** Local Input route: focused Password control renders one yellow 1px capsule Stroke; no dark outer outline/shadow. Generic focus treatment remains on buttons and switches.

## ERR-108 — Banner legacy specimen bypassed the shared page composition (2026-11-08)

- **Observed:** Banner was a generic static row with legacy shared CSS, had no live playground or Vue adapter, and did not use the Button-sized dotted specimen frame.
- **Correction:** Replace the specimen with an inert NoratoBanner preview, remove all legacy `.sample-banner` selectors, add an executable controlled playground, complete the nine-section contract, and register the Vue export/catalog entry.
- **Verified:** Technical and browser DoD still in progress; do not treat the component as fully parity-verified until responsive and interaction review is recorded.

## ERR-109 — Input Hover gallery showed a neutral Stroke (2026-11-08)

- **Observed:** inert Input state cards styled `Hover` and `Typing` with the same neutral Stroke, contradicting the approved yellow hover rule and the interactive adapters.
- **Correction:** separated the specimen selectors; Hover uses the Norato yellow token and Typing remains neutral.
- **Verified:** local Input states screenshot shows yellow Text/Phone Hover capsules, neutral Default, and preserved Error/Success/Disabled strokes.

## ERR-110 — Toast adapter existed but was not wired to the package or catalog (2026-11-08)

- **Observed:** ToastPlayground imported `NoratoToast` and its types, but `@norato/vue` did not export them. The catalog marked Toast Proposed and lacked executable usage, so Vue typecheck failed.
- **Correction:** Export Toast component/types, register it as Adapted, add a reviewed usage example, mount its playground in the component detail page and replace its legacy static preview with the package's Button-sized Toast styling.
- **Verified:** Technical gates are pending; browser DoD remains open until matched Lemon comparison and behavior checks are recorded.

## ERR-111 — Toast static specimen was wider/taller than Lemon (2026-11-08)

- **Observed:** The initial Norato specimen filled the entire Button preview frame and included action/timer controls, while Lemon's default example was a compact rich success toast.
- **Correction:** Bound the inert sample to the Toast inline-size token and aligned its anatomy/content with Lemon's default example; kept action and timer in the live variant playground.
- **Verified:** Matched 1270×720 browser captures show approximately 368×70px Norato versus 366×72px Lemon Toast cards in approximately 576×288px frames. Full variant parity remains open.

## ERR-112 — Enabled invalid Input hover was excluded from yellow Stroke (2026-11-08)

- **Observed:** The hover selector excluded `[data-invalid]`, so enabled error-state Inputs could retain a non-yellow border on pointer hover.
- **Correction:** Removed only the invalid-state exclusion while retaining the disabled exclusion; updated the Input component contract to document hover priority and error restoration.
- **Verified:** Local browser previously confirmed a focus-free hover has one yellow 1px capsule Stroke, invalid hover is yellow, resting Stroke is `#e8e8e8`, and the layout wrapper has no border. Disabled hover remains unverified in an interactive screenshot.

## ERR-113 — Tooltip used a legacy static preview with no accessible adapter (2026-11-08)

- **Observed:** The generic Tooltip preview had no Arrow, used a one-off dark selector and did not expose runtime interaction or the 16 Lemon combinations.
- **Correction:** Removed legacy `.sample-tooltip` rules; added a Reka-based adapter, semantic token styles, an inert Button-sized specimen, a separate 16-variant playground, usage/export/catalog and contract.
- **Verified:** Matched 1270×720 frames; keyboard focus opened the tooltip, Escape closed it, and the trigger retained a single yellow focus ring. Responsive collision and full matrix remain open.

## ERR-114 — Global focus halo doubled the Tooltip trigger ring (2026-11-08)

- **Observed:** Initial keyboard focus showed the local yellow outline plus the global shadow halo.
- **Correction:** Reset shadow on the Tooltip trigger's `:focus-visible`, preserving one yellow 2px outline.
- **Verified:** After the reset, the actual keyboard-focused trigger displayed one clear yellow ring in the local browser.

## ERR-115 — Progress specimen used a legacy single-bar preview (2026-11-08)

- **Observed:** The catalog advertised Progress but the Button-style page rendered a legacy fixed-height bar, so the visual sample and executable component contract did not agree.
- **Correction:** Removed `.sample-progress` styling and mounted the new determinate `NoratoProgress` specimen; added the Vue playground and semantic size/status tokens.
- **Verified:** At the local Input/Progress routes, Progress renders as an RTL horizontal bar with a 62% value and yellow fill. Lemon's Progress page confirms right-to-left fill, 4/8/12px linear sizes, and 24/32/40px circular sizes. Desktop-matched screenshots, complete 120-state matrix, 390/320 viewports and independent screen-reader review remain open.

## ERR-116 — Spinner page used a blue legacy arc with no runtime API (2026-11-08)

- **Observed:** The catalog marked Spinner Proposed, the page used a generic static `.sample-spinner`, its arc borrowed Norato brand blue, and no Vue exports or Loader patterns existed.
- **Correction:** Remove the legacy specimen rule; implement decorative Ring/Dots/Norato forms and an accessible Loader wrapper using Norato semantic yellow/subtle/inverse colors, intrinsic token sizes and reduced-motion support. Add a 45-option playground and four Loader modes inside the Button page structure.
- **Verified:** Actual local desktop render now uses the Button-sized dotted frame and a centered 48px Norato-yellow Ring; the API/page/playground exports and status catalog are connected. Mobile, reduced-motion emulation and independent screen-reader checks remain open.

## ERR-117 — Spinner playground inherited its host text color (2026-11-08)

- **Observed:** The generic Button playground preview set its own text color after the package Spinner rule, making `tone="default"` render gray in the executable playground although the inert specimen was yellow.
- **Correction:** Scope the spinner’s explicit color to its semantic `data-tone` so host presentation styles cannot override the requested tone. Use 48px in the inert specimen, matching Lemon’s visible ring while staying within Norato’s documented size choices.
- **Verified:** All 45 interactive type/tone/size combinations computed the expected color and exact square 16/20/24/32/48px box; no combination failed.

## ERR-118 — Progress track shared a row with label and percentage (2026-11-08)

- **Observed:** Matched Lemon review showed the reference places the label and value on a metadata row above a full-width track; Norato had squeezed the track between both texts.
- **Correction:** Rebuilt the Linear template to put label/value in one row and track below, capped the inert specimen at 304px to match Lemon's measured 302.4px inner track, and added an RTL/LTR control to the executable playground.
- **Verified:** The corrected local 1280×720 specimen follows the Lemon row order; all 120 variants pass in RTL and all 120 in LTR for role/name/min/max/current/value text, tone color, track thickness/fill ratio, inline-start edge and fixed circle geometry. 390px and 320px renders have no horizontal document overflow; independent screen-reader review remains open.

## ERR-119 — Input hover stroke was overridden by later status styles (2026-11-08)

- **Observed:** The visible line is the Input capsule Stroke, not a browser focus outline; the input itself has no outline or shadow. Although enabled hover set yellow, the more-specific success-state stroke could override it.
- **Correction:** Kept the generic enabled-hover rule and added a status-scoped enabled-hover rule after invalid/success styles, matching their specificity and winning by cascade order. Disabled neutral stroke retains priority; no second line or outline was added.
- **Historical open verification:** This note was closed by ERR-121, which captured live pointer hover on enabled/error/success and neutral disabled fields.

## ERR-120 — Banner specimen was taller than Lemon's default (2026-11-08)

- **Observed:** Same-viewport desktop review showed Norato's inert Banner at about 58px high because the specimen used both title and description and added vertical padding; Lemon's default was a one-line announcement around 41px high.
- **Correction:** Made the inert sample a single-line announcement and removed unnecessary vertical padding from the Banner, bringing the stripe to about 50px while preserving the 48px minimum action target and responsive content layout.
- **Verified:** At 1265×720 the specimen now follows Lemon's one-line hierarchy. All six desktop tones, mobile Neutral at 390/320, RTL order, Inverse contrast, controlled/uncontrolled dismissal and keyboard activation were reviewed. Five mobile tones and independent screen-reader review remain open.

## ERR-121 — Input hover Stroke stayed gray in the user capture (2026-11-08)

- **Observed:** The supplied Input screenshot showed the capsule Stroke in gray where pointer hover was expected to turn it Norato yellow. The existing page CSS had a wrapper-hover rule, but the capture contradicted the expected interaction.
- **Correction:** Kept the single 1px capsule Stroke and explicitly match hover on the native input as well as its wrapper, after state selectors. No additional outline, ring, or shadow was added.
- **Verified:** On the local live Input playground, hovering the default, error, and success text field left focus elsewhere and kept the hovered Stroke yellow; non-hovered fields retained their respective state colors. Disabled stayed muted with a neutral Stroke when targeted by the pointer.
- **Revalidated:** The live password field was separately hovered in the current local page; computed capsule Stroke was `rgb(253, 193, 1)` at `1px`, while the layout wrapper border was `0px`. Screenshot showed the hovered field yellow and adjacent resting field neutral. No code change was needed; a gray field indicates it was not hovered in that captured state or the browser was showing a stale stylesheet.

## ERR-122 — Badge neutral Dot lacked contrast on the specimen surface (2026-11-08)

- **Observed:** In the first 16-variant browser pass, the Neutral Dot nearly blended into the light-gray playground stage.
- **Correction:** Added semantic `--norato-color-status-neutral` and mapped the Badge Neutral tone to that token with a white foreground; kept the 2px surface ring and semantic Norato palette.
- **Correction follow-up:** Count uses minimum dimensions so a long localized value such as `۹۹+` expands horizontally; Dot stays fixed at its exact token dimensions.
- **Verified:** Neutral Count and Dot were rechecked after the color correction; Small Count at 100→99+ was rechecked after horizontal expansion. All 16 type/size/tone cases were reviewed in RTL; other combinations use the same unaffected tone/size rules. Lemon and Norato were compared at the same 1265×720 viewport; Norato’s preview frame is narrower because its documentation column is narrower (576×288px versus 636×300px). Browser AX reports one button with the computed count/new-item name and hides the visual marker. Keyboard focus, native disabled state and Tab skipping disabled anchor passed.

## ERR-123 — Combobox disabled+invalid state kept the error Stroke (2026-11-08)

- **Observed:** With both `data-disabled` and `data-invalid`, the status rule left a red border on the non-interactive field, contradicting the shared Input disabled-state rule.
- **Correction:** The existing disabled capsule rule now explicitly restores the neutral `--norato-color-border-default` Stroke and muted surface. Enabled error fields keep their error Stroke; disabled hover is excluded from the yellow rule.
- **Verified:** Live browser computed style for disabled+invalid is 1px `rgb(232, 232, 232)`, native input `disabled` is true, and the field has no outline/shadow.

## ERR-124 — Combobox retained a dangling active-descendant ID after close (2026-11-08)

- **Observed:** After ArrowDown then Escape, `aria-expanded` became false but `aria-activedescendant` still named an option removed from the menu DOM.
- **Correction:** On menu close, clear the query and remove the stale active-descendant reference after Vue's next render. Reopening delegates the active option back to Reka.
- **Verified:** Open state references an existing option; Escape removes both the attribute and option target; reopening restores a reference to an existing option. ArrowDown, Enter selection and Escape still work.
- **Remaining:** The narrow local render showed no page overflow at the available 484px view, but exact 390px/320px measurements and an independent screen-reader session were not available; both remain open.

- **Verification update for ERR-119:** The earlier open note about Input hover is superseded by the real-pointer local/production checks recorded in ERR-121 and the Input hover section of `docs/request-validation-checklist.md`.

## ERR-125 — Static Switch matrix kept a gray checked Stroke (2026-11-08)

- **Observed:** Live adapter on-state was yellow with a white, stroke-free knob, but six static matrix cells (checked Default and Focus across three sizes) still used the stronger gray border token. This contradicted the Switch contract and made the gallery differ from the working control.
- **Correction:** Replaced the legacy checked matrix border token with Norato yellow in the existing matrix rule; no additional override or change to knob geometry was added. Error and Disabled states keep their semantic borders.
- **Verified:** All 30 Switch and 6 Switch Field cells were checked in the live DOM; checked Default/Focus are yellow, Hover yellow, Disabled neutral, Error semantic red; every knob is white with 0px border and no shadow. Screenshots reviewed all five Switch state groups at the available 499×932 local viewport. Document width 484px has no horizontal overflow. Exact 390×844 and matched Lemon Variants comparisons and independent screen-reader review remain open.
