# Accordion — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت نوراتو:** Implemented

## Preview

پیش‌نمایش ثابت در قاب نقطه‌دار مشترک Button قرار می‌گیرد. نمونهٔ پیش‌فرض یک پنل گروهی با سه پرسش، ردیف اول باز، عنوان فارسی در سمت راست و chevron در سمت چپ است. محتوا و رنگ‌ها Norato-owned هستند؛ این نمونه inert است و با playground اجرایی اشتباه گرفته نمی‌شود.

## Overview

Accordion محتوای ثانویه را در ردیف‌های قابل‌بازوبسته‌شدن نگه می‌دارد. `NoratoAccordion` روی primitive آکاردئون Reka ساخته شده و ظاهر گروهی/جدا، اندازه، سبک ردیف و رنگ‌های Norato را کنترل می‌کند. محتوا می‌تواند متن `content` یا slot سفارشی `#content` باشد.

## Anatomy

- **Heading:** تیتر معنایی ردیف.
- **Trigger:** دکمهٔ تمام‌عرض با عنوان و chevron؛ در RTL عنوان سمت راست و chevron سمت چپ است.
- **Content:** ناحیهٔ محتوای بازشده با ارتباط `aria-controls` و `aria-labelledby`.
- **Container:** قاب گروهی یا مجموعهٔ کارت‌های جدا.

## Variants

- **Accordion:** `layout: grouped | separated` و `size: small | medium | large | xlarge`؛ جمعاً ۸ گونه.
- **Accordion Item:** `itemStyle: card | plain`، چهار اندازه، دو حالت باز/بسته و چهار حالت Default/Hover/Disabled/Focus؛ جمعاً ۶۴ گونه.
- **Accordion Item / Custom Content:** همان ۶۴ گونه با slot محتوای سفارشی.
- **Expansion:** تک‌انتخابی پیش‌فرض؛ با `multiple` امکان بازبودن چند ردیف فعال می‌شود. `collapsible` بستن ردیف باز را تعیین می‌کند.

## Sizes

| اندازه | حداقل ارتفاع دیداری Trigger | تایپوگرافی |
| --- | --- | --- |
| Small | ۴۸px | `--norato-type-body-small-size` |
| Medium | ۵۲px | `--norato-type-body-regular-size` |
| Large | ۵۶px | `--norato-type-doc-small-size` |
| XLarge | ۶۴px | `--norato-type-doc-body-size` |

ارتفاع با محتوای چندخطی به‌صورت طبیعی رشد می‌کند و هر Trigger دست‌کم هدف تعاملی ۴۸px دارد. عرض و ارتفاع به والد یا قاب پیش‌نمایش کشیده نمی‌شوند.

## States

- **Default:** متن اصلی و chevron خنثی.
- **Hover:** پس‌زمینهٔ زرد کم‌رنگ؛ بدون آبی.
- **Focus:** حلقهٔ واضح زرد ۲px در `:focus-visible`؛ فوکوس فقط با صفحه‌کلید.
- **Disabled:** Trigger غیرفعال، رنگ متن muted و حذف از چرخهٔ Tab.
- **Expanded/Collapsed:** مقدار `aria-expanded` و محتوای region با primitive همگام است.

حالت‌های Loading، Invalid و Selected جداگانه تعریف نمی‌شوند؛ برای محتوای بارگذاری‌شونده، میزبان وضعیت را داخل slot نشان می‌دهد.

## Parts

- `NoratoAccordion`: adapter کنترل‌شده/غیرکنترل‌شده؛ `modelValue` و `update:modelValue` به شکل `string | undefined` برای single و `string[]` برای multiple؛ `undefined` یعنی هیچ ردیفی باز نیست.
- `NoratoAccordionItem`: `{ value, title, content?, disabled? }`؛ مقدارها باید یکتا و پایدار باشند.
- Trigger بومی: دکمهٔ دسترس‌پذیر با associationهای صریح و ناوبری صفحه‌کلیدی Reka.
- Content بومی: region دارای نام و `#content` با slot prop به نام `item`.

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NoratoAccordion, type NoratoAccordionItem } from '@norato/vue'

const expanded = ref<string | string[]>('shipping')
const items: NoratoAccordionItem[] = [
  { value: 'shipping', title: 'هزینهٔ ارسال چقدر است؟', content: 'هزینه پیش از ثبت سفارش نمایش داده می‌شود.' },
  { value: 'returns', title: 'چطور کالا را بازگردانم؟', content: 'در بخش سفارش‌ها درخواست بازگشت ثبت کن.' },
]
</script>

<template>
  <NoratoAccordion id="order-help" v-model="expanded" :items="items" layout="grouped" item-style="plain" size="medium" />
</template>
```

- عنوان را مستقل و قابل‌فهم بنویس و محتوای اصلی را پنهان نکن.
- در single mode، برای بسته‌شدن آخرین آیتم `collapsible` را فعال کن؛ این مقدار پیش‌فرض است.
- برای اجازه‌دادن به چند ردیف باز، `multiple` را فعال و مقدار controlled را از نوع آرایه نگه دار.
- آکاردئون تودرتو نساز.

## Accessibility

- هر عنوان داخل heading قرار می‌گیرد و Trigger یک button بومی با `aria-expanded`، `aria-controls` و disabled semantics است. شناسهٔ region پایدار است.
- محتوا با `role="region"` به Trigger همان ردیف نام‌گذاری می‌شود.
- ArrowUp/ArrowDown بین Triggerها جابه‌جا می‌شود؛ Home/End ابتدا و انتهای گروه را هدف می‌گیرد. Enter و Space وضعیت را تغییر می‌دهند. `dir="rtl"` به primitive ارسال می‌شود.
- محتوای بسته در accessibility tree و Tab order پنهان می‌ماند. subtreeهای بسته mount باقی می‌مانند تا state فرزندان از بین نرود.
- Focus ring زرد ۲px است؛ کاهش حرکت سیستم، حرکت chevron و گذار hover را حذف می‌کند.

## Tokens

- رنگ: `--norato-color-surface-default`، `--norato-color-glass-surface-strong`، `--norato-color-glass-line`، `--norato-color-border-default`، `--norato-color-text-primary`، `--norato-color-text-secondary`، `--norato-color-text-disabled`، `--norato-color-warning-container`، `--norato-color-brand-yellow`.
- اندازه و فاصله: `--norato-control-target-min`، `--norato-space-1`، `--norato-space-2`، `--norato-space-3`، `--norato-space-4`، `--norato-radius-card`، `--norato-icon-sm`.
- تایپوگرافی و motion: توکن‌های `NoratoAccordion` در جدول Sizes و `--norato-motion-duration-press`، `--norato-motion-ease-out`.
- پیش‌نمایش: `--norato-accordion-preview-inline-size`؛ فقط اندازهٔ قاب نمونه را تعیین می‌کند، نه اندازهٔ adapter اجرایی.
