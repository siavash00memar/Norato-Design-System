# Radio Button — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Implemented  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: برای انتخاب فقط یک گزینه از یه گروه. حلقه‌ی شیشه‌ای با نقطه‌ی مشکی.

## Anatomy

- **Ring** — حلقه‌ی شیشه‌ای
- **Dot** — نقطه‌ی مشکی وقتی انتخاب شده
- **Label** — برچسب گزینه
- **Description** — توضیح اختیاری

## Variants

- **Radio Button (20 variant):** Size: 16، 20؛ Checked: false، true؛ State: Default، Hover، Disabled، Focus، Error
- **Radio Field (6 variant):** Checked: false، true؛ State: Default، Error، Disabled

## Sizes

- Radio Button: 16px یا 20px.

## States

- **Radio Button:** Default، Hover، Disabled، Focus، Error
- **Radio Field:** Default، Error، Disabled

## Parts

- **Radio Button — 20 variant:** خود رادیو. ابعاد/حالت‌ها: Size: 16، 20؛ Checked: false، true؛ State: Default، Hover، Disabled، Focus، Error
- **Radio Field — 6 variant:** رادیو با برچسب و توضیح. ابعاد/حالت‌ها: Checked: false، true؛ State: Default، Error، Disabled

## Usage

### راهنمای کاربرد Norato

- یه گزینه رو پیش‌فرض انتخاب کن، مگه اینکه انتخاب نکردن معنی داشته باشه.
- وقتی ۲ تا ۶ گزینه داری و همه باید دیده بشن، Radio بهترین انتخابه.

### محدودیت‌های کاربرد

- برای بیشتر از ۶ گزینه Radio نذار؛ Select جای کمتری می‌گیره.
- یه Radio تنها نذار؛ کاربر نمی‌تونه انتخابش رو برداره.

### جهت RTL

رادیو سمت راست برچسب میاد.

## Accessibility

گروه با Tab فوکوس می‌گیره و با کلیدهای جهت بین گزینه‌ها جابه‌جا میشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
