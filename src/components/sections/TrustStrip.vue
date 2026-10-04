<template>
  <div class="relative border-y border-white/5 bg-[#070724]/60 py-5">
    <!-- Screen readers get the plain list once; the duplicated track is visual only. -->
    <ul class="sr-only">
      <li v-for="item in m.trust" :key="item">{{ item }}</li>
    </ul>
    <div class="marquee overflow-hidden" aria-hidden="true">
      <div class="marquee-track flex w-max">
        <div v-for="copy in 2" :key="copy" class="flex shrink-0 items-center">
          <span
            v-for="item in m.trust"
            :key="`${copy}-${item}`"
            class="flex items-center gap-3 px-7 text-sm font-medium text-slate-300 whitespace-nowrap"
          >
            <svg viewBox="0 0 24 12" class="w-6 h-3 text-violet-400" fill="none" stroke="currentColor" stroke-width="1.6">
              <path d="M0 6h7l2-4 3 8 2-4h10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/i18n'

const { m } = useI18n()
</script>
