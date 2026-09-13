<template>
  <div id="productos" class="py-24 sm:py-32 bg-white text-slate-900 min-h-screen">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
      
      <!-- TOP NAVIGATION / BREADCRUMB -->
      <div class="flex items-center justify-between">
        <a 
          href="#home" 
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 border border-slate-300 text-sm font-semibold text-slate-800 hover:bg-slate-200/80 hover:text-slate-950 transition-all shadow-sm group"
        >
          <span class="group-hover:-translate-x-0.5 transition-transform text-violet-600">&larr;</span>
          <span>Volver al Inicio</span>
        </a>

      </div>

      <!-- COMMERCIAL HERO INTRODUCTION -->
      <div class="max-w-4xl space-y-6">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-200 bg-violet-50 text-xs font-bold uppercase tracking-wider text-violet-700">
          Productos • PULSE
        </div>
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
          Software operativo diseñado para que tu empresa <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">nunca pierda ventas ni tiempo</span>.
        </h1>
        <p class="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
          En PULSE no solo cuidamos tus redes y equipos: también construimos herramientas tecnológicas enfocadas en resolver los dolores que más dinero le cuestan a tu negocio en Panamá: el descontrol en los despachos diarios y los descuadres de inventario físico.
        </p>

      </div>

      <!-- DUAL PRODUCTS SALES CARDS -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <!-- MAYA SALES CARD -->
        <div class="rounded-2xl bg-white border-2 border-slate-200 hover:border-violet-400 p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-md hover:shadow-xl transition-all relative overflow-hidden group">
          <div class="space-y-6 relative z-10">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3 py-1.5 rounded-md border border-violet-200">
                Logística y Despachos
              </span>
            </div>

            <div>
              <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Maya
              </h2>
              <p class="text-sm font-semibold text-violet-700 mt-1">
                Plataforma de Última Milla
              </p>
            </div>

            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
              Maya coordina a tus operadores de despacho, conductores y destinatarios finales en una sola plataforma con trazabilidad total y optimización inteligente.
            </p>

            <div class="space-y-3 text-sm text-slate-700">
              <div class="flex items-start gap-3">
                <CheckCircleIcon class="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <span><strong class="text-slate-900">Rutas optimizadas con IA:</strong> Ordena las entregas por secuencia lógica para ahorrar hasta 25% en combustible.</span>
              </div>
              <div class="flex items-start gap-3">
                <CheckCircleIcon class="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <span><strong class="text-slate-900">App móvil para transportistas:</strong> Hojas de ruta digitales en el celular con navegación y estado de cada entrega.</span>
              </div>
              <div class="flex items-start gap-3">
                <CheckCircleIcon class="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <span><strong class="text-slate-900">Prueba de entrega digital (POD):</strong> Firma en pantalla del cliente y fotos de respaldo con hora y geolocalización.</span>
              </div>
              <div class="flex items-start gap-3">
                <CheckCircleIcon class="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <span><strong class="text-slate-900">Portal de rastreo al destinatario:</strong> Enlace público donde tu cliente ve el mapa en vivo sin necesidad de llamar a tu oficina.</span>
              </div>
            </div>
          </div>

          <div class="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <a 
              href="https://wa.me/50760656128?text=Hola%20PULSE,%20deseo%20solicitar%20una%20demostraci%C3%B3n%20comercial%20de%20Maya%20(Software%20de%20%C3%9Altima%20Milla)." 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-6 py-3.5 bg-primary hover:bg-violet-700 text-white font-bold text-sm rounded-lg transition-colors text-center shadow-md hover:shadow-violet-500/20"
            >
              Solicitar Demostración de Maya
            </a>
          </div>
        </div>

        <!-- STASH IMS SALES CARD -->
        <div class="rounded-2xl bg-white border-2 border-slate-200 hover:border-violet-400 p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-md hover:shadow-xl transition-all relative overflow-hidden group">
          <div class="space-y-6 relative z-10">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider text-violet-700 bg-violet-50 px-3 py-1.5 rounded-md border border-violet-200">
                Inventarios y WMS
              </span>
            </div>

            <div>
              <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Stash IMS
              </h2>
              <p class="text-sm font-semibold text-violet-700 mt-1">
                Control Total de Inventario para PyMEs en Panamá
              </p>
            </div>

            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
              Stash IMS te avisa antes de que te quedes sin producto. Controla stock, bodegas, sucursales y transferencias internas sin hojas de cálculo confusas.
            </p>

            <div class="space-y-3 text-sm text-slate-700">
              <div class="flex items-start gap-3">
                <CheckCircleIcon class="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <span><strong class="text-slate-900">Inventario en tiempo real:</strong> Conteo automático por cajas y unidades sueltas con búsqueda instantánea por SKU.</span>
              </div>
              <div class="flex items-start gap-3">
                <CheckCircleIcon class="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <span><strong class="text-slate-900">Alertas preventivas de reorden:</strong> Notificaciones cuando el stock baja del nivel mínimo para pedir a tiempo a proveedores.</span>
              </div>
              <div class="flex items-start gap-3">
                <CheckCircleIcon class="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <span><strong class="text-slate-900">Tablero de transferencias (Kanban):</strong> Flujo claro de 4 etapas entre bodega y tienda; el stock solo se descuenta al entregar.</span>
              </div>
              <div class="flex items-start gap-3">
                <CheckCircleIcon class="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <span><strong class="text-slate-900">Integración con Alegra:</strong> Sincronización automática con tu facturación para rebajar stock sin doble digitación.</span>
              </div>
            </div>
          </div>

          <div class="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div class="flex flex-wrap gap-2">
              <a 
                href="https://wa.me/50760656128?text=Hola%20PULSE,%20deseo%20solicitar%20una%20demostraci%C3%B3n%20comercial%20de%20Stash%20IMS%20(Software%20de%20Inventarios)." 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-5 py-3.5 bg-primary hover:bg-violet-700 text-white font-bold text-sm rounded-lg transition-colors text-center shadow-md hover:shadow-violet-500/20"
              >
                Solicitar Demostración de Stash
              </a>
              <a 
                href="https://stash-ims-landing.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-4 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-slate-950 border border-slate-300 font-semibold text-sm rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Ver Sitio Web</span>
                <ArrowTopRightOnSquareIcon class="w-4 h-4 text-violet-600" />
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- STRUCTURED INTERACTIVE CAPABILITIES PANEL (REUTILIZANDO EL PATRÓN DE SERVICIOS IT) -->
      <div class="pt-6">
        <div class="max-w-3xl mb-6 sm:mb-12 space-y-3">
          <div class="inline-flex items-center px-3 py-1 rounded-md bg-violet-50 border border-violet-200 text-xs font-semibold text-violet-700">
            Módulos Detallados
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explora las funcionalidades clave de cada plataforma
          </h2>
          <p class="text-slate-600 text-base leading-relaxed">
            Selecciona cada módulo en el panel para conocer el impacto operativo y la tecnología que pondrás a trabajar en tu empresa.
          </p>
        </div>

        <!-- TWO-COLUMN INTERACTIVE BOARD FOR DESKTOP (lg:grid) -->
        <div class="hidden lg:grid lg:grid-cols-12 rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden min-h-[580px]">
          
          <!-- LEFT PART: MODULE SELECTOR (col-span-5) -->
          <div class="lg:col-span-5 border-r border-slate-200 bg-slate-50/70 p-4 sm:p-6 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Módulos Operativos
                </span>
              </div>

              <!-- Module List -->
              <div class="space-y-2">
                <button
                  v-for="(mod, index) in saasModules"
                  :key="index"
                  @click="selectedModuleIndex = index"
                  type="button"
                  class="w-full text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 flex items-center justify-between gap-3 group cursor-pointer focus:outline-none"
                  :class="selectedModuleIndex === index 
                    ? 'bg-white border-2 border-primary shadow-sm' 
                    : 'bg-transparent hover:bg-white/90 border border-transparent hover:border-slate-200/80'"
                >
                  <div class="flex items-start gap-3 min-w-0">
                    <div 
                      class="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center transition-colors"
                      :class="selectedModuleIndex === index 
                        ? 'bg-primary text-white shadow-sm' 
                        : 'bg-slate-200/80 text-slate-600 group-hover:bg-violet-100 group-hover:text-violet-700'"
                    >
                      <component :is="mod.icon" class="w-5 h-5" />
                    </div>
                    <div class="min-w-0">
                      <div class="flex items-center gap-2">
                        <span 
                          class="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                          :class="selectedModuleIndex === index ? 'bg-violet-100 text-violet-800' : 'bg-slate-200/60 text-slate-600'"
                        >
                          {{ mod.productBadge }}
                        </span>
                      </div>
                      <h4 
                        class="text-sm font-bold truncate mt-0.5"
                        :class="selectedModuleIndex === index ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'"
                      >
                        {{ mod.title }}
                      </h4>
                      <p class="text-xs text-slate-500 truncate mt-0.5">
                        {{ mod.shortSummary }}
                      </p>
                    </div>
                  </div>

                  <ChevronRightIcon 
                    class="w-4 h-4 flex-shrink-0 transition-all duration-200"
                    :class="selectedModuleIndex === index 
                      ? 'text-primary translate-x-0.5' 
                      : 'text-slate-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5'"
                  />
                </button>
              </div>
            </div>

            <div class="pt-4 mt-4 border-t border-slate-200/80 text-left text-xs text-slate-500">
              Haz clic en un módulo para inspeccionar su alcance técnico y flujo de trabajo.
            </div>
          </div>

          <!-- RIGHT PART: MODULE DETAILS PANE (col-span-7) -->
          <div class="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
            <div class="space-y-6">
              
              <!-- Detail Header -->
              <div>
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <span class="text-xs font-semibold uppercase tracking-wider text-violet-700 bg-violet-50 px-2.5 py-1 rounded-md border border-violet-200/60">
                    {{ activeModule.productBadge }} • {{ activeModule.category }}
                  </span>
                </div>

                <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
                  {{ activeModule.title }}
                </h3>
                <p class="text-sm font-semibold text-violet-700 mt-1">
                  {{ activeModule.tagline }}
                </p>
                <p class="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                  {{ activeModule.description }}
                </p>
              </div>

              <!-- Checkpoints / Bullets -->
              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Alcance Operativo y Capacidades
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div 
                    v-for="(bullet, bIdx) in activeModule.bullets" 
                    :key="bIdx"
                    class="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700"
                  >
                    <CheckCircleIcon class="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span>{{ bullet }}</span>
                  </div>
                </div>
              </div>

              <!-- Value Proposition Highlights -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div class="p-4 rounded-xl bg-red-50/60 border border-red-200">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-red-700 block mb-1">
                    Dolor que elimina
                  </span>
                  <span class="text-xs text-slate-700 leading-relaxed block">
                    {{ activeModule.painEliminated }}
                  </span>
                </div>
                <div class="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    Beneficio de negocio
                  </span>
                  <span class="text-xs text-slate-700 leading-relaxed block">
                    {{ activeModule.businessBenefit }}
                  </span>
                </div>
              </div>

            </div>

            <!-- Detail Action Footer -->
            <div class="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <a 
                :href="activeModule.ctaLink"
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3.5 rounded-lg bg-primary hover:bg-violet-700 text-white font-bold text-sm transition-colors text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>{{ activeModule.ctaText }}</span>
                <span>&rarr;</span>
              </a>
              <span class="text-xs text-slate-500 text-center sm:text-right">
                Integración personalizada con tus operaciones actuales
              </span>
            </div>

          </div>

        </div>

        <!-- MOBILE STREAMLINED BOARD (lg:hidden) -->
        <div 
          ref="mobileBoardRef"
          class="lg:hidden rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <!-- Mobile Switcher Bar -->
          <div class="bg-slate-50/80 border-b border-slate-200 px-4 py-3">
            <div class="flex items-center justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Módulo {{ selectedModuleIndex + 1 }} de {{ saasModules.length }}
                </span>
                <span 
                  class="text-[10px] font-extrabold px-2 py-0.5 rounded-full"
                  :class="activeModule.productBadge === 'Maya' ? 'bg-violet-100 text-violet-800' : 'bg-violet-100 text-violet-800'"
                >
                  {{ activeModule.productBadge }}
                </span>
              </div>

              <!-- Quick Mini Prev/Next arrows in header -->
              <div class="flex items-center gap-1">
                <button 
                  @click="prevModule" 
                  :disabled="selectedModuleIndex === 0"
                  aria-label="Módulo anterior"
                  class="p-1.5 rounded-lg border border-slate-200 text-slate-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 active:bg-slate-200"
                >
                  <ChevronLeftIcon class="w-4 h-4" />
                </button>
                <button 
                  @click="nextModule" 
                  :disabled="selectedModuleIndex === saasModules.length - 1"
                  aria-label="Módulo siguiente"
                  class="p-1.5 rounded-lg border border-slate-200 text-slate-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 active:bg-slate-200"
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
                v-for="(mod, index) in saasModules"
                :key="index"
                :ref="el => { if (el) tabRefs[index] = el }"
                @click="selectModule(index)"
                type="button"
                class="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                :class="selectedModuleIndex === index 
                  ? 'bg-primary text-white shadow-sm ring-1 ring-primary' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'"
              >
                <component :is="mod.icon" class="w-3.5 h-3.5 flex-shrink-0" />
                <span class="whitespace-nowrap">{{ mod.productBadge }} • {{ mod.mobileLabel }}</span>
              </button>
            </div>
          </div>

          <!-- Active Module Mobile Details Card -->
          <div class="p-5 sm:p-6 space-y-5">
            <!-- Header -->
            <div>
              <span class="text-xs font-semibold uppercase tracking-wider text-violet-700 bg-violet-50 px-2.5 py-1 rounded-md border border-violet-200/60">
                {{ activeModule.productBadge }} • {{ activeModule.category }}
              </span>

              <h3 class="text-xl font-extrabold text-slate-900 mt-3 leading-snug">
                {{ activeModule.title }}
              </h3>
              <p class="text-xs sm:text-sm font-semibold text-violet-700 mt-1">
                {{ activeModule.tagline }}
              </p>
              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2.5">
                {{ activeModule.description }}
              </p>
            </div>

            <!-- Bullets -->
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Alcance Operativo y Capacidades
              </h4>
              <div class="space-y-2">
                <div 
                  v-for="(bullet, bIdx) in activeModule.bullets" 
                  :key="bIdx"
                  class="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700"
                >
                  <CheckCircleIcon class="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span>{{ bullet }}</span>
                </div>
              </div>
            </div>

            <!-- Value Highlights -->
            <div class="space-y-3 pt-1">
              <div class="p-3.5 rounded-xl bg-red-50/60 border border-red-200">
                <span class="text-[10px] font-bold uppercase tracking-wider text-red-700 block mb-1">
                  Dolor que elimina
                </span>
                <span class="text-xs text-slate-700 leading-relaxed block">
                  {{ activeModule.painEliminated }}
                </span>
              </div>
              <div class="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Beneficio de negocio
                </span>
                <span class="text-xs text-slate-700 leading-relaxed block">
                  {{ activeModule.businessBenefit }}
                </span>
              </div>
            </div>

            <!-- CTA Link Button -->
            <div class="pt-2">
              <a 
                :href="activeModule.ctaLink"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full py-3 rounded-lg bg-primary hover:bg-violet-700 text-white font-bold text-xs sm:text-sm transition-colors text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>{{ activeModule.ctaText }}</span>
                <span>&rarr;</span>
              </a>
            </div>

            <!-- Bottom Module Pagination Controls -->
            <div class="pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
              <button
                @click="prevModule"
                :disabled="selectedModuleIndex === 0"
                class="px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 active:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
              >
                <ChevronLeftIcon class="w-3.5 h-3.5" />
                <span>Anterior</span>
              </button>

              <!-- Dot indicators -->
              <div class="flex items-center gap-1.5">
                <button
                  v-for="(_, dotIdx) in saasModules"
                  :key="dotIdx"
                  @click="selectModule(dotIdx)"
                  :aria-label="`Ir al módulo ${dotIdx + 1}`"
                  class="h-2 rounded-full transition-all duration-200"
                  :class="selectedModuleIndex === dotIdx ? 'w-5 bg-primary' : 'w-2 bg-slate-300 hover:bg-slate-400'"
                />
              </div>

              <button
                @click="nextModule"
                :disabled="selectedModuleIndex === saasModules.length - 1"
                class="px-3 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 active:bg-slate-950 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 transition-colors shadow-sm"
              >
                <span>Siguiente</span>
                <ChevronRightIcon class="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- COMPARATIVE SECTION: TRADICIONAL VS PULSE SAAS -->
      <div class="rounded-2xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
        <div class="max-w-3xl space-y-3">
          <div class="inline-flex items-center px-3 py-1 rounded-md bg-violet-50 border border-violet-200 text-xs font-semibold text-violet-700">
            Comparativa Operativa
          </div>
          <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            De la improvisación manual al control total
          </h2>
          <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
            La adopción de software especializado no es un gasto: es la forma más rápida de blindar tus márgenes y garantizar que tus clientes vuelvan a comprarte.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h4 class="text-base font-bold text-slate-900">Trazabilidad de Entregas</h4>
            <div class="space-y-3 text-xs">
              <div class="p-3 rounded-lg bg-red-50/80 border border-red-200 text-slate-700">
                <span class="font-bold text-red-700 block mb-1">Método Tradicional:</span>
                Desconexión entre la salida y la entrega, llamadas constantes y falta de pruebas claras si un cliente afirma no haber recibido su pedido.
              </div>
              <div class="p-3 rounded-lg bg-emerald-50/80 border border-emerald-200 text-slate-800">
                <span class="font-bold text-emerald-700 block mb-1">Con Maya:</span>
                Trazabilidad total desde la salida del paquete hasta su entrega, con firma digital, fotos con GPS y confirmación inmediata en tu panel.
              </div>
            </div>
          </div>

          <div class="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h4 class="text-base font-bold text-slate-900">Control de Stock y Bodega</h4>
            <div class="space-y-3 text-xs">
              <div class="p-3 rounded-lg bg-red-50/80 border border-red-200 text-slate-700">
                <span class="font-bold text-red-700 block mb-1">Método Tradicional:</span>
                Hojas de Excel desactualizadas, conteos manuales agotadores y productos agotados descubiertos frente al cliente.
              </div>
              <div class="p-3 rounded-lg bg-emerald-50/80 border border-emerald-200 text-slate-800">
                <span class="font-bold text-emerald-700 block mb-1">Con Stash IMS:</span>
                Stock en tiempo real (cajas y unidades), alertas predictivas de reorden y conteos por código de barras desde el celular.
              </div>
            </div>
          </div>

          <div class="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h4 class="text-base font-bold text-slate-900">Transferencias y Facturación</h4>
            <div class="space-y-3 text-xs">
              <div class="p-3 rounded-lg bg-red-50/80 border border-red-200 text-slate-700">
                <span class="font-bold text-red-700 block mb-1">Método Tradicional:</span>
                Doble digitación manual, extravíos de mercancía entre bodegas y tiendas, y ventas de productos que ya no existen.
              </div>
              <div class="p-3 rounded-lg bg-emerald-50/80 border border-emerald-200 text-slate-800">
                <span class="font-bold text-emerald-700 block mb-1">Con Stash IMS:</span>
                Tablero de 4 etapas para transferencias y rebaja de stock automática vinculada a facturación electrónica de Alegra.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM BANNER / CONSULTATION CTA (MANTENIDO EN FONDO OSCURO ORIGINAL) -->
      <div class="rounded-2xl bg-gradient-to-r from-[#14143D] via-[#0F0F33] to-[#14143D] border border-[#2A2A66] p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="space-y-3 text-center md:text-left">
          <span class="text-xs font-bold uppercase tracking-wider text-violet-400">Demostración Personalizada</span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
            ¿Quieres ver cómo funciona en la operación de tu empresa?
          </h3>
          <p class="text-slate-300 text-sm sm:text-base max-w-xl">
            Te mostramos cómo Maya o Stash resuelven los cuellos de botella de tu negocio en Panamá.
          </p>
        </div>
        <div class="flex flex-wrap gap-4 shrink-0 justify-center">
          <a 
            href="https://wa.me/50760656128?text=Hola%20PULSE,%20deseo%20coordinar%20una%20demostraci%C3%B3n%20en%20vivo%20de%20sus%20plataformas%20SaaS." 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm transition-colors shadow-lg flex items-center gap-2"
          >
            <span class="text-white">Agendar Demo por WhatsApp</span>
          </a>
          <a 
            href="#contact" 
            class="px-6 py-3.5 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-sm transition-colors shadow-lg"
          >
            Formulario de Consulta
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  TruckIcon,
  DevicePhoneMobileIcon,
  MapIcon,
  CubeIcon,
  BuildingStorefrontIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/vue/24/outline'

const selectedModuleIndex = ref(0)
const activeModule = computed(() => saasModules[selectedModuleIndex.value] || saasModules[0])

const tabRefs = ref([])
const mobileTabsContainerRef = ref(null)
const mobileBoardRef = ref(null)

const selectModule = (index) => {
  if (index < 0 || index >= saasModules.length) return
  selectedModuleIndex.value = index
  
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

const nextModule = () => {
  if (selectedModuleIndex.value < saasModules.length - 1) {
    selectModule(selectedModuleIndex.value + 1)
    scrollToMobileBoardTop()
  }
}

const prevModule = () => {
  if (selectedModuleIndex.value > 0) {
    selectModule(selectedModuleIndex.value - 1)
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
      nextModule()
    } else {
      prevModule()
    }
  }
}

const saasModules = [
  {
    productBadge: 'Maya',
    mobileLabel: 'Rutas',
    category: 'Última Milla',
    title: 'Planificación de Rutas y Despachos',
    icon: TruckIcon,
    shortSummary: 'Organización de recorridos y asignación a flota.',
    tagline: 'Despacha más rápido',
    description: 'Algoritmos inteligentes que organizan las secuencias de entrega considerando direcciones y capacidad vehicular. Reduce drásticamente los kilómetros recorridos por día y garantiza que los pedidos salgan en orden prioritario.',
    bullets: [
      'Agrupación lógica de entregas por zonas y corredores de Panamá',
      'Cálculo de secuencia para reducir tiempos de entregas',
      'Asignación directa a la flota propia o transportistas externos',
      'Alertas tempranas de ventanas de entrega en riesgo de atraso'
    ],
    painEliminated: 'Horas perdidas armando rutas a mano o llamadas confusas a choferes.',
    businessBenefit: 'Hasta 25% de ahorro en costos y menor desgaste de flota.',
    ctaText: 'Solicitar Demostración',
    ctaLink: 'https://wa.me/50760656128?text=Hola%20PULSE,%20me%20interesa%20la%20Planificaci%C3%B3n%20de%20Rutas%20de%20Maya.'
  },
  {
    productBadge: 'Maya',
    mobileLabel: 'App Chofer',
    category: 'App Transportista',
    title: 'Prueba Digital (POD)',
    icon: DevicePhoneMobileIcon,
    shortSummary: 'App para conductores con GPS, firma en pantalla y fotos.',
    tagline: 'Cero papeleo físico y evidencia instantánea de entrega',
    description: 'Tu conductor lleva toda su jornada en su teléfono. Visualiza cada parada con botón para abrir Waze/Google Maps, recopila firma y foto del destinatario en el acto.',
    bullets: [
      'Hoja de ruta digital interactiva sin necesidad de imprimir manifiestos',
      'Captura de firma en pantalla táctil con validez de recepción',
      'Fotografía de respaldo del paquete entregado con marca de hora y GPS',
      'Reporte de incidentes o motivos de no entrega en tiempo real'
    ],
    painEliminated: 'Incertidumbre durante la ruta, falta de trazabilidad y reclamos por paquetes supuestamente no entregados.',
    businessBenefit: 'Trazabilidad absoluta de inicio a fin y pruebas digitales (firma, foto y GPS) que certifican que el paquete llegó correctamente.',
    ctaText: 'Solicitar Demostración',
    ctaLink: 'https://wa.me/50760656128?text=Hola%20PULSE,%20deseo%20conocer%20la%20App%20de%20Conductores%20y%20POD%20de%20Maya.'
  },
  {
    productBadge: 'Maya',
    mobileLabel: 'Rastreo',
    category: 'Atención al Cliente',
    title: 'Portal de Rastreo en Vivo para Destinatarios',
    icon: MapIcon,
    shortSummary: 'Enlace público para que el cliente rastree su pedido sin llamar.',
    tagline: 'Fideliza clientes y vacía la bandeja de reclamos',
    description: 'Envía automáticamente por WhatsApp un enlace público donde el cliente verifica el estado de su entrega, la foto de su paquete y la hora estimada de llegada.',
    bullets: [
      'Página de rastreo personalizada con la marca de tu empresa',
      'Visualización de estado: Preparando, En camino, Próximo a entregar, Completado',
      'Notificaciones automáticas proactivas de llegada',
      'Encuesta de satisfacción de entrega de 1 a 5 estrellas'
    ],
    painEliminated: 'Llamadas repetitivas de clientes ansiosos preguntando "¿dónde viene mi pedido?".',
    businessBenefit: 'Mejora en más de 40% la satisfacción del cliente.',
    ctaText: 'Solicitar Demostración',
    ctaLink: 'https://wa.me/50760656128?text=Hola%20PULSE,%20quiero%20ver%20el%20Portal%20de%20Rastreo%20de%20Maya.'
  },
  {
    productBadge: 'Stash IMS',
    mobileLabel: 'Stock Real',
    category: 'Control de Stock',
    title: 'Inventario en Tiempo Real y Multi-sede',
    icon: CubeIcon,
    shortSummary: 'Conteo exacto, catálogo por SKU y control por bodega.',
    tagline: 'Visibilidad total de existencias en cada metro cuadrado',
    description: 'Elimina las discrepancias entre lo que dice el sistema y lo que hay en estanterías. Stash clasifica departamentos, categorías y subcategorías, calculando automáticamente cajas y unidades sueltas sin requerir complejas conversiones matemáticas.',
    bullets: [
      'Búsqueda rápida por nombre, SKU o código de barras',
      'Diferenciación exacta entre unidades sueltas y cajas completas',
      'Administración separada de bodegas centrales y tiendas sucursales',
      'Control de capacidad física antes de recibir más mercancía de proveedores'
    ],
    painEliminated: 'Vender productos inexistentes, conteos ciegos y horas buscando cajas en la bodega.',
    businessBenefit: '99% de exactitud en inventario y auditorías físicas completadas en un tercio del tiempo.',
    ctaText: 'Solicitar Demostración',
    ctaLink: 'https://wa.me/50760656128?text=Hola%20PULSE,%20quiero%20probar%20el%20Control%20de%20Inventario%20de%20Stash%20IMS.'
  },
  {
    productBadge: 'Stash IMS',
    mobileLabel: 'Reorden',
    category: 'Reorden & Alertas',
    title: 'Alertas Predictivas y Tablero de Transferencias',
    icon: BuildingStorefrontIcon,
    shortSummary: 'Avisos preventivos de stock mínimo',
    tagline: 'Nunca más pierdas una venta por quiebre de stock',
    description: 'Configura el nivel mínimo de seguridad por cada producto. Apenas las existencias cruzan ese umbral, Stash emite una alerta visual en el panel para reponer a tiempo. Además, gestiona los pedidos entre sucursales mediante un tablero Kanban transparente de 4 pasos.',
    bullets: [
      'Alertas automáticas en pantalla de productos en estado crítico',
      'Tablero de 4 etapas: Solicitado, Leído, En camino y Entregado',
      'El stock se descuenta únicamente cuando el receptor confirma la llegada',
      'Historial completo de quién pidió la mercancía, cuándo y quién la despachó'
    ],
    painEliminated: 'Descubrir que se acabó un producto estrella cuando el cliente ya está listo para pagar.',
    businessBenefit: 'Cero ventas perdidas por falta de existencias y control estricto de mermas internas.',
    ctaText: 'Solicitar Demostración',
    ctaLink: 'https://wa.me/50760656128?text=Hola%20PULSE,%20me%20interesan%20las%20Alertas%20y%20Transferencias%20de%20Stash%20IMS.'
  },
  {
    productBadge: 'Stash IMS',
    mobileLabel: 'Alegra',
    category: 'Integraciones',
    title: 'Integración Automática con Facturación Alegra',
    icon: ArrowPathIcon,
    shortSummary: 'Cada venta emitida descuenta el inventario al instante.',
    tagline: 'Factura con tranquilidad sabiendo que tu stock está al día',
    description: 'Si tu empresa utiliza Alegra para facturación electrónica o contabilidad, Stash se sincroniza de forma nativa. Cada factura o nota de entrega generada rebaja las unidades correspondientes en Stash sin intervención humana ni desfases.',
    bullets: [
      'Sincronización en segundo plano sin alterar la velocidad de tu punto de venta',
      'Eliminación total del error humano por digitación manual de salidas',
      'Historial de movimientos enlazado directamente al número de factura de venta',
      'Disponible en planes comerciales para bodegas y múltiples tiendas'
    ],
    painEliminated: 'Tener que meter la misma venta en dos sistemas distintos o cuadrar facturas al final del mes.',
    businessBenefit: 'Ahorro de hasta 15 horas de oficina al mes y conciliación contable sin tropiezos.',
    ctaText: 'Consultar Demostración',
    ctaLink: 'https://wa.me/50760656128?text=Hola%20PULSE,%20quiero%20informaci%C3%B3n%20sobre%20la%20integraci%C3%B3n%20Alegra%20con%20Stash%20IMS.'
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
