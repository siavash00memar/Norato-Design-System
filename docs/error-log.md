# Norato Error Log

این سند خطاها و تصمیم‌های اصلاحی تکرارشونده را ثبت می‌کند تا دوباره ایجاد نشوند.

## ERR-001 — باقی‌ماندن CSS قدیمی روی کامپوننت

- **کامپوننت:** Radio Button و Checkbox
- **نشانه:** بعد از جایگزینی با SVG، border، background، box-shadow یا pseudo-elementهای CSS قبلی همچنان روی SVG اعمال می‌شدند.
- **علت:** استایل جدید بدون audit کردن selectorهای قبلی به انتهای فایل اضافه شده بود.
- **قاعده‌ی پیشگیری:** قبل از هر تغییر visual در یک کامپوننت، تمام selectorهای قبلی همان کامپوننت با `rg` شناسایی شوند؛ سپس یا حذف شوند یا با یک override واحد و مستند خنثی شوند. از زنجیره‌ای‌کردن overrideهای موقت خودداری شود.
- **اعتبارسنجی اجباری:** حالت‌های unchecked، checked و indeterminate با رندر واقعی مرورگر بررسی شوند و اطمینان حاصل شود فقط asset نهایی فعال است.

## ثبت تغییرات

هر خطای جدید باید همراه با علت، راه اصلاح و قاعده‌ی جلوگیری از تکرار در همین فایل ثبت شود.

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

## 2026-11-01 — Segmented Control implementation

- Lemon's segmented page documents 2–4 related views, two selected styles, four sizes, 24 group variants and 64 item combinations. Norato's global 48px target conflicts with Lemon Small/Medium 32/40px silhouettes; keep those hit areas 48px and vary text and horizontal spacing.
- Reka ToggleGroup is installed and exports `ToggleGroupRoot`/`ToggleGroupItem`; the public API supports controlled single selection, RTL, roving focus and pressed button semantics. Selection-empty updates are ignored to keep one view active.
- Added the controlled adapter, live playground and a single inert preview. Full browser DoD and technical gate results are pending.
- Render defect: the already-running Vite process retained a stale `import.meta.glob` list after the contract file was deleted/recreated during editing, so Segmented rendered only Preview/Usage-in-Vue and omitted the nine contract sections. A fresh Vite process included `segmented.md`; all nine headings and on-page anchors then rendered. Root cause is stale dev-server glob state, not a contract-path mismatch.
- Visual correction from equal-viewport Lemon comparison: selected preview now matches Lemon's first/right option; Norato dotted glass uses semantic yellow/blue gradients; desktop frame is 632×288px vs Lemon about 630px wide, mobile frame is 320×288px. The live group is 260px wide and all options keep 48px targets (XLarge 56px).
- Browser DoD follow-up: 24 group combinations (2 styles × 4 sizes × 3 item counts) passed RTL-order, minimum-target and text-overflow checks. Arrow navigation, Space/Enter, Home/End, non-empty controlled selection, focus ring, pointer hover, item/group disabled, pressed semantics and accessible group name were verified. Remaining independent screen-reader review and the full 64 item state/style/size cross product were not completed in this Git delivery.
- Fresh Vite route displays Preview + implementation playground + all nine contract sections, with no horizontal overflow at 1280px; the 390px mobile render remains 375px document width with no overflow.
