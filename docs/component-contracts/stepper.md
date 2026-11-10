# Stepper — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Implemented

## Preview

نمونهٔ بصری و غیرفعال در قاب شیشه‌ای نقطه‌دار با نشان Default در ابتدای صفحه آمده است؛ playground اجرایی کنترل‌شده جدا از آن قرار دارد.

## Overview

Stepper پیشرفت یک جریان مرحله‌ای را نشان می‌دهد؛ چهار نمایش افقی، عمودی، فشرده و نقطه‌ای دارد. مراحل مقصد ناوبری نیستند و فقط وضعیت را نمایش می‌دهند. برنامهٔ میزبان مقدار `modelValue` را پس از تکمیل اعتبارسنجی تغییر می‌دهد.

## Anatomy

- **Step Indicator** — دایره‌ی شماره یا تیک
- **Connector** — خط بین مراحل
- **Title** — اسم مرحله
- **Description** — توضیح اختیاری در حالت عمودی

## Variants

- **Stepper (4 variant):** Type: Horizontal، Vertical، Compact، Dots؛ Size: Small، Medium، Large؛ اندازهٔ dots هم با Size هماهنگ می‌شود.
- **Step (8 variant):** Orientation: Horizontal، Vertical؛ State: Upcoming، Current، Completed، Error
- **Step Indicator (12 variant):** State: Upcoming، Current، Completed، Error؛ Size: Small، Medium، Large

## Sizes

- **Step Indicator:** Small، Medium، Large

## States

- **Step:** Upcoming، Current، Completed، Error
- **Step Indicator:** Upcoming، Current، Completed، Error

## Parts

- **Stepper — 4 variant:** کل مراحل. ابعاد/حالت‌ها: Type: Horizontal، Vertical، Compact، Dots
- **Step — 8 variant:** یه مرحله. ابعاد/حالت‌ها: Orientation: Horizontal، Vertical؛ State: Upcoming، Current، Completed، Error
- **Step Indicator — 12 variant:** دایره‌ی شماره‌ی مرحله. ابعاد/حالت‌ها: State: Upcoming، Current، Completed، Error؛ Size: Small، Medium، Large

## Usage

### راهنمای کاربرد Norato

- تعداد مراحل رو بین ۳ تا ۶ نگه دار.
- اسم مراحل رو کوتاه و قابل فهم بنویس.

### API اجرایی

- `id` شناسهٔ یکتای نمونه، `steps: NoratoStep[]` دادهٔ مرتب مراحل و `modelValue` شناسهٔ مرحلهٔ جاری است.
- هر `NoratoStep` دارای `id` یکتا، `label` کوتاه و `description` اختیاری است. شناسهٔ خالی و موارد تکراری render نمی‌شوند؛ اگر مرحلهٔ جاری نامعتبر باشد، اولین مرحله نمایشی جاری می‌شود.
- `variant` یکی از `horizontal | vertical | compact | dots`، `size` یکی از `small | medium | large` و `dir` یکی از `rtl | ltr` است.
- `errorStep` شناسهٔ مرحلهٔ خطادار و `errorText` شرح لازم برای فهم خطاست. اگر متن نیاید، توضیح عمومی فارسی ارائه می‌شود. در Horizontal/Vertical توضیح زیر همان مرحله است؛ در Compact/Dots یک خلاصهٔ خطا با نشان قرمز زیر نمایشگر می‌آید.
- adapter رویداد تغییر مقدار صادر نمی‌کند و مرحله‌ها دکمه/لینک نیستند؛ اعتبارسنجی و تغییر مرحله بر عهدهٔ برنامهٔ میزبان است.

### محدودیت‌های کاربرد

- برای ناوبری آزاد بین بخش‌ها Stepper نذار.
- مرحله‌ی خطادار رو بدون توضیح نذار.

### جهت RTL

مرحله‌ی اول سمت راسته؛ در حالت عمودی نشانگر سمت راست متن.

## Accessibility

`ol` معنایی نام‌گذاری‌شده تمام مرحله‌ها را نگه می‌دارد و مرحلهٔ جاری `aria-current="step"` دارد. تغییر مقدار کنترل‌شده با status زنده و عبارت «مرحلهٔ N از M» اعلام می‌شود. اجزای بصری preview از درخت دسترس‌پذیری جدا هستند تا اطلاعات تکراری نشود. توضیح خطا در هر چهار نمایش بصری می‌ماند؛ نشانگرها و فهرست معنایی، وضعیت هر مرحله را جداگانه اعلام می‌کنند.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

کنترل‌های playground ارتفاع دیداری ۳۶px دارند و ناحیهٔ کلیک نامرئی آن‌ها تا هدف ۴۸px گسترش می‌یابد. Focus صفحه‌کلید حلقهٔ زرد Norato و لبهٔ کنتراست کهربایی دارد.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-yellow`، `--norato-color-border-default`، `--norato-color-text-secondary`، `--norato-color-status-error`، `--norato-stepper-dot-size`، `--norato-stepper-dot-current-size`، `--norato-stepper-preview-frame-inline-size`، `--norato-stepper-preview-frame-mobile-inline-size`، `--norato-stepper-preview-frame-block-size`، `--norato-stepper-preview-radius`، `--norato-stepper-preview-content-inline-size` و توکن‌های فاصله، تایپوگرافی و شعاع.
