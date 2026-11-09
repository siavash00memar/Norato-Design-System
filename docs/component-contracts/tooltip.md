# Tooltip — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**بلوغ:** Adapted؛ بررسی کامل DoD مرورگری ادامه دارد.

## Preview

نمونهٔ Tooltip سادهٔ Dark در بالای trigger آیکنی، داخل کارت نقطه‌ای ۵۷۶×۲۸۸ پیکسلی هم‌سطح Button است و غیرفعال می‌ماند. playground اجرایی زیر بخش Vue از Reka Tooltip استفاده می‌کند.

## Overview

Tooltip نام یا توضیح کوتاهِ یک کنترل را هنگام hover یا focus بیان می‌کند. محتوای ضروری نباید فقط در Tooltip باشد. برای محتوای تعاملی، پنل یا فرم از Popover استفاده کن.

## Anatomy

- **Trigger:** کنترل معنایی متعلق به برنامهٔ میزبان؛ slot آن حفظ می‌شود.
- **Bubble:** متن ساده یا محتوای Rich؛ عرض محدود و ارتفاع ذاتی.
- **Arrow:** هم‌رنگ سطح و متصل به Bubble.

## Variants

- **Surface:** Dark یا Glass.
- **Layout:** Simple یک متن کوتاه؛ Rich شامل عنوان، توضیح و متن همراه غیرتعاملی.
- **Placement:** Top، Bottom، Right، Left؛ Reka هنگام برخورد با لبه viewport جایگاه را flip می‌کند.
- ترکیب‌ها: ۲ × ۲ × ۴ = ۱۶.

## Sizes

محور اندازه‌ای در مرجع تعریف نشده. عرض حداکثر از `--norato-tooltip-max-inline-size` پیروی می‌کند و در عرض‌های کم به viewport محدود می‌شود. Trigger حداقل هدف تعاملی ۴۸×۴۸ دارد؛ Bubble متناسب با متن رشد می‌کند و نباید کشیده یا بریده شود.

## States

- Hidden، Delayed Open، Instant Open پس از hover/focus و Escape/ترک focus یا pointer.
- Disabled؛ trigger میزبان disabled باقی می‌ماند و Tooltip باز نمی‌شود.
- Controlled از `v-model:open` و uncontrolled از `defaultOpen`.
- برای Tooltip انیمیشن ورود/خروج سفارشی اعمال نشده؛ حرکت خودکار ندارد.

## Parts

- `NoratoTooltip`: API عمومی Vue با trigger slot.
- `NoratoTooltipProvider`: پوستهٔ اختیاری برای چند Tooltip هم‌سطح؛ delay پیش‌فرض ۵۰۰ms و skip-delay برابر ۳۰۰ms بین triggerها را به اشتراک می‌گذارد. Tooltip مستقل بدون این wrapper هم کار می‌کند.
- Reka Tooltip Provider: در حالت مستقل به‌صورت خودکار ساخته می‌شود؛ ورود با keyboard focus پشتیبانی می‌شود.
- Trigger: محتوای دلخواه میزبان یا دکمهٔ راهنمای پیش‌فرض.
- Content/Arrow: Portal با collision-aware positioning و ارتباط دسترس‌پذیر description.

## Usage

- Tooltip را برای نام آیکن‌دکمه و توضیح بسیار کوتاه استفاده کن.
- چند Tooltip هم‌سطح را در `NoratoTooltipProvider` قرار بده تا پس از بازشدن یکی، جابه‌جایی به بعدی از بازهٔ skip-delay مشترک استفاده کند.
- برای آیتم‌های Sidebar جمع‌شده، سمت چپ را درخواست بده؛ collision ممکن است سمت را تغییر دهد.
- اطلاعات مهم را در متن صفحه نیز ارائه کن.
- Tooltip ساده را شامل لینک، فرم، دکمه یا کنش focusable نکن. متن همراه در Rich صرفاً توضیحی و تزئینی است؛ کنش واقعی را در trigger/host قرار بده.
- Tooltipهای متعدد را روی هم نچین؛ زمان بازشدن Reka با skip-delay کوتاه تنظیم شده است.

## Accessibility

Tooltip با Reka به trigger توصیف‌شده متصل است؛ hover و keyboard focus آن را باز می‌کنند، Escape می‌بندد. در RTL trigger و متن RTL هستند؛ placement فیزیکی صریح است و CSS Arrow از `data-side` primitive پیروی می‌کند. focus ring بیرونی ۲ پیکسلی زرد روی trigger میزبان باقی می‌ماند؛ adapter حلقهٔ دوم نمی‌سازد. محتوای Tooltip فوکوس‌پذیر نیست.

## Tokens

`--norato-tooltip-max-inline-size`، `--norato-layer-tooltip`، `--norato-color-surface-code`، `--norato-color-text-on-code`، سطح شیشه‌ای و Stroke شیشه‌ای، `--norato-radius-control`، `--norato-elevation-new`، spacing و focus زرد Norato. آبی مرجع طراحی استفاده نشود.

## DoD

در مرورگر با viewport برابر ۱۲۶۵×۷۲۰، ترکیب ۱۶ حالته، RTL، جهت فلش، عدم کشیدگی/برش، focus کیبورد، Escape و نمایش ۳۲۰/۳۹۰ پیکسلی بررسی شد. Rich Top و Rich Right در فضای ناکافی به‌ترتیب به Bottom و Left flip شدند. عرض کارت مرجع حدود ۶۲۸ پیکسل و Norato حدود ۵۷۸ پیکسل است و این اختلاف ثبت شده است. hover تأخیری روی Tooltip مستقل بررسی شده؛ wrapper گروهی و shared provider پیاده‌سازی و در صفحه بارگذاری شده‌اند، اما زمان skip-delay میان دو trigger هنوز با نشانگر واقعی اندازه‌گیری نشده است. بازبینی مستقل صفحه‌خوان نیز باز است؛ DoD کامل نیست.
