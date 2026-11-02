# Range — قرارداد کامپوننت نوراتو

**حوزه:** Forms & Inputs  
**وضعیت نوراتو:** Implemented — adapter، رفتار و ماتریس DoD دسکتاپ/موبایل بررسی شدند

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ یک اسلایدر فشرده با مقدار بالای thumb، Default marker، قاب dotted-glass و پرشدن از راست. آزمایش زندهٔ single/range پایین صفحه کنترل می‌شود.

## Overview

قرارداد طراحی Norato: انتخاب یه مقدار یا یه بازه با کشیدن دستگیره. با برچسب، مقدار روی دستگیره و حداقل و حداکثر.

## Anatomy

- **Label Row** — برچسب و مقدار فعلی
- **Track** — نوار کامل
- **Fill** — بخش انتخاب‌شده
- **Thumb** — دستگیره‌ی قابل کشیدن
- **Min / Max** — حداقل و حداکثر زیر نوار

## Variants

- **Range Input (8 variant):** Type: Single، Range؛ Size: Small، Medium؛ State: Default، Disabled
- **Slider Thumb (10 variant):** Size: Small، Medium؛ State: Default، Hover، Pressed، Disabled، Focus

## Sizes

- **Range Input:** Small، Medium
- **Slider Thumb:** Small، Medium

## States

- **Range Input:** Default، Disabled
- **Slider Thumb:** Default، Hover، Pressed، Disabled، Focus

## Parts

- **Range Input — 8 variant:** اسلایدر تک‌مقداری یا بازه‌ای. ابعاد/حالت‌ها: Type: Single، Range؛ Size: Small، Medium؛ State: Default، Disabled
- **Slider Thumb — 10 variant:** دستگیره‌ی سفید با حلقه‌ی مشکی. ابعاد/حالت‌ها: Size: Small، Medium؛ State: Default، Hover، Pressed، Disabled، Focus

## Usage

### راهنمای کاربرد Norato

- مقدار فعلی رو همیشه به‌صورت عدد هم نشون بده.
- وقتی مقدار دقیق مهم نیست و حدودی کافیه ازش استفاده کن.

### محدودیت‌های کاربرد

- برای مقدارهای دقیق مثل مبلغ پرداخت فقط اسلایدر نذار؛ Number Input هم کنارش بذار.
- بازه‌ی خیلی بزرگ با قدم‌های ریز نساز؛ کشیدنش سخت میشه.

### جهت RTL

حداقل سمت راسته و نوار از راست به چپ پر میشه.

## Accessibility

`NoratoRange` با `id`، `label`، `modelValue`، `min`، `max`، `step`، `type`، `size`، `disabled`، `error`، `minLabel` و `maxLabel` مقدار تکی یا tuple دو عضوی را می‌پذیرد و `update:modelValue` با همان شکل منتشر می‌کند. Reka Slider برای pointer و keyboard استفاده می‌شود؛ حداقل در RTL سمت راست است و fill به سمت چپ رشد می‌کند. هر thumb هدف ۴۸px دارد.

با کلیدهای جهت مقدار قدم‌به‌قدم تغییر می‌کنه. `Home` و `End` به min و max می‌روند؛ هر thumb نام، min/max/current value دارد و خطا با `aria-describedby` متصل است.

### قاعدهٔ عمومی Focus در Norato

برای Range، هدف تعاملی thumb همچنان ۴۸px است؛ کادر فوکوس تیرهٔ ۲ پیکسلی و هالهٔ زرد روی خود دستگیرهٔ دیداری قرار می‌گیرد تا از هدف بزرگ جدا نشود.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-surface-muted`، `--norato-color-text-primary` (حلقهٔ پیش‌فرض thumb)، `--norato-color-focus-contrast` و `--norato-color-focus-ring` (فقط حالت فوکوس)، `--norato-range-track-small-block-size`، `--norato-range-track-medium-block-size`، `--norato-range-thumb-visual-size`، `--norato-range-thumb-target-size`، `--norato-range-thumb-halo-size` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.

### Track endpoint alignment

The visual rail is inset 24px at each inline edge (`--norato-space-6`, half of the 48px thumb target) inside the full-width interactive track. The Reka fill renders inside that inset rail, keeping its endpoints centered under the visual thumb without changing pointer mapping; RTL minimum remains physically right.
