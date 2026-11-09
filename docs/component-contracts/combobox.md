# Combobox — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Adapted — adapter تکی/چندتایی با وضعیت‌های اصلی؛ DoD بصری و تعاملات نهایی باز است

## Preview

نمونهٔ بصری در ابتدای صفحه از قاب شیشه‌ای نقطه‌دار با یک Combobox مرکزی و marker ثابت `Default` استفاده می‌کند؛ قاب، نقطه‌ها و رنگ‌مایه‌ها از توکن‌های Norato می‌آیند. playground اجرایی جدا از این نمونه است. فیلد هدف تعاملی حداقل ۴۸px دارد و capsule دیداری ۳۶px درون آن قرار می‌گیرد؛ Stroke در حالت عادی ۱px و `#e8e8e8` است و در hover/focus به زرد Norato تغییر می‌کند، بدون outline یا halo اضافه. برچسب Estedad Bold و placeholder فارسی راست‌چین، Vazirmatn Light با اندازهٔ ۱۲px و `#a1a1a1` است. adapter تکی/چندتایی، اندازه، جای برچسب، موارد اخیر، بارگذاری، ساخت گزینه و حالت خالی دارد؛ ماتریس کامل بصری و DoD نهایی هنوز باز است.

## Overview

فیلدی که با تایپ، گزینه‌ها را فیلتر و انتخاب‌پذیر می‌کند. adapter نوع تکی/چندتایی، فهرست اخیر، بارگذاری، بدون نتیجه و ساخت گزینه را پشتیبانی می‌کند. مدل چندتایی `string[]` است و انتخاب‌ها به یک chip و شمارندهٔ باقی‌مانده فشرده می‌شوند تا ارتفاع فیلد ثابت بماند.

## Anatomy

- **Field** — فیلد در حالت Typing با نشانگر تایپ
- **Chips** — انتخاب‌های Multi؛ chip اول و شمارندهٔ فارسی انتخاب‌های بعدی برای جلوگیری از کشیدگی عمودی
- **Clear / Chevron** — پاک کردن جست‌وجو و انتخاب‌ها، و باز و بسته کردن منو
- **Combobox Menu** — پنل پیشنهادها، ۸ پیکسل زیر فیلد
- **Matched Text** — بخشی از گزینه که با متن تایپ‌شده یکیه

## Variants

- **Combobox (96 variant):** Type: Single، Multi؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Typing، Filled، Error، Disabled؛ Label: Outside، Inside
- **Combobox Menu (6 variant):** Type: Results، Multi، Recent، Loading، Empty، Create

## Sizes

- Combobox: Small 32px، Medium 40px، Large 48px، XLarge 56px.

## States

- **Combobox:** Default، Hover، Typing، Filled، Error، Disabled

adapter حالت‌های Default، Hover، Typing، Filled، Error، Disabled، Loading، Empty، Recent و Create را دارد. برای رعایت هدف تعاملی ۴۸px در Norato، Small و Medium به کنترل ۴۸px نگاشت می‌شوند؛ Large برابر ۴۸px و XLarge برابر ۵۶px است. با احتساب قاب یک‌پیکسلی، ارتفاع بیرونی کنترل به‌ترتیب ۵۰ و ۵۸px است. مقایسهٔ بصری نهایی هنوز لازم است.

## Parts

- **Combobox — 96 variant:** فیلد خودکامل‌شونده؛ در حالت چندتایی انتخاب‌ها Chip میشن. ابعاد/حالت‌ها: Type: Single، Multi؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Typing، Filled، Error، Disabled؛ Label: Outside، Inside
- **Combobox Menu — 6 variant:** پنل پیشنهادها: نتایج، اخیر، بارگذاری، خالی و ساختن. ابعاد/حالت‌ها: Type: Results، Multi، Recent، Loading، Empty، Create

## Usage

### راهنمای کاربرد Norato

- برای لیست‌های خیلی بلند (شهرها، مهارت‌ها، کاربران) ازش استفاده کن.
- حالت «بدون نتیجه» رو همیشه طراحی کن و راه بعدی رو نشون بده.

### محدودیت‌های کاربرد

- برای لیست ۵ گزینه‌ای Combobox نذار؛ Select ساده‌تره.
- پیشنهادها رو قبل از تایپ اولین حرف خالی نذار؛ موارد اخیر رو نشون بده.
- برای حالت Multi مقدار `string[]` بده؛ `recent-options` موارد اخیر منو را مشخص می‌کند و `creatable` با رویداد `create` گزینهٔ جدید را به والد واگذار می‌کند.
- در حالت تک‌انتخابی، بازکردن فهرست جست‌وجوی قبلی را پاک می‌کند؛ پیشنهادهای پیش‌فرض (از جمله موارد اخیر، اگر داده شده باشند) نمایش داده می‌شوند و انتخاب فعلی تا انتخاب بعدی حفظ می‌شود.

### جهت RTL

منوی پیشنهاد ۸ پیکسل زیر فیلد باز میشه؛ بخش تطبیق‌خورده‌ی متن Bold میشه.

## Accessibility

فوکوس صفحه‌کلیدی روی فیلد با Stroke زرد ۱px در capsule خودش نمایش داده می‌شود؛ فیلد halo یا outline بیرونی ندارد. اکشن‌های مستقل داخل فیلد نشانگر فوکوس صفحه‌کلیدی خودشان را حفظ می‌کنند.

در حالت ترکیبی `disabled` و `error`، Stroke خنثی disabled اولویت دارد؛ با فعال‌شدن دوبارهٔ فیلد، رنگ خطا برمی‌گردد. هنگام بازبودن منو، `aria-activedescendant` به گزینهٔ فعال موجود اشاره می‌کند؛ پس از بستن منو، این ارجاع حذف می‌شود و با بازشدن دوباره به گزینه‌ای معتبر برمی‌گردد.

گزینهٔ فعال صفحه‌کلید با `aria-activedescendant` اعلام می‌شود. متن کمک/خطا با `aria-describedby` به ورودی وصل است؛ required، invalid، disabled و loading نیز با صفت‌های بومی/ARIA اعلام می‌شوند. مقدارهای انتخاب‌شدهٔ Multi برای صفحه‌خوان در متن پنهان توصیف می‌شوند.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است؛ خود فیلد Combobox استثناست و Stroke زرد خودش را دارد. کنترل‌های مستقل Clear و Trigger حلقهٔ فوکوس خود را حفظ می‌کنند.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت. قاب از `--norato-combobox-preview-frame-inline-size`، `--norato-combobox-preview-frame-mobile-inline-size` و `--norato-combobox-preview-frame-min-block-size` استفاده می‌کند؛ نقاط و wash آبی/زرد از رنگ‌های semantic Norato ساخته می‌شوند.
