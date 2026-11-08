# Drawer — قرارداد کامپوننت نوراتو

**حوزه:** Overlays  
**وضعیت Norato:** Implemented

## Preview

نمونهٔ غیرفعال، پنل فیلتر راست‌چین را روی محتوای صفحه و قاب نقطه‌ای هم‌اندازهٔ نمونه‌های Button نشان می‌دهد. رفتار واقعی فقط در DrawerPlayground اجرا می‌شود.

## Overview

`NoratoDrawer` پنل modal برای جزئیات، فیلتر یا فرم‌های وابسته به صفحه است. در RTL مقدار پیش‌فرض `side="right"` از سمت راست باز می‌شود. مقدار `left` سمت چپ و `bottom` برگهٔ پایین را می‌سازد. Bottom Sheet سه detent خودکار، نصف و تمام‌صفحه دارد. adapter از Dialog در Reka برای portal، focus containment، inert کردن پس‌زمینه و بازگرداندن focus استفاده می‌کند؛ ظاهر و هندسه با توکن‌های Norato است.

## Anatomy

- **Overlay:** scrim با blur که صفحهٔ پشت را از تعامل خارج می‌کند.
- **Panel:** سطح شیشه‌ای؛ پنل راست فقط گوشه‌های چپ و پنل چپ فقط گوشه‌های راست را گرد می‌کند. سمت فیزیکی پنل با `dir` جابه‌جا نمی‌شود.
- **Handle:** نشانگر تزئینی برگهٔ پایین؛ تعامل کشیدن یا تغییر detent با gesture در این نسخه ارائه نمی‌شود.
- **Header:** عنوان لازم، شرح اختیاری و دکمهٔ بستن ۴۸ پیکسلی.
- **Body:** محتوای slot با پیمایش داخلی در صورت نیاز.
- **Footer:** slot اختیاری برای اقدام‌های میزبان.

## Variants

- **Side Drawer:** `side="right" | "left"`; جایگاه فیزیکی پنل در هر دو جهت محتوا ثابت می‌ماند.
- **Bottom Sheet:** `side="bottom"` با `detent="auto" | "half" | "full"`.
- **Size:** `small | medium | large` عرض پنل کناری را تعیین می‌کند؛ برای Bottom Sheet نادیده گرفته می‌شود.
- **Dismissal:** `dismissible` بستن با Escape و pointer بیرون را کنترل می‌کند. دکمهٔ بستن صریح، در صورت نمایش، مستقل باقی می‌ماند.

## Sizes

| اندازهٔ پنل کناری | عرض بیشینه |
| --- | --- |
| Small | `--norato-drawer-width-small`، برابر ۳۲۰px |
| Medium | `--norato-drawer-width-medium`، برابر ۴۰۰px |
| Large | `--norato-drawer-width-large`، برابر ۴۸۰px |

در عرض کمتر از ۴۸۰px، پنل کناری حداکثر عرض viewport منهای ۱۶px می‌گیرد. برگهٔ پایین در حالت auto تا سقف توکنی یا ۸۰٪ ارتفاع viewport رشد می‌کند؛ half ارتفاع ۵۰٪ viewport دارد و full تا viewport منهای فاصلهٔ امن بالا می‌رود. همهٔ حالت‌ها محتوای بلند را داخل بدنه قابل پیمایش نگه می‌دارند.

## States

- **Closed / Open:** تا بازشدن، overlay یا پنل در صفحه وجود ندارد.
- **Default / Hover / Focus:** کنترل بستن و actionها از رنگ‌های semantic و حلقهٔ فوکوس زرد نوراتو استفاده می‌کنند.
- **Dismissible / Locked:** `dismissible=false` Escape و کلیک بیرون را بی‌اثر می‌کند.
- **Scrollable:** overflow محتوای طولانی در بدنهٔ پنل مدیریت می‌شود.
- **Disabled / Busy:** وضعیت عناصر داخل پنل را میزبان و کنترل‌های خودشان تعیین می‌کنند؛ Drawer API وضعیت busy عمومی تحمیل نمی‌کند.

## Parts

- `NoratoDrawer`: props لازم `id`, `title`; props اختیاری `description`, `side`, `size`, `detent`, `dismissible`, `showClose`, `closeLabel`, `dir`.
- `v-model:open` باز و بسته‌شدن کنترل‌شده را فراهم می‌کند.
- slotها: `default` برای بدنه، `title`, `description`, `footer`.
- `side`: `'right' | 'left' | 'bottom'`؛ مقدار پیش‌فرض `'right'`.
- `size`: `'small' | 'medium' | 'large'`؛ مقدار پیش‌فرض `'medium'`.
- `detent`: `'auto' | 'half' | 'full'`؛ مقدار پیش‌فرض `'auto'`.
- `dir`: `'rtl' | 'ltr'`؛ پیش‌فرض `'rtl'`.

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NoratoButton, NoratoDrawer } from '@norato/vue'

const open = ref(false)
</script>

<template>
  <NoratoButton label="نمایش فیلترها" @click="open = true" />
  <NoratoDrawer
    id="filters"
    v-model:open="open"
    title="فیلترها"
    description="نتایج را محدود کن."
    side="right"
    size="medium"
  >
    <p>فیلترهای دلخواه را اینجا قرار بده.</p>
    <template #footer><NoratoButton label="اعمال فیلتر" @click="open = false" /></template>
  </NoratoDrawer>
</template>
```

- برای کار فرعی وابسته به صفحه یا محتوای بلند از Drawer استفاده کن؛ ناوبری اصلی را تنها در آن قرار نده.
- در RTL، سمت راست پیش‌فرض است؛ اگر سمت دیگر لازم است، مقدار `side="left"` را انتخاب کن.
- در نمایش موبایل، `side="bottom"` انتخاب کن. ارتفاع و پیمایش را متناسب با حجم محتوا تنظیم کن.
- برای نمایش کوتاه و متمرکز از Modal استفاده کن؛ Drawer را آن‌قدر عریض نکن که کاربر زمینهٔ صفحه را گم کند.
- برای بستن پس از موفقیت، مقدار `open` میزبان را به‌روز کن.

## Accessibility

- نقش dialog و عنوان دسترس‌پذیر از `DialogTitle` می‌آیند؛ شرح اختیاری به `DialogDescription` متصل می‌شود.
- primitive دیالوگ فوکوس را داخل پنل نگه می‌دارد، Escape را مدیریت می‌کند، پس‌زمینه را از تعامل خارج می‌کند و بعد از بستن focus را به opener برمی‌گرداند.
- دکمهٔ بستن نام قابل‌دسترسی مستقل و هدف ۴۸×۴۸px دارد.
- در `dismissible=false` بستن از Escape و pointer بیرون مسدود است؛ میزبان همچنان می‌تواند پنل را با `v-model:open` ببندد.
- جهت محتوا با `dir` هماهنگ می‌شود. عرض و ارتفاع از viewport بیرون نمی‌زنند و بدنهٔ بلند پیمایش‌پذیر است.
- Handle فقط تزئینی است؛ در نسخهٔ فعلی کشیدن پنل یا کنترل detent با صفحه‌کلید وجود ندارد.
- بررسی مرورگر و درخت accessibility باید برای focus، dismiss، RTL/LTR و اندازهٔ موبایل انجام شود؛ این قرارداد به‌تنهایی آن بررسی‌ها را اثبات نمی‌کند.

## Tokens

توکن‌های semantic و layout: `--norato-color-surface-default`, `--norato-color-text-primary`, `--norato-color-focus-ring`, `--norato-color-scrim`, `--norato-color-glass-surface-strong`, `--norato-drawer-width-small`, `--norato-drawer-width-medium`, `--norato-drawer-width-large`, `--norato-drawer-max-block-size`, `--norato-drawer-handle-inline-size`, `--norato-drawer-handle-block-size`, `--norato-radius-modal`, `--norato-space-*` و `--norato-elevation-modal`.
