# Rating — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Implemented — DoD مرورگری و gateهای فنی پاس شدند. صفحه‌خوان مستقل در این بررسی اجرا نشد.

## Preview

نمونهٔ فشردهٔ غیرفعال در قاب dotted-glass ابتدای صفحه قرار دارد: Default، چهار ستارهٔ پر، یک ستارهٔ خالی، امتیاز فارسی و تعداد نظر. نمونه از `NoratoRating` می‌آید و داخل قاب inert است؛ تغییر حالت‌ها در playground پایین صفحه انجام می‌شود.

## Overview

قرارداد طراحی Norato: نمایش و ثبت امتیاز با ستاره. نسخه‌ی فقط‌خواندنی، قابل کلیک و خلاصه‌ی امتیازها.

## Anatomy

- **Stars** — ستاره‌های پر، نیمه و خالی
- **Value** — میانگین با ارقام فارسی و «٫»
- **Count** — تعداد نظرها
- **Distribution** — نوارهای توزیع در Summary

## Variants

- **Rating (24 variant):** Size: Small، Medium، Large؛ Value: 0، 1، 2، 3، 3.5، 4، 4.5، 5
- **Rating Input (10 variant):** Size: Medium، Large؛ State: Default، Hover، Selected، Disabled، Focus
- **Rating Star (12 variant):** Fill: Empty، Half، Full؛ Size: 16، 20، 24، 32
- **Rating Summary (1 variant):** Layout: Default

## Sizes

- **Rating:** Small، Medium، Large
- **Rating Input:** Medium، Large
- **Rating Star:** 16، 20، 24، 32

## States

- **Rating Input:** Default، Hover، Selected، Disabled، Focus

## Parts

- **Rating — 24 variant:** امتیاز فقط‌خواندنی با عدد و تعداد نظر. ابعاد/حالت‌ها: Size: Small، Medium، Large؛ Value: 0، 1، 2، 3، 3.5، 4، 4.5، 5
- **Rating Input — 10 variant:** ستاره‌های قابل کلیک با برچسب زیرشون. ابعاد/حالت‌ها: Size: Medium، Large؛ State: Default، Hover، Selected، Disabled، Focus
- **Rating Star — 12 variant:** یه ستاره‌ی تکی. ابعاد/حالت‌ها: Fill: Empty، Half، Full؛ Size: 16، 20، 24، 32
- **Rating Summary — 1 variant:** میانگین، ستاره‌ها و نمودار توزیع ۵ تا ۱. ابعاد/حالت‌ها: Layout: Default

## Usage

### راهنمای کاربرد Norato

- کنار ستاره‌ها عدد میانگین رو هم بنویس.
- در Rating Input، زیر ستاره‌ها معنی امتیاز رو بنویس («خوب بود»).

### محدودیت‌های کاربرد

- ستاره‌ی خالی رو با رنگ خیلی کم‌رنگ نذار که دیده نشه.
- امتیاز بدون تعداد نظر نشون نده؛ ۵ ستاره با ۱ نظر گمراه‌کننده‌ست.

### جهت RTL

ستاره‌ها از راست پر میشن؛ نیم‌ستاره نیمه‌ی راستش پره.

## Accessibility

امتیاز باید به‌صورت متنی هم اعلام بشه («۴٫۵ از ۵»).

`NoratoRating` در Vue 3، `id`، `variant` (`display`، `input` یا `summary`)، `value`، `modelValue`، `count`، `distribution`، `size` و `disabled` را می‌پذیرد و در حالت input رویداد `update:modelValue` را با یکی از اعداد ۱ تا ۵ می‌فرستد. برای مقدارهای فقط‌خواندنی نیم‌ستاره پشتیبانی می‌شود. Input با Reka RadioGroup پیاده شده؛ هر گزینه نام عددی فارسی دارد، نام گروه و helper به‌ترتیب با `aria-labelledby` و `aria-describedby` وصل‌اند، با کلیدهای جهت حرکت می‌کند و هدف ۴۸px دارد. Summary نوارهای ۵ تا ۱ را از شمارش‌ها محاسبه می‌کند و نام و درصد هر نوار را برای فناوری کمکی اعلام می‌کند.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-surface-muted`، `--norato-color-text-primary`، `--norato-color-text-secondary`، `--norato-color-border-strong`، `--norato-color-brand-yellow`، `--norato-color-focus-contrast`، `--norato-color-focus-ring`، `--norato-rating-star-small-size`، `--norato-rating-star-medium-size`، `--norato-rating-star-large-size`، `--norato-rating-star-input-medium-size`، `--norato-rating-star-input-large-size`، `--norato-rating-star-hit-target` و توکن‌های قاب، فاصله و شعاع Rating.
