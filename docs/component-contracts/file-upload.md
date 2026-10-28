# File Upload — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: آپلود فایل با کشیدن و رها کردن، لیست فایل‌ها با نوار پیشرفت، گالری تصاویر و عکس پروفایل.

## Anatomy

- **Dropzone** — ناحیه‌ی رها کردن با آیکن آپلود
- **Hint** — فرمت و حداکثر حجم مجاز
- **File Item** — ردیف هر فایل
- **Progress** — نوار پیشرفت آپلود
- **Action** — لغو، حذف یا تلاش دوباره

## Variants

- **Dropzone (8 variant):** Size: Large، Compact؛ State: Default، Drag Over، Error، Disabled
- **File Item (6 variant):** Type: Image، Document؛ State: Uploading، Complete، Error
- **Upload Tile (4 variant):** State: Add، Uploading، Complete، Error
- **Avatar Upload (2 variant):** State: Empty، Filled

## Sizes

- **Dropzone:** Large، Compact

## States

- **Dropzone:** Default، Drag Over، Error، Disabled
- **File Item:** Uploading، Complete، Error
- **Upload Tile:** Add، Uploading، Complete، Error
- **Avatar Upload:** Empty، Filled

## Parts

- **Dropzone — 8 variant:** ناحیه‌ی رها کردن فایل. ابعاد/حالت‌ها: Size: Large، Compact؛ State: Default، Drag Over، Error، Disabled
- **File Item — 6 variant:** ردیف فایل با پیشرفت، حذف یا تلاش دوباره. ابعاد/حالت‌ها: Type: Image، Document؛ State: Uploading، Complete، Error
- **Upload Tile — 4 variant:** کاشی مربعی برای گالری. ابعاد/حالت‌ها: State: Add، Uploading، Complete، Error
- **Avatar Upload — 2 variant:** انتخاب عکس پروفایل. ابعاد/حالت‌ها: State: Empty، Filled

## Usage

### راهنمای کاربرد Norato

- فرمت‌ها و حداکثر حجم رو قبل از آپلود بگو.
- پیشرفت آپلود رو با درصد یا نوار نشون بده.

### محدودیت‌های کاربرد

- بعد از خطا فایل رو بی‌صدا حذف نکن؛ دلیل و راه حل رو بگو.
- اسم فایل‌ها رو راست‌چین نکن؛ LTR هستن.

### جهت RTL

اسم و حجم فایل‌ها از چپ به راست نوشته میشن.

## Accessibility

Dropzone باید با کلیک و کیبورد هم فایل‌انتخاب‌کن رو باز کنه، نه فقط با کشیدن.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
