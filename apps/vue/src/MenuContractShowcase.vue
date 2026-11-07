<script setup lang="ts">
import { NoratoMenu } from '@norato/vue'
import type { NoratoMenuItem } from '@norato/vue'
import { MenuCopyIcon, MenuDeleteIcon, MenuEditIcon, MenuFolderIcon, MenuShareIcon } from './menu-icons'
import './menu-contract-showcase.css'

const props = defineProps<{ section: string }>()
const items: NoratoMenuItem[] = [
  { value: 'edit', label: 'ویرایش', shortcut: 'Ctrl E', icon: MenuEditIcon },
  { value: 'copy', label: 'کپی', shortcut: 'Ctrl C', icon: MenuCopyIcon },
  { value: 'share', label: 'اشتراک‌گذاری', icon: MenuShareIcon },
  { value: 'delete', label: 'حذف', icon: MenuDeleteIcon, danger: true, separatorBefore: true },
]
const itemId = 'menu-contract'
const itemProps = (suffix: string, content = items) => ({ id: `${itemId}-${suffix}`, label: 'اقدام‌های فایل', items: content, open: true as const, portal: false as const })
const sizes = [
  { id: 'small', label: 'Small', size: 'small' as const },
  { id: 'medium', label: 'Medium', size: 'medium' as const },
  { id: 'large', label: 'Large', size: 'large' as const },
]
const states = [
  { id: 'default', label: 'Default', items },
  { id: 'hover', label: 'Hover', items },
  { id: 'disabled', label: 'Disabled', items: items.map(item => item.value === 'copy' ? { ...item, disabled: true } : item) },
  { id: 'focus', label: 'Focus', items },
  { id: 'danger', label: 'Danger', items: [items[3]!] },
]
const submenuItems: NoratoMenuItem[] = [
  items[0]!,
  { value: 'move', label: 'انتقال به', icon: MenuFolderIcon, children: [
    { value: 'project', label: 'پروژه‌ها', icon: MenuFolderIcon },
    { value: 'archive', label: 'بایگانی', icon: MenuFolderIcon },
  ] },
  items[3]!,
]
</script>

<template>
  <div class="menu-contract-showcase" :class="`menu-contract-showcase--${props.section.toLowerCase()}`" aria-hidden="true" inert>
    <template v-if="props.section === 'Anatomy'">
      <div class="menu-contract-anatomy__sample"><NoratoMenu v-bind="itemProps('anatomy')" /></div>
      <ol class="menu-contract-anatomy__legend">
        <li><b>۰۱</b><span><strong>Panel</strong><small>پنل شناور شیشه‌ای و محدودهٔ منو</small></span></li>
        <li><b>۰۲</b><span><strong>Menu Item</strong><small>ردیف اقدام با هدف لمس حداقل ۴۸ پیکسل</small></span></li>
        <li><b>۰۳</b><span><strong>Icon</strong><small>آیکن مستقل در سمت راست در RTL</small></span></li>
        <li><b>۰۴</b><span><strong>Shortcut</strong><small>میانبر صفحه‌کلید در سمت چپ در RTL</small></span></li>
        <li><b>۰۵</b><span><strong>Danger Item</strong><small>اقدام مخرب، جداشده و در انتهای منو</small></span></li>
      </ol>
    </template>
    <template v-else-if="props.section === 'Variants'">
      <article v-for="size in sizes" :key="size.id" class="menu-contract-card">
        <header><strong>{{ size.label }}</strong><small>Action Menu</small></header>
        <NoratoMenu v-bind="{...itemProps(`variant-${size.id}`), size: size.size}" />
      </article>
      <span class="visual-kind">اندازهٔ متن و ریتم هر ردیف تغییر می‌کند؛ هدف تعاملی از ۴۸ پیکسل کوچک‌تر نمی‌شود.</span>
    </template>
    <template v-else-if="props.section === 'Sizes'">
      <article v-for="size in sizes" :key="size.id" class="menu-contract-card menu-contract-card--size">
        <header><strong>{{ size.label }}</strong><small>{{ size.size }}</small></header>
        <NoratoMenu v-bind="{...itemProps(`size-${size.id}`), size: size.size}" />
      </article>
      <span class="visual-kind">Small · Medium · Large</span>
    </template>
    <template v-else-if="props.section === 'States'">
      <article v-for="state in states" :key="state.id" class="menu-contract-card" :data-state="state.id">
        <header><strong>{{ state.label }}</strong><small>Menu Item</small></header>
        <NoratoMenu v-bind="itemProps(`state-${state.id}`, state.items)" />
      </article>
      <span class="visual-kind">نمونه‌های واقعی adapter؛ نمایش ایستا و بدون تعامل</span>
    </template>
    <template v-else>
      <div class="menu-contract-submenu"><strong>Submenu · RTL</strong><NoratoMenu v-bind="{...itemProps('submenu', submenuItems)}" /></div>
      <span class="visual-kind">زیرمنو با primitive منو مدیریت می‌شود؛ فلش در RTL به چپ اشاره می‌کند.</span>
    </template>
  </div>
</template>
