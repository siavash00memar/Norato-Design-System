# Switch — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Adapted — بررسی DoD در جریان

## Preview

نمونهٔ بصری ابتدای صفحه یک Switch Field خاموش با label و description در قاب شیشه‌ای نقطه‌دار ۶۴۰×۲۸۸ است؛ عرض قاب موبایل ۳۲۰px می‌شود. track در هر سه اندازه جمع می‌ماند و هدف کلیک/فوکوس ۴۸px است. playground پایین صفحه adapter واقعی را کنترل می‌کند.

## Overview

قرارداد طراحی Norato: کلید controlled روشن/خاموش برای تنظیماتی که فوراً اعمال می‌شوند. track خاموش شیشه‌ای و روشن آبی برند Norato است. در RTL با روشن‌شدن، knob از راست به چپ حرکت می‌کند.

## Anatomy

- **Track** — ترک؛ شیشه‌ای در خاموش، آبی برند Norato در روشن
- **Knob** — دستگیره‌ی سفید با سایه‌ی switch/knob
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

### گالری States و شواهد DoD`r`n`r`nگالری ایستا از کارت‌های عنوان و توضیح مطابق Lemon استفاده می‌کند: پنج حالت Switch و سه حالت Switch Field، همراه نام خانواده و accent معنایی Norato. artwork کپسولی عمومی در این گالری نمایش داده نمی‌شود؛ نمونهٔ تعاملی در Preview و playground قرار دارد. مقایسهٔ مرورگری هم‌اندازه در 1195×765 و 390×844 انجام شد: دسکتاپ سه ستون در عرض محتوای محدود Norato و موبایل دو ستون، بدون سرریز افقی یا artwork کشیده. اندازهٔ کارت موبایل Norato برابر 167.5×87.6px بود و کارت Lemon برابر 158.5×88.6px است.`r`n`r`nرفتار پایه در مرورگر با AX tree بررسی شد: Switch با نام «اعلان‌ها» از خاموش به روشن رفت و مقدار در مدل نمونه و accessibility tree به‌روز شد. ماتریس کامل ۳۰ ترکیب، pointer hover و صفحه‌خوان مستقل هنوز اجرا نشده‌اند؛ DoD کلی بسته نیست.`r`n
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

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
