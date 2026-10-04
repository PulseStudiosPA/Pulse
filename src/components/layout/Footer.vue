<template>
  <footer class="relative bg-[#070724] border-t border-white/5 pt-20 pb-10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div class="md:col-span-4">
          <div class="flex items-center gap-3">
            <img
              src="/237520570.jpeg"
              :alt="m.a11y.logoAlt"
              width="36"
              height="36"
              loading="lazy"
              class="w-9 h-9 rounded-xl object-cover ring-1 ring-white/10"
            />
            <span class="text-lg font-bold tracking-tight text-white">PULSE</span>
          </div>
          <p class="mt-5 text-sm text-slate-400 leading-relaxed max-w-sm">{{ m.footer.description }}</p>
          <p class="mt-4 text-xs text-slate-500">{{ m.footer.location }}</p>
        </div>

        <nav class="md:col-span-3" :aria-label="m.footer.servicesTitle">
          <h3 class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">{{ m.footer.servicesTitle }}</h3>
          <ul class="mt-5 space-y-3 text-sm text-slate-400">
            <li v-for="service in m.services.items" :key="service.id">
              <a href="#services" class="hover:text-white transition-colors">{{ service.title }}</a>
            </li>
          </ul>
        </nav>

        <nav class="md:col-span-2" :aria-label="m.footer.companyTitle">
          <h3 class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">{{ m.footer.companyTitle }}</h3>
          <ul class="mt-5 space-y-3 text-sm text-slate-400">
            <li><a href="#process" class="hover:text-white transition-colors">{{ m.nav.process }}</a></li>
            <li><a href="#productos" class="hover:text-white transition-colors">{{ m.nav.products }}</a></li>
            <li><a href="#about" class="hover:text-white transition-colors">{{ m.nav.about }}</a></li>
            <li><a href="#faq" class="hover:text-white transition-colors">{{ m.nav.faq }}</a></li>
          </ul>
        </nav>

        <div class="md:col-span-3">
          <h3 class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">{{ m.footer.contactTitle }}</h3>
          <ul class="mt-5 space-y-3 text-sm text-slate-400">
            <li>
              <a :href="`https://wa.me/${WHATSAPP_NUMBER}`" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
                {{ CONTACT_PHONE }}
              </a>
            </li>
            <li>
              <a :href="`mailto:${CONTACT_EMAIL}`" class="hover:text-white transition-colors break-all">{{ CONTACT_EMAIL }}</a>
            </li>
            <li class="text-slate-500">{{ m.contact.channels.hoursValue }}</li>
          </ul>
        </div>
      </div>

      <!-- Oversized wordmark with the heartbeat line: brand sign-off -->
      <div class="relative mt-20 select-none" aria-hidden="true">
        <p class="text-[22vw] md:text-[14rem] leading-none font-semibold tracking-[-0.06em] text-white/[0.04] text-center">
          PULSE
        </p>
        <svg viewBox="0 0 1200 120" class="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-16 md:h-24" fill="none" preserveAspectRatio="none">
          <path
            d="M0 70 H470 L490 70 L505 48 L520 70 L540 70 L560 10 L585 112 L605 36 L620 70 L645 70 L662 60 L680 70 H1200"
            pathLength="1000"
            class="pulse-trace"
            stroke="#8B5CF6"
            stroke-opacity="0.7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div class="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>&copy; {{ currentYear }} PULSE. {{ m.footer.rights }}</p>
        <a href="#home" class="hover:text-white transition-colors">{{ m.footer.backToTop }} &uarr;</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n, WHATSAPP_NUMBER, CONTACT_EMAIL, CONTACT_PHONE } from '@/i18n'

const { m } = useI18n()
const currentYear = new Date().getFullYear()
</script>
