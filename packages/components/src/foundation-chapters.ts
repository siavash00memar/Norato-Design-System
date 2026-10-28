export type FoundationChapter = {
  id: string
  title: string
  description: string
}

/** Canonical Foundation navigation and overview content, ordered by stable chapter ID. */
export const foundationChapters = [
  { id: '00', title: 'راهنما و وضعیت استخراج', description: 'حدود منبع، وضعیت بازبینی و روش خواندن اسناد.' },
  { id: '01', title: 'رنگ‌های برند و رابط', description: 'رنگ زرد و آبی برند، سطوح معنایی مشاهده‌شده و اختلاف‌های رنگ.' },
  { id: '02', title: 'تایپوگرافی؛ دو مقیاس، یک زبان', description: 'اندازه‌ها و نقش‌های قلم مشاهده‌شده، با نگاشت تایپوگرافی نوراتو.' },
  { id: '03', title: 'فاصله‌گذاری و اندازه‌ها', description: 'مقادیر مستندشده برای فاصله و ابعاد کنترل‌ها.' },
  { id: '04', title: 'گوشه‌ها و خطوط', description: 'شعاع‌ها و دورخط‌های نمونه‌های رابط.' },
  { id: '05', title: 'عمق، سایه و لایه‌بندی', description: 'سایه‌های بیرونی و داخلی ثبت‌شده.' },
  { id: '06', title: 'دکمه‌ها و پیوندها', description: 'سطح تأکید، پیوندها و حرکت در فرم.' },
  { id: '07', title: 'ورودی‌ها و انتخاب', description: 'فیلد، جست‌وجو، برچسب، انتخاب‌گرها و رتبه.' },
  { id: '08', title: 'ناوبری و پیشرفت', description: 'نوار ناوبری، گام‌ها و بازخورد پیشرفت.' },
  { id: '09', title: 'کارت‌ها، فهرست و جدول', description: 'نمونه‌های داده و سطوح نمایش.' },
  { id: '10', title: 'پیام‌ها، مودال و بازخورد', description: 'وضعیت ارتباط، پیام‌ها و تعامل بازخورد.' },
  { id: '11', title: 'الگوهای فرم، خرید و چیدمان راست‌به‌چپ', description: 'الگوهای ترکیبی و قواعد انطباق‌پذیری RTL.' },
  { id: '12', title: 'حالت‌ها و دسترس‌پذیری', description: 'ماتریس حالت‌ها و نکته‌های قابل آزمون.' },
  { id: '13', title: 'نام‌گذاری، ارجاع و نگهداشت', description: 'نگاشت نقش به توکن و روش ثبت تصمیم‌ها.' },
] as const satisfies readonly FoundationChapter[]

/** Overview cards derive from the same chapter source as the Foundation page. */
export const foundationOverviewCards = foundationChapters.filter(chapter => chapter.id !== '00')
