# List — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت Norato:** Implemented؛ DoD مرورگری ادامه دارد.

## Preview

پیش‌نمایش ایستا و غیرفعال در قاب هم‌اندازهٔ دیگر کامپوننت‌ها، سه ردیف راست‌چین را نشان می‌دهد: اعلان با سوییچ، زبان با مقدار و فلش، و حساب کاربری با آواتار. این نمونه کنترل زنده ندارد.

## Overview

`NoratoList` یک فهرست Vue ترکیبی است. `NoratoListItem` ردیف‌های مستقل و `NoratoListGroup` عنوان‌دارکردن گروه‌ها را فراهم می‌کنند. ردیف‌ها می‌توانند متنی، پیوند، دکمهٔ انتخاب‌پذیر، چک‌باکس یا سوییچ باشند. مقدار، گروه، آیکن/آواتار و رفتار انتخاب را برنامهٔ میزبان کنترل می‌کند.

## Anatomy

- **Leading:** slot آیکن/آواتار یا کنترل انتخاب
- **Title:** عنوان کوتاه ردیف
- **Description:** توضیح اختیاری با حداکثر دو خط
- **Trailing:** مقدار، Badge، slot سفارشی، chevron یا سوییچ
- **Group label:** عنوان اختیاری گروه با فهرست تو‌در‌تو

## Variants

- **Plain:** جداکنندهٔ ردیف‌ها بدون قاب بیرونی
- **Inset:** سطح کارت با جداکننده‌های داخلی
- **Grouped:** گروه‌های عنوان‌دار در کارت‌های جدا
- **Item action:** `none`, `link`, `button`, `checkbox`, `switch`
- **Leading:** `none`, `icon`, `avatar`; آیکن و آواتار محصول با slot `leading` داده می‌شوند.

## Sizes

اندازهٔ مستقل برای ردیف در قرارداد ثبت نشده و محور variant محسوب نمی‌شود. ارتفاع بر اساس محتوا است؛ هدف تعاملی حداقل ۴۸px باقی می‌ماند. توضیح از دو خط بلندتر نمایش داده نمی‌شود تا ردیف کش نیاید.

## States

- **Default:** سطح عادی و متن اصلی
- **Hover:** پس‌زمینهٔ زرد بسیار ملایم فقط برای ردیف قابل‌تعامل
- **Selected:** سطح زرد ملایم؛ در دکمهٔ انتخاب‌پذیر با `aria-pressed`، در لینک جاری با `aria-current="page"` و در چک‌باکس با وضعیت بومی اعلام می‌شود.
- **Disabled:** دکمه/چک‌باکس/سوییچ غیرفعال واقعی؛ پیوند غیرفعال به محتوای غیرقابل‌تمرکز تبدیل می‌شود.
- **Focus:** حلقهٔ واضح ۲px زرد با offset توکن‌شده

## Parts

- **Container:** `NoratoList` با `label`, `variant`, `dir`
- **Group:** `NoratoListGroup` با `id`, `label`, `dir`
- **Item:** `NoratoListItem` با `id`, `title`, `description`, `action`, `leading`, `href`, `value`, `badge`, `chevron`, `modelValue`, `selected`, `selectable`, `disabled`, `dir`
- **Events:** `activate(MouseEvent)` برای link/button و `update:modelValue(boolean)` برای checkbox/switch
- **Slots:** `leading` و `trailing`; slotهای قابل‌تعامل نباید درون ردیف button/link تودرتو شوند.
- **RTL:** در `dir="rtl"` leading در سمت راست و value/chevron/switch در سمت چپ است. `dir="ltr"` همین ارتباط منطقی را حفظ می‌کند.
- **Reduced motion:** تغییرات کنترل‌ها در `prefers-reduced-motion` بدون transition هستند.

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NoratoList, NoratoListGroup, NoratoListItem } from '@norato/vue'

const notifications = ref(true)
const weeklySummary = ref(false)
</script>

<template>
  <NoratoList label="تنظیمات حساب" variant="grouped" dir="rtl">
    <NoratoListGroup id="account" label="حساب کاربری">
      <NoratoListItem id="notifications" title="اعلان‌ها" description="پیام‌ها و یادآورها" action="switch" v-model="notifications">
        <template #leading><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg></template>
      </NoratoListItem>
    </NoratoListGroup>
    <NoratoListGroup id="preferences" label="ترجیحات">
      <NoratoListItem id="weekly" title="گزارش هفتگی" action="checkbox" leading="none" v-model="weeklySummary" />
    </NoratoListGroup>
  </NoratoList>
</template>
```

برای `action="link"` مقدار `href` بده؛ برای دکمهٔ قابل‌انتخاب `selectable` و مقدار `selected` را از میزبان کنترل کن. checkbox و switch از `v-model` پشتیبانی می‌کنند.

## Accessibility

ساختار بومی `ul`/`li` و گروه‌بندی تو‌در‌تو به‌کار می‌رود. دکمه، پیوند و checkbox اسم خود را از عنوان می‌گیرند و توضیح از `aria-describedby` پیوند دارد. سوییچ دکمهٔ `role="switch"` با `aria-checked`, `aria-labelledby` و وضعیت disabled بومی است. تمام هدف‌های تعاملی حداقل ۴۸px، حلقهٔ focus زرد ۲px، و جهت صفحه با `dir` مشخص است. رنگ تنها حامل وضعیت انتخاب نیست.

## Tokens

**توکن‌های معنایی Norato:** `--norato-color-surface-default`, `--norato-color-surface-subtle`, `--norato-color-text-primary`, `--norato-color-text-secondary`, `--norato-color-brand-yellow`, `--norato-color-border-default`, `--norato-color-focus-ring` و توکن‌های فاصله، آواتار، اندازهٔ سوییچ و شعاع. Accent آبی در کنترل List استفاده نمی‌شود.
