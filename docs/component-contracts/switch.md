# Switch — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Adapted — بررسی DoD در جریان

## Preview

نمونهٔ بصری ابتدای صفحه یک Switch Field خاموش با label و description در قاب شیشه‌ای نقطه‌دار ۶۴۰×۲۸۸ است؛ عرض قاب موبایل ۳۲۰px می‌شود. track در هر سه اندازه جمع می‌ماند و هدف کلیک/فوکوس ۴۸px است. playground پایین صفحه adapter واقعی را کنترل می‌کند.

## Overview

قرارداد طراحی Norato: کلید controlled روشن/خاموش برای تنظیماتی که فوراً اعمال می‌شوند. track خاموش با سطح خاکستری روشن `--norato-color-surface-muted` و مرز خنثی کم‌رنگ نمایش داده می‌شود؛ track روشن زرد Norato است و stroke طوسی ندارد. knob در هر دو حالت سفید، بدون stroke/shadow و با فاصلهٔ ثابت از لبه‌های track می‌ماند. در RTL با روشن‌شدن، knob از راست به چپ حرکت می‌کند. Disabled از نظر بصری بر خطا اولویت دارد: track در هر دو مقدار خنثی می‌شود، درحالی‌که `aria-invalid` و پیام خطا حفظ می‌شوند.

## Anatomy

- **Track** — ترک؛ خاکستری روشن در خاموش، زرد Norato بدون مرز طوسی در روشن
- **Knob** — دستگیرهٔ سفید در هر دو حالت؛ بدون stroke و shadow، با inset ثابت از track
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

گالری ایستای inert پنج حالت Switch را در سه اندازه و دو مقدار (۳۰ ترکیب) و سه حالت Switch Field را در دو مقدار (۶ ترکیب) نشان می‌دهد. هندسه از همان توکن‌های adapter واقعی می‌آید: 32×20، 40×24 و 48×28px؛ track خاموش از سطح خاکستری روشن، track روشن از زرد Norato بدون stroke طوسی، و knob در هر دو مقدار سفید است.

مقایسهٔ States در 1195×765 و 390×844 ثبت شده: دسکتاپ سه ستون و موبایل دو ستون، بدون سرریز افقی؛ کارت موبایل Norato برابر 167.5×87.6px و مرجع طراحی برابر 158.5×88.6px گزارش شده. در بررسی هم‌viewport Variants در 390×844 و 320×640، قاب Norato برابر 320×288 و 273×288px و قاب مرجع طراحی برابر 327×300 و 257×300px بود؛ عرض سند Norato به‌ترتیب 375 و 305px ماند. هر ۳۰ حالت Switch و ۶ حالت Switch Field، هدف تعاملی 48×48px، سه اندازهٔ ذاتی track، knob سفید بدون Stroke/shadow، RTL و رنگ‌های وضعیت بررسی شدند.

کلیک، Space و Enter، اندازه‌های adapter، هدف 48×48px، Hover، Error، Disabled و RTL در مرورگر بررسی شده‌اند. حلقهٔ فوکوس 2px با offset چهارپیکسلی نیز تأیید شده است. در مرور ترکیبی تازه، disabled همراه error برای هر دو مقدار بررسی شد؛ حاشیهٔ خطای ناخواسته در حالت خاموش حذف شد و `aria-invalid` و پیام خطا باقی ماندند. ماتریس کامل ترکیب‌های زنده و بررسی مستقل صفحه‌خوان هنوز باز است؛ DoD کامل خانواده بسته نیست.

در بازبینی 2026-11-08، شش سلول روشنِ Default و Focus ابتدا Stroke طوسی `#a1a1a1` داشتند؛ سپس track خاموشِ ماتریس به‌جای سطح شیشه‌ای تقریباً سفید به همان سطح خنثی `--norato-color-surface-muted` adapter زنده تغییر کرد تا knob سفید بدون Stroke در وضعیت خاموش دیده شود. مرورگر هر ۳۰ حالت Switch و ۶ حالت Switch Field را در رندر دسکتاپ نشان داد؛ checked زرد، unchecked خاکستری روشن، knob سفید و بدون Stroke/shadow است. Norato و مرجع طراحی در viewport دسکتاپ 1265×713 بازبینی شدند؛ زرد Norato جایگزین track مشکی مرجع است. مقایسهٔ دقیق موبایل ماتریس در 390×844 و 320×640 نیز در follow-up مورخ 2026-11-09 ثبت شد. ماتریس کامل ترکیب‌های زنده و صفحه‌خوان مستقل همچنان بازند.

### گزارش آزمون مرورگر — 2026-11-01

- [x] صفحهٔ جزئیات ساختار ۹‌بخشی هم‌سطح Button، نمونهٔ preview جدا از adapter اجرایی، کنترل‌های playground و کد Vue قابل‌کپی دارد.
- [x] مرورگر محلی در viewport دسکتاپ 1280px: ۳۰ سلول Switch و ۶ سلول Switch Field حاضرند؛ trackها 32×20، 40×24 و 48×28px اندازه‌گیری شدند؛ گالری inert است، هیچ control تعاملی ندارد، RTL است و عرض سند 1265px است.
- [x] adapter زنده در هر سه اندازه هدف 48×48px و track متناسب داشت؛ RTL برقرار بود. Space مقدار را عوض کرد؛ Enter مقدار بعدی را برگرداند. حلقهٔ فوکوس واقعی 2px با offset چهارپیکسلی مشاهده شد.
- [x] حالت خطا `aria-invalid="true"` و متن خطا را با `aria-describedby` به توضیح موجود وصل کرد؛ حالت عادی این ویژگی را حذف می‌کند. حالت disabled کنترل واقعی را غیرفعال نگه داشت. نمونه پس از آزمون به حالت پیش‌فرض بازگردانده شد.
- [x] مرجع مرجع طراحی در `مرجع طراحی در مرورگر بازبینی شد: همان سلسله‌مراتب preview نقطه‌ای، نشان Default، فیلد برچسب‌دار و سه اندازه؛ مرجع طراحی در حالت روشن از track مشکی استفاده می‌کند؛ Norato از زرد با knob سفید و بدون stroke/shadow بهره می‌برد.
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
