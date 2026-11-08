# Progress — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**بلوغ:** Adapted؛ بررسی کامل DoD ادامه دارد.

## Preview

نمونهٔ خطی Default در کارت نقطه‌ای Button، با label، مقدار و ارتفاع Medium نشان داده می‌شود. این پیش‌نمایش inert است؛ playground اجرایی جداگانه است.

## Overview

Progress میزان کار انجام‌شده را زمانی نمایش می‌دهد که کل کار/مدت قابل‌اندازه‌گیری باشد. برای مدت نامعلوم از Spinner استفاده کن.

## Anatomy

- **Track:** مسیر خنثی خطی یا حلقه‌ای
- **Fill:** بخش انجام‌شده با رنگ tone
- **Label:** شرح کار و مقدار درصدی

## Variants

- **Variant:** Linear یا Circular
- **Size:** Small، Medium، Large
- **Tone:** Default، Success، Warning، Danger
- **Value:** 0، 25، 50، 75، 100؛ مقدار اجرایی بین 0 تا 100 پذیرفته و به نزدیک‌ترین عدد صحیح محدود می‌شود.
- مجموع 120 حالت قراردادی.

## Sizes

- Linear: ضخامت 4، 8، 12px.
- Circular: قطر توکنی 24، 32، 40px؛ Small مقدار مرکزی ندارد، Medium و Large مقدار را نشان می‌دهند.
- تمام نوارها و حلقه‌ها هندسهٔ intrinsic دارند و نباید با محتوا stretch شوند.

## States

- Determinate از 0 تا 100؛ صفر مسیر خالی و 100 مسیر کامل.
- Tone Default با yellow برند Norato، Success/Warning/Danger با توکن‌های semantic.
- در این API حالت Indeterminate تعریف نشده؛ کار نامعلوم با Spinner نمایش داده می‌شود.

## Parts

- `NoratoProgress`: API Vue مشترک برای دو variant.
- `ProgressRoot` از Reka نقش progressbar، مقدار current/min/max و متن قابل‌دسترس را فراهم می‌کند.
- Linear `ProgressIndicator` از logical inline-start پر می‌شود.
- Circular SVG از ساعت ۱۲ شروع می‌شود و فقط در Medium/Large درصد را در مرکز می‌گذارد.

## Usage

برای بارگذاری فایل یا تکمیل profile از Progress استفاده کن. نام کار را کنار Linear قرار بده و درصد را در دسترس نگه دار. از Progress برای مدت نامعلوم استفاده نکن؛ bar را از سمت چپ پر نکن.

## Accessibility

هر Progress یک نام قابل دسترس، `role=progressbar`، `aria-valuemin=0`، `aria-valuemax=100`، مقدار current و value text فارسی دارد. Progress غیرتعاملی است و فوکوس نمی‌گیرد. رنگ تنها نشانهٔ مقدار نیست؛ درصد نیز خوانا است.

## Tokens

`--norato-progress-linear-small|medium|large`، `--norato-progress-circle-small|medium|large`، `--norato-progress-circle-stroke-small|medium|large`، رنگ‌های brand-yellow/status-success/status-warning/status-error، surface-muted، radius-pill و spacing/tipography semantic.

## DoD

پیاده‌سازی اولیه و صفحهٔ مستقل ساخته شده است. مقایسهٔ matched Lemon/Norato، ماتریس 120 حالت، رفتار RTL در هر حالت، 390/320 و screen-reader review هنوز باز است؛ وضعیت تا ثبت شواهد بسته نمی‌شود.
