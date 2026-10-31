# Input — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Implemented  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی، یک فیلد ایمیل با برچسب و متن راهنما است؛ ترکیب آن از صفحهٔ Input در Lemon گرفته شده و رنگ/تایپوگرافی از Norato می‌آید. نمونهٔ اجرایی جداگانه با `NoratoField` مقدار، خطا، الزامی، غیرفعال و بارگذاری را نمایش می‌دهد. نمونهٔ ایمیل صرفاً مرجع بصری است؛ adapter فعلی فقط ورودی متن عمومی دارد و API اختصاصی ایمیل، رمز، موبایل یا اندازه‌های چهارگانه ندارد.

## Overview

قرارداد طراحی Norato: همه‌ی فیلدهای ورود اطلاعات: متن، رمز، موبایل، کد تأیید، عدد، مبلغ، جستجو و متن چندخطی. شیشه‌ای، با ۴ اندازه و برچسب داخل یا بیرون.

## Anatomy

- **Label** — برچسب فیلد؛ داخل یا بیرون
- **Field** — بدنه‌ی شیشه‌ای فیلد
- **Leading Icon** — آیکن توضیحی سمت راست
- **Value / Placeholder** — مقدار یا متن راهنمای کم‌رنگ
- **Trailing Icon** — آیکن عملی مثل نمایش رمز یا پاک کردن
- **Helper Text** — راهنما یا پیام خطا زیر فیلد

## Variants

- **Text Input (64 variant):** Type: Label Inside، Label Outside؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Error، Disabled، Loading، Success، Read-only
- **Password Input (20 variant):** Size: Small، Medium، Large، XLarge؛ Strength: Empty، Weak، Fair، Good، Strong
- **Phone Input (24 variant):** Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Success، Error، Disabled
- **OTP Input (20 variant):** Size: Small، Medium، Large، XLarge؛ State: Default، Active، Error، Success، Disabled
- **Text Area (56 variant):** Type: Label Inside، Label Outside؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Filled، Error، Disabled، Read-only
- **Number Input (40 variant):** Type: Stepper، Stacked؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Error، Disabled
- **Amount Input (20 variant):** Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Error، Disabled
- **Search Input (20 variant):** Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Typing، Loading، Disabled

## Sizes

- فیلدهای Input: Small 32px، Medium 40px، Large 48px، XLarge 56px؛ مقیاس مشترک با Button.

## States

- **Text Input:** Default، Hover، Active، Error، Disabled، Loading، Success، Read-only
- **Phone Input:** Default، Hover، Active، Success، Error، Disabled
- **OTP Input:** Default، Active، Error، Success، Disabled
- **Text Area:** Default، Hover، Active، Filled، Error، Disabled، Read-only
- **Number Input:** Default، Hover، Active، Error، Disabled
- **Amount Input:** Default، Hover، Active، Error، Disabled
- **Search Input:** Default، Hover، Typing، Loading، Disabled

## Parts

- **Text Input — 64 variant:** فیلد متن با برچسب شناور یا بیرونی، آیکن و متن راهنما. ابعاد/حالت‌ها: Type: Label Inside، Label Outside؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Error، Disabled، Loading، Success، Read-only
- **Password Input — 20 variant:** رمز عبور با نوار قدرت رمز که از راست پر میشه. ابعاد/حالت‌ها: Size: Small، Medium، Large، XLarge؛ Strength: Empty، Weak، Fair، Good، Strong
- **Phone Input — 24 variant:** شماره موبایل با کد کشور سمت چپ. ابعاد/حالت‌ها: Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Success، Error، Disabled
- **OTP Input — 20 variant:** کد تأیید ۴، ۵ یا ۶ رقمی. ابعاد/حالت‌ها: Size: Small، Medium، Large، XLarge؛ State: Default، Active، Error، Success، Disabled
- **Text Area — 56 variant:** متن چندخطی با شمارنده و دستگیره‌ی تغییر اندازه. ابعاد/حالت‌ها: Type: Label Inside، Label Outside؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Filled، Error، Disabled، Read-only
- **Number Input — 40 variant:** عدد با دکمه‌های − و + یا فلش بالا و پایین. ابعاد/حالت‌ها: Type: Stepper، Stacked؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Error، Disabled
- **Amount Input — 20 variant:** مبلغ با جداکننده‌ی هزارگان و نمایش مبلغ به حروف. ابعاد/حالت‌ها: Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Active، Error، Disabled
- **Search Input — 20 variant:** جستجوی مستقل با میانبر ⌘K و دکمه‌ی پاک کردن. ابعاد/حالت‌ها: Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Typing، Loading، Disabled

## Usage

### راهنمای کاربرد Norato

- برای هر فیلد برچسب واضح بذار؛ Placeholder جای برچسب نیست.
- پیام خطا رو دقیق بنویس و بگو چطور درستش کنه.

### محدودیت‌های کاربرد

- شماره موبایل، کد تأیید و مبلغ رو راست‌به‌چپ تایپ نکن؛ این‌ها LTR هستن.
- از Read-only برای فیلدی که کاربر باید ویرایشش کنه استفاده نکن.

### جهت RTL

متن فارسی راست‌چینه ولی عدد، موبایل و کد تأیید از چپ به راست تایپ میشن.

## Accessibility

برچسب باید به فیلد وصل باشه و پیام خطا با رنگ و متن هر دو نشون داده بشه، نه فقط با رنگ قرمز.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
