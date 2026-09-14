<template>
  <section id="services" class="py-20 sm:py-28 bg-slate-50 text-slate-900 border-b border-slate-200" ref="servicesRef">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
      
      <!-- PART 1: METHODOLOGY IN 4 STEPS -->
      <div id="methodology" class="scroll-mt-24">
        <div class="max-w-3xl mb-12 space-y-3">
          <div class="inline-flex items-center px-3 py-1 rounded-md bg-violet-50 border border-violet-200/80 text-xs font-semibold text-violet-700">
            Metodología Operativa
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Cómo resolvemos los retos de tu empresa
          </h2>
          <p class="text-slate-600 text-base leading-relaxed">
            Un proceso claro y transparente para atender lo que tu negocio necesita, sin complicaciones.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(step, idx) in methodology" 
            :key="idx"
            class="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-violet-300 transition-all space-y-3"
          >
            <div class="text-xs font-mono font-bold text-violet-700 bg-violet-50 inline-block px-2.5 py-0.5 rounded border border-violet-200/60">
              PASO {{ step.step }}
            </div>
            <h3 class="text-lg font-bold text-slate-900">
              {{ step.title }}
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- PART 2: IT SERVICES DASHBOARD (TWO-PART BOARD) -->
      <div>
        <div class="max-w-3xl mb-6 sm:mb-12 space-y-3">
          <div class="inline-flex items-center px-3 py-1 rounded-md bg-violet-50 border border-violet-200/80 text-xs font-semibold text-violet-700">
            Servicios IT para Empresas
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Infraestructura, conectividad y soporte técnico
          </h2>
          <p class="text-slate-600 text-base leading-relaxed">
            Brindamos soluciones integrales para que la tecnología sea un facilitador del negocio y no una fuente de interrupciones o retrasos.
          </p>
        </div>

        <!-- TWO-PART DASHBOARD BOARD FOR DESKTOP (lg:grid) -->
        <div class="hidden lg:grid lg:grid-cols-12 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden min-h-[540px]">
          
          <!-- LEFT PART: SOLUTIONS SELECTOR (col-span-5) -->
          <div class="lg:col-span-5 border-r border-slate-200 bg-slate-50/50 p-4 sm:p-6 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/70">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Soluciones Disponibles
                </span>
                <span class="text-[11px] font-semibold text-violet-700 bg-violet-100/70 px-2 py-0.5 rounded">
                  5 Áreas para tu empresa
                </span>
              </div>

              <!-- List of Solutions -->
              <div class="space-y-2">
                <button
                  v-for="(service, index) in itServices"
                  :key="index"
                  @click="selectedServiceIndex = index"
                  type="button"
                  class="w-full text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 flex items-center justify-between gap-3 group cursor-pointer focus:outline-none"
                  :class="selectedServiceIndex === index 
                    ? 'bg-white border-2 border-primary shadow-sm' 
                    : 'bg-transparent hover:bg-white/90 border border-transparent hover:border-slate-200/80'"
                >
                  <div class="flex items-start gap-3 min-w-0">
                    <div 
                      class="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center transition-colors"
                      :class="selectedServiceIndex === index 
                        ? 'bg-primary text-white shadow-sm' 
                        : 'bg-slate-200/70 text-slate-600 group-hover:bg-violet-100 group-hover:text-violet-700'"
                    >
                      <component :is="service.icon" class="w-5 h-5" />
                    </div>
                    <div class="min-w-0">
                      <div class="flex items-center gap-2">
                        <span 
                          class="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                          :class="selectedServiceIndex === index ? 'bg-violet-100 text-violet-800' : 'bg-slate-200/80 text-slate-700'"
                        >
                          {{ service.category }}
                        </span>
                      </div>
                      <h3 
                        class="text-sm font-bold truncate mt-0.5"
                        :class="selectedServiceIndex === index ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'"
                      >
                        {{ service.title }}
                      </h3>
                      <p class="text-xs text-slate-500 truncate mt-0.5">
                        {{ service.shortSummary }}
                      </p>
                    </div>
                  </div>

                  <ChevronRightIcon 
                    class="w-4 h-4 flex-shrink-0 transition-all duration-200"
                    :class="selectedServiceIndex === index 
                      ? 'text-primary translate-x-0.5' 
                      : 'text-slate-400 opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5'"
                  />
                </button>
              </div>
            </div>

            <!-- Small helper caption -->
            <div class="pt-4 mt-4 border-t border-slate-200/70 text-left text-xs text-slate-600">
              Selecciona una solución para consultar su alcance detallado.
            </div>
          </div>

          <!-- RIGHT PART: SERVICE DETAILS PANE (col-span-7) -->
          <div class="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
            <div class="space-y-6">
              
              <!-- Detail Header -->
              <div>
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <span class="text-xs font-semibold uppercase tracking-wider text-violet-700 bg-violet-50 px-2.5 py-1 rounded-md border border-violet-200/60">
                    {{ activeService.category }}
                  </span>
                  <span class="text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Servicio Activo en Panamá
                  </span>
                </div>

                <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-3">
                  {{ activeService.title }}
                </h3>

                <p class="text-sm sm:text-base text-slate-600 leading-relaxed mt-2.5">
                  {{ activeService.description }}
                </p>
              </div>

              <!-- Scope & Technical Deliverables -->
              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                  Alcance Técnico y Mano de Obra
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div 
                    v-for="(bullet, bIdx) in activeService.bullets" 
                    :key="bIdx"
                    class="p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-start gap-2.5"
                  >
                    <CheckCircleIcon class="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span class="text-xs text-slate-700 font-medium leading-relaxed">
                      {{ bullet }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Specifications / Highlights -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div 
                  v-for="(spec, sIdx) in activeService.specs" 
                  :key="sIdx"
                  class="p-3 rounded-lg bg-violet-50/50 border border-violet-100"
                >
                  <div class="text-[11px] font-semibold text-violet-700 uppercase tracking-wider">
                    {{ spec.label }}
                  </div>
                  <div class="text-xs font-medium text-slate-800 mt-0.5">
                    {{ spec.value }}
                  </div>
                </div>
              </div>

            </div>

            <!-- Detail Action Footer -->
            <div class="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <a 
                href="#contact" 
                class="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-violet-700 text-white font-bold text-xs rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Solicitar Propuesta</span>
                <span>&rarr;</span>
              </a>
              <span class="text-xs text-slate-500 text-center sm:text-right">
                Diagnóstico inicial sin costo para empresas
              </span>
            </div>

          </div>

        </div>

        <!-- MOBILE STREAMLINED BOARD (lg:hidden) -->
        <div 
          ref="mobileBoardRef"
          class="lg:hidden rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <!-- Mobile Switcher Bar -->
          <div class="bg-slate-50/80 border-b border-slate-200 px-4 py-3">
            <div class="flex items-center justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Solución {{ selectedServiceIndex + 1 }} de {{ itServices.length }}
                </span>
                <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-violet-100 text-violet-800">
                  {{ activeService.category }}
                </span>
              </div>

              <!-- Quick Mini Prev/Next arrows in header -->
              <div class="flex items-center gap-1">
                <button 
                  @click="prevService" 
                  :disabled="selectedServiceIndex === 0"
                  aria-label="Solución anterior"
                  class="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 active:bg-slate-200 shadow-2xs"
                >
                  <ChevronLeftIcon class="w-4 h-4" />
                </button>
                <button 
                  @click="nextService" 
                  :disabled="selectedServiceIndex === itServices.length - 1"
                  aria-label="Solución siguiente"
                  class="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 active:bg-slate-200 shadow-2xs"
                >
                  <ChevronRightIcon class="w-4 h-4" />
                </button>
              </div>
            </div>

            <!-- Horizontal Scrollable Pills -->
            <div 
              ref="mobileTabsContainerRef" 
              class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar"
              style="-webkit-overflow-scrolling: touch;"
            >
              <button
                v-for="(service, index) in itServices"
                :key="index"
                :ref="el => { if (el) tabRefs[index] = el }"
                @click="selectService(index)"
                type="button"
                class="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                :class="selectedServiceIndex === index 
                  ? 'bg-primary text-white shadow-sm ring-1 ring-primary' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'"
              >
                <component :is="service.icon" class="w-3.5 h-3.5 flex-shrink-0" />
                <span class="whitespace-nowrap">{{ service.mobileLabel }}</span>
              </button>
            </div>
          </div>

          <!-- Active Service Mobile Details Card -->
          <div class="p-5 sm:p-6 space-y-5">
            <!-- Header -->
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span class="text-xs font-semibold uppercase tracking-wider text-violet-700 bg-violet-50 px-2.5 py-1 rounded-md border border-violet-200/60">
                  {{ activeService.category }}
                </span>
                <span class="text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Activo en Panamá
                </span>
              </div>

              <h3 class="text-xl font-bold text-slate-900 tracking-tight mt-2 leading-snug">
                {{ activeService.title }}
              </h3>

              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                {{ activeService.description }}
              </p>
            </div>

            <!-- Scope & Technical Deliverables -->
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                Alcance Técnico y Mano de Obra
              </h4>
              <div class="space-y-2">
                <div 
                  v-for="(bullet, bIdx) in activeService.bullets" 
                  :key="bIdx"
                  class="p-3 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-relaxed"
                >
                  <CheckCircleIcon class="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{{ bullet }}</span>
                </div>
              </div>
            </div>

            <!-- Specifications / Highlights -->
            <div class="space-y-2.5 pt-2 border-t border-slate-100">
              <div 
                v-for="(spec, sIdx) in activeService.specs" 
                :key="sIdx"
                class="p-3 rounded-lg bg-violet-50/50 border border-violet-100"
              >
                <div class="text-[11px] font-semibold text-violet-700 uppercase tracking-wider">
                  {{ spec.label }}
                </div>
                <div class="text-xs font-medium text-slate-800 mt-0.5">
                  {{ spec.value }}
                </div>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="pt-2">
              <a 
                href="#contact" 
                class="w-full py-3 bg-primary hover:bg-violet-700 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <span>Solicitar Propuesta</span>
                <span>&rarr;</span>
              </a>
              <span class="block text-[11px] text-slate-500 text-center mt-2">
                Diagnóstico inicial sin costo para empresas
              </span>
            </div>

            <!-- Bottom Pagination Controls -->
            <div class="pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
              <button
                @click="prevService"
                :disabled="selectedServiceIndex === 0"
                class="px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 active:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
              >
                <ChevronLeftIcon class="w-3.5 h-3.5" />
                <span>Anterior</span>
              </button>

              <!-- Dot indicators with accessible 24px+ touch targets -->
              <div class="flex items-center gap-1">
                <button
                  v-for="(_, dotIdx) in itServices"
                  :key="dotIdx"
                  @click="selectService(dotIdx)"
                  :aria-label="`Ir al servicio ${dotIdx + 1}`"
                  class="h-7 min-w-[24px] px-1 flex items-center justify-center transition-all focus:outline-none"
                >
                  <span
                    class="h-2 rounded-full transition-all duration-200 block"
                    :class="selectedServiceIndex === dotIdx ? 'w-5 bg-primary' : 'w-2 bg-slate-300 hover:bg-slate-400'"
                  />
                </button>
              </div>

              <button
                @click="nextService"
                :disabled="selectedServiceIndex === itServices.length - 1"
                class="px-3 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 active:bg-slate-950 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 transition-colors shadow-sm"
              >
                <span>Siguiente</span>
                <ChevronRightIcon class="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  WifiIcon,
  ShieldCheckIcon,
  CircleStackIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon
} from '@heroicons/vue/24/outline'

const servicesRef = ref(null)
const selectedServiceIndex = ref(0)

const activeService = computed(() => itServices[selectedServiceIndex.value] || itServices[0])

const tabRefs = ref([])
const mobileTabsContainerRef = ref(null)
const mobileBoardRef = ref(null)

const selectService = (index) => {
  if (index < 0 || index >= itServices.length) return
  selectedServiceIndex.value = index
  
  // Center active pill tab horizontally without shifting vertical page scroll
  const activeTabEl = tabRefs.value[index]
  if (activeTabEl && typeof activeTabEl.scrollIntoView === 'function') {
    activeTabEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }
}

const scrollToMobileBoardTop = () => {
  if (mobileBoardRef.value) {
    const rect = mobileBoardRef.value.getBoundingClientRect()
    // If the top of the mobile board has scrolled above the header bar (72px)
    if (rect.top < 70) {
      const targetY = window.scrollY + rect.top - 80
      window.scrollTo({ top: targetY, behavior: 'smooth' })
    }
  }
}

const nextService = () => {
  if (selectedServiceIndex.value < itServices.length - 1) {
    selectService(selectedServiceIndex.value + 1)
    scrollToMobileBoardTop()
  }
}

const prevService = () => {
  if (selectedServiceIndex.value > 0) {
    selectService(selectedServiceIndex.value - 1)
    scrollToMobileBoardTop()
  }
}

// Touch swipe gestures for mobile
let touchStartX = 0
let touchStartY = 0

const handleTouchStart = (e) => {
  if (!e.changedTouches || e.changedTouches.length === 0) return
  touchStartX = e.changedTouches[0].clientX
  touchStartY = e.changedTouches[0].clientY
}

const handleTouchEnd = (e) => {
  if (!e.changedTouches || e.changedTouches.length === 0) return
  const diffX = e.changedTouches[0].clientX - touchStartX
  const diffY = e.changedTouches[0].clientY - touchStartY

  // Trigger only if horizontal swipe dominates vertical movement and is > 45px
  if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX < 0) {
      nextService()
    } else {
      prevService()
    }
  }
}

const methodology = [
  {
    step: '01',
    title: 'Diagnóstico',
    description: 'Evaluamos tu tecnología actual para identificar fallas y mejoras sin costo inicial.'
  },
  {
    step: '02',
    title: 'Propuesta',
    description: 'Diseñamos un plan claro y ajustado a tu presupuesto, sin costos ocultos.'
  },
  {
    step: '03',
    title: 'Implementación',
    description: 'Instalamos y configuramos todo en horarios programados sin interrumpir tu trabajo.'
  },
  {
    step: '04',
    title: 'Soporte Continuo',
    description: 'Mantenimiento preventivo y atención rápida para que tu operación nunca se detenga.'
  }
]

const itServices = [
  {
    category: 'Infraestructura',
    mobileLabel: 'Redes',
    title: 'Redes y Servidores',
    icon: WifiIcon,
    shortSummary: 'Cableado de red, Wi-Fi de alta velocidad y conexiones seguras.',
    description: 'Instalamos y organizamos redes cableadas e inalámbricas en tu empresa para que todos naveguen con buena velocidad y estabilidad.',
    bullets: [
      'Instalación y ordenamiento de cables de red para internet',
      'Configuración de puntos de acceso Wi-Fi en toda la oficina',
      'Organización y limpieza de cables en racks y gabinetes',
      'Conexiones seguras para comunicar sucursales u oficinas'
    ],
    specs: [
      { label: 'Mano de obra', value: 'Instalación de cables, configuración y pruebas' },
      { label: 'Alcance técnico', value: 'Oficinas, locales comerciales y bodegas' }
    ]
  },
  {
    category: 'Seguridad',
    mobileLabel: 'Seguridad',
    title: 'Ciberseguridad',
    icon: ShieldCheckIcon,
    shortSummary: 'Firewalls de seguridad, antivirus y controles de accesos.',
    description: 'Protegemos las computadoras y redes de tu negocio contra virus, ataques y accesos no deseados para cuidar tu información.',
    bullets: [
      'Instalación y configuración de firewalls de seguridad',
      'Antivirus corporativo para todas las computadoras',
      'Bloqueo de páginas peligrosas y correos sospechosos',
      'Contraseñas seguras y permisos de acceso para usuarios'
    ],
    specs: [
      { label: 'Mano de obra', value: 'Configuración de seguridad y soporte preventivo' },
      { label: 'Alcance técnico', value: 'Protección de red, servidores y computadoras' }
    ]
  },
  {
    category: 'Auditoría',
    mobileLabel: 'Auditoría',
    title: 'Auditoría IT',
    icon: CircleStackIcon,
    shortSummary: 'Copias automáticas en sitio y respaldo seguro en la nube.',
    description: 'Revisamos tus equipos para prevenir problemas y dejamos copias automáticas de documentos para no perder información.',
    bullets: [
      'Revisión de computadoras y servidores para detectar fallas',
      'Copias de seguridad automáticas de tus archivos y sistemas',
      'Copia de respaldo en la nube para emergencias',
      'Pruebas de restauración para asegurar que tus datos abran bien'
    ],
    specs: [
      { label: 'Mano de obra', value: 'Revisión técnica y configuración de respaldos' },
      { label: 'Alcance técnico', value: 'Documentos y bases de datos' }
    ]
  },
  {
    category: 'Desarrollo',
    mobileLabel: 'Software',
    title: 'Desarrollo de Software',
    icon: CodeBracketIcon,
    shortSummary: 'Sistemas web, paneles administrativos y automatización de tareas.',
    description: 'Creamos programas y sistemas adaptados a cómo trabaja tu empresa para ahorrar tiempo, evitar errores y ordenar tus procesos.',
    bullets: [
      'Creación de sistemas web y paneles de control a la medida',
      'Conexión con facturación electrónica y sistemas contables',
      'Automatización de tareas repetitivas, cobros y reportes',
      'Mantenimiento continuo y mejoras según crezca tu negocio'
    ],
    specs: [
      { label: 'Mano de obra', value: 'Diseño, programación y soporte del sistema' },
      { label: 'Alcance técnico', value: 'Sistemas propios con acceso exclusivo para tu empresa' }
    ]
  },
  {
    category: 'Operaciones',
    mobileLabel: 'Soporte',
    title: 'Soporte Técnico',
    icon: ComputerDesktopIcon,
    shortSummary: 'Atención presencial rápida, mantenimiento y ayuda técnica.',
    description: 'Resolvemos cualquier problema con computadoras, impresoras o internet para que tu personal trabaje sin interrupciones ni demoras.',
    bullets: [
      'Ayuda rápida si una computadora falla o el internet está lento',
      'Soporte técnico presencial directamente en tus oficinas',
      'Mantenimiento preventivo y limpieza de computadoras',
      'Instalación y cambio de piezas, discos o pantallas'
    ],
    specs: [
      { label: 'Mano de obra', value: 'Técnicos calificados trabajando en tus oficinas' },
      { label: 'Alcance técnico', value: 'Planes mensuales de soporte o visitas por hora' }
    ]
  }
]
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
