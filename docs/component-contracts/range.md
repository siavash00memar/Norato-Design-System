# Range — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: انتخاب یه مقدار یا یه بازه با کشیدن دستگیره. با برچسب، مقدار روی دستگیره و حداقل و حداکثر.

## Anatomy

- **Label Row** — برچسب و مقدار فعلی
- **Track** — نوار کامل
- **Fill** — بخش انتخاب‌شده
- **Thumb** — دستگیره‌ی قابل کشیدن
- **Min / Max** — حداقل و حداکثر زیر نوار

## Variants

- **Range Input (8 variant):** Type: Single، Range؛ Size: Small، Medium؛ State: Default، Disabled
- **Slider Thumb (10 variant):** Size: Small، Medium؛ State: Default، Hover، Pressed، Disabled، Focus

## Sizes

- **Range Input:** Small، Medium
- **Slider Thumb:** Small، Medium

## States

- **Range Input:** Default، Disabled
- **Slider Thumb:** Default، Hover، Pressed، Disabled، Focus

## Parts

- **Range Input — 8 variant:** اسلایدر تک‌مقداری یا بازه‌ای. ابعاد/حالت‌ها: Type: Single، Range؛ Size: Small، Medium؛ State: Default، Disabled
- **Slider Thumb — 10 variant:** دستگیره‌ی سفید با حلقه‌ی مشکی. ابعاد/حالت‌ها: Size: Small، Medium؛ State: Default، Hover، Pressed، Disabled، Focus

## Usage

### راهنمای کاربرد Norato

- مقدار فعلی رو همیشه به‌صورت عدد هم نشون بده.
- وقتی مقدار دقیق مهم نیست و حدودی کافیه ازش استفاده کن.

### محدودیت‌های کاربرد

- برای مقدارهای دقیق مثل مبلغ پرداخت فقط اسلایدر نذار؛ Number Input هم کنارش بذار.
- بازه‌ی خیلی بزرگ با قدم‌های ریز نساز؛ کشیدنش سخت میشه.

### جهت RTL

حداقل سمت راسته و نوار از راست به چپ پر میشه.

## Accessibility

با کلیدهای جهت مقدار قدم‌به‌قدم تغییر می‌کنه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
