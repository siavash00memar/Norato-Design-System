# Card — قرارداد کامپوننت نوراتو

**حوزه:** نمایش داده
**وضعیت:** adapterهای Vue پیاده‌سازی شده‌اند؛ DoD نهایی هنوز باز است.

## Preview

نمونهٔ ابتدای صفحه حالت پیش‌فرض را نشان می‌دهد؛ تنظیم‌ها و رفتارهای اجرایی در playground Vue بررسی می‌شوند.

## Overview

کارت یک قاب مستقل برای گروه‌دادن به محتوای مرتبط است. بستهٔ Vue شش جزء ارائه می‌کند: NoratoCard برای سطح عمومی، NoratoContentCard برای محتوا، NoratoStatCard برای مقدار کلیدی، NoratoProfileCard برای پروفایل، NoratoPricingCard برای پلن، و NoratoSelectableCard برای انتخاب بومی رادیویی یا چک‌باکسی.

## Anatomy

- **Media:** محتوای دیداری در slot رسانه یا کاور
- **Tag/Meta:** دسته‌بندی یا اطلاعات کوتاه پیش از عنوان
- **Title:** عنوان کارت
- **Body:** توضیح با شکست متن طبیعی
- **Footer/Action:** اطلاعات یا اقدام تکمیلی؛ اکشن داخلی فقط در کارت‌هایی قرار گیرد که خودشان لینک سراسری نیستند.

## Variants

- NoratoCard: شیشه‌ای، برجسته، خط‌دار و پرشده؛ as یکی از article/section/div
- NoratoContentCard: عمودی، افقی، روی تصویر و متنی؛ لینک کامل اختیاری و یگانه
- NoratoStatCard: روند افزایشی، کاهشی یا خنثی
- NoratoProfileCard: مرکزی یا کاوردار؛ تصویر آواتار و کاور مستقل‌اند
- NoratoPricingCard: حالت عادی یا ویژه با نشان زرد Norato
- NoratoSelectableCard: کنترل native رادیو یا چک‌باکس، مقدار controlled با v-model

## Sizes

اندازهٔ مستقل برای این خانواده تعریف نشده است؛ ابعاد هر کارت تابع محتوای طبیعی و قاب میزبان است. حداقل هدف تعاملی لینک یا کنترل انتخاب ۴۸px می‌ماند.

- NoratoCard: container عمومی با slot پیش‌فرض.
- NoratoContentCard: props اجباری id و title؛ props اختیاری description، meta، layout، style، href، disabled و dir؛ slots رسانه، tag و footer.
- NoratoStatCard: label، value، trend، trendLabel و dir.
- NoratoProfileCard: name، role، avatarSrc، avatarAlt، coverSrc، layout و dir؛ slots آواتار، کاور و محتوای پایانی.
- NoratoPricingCard: name، price، period، description، featured و dir؛ slots features (فرزندان li) و action.
- NoratoSelectableCard: id، title، description، control، name، modelValue، disabled و dir؛ رویداد update:modelValue.

تمام جهت‌ها پیش‌فرض RTL هستند. هیچ mediaای با ارتفاع اجباری کش نمی‌آید: کارت تصویر عمودی از نسبت 16:9، رسانهٔ کارت افقی از نسبت 1:1 مستقل از قد ستون متن، و نوع Overlay از قاب با حداقل ارتفاع استفاده می‌کند. محتوای متنی و اعداد اجازهٔ شکست و رشد طبیعی دارند.

## States

قاب پایه امکان selected و disabled را دارد. لینک محتوا حالت hover و focus صفحه‌کلید دارد. کارت انتخابی حالت انتخاب، hover، disabled و focus را از input بومی دریافت می‌کند. انتخاب کارت سطح شیشه را روشن‌تر می‌کند؛ حلقهٔ فوکوس زرد ۲px است. برای رادیوهای یک گروه، مقدار name را بین کارت‌ها یکسان بده.

## Parts

## Usage

### راهنمای کاربرد Norato

- هر کارت را دربارهٔ یک موضوع نگه دار.
- کارت‌های هم‌ردیف را با grid میزبان هم‌ارتفاع کن؛ خود کارت محتوای داخلی را نمی‌کشد.
- برای کارت لینک‌دار کل کارت را به یک مقصد وصل کن و اکشن ثانویه را داخل آن قرار نده.
- کنترل بومی radio را در گروه با name مشترک به‌کار ببر؛ مقدار را با v-model نگه دار.
- از سطوح پایه برای قاب‌بندی استفاده کن؛ کارت تو‌در‌تو نساز.

### محدودیت‌های کاربرد

- چند اقدام اصلی را داخل یک کارت لینک‌دار قرار نده.
- اطلاعات حیاتی را فقط با رنگ روند یا انتخاب منتقل نکن؛ متن/نام قابل‌دسترسی فراهم کن.
- ابعاد یا ارتفاع ثابت به تصویر، عنوان و بدنه تحمیل نکن.

## Accessibility

کارت عمومی برچسب معنایی article/section/div دارد و برای لینک‌پذیری، NoratoContentCard یک anchor نام‌دار و یگانه تولید می‌کند. کارت غیرقابل‌استفاده فقط با disabled از لینک خارج می‌شود و aria-disabled دارد. کارت انتخابی از input واقعی radio/checkbox، نام و توضیح متصل، پشتیبانی صفحه‌کلید و focus ring زرد استفاده می‌کند. گرافیک‌های تزئینی را در slot با aria-hidden=true بپوشان و تصویر آواتار معنادار را با avatarAlt نام‌گذاری کن.

## Tokens

رنگ‌های سطح، متن، مرز، هشدار و focus از توکن‌های معنایی Norato می‌آیند. اندازه‌های رسانه، نشانگر انتخاب، آواتار، فاصله، radius و elevation در token package تعریف شده‌اند. رنگ‌های وضعیت روند فقط نشانهٔ مکمل‌اند؛ روند همراه با متن نمایش داده می‌شود.

## DoD

- مقایسهٔ بصری صفحه و قاب با مرجع در viewport یکسان
- بررسی هر شش adapter، چهار سبک سطح، چهار چیدمان محتوا، دو پروفایل و کنترل‌های رادیو/چک‌باکس
- تأیید RTL/LTR، نسبت تصویر، شکست متن و نبود کشیدگی یا overflow در 390px و 320px
- تأیید لینک، selection، keyboard focus، disabled و state announcement در accessibility tree
- گذر توکن، کاتالوگ، TypeScript، production build و git diff --check
- مستقل‌بودن frame بصری و عدم تداخل قواعد CSS قدیمی
- مرور مستقل screen reader در صورت در دسترس‌بودن
