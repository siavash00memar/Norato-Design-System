# Select — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Implemented  

## Preview

نمونهٔ بصری ثابت در ابتدای صفحه با قاب شیشه‌ای نقطه‌دار ۲۸۸px، نشانگر Default و یک فیلد ۳۰۰×۴۸px نمایش داده می‌شود. حالت Default بدون مقدار انتخاب‌شده است و placeholder فارسی «به شهر انتخاب کن» را نشان می‌دهد، هم‌راستا با Lemon. قاب در ستون مستندات به عرض موجود محدود است و کنترل کشیده نمی‌شود. adapter اجرایی در بخش Vue منوی شیشه‌ای، جستجو، گروه‌بندی و چندانتخابی با Chips/Summary و تأیید/انصراف را فراهم می‌کند؛ DoD کامل responsive و ماتریس حالت‌ها هنوز باز است.

## Overview

قرارداد بصری Norato بر پایهٔ Lemon امکان انتخاب تکی یا چندتایی از منوی شیشه‌ای با جستجو، گروه‌بندی و تأیید را تعریف می‌کند. adapter Vue با primitiveهای Reka UI مقدار کنترل‌شده، جست‌وجو، انتخاب چندتایی مرحله‌ای، placeholder، helper/error، required، disabled و loading را اجرا می‌کند. انتخاب تکی بلافاصله ثبت می‌شود؛ در حالت چندتایی فقط تأیید مقدار نهایی را ثبت می‌کند و انصراف آن را برمی‌گرداند. نشانگر گزینه‌های چندتایی چک‌باکس برداری ۲۴×۲۴px است؛ Chips یک برچسب و شمارندهٔ باقی‌مانده مانند «تهران +۴» نشان می‌دهد و Summary تعداد انتخاب‌ها را نمایش می‌دهد. خانواده تا پایان بررسی همهٔ حالت‌ها کامل محسوب نمی‌شود.

## Anatomy

- **Label** — برچسب فیلد
- **Field** — بدنه‌ی شیشه‌ای با مقدار انتخاب‌شده
- **Chevron** — فلش باز و بسته شدن سمت چپ
- **Select Menu** — پنل شیشه‌ای گزینه‌ها
- **Select Option** — هر ردیف گزینه با تیک یا چک‌باکس
- **Group Title** — عنوان دسته برای لیست‌های بلند

## Variants

- **Select (56 variant):** Type: Label Inside، Label Outside؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Open، Filled، Error، Disabled، Read-only
- **Multi Select (96 variant):** Type: Label Inside، Label Outside؛ Display: Chips، Summary؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Open، Filled، Error، Disabled
- **Select Menu (8 variant):** Size: Small، Medium، Large، XLarge؛ Type: Single، Multi
- **Select Option (40 variant):** Size: Small، Medium، Large، XLarge؛ Type: Single، Multi؛ State: Default، Hover، Selected، Disabled، Focus
- **Select Menu / Search (4 variant):** Size: Small، Medium، Large، XLarge
- **Select Menu / Group Title (4 variant):** Size: Small، Medium، Large، XLarge
- **Select Menu / Footer (4 variant):** Size: Small، Medium، Large، XLarge
- **Select Menu / Divider (1 variant):** محور variant مشخص نشده

## Sizes

- ابعاد ثبت‌شدهٔ مرجع بصری: Small 32px، Medium 40px، Large 48px، XLarge 56px. در adapter اجرایی Norato حداقل هدف تعاملی ۴۸px رعایت می‌شود؛ ارتفاع مشاهده‌شدهٔ کنترل Label Outside به‌ترتیب ۴۸، ۴۸، ۴۸ و ۵۶px است. Label Inside به دلیل چیدمان عمودی label/value در هر چهار اندازه ۵۶px است. Multi Select در نمایش Chips و Summary همین هندسه را حفظ می‌کند.

## States

- **Select:** Default، Hover، Open، Filled، Error، Disabled، Read-only
- **Multi Select:** Default، Hover، Open، Filled، Error، Disabled
- **Select Option:** Default، Hover، Selected، Disabled، Focus

## Parts

- **Select — 56 variant:** انتخاب یک گزینه از لیست. ابعاد/حالت‌ها: Type: Label Inside، Label Outside؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Open، Filled، Error، Disabled، Read-only
- **Multi Select — 96 variant:** انتخاب چند گزینه؛ به‌صورت Chip یا خلاصه‌ی متنی. ابعاد/حالت‌ها: Type: Label Inside، Label Outside؛ Display: Chips، Summary؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Open، Filled، Error، Disabled
- **Select Menu — 8 variant:** پنل کشویی شیشه‌ای با جستجو، گروه و فوتر. ابعاد/حالت‌ها: Size: Small، Medium، Large، XLarge؛ Type: Single، Multi
- **Select Option — 40 variant:** یه گزینه‌ی لیست؛ تیک برای تکی و چک‌باکس برای چندتایی. ابعاد/حالت‌ها: Size: Small، Medium، Large، XLarge؛ Type: Single، Multi؛ State: Default، Hover، Selected، Disabled، Focus
- **Select Menu / Search — 4 variant:** فیلد جستجوی بالای منو. ابعاد/حالت‌ها: Size: Small، Medium، Large، XLarge
- **Select Menu / Group Title — 4 variant:** عنوان گروه برای لیست‌های بلند. ابعاد/حالت‌ها: Size: Small، Medium، Large، XLarge
- **Select Menu / Footer — 4 variant:** دکمه‌های انصراف و تأیید برای انتخاب چندتایی. ابعاد/حالت‌ها: Size: Small، Medium، Large، XLarge
- **Select Menu / Divider — 1 variant:** خط جداکننده‌ی داخل منو.

## Usage

### راهنمای کاربرد Norato

- وقتی بیشتر از ۶ گزینه داری از Select استفاده کن؛ برای کمتر، Radio بهتره.
- برای لیست‌های بلند جستجو رو روشن کن.

### محدودیت‌های کاربرد

- برای انتخاب بله و خیر Select نذار؛ Switch یا Checkbox کافیه.
- گزینه‌ها رو بی‌نظم نچین؛ الفبایی یا بر اساس کاربرد مرتب کن.

### جهت RTL

فلش کشو سمت چپ فیلد قرار می‌گیره و تیک گزینه‌ی انتخاب‌شده هم سمت چپ.

## Accessibility

با کلیدهای بالا و پایین بین گزینه‌ها جابه‌جا میشه و Enter انتخاب می‌کنه؛ Esc منو رو می‌بنده. گزینهٔ فعال با حلقهٔ focus-visible دوپیکسلی، offset چهارپیکسلی و هالهٔ semantic رنگ Norato مشخص می‌شود.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-yellow` برای open/selected و تأکید اصلی، `--norato-color-brand-blue` برای معناهای اطلاعاتی، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

قاب نمونه از `--norato-select-preview-frame-inline-size`، `--norato-select-preview-frame-mobile-inline-size`، `--norato-select-preview-frame-block-size` و `--norato-select-preview-frame-radius` استفاده می‌کند؛ رنگ شیشه/نقطه/هاله و ارتفاع کنترل از توکن‌های عمومی Norato می‌آیند. روی viewport عریض، اندازهٔ قاب ممکن است به ستون محتوای صفحه محدود شود.
