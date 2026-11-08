# Popover — قرارداد کامپوننت نوراتو

**حوزه:** Overlays  
**بلوغ API:** adapter اجرایی Vue روی Reka Popover؛ تکمیل DoD بصری و screen reader جداگانه سنجیده می‌شود.

## Preview

نمونهٔ ثابت و غیرتعاملی در قاب نقطه‌ای هم‌اندازهٔ پیش‌نمایش Button قرار می‌گیرد. پنل شناور، پیکان، محرک و سطح زمینه باید بدون بریدگی و کشیدگی دیده شوند. پالت و فوکوس از توکن‌های معنایی نوراتو می‌آیند.

## Overview

`NoratoPopover` پنلی کوتاه و وابسته به یک محرک را باز می‌کند. از آن برای پیوند، اقدام‌های سریع یا یک فرم کوچک استفاده کن. برای محتوای بلند، ناوبری یا جریان کاری چندمرحله‌ای از پنل دیگری استفاده شود.

## Anatomy

- **Trigger** — دکمه‌ای که پنل را باز یا بسته می‌کند.
- **Panel** — سطح شیشه‌ای با عرض حداکثر ۳۲۰px و ارتفاع محدود؛ عنوان، شرح، بدنه و footer اختیاری را در خود دارد.
- **Arrow** — پیکان متصل به پنل که جهت محرک را نشان می‌دهد.

## Variants

- **Simple** — متن کوتاه یا پیوند.
- **Actions** — متن/پیوند به‌همراه یک یا چند اقدام.
- **Form** — ورودی کوتاه و اقدام ثبت یا انصراف.
- **Placement** — `top`، `bottom`، `right` یا `left`؛ مقدار پیش‌فرض `bottom` است. در RTL هم `left` و `right` جایگاه فیزیکی را مشخص می‌کنند.
- **Align** — `start`، `center` یا `end`؛ مقدار پیش‌فرض `center` است و از `dir` پیروی می‌کند.

## Sizes

API اندازهٔ جداگانه ندارد. عرض پنل حداکثر `--norato-popover-max-inline-size` (۳۲۰px) و ارتفاع حداکثر `--norato-popover-max-block-size` (۴۸۰px) است؛ ارتفاع اجرایی همچنین به ۷۰٪ ارتفاع viewport محدود می‌شود. در موبایل فاصلهٔ امن لبه و سقف ارتفاع متناسب با viewport کم می‌شود. Reka در برخورد با لبه، سمت/تراز را جابه‌جا می‌کند.

## States

- **Closed / Open** — با `v-model:open` قابل‌کنترل است؛ مقدار پیش‌فرض بسته است.
- **Disabled** — `disabled` محرک را غیرفعال می‌کند.
- **Focus** — کنترل‌های تعاملی داخل پنل حلقهٔ فوکوس زرد نوراتو دارند.
- **Overflow** — پنل محتوای بلند را در محدودهٔ خودش پیمایش می‌دهد.
- **Modal** — `modal` به Reka واگذار می‌شود؛ پیش‌فرض `false` است. در حالت غیر modal، پیمایش و تعامل بیرون پنل مسدود نمی‌شود.

## Parts

### API

- `NoratoPopover`: لازم `id`, `title`; اختیاری `description`, `variant`, `placement`, `align`, `sideOffset`, `collisionPadding`, `modal`, `disabled`, `dir`.
- `v-model:open`: کنترل باز/بسته بودن پنل.
- `trigger`: slot لازم؛ یک دکمهٔ واقعی و نام‌دار ارائه کن. slot props: `open`, `disabled`.
- `title`, `description`: slot اختیاری برای جایگزینی متن عنوان و شرح.
- default: بدنهٔ پنل؛ slot props: `open`, `close`.
- `footer`: slot اختیاری؛ slot prop: `close`.
- events: `open-auto-focus`, `close-auto-focus` با رویداد اصلی فوکوس.

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NoratoButton, NoratoPopover } from '@norato/vue'

const open = ref(false)
</script>

<template>
  <NoratoPopover
    id="share-popover"
    v-model:open="open"
    title="لینک اشتراک"
    description="این پیوند را با دیگران به اشتراک بگذار."
    variant="simple"
    placement="bottom"
  >
    <template #trigger>
      <NoratoButton label="اشتراک‌گذاری" variant="secondary" />
    </template>
    <code dir="ltr">norato.design/share/8df</code>
  </NoratoPopover>
</template>
```

- برای تنظیم یا اقدام کوتاه نزدیک محرک از Popover استفاده کن.
- کلیک بیرون و Escape در حالت پیش‌فرض پنل را می‌بندند.
- محتوای طولانی را به Popover منتقل نکن؛ برای راهنمایی یک‌خطی Tooltip را به‌کار ببر.
- اگر `modal` را فعال می‌کنی، دلیل مسدودکردن تعامل زمینه را با کاربرد سازگار کن.
- محرک را داخل slot `trigger` قرار بده و نام قابل‌دسترسی آن را حفظ کن.

## Accessibility

- محرک باید دکمهٔ واقعی، نام قابل‌دسترسی و وضعیت `aria-expanded` درست داشته باشد؛ primitive ارتباط `aria-controls` را مدیریت می‌کند.
- پنل به‌عنوان dialog معرفی می‌شود و primitive نام آن را از محرک می‌گیرد؛ نام محرک باید کوتاه و مرتبط باشد. عنوان داخل پنل heading قابل‌پیمایش است و شرح، در صورت ارائه، به dialog وصل می‌شود.
- Escape پنل را می‌بندد و فوکوس به محرک بازمی‌گردد؛ کلیک بیرون در حالت عادی آن را می‌بندد.
- در حالت غیر modal، حرکت Tab از پنل بیرون می‌رود و زمینه قفل نمی‌شود. محتوای modal رفتار modal خود primitive را می‌گیرد.
- جایگاه و پیکان هنگام جابه‌جایی ناشی از برخورد باید به محرک اشاره کنند؛ `dir` بر تراز منطقی محتوا اثر دارد.
- تعامل صفحه‌کلید و درخت accessibility در DoD مرور می‌شوند؛ این قرارداد به‌تنهایی اجرای مستقل screen reader را اثبات نمی‌کند.

### قاعدهٔ عمومی Focus در نوراتو

فوکوس صفحه‌کلید حلقهٔ زرد و آشکار دارد و باید روی خود کنترل تعاملی دیده شود.

## Tokens

توکن‌های استفاده‌شده: `--norato-color-glass-surface-strong`، `--norato-color-glass-line`، `--norato-color-text-primary`، `--norato-color-text-secondary`، `--norato-color-focus-ring`، `--norato-layer-popover`، `--norato-popover-max-inline-size`، `--norato-popover-max-block-size`، `--norato-radius-modal`، `--norato-elevation-modal` و فاصله‌های عمومی نوراتو.
