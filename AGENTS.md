# Norato Design System Agent Rules

این فایل قانون اجرایی اجباری برای تمام تغییرات آینده در این پروژه است. هر عامل یا توسعه‌دهنده‌ای که روی این مخزن کار می‌کند باید این قوانین را رعایت کند.

## منبع مرجع

- فایل `docs/norato-design-system.md` مرجع رسمی تمام اعداد، فاصله‌ها، رنگ‌ها، اندازه‌ها و رفتار کامپوننت‌ها است.
- Figma مرجع بصری است.
- اگر اعداد Figma با Guideline متفاوت بودند، Guideline اولویت دارد.
- هیچ فاصله، padding، radius، ارتفاع، رنگ یا اندازه آیکنی نباید از روی تصویر حدس زده شود.

## قوانین طراحی و پیاده‌سازی

- قبل از ساخت کامپوننت جدید، کامپوننت‌های shared موجود باید بررسی و در صورت امکان استفاده شوند.
- ساخت نسخه page-specific از `Button`، `Field`، `Tag` و کنترل‌های مشترک ممنوع است.
- استفاده از مقادیر arbitrary در Tailwind ممنوع است، مگر وقتی مقدار دقیقاً در Guideline تایید شده باشد.
- استفاده از رنگ hex خام داخل کامپوننت‌ها و صفحات ممنوع است و باید از token استفاده شود.
- RTL حالت پیش‌فرض تمام رابط فارسی است.
- نصب پکیج جدید بدون درخواست صریح ممنوع است.

## رنگ‌های تاییدشده

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

## فونت‌ها

- Title، Label و Button: `Estedad`
- Body، Input، Placeholder و Description: `Vazirmatn`

## فاصله‌های layout

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

## فاصله‌های داخلی کامپوننت

فقط این مقادیر برای spacing داخلی مجاز هستند:

- `6px`
- `8px`
- `12px`
- `16px`
- `18px`
- `24px`
- `36px`

## قوانین دقیق فاصله

- Padding کناره صفحه موبایل: `18px`
- فاصله Label با Field زیر آن: `8px`
- فاصله Label با Field روبه‌رو در حالت Compact: `6px`
- فاصله Label با Field روبه‌رو در حالت Comfortable: `12px`
- Padding داخلی Text Box و سکشن جداکننده: `12px` از همه جهات
- فاصله پیش‌فرض عناصر داخل Field Section: `12px`

## Radius

- Card، Container و Section: `12px`
- Button، Input، Search و کنترل Pill: `25px`

## ارتفاع‌ها

- ارتفاع استاندارد کنترل‌ها: `36px`
- ارتفاع Tag: `22px`

## آیکن‌ها

- Standard: `24px`
- Small: `18px`

## قرارداد Button

- تمام دکمه‌های استاندارد باید از `NoratoButton` استفاده کنند.
- Height: `36px`
- Radius: `25px`
- Font: `Estedad`
- Font size: `13px`
- Font weight: `600`
- Horizontal padding: `16px`
- فاصله آیکن و متن: `8px`
- Icon size: `18px`
- عرض پیش‌فرض باید براساس محتوا باشد.
- عرض `100%` فقط با ویژگی صریح `fullWidth` مجاز است.

### Variantهای Button

- `primary`
  - Background: `#FDC101`
  - Text: `#1A1A1A`
  - بدون border

- `secondary`
  - Background: `transparent`
  - Text: `#1A1A1A`
  - Border: `2px solid #FDC101`

- `inverse`
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

## قرارداد Input

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

- Default
  - Background: `#FFFFFF`
  - Border: `#E8E8E8`

- Focus
  - Border: `#FDC101`
  - Focus ring زرد

- Filled
  - ظاهر Default
  - متن `13px` با رنگ `#1A1A1A`

- Error
  - Border و Helper Text با رنگ Error

- Disabled
  - Background: `#F7F7F7`
  - Text: `#A1A1A1`
  - Cursor: `not-allowed`
