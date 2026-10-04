<template>
  <section id="process" class="relative py-24 sm:py-32 bg-[#070724] border-y border-white/5 overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-60 pointer-events-none" aria-hidden="true" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-6 items-end">
        <div class="lg:col-span-7">
          <p v-reveal class="eyebrow">{{ m.process.eyebrow }}</p>
          <h2 v-reveal="60" class="mt-5 text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white text-balance">
            {{ m.process.title }}
          </h2>
        </div>
        <p v-reveal="120" class="lg:col-span-5 text-base sm:text-lg text-slate-400 leading-relaxed">
          {{ m.process.subtitle }}
        </p>
      </div>

      <ol ref="listRef" class="relative mt-16 grid gap-10 md:gap-6 md:grid-cols-4">
        <!-- Connector: fills left→right once the list is on screen. -->
        <div
          class="hidden md:block absolute top-6 left-6 right-6 h-px bg-white/10"
          aria-hidden="true"
        >
          <div
            class="h-full origin-left bg-gradient-to-r from-violet-500 via-violet-400 to-violet-300 transition-transform duration-[1600ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
            :class="visible ? 'scale-x-100' : 'scale-x-0'"
          />
        </div>

        <li
          v-for="(step, i) in m.process.steps"
          :key="step.title"
          v-reveal="i * 140"
          class="relative md:pr-4 pl-16 md:pl-0"
        >
          <!-- Vertical connector on mobile -->
          <span
            v-if="i < m.process.steps.length - 1"
            class="md:hidden absolute left-6 top-12 -bottom-10 w-px bg-gradient-to-b from-violet-500/60 to-white/5"
            aria-hidden="true"
          />
          <span
            class="absolute md:relative left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#0F0F33] ring-1 ring-violet-400/40 text-sm font-semibold text-violet-200 tabular-nums shadow-[0_0_0_6px_#070724]"
          >
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <h3 class="md:mt-7 text-lg font-semibold text-white">{{ step.title }}</h3>
          <p class="mt-2 text-sm text-slate-400 leading-relaxed">{{ step.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from '@/i18n'

const { m } = useI18n()

const listRef = ref<HTMLElement | null>(null)
const visible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!listRef.value || !('IntersectionObserver' in window)) {
    visible.value = true
    return
  }
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.3 },
  )
  observer.observe(listRef.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>
