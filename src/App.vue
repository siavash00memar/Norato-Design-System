<script setup lang="ts">
import { ref } from 'vue'
import {
  NoratoButton,
  NoratoChoiceOption,
  NoratoDatePicker,
  NoratoField,
  NoratoFieldGroup,
  NoratoIcon,
  NoratoMessage,
  NoratoProgress,
  NoratoQuestion,
  NoratoSelector,
  NoratoTag,
  NoratoTreeSelect,
  NoratoUploadCard,
} from './components'

const choice = ref('one')
const radio = ref(true)
const checkbox = ref(false)
const name = ref('')
const surname = ref('')
const tags = ref(['لورم ایپسوم متن ساختگی با تولید', 'نوراتو'])
</script>

<template>
  <main class="min-h-screen bg-[#f7f7f7] px-4 py-8 text-norato-ink sm:px-6 lg:px-10" dir="rtl">
    <div class="mx-auto max-w-7xl">
      <header class="mb-8 flex flex-col gap-3 border-b border-norato-line pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 class="text-2xl font-black text-norato-ink">Norato Design System</h1>
          <p class="mt-2 max-w-2xl text-sm leading-7 text-norato-muted">
            مرجع Vue.js و Tailwind برای ساخت UIهای نوراتو بر اساس کامپوننت‌های صفحه Figma.
          </p>
        </div>
        <div class="flex gap-3">
          <NoratoButton icon="arrow-right">قبلی</NoratoButton>
          <NoratoButton variant="secondary" icon="arrow-left">بعدی</NoratoButton>
        </div>
      </header>

      <section class="mb-8 grid gap-4 md:grid-cols-3">
        <NoratoMessage>به فصل اول ماجراجویی نوراتو خوش اومدی</NoratoMessage>
        <NoratoMessage kind="welcome">به نوراتو خوش‌آمدید</NoratoMessage>
        <NoratoMessage kind="subtle">مسیری برای پیمودن</NoratoMessage>
      </section>

      <section class="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div class="grid gap-6">
          <div class="norato-section">
            <h2 class="norato-section-title">دکمه‌ها و پیشرفت</h2>
            <div class="mb-6 flex flex-wrap gap-3">
              <NoratoButton>متن</NoratoButton>
              <NoratoButton variant="secondary">متن</NoratoButton>
              <div class="rounded-section bg-norato-text-primary p-component-sm">
                <NoratoButton variant="inverse">متن</NoratoButton>
              </div>
              <NoratoButton disabled>متن</NoratoButton>
              <NoratoButton loading>متن</NoratoButton>
            </div>
            <NoratoProgress :value="36" />
          </div>

          <div class="norato-section">
            <h2 class="norato-section-title">فرم‌ها</h2>
            <div class="grid gap-4">
              <NoratoField v-model="name" label="نام" placeholder="نام خود را بنویسید" />
              <NoratoField v-model="surname" label="نام خانوادگی" placeholder="نام خانوادگی خود را بنویسید" />
              <NoratoField icon="search" label="" placeholder="جستجو" />
              <NoratoDatePicker label="تاریخ تولد" />
              <NoratoField icon="chevron-down" label="تایتل" placeholder="لورم ایپسوم متن ساختگی با تولید" readonly />
            </div>
          </div>

          <div class="norato-section">
            <h2 class="norato-section-title">انتخاب‌ها و لینک‌ها</h2>
            <div class="flex flex-wrap items-center gap-5">
              <NoratoSelector v-model="radio" type="radio" label="مرد" />
              <NoratoSelector v-model="checkbox" type="checkbox" label="تکمیل شد" />
              <a class="text-sm font-bold text-norato-primary underline-offset-4 hover:underline" href="#">متن ساختگی</a>
              <a class="text-sm text-norato-muted underline-offset-4 hover:text-norato-primary hover:underline" href="#">
                لورم ایپسوم متن ساختگی با تولید سادگی
              </a>
            </div>
          </div>

          <div class="norato-section">
            <h2 class="norato-section-title">تگ‌ها</h2>
            <div class="mb-4 flex flex-wrap gap-2">
              <NoratoTag
                v-for="tag in tags"
                :key="tag"
                :label="tag"
                removable
                @remove="tags = tags.filter((item) => item !== tag)"
              />
            </div>
            <div class="min-h-[88px] rounded-norato border border-norato-line bg-white p-3">
              <NoratoTag label="لورم ایپسوم متن ساختگی با تولید" removable />
            </div>
          </div>

          <div class="norato-section">
            <h2 class="norato-section-title">Field Group</h2>
            <NoratoFieldGroup />
          </div>
        </div>

        <div class="grid gap-6">
          <div class="norato-section">
            <h2 class="norato-section-title">سوال چندگزینه‌ای</h2>
            <div class="grid gap-4 xl:grid-cols-[1fr_1fr]">
              <NoratoQuestion
                :number="1"
                time="۱۵ دقیقه"
                question="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
              />
              <div class="rounded-norato border border-norato-line bg-white p-4 shadow-norato-sm">
                <NoratoChoiceOption
                  v-for="option in [
                    ['one', 'لورم ایپسوم متن ساختگی با تولید سادگی'],
                    ['two', 'لورم ایپسوم متن ساختگی با تولید'],
                    ['three', 'گزینه سوم برای فعالیت نوراتو'],
                    ['four', 'گزینه چهارم'],
                  ]"
                  :key="option[0]"
                  v-model="choice"
                  :value="option[0]"
                  :label="option[1]"
                  class="mb-3"
                />
              </div>
            </div>
          </div>

          <div class="norato-section">
            <h2 class="norato-section-title">نمونه تکمیل اطلاعات</h2>
            <div class="norato-fields-example">
              <p class="norato-fields-example__title">اطلاعات زیر را تکمیل کن</p>
              <div class="norato-fields-example__card">
                <div class="norato-fields-example__row norato-fields-example__row--gender">
                  <span class="norato-fields-example__label">جنسیت</span>
                  <div class="norato-fields-example__gender-options">
                    <button
                      type="button"
                      class="norato-gender-option"
                      :class="{ 'is-active': radio }"
                      @click="radio = true"
                    >
                      <span class="norato-gender-option__mark" />
                      <NoratoIcon name="man" :size="24" class="norato-gender-option__icon" />
                      <span class="norato-gender-option__text">مرد</span>
                    </button>
                    <button
                      type="button"
                      class="norato-gender-option"
                      :class="{ 'is-active': !radio }"
                      @click="radio = false"
                    >
                      <span class="norato-gender-option__mark" />
                      <NoratoIcon name="woman" :size="24" class="norato-gender-option__icon" />
                      <span class="norato-gender-option__text">زن</span>
                    </button>
                  </div>
                </div>

                <label class="norato-fields-example__row">
                  <span class="norato-fields-example__label">نام</span>
                  <input
                    v-model="name"
                    class="norato-fields-example__input"
                    placeholder="نام خود را بنویسید"
                  />
                </label>

                <label class="norato-fields-example__row">
                  <span class="norato-fields-example__label">نام خانوادگی</span>
                  <input
                    v-model="surname"
                    class="norato-fields-example__input"
                    placeholder="نام خانوادگی خود را بنویسید"
                  />
                </label>

                <div class="norato-fields-example__row norato-fields-example__row--date">
                  <span class="norato-fields-example__label">تاریخ تولد</span>
                  <div class="norato-fields-example__date" dir="ltr">
                    <button type="button" class="norato-fields-example__date-icon" aria-label="انتخاب تاریخ">
                      <NoratoIcon name="calendar" :size="24" class="text-black" />
                    </button>
                    <div class="norato-fields-example__date-box" aria-hidden="true">
                      <span>/</span>
                      <span>/</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid gap-6 xl:grid-cols-[324px_1fr]">
            <NoratoUploadCard />
            <div class="norato-section">
              <h2 class="norato-section-title">Drag Field و Like</h2>
              <div class="mb-5 grid gap-3">
                <label class="grid grid-cols-[1fr_auto] items-center gap-3">
                  <div class="flex h-9 items-center gap-2 rounded-norato border border-norato-line bg-white px-3">
                    <NoratoIcon name="drag" :size="22" class="text-norato-subtle" />
                    <span class="text-sm font-bold">تایتل</span>
                  </div>
                  <span class="text-sm text-norato-muted">تایتل عدد</span>
                </label>
                <p class="text-right text-sm leading-7 text-norato-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
              <div class="flex gap-3">
                <button class="grid h-9 w-[52px] place-items-center rounded-norato border border-norato-line bg-white text-norato-primary">
                  <NoratoIcon name="like" :size="21" />
                </button>
                <button class="grid h-9 w-[52px] place-items-center rounded-norato border border-norato-line bg-white text-norato-muted">
                  <NoratoIcon name="dislike" :size="21" />
                </button>
              </div>
            </div>
          </div>

          <div class="norato-section">
            <h2 class="norato-section-title">Multi Select Tree View</h2>
            <NoratoTreeSelect />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
