# Norato Request Validation Checklist

این چک‌لیست برای هر درخواست، تغییر کامپوننت یا اصلاح طراحی باید تکمیل شود.

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
  - [x] token check، TypeScript و Next production build پاس شدند.
- موارد باقی‌مانده: بررسی تصویری تعاملی داخل مرورگر هنوز توسط ابزار خودکار این نشست قابل ثبت نیست و باید در preview لوکال دیده شود.
- وضعیت نهایی: `BLOCKED` تا تأیید رندر واقعی؛ preview: `http://localhost:3000/#components`

## گزارش این درخواست — Tree View حالت بسته Figma `8822:10129`

- درخواست: اضافه‌کردن حالت بسته‌ی Tree View بر اساس نود Figma.
- موارد پاس‌شده:
  - [x] Parent در شروع بسته است و با کلیک باز می‌شود.
  - [x] ردیف ۳۰۰×۳۶، زمینه `#F5F5F5`، radius `12px` و متن ۱۲px ثبت و اعمال شد.
  - [x] فلش دقیق Figma در `public/icons/tree-arrow.svg` با فریم ۲۴×۲۴ استفاده شد.
  - [x] Checkbox canonical نوراتو حفظ شد.
  - [x] TypeScript، token check و Next build پاس شدند.
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
## گزارش این درخواست — فاصله‌ی Childهای Tree View

- درخواست نهایی: فاصله‌ی عمودی بین Childهای هم‌سطح `0px` باشد.
- [x] فقط container Childهای مستقیم Parent از `gap: 0` استفاده می‌کند.
- [x] فاصله‌ی Leafهای داخل Child تغییر نکرده است.
- [x] قرارداد در spec، قوانین Figma، taskها و error log ثبت شد.
- [x] اعتبارسنجی فنی: بررسی توکن‌ها و TypeScript/build اجرا می‌شود.
- وضعیت دیداری: نیازمند تأیید در پیش‌نمایش محلی.
