# Spinner — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: نشانگر بارگذاری: حلقه، سه نقطه یا لیموی خود لمون. به‌علاوه‌ی الگوهای آماده‌ی لودینگ.

## Anatomy

- **Track** — حلقه‌ی کم‌رنگ پس‌زمینه
- **Arc** — کمان چرخان
- **Label** — متن اختیاری کنار اسپینر

## Variants

- **Spinner (45 variant):** Type: Ring، Dots، Norato؛ Tone: Default، Subtle، Inverse؛ Size: 16، 20، 24، 32، 48
- **Loader (4 variant):** Type: Inline، Refresh، Overlay، Page

## Sizes

- Spinner: 16px، 20px، 24px، 32px یا 48px.

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Spinner — 45 variant:** اسپینر در ۳ شکل و ۵ اندازه. ابعاد/حالت‌ها: Type: Ring، Dots، Norato؛ Tone: Default، Subtle، Inverse؛ Size: 16، 20، 24، 32، 48
- **Loader — 4 variant:** الگوهای لودینگ درون‌خطی، کشیدن برای تازه‌سازی، روکش و تمام‌صفحه. ابعاد/حالت‌ها: Type: Inline، Refresh، Overlay، Page

## Usage

### راهنمای کاربرد Norato

- برای انتظار کمتر از چند ثانیه ازش استفاده کن.
- روی سطح‌های تیره Tone Inverse رو انتخاب کن.

### محدودیت‌های کاربرد

- وقتی شکل محتوا معلومه Spinner نذار؛ Skeleton بهتره.
- چند Spinner رو همزمان توی یه صفحه نذار.

### جهت RTL

اگه شکل محتوا معلومه، به‌جاش از Skeleton استفاده کن.

## Accessibility

متن «در حال بارگذاری» باید برای صفحه‌خوان اعلام بشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
