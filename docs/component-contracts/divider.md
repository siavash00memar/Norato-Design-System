# Divider — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت نوراتو:** Implemented

## Preview

نمونهٔ ابتدای صفحه فقط ظاهر را نشان می‌دهد و inert است. قاب آن با Button و Split Button هم‌تراز است: حداکثر عرض ۶۴۰px، سقف عرض موبایل ۳۲۰px، ارتفاع ۲۸۸px، شعاع ۲۴px و پس‌زمینهٔ شیشه‌ای نقطه‌دار. نمونهٔ Default یک Divider افقی با برچسب «یا» در مرکز و خط ظریف border-default است؛ پهنای Rule نمونه حداکثر ۴۰۰px است تا تراکم آن با Lemon هم‌خوان بماند. اندازهٔ قاب نباید به ارتفاع خود Divider منتقل شود.

## Overview

Divider خطی ۱ پیکسلی برای جداکردن دو ناحیهٔ محتواست؛ افقی یا عمودی و ساده یا دارای برچسب. این کامپوننت تعاملی نیست.

API اجرایی Vue: `NoratoDivider` با `orientation`، `type`، `spacing`، `tone`، `label` و `decorative`. مقدار پیش‌فرض به‌ترتیب `horizontal`، `line`، `8`، `subtle`، «یا» و `true` است. هیچ رویداد یا وضعیت تعاملی ندارد.

## Anatomy

- **Rule:** خط semantic با ضخامت توکن ۱px.
- **Label:** متن اختیاری بین دو Rule؛ در حالت `label-start` به ابتدای محور چیدمان می‌رود.

## Variants

۱۲ گونه از ترکیب Orientation × Type × Tone ساخته می‌شود:

- `orientation`: `horizontal` یا `vertical`.
- `type`: `line`، `label-center` یا `label-start`.
- `tone`: `subtle` یا `strong`.
- `spacing`: مقدار مستقل ۰، ۴ یا ۸ پیکسل؛ فاصله در محور عمود بر Rule اعمال می‌شود.

در RTL، آغاز افقی سمت راست است. در حالت عمودی، برچسب شروع در ابتدای محور عمودی قرار می‌گیرد و متن نمی‌چرخد.

## Sizes

محور اندازه ندارد. Rule با `--norato-border-thin` رسم می‌شود. Divider افقی تمام inline-size والد را می‌گیرد و block-size آن فقط از متن برچسب (در صورت وجود) تأثیر می‌گیرد. Divider عمودی inline-size برابر ضخامت Rule دارد و اگر والد block-size مشخص نکند، حداقل ارتفاع نمایشی ۴۸px می‌گیرد؛ این مقدار hit target نیست.

## States

حالت‌های hover، focus، disabled، loading، invalid و selected تعریف نمی‌شوند؛ Divider کنترل تعاملی نیست. Tone با `subtle` یا `strong` تعیین می‌شود.

## Parts

- **`NoratoDivider`:** adapter تک‌عنصری بر پایهٔ Reka `Separator`؛ `role=separator` و `aria-orientation` را در حالت معنایی فراهم می‌کند.
- **Rule segment:** از border-default یا border-strong استفاده می‌کند و تزئینی است.
- **Label:** با Vazirmatn و رنگ متن ثانویه نمایش داده می‌شود. در Divider معنایی، مقدار label نام دسترس‌پذیر است و متن تصویری تکراری به فناوری کمکی اعلام نمی‌شود.

## Usage

### کاربرد مناسب
- از لحن ملایم برای جداکردن گروه‌های محتوا استفاده کن.
- در فرم ورود می‌توان «یا» را وسط Divider قرار داد.
- فاصله را پیش از Dividerهای متوالی ترجیح بده؛ خط را بین هر دو عنصر نگذار.

### محدودیت‌ها
- Divider پررنگ را زیاد استفاده نکن.
- برای ایجاد فاصله از Divider استفاده نکن؛ `spacing` فقط حاشیهٔ منطقی کنترل‌شده می‌سازد.

## Accessibility

`decorative=true` پیش‌فرض است و Separator را از درخت دسترس‌پذیری مخفی می‌کند. برای جداکننده‌ای که آغاز بخش معنایی را نشان می‌دهد، `decorative=false` تنظیم کن تا Reka نقش separator و جهت را اعلام کند. در حالت برچسب‌دار، `aria-label` از مقدار `label` ساخته می‌شود.

این کامپوننت focusable نیست و حلقهٔ focus برایش تعریف نمی‌شود. اجزای تعاملی اطراف Divider باید focus و keyboard behavior خود را مستقل نگه دارند.

## Tokens

- Rule ظریف: `--norato-color-border-default`.
- Rule پررنگ: `--norato-color-border-strong`.
- ضخامت: `--norato-border-thin`.
- پهنای Rule نمونه: `--norato-divider-preview-rule-inline-size`؛ فقط برای قاب مستندات، نه adapter اجرایی.
- فاصلهٔ ۴/۸: `--norato-space-1` / `--norato-space-2`.
- Label: `--norato-font-body`، `--norato-type-body-regular-size` و `--norato-color-text-secondary`.

### نمونهٔ تعاملی و API

در playground، جهت، نوع، لحن، فاصله، متن، حالت تزئینی و جهت نوشتار قابل تغییر است. نمونهٔ اجرایی از همان `NoratoDivider` عمومی استفاده می‌کند و کد Vue قابل کپی را نشان می‌دهد.
