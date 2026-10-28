# Table — قرارداد کامپوننت نوراتو

**حوزه:** Data Display  
**وضعیت نوراتو:** Proposed  

## Preview

نمونهٔ بصری و غیرفعال این خانواده در ابتدای صفحهٔ محلی نشان داده می‌شود؛ برچسب بالای صفحه بلوغ Norato را مشخص می‌کند.

## Overview

قرارداد طراحی Norato: جدول کامل با نوار ابزار، ستون‌های آماده، مرتب‌سازی، انتخاب گروهی، ردیف گسترده و صفحه‌بندی. ۱۹ نوع سلول داره.

## Anatomy

- **Toolbar** — عنوان، تعداد، جستجو و اکشن اصلی
- **Header Cell** — عنوان ستون با مرتب‌سازی
- **Select All** — چک‌باکس Indeterminate
- **Row** — ردیف داده؛ انتخاب‌شده تیره‌تر
- **Cell** — سلول با نوع محتوا
- **Footer** — صفحه‌بندی

## Variants

- **Table (3 variant):** Size: Compact، Default، Comfortable
- **Table Column (54 variant):** Type: Checkbox، User، Text، Number، Status، Tags، Progress، Avatar Group، Image، Link، Switch، Button، Input، Select، Expand، Drag، Skeleton، Actions؛ Size: Compact، Default، Comfortable
- **Table Cell (207 variant):** Type: Text، Number، User، Image، Status، Tags، Avatar Group، Progress، Link، Checkbox، Switch، Button، Actions، Input، Select، Expand، Drag، Skeleton، Empty؛ Size: Compact، Default، Comfortable؛ Align: Start، Center، End؛ State: Default، Hover، Selected
- **Table Header Cell (54 variant):** Size: Compact، Default، Comfortable؛ Align: Start، Center، End؛ Sort: None، Ascending، Descending؛ State: Default، Hover
- **Table Toolbar (2 variant):** Type: Default، Bulk Actions
- **Table Footer (3 variant):** Type: Pagination، Simple، Load More
- **Table Group Row (6 variant):** Size: Compact، Default، Comfortable؛ Expanded: true، false
- **Table Row Detail (2 variant):** Style: Default، Inset
- **Table Empty State (3 variant):** Type: No Data، No Results، Error

## Sizes

- **Table:** Compact، Default، Comfortable
- **Table Column:** Compact، Default، Comfortable
- **Table Cell:** Compact، Default، Comfortable
- **Table Header Cell:** Compact، Default، Comfortable
- **Table Group Row:** Compact، Default، Comfortable

## States

- **Table Cell:** Default، Hover، Selected
- **Table Header Cell:** Default، Hover

## Parts

- **Table — 3 variant:** جدول کامل. ابعاد/حالت‌ها: Size: Compact، Default، Comfortable
- **Table Column — 54 variant:** ستون آماده با هدر و ردیف‌ها. ابعاد/حالت‌ها: Type: Checkbox، User، Text، Number، Status، Tags، Progress، Avatar Group، Image، Link، Switch، Button، Input، Select، Expand، Drag، Skeleton، Actions؛ Size: Compact، Default، Comfortable
- **Table Cell — 207 variant:** سلول با ۱۹ نوع محتوا. ابعاد/حالت‌ها: Type: Text، Number، User، Image، Status، Tags، Avatar Group، Progress، Link، Checkbox، Switch، Button، Actions، Input، Select، Expand، Drag، Skeleton، Empty؛ Size: Compact، Default، Comfortable؛ Align: Start، Center، End؛ State: Default، Hover، Selected
- **Table Header Cell — 54 variant:** هدر ستون با مرتب‌سازی. ابعاد/حالت‌ها: Size: Compact، Default، Comfortable؛ Align: Start، Center، End؛ Sort: None، Ascending، Descending؛ State: Default، Hover
- **Table Toolbar — 2 variant:** نوار بالای جدول؛ جستجو، فیلتر و اکشن گروهی. ابعاد/حالت‌ها: Type: Default، Bulk Actions
- **Table Footer — 3 variant:** فوتر با صفحه‌بندی یا «بیشتر». ابعاد/حالت‌ها: Type: Pagination، Simple، Load More
- **Table Group Row — 6 variant:** ردیف عنوان گروه. ابعاد/حالت‌ها: Size: Compact، Default، Comfortable؛ Expanded: true، false
- **Table Row Detail — 2 variant:** جزئیات ردیف بازشده. ابعاد/حالت‌ها: Style: Default، Inset
- **Table Empty State — 3 variant:** حالت خالی جدول. ابعاد/حالت‌ها: Type: No Data، No Results، Error

## Usage

### راهنمای کاربرد Norato

- اعداد رو سمت چپ ستون و با ارقام هم‌عرض تراز کن.
- ستون اول رو مهم‌ترین شناسه بذار (اسم، عنوان).

### محدودیت‌های کاربرد

- ستون‌های زیاد رو در موبایل نشون نده؛ به لیست تبدیلش کن.
- بدون حالت خالی و بارگذاری طراحی نکن.

### جهت RTL

ستون اول سمت راسته؛ اعداد سمت چپ ستون تراز میشن.

## Accessibility

هدر ستون‌ها نقش columnheader و وضعیت مرتب‌سازی (aria-sort) دارن.

### قاعدهٔ عمومی Focus در Norato

برای اجزای تعاملی، حالت Focus با حلقهٔ ۲ پیکسلی بیرون کنترل تعریف شده است.

## Tokens

**توکن‌های semantic Norato:** `--norato-color-surface-default`، `--norato-color-text-primary`، `--norato-color-brand-blue`، `--norato-color-focus-contrast`، `--norato-color-focus-ring` و توکن‌های فاصله و شعاع تعریف‌شده برای همان کامپوننت.
