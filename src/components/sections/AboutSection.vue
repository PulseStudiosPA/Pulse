<template>
  <section id="about" class="py-20 md:py-28 bg-white text-slate-900 border-t border-b border-slate-200 relative" ref="aboutRef">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Content: Concise and non-technical -->
        <div class="lg:col-span-5 space-y-5">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-200/80 bg-violet-50 text-xs font-bold uppercase tracking-wider text-violet-700">
            Sobre Pulse
          </div>
          
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Compromiso técnico con la continuidad operativa de tu empresa
          </h2>
          
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Nos encargamos de que la tecnología de tu negocio funcione siempre bien: resolvemos problemas del día a día, protegemos tu información y te ayudamos a operar con tranquilidad en Panamá.
          </p>

          <div class="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="#contact"
              class="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-violet-700 transition-colors group"
            >
              <span>Consultar cómo podemos ayudarte</span>
              <span class="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
            <span class="text-slate-300" aria-hidden="true">·</span>
            <a
              href="#productos"
              class="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-violet-700 transition-colors group"
            >
              <span>O usa Maya y Stash directamente</span>
              <span class="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>
        
        <!-- Everyday Practical Solutions Cards -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div 
            v-for="(pillar, index) in pillars" 
            :key="index"
            class="p-6 bg-slate-50/90 rounded-2xl border border-slate-200/90 hover:border-violet-300 hover:shadow-md transition-all space-y-3 shadow-sm"
          >
            <div class="w-11 h-11 rounded-xl bg-violet-100 border border-violet-200/80 flex items-center justify-center text-primary">
              <component :is="pillar.icon" class="w-5 h-5 text-primary" />
            </div>
            
            <h3 class="text-base sm:text-lg font-bold text-slate-900">
              {{ pillar.title }}
            </h3>
            
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {{ pillar.description }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import {
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  FolderArrowDownIcon,
  CodeBracketIcon
} from '@heroicons/vue/24/outline'

const aboutRef = ref(null)

const pillars = [
  {
    title: 'Soporte rápido para tu oficina',
    description: 'Si se cae el internet, una computadora no enciende o una impresora falla, te atendemos directamente en tus instalaciones sin vueltas ni esperas.',
    icon: WrenchScrewdriverIcon
  },
  {
    title: 'Protección contra virus y hackeos',
    description: 'Cuidamos el dinero y la información de tu negocio. Bloqueamos páginas sospechosas, correos trampa y accesos no autorizados a tus equipos.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Tus facturas y archivos siempre a salvo',
    description: 'Guardamos copias automáticas de tu contabilidad y documentos clave para que jamás pierdas información importante si un equipo se daña.',
    icon: FolderArrowDownIcon
  },
  {
    title: 'Software a la medida de tu empresa',
    description: 'Creamos sistemas y aplicaciones adaptadas exactamente a cómo funciona tu negocio, automatizando tareas repetitivas y ahorrándote tiempo.',
    icon: CodeBracketIcon
  }
]
</script>
