<template>
  <footer class="relative bg-[#070724] border-t border-white/5 pt-20 pb-10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div class="md:col-span-4">
          <img
            src="/pulse-logo/svg/pulse-logo-texto-blanco.svg"
            :alt="m.a11y.logoAlt"
            width="103"
            height="80"
            loading="lazy"
            class="h-20 w-auto"
          />
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

      <!-- Oversized brand wordmark as a watermark sign-off -->
      <div class="relative mt-20 select-none" aria-hidden="true">
        <img
          src="/pulse-logo/svg/pulse-logo-texto-blanco.svg"
          alt=""
          width="354"
          height="275"
          loading="lazy"
          class="mx-auto h-40 md:h-64 w-auto opacity-[0.06]"
        />
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
