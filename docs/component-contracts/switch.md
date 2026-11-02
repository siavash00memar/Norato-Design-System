# Switch — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Adapted — بررسی DoD در جریان

## Preview

نمونهٔ بصری ابتدای صفحه یک Switch Field خاموش با label و description در قاب شیشه‌ای نقطه‌دار ۶۴۰×۲۸۸ است؛ عرض قاب موبایل ۳۲۰px می‌شود. track در هر سه اندازه جمع می‌ماند و هدف کلیک/فوکوس ۴۸px است. playground پایین صفحه adapter واقعی را کنترل می‌کند.

## Overview

قرارداد طراحی Norato: کلید controlled روشن/خاموش برای تنظیماتی که فوراً اعمال می‌شوند. track خاموش خنثی و روشن زرد Norato با knob تیره است. در RTL با روشن‌شدن، knob از راست به چپ حرکت می‌کند.

## Anatomy

- **Track** — ترک؛ خنثی در خاموش، زرد Norato در روشن
- **Knob** — دستگیرهٔ سفید در حالت خاموش و تیره در حالت روشن، با سایهٔ switch/knob
- **Label** — برچسب تنظیم
- **Description** — توضیح اختیاری

## Variants

- **Switch (30 variant):** Size: Small، Medium، Large؛ On: false، true؛ State: Default، Hover، Disabled، Focus، Error
- **Switch Field (6 variant):** On: false، true؛ State: Default، Error، Disabled

## Sizes

- **Switch:** Small (۳۲×۲۰px)، Medium (۴۰×۲۴px)، Large (۴۸×۲۸px)؛ hit target ثابت ۴۸×۴۸px

## States

- **Switch:** Default، Hover، Disabled، Focus، Error
- **Switch Field:** Default، Error، Disabled

### گالری Variants و شواهد DoD

گالری ایستای inert پنج حالت Switch را در سه اندازه و دو مقدار (۳۰ ترکیب) و سه حالت Switch Field را در دو مقدار (۶ ترکیب) نشان می‌دهد. هندسه از همان توکن‌های adapter واقعی می‌آید: 32×20، 40×24 و 48×28px؛ رنگ روشن زرد Norato با دستگیرهٔ تیره است.

مقایسهٔ States در 1195×765 و 390×844 قبلاً ثبت شده: دسکتاپ سه ستون و موبایل دو ستون، بدون سرریز افقی؛ کارت موبایل Norato برابر 167.5×87.6px و Lemon برابر 158.5×88.6px گزارش شده. در این درخواست رندر Variants دسکتاپ دیده شد، اما مقایسهٔ هم‌viewport بخش Variants، viewport موبایل و اندازه‌گیری DOM این ماتریس هنوز انجام نشده‌اند.

کلیک، Space و Enter، اندازه‌های adapter، هدف 48×48px، Hover، Error، Disabled و RTL در مرورگر قبلاً بررسی شده‌اند. صفحه‌خوان مستقل و اندازه‌گیری واقعی حلقهٔ فوکوس انجام نشده‌اند؛ DoD کامل خانواده باز است.

### گزارش آزمون مرورگر — 2026-11-01

- [x] صفحهٔ جزئیات ساختار ۹‌بخشی هم‌سطح Button، نمونهٔ preview جدا از adapter اجرایی، کنترل‌های playground و کد Vue قابل‌کپی دارد.
- [x] مرورگر محلی در viewport دسکتاپ 1280px: ۳۰ سلول Switch و ۶ سلول Switch Field حاضرند؛ trackها 32×20، 40×24 و 48×28px اندازه‌گیری شدند؛ گالری inert است، هیچ control تعاملی ندارد، RTL است و عرض سند 1265px است.
- [x] adapter زنده در هر سه اندازه هدف 48×48px و track متناسب داشت؛ RTL برقرار بود. Space مقدار را عوض کرد؛ Enter مقدار بعدی را برگرداند. حلقهٔ فوکوس واقعی 2px با offset چهارپیکسلی مشاهده شد.
- [x] حالت خطا `aria-invalid="true"` و متن خطا را با `aria-describedby` به توضیح موجود وصل کرد؛ حالت عادی این ویژگی را حذف می‌کند. حالت disabled کنترل واقعی را غیرفعال نگه داشت. نمونه پس از آزمون به حالت پیش‌فرض بازگردانده شد.
- [x] مرجع Lemon در `https://lemonui.ir/#switch` در مرورگر بازبینی شد: همان سلسله‌مراتب preview نقطه‌ای، نشان Default، فیلد برچسب‌دار و سه اندازه؛ Lemon در حالت روشن از track مشکی استفاده می‌کند؛ Norato از زرد با knob تیره بهره می‌برد.
- [x] آزمون قبلی hover روی adapter اجرایی مرز آبی (`rgb(19, 79, 137)`) را نشان داد؛ اصلاح 2026-11-02 این استایل را به زرد Norato تغییر داد. بررسی تعاملی hover پس از اصلاح هنوز انجام نشده است.
- [ ] مقایسهٔ هم‌viewport بخش Variants، اندازه‌گیری موبایل همین گالری، آزمون ترکیبی همهٔ stateها و صفحه‌خوان مستقل هنوز ثبت نشده‌اند؛ DoD نهایی بسته نیست.
## Parts

- **Switch — 30 variant:** خود سوییچ در سه اندازه. ابعاد/حالت‌ها: Size: Small، Medium، Large؛ On: false، true؛ State: Default، Hover، Disabled، Focus، Error
- **Switch Field — 6 variant:** سوییچ با برچسب و توضیح. ابعاد/حالت‌ها: On: false، true؛ State: Default، Error، Disabled

## Usage

### راهنمای کاربرد Norato

- برچسب رو طوری بنویس که روشن بودن معنی داشته باشه: «اعلان‌ها» نه «خاموش کردن اعلان‌ها».
- وقتی تغییر بلافاصله اعمال میشه ازش استفاده کن.

### محدودیت‌های کاربرد

- توی فرم‌هایی که دکمه‌ی ذخیره دارن Switch نذار؛ Checkbox درسته.
- برای انتخاب بین دو گزینه‌ی غیر روشن و خاموش (مثلاً ماهانه و سالانه) Switch نذار؛ Segmented بهتره.

### جهت RTL

وقتی روشن میشه، دستگیره به سمت چپ میره.

## Accessibility

از primitive `SwitchRoot`/`SwitchThumb` در Reka UI استفاده می‌کند؛ `role="switch"`، `aria-checked` و نام متصل به label دارد. Space و Enter وضعیت را عوض می‌کنند و حالت روشن/خاموش در accessibility tree اعلام می‌شود. توضیح و خطا با `aria-describedby` وصل‌اند. track، رنگ روشن، اندازه و حرکت knob با contract و tokenهای Norato سفارشی می‌شوند.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**حلقهٔ فوکوس از متن تیره با هالهٔ زرد استفاده می‌کند؛ hover از زرد Norato استفاده می‌کند. توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-yellow`، `--norato-color-text-primary`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
