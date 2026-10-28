# Timeline — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: نمایش رویدادها به ترتیب زمان؛ از تاریخچه‌ی سفارش تا فید فعالیت‌ها.

## Anatomy

- **Rail** — خط عمودی
- **Marker** — نشانگر رویداد
- **Title** — عنوان رویداد
- **Time** — زمان

## Variants

- **Timeline Item (9 variant):** Layout: Default، Card، Compact؛ Position: First، Middle، Last
- **Timeline Marker (15 variant):** Type: Dot، Icon، Avatar؛ Tone: Neutral، Active، Success، Warning، Danger
- **Activity Feed (2 variant):** Density: Default، Compact

## Sizes

- در قرارداد فعلی Norato محور اندازه برای این خانواده مشخص نشده است.

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Timeline Item — 9 variant:** یه رویداد. ابعاد/حالت‌ها: Layout: Default، Card، Compact؛ Position: First، Middle، Last
- **Timeline Marker — 15 variant:** نشانگر روی خط. ابعاد/حالت‌ها: Type: Dot، Icon، Avatar؛ Tone: Neutral، Active، Success، Warning، Danger
- **Activity Feed — 2 variant:** پنل فعالیت‌ها. ابعاد/حالت‌ها: Density: Default، Compact

## Usage

### راهنمای کاربرد Norato

- جدیدترین رو بالا یا پایین بذار، ولی ثابت.
- برای رویداد فعلی حالت Active استفاده کن.

### محدودیت‌های کاربرد

- متن طولانی برای هر رویداد ننویس.
- بیشتر از ۲۰ رویداد رو بدون صفحه‌بندی نشون نده.

### جهت RTL

خط زمان سمت راسته و متن کنارش.

## Accessibility

لیست رویدادها یه لیست مرتب (ol) معنایی‌ه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
