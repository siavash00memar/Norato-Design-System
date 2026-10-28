# Avatar — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: نمایش کاربر با عکس، حروف اول یا آیکن؛ از ۲۴ تا ۶۴ پیکسل، به‌همراه گروه آواتار و آواتار با اسم.

## Anatomy

- **Ring** — حلقه‌ی ۲ پیکسلی سطح
- **Body** — عکس، حروف یا آیکن
- **Status** — نقطه‌ی حضور پایین-چپ
- **Label** — اسم و توضیح

## Variants

- **Avatar (36 variant):** Type: Image، Initials، Icon؛ Size: XS، S، M، L، XL، 2XL؛ Shape: Circle، Square
- **Avatar Group (12 variant):** Size: S، M، L، XL؛ Max: 3، 4، 5
- **Avatar Label (3 variant):** Size: S، M، L
- **Avatar Status (4 variant):** Status: Online، Busy، Away، Offline

## Sizes

- Avatar: XS، S، M، L، XL و 2XL؛ بازهٔ کلی 24–64px (اندازهٔ جداگانهٔ هر نام در دادهٔ متن صفحه ارائه نشده است).

## States

- در قرارداد فعلی Norato حالت‌های مجزا برای این خانواده مشخص نشده است.

## Parts

- **Avatar — 36 variant:** آواتار در ۶ اندازه. ابعاد/حالت‌ها: Type: Image، Initials، Icon؛ Size: XS، S، M، L، XL، 2XL؛ Shape: Circle، Square
- **Avatar Group — 12 variant:** چند آواتار روی هم. ابعاد/حالت‌ها: Size: S، M، L، XL؛ Max: 3، 4، 5
- **Avatar Label — 3 variant:** آواتار با اسم و توضیح. ابعاد/حالت‌ها: Size: S، M، L
- **Avatar Status — 4 variant:** نقطه‌ی وضعیت حضور. ابعاد/حالت‌ها: Status: Online، Busy، Away، Offline

## Usage

### راهنمای کاربرد Norato

- اگه عکس نیست از حروف اول استفاده کن.
- در گروه، حداکثر ۵ نفر نشون بده.

### محدودیت‌های کاربرد

- بیشتر از دو حرف نذار.
- وضعیت حضور رو فقط با رنگ نشون نده.

### جهت RTL

در گروه، نفر اول سمت راسته و «+N» سمت چپ. نقطه‌ی وضعیت پایین-چپ.

## Accessibility

اسم کاربر باید متن جایگزین آواتار باشه.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
