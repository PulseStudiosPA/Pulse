<template>
  <footer class="relative bg-[#070724] border-t border-white/5 pt-16 pb-8 overflow-hidden">
    <div
      class="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[48rem] h-72 rounded-full bg-violet-700/10 blur-[120px] pointer-events-none"
      aria-hidden="true"
    />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div class="md:col-span-4">
          <a href="#home" class="inline-block" :aria-label="m.a11y.home">
            <img src="/pulse-logo/svg/pulse-logo-texto-blanco.svg" :alt="m.a11y.logoAlt" width="124" height="96" class="h-24 w-auto" />
          </a>
          <p class="mt-6 text-sm text-slate-400 leading-relaxed max-w-sm">{{ m.footer.description }}</p>
          <p class="mt-3 text-xs text-slate-500">{{ m.footer.location }}</p>

          <ul class="mt-6 flex items-center gap-2">
            <li v-for="social in SOCIAL_LINKS" :key="social.id">
              <a
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${m.a11y.socialPrefix} ${social.name}`"
                class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 ring-1 ring-white/10 text-slate-300 hover:text-white hover:bg-primary hover:ring-primary transition-colors"
              >
                <SocialIcon :name="social.id" class="w-4 h-4" />
              </a>
            </li>
            <li>
              <a
                :href="`https://wa.me/${WHATSAPP_NUMBER}`"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${m.a11y.socialPrefix} WhatsApp`"
                class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 ring-1 ring-white/10 text-slate-300 hover:text-slate-950 hover:bg-[#25D366] hover:ring-[#25D366] transition-colors"
              >
                <WhatsAppIcon class="w-4 h-4" />
              </a>
            </li>
          </ul>
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

      <div class="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>&copy; {{ currentYear }} PULSE. {{ m.footer.rights }}</p>
        <a href="#home" class="hover:text-white transition-colors">{{ m.footer.backToTop }} &uarr;</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n, WHATSAPP_NUMBER, CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS } from '@/i18n'
import SocialIcon from '@/components/ui/SocialIcon.vue'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon.vue'

const { m } = useI18n()
const currentYear = new Date().getFullYear()
</script>
