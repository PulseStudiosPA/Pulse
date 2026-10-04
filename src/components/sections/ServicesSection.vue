<template>
  <section id="services" class="relative py-24 sm:py-32 bg-[#0A0A2E]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <p v-reveal class="eyebrow">{{ m.services.eyebrow }}</p>
        <h2 v-reveal="60" class="mt-5 text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white text-balance">
          {{ m.services.title }}
        </h2>
        <p v-reveal="120" class="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
          {{ m.services.subtitle }}
        </p>
      </div>

      <!-- Bento grid on a 6-column track: row 1 = 3 + 3, row 2 = 2 + 2 + 2. -->
      <div class="mt-14 grid grid-cols-1 md:grid-cols-6 gap-4">
        <article
          v-for="(service, i) in m.services.items"
          :key="service.id"
          v-reveal="i * 70"
          v-spotlight
          class="group rounded-3xl bg-[#0F0F33] ring-1 ring-white/[0.07] p-7 sm:p-8 flex flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-1"
          :class="layout[i]"
        >
          <div class="flex items-start justify-between gap-4">
            <span
              class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/25 to-violet-500/5 ring-1 ring-violet-400/25 text-violet-200"
            >
              <component :is="icons[service.id]" class="w-6 h-6" aria-hidden="true" />
            </span>
            <span class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              {{ String(i + 1).padStart(2, '0') }} · {{ service.tag }}
            </span>
          </div>

          <h3 class="mt-8 text-xl sm:text-2xl font-semibold tracking-tight text-white">
            {{ service.title }}
          </h3>
          <p class="mt-2 text-[15px] text-slate-300 leading-relaxed">
            {{ service.outcome }}
          </p>

          <ul class="mt-6 space-y-2.5">
            <li
              v-for="bullet in service.bullets"
              :key="bullet"
              class="flex items-start gap-2.5 text-sm text-slate-400"
            >
              <CheckIcon class="w-4 h-4 mt-0.5 shrink-0 text-violet-400" aria-hidden="true" />
              <span>{{ bullet }}</span>
            </li>
          </ul>

          <div class="mt-auto pt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="#contact"
              class="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 hover:text-white transition-colors"
            >
              {{ m.services.cta }}
              <span class="transition-transform group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
            </a>
            <a
              v-if="service.id === 'software'"
              href="#productos"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10 text-xs font-semibold text-slate-200 hover:bg-white/10 transition-colors"
            >
              {{ m.services.productsLink }}
              <span aria-hidden="true">&nearr;</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import {
  WifiIcon,
  ShieldCheckIcon,
  CircleStackIcon,
  CodeBracketIcon,
  LifebuoyIcon,
  CheckIcon,
} from '@heroicons/vue/24/outline'
import { useI18n, type ServiceId } from '@/i18n'

const { m } = useI18n()

const icons: Record<ServiceId, Component> = {
  network: WifiIcon,
  security: ShieldCheckIcon,
  audit: CircleStackIcon,
  software: CodeBracketIcon,
  support: LifebuoyIcon,
}

// Column spans per card index (md+). Keeps a 3/3 then 2/2/2 rhythm.
const layout = ['md:col-span-3', 'md:col-span-3', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2']
</script>
