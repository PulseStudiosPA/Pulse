<template>
  <section id="engagement" class="relative py-24 sm:py-32 bg-[#0A0A2E]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <p v-reveal class="eyebrow justify-center">{{ m.engagement.eyebrow }}</p>
        <h2 v-reveal="60" class="mt-5 text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white text-balance">
          {{ m.engagement.title }}
        </h2>
      </div>

      <div class="mt-14 grid gap-4 lg:grid-cols-3 items-stretch">
        <article
          v-for="(model, i) in m.engagement.models"
          :key="model.title"
          v-reveal="i * 90"
          v-spotlight
          class="relative flex flex-col rounded-3xl p-7 sm:p-8"
          :class="model.featured
            ? 'bg-gradient-to-b from-violet-600/25 to-[#0F0F33] ring-1 ring-violet-400/40 shadow-[0_30px_80px_-30px_rgba(124,58,237,0.6)]'
            : 'bg-[#0F0F33] ring-1 ring-white/[0.07]'"
        >
          <div class="flex items-center justify-between gap-3">
            <h3 class="text-xl font-semibold text-white">{{ model.title }}</h3>
            <span
              v-if="model.featured"
              class="px-2.5 py-1 rounded-full bg-violet-500/20 ring-1 ring-violet-300/30 text-[11px] font-semibold uppercase tracking-wider text-violet-100"
            >
              {{ m.engagement.recommended }}
            </span>
          </div>
          <p class="mt-3 text-[15px] text-slate-300 leading-relaxed">{{ model.description }}</p>

          <ul class="mt-7 space-y-3 border-t border-white/10 pt-6">
            <li v-for="point in model.points" :key="point" class="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircleIcon class="w-5 h-5 shrink-0 text-violet-400" aria-hidden="true" />
              {{ point }}
            </li>
          </ul>

          <a
            href="#contact"
            class="mt-auto pt-8 inline-flex"
          >
            <span
              class="inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-colors"
              :class="model.featured
                ? 'bg-primary hover:bg-violet-500 text-white'
                : 'bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-100'"
            >
              {{ m.engagement.cta }}
              <span aria-hidden="true">&rarr;</span>
            </span>
          </a>
        </article>
      </div>

      <p v-reveal class="mt-8 text-center text-sm text-slate-400 flex items-center justify-center gap-2">
        <SparklesIcon class="w-4 h-4 text-violet-400" aria-hidden="true" />
        {{ m.engagement.note }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircleIcon, SparklesIcon } from '@heroicons/vue/24/outline'
import { useI18n } from '@/i18n'

const { m } = useI18n()
</script>
