# Radio Button — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Implemented برای adapter و نمونه؛ بررسی نهایی ماتریس مرجع در جریان

## Preview

نمونهٔ آغاز صفحه یک گروه سه‌گزینه‌ای غیرفعال در قاب شیشه‌ای ۶۴۰×۲۸۸ است؛ در موبایل عرض قاب ۳۲۰px می‌شود. سه ردیف ۴۸px هستند و گزینهٔ ماهانه انتخاب شده است. آزمایش Vue جداگانه تعاملی است. در ۱۲۸۰×۹۰۰ قاب به‌علت ستون مستندات ۵۸۴×۲۸۸px است؛ Lemon در همان مرورگر بعد از تغییر viewport ابعاد DOM قاب را در دسترس نگذاشت.

## Overview

قرارداد طراحی Norato: انتخاب دقیقاً یک گزینه از گروه، با کنترل دایره‌ای شیشه‌ای و نشان انتخاب آبی برند Norato. API در `NoratoRadioGroup.vue` مقدار تکی controlled دارد.

## Anatomy

- **Ring** — حلقه‌ی شیشه‌ای
- **Dot** — نقطه‌ی آبی برند نوراتو وقتی انتخاب شده
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

در RTL کنترل در سمت راست برچسب قرار می‌گیرد. هر ردیف هدف ۴۸px دارد.

## Accessibility

گروه با Tab فوکوس می‌گیره و با کلیدهای جهت بین گزینه‌ها جابه‌جا میشه. بررسی مرورگر: ArrowDown از ماهانه به سه‌ماهه رفت؛ حلقهٔ فوکوس ۲px، role/name گزینه‌ها، RTL و هدف ۴۸px تأیید شد. required روی یک radio فعال قرار می‌گیرد؛ errorText و پیام required به همهٔ ورودی‌ها متصل‌اند و disabled واقعی است. حالت بدون انتخاب + پیام required در مرورگر بررسی شد. صفحه‌خوان مستقل و تمام سلول‌های state/size جداگانه مرور نشده‌اند.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
