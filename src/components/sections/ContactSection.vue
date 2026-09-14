<template>
  <section id="contact" class="py-20 md:py-28 bg-[#0A0A2E] border-t border-[#1C1C4E] relative">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B5CF6]/40 bg-[#8B5CF6]/15 text-xs font-bold uppercase tracking-wider text-[#C4B5FD] mb-4">
          Contacto Directo
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Hablemos de tus requerimientos tecnológicos
        </h2>
        <p class="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
          Completa el formulario y te responderemos inmediatamente a través de WhatsApp con una solución técnica personalizada.
        </p>
      </div>
      
      <!-- Contact Form -->
      <form 
        @submit.prevent="submitForm" 
        class="space-y-6 max-w-2xl mx-auto bg-[#0F0F33] p-8 sm:p-10 rounded-2xl border border-[#2A2A66] shadow-2xl"
      >
        <!-- Empresa -->
        <div>
          <label for="company" class="block text-sm font-bold uppercase tracking-wider text-slate-200 mb-2">
            Empresa
          </label>
          <input 
            id="company"
            v-model="form.company" 
            type="text" 
            placeholder="Nombre de tu empresa u organización" 
            required
            class="w-full px-4 py-3.5 bg-white border-2 border-slate-300 rounded-lg text-slate-950 placeholder-slate-400 font-medium text-base focus:border-[#8B5CF6] focus:ring-4 focus:ring-[#8B5CF6]/20 focus:outline-none transition-all shadow-sm"
          />
        </div>

        <!-- Correo & Teléfono -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="email" class="block text-sm font-bold uppercase tracking-wider text-slate-200 mb-2">
              Correo Corporativo
            </label>
            <input 
              id="email"
              v-model="form.email" 
              type="email" 
              placeholder="tu@empresa.com" 
              required
              class="w-full px-4 py-3.5 bg-white border-2 border-slate-300 rounded-lg text-slate-950 placeholder-slate-400 font-medium text-base focus:border-[#8B5CF6] focus:ring-4 focus:ring-[#8B5CF6]/20 focus:outline-none transition-all shadow-sm"
            />
          </div>
          <div>
            <label for="phone" class="block text-sm font-bold uppercase tracking-wider text-slate-200 mb-2">
              Teléfono / Celular
            </label>
            <input 
              id="phone"
              v-model="form.phone" 
              type="tel" 
              placeholder="+507 6000-0000" 
              required
              class="w-full px-4 py-3.5 bg-white border-2 border-slate-300 rounded-lg text-slate-950 placeholder-slate-400 font-medium text-base focus:border-[#8B5CF6] focus:ring-4 focus:ring-[#8B5CF6]/20 focus:outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        <!-- Área de Interés (Solo las 5 soluciones ofrecidas) -->
        <div>
          <label for="service" class="block text-sm font-bold uppercase tracking-wider text-slate-200 mb-2">
            Área de Interés
          </label>
          <div class="relative">
            <select 
              id="service"
              v-model="form.service" 
              required
              class="w-full px-4 py-3.5 bg-white border-2 border-slate-300 rounded-lg font-medium text-base focus:border-[#8B5CF6] focus:ring-4 focus:ring-[#8B5CF6]/20 focus:outline-none transition-all shadow-sm appearance-none pr-10 cursor-pointer"
              :class="form.service ? 'text-slate-950' : 'text-slate-600'"
            >
              <option value="" disabled class="text-slate-600">
                Selecciona el servicio o área que necesitas...
              </option>
              <option v-for="option in serviceOptions" :key="option.value" :value="option.value" class="text-slate-950 py-1">
                {{ option.label }}
              </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Detalles del Requerimiento -->
        <div>
          <label for="message" class="block text-sm font-bold uppercase tracking-wider text-slate-200 mb-2">
            Detalles del Requerimiento
          </label>
          <textarea 
            id="message"
            v-model="form.message" 
            placeholder="Describe brevemente tus necesidades operativas o el alcance deseado..." 
            rows="4" 
            required
            class="w-full px-4 py-3.5 bg-white border-2 border-slate-300 rounded-lg text-slate-950 placeholder-slate-600 font-medium text-base focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/20 focus:outline-none transition-all shadow-sm resize-none"
          ></textarea>
        </div>
        
        <!-- Botón de Envío WhatsApp -->
        <div class="pt-2">
          <button 
            type="submit" 
            class="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-base rounded-lg transition-all shadow-lg hover:shadow-emerald-500/25 active:scale-[0.99] cursor-pointer"
          >
            <svg class="text-slate-950 w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span class="text-slate-950 font-extrabold">Enviar mensaje por WhatsApp</span>
          </button>
          <p class="text-xs text-center text-slate-300 mt-3 font-normal">
            Se abrirá WhatsApp con los datos de tu consulta estructurados para brindarte atención inmediata.
          </p>
        </div>
      </form>
      
      <!-- Contact & Location Highlights -->
      <div class="mt-14 pt-8 border-t border-[#1C1C4E]">
        <div class="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

          <!-- WhatsApp Directo -->
          <a 
            href="https://wa.me/50760656128" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center gap-4 p-5 rounded-2xl bg-[#0F0F33] border border-[#2A2A66] hover:border-emerald-500/60 hover:bg-[#14143D] transition-all shadow-xl group min-w-0"
          >
            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <span class="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-0.5">WhatsApp Directo</span>
              <span class="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors block">
                +507 6065-6128
              </span>
            </div>
          </a>

          <!-- Correo Corporativo -->
          <a 
            href="mailto:pulsestudio07@gmail.com" 
            class="flex items-center gap-4 p-5 rounded-2xl bg-[#0F0F33] border border-[#2A2A66] hover:border-violet-500/60 hover:bg-[#14143D] transition-all shadow-xl group min-w-0"
          >
            <div class="w-12 h-12 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <span class="block text-xs font-bold uppercase tracking-wider text-violet-400 mb-0.5">Correo Corporativo</span>
              <span class="text-sm sm:text-base font-bold text-white group-hover:text-violet-300 transition-colors block break-all">
                pulsestudio07@gmail.com
              </span>
            </div>
          </a>

          <!-- Canales y Redes Sociales Oficiales -->
          <div class="col-span-1 sm:col-span-2 p-5 sm:p-6 rounded-2xl bg-[#0F0F33] border border-[#2A2A66] shadow-xl">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <span class="block text-xs font-bold uppercase tracking-wider text-violet-400 mb-1">
                  Redes Sociales Oficiales
                </span>
                <span class="text-sm font-semibold text-white">
                  Conéctate con PULSE en nuestras plataformas
                </span>
              </div>
              <div class="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3">
                <a 
                  href="https://www.linkedin.com/company/pulsestudio-dev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="PULSE en LinkedIn"
                  class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#14143D] border border-slate-700/80 hover:border-[#0A66C2] hover:bg-[#0A66C2]/20 text-slate-200 hover:text-white text-xs font-semibold transition-all duration-200"
                >
                  <svg class="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://www.instagram.com/pulsestudioff" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="PULSE en Instagram"
                  class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#14143D] border border-slate-700/80 hover:border-pink-500 hover:bg-pink-500/20 text-slate-200 hover:text-white text-xs font-semibold transition-all duration-200"
                >
                  <svg class="w-4 h-4 fill-current text-pink-400" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.tiktok.com/@pulsestudioff" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="PULSE en TikTok"
                  class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#14143D] border border-slate-700/80 hover:border-cyan-400 hover:bg-cyan-500/20 text-slate-200 hover:text-white text-xs font-semibold transition-all duration-200"
                >
                  <svg class="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const serviceOptions = [
  { value: 'infraestructura', label: 'Infraestructura IT' },
  { value: 'seguridad', label: 'Ciberseguridad' },
  { value: 'auditoria', label: 'Auditoría IT' },
  { value: 'desarrollo', label: 'Software a Medida' },
  { value: 'soporte', label: 'Soporte Técnico' }
]

const form = ref({
  company: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const submitForm = () => {
  const selectedService = serviceOptions.find(opt => opt.value === form.value.service)?.label || form.value.service

  const textLines = [
    'Hola Team Pulse, deseo cotizar / solicitar información:',
    '',
    `Empresa: ${form.value.company.trim()}`,
    `Correo: ${form.value.email.trim()}`,
    `Teléfono: ${form.value.phone.trim()}`,
    `Área de Interés: ${selectedService}`,
    '',
    'Detalles del Requerimiento:',
    form.value.message.trim()
  ]

  const messageText = textLines.join('\n')
  const whatsappUrl = `https://wa.me/50760656128?text=${encodeURIComponent(messageText)}`
  window.open(whatsappUrl, '_blank')
}
</script>

<style scoped>
/* High contrast and consistent appearance for autofilled fields */
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important;
  -webkit-text-fill-color: #020617 !important;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
