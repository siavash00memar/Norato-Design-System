# Spinner — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**بلوغ:** Adapted؛ مرور کامل DoD ادامه دارد.

## Preview

نمونهٔ غیرفعال Ring با اندازهٔ ۴۸px در قاب نقطه‌ای هم‌اندازهٔ Button نمایش داده می‌شود؛ اندازهٔ دیداری حلقه به‌دلیل حاشیهٔ داخلی SVG نزدیک ۴۱px است. Playground پایین صفحه مستقل و اجرایی است.

## Overview

Spinner برای انتظار کوتاه با مدت نامعلوم استفاده می‌شود. سه فرم Ring، Dots و Norato دارد. Loader الگوهای Inline، Refresh، Overlay و Page را با متن وضعیت محلی ترکیب می‌کند.

## Anatomy

- **Track:** حلقهٔ پس‌زمینهٔ خنثی در فرم Ring و Norato.
- **Arc:** قوس متحرک؛ Ring حدود ۳۰٪ و Norato حدود ۴۵٪ محیط.
- **Dots:** سه نقطه که به‌ترتیب تغییر شدت می‌دهند.
- **Label:** متن خوانا و اختیاری برای توضیح انتظار.

## Variants

- Spinner `type`: `ring`، `dots`، `norato`.
- Spinner/Loader `tone`: `default`، `subtle`، `inverse`.
- Spinner/Loader `size`: ۱۶، ۲۰، ۲۴، ۳۲ یا ۴۸ پیکسل.
- Loader `type`: `inline`، `refresh`، `overlay`، `page`.
- مجموعهٔ Spinner شامل ۴۵ ترکیب است؛ Loader چهار الگوی چیدمان دارد.

## Sizes

اندازه‌ها ذاتی و مربع‌اند؛ هیچ‌گاه در یک محور کشیده نمی‌شوند. Loader اندازهٔ نشانگر فرزند را حفظ می‌کند.

## States

- Spinner صرفاً نمایشی و `aria-hidden` است؛ focus نمی‌گیرد.
- Loader با `active=true` رندر می‌شود و در `active=false` حذف می‌شود.
- `tone=default` از زرد برند Norato استفاده می‌کند؛ `subtle` از رنگ متن ثانویه و `inverse` از متن روشن مناسب سطح تیره.
- کاهش حرکت سیستم، انیمیشن را تقریباً متوقف می‌کند ولی نشانگر را پنهان نمی‌کند.

## Parts

- `NoratoSpinner`: نشانگر مستقل با `type`، `tone` و `size`.
- `NoratoLoader`: وضعیت با `type`، `active`، `label`، `spinnerType`، `tone`، `size` و `dir`؛ `dir` به‌صورت پیش‌فرض `rtl` است.
- برای Loader Overlay، والد باید موقعیت‌دهی‌شده باشد تا لایه در محدودهٔ همان والد قرار بگیرد. Page نسبت به viewport ثابت است. هیچ‌کدام focus trap یا پوشش تعاملی ایجاد نمی‌کنند.

## Usage

- برای انتظار چندثانیه‌ای یا کوتاه‌تر از Spinner استفاده کن.
- روی سطح تیره `tone="inverse"` را انتخاب کن.
- وقتی شکل محتوا مشخص است از Skeleton استفاده کن.
- چند Spinner را هم‌زمان در یک صفحه نشان نده.
- نمونهٔ Vue:

```vue
<script setup lang="ts">
import { NoratoLoader } from '@norato/vue'
</script>

<template>
  <NoratoLoader type="inline" spinner-type="norato" label="در حال بارگذاری" />
</template>
```

## Accessibility

Loader با `role="status"` و `aria-live="polite"` برچسب فارسی پیش‌فرض «در حال بارگذاری» را یک‌بار اعلام می‌کند؛ متن سفارشی را با `label` بده. خود نشانگر تزئینی است تا اعلان تکراری ایجاد نکند. Loader عنصر تعاملی نیست و نشانگر focus نمی‌گیرد.

## Tokens

اندازه‌ها از `--norato-spinner-size-16|20|24|32|48` و ضخامت خطوط از `--norato-spinner-stroke-16|20|24|32|48`، ریتم انیمیشن از `--norato-spinner-animation-duration` و `--norato-spinner-dot-delay`، رنگ‌ها از توکن‌های `brand-yellow`، `text-secondary`، `text-on-code`، `border-default` و `border-strong` و سطح‌ها از `glass-surface-strong` استفاده می‌کنند. انیمیشن از تنظیم `prefers-reduced-motion` پیروی می‌کند.

## DoD

پاسخ اول پیاده‌سازی و نمونهٔ مرورگری ثبت شده است. DoD کامل تا بررسی ماتریس ۴۹ فرم/لحن/اندازه، چهار Loader در مرورگر، مقایسهٔ viewport یکسان با مرجع طراحی، RTL/LTR، ۳۹۰/۳۲۰ پیکسل، reduced motion و بررسی مستقل صفحه‌خوان باز می‌ماند.
