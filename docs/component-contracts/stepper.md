# Stepper — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: نمایش پیشرفت در فرآیندهای چندمرحله‌ای. افقی برای دسکتاپ، عمودی برای پنل‌ها، فشرده برای موبایل و نقطه‌ای برای آنبوردینگ.

## Anatomy

- **Step Indicator** — دایره‌ی شماره یا تیک
- **Connector** — خط بین مراحل
- **Title** — اسم مرحله
- **Description** — توضیح اختیاری در حالت عمودی

## Variants

- **Stepper (4 variant):** Type: Horizontal، Vertical، Compact، Dots
- **Step (8 variant):** Orientation: Horizontal، Vertical؛ State: Upcoming، Current، Completed، Error
- **Step Indicator (12 variant):** State: Upcoming، Current، Completed، Error؛ Size: Small، Medium، Large

## Sizes

- **Step Indicator:** Small، Medium، Large

## States

- **Step:** Upcoming، Current، Completed، Error
- **Step Indicator:** Upcoming، Current، Completed، Error

## Parts

- **Stepper — 4 variant:** کل مراحل. ابعاد/حالت‌ها: Type: Horizontal، Vertical، Compact، Dots
- **Step — 8 variant:** یه مرحله. ابعاد/حالت‌ها: Orientation: Horizontal، Vertical؛ State: Upcoming، Current، Completed، Error
- **Step Indicator — 12 variant:** دایره‌ی شماره‌ی مرحله. ابعاد/حالت‌ها: State: Upcoming، Current، Completed، Error؛ Size: Small، Medium، Large

## Usage

### راهنمای کاربرد Norato

- تعداد مراحل رو بین ۳ تا ۶ نگه دار.
- اسم مراحل رو کوتاه و قابل فهم بنویس.

### محدودیت‌های کاربرد

- برای ناوبری آزاد بین بخش‌ها Stepper نذار.
- مرحله‌ی خطادار رو بدون توضیح نذار.

### جهت RTL

مرحله‌ی اول سمت راسته؛ در حالت عمودی نشانگر سمت راست متن.

## Accessibility

مرحله‌ی فعلی باید اعلام بشه («مرحله‌ی ۳ از ۴»).

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
