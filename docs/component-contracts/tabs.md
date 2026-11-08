# Tabs — قرارداد کامپوننت نوراتو

**حوزه:** Navigation  
**وضعیت نوراتو:** Adapted

## Preview

نمونهٔ بالا مستقل و inert است؛ تغییر انتخاب را در playground اجرایی انجام بده.

## Overview

Tabs جابه‌جایی میان بخش‌های هم‌سطح یک صفحه را فراهم می‌کند. مرجع طراحی چهار جزء و ۳۹ گونه را ثبت کرده است: Tabs با ۹ ترکیب و Tab Item با ۳۰ حالت. Norato دو سبک Line و Soft، سه اندازه و دو جهت را پشتیبانی می‌کند.

## Anatomy

- **Tab List:** ظرف معنایی tablist با فوکوس چرخشی.
- **Tab Trigger:** گزینهٔ انتخاب‌شدنی با value یکتا، برچسب و محتوای اختیاری.
- **Indicator:** خط زیرین آبی در Line یا سطح آبی روشن در Soft.
- **Count / Icon:** تزئین اختیاری؛ آیکن در سمت راست و شمارنده کنار متن.
- **Tab Panel:** محتوای متناظر که با trigger از طریق value پیوند دارد.

## Variants

- Style: Line, Soft.
- Size: Small, Medium, Large.
- Orientation: Horizontal, Vertical.
- Tab state: Default, Hover, Selected, Disabled, Focus.

## Sizes

هر سه اندازه، target حداقل 48px را حفظ می‌کنند؛ اندازهٔ متن و فاصله تغییر می‌کند، نه target تعاملی.

## States

تب منتخب با `aria-selected` و نشان بصری مشخص می‌شود. تب غیرفعال از pointer و صفحه‌کلید کنار گذاشته می‌شود. focus-visible حلقهٔ دوپیکسلی Norato و halo توکنی دارد. پنل فعال با trigger منتخب نمایش داده می‌شود.

## Parts

ترتیب RTL: آیکن، عنوان، شمارنده. حالت افقی در بالا و حالت عمودی در inline-end قرار می‌گیرد. لیست در عرض باریک پیمایش افقی دارد و خود تب‌ها فشرده یا کشیده نمی‌شوند.

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NoratoTabs, type NoratoTab } from '@norato/vue'
const selected = ref('all')
const tabs: NoratoTab[] = [
  { value: 'all', label: 'همه', count: 12, content: 'همهٔ پروژه‌ها' },
  { value: 'active', label: 'فعال', content: 'پروژه‌های فعال' },
]
</script>
<template><NoratoTabs id="projects-tabs" v-model="selected" label="پروژه‌ها" :tabs="tabs" /></template>
```

### راهنمای کاربرد Norato

- برچسب‌ها کوتاه و محتوای پنل‌ها هم‌سطح و مرتبط باشند.
- برای مراحل پشت‌سرهم از Stepper استفاده کن.
- برای انتخاب یک مقدار بدون محتوای وابسته، Segmented Control مناسب‌تر است.

## Accessibility

بر پایهٔ Reka Tabs: نقش‌های tablist/tab/tabpanel، اتصال شناسهٔ پنل و trigger، roving tabindex و فعال‌سازی خودکار/دستی. پیش‌فرض جهت افقی و فعال‌سازی خودکار است. کلیدهای جهت با `dir="rtl"` جهت دیداری راست‌به‌چپ را دنبال می‌کنند؛ جهت عمودی از بالا/پایین استفاده می‌کند. حلقه در انتهای فهرست برقرار است. محتوای غیرفعال mount می‌ماند تا مقدار کنترل‌شدهٔ آن از دست نرود.

## Tokens

از accent زرد Norato برای active indicator و متن تیرهٔ تب فعال استفاده می‌شود؛ آبی برای لینک و معناهای اطلاعاتی می‌ماند. توکن‌های semantic شامل `--norato-color-brand-yellow`, `--norato-color-brand-blue`, `--norato-color-warning-container`, `--norato-color-border-default`, `--norato-color-text-primary`, `--norato-color-text-secondary`, `--norato-color-text-disabled`, `--norato-color-focus-contrast`, `--norato-color-focus-ring`, `--norato-control-target-min`, spacing, radius, typography and motion هستند.
