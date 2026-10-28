# Alert — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت نوراتو:** Adapted  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: پیام درون‌صفحه برای اطلاع، موفقیت، هشدار یا خطا. یک‌خطی یا با عنوان، توضیح و اکشن.

## Anatomy

- **Icon** — آیکن وضعیت سمت راست
- **Title** — عنوان کوتاه
- **Description** — توضیح
- **Actions** — دکمه‌های اکشن
- **Close** — دکمه‌ی بستن سمت چپ

## Variants

- **Alert (20 variant):** Style: Soft، Glass؛ Layout: Inline، Expanded؛ Tone: Info، Success، Warning، Danger، Neutral

## Sizes

- در قرارداد فعلی Norato محور اندازه برای این خانواده مشخص نشده است.

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Alert — 20 variant:** پیام در ۵ رنگ و ۲ استایل. ابعاد/حالت‌ها: Style: Soft، Glass؛ Layout: Inline، Expanded؛ Tone: Info، Success، Warning، Danger، Neutral

## Usage

### راهنمای کاربرد Norato

- Alert رو نزدیک همون بخشی بذار که بهش مربوطه.
- در پیام خطا بگو چی شد و چطور درستش کنه.

### محدودیت‌های کاربرد

- برای پیام‌های موقتی Alert نذار؛ Toast مناسب‌تره.
- چند Alert رو پشت سر هم نچین.

### جهت RTL

آیکن سمت راست و دکمه‌ی بستن سمت چپ.

## Accessibility

Alert خطا نقش alert داره و برای صفحه‌خوان فوراً اعلام میشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
