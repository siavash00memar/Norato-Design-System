# Skeleton — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت نوراتو:** Adapted؛ DoD مرورگری ادامه دارد.

## Preview

نمونهٔ غیرفعال این خانواده در قاب نقطه‌ای هم‌اندازهٔ Button قرار می‌گیرد. الگوی پایهٔ Avatar Text با Pulse، پالت خنثی Norato و جهت RTL نمایش داده می‌شود.

## Overview

Skeleton شکل تقریبی محتوای در حال بارگذاری را نگه می‌دارد تا صفحه هنگام رسیدن داده جابه‌جا نشود. از Spinner برای زمان بارگذاری نامشخص استفاده کن؛ Skeleton برای محتوایی است که شکلش از قبل معلوم است.

## Anatomy

- **Avatar / Shape:** شکل دایره‌ای، خطی، مستطیلی یا کپسولی برای بخش تصویری/محتوایی.
- **Lines:** خطوطی با طول متفاوت برای تقلید از متن واقعی.
- **Block:** سطح مستطیلی برای تصویر، کارت، فیلد یا سلول جدول.

## Variants

- **Skeleton (8 ترکیب):** Shape: Line، Circle، Rectangle، Pill × Effect: Pulse، Shimmer.
- **Skeleton Pattern (16 ترکیب):** Type: Text، Avatar Text، List Item، Card، Card Horizontal، Input، Table Row، Stat × Effect: Pulse، Shimmer.
- Norato از خاکستری خنثی توکنی استفاده می‌کند؛ رنگ تیرهٔ پیش‌فرض Lemon به این پالت منتقل نمی‌شود.

## Sizes

- اندازهٔ پایهٔ Line برابر 12px، Circle برابر 40×40px، Rectangle برابر 120×80px و Pill برابر 72×32px است.
- ابعاد Line/Rectangle/Pill با `width` و `height` قابل تنظیم است. Circle از `width` به‌عنوان قطر استفاده می‌کند و نسبت ۱:۱ را حفظ می‌کند.
- الگوها حداکثر 320px هستند و داخل عرض والد کوچک می‌شوند؛ هیچ بلوکی نباید عمودی کش بیاید.

## States

- **Pulse:** تغییر نرم شفافیت روی سطح خنثی.
- **Shimmer:** نوار روشن روی سطح خنثی حرکت می‌کند؛ در RTL از چپ به راست، در LTR برعکس.
- با `prefers-reduced-motion: reduce` حرکت غیرفعال می‌شود.

## Parts

- **NoratoSkeleton:** یک شکل مستقل.
- **NoratoSkeletonPattern:** یکی از هشت الگوی آماده.
- هر دو `effect`, `label`, `dir` و `id` می‌پذیرند. جهت پیش‌فرض RTL است.
- `NoratoSkeleton` ابعاد اختیاری `width` و `height` دارد.

## Usage

### راهنمای کاربرد Norato

- شکل Skeleton را با محتوا و نسبت‌های واقعی هماهنگ کن.
- برای همهٔ placeholderهای یک ناحیه از یک افکت استفاده کن.
- برای بخش‌های غیرتعاملیِ محتوای از پیش‌معلوم به کار ببر.

### محدودیت‌های کاربرد

- برای دکمه‌ها و اکشن‌ها Skeleton نمایش نده.
- اگر بارگذاری بیش از چند ثانیه طول می‌کشد، پیام وضعیت یا راه خروج اضافه کن.
- Spinner را برای زمان/پایان نامعلوم به کار ببر.

## Accessibility

- هر placeholder یک ناحیهٔ نام‌گذاری‌شده با `role="region"` و `aria-busy="true"` است؛ label فارسیِ معنادار بده.
- شکل‌های داخلی `aria-hidden` هستند و روی صفحه‌کلید فوکوس نمی‌گیرند.
- افکت فقط حرکت تزئینی است و در reduced motion خاموش می‌شود.

## Tokens

`--norato-color-skeleton-base`، `--norato-color-skeleton-highlight`، اندازه‌های semantic مربوط به shape/pattern، `--norato-skeleton-animation-duration`، توکن‌های radius، surface و فاصلهٔ Norato.

## DoD

ماتریس ۲۴ ترکیب، Lemon/Norato در viewport یکسان، هندسهٔ ثابت، RTL/LTR shimmer، reduced motion، busy label/AX، ریسپانسیو ۳۹۰/۳۲۰، token/catalog/typecheck/build/diff و مرور مستقل صفحه‌خوان باید تأیید شوند. تا وقتی مرور مستقل صفحه‌خوان و شواهد کامل تصویری ثبت نشده، DoD بسته نیست.
