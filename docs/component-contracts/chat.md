# Chat — قرارداد کامپوننت نوراتو

**حوزه:** Media & Chat  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: همه‌ی قطعه‌های یه صفحه‌ی گفتگو: حباب پیام (متن، ریپلای، عکس، فایل، ویس)، هدر، کادر نوشتن، در حال تایپ و تاریخ.

## Anatomy

- **Header** — هدر گفتگو
- **Date Divider** — جداکننده‌ی روز
- **Incoming** — پیام دریافتی شیشه‌ای
- **Outgoing** — پیام ارسالی مشکی
- **Meta** — زمان و تیک خوانده شدن
- **Composer** — کادر نوشتن

## Variants

- **Message Bubble (10 variant):** Sender: Incoming، Outgoing؛ Type: Text، Reply، Image، File، Voice
- **Chat Parts (6 variant):** Part: Header، Composer Default، Composer Typing، Composer Recording، Typing Indicator، Date Divider

## Sizes

- در قرارداد فعلی Norato محور اندازه برای این خانواده مشخص نشده است.

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Message Bubble — 10 variant:** حباب پیام در ۵ نوع. ابعاد/حالت‌ها: Sender: Incoming، Outgoing؛ Type: Text، Reply، Image، File، Voice
- **Chat Parts — 6 variant:** هدر، کادر نوشتن، در حال تایپ و جداکننده‌ی تاریخ. ابعاد/حالت‌ها: Part: Header، Composer Default، Composer Typing، Composer Recording، Typing Indicator، Date Divider

## Usage

### راهنمای کاربرد Norato

- پیام‌های پشت‌سرهم یه نفر رو با فاصله‌ی کمتر گروه کن.
- زمان رو کوچیک و کم‌رنگ نشون بده.

### محدودیت‌های کاربرد

- جای پیام دریافتی و ارسالی رو عوض نکن.
- حباب‌ها رو خیلی عریض نکن؛ خوانایی کم میشه.

### جهت RTL

پیام دریافتی راست و شیشه‌ای، ارسالی چپ و مشکی.

## Accessibility

هر پیام فرستنده و زمانش رو برای صفحه‌خوان اعلام می‌کنه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
