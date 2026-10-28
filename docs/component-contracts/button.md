# Button — قرارداد کامپوننت نوراتو

**حوزه:** Actions  
**وضعیت نوراتو:** Implemented

## Preview

نمونهٔ ابتدای صفحه فقط ظاهر را نشان می‌دهد و غیرفعال است. وضعیت بلوغ adapter در سربرگ صفحه مشخص شده است.

## Overview

Button برای اجرای یک اقدام روشن و مشخص است. در رابط نوراتو، `Primary` با زمینهٔ زرد، متن تیره، فونت `Estedad Bold` و فرم کپسولی نمایش داده می‌شود. `Secondary` زمینهٔ روشن و دورخط زرد ۲ پیکسلی دارد. نوع‌های `Inverse` و `Destructive` هم در adapter اجرایی پشتیبانی می‌شوند.

API فعلی Vue برچسب `label`، نوع‌های `primary`، `secondary`، `inverse` و `destructive`، نوع دکمه (`type`) و وضعیت‌های `disabled`، `loading` و `pressed` را دارد. `pressed` فقط `aria-pressed` را تعیین می‌کند؛ اندازه و جایگاه آیکن هنوز ورودی API نیستند.

propهای قدیمی `iconOnly` و `accessibleLabel` در کد وجود دارند، اما بدون محتوای آیکن، Icon Button کامل نمی‌سازند و برای استفادهٔ تازه توصیه نمی‌شوند.

نمونهٔ بالای صفحه `Primary` و `Secondary` اجرایی را کنار یک نمونهٔ صرفاً بصریِ «انصراف» نشان می‌دهد. نمونهٔ «انصراف» API یا variant جداگانه‌ای نیست.

## Anatomy

- **بدنه (`Container`):** پوستهٔ بیرونی که سطح، نوع، حالت و شکل کنترل را نگه می‌دارد و اجزای دیگر را دربرمی‌گیرد.
- **آیکن آغازین (`Leading Icon`):** در چیدمان RTL سمت راست برچسب قرار می‌گیرد؛ در API فعلی پشتیبانی نمی‌شود.
- **برچسب (`Label`):** کوتاه و ترجیحاً با فعل نوشته می‌شود؛ مثل «ذخیره».
- **آیکن پایانی (`Trailing Icon`):** پس از برچسب می‌آید؛ در API فعلی پشتیبانی نمی‌شود.

## Variants

### Button

- این خانواده ۱۶۸ ترکیب قراردادی دارد: ۷ نوع، ۴ اندازه و ۶ حالت.
- نوع‌ها: `Primary`، `Secondary`، `Tertiary`، `Danger`، `Dashed`، `Text` و `Link`.
- اندازه‌ها: `Small`، `Medium`، `Large` و `XLarge`.
- حالت‌ها: `Default`، `Hover`، `Pressed`، `Loading`، `Disabled` و `Focus`.
- از این هفت نوع، فقط `primary`، `secondary` و `destructive` در Vue اجرایی‌اند؛ `inverse` یک ظاهر اجراییِ اضافی خارج از هفت نوع قرارداد است. سایر نمونه‌ها مرجع بصری‌اند.

### خانواده‌های مرتبط

- `Icon Button`: ۱۶۸ ترکیب؛ ۷ نوع، ۴ اندازه و ۶ حالت. فقط آیکن دارد.
- `Social Button`: ۶۰ ترکیب؛ ۳ سرویس، ۲ سبک، ۲ چیدمان و ۵ حالت.
- `Brand Mark`: سه نشان برای Google، Apple و Facebook.

## Sizes

- Button: `Small` برابر ۳۲px، `Medium` برابر ۴۰px، `Large` برابر ۴۸px و `XLarge` برابر ۵۶px.
- Icon Button نیز همین اندازه‌ها را دارد.
- این اندازه‌ها در قرارداد بصری‌اند؛ adapter Vue فعلی ورودی اندازه ندارد.

## States

- Button و Icon Button: `Default`، `Hover`، `Pressed`، `Loading`، `Disabled` و `Focus`.
- Social Button: `Default`، `Hover`، `Pressed`، `Disabled` و `Focus`.
- نمونه‌های `Loading` و `Disabled` در گالری، وضعیت دیداری را نشان می‌دهند؛ رفتار هر API فقط در صورت پشتیبانی adapter اجرایی است.
- `Hover` با `:hover`، `Focus` با `:focus-visible` و فشردن موقت با `:active` نمایش داده می‌شوند. prop `pressed` وضعیت معنایی `aria-pressed` را برای دکمهٔ toggle تنظیم می‌کند و به‌تنهایی ظاهر فشردهٔ دائمی ایجاد نمی‌کند.

## Parts

- **ریشهٔ Button (`button`):** عنصر بومی تعاملی؛ `type`، `disabled`، فوکوس و هدف حداقل ۴۸px روی آن اعمال می‌شوند.
- **برچسب (`Label`):** متن دیداری الزامی از prop `label`؛ با Estedad Bold و فعل کوتاه نوشته می‌شود.
- **آیکن آغازین (`Leading Icon`):** جایگاه مفهومی سمت راست برچسب در RTL؛ API فعلی slot یا prop آیکن ندارد.
- **آیکن پایانی (`Trailing Icon`):** جایگاه مفهومی پس از برچسب؛ API فعلی slot یا prop آیکن ندارد.
- **نشانگر بارگذاری (`Progress Indicator`):** با `loading` نشان داده می‌شود، برای فناوری کمکی تزئینی است (`aria-hidden`) و ریشه هم‌زمان `aria-busy` و `disabled` می‌گیرد.

## Usage

- در هر ناحیه یک اقدام اصلی را با `Primary` برجسته کنید.
- متن دکمه را با فعل کوتاه و نتیجه‌محور بنویسید؛ مثل «ارسال پیام» یا «ذخیرهٔ تغییرات».
- برای اقدام خطرناک از نوع تأییدشدهٔ `destructive` استفاده کنید.
- در RTL آیکن آغازین سمت راست برچسب است؛ آیکن‌های جهت‌دار باید جهت درست را نشان دهند.
- چند اقدام اصلی هم‌وزن را کنار هم قرار ندهید.

## Accessibility

- همهٔ دکمه‌ها با صفحه‌کلید قابل دسترسی‌اند و هنگام تمرکز، حلقهٔ فوکوس واضح دارند.
- دکمهٔ فقط‌آیکن باید نامی مانند `aria-label` داشته باشد.
- prop فعلی `iconOnly` بدون محتوای آیکن، جایگزین Icon Button مستقل نیست؛ برای کاربرد فقط‌آیکن از آن به‌عنوان الگوی آماده استفاده نکنید.
- حالت غیرفعال یا بارگذاری باید برای فناوری کمکی نیز قابل تشخیص باشد.
- اندازهٔ هدف تعاملی حداقل ۴۸px باقی می‌ماند؛ اندازه‌های بصری کوچک‌تر قرارداد هستند و نباید به target واقعی تعمیم داده شوند.

## Tokens

توکن‌های مورد استفاده: `--norato-color-brand-yellow`، `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-border-medium`، `--norato-font-heading`، `--norato-type-body-bold-weight`، `--norato-radius-pill`، `--norato-color-focus-contrast` و `--norato-color-focus-ring`. شعاع pill برابر ۵۰px است تا در ارتفاع‌های مختلف دو سر Button کاملاً گرد بماند.

### Interactive documentation preview

The Button page includes a live Vue playground for label, supported variants, HTML type, disabled, loading and semantic pressed state. Its controls are keyboard accessible, RTL, at least 48px targets, and use restrained motion with a reduced-motion fallback. The generated code reflects selected options; an ordinary action Button omits aria-pressed until the pressed option is explicitly enabled.

The playground select chevrons are centered and inset within their controls. Its switch labels have no enclosing border or background; the track remains the visual state indicator.

The playground variant and HTML type controls open an in-page listbox below the trigger. The selected option uses a Norato token, arrow keys navigate, Enter or Space select, Escape closes and returns focus, and clicking outside dismisses the menu. This presentation belongs to the documentation playground; it does not change the package's NoratoSelect component.

