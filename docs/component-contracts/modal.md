# Modal — قرارداد کامپوننت نوراتو

**حوزه:** Overlays  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: پنجره‌ی روی صفحه برای فرم‌ها و تأییدها. مودال کامل با اسلات محتوا و دیالوگ کوچیک تأیید.

## Anatomy

- **Overlay** — پس‌زمینه‌ی تار
- **Icon** — آیکن وضعیت
- **Title** — عنوان
- **Description** — توضیح
- **Actions** — دکمه‌ها؛ اصلی سمت چپ

## Variants

- **Modal (3 variant):** Size: Small، Medium، Large
- **Dialog (4 variant):** Tone: Default، Success، Warning، Danger
- **Modal Overlay (1 variant):** محور variant مشخص نشده
- **Modal Content / Create Project (1 variant):** محور variant مشخص نشده

## Sizes

- **Modal:** Small، Medium، Large

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Modal — 3 variant:** مودال با هدر، محتوا و فوتر. ابعاد/حالت‌ها: Size: Small، Medium، Large
- **Dialog — 4 variant:** دیالوگ تأیید با دو دکمه. ابعاد/حالت‌ها: Tone: Default، Success، Warning، Danger
- **Modal Overlay — 1 variant:** پس‌زمینه‌ی تار و تیره.
- **Modal Content / Create Project — 1 variant:** نمونه‌ی فرم ساخت پروژه.

## Usage

### راهنمای کاربرد Norato

- عنوان رو یه سوال یا کار مشخص بنویس.
- دکمه‌ی اصلی رو با فعل بنویس: «حذف کن».

### محدودیت‌های کاربرد

- Modal روی Modal باز نکن.
- برای پیام‌های ساده Modal نذار.

### جهت RTL

دکمه‌ی اصلی در فوتر سمت چپ قرار می‌گیره.

## Accessibility

فوکوس داخل Modal حبس میشه، Esc می‌بنده و بعد از بستن فوکوس به دکمه‌ی بازکننده برمی‌گرده.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
