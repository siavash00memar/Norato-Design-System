# Divider — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: خط ۱ پیکسلی برای جدا کردن بخش‌ها؛ افقی یا عمودی، ساده یا با برچسب.

## Anatomy

- **Line** — خط ۱ پیکسلی
- **Label** — برچسب اختیاری

## Variants

- **Divider (12 variant):** Orientation: Horizontal، Vertical؛ Type: Line، Label Center، Label Start؛ Spacing: 0، 4، 8؛ Tone: Subtle، Strong

## Sizes

- در قرارداد فعلی Norato محور اندازه برای این خانواده مشخص نشده است.

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Divider — 12 variant:** جداکننده. ابعاد/حالت‌ها: Orientation: Horizontal، Vertical؛ Type: Line، Label Center، Label Start؛ Spacing: 0، 4، 8؛ Tone: Subtle، Strong

## Usage

### راهنمای کاربرد Norato

- برای جدا کردن گروه‌های محتوا از Divider ملایم استفاده کن.
- در فرم ورود از «یا» وسط Divider استفاده کن.

### محدودیت‌های کاربرد

- بین هر دو المان Divider نذار؛ فاصله کافیه.
- Divider پررنگ رو زیاد استفاده نکن.

### جهت RTL

در حالت Label Start، برچسب سمت راسته.

## Accessibility

Divider تزئینیه، مگه اینکه بخش جدیدی رو شروع کنه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
