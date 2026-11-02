# Checkbox — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Implemented

## Preview

نمونهٔ اول صفحه، inert و فشرده و با ترکیب‌بندی Lemon است؛ پنل Vue پایین‌تر adapter اجرایی و حالت‌های قابل‌آزمایش را نشان می‌دهد. حالت انتخاب‌شده از accent زرد Norato و نشان تیره برای کنتراست استفاده می‌کند؛ کادر و فوکوس نیز از توکن‌های Norato می‌آیند.

## Overview

چک‌باکس برای انتخاب چند گزینه یا تأیید یک شرط است. کنترل standalone نوراتو controlled است و `false`، `true` و `indeterminate` را می‌پذیرد. `NoratoChoiceGroup` همچنان برای گروه‌های چندگزینه‌ای و Radio در دسترس است.

## Anatomy

- **Box** — مربع شیشه‌ای ۱۶ یا ۲۰ پیکسلی
- **Check / Dash** — تیک برای true و خط برای Indeterminate
- **Label** — برچسب کنار کنترل
- **Description** — توضیح اختیاری؛ در حالت Error قرمز میشه

## Variants

- **Checkbox (30 variant):** Size: 16، 20؛ Checked: false، true، Indeterminate؛ State: Default، Hover، Disabled، Focus، Error
- **Checkbox Field (6 variant):** Checked: false، true؛ State: Default، Error، Disabled

## Sizes

- Checkbox: 16px یا 20px. خود مربع ۱۶/۲۰px می‌ماند و ردیف Checkbox Field حداقل ۴۸px ارتفاع لمسی/کلیک دارد؛ حالت mixed با رنگ و خط داخلی متمایز می‌شود.

## States

- **Checkbox:** Default، Hover، Disabled، Focus، Error
- **Checkbox Field:** Default، Error، Disabled

## Parts

- **Checkbox — 30 variant:** خود چک‌باکس. ابعاد/حالت‌ها: Size: 16، 20؛ Checked: false، true، Indeterminate؛ State: Default، Hover، Disabled، Focus، Error
- **Checkbox Field — 6 variant:** چک‌باکس با برچسب و توضیح. ابعاد/حالت‌ها: Checked: false، true؛ State: Default، Error، Disabled

## Usage

### راهنمای کاربرد Norato

- کل ردیف (چک‌باکس و متن) رو قابل کلیک کن.
- برای «انتخاب همه» از حالت Indeterminate استفاده کن.

### محدودیت‌های کاربرد

- برای یه تنظیم روشن و خاموش که فوراً اعمال میشه Checkbox نذار؛ Switch بهتره.
- گزینه‌هایی که فقط یکی‌شون قابل انتخابه رو با Checkbox نساز؛ Radio لازمه.

### جهت RTL

چک‌باکس سمت راست برچسب میاد.

### API اجرایی

- `NoratoCheckbox` props: `id`، `label`، `modelValue`، `description`، `disabled`، `required`، `size` (`16 | 20`) و `errorText`؛ رویداد `update:modelValue` مقدار boolean یا `indeterminate` را برمی‌گرداند.
- متن و توضیح داخل label بومی‌اند؛ کلیک روی هر جای ردیف مقدار را عوض می‌کند.
- `errorText` به‌صورت alert و از طریق `aria-describedby` به ورودی متصل می‌شود؛ Required و Invalid نیز روی ورودی اعلام می‌شوند.
- انتخاب اندازه فقط مربع را تغییر می‌دهد و هدف تعاملی ۴۸px می‌ماند.

## Accessibility

با Space تیک می‌خوره و حالت Indeterminate باید به‌عنوان «mixed» اعلام بشه.

ورودی بومی checkbox برای صفحه‌خوان و صفحه‌کلید حفظ شده است؛ وضعیت `indeterminate` هم خاصیت DOM و هم نام دسترس‌پذیر `mixed` را تنظیم می‌کند. در مرورگر و Accessibility tree: Space، فوکوس ۲px، کلیک کل ردیف، اتصال توضیح/خطا، RTL، هدف ۴۸px، هر دو اندازه، هر سه مقدار، و حالت‌های Default/Hover/Disabled/Focus/Error بررسی شدند. صفحه‌خوان مستقل اجرا نشده است.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-yellow` برای حالت انتخاب‌شده، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
