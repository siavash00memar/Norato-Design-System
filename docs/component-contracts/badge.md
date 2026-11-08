# Badge — قرارداد کامپوننت نوراتو

**حوزه:** Feedback & Status  
**وضعیت نوراتو:** Implemented

## Preview

نمونهٔ بصری و غیرفعال Badge روی یک لنگر ۴۸ پیکسلی در ابتدای صفحه نشان داده می‌شود؛ نمونهٔ اجرایی و قرارداد API در همان صفحه آمده‌اند.

## Overview

قرارداد طراحی Norato: نشان کوچک شمارش یا نقطهٔ «مورد جدید» روی آیکن یا آواتار. خود Badge غیرتعاملی است؛ لنگر رفتار و فوکوس خودش را دارد.

## Anatomy

- **Ring** — حلقه‌ی ۲ پیکسلی
- **Count** — عدد یا نقطه
- **Anchor** — آیکن یا آواتار زیرش

## Variants

- **Badge (16 variant):** Type: Count، Dot؛ Size: Small، Medium؛ Tone: Danger، Inverse، Neutral، Success
- Count در اندازه‌های کوچک/متوسط حداقل ۱۶/۲۰ پیکسل است؛ Dot در دو اندازه ۸/۱۰ پیکسل است. ابعاد شامل حلقهٔ ۲ پیکسلی هستند؛ Count در صورت نیاز متن، افقی رشد می‌کند و `۹۹+` بریده نمی‌شود.
- مقادیر بزرگ‌تر از `maxCount` با `99+` (یا حد تنظیم‌شده) نمایش داده می‌شوند.

## Sizes

- **Badge:** اندازهٔ حداقل Count برابر ۱۶/۲۰px و اندازهٔ ثابت Dot برابر ۸/۱۰px؛ همه با حلقهٔ بیرونی

## States

- خود Badge حالت hover/focus/disabled ندارد؛ این حالت‌ها متعلق به anchor هستند. نشانگر روی anchor کلیک‌پذیری یا فوکوس‌پذیری اضافه نمی‌کند.

## Parts

- **Badge — 16 variant:** عدد یا نقطه با حلقه‌ی ۲ پیکسلی. ابعاد/حالت‌ها: Type: Count، Dot؛ Size: Small، Medium؛ Tone: Danger، Inverse، Neutral، Success

## Usage

### راهنمای کاربرد Norato

- برای اعداد بالای ۹۹ بنویس «۹۹+».
- از Dot برای «جدید» بدون تعداد استفاده کن.
- نمونهٔ اجرایی: `NoratoBadge` از `anchorLabel`، `type`، `size`، `tone`، `count`، `maxCount` و `dir` پشتیبانی می‌کند. مقدار پیش‌فرض `maxCount` برابر ۹۹ است؛ عدد صفر هم نمایش داده می‌شود و Dot مقدار شمارش را نادیده می‌گیرد.
- لنگر در slot نام‌دار `anchor` قرار می‌گیرد. slot مقدار `accessibleName` را می‌دهد؛ آن را به `aria-label` دکمه/لینک زیرین وصل کن. در Dot، این نام عبارت «مورد جدید» می‌گیرد. `disabled` و رفتار صفحه‌کلیدی متعلق به دکمه/لینک میزبان است؛ وضعیت Badge آن را تغییر نمی‌دهد.
- رنگ‌های Danger/Success/Neutral از توکن‌های status و Inverse از سطح تیره می‌آیند؛ Badge از آبی برند استفاده نمی‌کند. Neutral از `--norato-color-status-neutral` با متن سفید استفاده می‌کند تا Dot روی سطح نمونه گم نشود.

### محدودیت‌های کاربرد

- روی همه‌چیز Badge نذار؛ اهمیتش از بین میره.
- متن طولانی توی Badge ننویس؛ Tag درسته.

### جهت RTL

در RTL روی گوشهٔ بالا-چپ و در LTR روی گوشهٔ بالا-راست قرار می‌گیرد. برای اعداد بزرگ «۹۹+» بنویس.

## Accessibility

تعداد باید در برچسب المان زیرش هم بیاد.
در adapter، متن دیداری نشانگر از فناوری کمکی پنهان است تا نام slot لنگر تنها یک بار خوانده شود. میزبان باید `accessibleName` را به لنگر متصل کند. target تعاملی لنگر نباید از ۴۸ پیکسل کوچک‌تر باشد.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-surface-code`، `--norato-color-status-error`، `--norato-color-status-success`، `--norato-color-status-neutral`، `--norato-color-text-on-code` و `--norato-badge-*` برای اندازه‌ها و قاب نمونه.
