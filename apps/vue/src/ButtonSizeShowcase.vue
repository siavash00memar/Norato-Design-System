<script setup lang="ts">
const sizes = [{ name: 'Small', px: 32 }, { name: 'Medium', px: 40 }, { name: 'Large', px: 48 }, { name: 'XLarge', px: 56 }]
</script>

<template>
  <div class="button-size-reference" dir="rtl">
    <div><strong>ارتفاع‌های قراردادی دکمه</strong><span>نمونه‌ها غیرفعال‌اند؛ API فعلی prop اندازه ندارد و هدف تعاملی واقعی حداقل ۴۸px است.</span></div>
    <div class="size-samples"><span v-for="size in sizes" :key="size.name" class="size-sample"><i class="button-size-shape" aria-hidden="true" :style="{ blockSize: `${size.px}px` }">ذخیره</i><b>{{ size.name }}</b><small dir="ltr">{{ size.px }}px</small></span></div>
  </div>
</template>
