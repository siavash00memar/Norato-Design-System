# راهنمای طراحی سیستم نوراتو

## 1. معرفی و هدف Design System

Design System نوراتو مرجع رسمی برای ساخت رابط کاربری این پروژه است. هدف این سیستم، ایجاد یک زبان بصری یکپارچه برای تمام صفحات، فرم‌ها و کنترل‌ها در بستر `Vue 3`، `TypeScript`، `Tailwind CSS 3` و `Vite` است. این پروژه برای رابط فارسی و `RTL` طراحی شده و تمام تصمیم‌های طراحی و پیاده‌سازی باید با این فرض انجام شوند.

این سند مرجع رسمی اعداد، رنگ‌ها، فاصله‌ها، اندازه‌ها، قوانین تایپوگرافی و قرارداد پیاده‌سازی است. هر جا که بین برداشت بصری از Figma و این سند اختلاف وجود داشته باشد، این سند اولویت دارد.

## 2. ترتیب منابع و Source of Truth

ترتیب مرجع‌ها در این پروژه به صورت زیر است:

1. `docs/norato-design-system.md` مرجع رسمی تمام اعداد، فاصله‌ها، رنگ‌ها و رفتار کامپوننت‌ها است.
2. Figma مرجع بصری است.
3. اگر اعداد Figma با Guideline متفاوت بودند، Guideline اولویت دارد.

قانون مهم:

- هیچ فاصله، padding، radius، ارتفاع، رنگ یا اندازه آیکنی نباید از روی تصویر حدس زده شود.

## 3. رنگ‌ها

رنگ‌های تاییدشده در سیستم طراحی نوراتو:

- Primary: `#FDC101`
- Focus: `#FDC101`
- Secondary Interactive: `#356AE6`
- Text Primary: `#1A1A1A`
- Text Secondary: `#7D7D7D`
- Placeholder: `#A1A1A1`
- Border: `#E8E8E8`
- Surface: `#FFFFFF`
- Page Background: `#F7F7F7`
- Success: `#2EAD6B`
- Error: `#EF5A5A`

قانون focus:

- Focus همیشه باید زرد باشد.
- استفاده از آبی برای focus ممنوع است.

در پیاده‌سازی:

- استفاده از رنگ hex خام داخل کامپوننت‌ها و صفحات ممنوع است.
- تمام رنگ‌ها باید از طریق tokenهای طراحی مصرف شوند.

## 4. Typography

فونت‌های تاییدشده:

- Title، Label و Button: `Estedad`
- Body، Input، Placeholder و Description: `Vazirmatn`

قواعد تایپوگرافی مهم:

- Field Label
  - Font: `Estedad`
  - Font size: `12px`
  - Font weight: `400`
  - Color: `#1A1A1A`

- Placeholder
  - Font: `Vazirmatn`
  - Font size: `12px`
  - Font weight: `400`
  - Color: `#A1A1A1`

- متن واردشده توسط کاربر
  - Font: `Vazirmatn`
  - Font size: `13px`
  - Font weight: `400`
  - Color: `#1A1A1A`

- Button
  - Font: `Estedad`
  - Font size: `13px`
  - Font weight: `600`

## 5. Spacing

### فاصله‌های مجاز برای layout

فقط این مقادیر برای layout مجاز هستند:

- `12px`
- `16px`
- `22px`
- `24px`
- `32px`
- `36px`
- `46px`
- `56px`

این مقادیر برای فاصله کلی صفحه و سکشن نباید استفاده شوند:

- `4px`
- `8px`
- `20px`
- `40px`

### فاصله‌های داخلی کامپوننت

فقط این مقادیر برای spacing داخلی کامپوننت‌ها مجاز هستند:

- `6px`
- `8px`
- `12px`
- `16px`
- `18px`
- `24px`
- `36px`

### قوانین دقیق فاصله

- Padding کناره صفحه موبایل: `18px`
- فاصله Label با Field زیر آن: `8px`
- فاصله Label با Field روبه‌رو در حالت Compact: `6px`
- فاصله Label با Field روبه‌رو در حالت Comfortable: `12px`
- Padding داخلی Text Box و سکشن جداکننده: `12px` از همه جهات
- فاصله پیش‌فرض عناصر داخل Field Section: `12px`

## 6. Radius

مقادیر radius تاییدشده:

- Card، Container و Section: `12px`
- Button، Input، Search و کنترل Pill: `25px`

هیچ مقدار radius دیگری نباید بدون تایید رسمی به پروژه اضافه شود.

## 7. اندازه کنترل‌ها و آیکن‌ها

### ارتفاع‌ها

- ارتفاع استاندارد کنترل‌ها: `36px`
- ارتفاع Tag: `22px`

### آیکن‌ها

- Standard: `24px`
- Small: `18px`

## 8. Button

### قرارداد Button

- تمام دکمه‌های استاندارد باید از `NoratoButton` استفاده کنند.
- Height: `36px`
- Radius: `25px`
- Font: `Estedad`
- Font size: `13px`
- Font weight: `600`
- Horizontal padding: `16px`
- فاصله آیکن و متن: `8px`
- Icon size: `18px`
- عرض پیش‌فرض براساس محتوا است.
- عرض `100%` فقط با ویژگی صریح `fullWidth` مجاز است.

### Variantهای Button

#### primary

- Background: `#FDC101`
- Text: `#1A1A1A`
- بدون border

#### secondary

- Background: `transparent`
- Text: `#1A1A1A`
- Border: `2px solid #FDC101`

#### inverse

- مخصوص پس‌زمینه تیره
- Background: `transparent`
- Text: `#FDC101`
- Border: `2px solid #FDC101`

### Stateهای Button

- default
- hover
- pressed
- focus
- disabled
- loading

### Focus در Button

- Yellow ring
- Ring width: `2px`
- Ring offset: `2px`

### Disabled در Button

- Background: `#E8E8E8`
- Text: `#A1A1A1`
- بدون border
- Cursor: `not-allowed`

قانون مهم:

- رنگ hover و pressed تا زمانی که تایید نشده نباید حدس زده شود.

## 9. Input و Field

### قرارداد Input

- تمام Text Inputها باید از `NoratoField` استفاده کنند.
- Height: `36px`
- Radius: `25px`
- Border: `1px solid #E8E8E8`
- Background: `#FFFFFF`
- Horizontal padding: `12px`
- Direction: `RTL`
- Text align: `right`

### Placeholder

- Font: `Vazirmatn`
- Font size: `12px`
- Font weight: `400`
- Color: `#A1A1A1`

### متن واردشده توسط کاربر

- Font: `Vazirmatn`
- Font size: `13px`
- Font weight: `400`
- Color: `#1A1A1A`

### Field Label

- Font: `Estedad`
- Font size: `12px`
- Font weight: `400`
- Color: `#1A1A1A`

### Input دارای آیکن

- Standard icon: `24px`
- Small icon: `18px`
- فاصله آیکن از کناره: `6px`
- Padding متن از سمت مقابل: `12px`
- آیکن نباید ارتفاع Input را تغییر دهد.

### Stateهای Input

#### Default

- Background: `#FFFFFF`
- Border: `#E8E8E8`

#### Focus

- Border: `#FDC101`
- Focus ring زرد

#### Filled

- ظاهر Default
- متن `13px` با رنگ `#1A1A1A`

#### Error

- Border و Helper Text با رنگ Error

#### Disabled

- Background: `#F7F7F7`
- Text: `#A1A1A1`
- Cursor: `not-allowed`

## 10. قوانین RTL

- RTL حالت پیش‌فرض تمام رابط فارسی است.
- تمام layoutها، alignmentها و فاصله‌گذاری‌ها باید با فرض RTL طراحی شوند.
- Direction در تمام Text Inputها باید `RTL` باشد.
- Text align در تمام Text Inputها باید `right` باشد.
- هر راه‌حل LTR فقط وقتی مجاز است که نیاز عملکردی آن مشخص و تایید شده باشد.

## 11. قوانین پیاده‌سازی برای Vue و Tailwind

این پروژه با تکنولوژی‌های زیر تعریف شده است:

- Vue 3
- TypeScript
- Tailwind CSS 3
- Vite
- رابط فارسی و RTL

قوانین پیاده‌سازی:

- قبل از ساخت کامپوننت جدید، کامپوننت‌های shared موجود باید بررسی و در صورت امکان استفاده شوند.
- ساخت نسخه page-specific از `Button`، `Field`، `Tag` و کنترل‌های مشترک ممنوع است.
- استفاده از مقادیر arbitrary در Tailwind ممنوع است، مگر وقتی مقدار دقیقاً در Guideline تایید شده باشد.
- استفاده از رنگ hex خام داخل کامپوننت‌ها و صفحات ممنوع است و باید از token استفاده شود.
- نصب پکیج جدید بدون درخواست صریح ممنوع است.

## 12. موارد ممنوع

موارد زیر در این پروژه ممنوع هستند:

- حدس‌زدن spacing، padding، radius، ارتفاع، رنگ یا اندازه آیکن از روی تصویر
- استفاده از آبی برای focus
- استفاده از رنگ hex خام داخل کامپوننت‌ها و صفحات
- استفاده از مقادیر arbitrary در Tailwind بدون تایید رسمی
- ساخت نسخه page-specific از Button، Field، Tag یا کنترل‌های shared
- استفاده از مقادیر `4px`، `8px`، `20px` و `40px` برای فاصله کلی صفحه و سکشن
- نصب پکیج جدید بدون درخواست صریح

## 13. چک‌لیست بررسی قبل از Commit

قبل از هر commit این موارد باید بررسی شوند:

- آیا تمام اعداد از `docs/norato-design-system.md` گرفته شده‌اند؟
- آیا برای هیچ spacing، radius، color یا icon size حدس زده نشده است؟
- آیا به جای ساخت نسخه جدید، از shared component موجود استفاده شده است؟
- آیا RTL در تمام بخش‌های فارسی رعایت شده است؟
- آیا برای focus فقط از زرد استفاده شده است؟
- آیا در کامپوننت‌ها و صفحات از token استفاده شده و hex خام وارد نشده است؟
- آیا از مقدار arbitrary در Tailwind فقط در صورت تایید صریح استفاده شده است؟
- آیا ارتفاع کنترل‌ها `36px` و ارتفاع Tag برابر `22px` است؟
- آیا Buttonها فقط از `NoratoButton` و Text Inputها فقط از `NoratoField` استفاده می‌کنند؟
- آیا هیچ پکیج جدیدی بدون درخواست صریح اضافه نشده است؟
