# Input — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Implemented  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحه، یک فیلد ایمیل با برچسب و متن راهنما در قاب نقطه‌دار شیشه‌ای و marker حالت Default است؛ ترکیب از Lemon و رنگ/تایپوگرافی از Norato می‌آید. عرض فیلد حداکثر ۳۲۴px است، اما ارتفاع target آن حداقل ۴۸px می‌ماند. Playground اجرایی زیر همان preview هشت adapter را نشان می‌دهد. `NoratoField` همچنان برای سازگاری نسخه‌های پیشین در دسترس است.



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

- **مرجع Lemon:** Small 32px، Medium 40px، Large 48px، XLarge 56px. این اعداد مقیاس بصری مرجع‌اند.
- **هدف تعاملی Norato:** کنترل اجرایی از 48px کوچک‌تر نمی‌شود. در adapterهای تک‌خطی و Label Outside، اندازه‌های مرورشده Small/Medium/Large/XLarge به‌ترتیب 50/52/56/60px هستند؛ Label Inside به‌ترتیب 62/64/68/72px فضا می‌گیرد تا برچسب و مقدار روی هم نیفتند.
- **OTP:** اندازهٔ سلول‌ها 48/52/56/60px است. در عرض محدود، سلول‌ها به ردیف بعد می‌روند و عرض صفحه را نمی‌شکنند.
- **Textarea:** ارتفاع به `rows` و size وابسته است؛ با سه ردیف ارتفاع‌های مرورشده 103/108/120/128px هستند. این اندازهٔ چندخطی است، نه target تک‌خطی.

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

### Vue adapters

- `NoratoTextInput`: text field, label placement, native text attributes and common field states.
- `NoratoPasswordInput`: controlled visibility and caller-provided strength (`empty|weak|fair|good|strong`).
- `NoratoPhoneInput`: LTR phone entry and configurable calling code (default `+98`).
- `NoratoOtpInput`: 4/5/6 cells, sequential entry, paste, Backspace and directional arrows.
- `NoratoTextarea`: legacy export with row/character limit, read-only and success support.
- `NoratoNumberInput`: bounded native numeric entry plus 48px increment/decrement actions.
- `NoratoAmountInput`: canonical unsigned integer string model, exact Persian digit grouping (including values above JavaScript's safe integer range), Persian amount words for safe integers and configurable currency (default `تومان`).
- `NoratoSearchInput`: search input, clear action and optional Ctrl/Cmd+K shortcut (`shortcut` defaults to true).

Shared adapters accept `id`, `label`, `modelValue`/`v-model`, `placeholder`, `helperText`, `errorText`, `successText`, `required`, `disabled`, `loading`, `readOnly`, `dir`, `size` and `labelPlacement` where applicable. `NoratoField` remains exported as a backward-compatible generic adapter.

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

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring`، `--norato-input-preview-inline-size`، `--norato-input-preview-frame-inline-size`، `--norato-input-preview-frame-mobile-inline-size`، `--norato-input-preview-frame-block-size`، `--norato-input-preview-frame-radius` و توکن‌های فاصلهٔ تعریف‌شده برای همان کامپوننت.
