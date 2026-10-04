<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 border-b"
    :class="scrolled || mobileMenuOpen || isProductosPage
      ?'bg-[#0A0A2E]/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]'
      : 'bg-transparent border-transparent'"
  >
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-slate-900 focus:text-sm focus:font-semibold"
    >
      {{ m.a11y.skipToContent }}
    </a>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-4">
      <a href="#home" class="flex items-center gap-3 shrink-0" :aria-label="m.a11y.home">
        <img
          src="/237520570.jpeg"
          :alt="m.a11y.logoAlt"
          width="36"
          height="36"
          class="w-9 h-9 rounded-xl object-cover ring-1 ring-white/10"
        />
        <span class="flex flex-col leading-none">
          <span class="text-[17px] font-bold tracking-tight text-white">PULSE</span>
          <span class="hidden sm:block mt-1 text-[10.5px] font-medium tracking-wide text-slate-400">
            {{ m.nav.tagline }}
          </span>
        </span>
      </a>

      <nav class="hidden lg:flex items-center gap-1" :aria-label="m.a11y.mainNav">
        <a
          v-for="item in navigation"
          :key="item.id"
          :href="item.href"
          class="relative px-3 py-2 text-sm font-medium rounded-lg transition-colors"
          :class="item.active ? 'text-white' : 'text-slate-400 hover:text-white'"
          :aria-current="item.active ? 'true' : undefined"
        >
          {{ item.label }}
          <span
            class="absolute left-3 right-3 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent transition-opacity duration-300"
            :class="item.active ? 'opacity-100' : 'opacity-0'"
            aria-hidden="true"
          />
        </a>
      </nav>

      <div class="flex items-center gap-2 sm:gap-3">
        <LanguageSwitch />

        <a
          href="#contact"
          class="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary hover:bg-violet-500 text-white text-[13px] font-semibold transition-colors shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_24px_-8px_rgba(124,58,237,0.7)]"
        >
          {{ m.nav.cta }}
          <span aria-hidden="true">&rarr;</span>
        </a>

        <button
          type="button"
          class="lg:hidden p-2 -mr-2 text-slate-300 hover:text-white rounded-lg"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-menu"
          :aria-label="mobileMenuOpen ? m.a11y.closeMenu : m.a11y.openMenu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span class="relative block w-5 h-4" aria-hidden="true">
            <span
              class="absolute left-0 h-0.5 w-5 bg-current rounded transition-transform duration-300"
              :class="mobileMenuOpen ? 'top-[7px] rotate-45' : 'top-0'"
            />
            <span
              class="absolute left-0 top-[7px] h-0.5 w-5 bg-current rounded transition-opacity duration-200"
              :class="mobileMenuOpen ? 'opacity-0' : 'opacity-100'"
            />
            <span
              class="absolute left-0 h-0.5 w-5 bg-current rounded transition-transform duration-300"
              :class="mobileMenuOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'"
            />
          </span>
        </button>
      </div>
    </div>

    <!-- Scroll progress -->
    <div
      class="absolute left-0 bottom-0 h-px bg-gradient-to-r from-violet-600 via-violet-400 to-violet-300 origin-left"
      :style="{ transform: `scaleX(${progress})` }"
      aria-hidden="true"
    />

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        id="mobile-menu"
        class="lg:hidden border-t border-white/10 px-4 sm:px-6 pb-6 pt-3"
      >
        <nav class="flex flex-col" :aria-label="m.a11y.mainNav">
          <a
            v-for="(item, i) in navigation"
            :key="item.id"
            :href="item.href"
            class="flex items-center justify-between py-3.5 border-b border-white/5 text-base font-medium transition-colors"
            :class="item.active ? 'text-white' : 'text-slate-300'"
            :style="{ transitionDelay: `${i * 30}ms` }"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
            <span class="text-slate-500" aria-hidden="true">&rarr;</span>
          </a>
        </nav>
        <a
          href="#contact"
          class="mt-5 flex w-full items-center justify-center gap-2 py-3.5 rounded-full bg-primary text-white font-semibold text-sm"
          @click="mobileMenuOpen = false"
        >
          {{ m.nav.cta }}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from '@/i18n'
import LanguageSwitch from './LanguageSwitch.vue'

const { m } = useI18n()

const scrolled = ref(false)
const progress = ref(0)
const mobileMenuOpen = ref(false)
const currentHash = ref(typeof window !== 'undefined' ? window.location.hash : '')
const activeSection = ref('home')

const SECTION_IDS = ['services', 'process', 'about', 'contact'] as const

const isProductosPage = computed(() =>
  ['#productos', '#/productos', '#servicios-it'].some((h) => currentHash.value.startsWith(h)),
)

const navigation = computed(() => {
  const items = [
    { id: 'services', href: '#services', label: m.value.nav.services },
    { id: 'process', href: '#process', label: m.value.nav.process },
    { id: 'productos', href: '#productos', label: m.value.nav.products },
    { id: 'about', href: '#about', label: m.value.nav.about },
    { id: 'faq', href: '#faq', label: m.value.nav.faq },
    { id: 'contact', href: '#contact', label: m.value.nav.contact },
  ]
  const active = isProductosPage.value ? 'productos' : activeSection.value
  return items.map((item) => ({ ...item, active: item.id === active }))
})

let ticking = false

function measure(): void {
  ticking = false
  const y = window.scrollY
  const max = document.documentElement.scrollHeight - window.innerHeight
  scrolled.value = y > 12
  progress.value = max > 0 ? Math.min(1, y / max) : 0

  if (isProductosPage.value) return
  const probe = y + window.innerHeight * 0.35
  let current = 'home'
  for (const id of [...SECTION_IDS, 'faq']) {
    const el = document.getElementById(id)
    if (el && probe >= el.offsetTop) current = id
  }
  activeSection.value = current
}

function onScroll(): void {
  if (ticking) return
  ticking = true
  requestAnimationFrame(measure)
}

function onHashChange(): void {
  currentHash.value = window.location.hash
  mobileMenuOpen.value = false
  onScroll()
}

function onKeydown(e: KeyboardEvent): void {
  if (e.key === 'Escape') mobileMenuOpen.value = false
}

onMounted(() => {
  measure()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  window.addEventListener('hashchange', onHashChange)
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  window.removeEventListener('hashchange', onHashChange)
  window.removeEventListener('keydown', onKeydown)
})
</script>
