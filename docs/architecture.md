# معماری نوراتو

نوراتو یک design system با سطح محصول اصلی و تنها سطح محصول Vue.js 3 است. توکن‌ها در `packages/tokens` تعریف می‌شوند، CSS و
markup مشترک در `packages/core-html` قرار دارد و آداپتر Vue مرجع اجرایی اصلی و قرارداد رفتاری سیستم است.

هر کامپوننت یک feature specification مستقل در `specs/` دارد. قرارداد عمومی، تصمیمات Clarify، برنامه، checklist، tasks و validation باید کنار همان feature نگهداری شوند.

Figma ظاهر را تعیین می‌کند؛ Material Design 3 رفتار، accessibility و responsive را؛ و Constitution فرایند و کیفیت را کنترل می‌کند.

نمونهٔ واقعی مسیر شغلی در [patterns-career-path.md](./patterns-career-path.md) ثبت شده و برای الگوهای صفحه، فاصله‌ها و ترکیب کامپوننت‌ها مرجع اجرایی است.

## اجرای سطح اصلی Vue

```bash
pnpm --filter @norato/vue-app dev
```

مسیر `apps/vue` تنها سطح اجرای محصول است.
