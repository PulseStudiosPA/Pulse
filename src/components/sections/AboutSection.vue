<template>
  <section id="about" class="relative py-24 sm:py-32 bg-[#F7F6FC] text-slate-900 overflow-hidden">
    <div
      class="absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-violet-300/30 blur-[120px] pointer-events-none"
      aria-hidden="true"
    />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
        <div class="lg:col-span-5 self-center">
          <p v-reveal class="eyebrow !text-violet-700">{{ m.about.eyebrow }}</p>
          <h2 v-reveal="60" class="mt-5 text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-slate-950 text-balance">
            {{ m.about.title }}
          </h2>
          <p v-reveal="120" class="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            {{ m.about.text }}
          </p>
          <a
            v-reveal="180"
            href="#productos"
            class="group mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-950 hover:bg-primary text-white text-sm font-semibold transition-colors"
          >
            {{ m.about.productsCta }}
            <span class="transition-transform group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 sm:auto-rows-fr gap-4">
          <article
            v-for="(pillar, i) in m.about.pillars"
            :key="pillar.title"
            v-reveal="i * 80"
            class="group h-full rounded-3xl bg-white p-7 ring-1 ring-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_24px_48px_-20px_rgba(124,58,237,0.25)] hover:ring-violet-300 transition-[box-shadow,transform] duration-300 hover:-translate-y-1"
          >
            <span class="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-violet-50 ring-1 ring-violet-200 text-primary">
              <component :is="icons[i]" class="w-5 h-5" aria-hidden="true" />
            </span>
            <h3 class="mt-6 text-lg font-semibold text-slate-950">{{ pillar.title }}</h3>
            <p class="mt-2 text-sm text-slate-600 leading-relaxed">{{ pillar.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CubeTransparentIcon,
} from '@heroicons/vue/24/outline'
import { useI18n } from '@/i18n'

const { m } = useI18n()

const icons = [ChatBubbleLeftRightIcon, ShieldCheckIcon, UserGroupIcon, CubeTransparentIcon]
</script>
