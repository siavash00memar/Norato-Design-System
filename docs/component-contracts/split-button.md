# Split Button — قرارداد کامپوننت نوراتو

**حوزه:** Actions  
**وضعیت نوراتو:** Implemented

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی یک کپسول پیوستهٔ دو‌بخشی با جداکننده است. رنگ Primary از زرد Norato می‌آید و ترکیب/نسبت اجزا از مرجع طراحی گرفته شده است. قاب ۲۸۸px ارتفاع دارد تا با preview مرجع هم‌تراز باشد؛ اندازهٔ خود کنترل به‌صورت مستقل ۳۲ تا ۵۶px است و کشیده نمی‌شود. نمونهٔ اجرایی Vue در playground پایین صفحه قرار دارد.

گالری‌های Variants، Sizes و States مانند صفحهٔ Button مستقل‌اند: شش ترکیب پایهٔ Split/Dropdown با adapter Vue، چهار اندازهٔ اجرایی و پنج حالت مستند. نمونهٔ تعاملی در بخش Vue منوی Open واقعی را اجرا می‌کند.

## Overview

قرارداد طراحی Norato: یه اکشن اصلی و کنارش یه فلش برای باز کردن منوی اکشن‌های مرتبط. وقتی یه کار پیش‌فرض داری و چند تا گزینه‌ی دیگه.

## Anatomy

- **Main Action** — بخش اصلی؛ همون Button با متن و آیکن
- **Separator** — خط ۱ پیکسلی بین دو بخش؛ گوشه‌های داخلی صاف میشن
- **Menu Toggle** — Icon Button با فلش؛ در حالت Open فلش رو به بالا میشه
- **Action Menu** — منوی اکشن‌های مرتبط، چسبیده به لبه‌ی چپ

## Variants

- **Split Button (60 variant):** Type: Primary، Secondary، Danger؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Open، Disabled، Focus
- **Dropdown Button (48 variant):** Type: Primary، Secondary، Tertiary؛ Size: Small، Medium، Large، XLarge؛ State: Default، Open، Disabled، Focus

## Sizes

- **Split Button:** Small 32px، Medium 40px، Large 48px، XLarge 56px

`size` در adapter آزمایشی چهار مقدار `small`، `medium`، `large` (پیش‌فرض) و `xlarge` دارد. ارتفاع بصری به‌ترتیب ۳۲، ۴۰، ۴۸ و ۵۶ پیکسل است؛ هدف تعاملی دو اندازهٔ اول حداقل ۴۸ پیکسل باقی می‌ماند.

## States

- **Split Button:** Default، Hover، Open، Disabled، Focus
- **Dropdown Button:** Default، Open، Disabled، Focus

## Parts

- **Split Button — 60 variant:** اکشن اصلی + دکمه‌ی فلش با یه جداکننده‌ی ۱ پیکسلی. ابعاد/حالت‌ها: Type: Primary، Secondary، Danger؛ Size: Small، Medium، Large، XLarge؛ State: Default، Hover، Open، Disabled، Focus
- **Dropdown Button — 48 variant:** دکمه‌ای که فقط منو باز می‌کنه و خودش اکشن مستقیم نداره. ابعاد/حالت‌ها: Type: Primary، Secondary، Tertiary؛ Size: Small، Medium، Large، XLarge؛ State: Default، Open، Disabled، Focus

## Usage

### راهنمای کاربرد Norato

- وقتی یه کار پیش‌فرض واضح داری و چند حالت دیگه از همون کار، ازش استفاده کن.
- اکشن پیش‌فرض رو همونی بذار که بیشتر از همه انتخاب میشه.

### محدودیت‌های کاربرد

- اکشن‌های بی‌ربط رو توی منوش جمع نکن؛ برای اونا Action Menu جدا بذار.
- وقتی اکشن پیش‌فرض نداری، Split نذار؛ Dropdown Button کافیه.

### جهت RTL

فلش منو سمت چپ دکمه قرار می‌گیره و منو زیرش، از لبه‌ی چپ باز میشه.

### Vue 3 API آزمایشی

`NoratoSplitButton` از `@norato/vue` با `id`، `label` و `items` (آرایهٔ `{ value, label, disabled? }`) استفاده می‌شود. `mode` برابر `split` یا `dropdown` است؛ `variant` برای Split شامل `primary`، `secondary` و `destructive` و برای Dropdown شامل `primary`، `secondary` و `tertiary` است. `size` چهار مقدار `small`، `medium`، `large` و `xlarge` دارد. `disabled` و `loading` هر دو اکشن را متوقف می‌کنند؛ بارگذاری spinner، `aria-busy` و حالت غیرفعال واقعی دارد. اکشن اصلی رویداد `primary-action` و انتخاب منو رویداد `select` با `value` را منتشر می‌کند. پشتیبانی slot آیکن در این API وجود ندارد.

## Accessibility

بخش اصلی و فلش دو دکمهٔ بومی و دو توقف جداگانهٔ Tab هستند؛ هر هدف حداقل ۴۸px است. فلش برچسب «گزینه‌های بیشتر»، `aria-haspopup="menu"`، `aria-expanded` و `aria-controls` دارد. ArrowDown منو را باز و اولین گزینه را متمرکز می‌کند؛ ArrowUp آخرین گزینه را می‌گیرد؛ Arrowها بین گزینه‌ها حرکت می‌کنند؛ Home/End ابتدا و انتها را می‌گیرند؛ Escape منو را می‌بندد و فوکوس را به فلش برمی‌گرداند. Tab از منو خارج می‌شود و کلیک بیرون آن را می‌بندد. اندازهٔ نمایشی Small و Medium هدف تعاملی را کوچک نمی‌کند.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-brand-yellow`، `--norato-color-status-error`، `--norato-color-surface-default`، `--norato-color-surface-muted`، `--norato-color-text-primary`، `--norato-color-text-disabled`، `--norato-color-focus-contrast`، `--norato-color-focus-ring`، `--norato-control-target-min`، توکن‌های چهار ارتفاع Split Button، فاصله و شعاع pill. قاب پیش‌نمایش از `--norato-split-button-preview-*` استفاده می‌کند؛ اندازهٔ قاب به اندازهٔ control اعمال نمی‌شود.
