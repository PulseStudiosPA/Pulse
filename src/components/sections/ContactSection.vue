<template>
  <section id="contact" class="relative isolate overflow-hidden py-24 sm:py-32 bg-[#0A0A2E]">
    <div class="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70rem] h-[30rem] rounded-full bg-violet-700/20 blur-[140px]" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
      <!-- Left: pitch + direct channels -->
      <div class="lg:col-span-5">
        <p v-reveal class="eyebrow">{{ m.contact.eyebrow }}</p>
        <h2 v-reveal="60" class="mt-5 text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white text-balance">
          {{ m.contact.title }}
        </h2>
        <p v-reveal="120" class="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed">
          {{ m.contact.subtitle }}
        </p>

        <div v-reveal="180" class="mt-10 grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
          <a
            :href="`https://wa.me/${WHATSAPP_NUMBER}`"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-emerald-400/50 transition-colors"
          >
            <span class="flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400">
              <WhatsAppIcon class="w-5 h-5" />
            </span>
            <span>
              <span class="block text-xs font-semibold uppercase tracking-wider text-slate-500">{{ m.contact.channels.whatsapp }}</span>
              <span class="block text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">{{ CONTACT_PHONE }}</span>
            </span>
          </a>
          <a
            :href="`mailto:${CONTACT_EMAIL}`"
            class="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-violet-400/50 transition-colors min-w-0"
          >
            <span class="flex items-center justify-center w-11 h-11 shrink-0 rounded-xl bg-violet-500/15 text-violet-300">
              <EnvelopeIcon class="w-5 h-5" aria-hidden="true" />
            </span>
            <span class="min-w-0">
              <span class="block text-xs font-semibold uppercase tracking-wider text-slate-500">{{ m.contact.channels.email }}</span>
              <span class="block text-sm font-semibold text-white group-hover:text-violet-200 transition-colors break-all">{{ CONTACT_EMAIL }}</span>
            </span>
          </a>
          <div class="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] ring-1 ring-white/10">
            <span class="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 text-slate-300">
              <ClockIcon class="w-5 h-5" aria-hidden="true" />
            </span>
            <span>
              <span class="block text-xs font-semibold uppercase tracking-wider text-slate-500">{{ m.contact.channels.hours }}</span>
              <span class="block text-sm font-medium text-slate-200">{{ m.contact.channels.hoursValue }}</span>
            </span>
          </div>
          <div class="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] ring-1 ring-white/10">
            <span class="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 text-slate-300">
              <MapPinIcon class="w-5 h-5" aria-hidden="true" />
            </span>
            <span>
              <span class="block text-xs font-semibold uppercase tracking-wider text-slate-500">{{ m.contact.channels.location }}</span>
              <span class="block text-sm font-medium text-slate-200">{{ m.contact.channels.locationValue }}</span>
            </span>
          </div>
        </div>

        <div v-reveal="240" class="mt-6 flex items-center gap-4">
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">{{ m.contact.channels.social }}</span>
          <ul class="flex items-center gap-2">
            <li v-for="social in SOCIAL_LINKS" :key="social.id">
              <a
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${m.a11y.socialPrefix} ${social.name}`"
                class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.03] ring-1 ring-white/10 text-slate-300 hover:text-white hover:ring-violet-400/50 transition-colors"
              >
                <SocialIcon :name="social.id" class="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Right: form → WhatsApp -->
      <form
        v-reveal="120"
        class="lg:col-span-7 rounded-3xl bg-[#0F0F33]/90 backdrop-blur-xl ring-1 ring-white/10 p-6 sm:p-10 shadow-[0_40px_100px_-40px_rgba(124,58,237,0.5)]"
        @submit.prevent="submitForm"
      >
        <div class="grid sm:grid-cols-2 gap-5">
          <div>
            <label for="contact-name" class="field-label">{{ m.contact.fields.name }}</label>
            <input
              id="contact-name"
              v-model.trim="form.name"
              type="text"
              autocomplete="name"
              required
              :placeholder="m.contact.fields.namePlaceholder"
              class="field-input"
            />
          </div>
          <div>
            <label for="contact-company" class="field-label">{{ m.contact.fields.company }}</label>
            <input
              id="contact-company"
              v-model.trim="form.company"
              type="text"
              autocomplete="organization"
              required
              :placeholder="m.contact.fields.companyPlaceholder"
              class="field-input"
            />
          </div>
          <div class="sm:col-span-2">
            <label for="contact-email" class="field-label">
              {{ m.contact.fields.email }}
              <span class="normal-case tracking-normal font-normal text-slate-500">({{ m.contact.fields.optional }})</span>
            </label>
            <input
              id="contact-email"
              v-model.trim="form.email"
              type="email"
              autocomplete="email"
              :placeholder="m.contact.fields.emailPlaceholder"
              class="field-input"
            />
          </div>
        </div>

        <fieldset class="mt-6">
          <legend class="field-label">{{ m.contact.fields.area }}</legend>
          <div class="flex flex-wrap gap-2">
            <label
              v-for="option in areaOptions"
              :key="option.value"
              class="cursor-pointer"
            >
              <input v-model="form.area" type="radio" name="area" :value="option.value" class="peer sr-only" required />
              <span
                class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ring-1 transition-colors ring-white/15 text-slate-300 hover:ring-white/30 peer-checked:bg-primary peer-checked:ring-primary peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-violet-400"
              >
                {{ option.label }}
              </span>
            </label>
          </div>
        </fieldset>

        <div class="mt-6">
          <label for="contact-message" class="field-label">{{ m.contact.fields.message }}</label>
          <textarea
            id="contact-message"
            v-model.trim="form.message"
            rows="4"
            required
            :placeholder="m.contact.fields.messagePlaceholder"
            class="field-input resize-none"
          />
        </div>

        <button
          type="submit"
          class="mt-8 w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-base transition-[background-color,transform] active:scale-[0.99] shadow-[0_16px_40px_-16px_rgba(37,211,102,0.7)]"
        >
          <WhatsAppIcon class="w-5 h-5" />
          {{ m.contact.submit }}
        </button>
        <p class="mt-3 text-xs text-center text-slate-400">{{ m.contact.submitNote }}</p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { ClockIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import { useI18n, WHATSAPP_NUMBER, CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS } from '@/i18n'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon.vue'
import SocialIcon from '@/components/ui/SocialIcon.vue'

const { m } = useI18n()

const form = reactive({
  name: '',
  company: '',
  email: '',
  area: '',
  message: '',
})

const areaOptions = computed(() => [
  ...m.value.services.items.map((s) => ({ value: s.id as string, label: s.title })),
  { value: 'products', label: m.value.contact.otherArea },
])

function submitForm(): void {
  const t = m.value.contact.whatsapp
  const areaLabel = areaOptions.value.find((o) => o.value === form.area)?.label ?? form.area
  const lines = [
    t.intro,
    '',
    `${t.name}: ${form.name}`,
    `${t.company}: ${form.company}`,
    form.email ? `${t.email}: ${form.email}` : null,
    `${t.area}: ${areaLabel}`,
    '',
    `${t.details}:`,
    form.message,
  ].filter((line): line is string => line !== null)

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
  window.open(url, '_blank', 'noopener')
}
</script>

<style scoped>
.field-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgb(203 213 225);
}

.field-input {
  width: 100%;
  padding: 0.875rem 1rem;
  border-radius: 0.875rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 1rem;
  transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.field-input::placeholder {
  color: rgb(100 116 139);
}

.field-input:hover {
  border-color: rgba(255, 255, 255, 0.22);
}

.field-input:focus {
  outline: none;
  border-color: #8b5cf6;
  background: rgba(139, 92, 246, 0.06);
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 1000px #17173f inset !important;
  -webkit-text-fill-color: #fff !important;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
