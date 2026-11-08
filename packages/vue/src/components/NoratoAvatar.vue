<script setup lang="ts">
import { computed, ref, watch } from 'vue'

export type NoratoAvatarSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl'
export type NoratoAvatarShape = 'circle' | 'square'
export type NoratoAvatarType = 'image' | 'initials' | 'icon'
export type NoratoAvatarPresence = 'online' | 'busy' | 'away' | 'offline'

const props = withDefaults(defineProps<{
  name: string
  type?: NoratoAvatarType
  src?: string
  initials?: string
  size?: NoratoAvatarSize
  shape?: NoratoAvatarShape
  status?: NoratoAvatarPresence | 'none'
  dir?: 'rtl' | 'ltr'
  decorative?: boolean
}>(), {
  type: 'initials',
  size: 'm',
  shape: 'circle',
  status: 'none',
  dir: 'rtl',
  decorative: false,
})

const imageFailed = ref(false)
watch(() => props.src, () => { imageFailed.value = false })

const presenceLabels: Record<NoratoAvatarPresence, string> = {
  online: 'آنلاین',
  busy: 'مشغول',
  away: 'غایب',
  offline: 'آفلاین',
}

function graphemes(value: string) {
  const normalized = value.trim()
  if (!normalized) return []
  if (typeof Intl.Segmenter === 'function') {
    return Array.from(new Intl.Segmenter('fa', { granularity: 'grapheme' }).segment(normalized), part => part.segment)
  }
  const clusters: string[] = []
  for (const codePoint of Array.from(normalized)) {
    if (/\p{Mark}/u.test(codePoint) && clusters.length) clusters[clusters.length - 1] += codePoint
    else clusters.push(codePoint)
  }
  return clusters
}

function deriveInitials(value: string) {
  const words = value.trim().split(/\s+/u).filter(Boolean)
  if (!words.length) return ''
  const first = graphemes(words[0])[0] ?? ''
  const lastWord = words.length > 1 ? words[words.length - 1] : ''
  const second = lastWord ? graphemes(lastWord)[0] ?? '' : graphemes(words[0])[1] ?? ''
  return first + second
}

const displayInitials = computed(() => {
  const explicit = props.initials?.trim()
  return explicit ? graphemes(explicit).slice(0, 2).join('') : deriveInitials(props.name)
})
const showImage = computed(() => props.type === 'image' && !!props.src && !imageFailed.value)
const showIcon = computed(() => props.type === 'icon' || (!displayInitials.value && !showImage.value))
const accessibleName = computed(() => {
  const status = props.status !== 'none' ? '، ' + presenceLabels[props.status] : ''
  return (props.name.trim() || 'آواتار') + status
})

function markImageFailed() {
  imageFailed.value = true
}
</script>

<template>
  <span
    class="norato-avatar"
    :data-size="size"
    :data-shape="shape"
    :data-type="type"
    :data-status="status"
    :dir="dir"
    :role="decorative ? undefined : 'img'"
    :aria-label="decorative ? undefined : accessibleName"
    :aria-hidden="decorative ? 'true' : undefined"
  >
    <img v-if="showImage" class="norato-avatar__image" :src="src" alt="" loading="lazy" decoding="async" @error="markImageFailed" />
    <span v-else-if="!showIcon" class="norato-avatar__initials" aria-hidden="true">{{ displayInitials }}</span>
    <svg v-else class="norato-avatar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </svg>
    <i v-if="status !== 'none'" class="norato-avatar__presence" aria-hidden="true" />
  </span>
</template>
