<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from 'reka-ui'
import '../notification-center.css'

export type NoratoNotificationType = 'system' | 'user' | 'action'
export type NoratoNotificationAction = { id: string; label: string }
export type NoratoNotification = {
  id: string
  title: string
  description?: string
  time: string
  group?: string
  type?: NoratoNotificationType
  read?: boolean
  mention?: boolean
  avatarName?: string
  avatarSrc?: string
  actions?: NoratoNotificationAction[]
}
export type NoratoNotificationPresentation = 'popover' | 'panel'

const props = withDefaults(defineProps<{
  id: string
  label?: string
  defaultNotifications?: NoratoNotification[]
  presentation?: NoratoNotificationPresentation
  disabled?: boolean
  dir?: 'rtl' | 'ltr'
  emptyTitle?: string
  emptyDescription?: string
}>(), {
  label: 'اعلان‌ها',
  defaultNotifications: () => [],
  presentation: 'popover',
  disabled: false,
  dir: 'rtl',
  emptyTitle: 'اعلان تازه‌ای نداری',
  emptyDescription: 'وقتی پیامی دریافت کنی، اینجا نمایش داده می‌شود.',
})

const emit = defineEmits<{
  'mark-all-read': []
  select: [notification: NoratoNotification]
  action: [notification: NoratoNotification, action: NoratoNotificationAction]
}>()

const open = defineModel<boolean>('open', { default: false })
const notificationsModel = defineModel<NoratoNotification[] | undefined>({ default: undefined })
const localNotifications = ref([...props.defaultNotifications])
const activeFilter = ref<'all' | 'mentions'>('all')
const notifications = computed(() => notificationsModel.value ?? localNotifications.value)
const unreadCount = computed(() => notifications.value.filter(item => !item.read).length)
const badgeText = computed(() => unreadCount.value > 99 ? '۹۹+' : new Intl.NumberFormat('fa-IR').format(unreadCount.value))
const visibleNotifications = computed(() => notifications.value.filter(item => activeFilter.value === 'all' || item.mention))
const groups = computed(() => {
  const result: { label: string; items: NoratoNotification[] }[] = []
  for (const item of visibleNotifications.value) {
    const label = item.group ?? ''
    let group = result.find(entry => entry.label === label)
    if (!group) { group = { label, items: [] }; result.push(group) }
    group.items.push(item)
  }
  return result
})
const triggerLabel = computed(() => `${props.label}${unreadCount.value ? `، ${badgeText.value} اعلان جدید` : ''}`)
const unreadAnnouncement = computed(() => unreadCount.value ? `${badgeText.value} اعلان خوانده‌نشده` : 'همهٔ اعلان‌ها خوانده شده‌اند')

function updateNotifications(next: NoratoNotification[]) {
  if (notificationsModel.value !== undefined) notificationsModel.value = next
  else localNotifications.value = next
}

function markRead(notification: NoratoNotification) {
  if (notification.read) return
  updateNotifications(notifications.value.map(item => item.id === notification.id ? { ...item, read: true } : item))
}

function selectNotification(notification: NoratoNotification) {
  markRead(notification)
  emit('select', notification)
  open.value = false
}

function runAction(notification: NoratoNotification, action: NoratoNotificationAction) {
  markRead(notification)
  emit('action', notification, action)
}

function markAllRead() {
  if (!unreadCount.value) return
  updateNotifications(notifications.value.map(item => ({ ...item, read: true })))
  emit('mark-all-read')
}

function initials(name = '') {
  return Array.from(name.trim()).slice(0, 2).join('') || 'ن'
}
</script>

<template>
  <div class="norato-notification-center" :data-presentation="presentation" :dir="dir">
    <span class="norato-notification-center__sr-only" aria-live="polite" aria-atomic="true">{{ unreadAnnouncement }}</span>
    <PopoverRoot v-if="presentation === 'popover'" v-model:open="open" :dir="dir">
      <PopoverTrigger as-child :disabled="disabled">
        <button class="norato-notification-center__bell" type="button" :disabled="disabled" :aria-label="triggerLabel" :aria-haspopup="'dialog'">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg>
          <span v-if="unreadCount" class="norato-notification-center__badge" aria-hidden="true">{{ badgeText }}</span>
        </button>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent class="norato-notification-center__content" :id="`${id}-popover`" :aria-labelledby="`${id}-popover-title`" side="bottom" align="end" :side-offset="8" :collision-padding="8" :dir="dir">
          <header class="norato-notification-center__header">
            <h2 :id="`${id}-popover-title`" class="norato-notification-center__title">{{ label }}</h2>
            <button class="norato-notification-center__mark-all" type="button" :disabled="!unreadCount" @click="markAllRead">خواندن همه</button>
          </header>
          <div class="norato-notification-center__tabs" role="group" :aria-label="`${label}، دسته‌بندی`">
            <button type="button" :aria-pressed="activeFilter === 'all'" @click="activeFilter = 'all'">همه</button>
            <button type="button" :aria-pressed="activeFilter === 'mentions'" @click="activeFilter = 'mentions'">منشن‌ها</button>
          </div>
          <div v-if="visibleNotifications.length" class="norato-notification-center__groups">
            <section v-for="group in groups" :key="group.label || 'ungrouped'" class="norato-notification-center__group" :aria-label="group.label || undefined">
              <h3 v-if="group.label" class="norato-notification-center__group-title">{{ group.label }}</h3>
              <ul class="norato-notification-center__list">
                <li v-for="notification in group.items" :key="notification.id" class="norato-notification-center__item" :data-unread="!notification.read || undefined" :data-kind="notification.type ?? 'system'">
                  <button class="norato-notification-center__item-main" type="button" :aria-label="`${notification.title}${notification.description ? `، ${notification.description}` : ''}، ${notification.time}${notification.read ? '' : '، خوانده‌نشده'}`" @click="selectNotification(notification)">
                    <span class="norato-notification-center__avatar" aria-hidden="true">
                      <img v-if="notification.avatarSrc" :src="notification.avatarSrc" alt="" />
                      <span v-else-if="notification.avatarName">{{ initials(notification.avatarName) }}</span>
                      <svg v-else viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 4v5l3 2" /></svg>
                    </span>
                    <span class="norato-notification-center__copy">
                      <strong>{{ notification.title }}</strong>
                      <span v-if="notification.description">{{ notification.description }}</span>
                      <time>{{ notification.time }}</time>
                    </span>
                    <i v-if="!notification.read" class="norato-notification-center__unread" aria-hidden="true" />
                  </button>
                  <div v-if="notification.actions?.length" class="norato-notification-center__actions">
                    <button v-for="action in notification.actions" :key="action.id" type="button" @click="runAction(notification, action)">{{ action.label }}</button>
                  </div>
                </li>
              </ul>
            </section>
          </div>
          <div v-else class="norato-notification-center__empty" role="status">
            <span class="norato-notification-center__empty-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg></span>
            <strong>{{ emptyTitle }}</strong><p>{{ emptyDescription }}</p>
          </div>
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>

    <DialogRoot v-else v-model:open="open">
      <DialogTrigger as-child :disabled="disabled">
        <button class="norato-notification-center__bell" type="button" :disabled="disabled" :aria-label="triggerLabel">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg>
          <span v-if="unreadCount" class="norato-notification-center__badge" aria-hidden="true">{{ badgeText }}</span>
        </button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay class="norato-notification-center__overlay" />
        <DialogContent :id="`${id}-panel`" class="norato-notification-center__panel" :dir="dir">
          <header class="norato-notification-center__header">
            <div><DialogTitle class="norato-notification-center__title">{{ label }}</DialogTitle><p class="norato-notification-center__panel-count">{{ unreadCount ? `${badgeText} اعلان خوانده‌نشده` : 'همهٔ اعلان‌ها خوانده شده‌اند' }}</p></div>
            <DialogClose as-child><button class="norato-notification-center__close" type="button" aria-label="بستن اعلان‌ها"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button></DialogClose>
          </header>
          <button class="norato-notification-center__mark-all" type="button" :disabled="!unreadCount" @click="markAllRead">خواندن همه</button>
          <div class="norato-notification-center__tabs" role="group" :aria-label="`${label}، دسته‌بندی`">
            <button type="button" :aria-pressed="activeFilter === 'all'" @click="activeFilter = 'all'">همه</button>
            <button type="button" :aria-pressed="activeFilter === 'mentions'" @click="activeFilter = 'mentions'">منشن‌ها</button>
          </div>
          <div v-if="visibleNotifications.length" class="norato-notification-center__groups">
            <section v-for="group in groups" :key="group.label || 'ungrouped'" class="norato-notification-center__group" :aria-label="group.label || undefined">
              <h3 v-if="group.label" class="norato-notification-center__group-title">{{ group.label }}</h3>
              <ul class="norato-notification-center__list">
                <li v-for="notification in group.items" :key="notification.id" class="norato-notification-center__item" :data-unread="!notification.read || undefined" :data-kind="notification.type ?? 'system'">
                  <button class="norato-notification-center__item-main" type="button" :aria-label="`${notification.title}${notification.description ? `، ${notification.description}` : ''}، ${notification.time}${notification.read ? '' : '، خوانده‌نشده'}`" @click="selectNotification(notification)">
                    <span class="norato-notification-center__avatar" aria-hidden="true"><img v-if="notification.avatarSrc" :src="notification.avatarSrc" alt="" /><span v-else-if="notification.avatarName">{{ initials(notification.avatarName) }}</span><svg v-else viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 4v5l3 2" /></svg></span>
                    <span class="norato-notification-center__copy"><strong>{{ notification.title }}</strong><span v-if="notification.description">{{ notification.description }}</span><time>{{ notification.time }}</time></span>
                    <i v-if="!notification.read" class="norato-notification-center__unread" aria-hidden="true" />
                  </button>
                  <div v-if="notification.actions?.length" class="norato-notification-center__actions"><button v-for="action in notification.actions" :key="action.id" type="button" @click="runAction(notification, action)">{{ action.label }}</button></div>
                </li>
              </ul>
            </section>
          </div>
          <div v-else class="norato-notification-center__empty" role="status"><span class="norato-notification-center__empty-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg></span><strong>{{ emptyTitle }}</strong><p>{{ emptyDescription }}</p></div>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  </div>
</template>
