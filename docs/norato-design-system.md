# Norato Design System Reference

این فایل مرجع استفاده از کامپوننت‌های نوراتو در Vue.js + Tailwind است. منبع بصری اولیه:

https://www.figma.com/design/pX3SmBFQXYyF4OaPk77tIn/Norato-Design-Kit?node-id=1-6

## Tokens

رنگ‌ها در `tailwind.config.ts` زیر namespace `norato` تعریف شده‌اند:

- `norato.ink`: متن اصلی
- `norato.muted`: متن کم‌اهمیت
- `norato.subtle`: آیکن‌ها و متن خنثی
- `norato.line`: خط و border
- `norato.soft`: پس‌زمینه‌های نرم
- `norato.panel`: سطح سفید
- `norato.field`: زمینه‌ی فیلدها
- `norato.primary`: اکشن اصلی
- `norato.success`, `norato.danger`, `norato.warning`: حالت‌های معنایی

Radius پایه `rounded-norato` برابر ۶px است تا با فرم‌های ساده و باکس‌های فایل فیگما هماهنگ باشد.

## Components

کامپوننت‌ها در `src/components` قرار دارند و از `src/components/index.ts` export می‌شوند.

```ts
import {
  NoratoButton,
  NoratoField,
  NoratoMessage,
  NoratoProgress,
  NoratoQuestion,
  NoratoChoiceOption,
  NoratoSelector,
  NoratoTag,
  NoratoTreeSelect,
  NoratoUploadCard,
} from './components'
```

## Usage Notes

- کل UI با `dir="rtl"` طراحی شده است.
- فیلدها از `v-model` پشتیبانی می‌کنند.
- گزینه‌ها و selectorها حالت انتخاب‌شده دارند.
- `NoratoTreeSelect` داده‌ی درختی می‌گیرد و حالت باز/انتخاب را محلی مدیریت می‌کند.
- برای طراحی‌های بعدی نوراتو، همین توکن‌ها و کامپوننت‌ها باید نقطه شروع باشند.

## Run

```bash
npm install
npm run dev
```

برای build:

```bash
npm run build
```
