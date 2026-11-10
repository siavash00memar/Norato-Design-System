<script setup lang="ts">
type Sample = { id: string; label: string; style?: string; type?: string; size?: string; state?: string }
const desktop: Sample[] = ['App', 'Website', 'Centered'].flatMap(type => ['Bar', 'Floating', 'Transparent'].map(style => ({ id: `desktop-${type}-${style}`, type, style, label: `${type} · ${style}` })))
const mobile: Sample[] = ['Default', 'Back', 'Search', 'Large Title'].flatMap(type => ['Bar', 'Transparent'].map(style => ({ id: `mobile-${type}-${style}`, type, style, label: `${type} · ${style}` })))
const links: Sample[] = ['Pill', 'Underline'].flatMap(style => ['Small', 'Medium'].flatMap(size => ['Default', 'Hover', 'Active', 'Disabled', 'Focus'].map(labelState => ({ id: `link-${style}-${size}-${labelState}`, style, size, state: labelState.toLowerCase(), label: `${style} · ${size} · ${labelState}` }))))
const brands: Sample[] = ['Small', 'Medium'].map(size => ({ id: `brand-${size}`, size, label: `Brand · ${size}` }))
const menus: Sample[] = [{ id: 'mega-menu', label: 'Mega Menu · RTL' }]
const drawers: Sample[] = [{ id: 'mobile-menu', label: 'Mobile Menu · RTL' }]
</script>

<template>
  <div class="navbar-variant-gallery" aria-hidden="true" inert>
    <section class="navbar-variant-family">
      <header><strong>Navbar Desktop</strong><span>۳ چیدمان × ۳ سبک · ۹</span></header>
      <div class="navbar-variant-grid navbar-variant-grid-desktop">
        <article v-for="sample in desktop" :key="sample.id" class="navbar-variant-sample" :data-style="sample.style" :data-type="sample.type">
          <div class="navbar-mini"><b><i>ن</i><span>نوراتو</span></b><div><span class="is-active">خانه</span><span>محصولات</span></div><em>شروع</em></div>
          <small>{{ sample.label }}</small>
        </article>
      </div>
    </section>
    <section class="navbar-variant-family">
      <header><strong>Mobile Header</strong><span>۴ نوع × ۲ سبک · ۸</span></header>
      <div class="navbar-variant-grid navbar-variant-grid-mobile">
        <article v-for="sample in mobile" :key="sample.id" class="navbar-variant-sample" :data-style="sample.style" :data-mobile-type="sample.type">
          <div class="navbar-mobile-mini"><i>{{ sample.type === 'Back' ? '‹' : sample.type === 'Search' ? '⌕' : '☰' }}</i><b>{{ sample.type === 'Large Title' ? 'نوراتو' : sample.type === 'Search' ? 'جست‌وجو' : 'نوراتو' }}</b><i>ن</i></div>
          <small>{{ sample.label }}</small>
        </article>
      </div>
    </section>
    <section class="navbar-variant-family">
      <header><strong>Nav Link</strong><span>۲ سبک × ۲ اندازه × ۵ حالت · ۲۰</span></header>
      <div class="navbar-variant-grid navbar-variant-grid-links">
        <article v-for="sample in links" :key="sample.id" class="navbar-variant-sample" :data-link-style="sample.style" :data-size="sample.size" :data-state="sample.state">
          <div class="navbar-link-mini"><span>محصولات</span><i>⌄</i></div>
          <small>{{ sample.label }}</small>
        </article>
      </div>
    </section>
    <section class="navbar-variant-family navbar-variant-family-parts">
      <header><strong>Brand</strong><span>۲ اندازه · ۲</span></header>
      <div class="navbar-variant-grid navbar-variant-grid-parts">
        <article v-for="sample in brands" :key="sample.id" class="navbar-variant-sample" :data-size="sample.size"><div class="navbar-brand-mini"><i>ن</i><b>نوراتو</b></div><small>{{ sample.label }}</small></article>
      </div>
    </section>
    <section class="navbar-variant-family navbar-variant-family-parts">
      <header><strong>Mega Menu</strong><span>RTL · ۱</span></header>
      <div class="navbar-variant-grid navbar-variant-grid-parts">
        <article v-for="sample in menus" :key="sample.id" class="navbar-variant-sample"><div class="navbar-mega-mini"><b>محصولات</b><div><span>مدیریت</span><span>تحلیل</span><span>گزارش‌ها</span><span>تنظیمات</span></div></div><small>{{ sample.label }}</small></article>
      </div>
    </section>
    <section class="navbar-variant-family navbar-variant-family-parts">
      <header><strong>Mobile Menu</strong><span>RTL · ۱</span></header>
      <div class="navbar-variant-grid navbar-variant-grid-parts">
        <article v-for="sample in drawers" :key="sample.id" class="navbar-variant-sample"><div class="navbar-drawer-mini"><b>نوراتو <i>×</i></b><span>خانه</span><span>محصولات <i>⌄</i></span><span>راهنما</span></div><small>{{ sample.label }}</small></article>
      </div>
    </section>
    <span class="visual-kind">۴۱ حالت از قرارداد Navbar · نمایش ایستا و غیرتعاملی</span>
  </div>
</template>
