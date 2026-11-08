# Toast — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت:** Adapter در حال تطبیق؛ DoD مرورگری باز است.

## Preview

پیش‌نمایش غیرتعاملی Toast در کارت نقطه‌ای هم‌اندازهٔ Button نمایش داده می‌شود. Playground پایین صفحه مستقل و اجرایی است؛ هیچ پیام پورتال‌شده‌ای در پیش‌نمایش ثابت قرار نمی‌گیرد.

## Overview

پیام کوتاه و موقتی پس از یک اقدام. برای خطاهای مهم یا اطلاعاتی که نیاز به پیگیری دارند از Toast استفاده نکن؛ برای اقدام برگشت‌پذیر می‌توان «بازگردانی» افزود.

## Anatomy

- آیکن وضعیت یا نشانگر بارگذاری در سمت راست
- عنوان Estedad و توضیح اختیاری Vazirmatn
- اقدام اختیاری و کنترل بستن ۴۸ پیکسلی
- نوار زمان زرد، فقط برای پیام زمان‌دار

## Variants

- **Tone:** neutral، success، warning، danger، loading
- **Surface:** dark، glass
- **Layout:** simple، rich (توضیح فقط در rich)
- Loading تا زمان بستن دستی پایدار است؛ ابعاد ثابت و کشیده‌سازی آیکن/متن ممنوع است.

## API اجرایی Vue

`NoratoToast` از Reka Toast استفاده می‌کند و `id` و `title` الزامی دارد. `description`، `tone`، `surface`، `layout`، `actionLabel`، `actionAltText`، `actionCloses`، `dismissible`، `dismissLabel`، `modelValue`، `defaultOpen`، `duration` و `viewportLabel` قابل تنظیم‌اند. مدل می‌تواند controlled یا uncontrolled باشد. رویدادها: `update:modelValue`، `action`، `close`، `pause` و `resume`. پیش‌فرض زمان شش ثانیه است؛ duration صفر پایدار است.

## States

- پیام باز، بسته، hover/focus (توقف زمان توسط primitive)، در حال بارگذاری و زمان‌دار/پایدار
- حداکثر یک پیام در playground؛ صف و stacking در قرارداد فعلی نیست.
- اقدام فقط رویداد می‌فرستد؛ منطق برنامه و بازگردانی بر عهدهٔ مصرف‌کننده است.
- کاهش حرکت، انیمیشن ورود و spinner را محدود می‌کند.

## RTL و دسترس‌پذیری

ترتیب منطقی RTL: آیکن راست، محتوا در میانه، بستن چپ. Reka Toast تنها کانال live announcement را فراهم می‌کند؛ live region تکراری نساز. خطا foreground و دیگر لحن‌ها background هستند. اقدام و بستن هدف ۴۸ پیکسلی و حلقهٔ فوکوس زرد ۲ پیکسلی دارند. برچسب viewport فارسی است.

## Tokens

از توکن‌های معنایی Norato برای سطح dark/glass، متن، وضعیت، فاصله، شعاع، elevation، زمان و focus استفاده شود؛ آبی Lemon وارد پالت نشود و زرد، accent تعاملی بماند.

## DoD

مقایسهٔ Lemon و Norato در اندازهٔ viewport برابر، هر ۲۰ ترکیب، ابعاد specimen، RTL، ۳۹۰ و ۳۲۰ پیکسل، کنترل زمان/اقدام/بستن/صفحه‌کلید، دسترس‌پذیری مستقل و gateهای فنی هنوز تکمیل نشده‌اند. وضعیت این قرارداد تا ثبت شواهد واقعی باز می‌ماند.
## Sizes

سایز مستقل در ماتریس Lemon برای Toast تعریف نشده؛ عرض از `--norato-toast-inline-size` محدود است و در viewport باریک به عرض قابل‌استفاده shrink می‌شود. target اقدام‌ها حداقل ۴۸px است.

## Parts

Icon، Title، Description اختیاری، Action اختیاری، Close اختیاری و Timer زمان‌دار اجزای مستقل هستند.

## Usage

Toast را پس از اقدام موفق/اطلاع کوتاه نمایش بده. برای پیام حیاتی از Alert استفاده کن. stacking و منطق action در اپ میزبان مدیریت می‌شوند.

## Accessibility

از نام/عنوان گویا، نقش اعلان مدیریت‌شده توسط Reka، ترتیب خواندن RTL، هدف ۴۸px برای کنترل‌ها و focus ring زرد ۲px استفاده کن. پیام Loading را تا پایان کار یا بستن دستی نگه دار. بازبینی screen reader مستقل هنوز انجام نشده است.
