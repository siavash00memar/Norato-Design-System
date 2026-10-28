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
