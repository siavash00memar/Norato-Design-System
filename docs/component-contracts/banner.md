# Banner — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت Norato:** Adapted؛ DoD مرورگری باز است.

## Overview

پیام تمام‌عرض پایدار برای اطلاعیه‌ای که کل سایت یا اپ را تحت تأثیر می‌گذارد. میزبان باید آن را پیش از ناوبری اصلی قرار دهد. در هر لحظه حداکثر یک Banner نمایش داده شود.

## Anatomy

- آیکن وضعیت در سمت راست در RTL (تزئینی و مخفی از فناوری کمکی)
- عنوان اختیاری و شرح پیام
- اقدام ثانویهٔ اختیاری که رویداد `action` می‌فرستد و مقصد را میزبان تعیین می‌کند
- دکمهٔ بستن اختیاری در سمت چپ

## Variants

شش لحن `info | success | warning | danger | neutral | inverse` و دو چیدمان `desktop | mobile` (۱۲ ترکیب). Danger از `role="alert"` و سایر لحن‌ها از `role="status"` استفاده می‌کنند. آیکن، عنوان و متن بر اساس لحن باقی می‌مانند.

## Sizes

عرض Banner برابر والد است؛ ارتفاع محتواست و برای متن طولانی رشد می‌کند. هدف تعاملی اقدام و بستن حداقل ۴۸ پیکسل است. زیر ۶۰۰ پیکسل ترکیب دسکتاپ نیز پیام را بالای اقدام می‌چیند.

## States

- `modelValue` اختیاری: اگر تعیین نشده باشد نمایش/بستن محلی است؛ در حالت controlled میزبان `update:modelValue` را اعمال می‌کند.
- `dismissible` پیش‌فرض true؛ با false دکمهٔ بستن حذف می‌شود.
- `action` تنها رویداد می‌فرستد و هیچ ناوبری یا side-effect ضمنی ندارد.
- hover و focus از زرد Norato استفاده می‌کنند؛ حالت disabled برای اجزای تعاملی پشتیبانی می‌شود از طریق میزبان/دکمه.

## Parts

- **01 Icon:** SVG درون‌خطی، اندازهٔ ذاتی و تزئینی
- **02 Content:** عنوان Estedad و شرح Vazirmatn با شکست خط امن
- **03 Action:** `NoratoButton` ثانویه
- **04 Close:** دکمهٔ نام‌گذاری‌شده با هدف ۴۸×۴۸

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NoratoBanner } from '@norato/vue'
const visible = ref(true)
</script>
<template>
  <NoratoBanner id="site-announcement" v-model="visible" tone="info" title="اطلاعیه" description="پیام سراسری" action-label="مشاهده" @action="openOffer" />
</template>
```

فقط برای اطلاعیهٔ سراسری از Banner استفاده کن. برای بازخورد داخل یک بخش، Alert مناسب است و برای پیام گذرا Toast. زمان‌سنج، صف و مقصد اقدام داخل کامپوننت تعریف نمی‌شود.

## Accessibility

- Banner را در DOM پیش از ناوبری اصلی قرار بده.
- پیام با نقش status یا alert خوانده می‌شود؛ برچسب لحن برای screen reader اضافه می‌شود.
- آیکن تزئینی است؛ دکمهٔ بستن نام دسترس‌پذیر فارسی دارد.
- تمام کنترل‌ها با صفحه‌کلید قابل دسترسی‌اند و focus زرد ۲ پیکسلی دارند.
- `id` یکتا برای section الزامی است.

## Tokens

از توکن‌های semantic متن، سطح، status و container برای لحن‌ها استفاده می‌شود؛ رنگ‌های برند فقط از Norato می‌آیند: `--norato-color-brand-yellow` و `--norato-color-focus-ring`. تایپوگرافی `--norato-font-heading` و `--norato-font-body` است. هیچ مقدار رنگ خام صفحه‌ای تعریف نشده.

## DoD

در ۱۲۶۵×۷۲۰، ترکیب پیش‌فرض مرجع طراحی/Norato و هر شش لحن دسکتاپ مرور شد؛ نمونهٔ inert نوراتو به متن یک‌خطی و نوار فشرده‌تر تغییر کرد. چیدمان Mobile در Neutral در ۳۹۰ و ۳۲۰ پیکسل دیده شد و رفتار اقدام، بستن کنترل‌شده/محلی، Space و focus زرد بررسی شد. پنج لحن موبایل، اندازه‌گیری دقیق overflow، تطبیق موبایل با مرجع طراحی و بازبینی مستقل screen reader باقی‌اند؛ DoD باز است.
