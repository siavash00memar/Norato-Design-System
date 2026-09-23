<script setup lang="ts">
const features = ['RTL-first', 'توکن‌محور', 'دسترس‌پذیر']
</script>

<template>
  <main class="shell">
    <section class="hero" aria-labelledby="page-title">
      <p class="eyebrow">Norato Design System</p>
      <h1 id="page-title">سطح اصلی Vue.js نوراتو</h1>
      <p class="intro">
        این اپلیکیشن، نقطهٔ شروع رسمی برای توسعهٔ کامپوننت‌ها و مستندات نوراتو است.
      </p>
      <div class="features" aria-label="ویژگی‌های نوراتو">
        <span v-for="feature in features" :key="feature" class="pill">{{ feature }}</span>
      </div>
    </section>
  </main>
</template>
