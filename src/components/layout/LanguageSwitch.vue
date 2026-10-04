<template>
  <div
    role="group"
    :aria-label="m.a11y.language"
    class="relative flex items-center p-0.5 rounded-full bg-white/5 ring-1 ring-white/10 text-[11px] font-semibold"
  >
    <span
      class="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white/10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
      :class="locale === 'es' ? 'translate-x-0' : 'translate-x-full'"
      aria-hidden="true"
    />
    <button
      v-for="code in locales"
      :key="code"
      type="button"
      class="relative z-10 w-9 py-1.5 rounded-full uppercase tracking-wider transition-colors"
      :class="locale === code ? 'text-white' : 'text-slate-400 hover:text-slate-200'"
      :aria-pressed="locale === code"
      :lang="code"
      @click="setLocale(code)"
    >
      {{ code }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/i18n'

const { m, locale, locales, setLocale } = useI18n()
</script>
