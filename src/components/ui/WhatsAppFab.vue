<template>
  <Transition
    enter-active-class="transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
    enter-from-class="opacity-0 translate-y-4 scale-90"
    leave-active-class="transition duration-200 ease-in"
    leave-to-class="opacity-0 translate-y-4 scale-90"
  >
    <a
      v-if="visible"
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="m.fab"
      class="group fixed z-40 right-4 bottom-4 sm:right-6 sm:bottom-6 flex items-center gap-2 h-14 pl-4 pr-4 sm:pr-5 rounded-full bg-[#25D366] text-slate-950 font-semibold text-sm shadow-[0_16px_40px_-12px_rgba(37,211,102,0.8)] hover:bg-[#20bd5a] transition-colors"
    >
      <WhatsAppIcon class="w-6 h-6" />
      <span class="hidden sm:inline">{{ m.fab }}</span>
    </a>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n, WHATSAPP_NUMBER } from '@/i18n'
import WhatsAppIcon from './WhatsAppIcon.vue'

const { m } = useI18n()

const href = computed(
  () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(m.value.hero.whatsappText)}`,
)

// Shown after the hero (which has its own WhatsApp CTA) and hidden while the
// contact section is on screen, so it never competes with the form.
const pastHero = ref(false)
const contactInView = ref(false)
const visible = computed(() => pastHero.value && !contactInView.value)

let observer: IntersectionObserver | null = null
let raf = 0

function onScroll(): void {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    pastHero.value = window.scrollY > window.innerHeight * 0.8
  })
}

function observeContact(): void {
  const contact = document.getElementById('contact')
  if (!contact || !('IntersectionObserver' in window)) return
  observer = new IntersectionObserver(([entry]) => {
    contactInView.value = !!entry?.isIntersecting
  })
  observer.observe(contact)
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  // The contact section is async; retry briefly until it exists.
  let attempts = 0
  const tryObserve = () => {
    if (document.getElementById('contact') || attempts > 20) observeContact()
    else {
      attempts += 1
      setTimeout(tryObserve, 150)
    }
  }
  tryObserve()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  cancelAnimationFrame(raf)
  observer?.disconnect()
})
</script>
