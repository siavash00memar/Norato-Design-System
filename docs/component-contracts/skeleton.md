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
- **پالت Skeleton در Norato:** از خاکستری خنثی توکنی استفاده می‌شود؛ رنگ تیرهٔ پیش‌فرض مرجع به پالت Norato منتقل نمی‌شود.

## Sizes

- **ابعاد پایه:** Line برابر 12px، Circle برابر 40×40px، Rectangle برابر 120×80px و Pill برابر 72×32px است.
- **ابعاد قابل تنظیم:** اندازهٔ Line/Rectangle/Pill با `width` و `height` تعیین می‌شود. Circle از `width` به‌عنوان قطر استفاده می‌کند و نسبت ۱:۱ را حفظ می‌کند.
- **محدودیت عرض الگو:** الگوها حداکثر 320px هستند و در عرض والد کوچک می‌شوند؛ هیچ بلوکی نباید عمودی کش بیاید.

## States

- **Pulse:** تغییر نرم شفافیت روی سطح خنثی.
- **Shimmer:** نوار روشن روی سطح خنثی حرکت می‌کند؛ در RTL از چپ به راست، در LTR برعکس.
- **کاهش حرکت:** با `prefers-reduced-motion: reduce` حرکت غیرفعال می‌شود.

## Parts

- **NoratoSkeleton:** یک شکل مستقل.
- **NoratoSkeletonPattern:** یکی از هشت الگوی آماده.
- **ویژگی‌های مشترک:** هر دو `effect`, `label`, `dir` و `id` می‌پذیرند. جهت پیش‌فرض RTL است.
- **ابعاد مستقل:** `NoratoSkeleton` مقادیر اختیاری `width` و `height` می‌پذیرد.

## Usage

### راهنمای کاربرد Norato

- **تناسب با محتوا:** شکل Skeleton را با محتوا و نسبت‌های واقعی هماهنگ کن.
- **یکپارچگی افکت:** برای همهٔ placeholderهای یک ناحیه از یک افکت استفاده کن.
- **محتوای غیرتعاملی:** آن را برای بخش‌های غیرتعاملیِ محتوای از پیش‌معلوم به کار ببر.

### محدودیت‌های کاربرد

- **بدون جایگزینی اقدام:** برای دکمه‌ها و اکشن‌ها Skeleton نمایش نده.
- **بارگذاری طولانی:** اگر بارگذاری بیش از چند ثانیه طول می‌کشد، پیام وضعیت یا راه خروج اضافه کن.
- **زمان نامعلوم:** Spinner را برای زمان/پایان نامعلوم به کار ببر.

## Accessibility

- هر placeholder یک ناحیهٔ نام‌گذاری‌شده با `role="region"` و `aria-busy="true"` است؛ label فارسیِ معنادار بده.
- **محتوای تزئینی:** شکل‌های داخلی `aria-hidden` هستند و روی صفحه‌کلید فوکوس نمی‌گیرند.
- **کاهش حرکت:** افکت تزئینی است و در reduced motion خاموش می‌شود.

## Tokens

- **رنگ و حرکت:** `--norato-color-skeleton-base`، `--norato-color-skeleton-highlight` و `--norato-skeleton-animation-duration`.
- **اندازه و چیدمان:** توکن‌های semantic مربوط به shape/pattern، radius، surface و فاصلهٔ Norato.

## DoD

**معیار تکمیل Skeleton:** ماتریس ۲۴ ترکیب، مقایسهٔ بصری هم‌viewport در دسکتاپ و موبایل، هندسهٔ ثابت، Shimmer در RTL/LTR، reduced motion، برچسب ناحیهٔ busy در درخت دسترس‌پذیری، ابعاد ۳۹۰/۳۲۰، gateهای token/catalog/typecheck/build/diff و مرور مستقل صفحه‌خوان باید تأیید شوند. تا ثبت همهٔ شواهد، DoD بسته نیست.
