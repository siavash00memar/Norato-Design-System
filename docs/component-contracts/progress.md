# Progress — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت نوراتو:** Adapted  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: نمایش میزان پیشرفت یه کار؛ خطی یا دایره‌ای، در ۴ رنگ.

## Anatomy

- **Track** — نوار یا حلقه‌ی کامل
- **Fill** — بخش پرشده
- **Label** — درصد یا توضیح

## Variants

- **Linear Progress (60 variant):** Size: Small، Medium، Large؛ Tone: Default، Success، Warning، Danger؛ Value: 0، 25، 50، 75، 100
- **Circular Progress (60 variant):** Size: Small، Medium، Large؛ Tone: Default، Success، Warning، Danger؛ Value: 0، 25، 50، 75، 100

## Sizes

- **Linear Progress:** Small، Medium، Large
- **Circular Progress:** Small، Medium، Large

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Linear Progress — 60 variant:** نوار خطی با ضخامت ۴، ۸ و ۱۲. ابعاد/حالت‌ها: Size: Small، Medium، Large؛ Tone: Default، Success، Warning، Danger؛ Value: 0، 25، 50، 75، 100
- **Circular Progress — 60 variant:** حلقه با درصد وسطش. ابعاد/حالت‌ها: Size: Small، Medium، Large؛ Tone: Default، Success، Warning، Danger؛ Value: 0، 25، 50، 75، 100

## Usage

### راهنمای کاربرد Norato

- وقتی مدت کار مشخصه ازش استفاده کن.
- درصد رو کنار نوار بنویس.

### محدودیت‌های کاربرد

- برای کارهای نامعلوم Progress نذار؛ Spinner مناسبه.
- نوار رو از چپ پر نکن.

### جهت RTL

نوار خطی از راست به چپ پر میشه؛ دایره‌ای از ساعت ۱۲ شروع میشه.

## Accessibility

نقش progressbar با مقدار فعلی و حداکثر داره.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
