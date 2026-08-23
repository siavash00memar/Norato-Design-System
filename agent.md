# Agent Usage Guide

برای کار روی نوراتو همیشه از این روند استفاده کن:

`Constitution → Specify → Clarify → Plan → Checklist → Tasks → Analyze → Implement`

هر تصمیم مهمی که مشخص نیست باید از کاربر پرسیده و در `spec.md` ثبت شود. منبع UI فایل Figma، منبع UX و accessibility متریال دیزاین، و منبع نهایی پیاده‌سازی توکن‌ها و قراردادهای نوراتو است.

کامپوننت‌ها باید RTL-first، مناسب فارسی، قابل استفاده در HTML/CSS، Vue و Next.js و مبتنی بر token باشند. برای هر تغییر، مستندات، checklist، tasks و `error-log.md` را هم بررسی کن.

قبل از تحویل، TypeScript و `pnpm check:tokens` را اجرا کن و حالت‌های focus، disabled، loading، invalid، keyboard و responsive را بررسی کن.
