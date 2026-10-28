# Empty State — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت نوراتو:** Adapted  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: وقتی چیزی برای نمایش نیست: داده‌ای نیست، نتیجه‌ای پیدا نشد یا خطایی رخ داده. همیشه بگو قدم بعدی چیه.

## Anatomy

- **Visual** — آیکن یا تصویرسازی
- **Title** — عنوان کوتاه
- **Description** — توضیح و راهنمایی
- **Actions** — اکشن اصلی و فرعی

## Variants

- **Empty State (12 variant):** Layout: Vertical، Horizontal؛ Size: Small، Medium، Large؛ Container: None، Card
- **Empty State Visual (24 variant):** Type: Icon، Illustration؛ Size: Small، Medium، Large؛ Tone: Neutral، Success، Warning، Danger

## Sizes

- **Empty State:** Small، Medium، Large
- **Empty State Visual:** Small، Medium، Large

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Empty State — 12 variant:** حالت خالی با عنوان، توضیح و اکشن. ابعاد/حالت‌ها: Layout: Vertical، Horizontal؛ Size: Small، Medium، Large؛ Container: None، Card
- **Empty State Visual — 24 variant:** تصویر یا آیکن حالت خالی. ابعاد/حالت‌ها: Type: Icon، Illustration؛ Size: Small، Medium، Large؛ Tone: Neutral، Success، Warning، Danger

## Usage

### راهنمای کاربرد Norato

- بگو چرا خالیه و چیکار باید کرد.
- یه اکشن اصلی واضح بذار.

### محدودیت‌های کاربرد

- فقط «داده‌ای وجود ندارد» ننویس.
- تصویر شلوغ یا بزرگ نذار.

### جهت RTL

در چیدمان افقی، تصویر سمت راست میاد.

## Accessibility

تصویر تزئینیه و متن عنوان باید کامل معنی رو برسونه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
