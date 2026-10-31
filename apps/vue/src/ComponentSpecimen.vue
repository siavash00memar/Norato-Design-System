<script setup lang="ts">
import './component-specimen.css'
import { NoratoButton, NoratoChoiceGroup, NoratoField, NoratoSelect } from '@norato/vue'
defineProps<{ name: string; compact?: boolean }>()
const topicOptions = [{ value: 'design', label: 'طراحی محصول' }, { value: 'research', label: 'پژوهش کاربر' }, { value: 'disabled', label: 'گزینهٔ غیرفعال', disabled: true }]
const planOptions = [{ value: 'monthly', label: 'ماهانه' }, { value: 'yearly', label: 'سالانه' }, { value: 'disabled', label: 'گزینهٔ غیرفعال', disabled: true }]
</script>

<template>
  <div class="component-sample" :class="{ compact, 'sample-button-specimen': name==='Button' }" aria-hidden="true" inert>
    <div v-if="name==='Button'" class="sample-button-row"><NoratoButton label="اصلی" variant="primary" /><NoratoButton label="جایگزین" variant="secondary" /><span class="sample-button-cancel">انصراف</span></div>
    <div v-else-if="name==='Split Button'" class="sample-split"><NoratoButton label="ذخیره" /><NoratoButton label="⌄" icon-only accessible-label="گزینه‌های بیشتر" /></div>
    <div v-else-if="name==='Input'" class="sample-form-controls sample-input-specimen"><NoratoField id="specimen-email" label="ایمیل" placeholder="name@example.com" helper-text="ایمیل کاری‌ات را وارد کن." dir="ltr" /></div>
    <div v-else-if="name==='Select'" class="sample-form-controls sample-input-specimen"><NoratoSelect id="specimen-city" label="شهر" model-value="tehran" :options="[{value:'tehran',label:'تهران'},{value:'shiraz',label:'شیراز'},{value:'disabled',label:'گزینهٔ غیرفعال',disabled:true}]" /></div>
    <div v-else-if="name==='Combobox'" class="sample-combo"><input class="doc-input" value="طرا" aria-label="جست‌وجوی گزینه" /><div class="sample-options"><span>طراحی رابط کاربری</span><b>طراحی محصول</b></div></div>
    <div v-else-if="name==='Checkbox'" class="sample-form-controls"><NoratoChoiceGroup kind="checkbox" id="specimen-topics" label="موضوع‌های موردعلاقه" :options="topicOptions" :selected="['design']" /><NoratoChoiceGroup kind="checkbox" id="specimen-required-topics" label="انتخاب موضوع" :options="topicOptions.slice(0,2)" error-text="حداقل یک موضوع انتخاب کنید." /></div>
    <div v-else-if="name==='Radio Button'" class="sample-form-controls"><NoratoChoiceGroup kind="radio" id="specimen-plan" label="دورهٔ اشتراک" :options="planOptions" :selected="['monthly']" /><NoratoChoiceGroup kind="radio" id="specimen-required-plan" label="انتخاب دوره" :options="planOptions.slice(0,2)" error-text="یک دوره انتخاب کنید." /></div>
    <div v-else-if="name==='Switch'" class="sample-switch-row"><span><b>اعلان‌ها</b><small>پیام‌های جدید را خبر بده</small></span><button class="sample-switch" role="switch" aria-checked="true" aria-label="اعلان‌ها"><i /></button></div>
    <div v-else-if="name==='Segmented Control'" class="sample-segment"><button>روزانه</button><button class="active">هفتگی</button><button>ماهانه</button></div>
    <div v-else-if="name==='Range'" class="sample-range"><b>بودجهٔ ماهانه <span>۶ میلیون</span></b><input type="range" min="0" max="10" value="6" aria-label="بودجه" /><small>۰ <span>۱۰ میلیون</span></small></div>
    <div v-else-if="name==='Rating'" class="sample-rating"><strong>۴٫۵</strong><span>★ ★ ★ ★ ◐</span><small>۱۲۸ نظر</small></div>
    <div v-else-if="name==='Date Picker'" class="sample-calendar"><header><button>‹</button><b>مهر ۱۴۰۵</b><button>›</button></header><div class="calendar-days"><span v-for="d in ['ش','ی','د','س','چ','پ','ج']" :key="d">{{ d }}</span><i v-for="d in 14" :key="d" :class="{ selected: d===9 }">{{ d+1 }}</i></div></div>
    <div v-else-if="name==='Time Picker'" class="sample-time"><span>ساعت</span><b>۱۴</b><b class="selected">۳۰</b><b>۴۵</b><strong>۱۴:۳۰</strong></div>
    <div v-else-if="name==='File Upload'" class="sample-upload"><b>↑</b><strong>فایل را اینجا رها کنید</strong><small>PNG یا PDF · حداکثر ۱۰ مگابایت</small></div>
    <nav v-else-if="name==='Navbar'" class="sample-navbar"><b>نوراتو</b><span>محصولات　 قیمت‌ها　 راهنما</span><button>ورود</button></nav>
    <div v-else-if="name==='Sidebar'" class="sample-sidebar"><b>فضای کاری</b><span class="active">⌂　نمای کلی</span><span>▦　پروژه‌ها</span><span>⚙　تنظیمات</span></div>
    <div v-else-if="name==='Tabs'" class="sample-tabs"><span class="active">همه</span><span>فعال</span><span>بایگانی</span></div>
    <div v-else-if="name==='Breadcrumbs'" class="sample-crumbs"><span>خانه</span><i>‹</i><span>محصولات</span><i>‹</i><b>کفش ورزشی</b></div>
    <div v-else-if="name==='Pagination'" class="sample-pagination"><button>قبلی</button><span>۱</span><b>۲</b><span>۳</span><i>…</i><span>۱۲</span><button>بعدی</button></div>
    <div v-else-if="name==='Stepper'" class="sample-stepper"><div class="done"><i>✓</i><span>سبد خرید</span></div><div class="current"><i>۲</i><span>آدرس</span></div><div><i>۳</i><span>پرداخت</span></div><div><i>۴</i><span>تأیید</span></div></div>
    <div v-else-if="name==='Menu'" class="sample-menu"><span>✎　ویرایش</span><span>▢　کپی</span><span>↗　اشتراک‌گذاری</span><hr /><b>⌫　حذف</b></div>
    <div v-else-if="name==='Command Palette'" class="sample-command"><div>⌕　جست‌وجوی دستور… <kbd>Esc</kbd></div><span>صفحات</span><b>▦　کامپوننت‌ها <kbd>↵</kbd></b><span>اقدام‌ها</span><i>＋　ساخت پروژه</i></div>
    <div v-else-if="name==='Tree View'" class="sample-tree"><b>⌄　📁 پروژه‌ها</b><span>　⌄　📁 لمون</span><i>　　▧　README.md</i><span>　›　📁 نوراتو</span></div>
    <div v-else-if="name==='Alert'" class="sample-alert"><b>✓　تغییرات ذخیره شد</b><span>اطلاعات پروژه با موفقیت به‌روزرسانی شد.</span><button>بستن</button></div>
    <div v-else-if="name==='Banner'" class="sample-banner"><b>نسخهٔ جدید آماده است</b><span>نوراتو با قابلیت‌های تازه منتشر شد.</span><button>مشاهده</button><i>×</i></div>
    <div v-else-if="name==='Toast'" class="sample-toast"><b>✓</b><span><strong>فایل حذف شد</strong><small>report.pdf به سطل زباله رفت</small></span><button>برگردان</button></div>
    <div v-else-if="name==='Tooltip'" class="sample-tooltip"><span>دکمهٔ آیکنی　ⓘ</span><b>کپی پیوند</b></div>
    <div v-else-if="name==='Progress'" class="sample-progress"><b>بارگذاری فایل <span>۶۲٪</span></b><i><em /></i></div>
    <div v-else-if="name==='Spinner'" class="sample-spinner"><i /><span>در حال بارگذاری…</span></div>
    <div v-else-if="name==='Skeleton'" class="sample-skeleton"><i /><span><b /><b /><b /></span></div>
    <div v-else-if="name==='Empty State'" class="sample-empty"><b>▧</b><strong>هنوز پروژه‌ای نساختی</strong><span>اولین پروژه‌ات را بساز تا اینجا نمایش داده شود.</span><button class="button primary">ساخت پروژه</button></div>
    <div v-else-if="name==='Notification Center'" class="sample-notifications"><header><b>اعلان‌ها</b><a>خواندن همه</a></header><div><i>●</i><span><b>سارا روی طرحت نظر داد</b><small>۲ دقیقه پیش</small></span></div></div>
    <span v-else-if="name==='Badge'" class="sample-badge">۹۹+</span>
    <table v-else-if="name==='Table'" class="sample-table"><thead><tr><th>نام</th><th>وضعیت</th><th>پروژه</th></tr></thead><tbody><tr><td>سارا محمدی</td><td>فعال</td><td>۱۲</td></tr><tr><td>علی رضایی</td><td>مرخصی</td><td>۷</td></tr></tbody></table>
    <div v-else-if="name==='List'" class="sample-list"><div><b>◉　اعلان‌ها</b><span>‹</span></div><small>　 پیام‌ها و یادآورها</small></div>
    <article v-else-if="name==='Card'" class="sample-card"><span>راهنما · ۵ دقیقه</span><b>ساختن یک دیزاین سیستم فارسی</b><small>از توکن‌ها تا کامپوننت‌ها، قدم‌به‌قدم.</small><footer>نگار محمدی　↗</footer></article>
    <span v-else-if="name==='Tag'" class="sample-tag">●　منتشر شده</span>
    <button v-else-if="name==='Chip'" class="sample-chip">طراحی　×</button>
    <div v-else-if="name==='Avatar'" class="sample-avatar"><b>سم</b><span>سارا محمدی</span><small>طراح محصول</small></div>
    <div v-else-if="name==='Timeline'" class="sample-timeline"><b>سفارش ثبت شد <small>۱۰:۲۰</small></b><span>│</span><b>پرداخت تأیید شد <small>۱۰:۲۲</small></b></div>
    <div v-else-if="name==='Charts'" class="sample-chart"><header>فروش ماهانه <small>نیمهٔ اول ۱۴۰۵</small></header><div><i v-for="h in [35,62,45,80,56,92]" :key="h" :style="{height:`${h}%`}" /></div><footer>فروردین　اردیبهشت　خرداد</footer></div>
    <div v-else-if="name==='Divider'" class="sample-divider"><i />یا<i /></div>
    <details v-else-if="name==='Accordion'" class="sample-accordion" open><summary>نوراتو رایگان است؟ <b>⌃</b></summary><p>بله؛ می‌توانید از نوراتو در پروژه‌های خود استفاده کنید.</p></details>
    <div v-else-if="name==='Modal'" class="sample-modal"><b>این پروژه حذف شود؟</b><span>همهٔ فایل‌ها برای همیشه پاک می‌شوند.</span><footer><button>انصراف</button><button>حذف پروژه</button></footer></div>
    <div v-else-if="name==='Drawer'" class="sample-drawer"><header>فیلترها <b>×</b></header><label><input type="checkbox" checked /> فقط موارد موجود</label><button>اعمال فیلتر</button></div>
    <div v-else-if="name==='Popover'" class="sample-popover"><span>اشتراک‌گذاری　⌄</span><div><b>پیوند اشتراک</b><small>پیوند نمونه ۱۲۳</small></div></div>
    <div v-else-if="name==='Image'" class="sample-image"><span>تصویر محصول</span><b>+۱۲</b></div>
    <div v-else-if="name==='Carousel'" class="sample-carousel"><header>پیشنهادهای امروز <span>‹　›</span></header><div><i>کفش ورزشی</i><i>کیف روزمره</i><i>لباس تمرین</i></div><footer>●　○　○</footer></div>
    <div v-else-if="name==='Chat'" class="sample-chat"><b>سارا　<span>آنلاین</span></b><p class="incoming">فایل نوراتو را دیدی؟</p><p class="outgoing">بله، ساختار کامپوننت‌ها روشن است.</p><footer>پیام…　➤</footer></div>
  </div>
</template>
