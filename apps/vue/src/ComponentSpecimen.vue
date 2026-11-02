<script setup lang="ts">
import './component-specimen.css'
import './split-button-specimen.css'
import './navbar-specimen.css'
import './sidebar-specimen.css'
import { NoratoButton, NoratoChoiceGroup, NoratoField, NoratoTextInput, NoratoSelect, NoratoCombobox, NoratoCheckbox, NoratoRadioGroup, NoratoSwitch, NoratoRange, NoratoRating, NoratoSplitButton } from '@norato/vue'
defineProps<{ name: string; compact?: boolean }>()
const splitSpecimenItems = [{ value: 'copy', label: 'ذخیره به‌عنوان کپی' }, { value: 'download', label: 'ذخیره و دانلود' }]
</script>

<template>
  <div class="component-sample" :class="{ compact, 'sample-button-specimen': name==='Button', 'sample-input-preview': name==='Input', 'sample-select-preview': name==='Select', 'sample-combobox-preview': name==='Combobox', 'sample-checkbox-preview': name==='Checkbox', 'sample-radio-preview': name==='Radio Button', 'sample-switch-preview': name==='Switch', 'sample-segmented-preview': name==='Segmented Control', 'sample-range-preview': name==='Range', 'sample-rating-preview': name==='Rating', 'sample-date-picker-preview': name==='Date Picker', 'sample-time-picker-preview': name==='Time Picker', 'sample-file-upload-preview': name==='File Upload', 'sample-navbar-shell': name==='Navbar', 'sample-sidebar-shell': name==='Sidebar', 'sample-split-preview': name==='Split Button' }" aria-hidden="true" inert>
    <div v-if="name==='Button'" class="sample-button-row"><NoratoButton label="اصلی" variant="primary" /><NoratoButton label="جایگزین" variant="secondary" /><span class="sample-button-cancel">انصراف</span></div>
    <template v-else-if="name==='Split Button'"><span class="sample-checkbox-state" dir="ltr">Default<i aria-hidden="true" /></span><NoratoSplitButton id="specimen-split-button" label="ذخیره" :items="splitSpecimenItems" /></template>
    <template v-else-if="name==='Input'"><span class="sample-checkbox-state" dir="ltr">Default<i aria-hidden="true" /></span><div class="sample-form-controls sample-input-specimen"><NoratoTextInput id="specimen-email" label="ایمیل" placeholder="name@example.com" helper-text="ایمیل کاری‌ات را وارد کن." dir="ltr"><template #trailing><svg class="sample-input-email-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg></template></NoratoTextInput></div></template>
    <template v-else-if="name==='Select'"><span class="sample-checkbox-state" dir="ltr">Default<i aria-hidden="true" /></span><div class="sample-form-controls sample-input-specimen sample-select-specimen"><NoratoSelect id="specimen-city" label="شهر" model-value="tehran" :options="[{value:'tehran',label:'تهران'},{value:'shiraz',label:'شیراز'},{value:'disabled',label:'گزینهٔ غیرفعال',disabled:true}]" /></div></template>
    <template v-else-if="name==='Combobox'"><span class="sample-checkbox-state" dir="ltr">Default<i aria-hidden="true" /></span><div class="sample-form-controls sample-combobox-specimen"><NoratoCombobox id="specimen-combobox" label="مهارت‌ها" placeholder="جست‌وجو کن یا بنویس…" :options="[{value:'design',label:'طراحی محصول'},{value:'research',label:'پژوهش کاربر'},{value:'writing',label:'طراحی رابط کاربری'}]" /></div></template>
    <template v-else-if="name==='Checkbox'"><span class="sample-checkbox-state" dir="ltr">Default<i aria-hidden="true" /></span><div class="sample-form-controls sample-checkbox-specimen"><NoratoCheckbox id="specimen-newsletter" label="خبرنامه رو برام بفرست" description="هفته‌ای یه ایمیل، بدون تبلیغ" :size="20" /></div></template>
    <template v-else-if="name==='Radio Button'"><span class="sample-checkbox-state" dir="ltr">Default<i aria-hidden="true" /></span><div class="sample-form-controls sample-radio-specimen"><NoratoRadioGroup id="specimen-period" label="دورهٔ اشتراک" hide-label model-value="monthly" :options="[{value:'monthly',label:'ماهانه'},{value:'quarterly',label:'سه‌ماهه'},{value:'yearly',label:'سالانه'}]" :size="20" /></div></template>
    <template v-else-if="name==='Switch'"><span class="sample-checkbox-state" dir="ltr">Default<i aria-hidden="true" /></span><div class="sample-form-controls sample-switch-specimen"><NoratoSwitch id="specimen-notifications" label="اعلان‌ها" description="پیام‌های جدید رو خبر بده" :model-value="false" size="medium" /></div></template>
    <template v-else-if="name==='Segmented Control'"><span class="sample-checkbox-state" dir="ltr">Default<i aria-hidden="true" /></span><div class="sample-segment"><button class="active">روزانه</button><button>هفتگی</button><button>ماهانه</button></div></template>
    <template v-else-if="name==='Range'"><span class="sample-checkbox-state" dir="ltr">Default<i aria-hidden="true" /></span><div class="sample-range"><NoratoRange id="specimen-volume" label="میزان صدا" :model-value="60" :min="0" :max="100" :step="1" min-label="۰" max-label="۱۰۰" /></div></template>
    <template v-else-if="name==='Rating'"><span class="sample-checkbox-state" dir="ltr">Default<i aria-hidden="true" /></span><div class="sample-rating"><NoratoRating id="specimen-rating" :value="4" :count="128" /></div></template>
    <div v-else-if="name==='Date Picker'" class="sample-calendar"><span class="sample-calendar-marker"><i />Default</span><div class="sample-calendar-card"><header><button aria-hidden="true">‹</button><b>مهر ۱۴۰۵</b><button aria-hidden="true">›</button></header><div class="calendar-days"><span v-for="d in ['ش','ی','د','س','چ','پ','ج']" :key="d">{{ d }}</span><i v-for="d in 35" :key="d" :class="{ selected: d===17, holiday: [4,11,18,25].includes(d), outside: d<4 || d>34 }">{{ d < 4 ? 28+d : d>34 ? d-34 : d-3 }}</i></div></div></div>
    <div v-else-if="name==='Time Picker'" class="sample-time-preview"><span class="sample-checkbox-state" dir="ltr">Default<i aria-hidden="true" /></span><div class="sample-time-card"><div class="sample-time-column"><span>ساعت</span><i>۱۳</i><b>۱۴</b><i>۱۵</i><i>۱۶</i><i>۱۷</i></div><div class="sample-time-column"><span>دقیقه</span><i>۱۵</i><i>۲۰</i><b>۳۰</b><i>۳۵</i><i>۴۰</i></div></div></div>
    <div v-else-if="name==='File Upload'" class="sample-upload"><b>↑</b><strong>فایل را اینجا رها کنید</strong><small>PNG یا PDF · حداکثر ۱۰ مگابایت</small></div>
    <div v-else-if="name==='Navbar'" class="sample-navbar-preview"><span class="sample-navbar-preview-marker"><i />Default</span><nav aria-label="ناوبری نمونه"><b><i aria-hidden="true">ن</i> نوراتو</b><div><span class="is-current">خانه</span><span>محصولات</span><span>قیمت‌ها</span></div><span class="sample-navbar-preview-action">شروع کن</span></nav></div>
    <div v-else-if="name==='Sidebar'" class="sample-sidebar-preview"><span class="sample-sidebar-marker"><i />Default</span><aside><header><b><i>ن</i> نوراتو</b></header><section><small>فضای کاری</small><span class="active"><i>⌂</i> نمای کلی</span><span><i>▦</i> پروژه‌ها <b>۳</b></span><span><i>▤</i> گزارش‌ها</span><span><i>⚙</i> تنظیمات</span></section><footer><i>ن</i><span><b>نگار احمدی</b><small>مدیر فضای کاری</small></span></footer></aside></div>
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
    <template v-else-if="name==='File Upload'"><span class="sample-checkbox-state" dir="ltr">Default<i aria-hidden="true" /></span><div class="sample-file-upload-dropzone"><b aria-hidden="true">↑</b><strong>برای انتخاب فایل کلیک کنید یا فایل را اینجا رها کنید</strong><small>PNG یا PDF · حداکثر ۱۰ مگابایت</small></div></template>
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
