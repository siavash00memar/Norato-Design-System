<script setup lang="ts">
import { CommandPaletteNewIcon, CommandPaletteSearchIcon, CommandPaletteSettingsIcon } from './command-palette-icons'
import './command-palette-contract-showcase.css'

const props = defineProps<{ section: string }>()
const variants = [
  { id: 'default', label: 'Default', query: 'جست‌وجو یا فرمان…', rows: true },
  { id: 'results', label: 'Results', query: 'پروژه', rows: true },
  { id: 'empty', label: 'Empty', query: 'مورد ناموجود', rows: false },
  { id: 'loading', label: 'Loading', query: 'در حال جست‌وجو…', rows: false },
]
</script>

<template>
  <div class="command-palette-contract-showcase" :class="`command-palette-contract-showcase--${props.section.toLowerCase()}`" aria-hidden="true" inert>
    <template v-if="section === 'Anatomy'">
      <div class="command-contract-panel">
        <div class="command-contract-search"><CommandPaletteSearchIcon /><span>جست‌وجو یا فرمان…</span><kbd dir="ltr">Esc</kbd></div>
        <h3>پیشنهادی</h3><div class="command-contract-row"><CommandPaletteNewIcon /><span>پروژهٔ جدید</span><kbd dir="ltr">⌘ N</kbd></div>
        <div class="command-contract-row"><CommandPaletteSettingsIcon /><span>تنظیمات</span><kbd dir="ltr">⌘ ,</kbd></div>
        <footer><kbd>↑</kbd><kbd>↓</kbd> جابه‌جایی <span>↵ باز کردن</span></footer>
      </div>
      <ol class="command-contract-anatomy-list"><li><b>۰۱</b><span><strong>Search Row</strong><small>ورودی جست‌وجو با نشان Esc</small></span></li><li><b>۰۲</b><span><strong>Group Title</strong><small>عنوان گروه فرمان‌ها</small></span></li><li><b>۰۳</b><span><strong>Command Item</strong><small>ردیف فرمان با آیکن</small></span></li><li><b>۰۴</b><span><strong>Kbd</strong><small>میانبر LTR یا Enter</small></span></li><li><b>۰۵</b><span><strong>Footer</strong><small>راهنمای کلیدها</small></span></li></ol>
    </template>
    <template v-else-if="section === 'Variants' || section === 'States'">
      <article v-for="variant in variants" :key="variant.id" class="command-contract-card" :data-state="variant.id">
        <header><strong>{{ variant.label }}</strong><small>Command Palette</small></header>
        <div class="command-contract-panel"><div class="command-contract-search"><CommandPaletteSearchIcon /><span>{{ variant.query }}</span><kbd dir="ltr">Esc</kbd></div><template v-if="variant.rows"><h3>{{ variant.id === 'default' ? 'پیشنهادی' : 'نتایج جست‌وجو' }}</h3><div class="command-contract-row" :class="{ 'is-active': variant.id === 'results' }"><CommandPaletteNewIcon /><span>{{ variant.id === 'results' ? 'پروژه‌ها' : 'پروژهٔ جدید' }}</span><kbd dir="ltr">⌘ N</kbd></div><div class="command-contract-row"><CommandPaletteSettingsIcon /><span>تنظیمات</span><kbd dir="ltr">⌘ ,</kbd></div></template><div v-else-if="variant.id === 'loading'" class="command-contract-message"><i />در حال جست‌وجو…</div><div v-else class="command-contract-message">نتیجه‌ای پیدا نشد.</div><footer><kbd>↑</kbd><kbd>↓</kbd> جابه‌جایی <span>↵ باز کردن</span></footer></div>
      </article>
      <span class="visual-kind">Command Palette · Default / Results / Empty / Loading</span>
    </template>
    <template v-else-if="section === 'Sizes'">
      <article class="command-contract-card"><header><strong>Small</strong><small>Kbd</small></header><div class="command-contract-kbd-size is-small"><kbd dir="ltr">⌘</kbd><kbd dir="ltr">K</kbd></div></article>
      <article class="command-contract-card"><header><strong>Medium</strong><small>Kbd</small></header><div class="command-contract-kbd-size"><kbd dir="ltr">⌘</kbd><kbd dir="ltr">K</kbd></div></article>
      <span class="visual-kind">اندازهٔ نشانگر کلید؛ هدف فرمان‌ها همچنان ۴۸ پیکسل است.</span>
    </template>
    <template v-else-if="section === 'Parts'">
      <article class="command-contract-card"><header><strong>Command Palette</strong><small>4 Types</small></header><div class="command-contract-part"><CommandPaletteSearchIcon /> جست‌وجو <span>گروه‌ها</span><kbd>Esc</kbd></div></article>
      <article class="command-contract-card"><header><strong>Command Item</strong><small>3 Kinds</small></header><div class="command-contract-row"><CommandPaletteNewIcon /><span>ساخت پروژه</span><kbd dir="ltr">⌘ N</kbd></div></article>
      <article class="command-contract-card"><header><strong>Kbd</strong><small>2 Sizes</small></header><div class="command-contract-kbd-size"><kbd dir="ltr">⌘</kbd><kbd dir="ltr">K</kbd></div></article>
      <span class="visual-kind">Palette · Command / Navigation / Recent · Keyboard hint</span>
    </template>
  </div>
</template>
