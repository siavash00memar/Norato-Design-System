# شروع استفاده از Norato

## مشاهدهٔ مستندات

فایل [index.html](./index.html) را در مرورگر باز کنید.

## اجرای اپ اصلی Vue

```bash
pnpm install
pnpm --filter @norato/vue-app dev
```

اپ اصلی و تنها سطح محصول نوراتو در `apps/vue` با Vue.js 3 قرار دارد. `apps/docs` مقصد قابلیت‌های جدید
نیست.

## ساختار پکیج‌ها

- `packages/tokens`: رنگ، تایپوگرافی، فاصله، radius و layout
- `packages/core-html`: HTML/CSS و markup پایه
- `packages/vue`: آداپترهای Vue
- `packages/components`: قراردادها و inventory کامپوننت‌ها

## کامپوننت‌های نسخهٔ 0.2.0

Field، Button، Textarea، Select، Jalali Date Picker، Checkbox Group و Radio Group.

## قواعد استفاده

همیشه CSS توکن‌های نوراتو را وارد کنید، جهت صفحه را RTL قرار دهید و از قرارداد همان کامپوننت استفاده کنید. برای خطا، پیام متنی قابل دسترس ارائه دهید؛ رنگ به‌تنهایی کافی نیست.

## اعتبارسنجی محلی

```bash
pnpm install
pnpm check:tokens
pnpm exec tsc --noEmit
```
