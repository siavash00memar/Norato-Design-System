# Time Picker — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Adapted — adapter اجرایی موجود است؛ ممیزی DoD کامل نشده است.

## Preview

نمونهٔ غیرفعال ابتدای صفحه، پنل دوستونهٔ ساعت/دقیقه را در قاب محدود شیشه‌ای نقطه‌دار و نشانگر Default نشان می‌دهد. سلول انتخاب‌شده با زرد اصلی Norato و متن تیره نمایش داده می‌شود؛ نمونه API یا رفتار اجرایی نیست.

## Overview

`NoratoTimePicker` یک ورودی کنترل‌شده برای انتخاب یک ساعت یا بازهٔ ساعت است. مقدار تکی رشتهٔ `HH:mm` در قالب ۲۴ساعته است؛ مقدار بازه `{ start: string; end?: string }` دارد. پنل پنج حالت `columns`، `columns-12h`، `wheel`، `slots` و `range` را پشتیبانی می‌کند. مقدار مدل همیشه ۲۴ساعته می‌ماند حتی اگر نمایش ۱۲ساعته باشد.

## Anatomy

- **Time Input:** ورودی خواندنی با برچسب و دکمهٔ ساعت.
- **Picker Panel:** پنل محدود و متصل به ورودی؛ با Escape و کلیک بیرون بسته می‌شود.
- **Hour Column:** گزینه‌های ساعت با حرکت صفحه‌کلیدی.
- **Minute Column:** دقیقه‌ها طبق گام تنظیم‌شده؛ پیش‌فرض ۵ دقیقه.
- **Selected Cell:** گزینهٔ انتخاب‌شده با سطح زرد اصلی Norato و متن تیره.
- **Slot / Range:** زمان‌های قابل رزرو یا شروع/پایان مرتب‌شده.

## Variants

- `columns`: ستون ۲۴ساعته و دقیقه.
- `columns-12h`: نمایش ۱۲ساعته با برچسب ق.ظ/ب.ظ و مدل ۲۴ساعته.
- `wheel`: فهرست‌های قابل پیمایش و snap شده برای ساعت/دقیقه.
- `slots`: زمان‌های آمادهٔ رزرو؛ slot غیرفعال قابل انتخاب نیست.
- `range`: انتخاب شروع و سپس پایان؛ مقدار پایان نمی‌تواند پیش از شروع باشد و در صورت عبور، بازه مرتب می‌شود.
- `type="single" | "range"`; `variant="range"` نیز ورودی را به بازه تغییر می‌دهد.

## Sizes

`size`: `small`، `medium`، `large` و `xlarge`. اندازهٔ ظاهری تایپوگرافی با این prop تغییر می‌کند؛ hit target کنترل‌ها کمتر از ۴۸px نمی‌شود.

## States

- Default، باز، فوکوس، خطا، disabled و loading.
- `disabled` و `loading` بازکردن/انتخاب را مسدود می‌کنند.
- `errorText` پیام مرتبط را با `aria-invalid` و `aria-describedby` ارائه می‌کند.
- `required` روی ورودی بومی اعمال می‌شود؛ `helperText` نیز به ورودی متصل است.

## Parts

- **`NoratoTimePicker`:** adapter عمومی Vue 3 با `id`, `label`, `modelValue`, `type`, `variant`, `minuteStep`, `slots`, `size`, `placeholder`, `helperText`, `errorText`, `required`, `disabled`, `loading`, `name` و `dir`.
- رویدادها: `update:modelValue` و `open-change`.
- `minuteStep` باید عدد صحیح مثبت ۱ تا ۶۰ باشد؛ مقدار نامعتبر به گام ۵ برمی‌گردد.
- `slots` آرایهٔ رشتهٔ `HH:mm` یا `{ value, disabled? }` است. زمان نامعتبر حذف و زمان‌ها مرتب می‌شوند.
- نمونهٔ اجرایی، API فعلی را از `@norato/vue` وارد می‌کند؛ برای استفاده به قرارداد همین فایل رجوع شود.

## Usage

### راهنمای کاربرد Norato

- برای ساعت نوبت، `variant="slots"` و زمان‌های موجود را به‌صورت مقدارهای صریح بده.
- برای ساعت دقیقه‌دار، `minuteStep="5"` یا `15` انتخاب مناسبی است.
- مقادیر API را به‌شکل ۲۴ساعتهٔ `HH:mm` نگه دار و منطقهٔ زمانی را در لایهٔ دامنهٔ برنامه مدیریت کن.

### محدودیت‌های کاربرد

- ساعت را راست‌به‌چپ ننویس؛ ورودی و رقم‌ها LTR هستند.
- از چرخ برای ورود دقت ثانیه‌ای استفاده نکن؛ ثانیه در API فعلی پشتیبانی نمی‌شود.
- این کامپوننت منطقهٔ زمانی، دسترس‌پذیری slot در سرور یا اعتبارسنجی رزرو را خودش تعیین نمی‌کند.

## Accessibility

- ورودی دارای label، حالت expanded، ارتباط با پنل، helper/error، required و invalid semantics است.
- پنل dialog نام‌گذاری‌شده دارد؛ گزینه‌ها نام و مقدار قابل خواندن و هدف حداقل ۴۸px دارند.
- ArrowUp/ArrowDown بین گزینه‌های هر ستون حرکت می‌کند؛ Enter/Space انتخاب بومی دکمه را اجرا می‌کند؛ Escape پنل را می‌بندد و فوکوس را به ورودی بازمی‌گرداند.
- ارقام ساعت همیشه LTR هستند؛ جریان و برچسب‌های صفحه RTL باقی می‌مانند.

## Tokens

از `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-yellow`، `--norato-color-focus-contrast`، `--norato-color-focus-ring`، `--norato-control-target-min` و توکن‌های فاصله، مرز، شعاع و لایه استفاده می‌شود. قاب preview از توکن‌های اختصاصی `--norato-time-picker-preview-*` استفاده می‌کند.
