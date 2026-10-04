<template>
  <section id="home" class="relative isolate overflow-hidden bg-[#0A0A2E] pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28">
    <!-- Decorative background: skyline photo (very faint), grid, glows.
         The H1 is the LCP element, so the photo is low priority. -->
    <div class="absolute inset-0 -z-10 pointer-events-none select-none" aria-hidden="true">
      <picture>
        <source media="(max-width: 768px)" srcset="/yosi-bitran-jVCXlJrnl5w-unsplash-mobile.webp" type="image/webp" />
        <source srcset="/yosi-bitran-jVCXlJrnl5w-unsplash.webp" type="image/webp" />
        <img
          src="/yosi-bitran-jVCXlJrnl5w-unsplash.jpg"
          alt=""
          decoding="async"
          fetchpriority="low"
          class="w-full h-full object-cover object-center opacity-[0.16] mix-blend-luminosity"
        />
      </picture>
      <div class="absolute inset-0 bg-gradient-to-b from-[#0A0A2E]/60 via-[#0A0A2E]/80 to-[#0A0A2E]" />
      <div class="absolute inset-0 bg-grid" />
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[36rem] rounded-full bg-violet-700/25 blur-[120px]" />
      <div class="absolute top-1/2 -right-40 w-[28rem] h-[28rem] rounded-full bg-indigo-600/15 blur-[100px]" />

      <!-- Signature heartbeat crossing the whole hero -->
      <svg
        viewBox="0 0 1440 120"
        class="absolute inset-x-0 bottom-2 sm:bottom-4 w-full h-20 sm:h-28"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pulse-gradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stop-color="#7C3AED" stop-opacity="0" />
            <stop offset="45%" stop-color="#A78BFA" />
            <stop offset="100%" stop-color="#C4B5FD" />
          </linearGradient>
        </defs>
        <path :d="pulsePath" stroke="rgba(139,92,246,0.14)" stroke-width="1.25" vector-effect="non-scaling-stroke" />
        <path
          :d="pulsePath"
          pathLength="1000"
          class="pulse-trace"
          stroke="url(#pulse-gradient)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
        <div class="lg:col-span-7">
          <p class="eyebrow hero-in" style="--d: 0ms">{{ m.hero.eyebrow }}</p>

          <h1
            class="hero-in mt-6 text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.5rem] font-semibold tracking-[-0.035em] text-white text-balance"
            style="--d: 80ms"
          >
            {{ m.hero.titleStart }}
            <span class="font-display italic font-normal tracking-[-0.01em] text-gradient pr-1">{{ m.hero.titleAccent }}</span>
            {{ m.hero.titleEnd }}
          </h1>

          <p class="hero-in mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300/90" style="--d: 160ms">
            {{ m.hero.subtitle }}
          </p>

          <div class="hero-in mt-9 flex flex-col sm:flex-row gap-3" style="--d: 240ms">
            <a
              href="#contact"
              class="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary hover:bg-violet-500 text-white font-semibold text-[15px] transition-colors shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_12px_40px_-12px_rgba(124,58,237,0.9)]"
            >
              {{ m.hero.primaryCta }}
              <span class="transition-transform group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
            </a>
            <a
              :href="whatsappHref"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/15 text-slate-100 font-semibold text-[15px] transition-colors"
            >
              <WhatsAppIcon class="w-4 h-4 text-emerald-400" />
              {{ m.hero.secondaryCta }}
            </a>
          </div>

          <p class="hero-in mt-5 text-[13px] text-slate-400 flex items-center gap-2" style="--d: 320ms">
            <CheckBadgeIcon class="w-4 h-4 text-violet-400" aria-hidden="true" />
            {{ m.hero.note }}
          </p>
        </div>

        <!-- Status console (illustrative) -->
        <figure
          v-spotlight
          class="hero-in lg:col-span-5 rounded-3xl bg-[#0F0F33]/80 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.6)] overflow-hidden"
          style="--d: 200ms"
          :aria-label="m.a11y.consoleLabel"
        >
          <div class="flex items-center justify-between px-5 sm:px-6 pt-6">
            <span class="text-sm font-semibold text-white">{{ m.hero.console.title }}</span>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 text-[11px] font-semibold text-emerald-300">
              <span class="status-dot w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {{ m.hero.console.badge }}
            </span>
          </div>

          <div class="px-5 sm:px-6 pb-6">
            <p class="mt-1 mb-5 text-xs text-slate-400">{{ m.hero.console.caption }}</p>
            <ul class="space-y-2">
              <li
                v-for="(row, i) in m.hero.console.rows"
                :key="row.label"
                class="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-white/[0.03] ring-1 ring-white/5"
              >
                <span class="flex items-center gap-3 min-w-0">
                  <component :is="rowIcons[i]" class="w-4 h-4 shrink-0 text-violet-300" aria-hidden="true" />
                  <span class="text-sm font-medium text-slate-200 truncate">{{ row.label }}</span>
                </span>
                <span class="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 shrink-0">
                  <span
                    class="status-dot w-1.5 h-1.5 rounded-full bg-emerald-400"
                    :style="{ '--ping-delay': `${i * 0.5}s` }"
                  />
                  {{ row.status }}
                </span>
              </li>
            </ul>
            <figcaption class="mt-4 pt-4 border-t border-white/5 text-xs text-slate-400">
              {{ m.hero.console.footer }}
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  CheckBadgeIcon,
  WifiIcon,
  ShieldCheckIcon,
  CircleStackIcon,
  LifebuoyIcon,
} from '@heroicons/vue/24/outline'
import { useI18n, WHATSAPP_NUMBER } from '@/i18n'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon.vue'

const { m } = useI18n()

const rowIcons = [WifiIcon, ShieldCheckIcon, CircleStackIcon, LifebuoyIcon]

// Flat baseline with one heartbeat complex (P, QRS, T) past the middle.
const pulsePath =
  'M0 70 H780 L800 70 L815 56 L830 70 L850 70 L866 14 L888 112 L908 40 L922 70 L948 70 L966 60 L984 70 H1440'

const whatsappHref = computed(
  () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(m.value.hero.whatsappText)}`,
)
</script>

<style scoped>
/* Above-the-fold entrance runs on load (not on scroll) so the LCP text
   paints immediately: opacity starts at 0.01, not 0. */
.hero-in {
  animation: hero-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--d, 0ms);
}

@keyframes hero-in {
  from {
    opacity: 0.01;
    transform: translate3d(0, 14px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-in {
    animation: none;
  }
}
</style>
