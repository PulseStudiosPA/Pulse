<template>
  <div class="relative isolate min-h-screen bg-[#0A0A2E] text-white flex items-center justify-center px-4 sm:px-6 overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-grid pointer-events-none" aria-hidden="true" />
    <div class="max-w-xl w-full text-center py-24">
      <p class="eyebrow justify-center">{{ m.notFound.badge }}</p>

      <h1 class="mt-6 text-8xl sm:text-9xl font-semibold tracking-[-0.05em] leading-none">404</h1>

      <!-- A flatlined pulse: the signature line, without the beat. -->
      <svg viewBox="0 0 400 40" class="mx-auto mt-8 w-64 h-8" fill="none" aria-hidden="true">
        <path d="M0 20 H400" stroke="#8B5CF6" stroke-opacity="0.6" stroke-width="2" stroke-dasharray="6 8" />
      </svg>

      <h2 class="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight">{{ m.notFound.title }}</h2>
      <p class="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-md mx-auto">{{ m.notFound.text }}</p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a href="#home" class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary hover:bg-violet-500 text-white font-semibold text-sm transition-colors">
          <span aria-hidden="true">&larr;</span>
          {{ m.notFound.home }}
        </a>
        <a href="#productos" class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/15 font-semibold text-sm transition-colors">
          {{ m.notFound.products }}
        </a>
        <a href="#contact" class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/15 font-semibold text-sm transition-colors">
          {{ m.notFound.contact }}
        </a>
      </div>

      <div class="mt-12 pt-8 border-t border-white/10">
        <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 mb-3">{{ m.notFound.lookingFor }}</p>
        <div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-400">
          <a href="#services" class="hover:text-white transition-colors">{{ m.nav.services }}</a>
          <a href="#productos" class="hover:text-white transition-colors">Maya &amp; Stash</a>
          <a href="#about" class="hover:text-white transition-colors">{{ m.nav.about }}</a>
          <a href="#faq" class="hover:text-white transition-colors">{{ m.nav.faq }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { useI18n } from '@/i18n'

const { m, setNotFound } = useI18n()

// App.vue sets meta robots to noindex for this view; here we only swap the title.
onMounted(() => setNotFound(true))
onBeforeUnmount(() => setNotFound(false))
</script>
