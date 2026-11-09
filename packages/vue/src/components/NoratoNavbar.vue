<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
} from 'reka-ui'

export type NoratoNavbarLayout = 'app' | 'website' | 'centered'
export type NoratoNavbarStyle = 'bar' | 'floating' | 'transparent'
export type NoratoNavbarMobileType = 'default' | 'back' | 'search' | 'large-title'
export type NoratoNavbarLinkStyle = 'pill' | 'underline'
export type NoratoNavbarLinkSize = 'small' | 'medium'
export type NoratoNavbarLink = {
  label: string
  href?: string
  icon?: string
  count?: string | number
  current?: boolean
  disabled?: boolean
  children?: NoratoNavbarLink[]
}

const props = withDefaults(defineProps<{
  id: string
  links?: NoratoNavbarLink[]
  type?: NoratoNavbarLayout
  style?: NoratoNavbarStyle
  mobileType?: NoratoNavbarMobileType
  mobileStyle?: Extract<NoratoNavbarStyle, 'bar' | 'transparent'>
  linkStyle?: NoratoNavbarLinkStyle
  linkSize?: NoratoNavbarLinkSize
  brand?: string
  brandHref?: string
  activeHref?: string
  mobileTitle?: string
  search?: string
  searchPlaceholder?: string
  navigationLabel?: string
  mobileNavigationLabel?: string
  disabled?: boolean
  dir?: 'rtl' | 'ltr'
}>(), {
  links: () => [],
  type: 'website',
  style: 'bar',
  mobileType: 'default',
  mobileStyle: 'bar',
  linkStyle: 'pill',
  linkSize: 'medium',
  brand: 'نوراتو',
  brandHref: '/',
  mobileTitle: '',
  search: '',
  searchPlaceholder: 'جست‌وجو…',
  navigationLabel: 'ناوبری اصلی',
  mobileNavigationLabel: 'ناوبری موبایل',
  disabled: false,
  dir: 'rtl',
})

const emit = defineEmits<{
  'update:search': [value: string]
  back: []
  navigate: [item: NoratoNavbarLink]
}>()

const mobileOpen = ref(false)
const hasCurrentChild = (item: NoratoNavbarLink) => item.children?.some(child => child.current || (props.activeHref && child.href === props.activeHref)) ?? false
const isCurrent = (item: NoratoNavbarLink) => item.current || (props.activeHref && item.href === props.activeHref) || hasCurrentChild(item)
const title = computed(() => props.mobileTitle || props.brand)
const rootClass = computed(() => [
  'norato-navbar',
  `is-${props.type}`,
  `is-${props.style}`,
  `mobile-type-${props.mobileType}`,
  `mobile-is-${props.mobileStyle}`,
  `links-${props.linkStyle}`,
  `links-${props.linkSize}`,
  { 'is-disabled': props.disabled },
])

function navigate(item: NoratoNavbarLink) {
  if (props.disabled || item.disabled) return
  emit('navigate', item)
  mobileOpen.value = false
}

function onSearchInput(event: Event) {
  emit('update:search', (event.currentTarget as HTMLInputElement).value)
}
</script>

<template>
  <div :id="id" :class="rootClass" :dir="dir">
    <DialogRoot v-model:open="mobileOpen">
      <header class="norato-navbar__bar">
        <div class="norato-navbar__brand">
          <slot name="brand" :brand="brand" :href="brandHref">
            <a class="norato-navbar__brand-link" :href="brandHref" :aria-label="brand" @click="mobileOpen = false">
              <span class="norato-navbar__brand-mark" aria-hidden="true">ن</span>
              <span class="norato-navbar__brand-name">{{ brand }}</span>
            </a>
          </slot>
        </div>

        <NavigationMenuRoot class="norato-navbar__desktop-nav" :dir="dir" :aria-label="navigationLabel">
          <NavigationMenuList class="norato-navbar__link-list">
            <NavigationMenuItem v-for="(item, index) in links" :key="`${item.label}-${index}`" class="norato-navbar__link-item">
              <template v-if="item.children?.length">
                <span v-if="disabled || item.disabled" class="norato-navbar__link is-disabled" aria-disabled="true" :aria-current="isCurrent(item) ? 'page' : undefined">
                  <span v-if="item.icon" class="norato-navbar__item-icon" aria-hidden="true"><svg v-if="item.icon === 'home'" viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10h-6v-6H9v6H3z" /></svg><svg v-else-if="item.icon === 'grid'" viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></svg><span v-else>{{ item.icon }}</span></span>{{ item.label }}
                </span>
                <template v-else>
                  <NavigationMenuTrigger class="norato-navbar__link norato-navbar__link-trigger" :class="{ 'is-current': isCurrent(item) }">
                    <span v-if="item.icon" class="norato-navbar__item-icon" aria-hidden="true"><svg v-if="item.icon === 'home'" viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10h-6v-6H9v6H3z" /></svg><svg v-else-if="item.icon === 'grid'" viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></svg><span v-else>{{ item.icon }}</span></span>{{ item.label }}<svg class="norato-navbar__chevron" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m7 10 5 5 5-5" /></svg>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent class="norato-navbar__mega-panel">
                    <ul class="norato-navbar__mega-list">
                      <li v-for="(child, childIndex) in item.children" :key="`${child.label}-${childIndex}`">
                        <span v-if="child.disabled" class="norato-navbar__mega-link is-disabled" aria-disabled="true" :aria-current="isCurrent(child) ? 'page' : undefined">{{ child.label }}</span>
                        <NavigationMenuLink v-else-if="child.href" class="norato-navbar__mega-link" :href="child.href" :active="Boolean(isCurrent(child))" @click="navigate(child)">
                          <span>{{ child.label }}</span><span v-if="child.count !== undefined" class="norato-navbar__count">{{ child.count }}</span>
                        </NavigationMenuLink>
                        <span v-else class="norato-navbar__mega-link is-disabled" aria-disabled="true">{{ child.label }}</span>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </template>
              </template>
              <span v-else-if="disabled || item.disabled || !item.href" class="norato-navbar__link is-disabled" aria-disabled="true" :aria-current="isCurrent(item) ? 'page' : undefined">
                <span v-if="item.icon" class="norato-navbar__item-icon" aria-hidden="true"><svg v-if="item.icon === 'home'" viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10h-6v-6H9v6H3z" /></svg><svg v-else-if="item.icon === 'grid'" viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></svg><span v-else>{{ item.icon }}</span></span>{{ item.label }}<span v-if="item.count !== undefined" class="norato-navbar__count">{{ item.count }}</span>
              </span>
              <NavigationMenuLink v-else class="norato-navbar__link" :class="{ 'is-current': isCurrent(item) }" :href="item.href" :active="Boolean(isCurrent(item))" @click="navigate(item)">
                <span v-if="item.icon" class="norato-navbar__item-icon" aria-hidden="true"><svg v-if="item.icon === 'home'" viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10h-6v-6H9v6H3z" /></svg><svg v-else-if="item.icon === 'grid'" viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></svg><span v-else>{{ item.icon }}</span></span>{{ item.label }}<span v-if="item.count !== undefined" class="norato-navbar__count">{{ item.count }}</span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuRoot>

        <div class="norato-navbar__actions">
          <slot name="search" />
          <slot name="actions" />
          <slot name="avatar" />
        </div>

        <div class="norato-navbar__mobile-actions">
          <slot name="mobile-actions" />
          <DialogTrigger as-child>
            <button class="norato-navbar__menu-trigger" type="button" :disabled="disabled" :aria-label="mobileNavigationLabel" aria-haspopup="dialog">
              <span aria-hidden="true">☰</span>
            </button>
          </DialogTrigger>
        </div>
      </header>

      <div v-if="mobileType !== 'default'" class="norato-navbar__mobile-titlebar">
        <button v-if="mobileType === 'back'" class="norato-navbar__back" type="button" :disabled="disabled" aria-label="بازگشت" @click="emit('back')"><span aria-hidden="true">→</span></button>
        <DialogTrigger v-if="mobileType === 'back'" as-child>
          <button class="norato-navbar__menu-trigger" type="button" :disabled="disabled" :aria-label="mobileNavigationLabel" aria-haspopup="dialog"><span aria-hidden="true">☰</span></button>
        </DialogTrigger>
        <a v-if="mobileType !== 'search'" class="norato-navbar__mobile-heading" :class="{ 'is-large': mobileType === 'large-title' }" :href="brandHref" @click="mobileOpen = false">
          <span v-if="mobileType === 'large-title'" class="norato-navbar__mobile-brand">{{ brand }}</span>
          <span>{{ title }}</span>
        </a>
        <slot v-else name="mobile-search" :value="search" :update="(value: string) => emit('update:search', value)">
          <label class="norato-navbar__search-field">
            <input type="search" :aria-label="searchPlaceholder" :value="search" :placeholder="searchPlaceholder" :disabled="disabled" @input="onSearchInput" />
          </label>
        </slot>
        <slot name="mobile-title-actions" />
      </div>

      <DialogPortal>
        <DialogOverlay class="norato-navbar__drawer-overlay" />
        <DialogContent class="norato-navbar__drawer" :dir="dir">
          <header class="norato-navbar__drawer-header">
            <DialogTitle class="norato-navbar__drawer-title">{{ mobileNavigationLabel }}</DialogTitle>
            <DialogDescription class="norato-navbar__drawer-description">{{ brand }}</DialogDescription>
            <DialogClose as-child><button class="norato-navbar__drawer-close" type="button" aria-label="بستن منو"><span aria-hidden="true">×</span></button></DialogClose>
          </header>
          <nav :aria-label="mobileNavigationLabel" class="norato-navbar__drawer-nav">
            <ul class="norato-navbar__drawer-list">
              <li v-for="(item, index) in links" :key="`${item.label}-${index}`">
                <details v-if="item.children?.length && !disabled && !item.disabled" class="norato-navbar__drawer-group">
                  <summary class="norato-navbar__drawer-link">
                    <span>{{ item.label }}</span><svg class="norato-navbar__chevron" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m7 10 5 5 5-5" /></svg>
                  </summary>
                  <ul class="norato-navbar__drawer-sublist">
                    <li v-for="(child, childIndex) in item.children" :key="`${child.label}-${childIndex}`">
                      <span v-if="disabled || child.disabled" class="norato-navbar__drawer-link is-disabled" aria-disabled="true" :aria-current="isCurrent(child) ? 'page' : undefined">{{ child.label }}</span>
                      <a v-else-if="child.href" class="norato-navbar__drawer-link" :href="child.href" :aria-current="isCurrent(child) ? 'page' : undefined" @click="navigate(child)">{{ child.label }}</a>
                      <span v-else class="norato-navbar__drawer-link is-disabled" aria-disabled="true">{{ child.label }}</span>
                    </li>
                  </ul>
                </details>
                <span v-else-if="item.children?.length || disabled || item.disabled || !item.href" class="norato-navbar__drawer-link is-disabled" aria-disabled="true" :aria-current="isCurrent(item) ? 'page' : undefined">{{ item.label }}</span>
                <a v-else class="norato-navbar__drawer-link" :href="item.href" :aria-current="isCurrent(item) ? 'page' : undefined" @click="navigate(item)">
                  <span>{{ item.label }}</span><span v-if="item.count !== undefined" class="norato-navbar__count">{{ item.count }}</span>
                </a>
              </li>
            </ul>
          </nav>
          <div class="norato-navbar__drawer-actions"><slot name="actions" /><slot name="avatar" /></div>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  </div>
</template>

<style>
.norato-navbar{position:relative;z-index:var(--norato-layer-popover);inline-size:100%;min-inline-size:0;color:var(--norato-color-text-primary);font-family:var(--norato-font-body)}
.norato-navbar__bar{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:var(--norato-space-4);min-block-size:calc(var(--norato-control-target-min) + var(--norato-space-3));padding-inline:var(--norato-space-4);padding-block:var(--norato-space-2);border-block-end:var(--norato-border-thin) solid var(--norato-color-border-default);background:var(--norato-color-surface-default)}
.norato-navbar.is-bar{position:sticky;inset-block-start:0}
.norato-navbar.is-floating{margin:var(--norato-space-3) auto;inline-size:calc(100% - var(--norato-space-6));border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);box-shadow:0 var(--norato-space-1) var(--norato-space-3) var(--norato-color-glass-shadow);overflow:visible}
.norato-navbar.is-floating .norato-navbar__bar{border:0;border-radius:inherit;background:var(--norato-color-glass-surface-strong)}
.norato-navbar.is-transparent .norato-navbar__bar{border-color:transparent;background:transparent}.norato-navbar.mobile-is-transparent .norato-navbar__bar{border-color:transparent;background:transparent}
.norato-navbar__brand,.norato-navbar__actions,.norato-navbar__mobile-actions{display:flex;align-items:center;gap:var(--norato-space-2);min-inline-size:0}
.norato-navbar__brand-link{display:inline-flex;align-items:center;gap:var(--norato-space-2);min-block-size:var(--norato-control-target-min);color:inherit;text-decoration:none;white-space:nowrap}
.norato-navbar__brand-mark{display:grid;place-items:center;flex:none;inline-size:var(--norato-control-target-min);block-size:var(--norato-control-target-min);border-radius:var(--norato-radius-card);background:var(--norato-color-brand-yellow);color:var(--norato-color-text-primary);font-family:var(--norato-font-heading);font-size:var(--norato-type-heading-small-size);font-weight:var(--norato-type-heading-black-weight,900)}
.norato-navbar__brand-name{font-family:var(--norato-font-heading);font-weight:var(--norato-type-heading-title-weight)}
.norato-navbar.is-centered .norato-navbar__bar{grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)}
.norato-navbar.is-centered .norato-navbar__desktop-nav{grid-column:2;grid-row:1}
.norato-navbar.is-centered .norato-navbar__actions{grid-column:3;grid-row:1}
.norato-navbar__desktop-nav{min-inline-size:0}
.norato-navbar__link-list{display:flex;align-items:center;justify-content:center;gap:var(--norato-space-2);margin:0;padding:0;list-style:none}
.norato-navbar__link-item{position:relative;min-inline-size:0}
.norato-navbar__link,.norato-navbar__link-trigger{display:inline-flex;align-items:center;justify-content:center;gap:var(--norato-space-2);min-inline-size:var(--norato-control-target-min);min-block-size:var(--norato-control-target-min);padding-inline:var(--norato-space-3);border:0;border-radius:var(--norato-radius-pill);background:transparent;color:var(--norato-color-text-secondary);font:inherit;font-size:var(--norato-type-body-small-size);line-height:var(--norato-type-body-regular-line-height);text-decoration:none;white-space:nowrap;cursor:pointer}
.norato-navbar.links-small .norato-navbar__link{font-size:var(--norato-type-body-caption-size)}
.norato-navbar.links-underline .norato-navbar__link{border-radius:0}
.norato-navbar.links-underline .norato-navbar__link.is-current{box-shadow:inset 0 calc(-1 * var(--norato-border-medium)) var(--norato-color-brand-yellow)}
.norato-navbar__link:hover{background:var(--norato-color-surface-subtle);color:var(--norato-color-text-primary)}
.norato-navbar__link.is-current,.norato-navbar__link-trigger.is-current,.norato-navbar__link-trigger[data-state="open"]{background:var(--norato-color-warning-container);color:var(--norato-color-text-primary)}
.norato-navbar.links-underline .norato-navbar__link:hover,.norato-navbar.links-underline .norato-navbar__link-trigger:hover{background:transparent;color:var(--norato-color-text-primary);box-shadow:inset 0 calc(-1 * var(--norato-border-medium)) var(--norato-color-brand-yellow)}
.norato-navbar__link:focus-visible,.norato-navbar__brand-link:focus-visible,.norato-navbar__menu-trigger:focus-visible,.norato-navbar__back:focus-visible,.norato-navbar__drawer-close:focus-visible,.norato-navbar__mobile-heading:focus-visible,.norato-navbar__search-field input:focus-visible,.norato-navbar__drawer-link:focus-visible,.norato-navbar__mega-link:focus-visible{outline:var(--norato-border-medium) solid var(--norato-color-brand-yellow);outline-offset:var(--norato-space-1)}
.norato-navbar__link.is-disabled,.norato-navbar__drawer-link.is-disabled{color:var(--norato-color-text-disabled);cursor:not-allowed}
.norato-navbar.is-disabled .norato-navbar__link{pointer-events:none}
.norato-navbar__item-icon{display:inline-grid;place-items:center;flex:none;inline-size:var(--norato-icon-sm);block-size:var(--norato-icon-sm)}
.norato-navbar__item-icon svg{display:block;inline-size:100%;block-size:100%;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.norato-navbar__chevron{display:block;flex:none;inline-size:var(--norato-icon-sm);block-size:var(--norato-icon-sm);fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform var(--norato-motion-duration-press) var(--norato-motion-ease-out)}
.norato-navbar__link-trigger[data-state="open"] .norato-navbar__chevron,.norato-navbar__drawer-group[open]>.norato-navbar__drawer-link .norato-navbar__chevron{transform:rotate(180deg)}
.norato-navbar__count{display:inline-grid;place-items:center;min-inline-size:var(--norato-space-6);min-block-size:var(--norato-space-6);padding-inline:var(--norato-space-1);border-radius:var(--norato-radius-pill);background:var(--norato-color-info-container);color:var(--norato-color-brand-blue);font-size:var(--norato-type-body-min-size);direction:ltr}
.norato-navbar__mega-panel{position:absolute;z-index:var(--norato-layer-popover);inset-block-start:calc(100% + var(--norato-space-1));inset-inline-start:0;inline-size:min(var(--norato-navbar-mega-menu-max-inline-size),calc(100vw - var(--norato-space-6)));max-block-size:min(70vh,480px);overflow:auto;padding:var(--norato-space-2);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-default);box-shadow:0 var(--norato-space-2) var(--norato-space-6) var(--norato-color-glass-shadow)}
.norato-navbar__mega-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:var(--norato-space-1);margin:0;padding:0;list-style:none}
.norato-navbar__mega-link{display:flex;align-items:center;justify-content:space-between;gap:var(--norato-space-2);min-block-size:var(--norato-control-target-min);padding-inline:var(--norato-space-3);border-radius:var(--norato-radius-tag);color:var(--norato-color-text-primary);text-decoration:none}
.norato-navbar__mega-link:hover{background:var(--norato-color-warning-container);color:var(--norato-color-text-primary)}
.norato-navbar__mobile-actions,.norato-navbar__mobile-titlebar{display:none}
.norato-navbar__menu-trigger,.norato-navbar__drawer-close,.norato-navbar__back{display:grid;place-items:center;flex:none;inline-size:var(--norato-control-target-min);block-size:var(--norato-control-target-min);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-card);background:var(--norato-color-surface-default);color:var(--norato-color-text-primary);font:inherit;font-size:var(--norato-type-heading-small-size);cursor:pointer}
.norato-navbar__menu-trigger:disabled,.norato-navbar__back:disabled{color:var(--norato-color-text-disabled);cursor:not-allowed}
.norato-navbar__drawer-overlay{position:fixed;z-index:calc(var(--norato-layer-popover) + 1);inset:0;background:var(--norato-color-glass-shadow);backdrop-filter:blur(var(--norato-space-1))}
.norato-navbar__drawer{position:fixed;z-index:calc(var(--norato-layer-popover) + 2);inset-block:0;inset-inline-start:0;display:grid;grid-template-rows:auto minmax(0,1fr) auto;gap:var(--norato-space-3);inline-size:min(var(--norato-navbar-drawer-inline-size),calc(100vw - var(--norato-space-8)));max-block-size:100dvh;overflow:auto;padding:var(--norato-space-4);background:var(--norato-color-surface-default);color:var(--norato-color-text-primary);box-shadow:var(--norato-elevation-modal)}
.norato-navbar__drawer-header{position:relative;display:grid;gap:var(--norato-space-1);padding-inline-end:var(--norato-control-target-min)}
.norato-navbar__drawer-title{font-family:var(--norato-font-heading);font-weight:var(--norato-type-heading-title-weight)}
.norato-navbar__drawer-description{color:var(--norato-color-text-secondary);font-size:var(--norato-type-body-small-size)}
.norato-navbar__drawer-close{position:absolute;inset-block-start:0;inset-inline-end:0}
.norato-navbar__drawer-nav{overflow:auto}
.norato-navbar__drawer-list,.norato-navbar__drawer-sublist{display:grid;gap:var(--norato-space-1);margin:0;padding:0;list-style:none}
.norato-navbar__drawer-sublist{padding-inline-start:var(--norato-space-3)}
.norato-navbar__drawer-link{display:flex;align-items:center;justify-content:space-between;gap:var(--norato-space-2);min-block-size:var(--norato-control-target-min);padding-inline:var(--norato-space-3);border-radius:var(--norato-radius-control);color:var(--norato-color-text-primary);text-decoration:none;cursor:pointer}
.norato-navbar__drawer-link:hover,.norato-navbar__drawer-link[aria-current="page"]{background:var(--norato-color-warning-container);color:var(--norato-color-text-primary)}
.norato-navbar__drawer-actions{display:flex;flex-wrap:wrap;gap:var(--norato-space-2);padding-block-start:var(--norato-space-3);border-block-start:var(--norato-border-thin) solid var(--norato-color-border-default)}
.norato-navbar__mobile-heading{display:grid;gap:var(--norato-space-1);min-inline-size:0;color:inherit;text-decoration:none}
.norato-navbar__mobile-heading.is-large{font-family:var(--norato-font-heading);font-size:var(--norato-type-doc-section-size);font-weight:var(--norato-type-heading-title-weight)}
.norato-navbar__mobile-brand{color:var(--norato-color-text-secondary);font-family:var(--norato-font-body);font-size:var(--norato-type-body-small-size);font-weight:var(--norato-type-body-medium-weight,500)}
.norato-navbar__search-field{min-inline-size:0;flex:1}
.norato-navbar__search-field input{inline-size:100%;min-block-size:var(--norato-control-target-min);padding-inline:var(--norato-space-3);border:var(--norato-border-thin) solid var(--norato-color-border-default);border-radius:var(--norato-radius-control);background:var(--norato-color-surface-default);color:var(--norato-color-text-primary);font:inherit}
.norato-navbar__search-field input:disabled{color:var(--norato-color-text-disabled)}

@media(max-width:700px){
  .norato-navbar__bar{grid-template-columns:minmax(0,1fr) auto;gap:var(--norato-space-2);padding-inline:var(--norato-space-3)}
  .norato-navbar__desktop-nav,.norato-navbar__actions{display:none}
  .norato-navbar__mobile-actions{display:flex}
  .norato-navbar.mobile-type-back .norato-navbar__bar{display:none}.norato-navbar.mobile-type-search .norato-navbar__brand{display:none}
  .norato-navbar.mobile-type-back .norato-navbar__bar .norato-navbar__menu-trigger{display:none}
  .norato-navbar.mobile-type-large-title .norato-navbar__brand{display:none}
  .norato-navbar__mobile-titlebar{display:flex;align-items:center;gap:var(--norato-space-2);min-inline-size:0;min-block-size:var(--norato-control-target-min);padding:var(--norato-space-2) var(--norato-space-3);border-block-start:var(--norato-border-thin) solid var(--norato-color-border-default);background:var(--norato-color-surface-default)}
  .norato-navbar.mobile-is-transparent .norato-navbar__mobile-titlebar{border-color:transparent;background:transparent}
  .norato-navbar__mobile-heading{flex:1}
  .norato-navbar__mobile-heading.is-large{min-block-size:calc(var(--norato-control-target-min) + var(--norato-space-6))}
  .norato-navbar.is-centered .norato-navbar__bar{grid-template-columns:minmax(0,1fr) auto}
}
@media(prefers-reduced-motion:reduce){.norato-navbar *{scroll-behavior:auto!important;transition-duration:0ms!important;animation-duration:0ms!important;animation-iteration-count:1!important}}
</style>


