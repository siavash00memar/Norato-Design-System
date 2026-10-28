# Skeleton — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: جای‌نگهدار محتوا تا وقتی داده برسه. با افکت Pulse یا Shimmer و الگوهای آماده.

## Anatomy

- **Avatar** — دایره‌ی جای عکس
- **Lines** — خطوط جای متن
- **Block** — مستطیل جای تصویر یا کارت

## Variants

- **Skeleton (8 variant):** Shape: Line، Circle، Rectangle، Pill؛ Effect: Pulse، Shimmer
- **Skeleton Pattern (16 variant):** Type: Text، Avatar Text، List Item، Card، Card Horizontal، Input، Table Row، Stat؛ Effect: Pulse، Shimmer

## Sizes

- در قرارداد فعلی Norato محور اندازه برای این خانواده مشخص نشده است.

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Skeleton — 8 variant:** شکل پایه. ابعاد/حالت‌ها: Shape: Line، Circle، Rectangle، Pill؛ Effect: Pulse، Shimmer
- **Skeleton Pattern — 16 variant:** ۸ الگوی آماده. ابعاد/حالت‌ها: Type: Text، Avatar Text، List Item، Card، Card Horizontal، Input، Table Row، Stat؛ Effect: Pulse، Shimmer

## Usage

### راهنمای کاربرد Norato

- شکل Skeleton رو شبیه محتوای واقعی بساز.
- برای همه‌ی بخش‌های یه صفحه از یه افکت استفاده کن.

### محدودیت‌های کاربرد

- Skeleton رو بیشتر از چند ثانیه نذار؛ اگه طول کشید پیام بده.
- برای دکمه‌ها و اکشن‌ها Skeleton نذار.

### جهت RTL

افکت Shimmer از چپ به راست حرکت می‌کنه.

## Accessibility

ناحیه‌ی در حال بارگذاری aria-busy داره.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
