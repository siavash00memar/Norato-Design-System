/** Copyable, reviewed API examples keyed by the canonical catalog's `usageKey`. */
export const usageExamples: Readonly<Record<string, string>> = {
  carousel: `<script setup lang="ts">
import { ref } from 'vue'
import { NoratoCarousel, type NoratoCarouselItem } from '@norato/vue'
const active = ref(0)
const items: NoratoCarouselItem[] = [{ id: 'one', title: 'پیشنهاد امروز' }, { id: 'two', title: 'انتخاب دوم' }, { id: 'three', title: 'انتخاب سوم' }]
<\/script>
<template><NoratoCarousel id="suggestions" v-model="active" label="پیشنهادها" title="پیشنهادهای امروز" :items="items" size="medium" dir="rtl" /></template>`,
  chat: `<script setup lang="ts">
import { NoratoChat, type NoratoChatMessageData } from '@norato/vue'
const messages: NoratoChatMessageData[] = [
  { id: '1', sender: 'incoming', type: 'text', senderName: 'سارا', text: 'سلام، حالت چطوره؟', time: '۱۰:۳۰' },
  { id: '2', sender: 'outgoing', type: 'reply', text: 'خوبم، ممنون.', time: '۱۰:۳۱', read: true, replyTo: { sender: 'سارا', text: 'حالت چطوره؟' } },
]
function sendMessage(text: string) { /* update application state */ }
<\/script>
<template><NoratoChat id="support-chat" label="گفتگو با سارا" title="سارا محمدی" initials="سم" online date-label="امروز" :messages="messages" @send="sendMessage" /></template>`,
  avatar: `<script setup lang="ts">
import { NoratoAvatar, NoratoAvatarGroup, NoratoAvatarLabel, NoratoAvatarStatus } from '@norato/vue'
const team = [
  { id: 'sara', name: 'سارا محمدی', initials: 'سم' },
  { id: 'armin', name: 'آرمین رضایی', initials: 'آر' },
  { id: 'niloofar', name: 'نیلوفر احمدی', initials: 'نآ' },
  { id: 'kian', name: 'کیان موسوی', initials: 'کم' },
  { id: 'mina', name: 'مینا کریمی', initials: 'مک' },
  { id: 'ali', name: 'علی نادری', initials: 'عن' },
] as const
<\/script>
<template>
  <NoratoAvatar name="سارا محمدی" type="initials" size="m" shape="circle" status="online" />
  <NoratoAvatarGroup :items="team" size="m" :max="5" label="اعضای تیم" dir="rtl" />
  <NoratoAvatarLabel name="سارا محمدی" description="طراح محصول" size="m" status="online" />
  <NoratoAvatarStatus status="online" />
</template>`,
  'empty-state': `<script setup lang="ts">\nimport { NoratoButton, NoratoEmptyState } from '@norato/vue'\n<\\/script>\n<template>\n  <NoratoEmptyState id="projects-empty" title="هنوز پروژه‌ای نساختی" description="اولین پروژه‌ات را بساز تا اینجا نمایش داده شود." layout="vertical" size="medium" visual-type="icon" visual-tone="neutral" dir="rtl">\n    <template #primary-action><NoratoButton label="ساخت پروژه" variant="primary" /></template>\n    <template #secondary-action><NoratoButton label="راهنما" variant="secondary" /></template>\n  </NoratoEmptyState>\n</template>`,
  badge: `<script setup lang="ts">\nimport { NoratoBadge } from '@norato/vue'\n<\\/script>\n\n<template>\n  <NoratoBadge anchor-label="اعلان‌ها" :count="3" type="count" size="medium" tone="danger">\n    <template #anchor="{ accessibleName }">\n      <button type="button" :aria-label="accessibleName">اعلان‌ها</button>\n    </template>\n  </NoratoBadge>\n</template>`,
  divider: `<script setup lang="ts">\nimport { NoratoDivider } from '@norato/vue'\n<\/script>\n\n<template>\n  <NoratoDivider orientation="horizontal" type="label-center" label="یا"  :spacing="8" tone="subtle" />\n<\/template>`,
  spinner: `<script setup lang="ts">\nimport { NoratoLoader } from '@norato/vue'\n<\/script>\n<template><NoratoLoader type="inline" label="در حال بارگذاری" spinner-type="norato" tone="default" :size="24" /></template>`,
  skeleton: `<script setup lang="ts">\nimport { NoratoSkeletonPattern } from '@norato/vue'\n<\/script>\n<template><NoratoSkeletonPattern type="avatar-text" effect="shimmer" label="در حال بارگذاری فهرست" dir="rtl" /></template>`,
  progress: `<script setup lang="ts">\nimport { NoratoProgress } from '@norato/vue'\n<\/script>\n<template><NoratoProgress id="upload-progress" :value="62" label="بارگذاری فایل" variant="linear" size="medium" tone="default" show-value /></template>`,  tooltip: `<script setup lang="ts">\nimport { NoratoTooltip } from '@norato/vue'\n<\/script>\n<template><NoratoTooltip id="copy-link" title="کپی لینک" surface="dark" layout="simple" placement="top"><template #trigger><button type="button" aria-label="کپی لینک">کپی</button></template></NoratoTooltip></template>`,  toast: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoToast } from '@norato/vue'\nconst open = ref(false)\n<\/script>\n<template><button type="button" @click="open = true">نمایش پیام</button><NoratoToast id="save-toast" v-model="open" title="تغییرات ذخیره شد" description="پروژه با موفقیت ذخیره شد." tone="success" surface="glass" layout="rich" action-label="بازگردانی" dismissible :duration="6000" /></template>`,  banner: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoBanner } from '@norato/vue'\nconst visible = ref(true)\nfunction openOffer() { /* navigate in the host app */ }\n<\/script>\n<template>\n  <NoratoBanner id="site-announcement" v-model="visible" tone="info" layout="desktop" title="جشنوارهٔ پاییزه شروع شد" description="تا ۳۰٪ تخفیف روی همهٔ پلن‌ها." action-label="ببین" @action="openOffer" />\n<\/template>`,
  alert: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoAlert } from '@norato/vue'\nconst open = ref(true)\n<\/script>\n<template><NoratoAlert id="project-alert" v-model="open" tone="info" variant="soft" layout="expanded" title="نسخهٔ جدید آماده است" description="نوراتو با قابلیت‌های تازه منتشر شد." dismissible /></template>`,
  accordion: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoAccordion, type NoratoAccordionItem } from '@norato/vue'\nconst expanded = ref<string | string[] | undefined>('free')\nconst items: NoratoAccordionItem[] = [\n  { value: 'free', title: 'نوراتو رایگانه؟', content: 'استفاده از نوراتو رایگان است.' },\n  { value: 'theme', title: 'حالت تیره هم دارد؟', content: 'از تنظیمات نمایش می‌توانی تغییرش بدهی.' },\n]\n<\\/script>\n<template><NoratoAccordion id="faq" v-model="expanded" :items="items" layout="grouped" item-style="plain" size="medium" /></template>`,
  button: `<script setup lang="ts">\nimport { NoratoButton } from '@norato/vue'\n<\/script>\n\n<template>\n  <NoratoButton label="ذخیرهٔ تغییرات" variant="primary" />\n<\/template>`,
  'split-button': `<script setup lang="ts">\nimport { NoratoSplitButton } from '@norato/vue'\nconst actions = [{ value: 'copy', label: 'ذخیره به‌عنوان کپی' }, { value: 'download', label: 'ذخیره و دانلود' }]\nfunction save() {}\nfunction choose(value: string) {}\n<\/script>\n\n<template>\n  <NoratoSplitButton id="save-actions" label="ذخیره" :items="actions" @primary-action="save" @select="choose" />\n<\/template>`,
  input: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoTextInput } from '@norato/vue'\nconst name = ref('')\n<\/script>\n<template><NoratoTextInput id="full-name" v-model="name" label="نام و نام خانوادگی" placeholder="نام خود را بنویسید" /></template>`,
  select: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoSelect } from '@norato/vue'\nconst city = ref('')\nconst options = [{ value: 'tehran', label: 'تهران' }]\n<\/script>\n<template><NoratoSelect id="city" v-model="city" label="شهر" :options="options" /></template>`,
  combobox: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoCombobox } from '@norato/vue'\nconst skill = ref<string[]>([])\nconst options = [{ value: 'design', label: 'طراحی محصول' }, { value: 'research', label: 'پژوهش کاربر' }]\nconst recentOptions = [options[0]]\nfunction createSkill(value: string) { options.push({ value, label: value }) }\n<\/script>\n<template><NoratoCombobox id="skill" v-model="skill" label="مهارت‌ها" :options="options" :recent-options="recentOptions" multiple creatable @create="createSkill" /></template>`,
  checkbox: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoCheckbox } from '@norato/vue'\nconst accepted = ref<boolean | 'indeterminate'>(false)\n<\/script>\n<template><NoratoCheckbox id="terms" v-model="accepted" label="قوانین را قبول دارم" description="با ادامه، شرایط استفاده را می‌پذیرید." :size="20" required /></template>`,
  radio: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoRadioGroup } from '@norato/vue'\nconst period = ref<string | undefined>('monthly')\nconst options = [{ value: 'monthly', label: 'ماهانه' }, { value: 'quarterly', label: 'سه‌ماهه' }, { value: 'yearly', label: 'سالانه' }]\n<\/script>\n<template><NoratoRadioGroup id="period" v-model="period" label="دورهٔ اشتراک" :options="options" /></template>`,
  switch: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoSwitch } from '@norato/vue'\nconst notifications = ref(false)\n<\/script>\n<template><NoratoSwitch id="notifications" v-model="notifications" label="اعلان‌ها" description="پیام‌های جدید را خبر بده" /></template>` ,
  segmented: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoSegmentedControl } from '@norato/vue'\nconst period = ref('day')\nconst views = [{ value: 'day', label: 'روزانه' }, { value: 'week', label: 'هفتگی' }, { value: 'month', label: 'ماهانه' }]\n<\/script>\n<template><NoratoSegmentedControl id="period" v-model="period" label="دورهٔ نمایش" :items="views" /></template>`,
  range: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoRange } from '@norato/vue'\nconst volume = ref(60)\n<\/script>\n<template><NoratoRange id="volume" v-model="volume" label="میزان صدا" :min="0" :max="100" :step="1" /></template>`,
  rating: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoRating } from '@norato/vue'\nconst rating = ref<number | undefined>(4)\n<\/script>\n<template><NoratoRating id="rating" variant="input" v-model="rating" label="امتیاز شما" /></template>`,
  'date-picker': `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoDatePicker, type NoratoDatePickerValue } from '@norato/vue'\nconst deliveryDate = ref<NoratoDatePickerValue>('1405-08-01')\n<\/script>\n<template><NoratoDatePicker id="delivery-date" v-model="deliveryDate" label="تاریخ تحویل" type="single" /></template>`,
  'time-picker': `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoTimePicker, type NoratoTimePickerValue } from '@norato/vue'\nconst appointmentTime = ref<NoratoTimePickerValue>('14:30')\n<\/script>\n<template><NoratoTimePicker id="appointment-time" v-model="appointmentTime" label="ساعت نوبت" variant="columns" /></template>`,
  'file-upload': `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoFileUpload, type NoratoUploadItem } from '@norato/vue'\nconst files = ref<NoratoUploadItem[]>([])\nfunction uploadSelected(selected: File[]) { /* send files to your own API */ }\n<\/script>\n<template><NoratoFileUpload id="attachments" v-model="files" label="پیوست‌ها" :max-files="5" :max-size="10000000" @files-selected="uploadSelected" /></template>`,
  navbar: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoNavbar, type NoratoNavbarLink } from '@norato/vue'\nconst search = ref('')\nconst links: NoratoNavbarLink[] = [{ label: 'خانه', href: '/', current: true }, { label: 'محصولات', children: [{ label: 'راهنما', href: '/docs' }] }, { label: 'قیمت‌ها', href: '/pricing' }]\n<\/script>\n<template><NoratoNavbar id="main-navigation" :links="links" v-model:search="search" /></template>`,
  sidebar: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoSidebar, type NoratoSidebarSection } from '@norato/vue'\nconst collapsed = ref(false)\nconst activeHref = ref('/overview')\nconst sections: NoratoSidebarSection[] = [{ label: 'فضای کاری', items: [{ label: 'نمای کلی', href: '/overview', icon: '⌂' }, { label: 'پروژه‌ها', href: '/projects', icon: '▦' }, { label: 'تنظیمات', href: '/settings', icon: '⚙' }] }]\n<\/script>\n<template><NoratoSidebar id="workspace-nav" v-model:collapsed="collapsed" :sections="sections" :active-href="activeHref" @navigate="item => activeHref = item.href || activeHref" /></template>`,
  pagination: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoPagination } from '@norato/vue'\nconst currentPage = ref(3)\nconst totalPages = ref(12)\n</script>\n<template><NoratoPagination id="results-pagination" v-model="currentPage" :total-pages="totalPages" /></template>`,
  stepper: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoStepper, type NoratoStep } from '@norato/vue'\nconst steps: NoratoStep[] = [{ id: 'cart', label: 'سبد خرید' }, { id: 'address', label: 'آدرس' }, { id: 'payment', label: 'پرداخت' }, { id: 'confirm', label: 'تأیید' }]\nconst currentStep = ref('address')\n</script>\n<template><NoratoStepper id="checkout-progress" :steps="steps" :model-value="currentStep" /></template>`,
  breadcrumbs: `<script setup lang="ts">\nimport { NoratoBreadcrumbs, type NoratoBreadcrumbItem } from '@norato/vue'\nconst trail: NoratoBreadcrumbItem[] = [{ label: 'خانه', href: '/', home: true }, { label: 'محصولات', href: '/products' }, { label: 'کفش ورزشی', current: true }]\n</script>\n<template><NoratoBreadcrumbs id="page-path" :items="trail" /></template>`,
  tabs: `<script setup lang="ts">
import { ref } from 'vue'
import { NoratoTabs, type NoratoTab } from '@norato/vue'
const selected = ref('all')
const tabs: NoratoTab[] = [{ value: 'all', label: 'همه', count: 12, content: 'همهٔ پروژه‌ها' }, { value: 'active', label: 'فعال', content: 'پروژه‌های فعال' }]
<\/script>
<template><NoratoTabs id="projects-tabs" v-model="selected" label="پروژه‌ها" :tabs="tabs" /></template>`,
  'command-palette': `<script setup lang="ts">
import { ref } from 'vue'
import { NoratoCommandPalette, type NoratoCommandGroup, type NoratoCommandItem } from '@norato/vue'
const open = ref(false)
const groups: NoratoCommandGroup[] = [{ id: 'suggested', label: 'پیشنهادی', items: [
  { id: 'new-project', label: 'پروژهٔ جدید', keywords: ['ساخت', 'ایجاد'], shortcut: '⌘ N' },
  { id: 'settings', label: 'تنظیمات', shortcut: '⌘ ,' },
] }]
function runCommand(item: NoratoCommandItem) { console.log(item.id) }
<\/script>
<template>
  <button type="button" aria-haspopup="dialog" @click="open = true">جست‌وجو یا فرمان</button>
  <NoratoCommandPalette id="commands" v-model:open="open" :groups="groups" shortcut="k" @select="runCommand" />
</template>`,
  'tree-view': `<script setup lang="ts">
import { ref } from 'vue'
import { NoratoTreeView, type NoratoTreeNode } from '@norato/vue'
const selected = ref('readme')
const expanded = ref(['projects', 'norato'])
const items: NoratoTreeNode[] = [{ id: 'projects', label: 'پروژه‌ها', children: [{ id: 'norato', label: 'نوراتـو', children: [{ id: 'readme', label: 'README.md' }] }] }]
</script>
<template><NoratoTreeView id="projects" v-model="selected" v-model:expanded-ids="expanded" label="پروژه‌ها" :items="items" /></template>`,
  modal: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoButton, NoratoDialog } from '@norato/vue'\nconst open = ref(false)\nfunction removeProject() { /* حذف پروژه */ open.value = false }\n<\\/script>\n<template>\n  <NoratoButton label="حذف پروژه" variant="destructive" @click="open = true" />\n  <NoratoDialog id="delete-project" v-model:open="open" title="این پروژه حذف شود؟" description="همهٔ فایل‌ها برای همیشه پاک می‌شوند." tone="danger" confirm-label="حذف کن" @confirm="removeProject" />\n</template>`,
  drawer: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoButton, NoratoDrawer } from '@norato/vue'\nconst open = ref(false)\n<\\/script>\n<template>\n  <NoratoButton label="نمایش فیلترها" @click="open = true" />\n  <NoratoDrawer id="filters" v-model:open="open" title="فیلترها" description="نتایج را محدود کن." side="right" size="medium">\n    <p>فیلترهای دلخواه را اینجا قرار بده.</p>\n  </NoratoDrawer>\n</template>`,
  image: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoImage, NoratoImageGallery } from '@norato/vue'\nconst selected = ref(0)\nconst images = [{ id: 'sunset', src: '/images/sunset.jpg', alt: 'غروب بر فراز تپه‌ها', caption: 'غروب شمال' }, { id: 'dawn', src: '/images/dawn.jpg', alt: 'طلوع آفتاب در دشت' }]\n<\\/script>\n<template>\n  <NoratoImage src="/images/cover.jpg" alt="تصویر جلد" ratio="wide" />\n  <NoratoImageGallery id="trip-gallery" v-model="selected" label="تصاویر سفر" :items="images" layout="featured" />\n</template>`,
  popover: `<script setup lang="ts">\nimport { ref } from 'vue'\nimport { NoratoButton, NoratoPopover } from '@norato/vue'\nconst open = ref(false)\n<\/script>\n<template>\n  <NoratoPopover id="share-popover" v-model:open="open" title="لینک اشتراک" description="این پیوند را به اشتراک بگذار." variant="simple" placement="bottom">\n    <template #trigger><NoratoButton label="اشتراک‌گذاری" variant="secondary" /></template>\n    <code dir="ltr">norato.design/share/8df</code>\n  </NoratoPopover>\n</template>`,
  menu: `<script setup lang="ts">
import { ref } from 'vue'
import { NoratoMenu, type NoratoMenuItem } from '@norato/vue'
const open = ref(false)
const items: NoratoMenuItem[] = [
  { value: 'edit', label: 'ویرایش', shortcut: 'Ctrl E' },
  { value: 'copy', label: 'کپی', shortcut: 'Ctrl C' },
  { value: 'delete', label: 'حذف', danger: true, separatorBefore: true },
]
function selectAction(value: string) { console.log(value) }
<\/script>
<template><NoratoMenu id="file-actions" label="اقدام‌های فایل" v-model:open="open" :items="items" @select="selectAction" /></template>`,
  charts: `<script setup lang="ts">
import { NoratoChartCard, NoratoStatTile } from '@norato/vue'
import type { NoratoChartSeries } from '@norato/vue'
const categories = ['فروردین', 'اردیبهشت', 'خرداد']
const series: NoratoChartSeries[] = [{ id: 'online', label: 'آنلاین', values: [34, 58, 42] }, { id: 'store', label: 'حضوری', values: [24, 39, 34] }]
<\\/script>
<template>
  <NoratoChartCard title="فروش ماهانه" subtitle="سه ماه اخیر" :categories="categories" :series="series" type="grouped-bar" />
  <NoratoStatTile label="درآمد کل" value="۱۲۴٬۵۰۰٬۰۰۰" trend="up" change="۱۲٪" />
</template>`,
  'notification-center': `<script setup lang="ts">
import { ref } from 'vue'
import { NoratoNotificationCenter, type NoratoNotification } from '@norato/vue'
const notifications = ref<NoratoNotification[]>([
  { id: 'design-comment', title: 'سارا روی طراحی‌ت نظر داد', time: '۲ دقیقه پیش', group: 'امروز', type: 'user', mention: true, read: false, avatarName: 'سارا محمدی' },
  { id: 'update-installed', title: 'آپدیت ۱.۱ نصب شد', time: 'دیروز', group: 'دیروز', type: 'system', read: true },
])
const open = ref(false)
function openNotification(notification: NoratoNotification) { /* navigate to its destination */ }
function persistNotifications(next: NoratoNotification[]) { notifications.value = next }
<\/script>
<template>
  <NoratoNotificationCenter id="notifications" v-model:open="open" :model-value="notifications" presentation="popover" label="اعلان‌ها" @update:model-value="persistNotifications" @select="openNotification" />
</template>`,
  timeline: `<script setup lang="ts">
import { NoratoActivityFeed, NoratoTimeline, NoratoTimelineItem, NoratoTimelineMarker, type NoratoActivityGroup, type NoratoTimelineEvent } from '@norato/vue'
const events: NoratoTimelineEvent[] = [
  { id: 'created', title: 'سفارش ثبت شد', time: '۱۰:۲۰', datetime: '2026-11-08T10:20:00+03:30', tone: 'success' },
  { id: 'packing', title: 'آماده‌سازی سفارش', time: '۱۰:۳۵', tone: 'active', markerType: 'icon', icon: 'package', description: 'بسته در حال آماده شدن است.' },
]
const groups: NoratoActivityGroup[] = [{ id: 'today', label: 'امروز', events }]
<\\/script>
<template>
  <NoratoTimeline id="order-history" :events="events" layout="default" label="تاریخچهٔ سفارش" dir="rtl" />
  <ol aria-label="یک رویداد"><NoratoTimelineItem :event="events[0]!" position="only" layout="card" /></ol>
  <NoratoTimelineMarker type="avatar" tone="neutral" avatar-name="سارا محمدی" label="سارا محمدی" />
  <NoratoActivityFeed id="recent-activity" :groups="groups" density="compact" label="فعالیت‌های اخیر" />
</template>`,
}
