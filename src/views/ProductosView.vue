<template>
  <div id="productos" class="bg-white text-slate-900 min-h-screen overflow-hidden">

    <!-- ============================================================== -->
    <!-- JSON-LD: SEO structured data for the product page               -->
    <!-- Includes: SoftwareApplication (Maya & Stash), BreadcrumbList,  -->
    <!-- and FAQPage extracted from the modules' value propositions.     -->
    <!-- Google reads JSON-LD injected by JS in SPAs.                    -->
    <!-- ============================================================== -->
    <component
      :is="'script'"
      type="application/ld+json"
      v-html="productosJsonLd"
    />

    <!-- ============================================================== -->
    <!-- SECTION 0: BREADCRUMB / RETURN                                  -->
    <!-- ============================================================== -->
    <div class="max-w-6xl mx-auto px-6 lg:px-8 pt-8">
      <a
        href="#home"
        class="apple-press inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-100/80 text-xs font-semibold text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/60 transition-colors"
      >
        <span aria-hidden="true">&larr;</span>
        <span>Volver al Inicio</span>
      </a>
    </div>

    <!-- ============================================================== -->
    <!-- SECTION 1: HERO                                                 -->
    <!-- ============================================================== -->
    <section class="max-w-6xl mx-auto px-6 lg:px-8 pt-14 sm:pt-20 pb-16 sm:pb-24">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50/80 border border-violet-100 text-[11px] font-semibold uppercase tracking-[0.08em] text-violet-700">
          <span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
          <span>Productos &middot; PULSE</span>
        </div>

        <!-- H1 SEO-optimized: includes the strongest search terms
             (Maya, Stash, Panamá, última milla, inventarios). -->
        <h1 class="mt-6 text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-slate-950 tracking-[-0.035em] leading-[1.05]">
          Maya y Stash en Panamá:
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-violet-500 to-indigo-500 tracking-[-0.035em]">
            software operativo para que nunca pierdas ventas ni tiempo.
          </span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
          <strong class="text-slate-800">Maya</strong> optimiza tu <strong class="text-slate-800">última milla</strong> con rutas inteligentes, prueba de entrega digital y rastreo en vivo para el destinatario. <strong class="text-slate-800">Stash IMS</strong> controla inventarios, bodegas y transferencias con alertas predictivas e integración nativa con Alegra. Software SaaS desarrollado en Panamá para PyMEs.
        </p>
      </div>
    </section>

    <!-- ============================================================== -->
    <!-- SECTION 2: DUAL PRODUCT CARDS                                   -->
    <!-- ============================================================== -->
    <section class="bg-slate-50/60 border-y border-slate-200/70">
      <div class="max-w-6xl mx-auto px-6 lg:px-8 py-20 sm:py-28">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          <!-- MAYA CARD -->
          <article
            class="apple-card group relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 shadow-[0_1px_0_rgba(15,23,42,0.04)] hover:shadow-[0_24px_48px_-16px_rgba(139,92,246,0.18)] hover:-translate-y-0.5 border border-slate-200/70 hover:border-violet-300/60 transition-[box-shadow,transform,border-color] duration-300"
          >
            <!-- Subtle gradient accent -->
            <div class="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-violet-500/5 blur-3xl pointer-events-none"></div>

            <div class="relative space-y-7">
              <div class="flex items-center justify-between">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-50 border border-violet-100/80 text-[11px] font-bold uppercase tracking-[0.08em] text-violet-700">
                  <span class="w-1 h-1 rounded-full bg-violet-500"></span>
                  Logística y Despachos
                </span>
                <span class="text-[11px] font-mono font-bold text-slate-400 tracking-wider">01</span>
              </div>

              <div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-[-0.025em]">
                  Maya
                </h2>
                <p class="text-sm font-semibold text-violet-600 mt-1.5 tracking-tight">
                  Plataforma de Última Milla
                </p>
              </div>

              <p class="text-[15px] text-slate-600 leading-relaxed">
                Maya coordina a tus operadores de despacho, conductores y destinatarios finales en una sola plataforma con trazabilidad total y optimización inteligente.
              </p>

              <ul class="space-y-3 text-[14px] text-slate-700">
                <li v-for="item in mayaFeatures" :key="item.title" class="flex items-start gap-3">
                  <span class="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-violet-100/80 flex items-center justify-center">
                    <CheckCircleIcon class="w-3.5 h-3.5 text-violet-600" />
                  </span>
                  <span><strong class="text-slate-900 font-semibold">{{ item.title }}:</strong> {{ item.body }}</span>
                </li>
              </ul>

              <div class="pt-2 border-t border-slate-100">
                <a
                  href="https://wa.me/50760656128?text=Hola%20PULSE,%20deseo%20solicitar%20una%20demostraci%C3%B3n%20comercial%20de%20Maya%20(Software%20de%20%C3%9Altima%20Milla)."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="apple-press inline-flex items-center gap-2 px-5 py-3 bg-slate-950 hover:bg-violet-600 text-white font-semibold text-sm rounded-full transition-colors duration-200"
                >
                  <span>Solicitar Demostración de Maya</span>
                  <span class="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </article>

          <!-- STASH CARD -->
          <article
            class="apple-card group relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 shadow-[0_1px_0_rgba(15,23,42,0.04)] hover:shadow-[0_24px_48px_-16px_rgba(99,102,241,0.18)] hover:-translate-y-0.5 border border-slate-200/70 hover:border-indigo-300/60 transition-[box-shadow,transform,border-color] duration-300"
          >
            <div class="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none"></div>

            <div class="relative space-y-7">
              <div class="flex items-center justify-between">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100/80 text-[11px] font-bold uppercase tracking-[0.08em] text-indigo-700">
                  <span class="w-1 h-1 rounded-full bg-indigo-500"></span>
                  Inventarios y WMS
                </span>
                <span class="text-[11px] font-mono font-bold text-slate-400 tracking-wider">02</span>
              </div>

              <div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-[-0.025em]">
                  Stash IMS
                </h2>
                <p class="text-sm font-semibold text-indigo-600 mt-1.5 tracking-tight">
                  Control Total de Inventario para PyMEs en Panamá
                </p>
              </div>

              <p class="text-[15px] text-slate-600 leading-relaxed">
                Stash IMS te avisa antes de que te quedes sin producto. Controla stock, bodegas, sucursales y transferencias internas sin hojas de cálculo confusas.
              </p>

              <ul class="space-y-3 text-[14px] text-slate-700">
                <li v-for="item in stashFeatures" :key="item.title" class="flex items-start gap-3">
                  <span class="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100/80 flex items-center justify-center">
                    <CheckCircleIcon class="w-3.5 h-3.5 text-indigo-600" />
                  </span>
                  <span><strong class="text-slate-900 font-semibold">{{ item.title }}:</strong> {{ item.body }}</span>
                </li>
              </ul>

              <div class="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <a
                  href="https://wa.me/50760656128?text=Hola%20PULSE,%20deseo%20solicitar%20una%20demostraci%C3%B3n%20comercial%20de%20Stash%20IMS%20(Software%20de%20Inventarios)."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="apple-press inline-flex items-center gap-2 px-5 py-3 bg-slate-950 hover:bg-indigo-600 text-white font-semibold text-sm rounded-full transition-colors duration-200"
                >
                  <span>Solicitar Demostración de Stash</span>
                  <span class="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href="https://stash-ims-landing.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="apple-press inline-flex items-center gap-1.5 px-4 py-3 bg-slate-100/80 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200/60 font-semibold text-sm rounded-full transition-colors"
                >
                  <span>Ver Sitio Web</span>
                  <ArrowTopRightOnSquareIcon class="w-3.5 h-3.5 text-indigo-600" />
                </a>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- ============================================================== -->
    <!-- SECTION 3: INTERACTIVE MODULES                                  -->
    <!-- ============================================================== -->
    <section class="max-w-6xl mx-auto px-6 lg:px-8 py-20 sm:py-28">
      <div class="max-w-2xl mb-10 sm:mb-14">
        <div class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200/60 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-600">
          Módulos Detallados
        </div>
        <h2 class="mt-5 text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.08]">
          Explora las funcionalidades clave de cada plataforma.
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Selecciona cada módulo en el panel para conocer el impacto operativo y la tecnología que pondrás a trabajar en tu empresa.
        </p>
      </div>

      <!-- ============ DESKTOP: TWO-COLUMN BOARD ============ -->
      <div
        class="hidden lg:grid lg:grid-cols-12 rounded-3xl bg-white border border-slate-200/80 shadow-[0_1px_0_rgba(15,23,42,0.04)] overflow-hidden min-h-[600px]"
      >
        <!-- LEFT: module list -->
        <div class="lg:col-span-5 border-r border-slate-200/70 bg-slate-50/40 p-3 sm:p-4 flex flex-col">
          <div class="flex items-center justify-between px-3 py-2.5 mb-2">
            <span class="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
              Módulos Operativos
            </span>
            <span class="text-[10px] font-semibold text-slate-400 tabular-nums">
              {{ selectedModuleIndex + 1 }} / {{ saasModules.length }}
            </span>
          </div>

          <div class="space-y-1.5 flex-1">
            <button
              v-for="(mod, index) in saasModules"
              :key="index"
              @click="selectModule(index)"
              type="button"
              class="apple-press w-full text-left px-3.5 py-3 rounded-2xl transition-colors duration-200 flex items-center justify-between gap-3 group"
              :class="
                selectedModuleIndex === index
                  ? 'bg-white border border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.04)]'
                  : 'bg-transparent border border-transparent hover:bg-white/60'
              "
            >
              <div class="flex items-start gap-3 min-w-0 flex-1">
                <div
                  class="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center transition-colors duration-200"
                  :class="
                    selectedModuleIndex === index
                      ? mod.productBadge === 'Maya'
                        ? 'bg-violet-600 text-white'
                        : 'bg-indigo-600 text-white'
                      : 'bg-slate-200/70 text-slate-500'
                  "
                >
                  <component :is="mod.icon" class="w-4.5 h-4.5" />
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center gap-1.5">
                    <span
                      class="text-[9px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded"
                      :class="
                        selectedModuleIndex === index
                          ? mod.productBadge === 'Maya'
                            ? 'bg-violet-100 text-violet-700'
                            : 'bg-indigo-100 text-indigo-700'
                          : 'bg-slate-200/60 text-slate-500'
                      "
                    >
                      {{ mod.productBadge }}
                    </span>
                  </div>
                  <h4
                    class="text-[13.5px] font-semibold truncate mt-1 leading-tight"
                    :class="
                      selectedModuleIndex === index
                        ? 'text-slate-950'
                        : 'text-slate-700 group-hover:text-slate-900'
                    "
                  >
                    {{ mod.title }}
                  </h4>
                  <p class="text-[11.5px] text-slate-500 truncate mt-0.5">
                    {{ mod.shortSummary }}
                  </p>
                </div>
              </div>

              <ChevronRightIcon
                class="w-4 h-4 flex-shrink-0 transition-transform duration-200"
                :class="
                  selectedModuleIndex === index
                    ? mod.productBadge === 'Maya'
                      ? 'text-violet-600 translate-x-0.5'
                      : 'text-indigo-600 translate-x-0.5'
                    : 'text-slate-400'
                "
              />
            </button>
          </div>

          <div class="px-3 py-2.5 mt-2 border-t border-slate-200/70 text-[11px] text-slate-400">
            Haz clic en un módulo para inspeccionar su alcance técnico.
          </div>
        </div>

        <!-- RIGHT: module detail -->
        <div
          class="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between transition-opacity duration-200"
          :class="activeModule.productBadge === 'Maya' ? 'bg-violet-50/20' : 'bg-indigo-50/20'"
        >
          <div class="space-y-6">
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span
                  class="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-1 rounded-full border"
                  :class="
                    activeModule.productBadge === 'Maya'
                      ? 'bg-violet-50 text-violet-700 border-violet-100'
                      : 'bg-indigo-50 text-indigo-700 border-indigo-100'
                  "
                >
                  {{ activeModule.productBadge }} &middot; {{ activeModule.category }}
                </span>
              </div>

              <h3 class="text-2xl sm:text-[28px] font-extrabold text-slate-950 tracking-[-0.025em] leading-tight mt-4">
                {{ activeModule.title }}
              </h3>
              <p
                class="text-sm font-semibold mt-1.5"
                :class="activeModule.productBadge === 'Maya' ? 'text-violet-600' : 'text-indigo-600'"
              >
                {{ activeModule.tagline }}
              </p>
              <p class="text-[15px] text-slate-600 leading-relaxed mt-4">
                {{ activeModule.description }}
              </p>
            </div>

            <div>
              <h4 class="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 mb-3">
                Alcance Operativo y Capacidades
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div
                  v-for="(bullet, bIdx) in activeModule.bullets"
                  :key="bIdx"
                  class="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-slate-200/70 text-[13px] text-slate-700 leading-snug"
                >
                  <CheckCircleIcon
                    class="w-4 h-4 flex-shrink-0 mt-0.5"
                    :class="activeModule.productBadge === 'Maya' ? 'text-violet-600' : 'text-indigo-600'"
                  />
                  <span>{{ bullet }}</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div class="p-4 rounded-2xl bg-rose-50/60 border border-rose-100/80">
                <span class="text-[10px] font-bold uppercase tracking-[0.12em] text-rose-700 block mb-1.5">
                  Dolor que elimina
                </span>
                <span class="text-[13px] text-slate-700 leading-relaxed block">
                  {{ activeModule.painEliminated }}
                </span>
              </div>
              <div class="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
                <span class="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700 block mb-1.5">
                  Beneficio de negocio
                </span>
                <span class="text-[13px] text-slate-700 leading-relaxed block">
                  {{ activeModule.businessBenefit }}
                </span>
              </div>
            </div>
          </div>

          <div class="pt-6 mt-6 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <a
              :href="activeModule.ctaLink"
              target="_blank"
              rel="noopener noreferrer"
              class="apple-press inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white transition-colors duration-200"
              :class="activeModule.productBadge === 'Maya' ? 'bg-slate-950 hover:bg-violet-600' : 'bg-slate-950 hover:bg-indigo-600'"
            >
              <span>{{ activeModule.ctaText }}</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
            <span class="text-[11px] text-slate-500 text-center sm:text-right">
              Integración personalizada con tus operaciones actuales
            </span>
          </div>
        </div>
      </div>

      <!-- ============ MOBILE: SPRING-DRIVEN CAROUSEL ============ -->
      <div
        class="lg:hidden relative"
        @pointerdown="onCarouselPointerDown"
        @pointermove="onCarouselPointerMove"
        @pointerup="onCarouselPointerUp"
        @pointercancel="onCarouselPointerCancel"
      >
        <!-- Header with dots and arrow controls -->
        <div class="flex items-center justify-between mb-3 px-1">
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 tabular-nums">
              {{ selectedModuleIndex + 1 }} / {{ saasModules.length }}
            </span>
            <span
              class="text-[10px] font-extrabold px-2 py-0.5 rounded-full"
              :class="
                activeModule.productBadge === 'Maya'
                  ? 'bg-violet-100 text-violet-700'
                  : 'bg-indigo-100 text-indigo-700'
              "
            >
              {{ activeModule.productBadge }}
            </span>
          </div>
          <div class="flex items-center gap-1">
            <button
              @click="goToPrev"
              :disabled="selectedModuleIndex === 0"
              aria-label="Módulo anterior"
              class="apple-press w-9 h-9 rounded-full border border-slate-200/80 bg-white text-slate-700 flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 active:bg-slate-200"
            >
              <ChevronLeftIcon class="w-4 h-4" />
            </button>
            <button
              @click="goToNext"
              :disabled="selectedModuleIndex === saasModules.length - 1"
              aria-label="Módulo siguiente"
              class="apple-press w-9 h-9 rounded-full border border-slate-200/80 bg-white text-slate-700 flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 active:bg-slate-200"
            >
              <ChevronRightIcon class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Viewport -->
        <div
          ref="carouselViewportRef"
          class="overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
        >
          <!-- Track: spring-animated X -->
          <div
            ref="carouselTrackRef"
            :style="{
              transform: `translate3d(${carouselX}px, 0, 0)`,
              transition: reducedMotion ? 'transform 200ms ease-out' : 'none',
              willChange: 'transform',
            }"
            class="flex"
          >
            <div
              v-for="(mod, idx) in saasModules"
              :key="idx"
              class="w-full flex-shrink-0 p-6 sm:p-8 space-y-5"
              :class="mod.productBadge === 'Maya' ? 'bg-violet-50/15' : 'bg-indigo-50/15'"
            >
              <div>
                <span
                  class="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-1 rounded-full border"
                  :class="
                    mod.productBadge === 'Maya'
                      ? 'bg-violet-50 text-violet-700 border-violet-100'
                      : 'bg-indigo-50 text-indigo-700 border-indigo-100'
                  "
                >
                  {{ mod.productBadge }} &middot; {{ mod.category }}
                </span>
                <h3 class="text-[22px] font-extrabold text-slate-950 tracking-[-0.02em] leading-tight mt-3">
                  {{ mod.title }}
                </h3>
                <p
                  class="text-[13px] font-semibold mt-1"
                  :class="mod.productBadge === 'Maya' ? 'text-violet-600' : 'text-indigo-600'"
                >
                  {{ mod.tagline }}
                </p>
                <p class="text-[14px] text-slate-600 leading-relaxed mt-3">
                  {{ mod.description }}
                </p>
              </div>

              <div>
                <h4 class="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 mb-2.5">
                  Alcance Operativo y Capacidades
                </h4>
                <div class="space-y-2">
                  <div
                    v-for="(bullet, bIdx) in mod.bullets"
                    :key="bIdx"
                    class="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-slate-200/70 text-[13px] text-slate-700 leading-snug"
                  >
                    <CheckCircleIcon
                      class="w-4 h-4 flex-shrink-0 mt-0.5"
                      :class="mod.productBadge === 'Maya' ? 'text-violet-600' : 'text-indigo-600'"
                    />
                    <span>{{ bullet }}</span>
                  </div>
                </div>
              </div>

              <div class="space-y-2.5">
                <div class="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100/80">
                  <span class="text-[10px] font-bold uppercase tracking-[0.12em] text-rose-700 block mb-1">
                    Dolor que elimina
                  </span>
                  <span class="text-[13px] text-slate-700 leading-relaxed block">
                    {{ mod.painEliminated }}
                  </span>
                </div>
                <div class="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
                  <span class="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700 block mb-1">
                    Beneficio de negocio
                  </span>
                  <span class="text-[13px] text-slate-700 leading-relaxed block">
                    {{ mod.businessBenefit }}
                  </span>
                </div>
              </div>

              <a
                :href="mod.ctaLink"
                target="_blank"
                rel="noopener noreferrer"
                class="apple-press w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white transition-colors"
                :class="mod.productBadge === 'Maya' ? 'bg-slate-950 hover:bg-violet-600' : 'bg-slate-950 hover:bg-indigo-600'"
              >
                <span>{{ mod.ctaText }}</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Dot indicators (spring-animated width on active) -->
        <div class="flex items-center justify-center gap-1.5 mt-5">
          <button
            v-for="(_, dotIdx) in saasModules"
            :key="dotIdx"
            @click="selectModule(dotIdx)"
            :aria-label="`Ir al módulo ${dotIdx + 1}`"
            class="h-1.5 rounded-full transition-all duration-200"
            :style="dotIdx === selectedModuleIndex ? { width: '24px', backgroundColor: dotColorFor(activeModule) } : { width: '6px', backgroundColor: '#cbd5e1' }"
            :aria-current="dotIdx === selectedModuleIndex ? 'true' : 'false'"
          />
        </div>
      </div>
    </section>

    <!-- ============================================================== -->
    <!-- SECTION 4: COMPARATIVE                                          -->
    <!-- ============================================================== -->
    <section class="bg-slate-50/60 border-y border-slate-200/70">
      <div class="max-w-6xl mx-auto px-6 lg:px-8 py-20 sm:py-28 space-y-12">
        <div class="max-w-2xl">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-600">
            Comparativa Operativa
          </div>
          <h2 class="mt-5 text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.08]">
            De la improvisación manual al control total.
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            La adopción de software especializado no es un gasto: es la forma más rápida de blindar tus márgenes y garantizar que tus clientes vuelvan a comprarte.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="(card, cIdx) in comparativeCards"
            :key="cIdx"
            class="apple-card group relative rounded-3xl bg-white p-6 sm:p-7 border border-slate-200/70 shadow-[0_1px_0_rgba(15,23,42,0.04)] hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-[box-shadow,transform] duration-300"
          >
            <h3 class="text-[17px] font-bold text-slate-950 tracking-[-0.01em]">
              {{ card.title }}
            </h3>

            <div class="mt-5 space-y-3">
              <div class="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100/80">
                <span class="text-[10px] font-bold uppercase tracking-[0.12em] text-rose-700 block mb-1.5">
                  Método Tradicional
                </span>
                <span class="text-[13px] text-slate-700 leading-relaxed block">
                  {{ card.traditional }}
                </span>
              </div>
              <div class="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
                <span class="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700 block mb-1.5">
                  {{ card.solutionLabel }}
                </span>
                <span class="text-[13px] text-slate-700 leading-relaxed block">
                  {{ card.withPulse }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================== -->
    <!-- SECTION 5: FINAL CTA                                            -->
    <!-- ============================================================== -->
    <section class="max-w-6xl mx-auto px-6 lg:px-8 py-20 sm:py-28">
      <div class="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 sm:p-14 shadow-2xl">
        <!-- Decorative gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-violet-600/15 via-transparent to-indigo-600/10 pointer-events-none"></div>
        <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl pointer-events-none"></div>

        <div class="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div class="space-y-3 max-w-2xl">
            <span class="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-violet-300">
              <span class="w-1 h-1 rounded-full bg-violet-400"></span>
              Demostración Personalizada
            </span>
            <h3 class="text-2xl sm:text-[34px] font-extrabold text-white tracking-[-0.025em] leading-[1.1]">
              ¿Quieres ver cómo funciona en la operación de tu empresa?
            </h3>
            <p class="text-slate-300 text-[15px] sm:text-base max-w-xl leading-relaxed">
              Te mostramos cómo Maya o Stash resuelven los cuellos de botella de tu negocio en Panamá.
            </p>
            <a
              href="#services"
              class="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white transition-colors group pt-1"
            >
              <span>¿Necesitás también soporte IT, redes o ciberseguridad?</span>
              <span class="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div class="flex flex-wrap gap-3 shrink-0">
            <a
              href="https://wa.me/50760656128?text=Hola%20PULSE,%20deseo%20coordinar%20una%20demostraci%C3%B3n%20en%20vivo%20de%20sus%20plataformas%20SaaS."
              target="_blank"
              rel="noopener noreferrer"
              class="apple-press inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-bold text-sm transition-colors shadow-lg"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Agendar Demo por WhatsApp</span>
            </a>
            <a
              href="#contact"
              class="apple-press inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              <span>Formulario de Consulta</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
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
  ArrowTopRightOnSquareIcon,
} from '@heroicons/vue/24/outline'

import { useAppleSpring } from '@/composables/useAppleSpring'
import { usePointerGesture, projectMomentum } from '@/composables/usePointerGesture'

// ----------------------------------------------------------------
// SEO: JSON-LD structured data for the Productos page.
// This is injected client-side. Google reads JSON-LD from JS in SPAs.
// Includes: SoftwareApplication (Maya + Stash), BreadcrumbList, FAQPage.
// ----------------------------------------------------------------
const productosJsonLd = JSON.stringify(
  {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://pulse.com.pa/#software-maya',
        name: 'Maya Last Mile Software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Last Mile Delivery & Route Optimization',
        operatingSystem: 'Web, iOS, Android',
        description:
          'Software de última milla para PyMEs en Panamá: rutas optimizadas con IA, app móvil para conductores con prueba de entrega digital (POD), portal de rastreo en vivo para destinatarios, hasta 25% de ahorro en combustible.',
        url: 'https://pulse.com.pa/#productos',
        inLanguage: 'es-PA',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'USD',
          price: '0',
          description: 'Solicitar demostración comercial personalizada',
          url: 'https://pulse.com.pa/#contact',
        },
        featureList: [
          'Planificación de rutas con IA',
          'App móvil para transportistas con GPS',
          'Prueba de entrega digital (POD) con firma y foto',
          'Portal de rastreo en vivo para destinatarios',
          'Optimización de combustible hasta 25%',
        ],
        creator: { '@id': 'https://pulse.com.pa/#organization' },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://pulse.com.pa/#software-stash',
        name: 'Stash Warehouse Management System (IMS)',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Inventory Management & Warehouse Management System (WMS)',
        operatingSystem: 'Web, Mobile',
        description:
          'Sistema de gestión de inventarios (WMS) en tiempo real para PyMEs en Panamá: control de stock por SKU, alertas predictivas de reorden, tablero de transferencias Kanban entre bodegas y tiendas, integración nativa con Alegra para facturación.',
        url: 'https://pulse.com.pa/#productos',
        inLanguage: 'es-PA',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'USD',
          price: '0',
          description: 'Solicitar demostración comercial personalizada',
          url: 'https://pulse.com.pa/#contact',
        },
        featureList: [
          'Inventario en tiempo real multi-sede',
          'Alertas predictivas de reorden',
          'Tablero Kanban de transferencias en 4 etapas',
          'Integración nativa con Alegra',
          '99% de exactitud en inventario',
        ],
        creator: { '@id': 'https://pulse.com.pa/#organization' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: 'https://pulse.com.pa/#home',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Productos SaaS',
            item: 'https://pulse.com.pa/#productos',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Qué es Maya y para qué sirve?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Maya es el software de última milla de PULSE para empresas en Panamá. Optimiza rutas con IA (hasta 25% de ahorro en combustible), incluye app móvil para conductores con prueba de entrega digital (firma y foto con GPS) y un portal público de rastreo en vivo para que tus clientes vean dónde viene su pedido sin llamar a tu oficina.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Qué es Stash IMS?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Stash IMS es el sistema de gestión de inventarios (WMS) de PULSE para PyMEs en Panamá. Controla stock en tiempo real por SKU, emite alertas predictivas de reorden, gestiona transferencias entre bodegas y tiendas mediante un tablero Kanban de 4 etapas, y se integra nativamente con Alegra para que cada factura rebaje el stock automáticamente.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cuánto combustible puedo ahorrar con Maya?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Las PyMEs que usan Maya reportan hasta 25% de ahorro en combustible gracias a la planificación de rutas con IA, que agrupa entregas por zonas y optimiza la secuencia para reducir kilómetros recorridos por día.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Stash se integra con mi sistema de facturación Alegra?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Stash se sincroniza de forma nativa con Alegra. Cada factura o nota de entrega emitida en Alegra descuenta las unidades correspondientes en Stash sin digitación manual ni doble carga, ahorrando hasta 15 horas de oficina al mes.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Mis clientes pueden rastrear su pedido en tiempo real?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Maya envía automáticamente por WhatsApp un enlace público de rastreo donde el destinatario ve el estado de su entrega (Preparando, En camino, Próximo a entregar, Completado), la foto del paquete y la hora estimada de llegada. Las empresas que lo usan reportan mejoras de más del 40% en satisfacción del cliente.',
            },
          },
        ],
      },
    ],
  },
  null,
  2
)

// ----------------------------------------------------------------
// Reduced motion preference
// ----------------------------------------------------------------
const reducedMotion = ref(false)
function readReducedMotion() {
  if (typeof window === 'undefined') return false
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// ----------------------------------------------------------------
// Static card content (Maya + Stash feature lists)
// ----------------------------------------------------------------
const mayaFeatures = [
  {
    title: 'Rutas optimizadas con IA',
    body: 'Ordena las entregas por secuencia lógica para ahorrar hasta 25% en combustible.',
  },
  {
    title: 'App móvil para transportistas',
    body: 'Hojas de ruta digitales en el celular con navegación y estado de cada entrega.',
  },
  {
    title: 'Prueba de entrega digital (POD)',
    body: 'Firma en pantalla del cliente y fotos de respaldo con hora y geolocalización.',
  },
  {
    title: 'Portal de rastreo al destinatario',
    body: 'Enlace público donde tu cliente ve el mapa en vivo sin necesidad de llamar a tu oficina.',
  },
]

const stashFeatures = [
  {
    title: 'Inventario en tiempo real',
    body: 'Conteo automático por cajas y unidades sueltas con búsqueda instantánea por SKU.',
  },
  {
    title: 'Alertas preventivas de reorden',
    body: 'Notificaciones cuando el stock baja del nivel mínimo para pedir a tiempo a proveedores.',
  },
  {
    title: 'Tablero de transferencias (Kanban)',
    body: 'Flujo claro de 4 etapas entre bodega y tienda; el stock solo se descuenta al entregar.',
  },
  {
    title: 'Integración con Alegra',
    body: 'Sincronización automática con tu facturación para rebajar stock sin doble digitación.',
  },
]

const comparativeCards = [
  {
    title: 'Trazabilidad de Entregas',
    traditional:
      'Desconexión entre la salida y la entrega, llamadas constantes y falta de pruebas claras si un cliente afirma no haber recibido su pedido.',
    solutionLabel: 'Con Maya',
    withPulse:
      'Trazabilidad total desde la salida del paquete hasta su entrega, con firma digital, fotos con GPS y confirmación inmediata en tu panel.',
  },
  {
    title: 'Control de Stock y Bodega',
    traditional:
      'Hojas de Excel desactualizadas, conteos manuales agotadores y productos agotados descubiertos frente al cliente.',
    solutionLabel: 'Con Stash IMS',
    withPulse:
      'Stock en tiempo real (cajas y unidades), alertas predictivas de reorden y conteos por código de barras desde el celular.',
  },
  {
    title: 'Transferencias y Facturación',
    traditional:
      'Doble digitación manual, extravíos de mercancía entre bodegas y tiendas, y ventas de productos que ya no existen.',
    solutionLabel: 'Con Stash IMS',
    withPulse:
      'Tablero de 4 etapas para transferencias y rebaja de stock automática vinculada a facturación electrónica de Alegra.',
  },
]

// ----------------------------------------------------------------
// Modules data (preserved from original)
// ----------------------------------------------------------------
const saasModules = [
  {
    productBadge: 'Maya',
    mobileLabel: 'Rutas',
    category: 'Última Milla',
    title: 'Planificación de Rutas y Despachos',
    icon: TruckIcon,
    shortSummary: 'Organización de recorridos y asignación a flota.',
    tagline: 'Despacha más rápido',
    description:
      'Algoritmos inteligentes que organizan las secuencias de entrega considerando direcciones y capacidad vehicular. Reduce drásticamente los kilómetros recorridos por día y garantiza que los pedidos salgan en orden prioritario.',
    bullets: [
      'Agrupación lógica de entregas por zonas y corredores de Panamá',
      'Cálculo de secuencia para reducir tiempos de entregas',
      'Asignación directa a la flota propia o transportistas externos',
      'Alertas tempranas de ventanas de entrega en riesgo de atraso',
    ],
    painEliminated: 'Horas perdidas armando rutas a mano o llamadas confusas a choferes.',
    businessBenefit: 'Hasta 25% de ahorro en costos y menor desgaste de flota.',
    ctaText: 'Solicitar Demostración',
    ctaLink:
      'https://wa.me/50760656128?text=Hola%20PULSE,%20me%20interesa%20la%20Planificaci%C3%B3n%20de%20Rutas%20de%20Maya.',
  },
  {
    productBadge: 'Maya',
    mobileLabel: 'App Chofer',
    category: 'App Transportista',
    title: 'Prueba Digital (POD)',
    icon: DevicePhoneMobileIcon,
    shortSummary: 'App para conductores con GPS, firma en pantalla y fotos.',
    tagline: 'Cero papeleo físico y evidencia instantánea de entrega',
    description:
      'Tu conductor lleva toda su jornada en su teléfono. Visualiza cada parada con botón para abrir Waze/Google Maps, recopila firma y foto del destinatario en el acto.',
    bullets: [
      'Hoja de ruta digital interactiva sin necesidad de imprimir manifiestos',
      'Captura de firma en pantalla táctil con validez de recepción',
      'Fotografía de respaldo del paquete entregado con marca de hora y GPS',
      'Reporte de incidentes o motivos de no entrega en tiempo real',
    ],
    painEliminated:
      'Incertidumbre durante la ruta, falta de trazabilidad y reclamos por paquetes supuestamente no entregados.',
    businessBenefit:
      'Trazabilidad absoluta de inicio a fin y pruebas digitales (firma, foto y GPS) que certifican que el paquete llegó correctamente.',
    ctaText: 'Solicitar Demostración',
    ctaLink:
      'https://wa.me/50760656128?text=Hola%20PULSE,%20deseo%20conocer%20la%20App%20de%20Conductores%20y%20POD%20de%20Maya.',
  },
  {
    productBadge: 'Maya',
    mobileLabel: 'Rastreo',
    category: 'Atención al Cliente',
    title: 'Portal de Rastreo en Vivo para Destinatarios',
    icon: MapIcon,
    shortSummary: 'Enlace público para que el cliente rastree su pedido sin llamar.',
    tagline: 'Fideliza clientes y vacía la bandeja de reclamos',
    description:
      'Envía automáticamente por WhatsApp un enlace público donde el cliente verifica el estado de su entrega, la foto de su paquete y la hora estimada de llegada.',
    bullets: [
      'Página de rastreo personalizada con la marca de tu empresa',
      'Visualización de estado: Preparando, En camino, Próximo a entregar, Completado',
      'Notificaciones automáticas proactivas de llegada',
      'Encuesta de satisfacción de entrega de 1 a 5 estrellas',
    ],
    painEliminated: 'Llamadas repetitivas de clientes ansiosos preguntando "¿dónde viene mi pedido?".',
    businessBenefit: 'Mejora en más de 40% la satisfacción del cliente.',
    ctaText: 'Solicitar Demostración',
    ctaLink:
      'https://wa.me/50760656128?text=Hola%20PULSE,%20quiero%20ver%20el%20Portal%20de%20Rastreo%20de%20Maya.',
  },
  {
    productBadge: 'Stash IMS',
    mobileLabel: 'Stock Real',
    category: 'Control de Stock',
    title: 'Inventario en Tiempo Real y Multi-sede',
    icon: CubeIcon,
    shortSummary: 'Conteo exacto, catálogo por SKU y control por bodega.',
    tagline: 'Visibilidad total de existencias en cada metro cuadrado',
    description:
      'Elimina las discrepancias entre lo que dice el sistema y lo que hay en estanterías. Stash clasifica departamentos, categorías y subcategorías, calculando automáticamente cajas y unidades sueltas sin requerir complejas conversiones matemáticas.',
    bullets: [
      'Búsqueda rápida por nombre, SKU o código de barras',
      'Diferenciación exacta entre unidades sueltas y cajas completas',
      'Administración separada de bodegas centrales y tiendas sucursales',
      'Control de capacidad física antes de recibir más mercancía de proveedores',
    ],
    painEliminated: 'Vender productos inexistentes, conteos ciegos y horas buscando cajas en la bodega.',
    businessBenefit:
      '99% de exactitud en inventario y auditorías físicas completadas en un tercio del tiempo.',
    ctaText: 'Solicitar Demostración',
    ctaLink:
      'https://wa.me/50760656128?text=Hola%20PULSE,%20quiero%20probar%20el%20Control%20de%20Inventario%20de%20Stash%20IMS.',
  },
  {
    productBadge: 'Stash IMS',
    mobileLabel: 'Reorden',
    category: 'Reorden & Alertas',
    title: 'Alertas Predictivas y Tablero de Transferencias',
    icon: BuildingStorefrontIcon,
    shortSummary: 'Avisos preventivos de stock mínimo',
    tagline: 'Nunca más pierdas una venta por quiebre de stock',
    description:
      'Configura el nivel mínimo de seguridad por cada producto. Apenas las existencias cruzan ese umbral, Stash emite una alerta visual en el panel para reponer a tiempo. Además, gestiona los pedidos entre sucursales mediante un tablero Kanban transparente de 4 pasos.',
    bullets: [
      'Alertas automáticas en pantalla de productos en estado crítico',
      'Tablero de 4 etapas: Solicitado, Leído, En camino y Entregado',
      'El stock se descuenta únicamente cuando el receptor confirma la llegada',
      'Historial completo de quién pidió la mercancía, cuándo y quién la despachó',
    ],
    painEliminated:
      'Descubrir que se acabó un producto estrella cuando el cliente ya está listo para pagar.',
    businessBenefit: 'Cero ventas perdidas por falta de existencias y control estricto de mermas internas.',
    ctaText: 'Solicitar Demostración',
    ctaLink:
      'https://wa.me/50760656128?text=Hola%20PULSE,%20me%20interesan%20las%20Alertas%20y%20Transferencias%20de%20Stash%20IMS.',
  },
  {
    productBadge: 'Stash IMS',
    mobileLabel: 'Alegra',
    category: 'Integraciones',
    title: 'Integración Automática con Facturación Alegra',
    icon: ArrowPathIcon,
    shortSummary: 'Cada venta emitida descuenta el inventario al instante.',
    tagline: 'Factura con tranquilidad sabiendo que tu stock está al día',
    description:
      'Si tu empresa utiliza Alegra para facturación electrónica o contabilidad, Stash se sincroniza de forma nativa. Cada factura o nota de entrega generada rebaja las unidades correspondientes en Stash sin intervención humana ni desfases.',
    bullets: [
      'Sincronización en segundo plano sin alterar la velocidad de tu punto de venta',
      'Eliminación total del error humano por digitación manual de salidas',
      'Historial de movimientos enlazado directamente al número de factura de venta',
      'Disponible en planes comerciales para bodegas y múltiples tiendas',
    ],
    painEliminated:
      'Tener que meter la misma venta en dos sistemas distintos o cuadrar facturas al final del mes.',
    businessBenefit: 'Ahorro de hasta 15 horas de oficina al mes y conciliación contable sin tropiezos.',
    ctaText: 'Consultar Demostración',
    ctaLink:
      'https://wa.me/50760656128?text=Hola%20PULSE,%20quiero%20informaci%C3%B3n%20sobre%20la%20integraci%C3%B3n%20Alegra%20con%20Stash%20IMS.',
  },
]

// ----------------------------------------------------------------
// Module selector state + spring-driven carousel (mobile)
// ----------------------------------------------------------------
const selectedModuleIndex = ref<number>(0)
const activeModule = computed(() => saasModules[selectedModuleIndex.value]!)

function dotColorFor(mod: (typeof saasModules)[number]): string {
  return mod.productBadge === 'Maya' ? '#7c3aed' : '#4f46e5'
}

function selectModule(index: number): void {
  if (index < 0 || index >= saasModules.length) return
  selectedModuleIndex.value = index
  // On mobile we also animate the carousel. On desktop we just update state.
  nextTick(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      carouselSpring.setImmediate(-index * slideWidth.value)
    }
  })
}

function goToNext() {
  if (selectedModuleIndex.value < saasModules.length - 1) {
    selectModule(selectedModuleIndex.value + 1)
  }
}
function goToPrev() {
  if (selectedModuleIndex.value > 0) {
    selectModule(selectedModuleIndex.value - 1)
  }
}

// ----------------------------------------------------------------
// Mobile carousel: spring + 1:1 pointer drag + momentum projection
// ----------------------------------------------------------------
const carouselX = ref(0) // current translation in px (used for inline style)
const slideWidth = ref(0) // px width of one slide (measured from viewport)
const carouselViewportRef = ref<HTMLElement | null>(null)
const carouselTrackRef = ref<HTMLElement | null>(null)

// Spring for snap-to-target behavior. Slight bounce (damping < 1) because
// flick gestures carry momentum.
const carouselSpring = useAppleSpring({
  damping: 0.85,
  response: 0.45,
  // Larger rest thresholds so we stop ticking quickly at the snap point.
  restPosThreshold: 0.5,
  restVelThreshold: 20,
})

// Sync spring -> reactive ref used in template
watch(
  () => carouselSpring.value.value,
  (v) => {
    carouselX.value = v
  },
  { immediate: true }
)

const gesture = usePointerGesture({ historySize: 4 })

let resizeObserver: ResizeObserver | null = null

function measureSlideWidth(): void {
  // The viewport width IS one slide width (each module card is w-full and
  // fills the parent). Measure the actual element to account for padding.
  const el = carouselViewportRef.value
  if (!el) return
  slideWidth.value = el.getBoundingClientRect().width
}

function clampOffset(offset: number): number {
  const max = 0
  const min = -(saasModules.length - 1) * slideWidth.value
  if (offset > max + 8) {
    // Rubbery resistance at the left edge (first slide).
    const over = offset - max
    return max + over * 0.35
  }
  if (offset < min - 8) {
    // Rubbery resistance at the right edge (last slide).
    const under = min - offset
    return min - under * 0.35
  }
  return offset
}

function onCarouselPointerDown(e: PointerEvent) {
  // Ignore non-primary pointers / mouse non-left button
  if (e.button !== undefined && e.button !== 0) return
  // Stop any in-flight spring so we take direct control.
  carouselSpring.stop()
  const target = e.currentTarget
  gesture.start(e, target instanceof Element ? target : null)
}

function onCarouselPointerMove(e: PointerEvent) {
  if (!gesture.isDragging.value) return
  gesture.move(e)
  // Apply 1:1 offset relative to the currently selected slide's resting position.
  const restPosition = -selectedModuleIndex.value * slideWidth.value
  carouselX.value = clampOffset(restPosition + gesture.delta.value)
}

function onCarouselPointerUp(e: PointerEvent) {
  const release = gesture.release(e)
  if (!release) return
  handleCarouselRelease(release)
}

function onCarouselPointerCancel(e: PointerEvent) {
  gesture.cancel(e)
  snapToCurrent()
}

function handleCarouselRelease({ delta, velocity }: { delta: number; velocity: number }): void {
  if (reducedMotion.value) {
    snapToCurrent()
    return
  }

  // Project the gesture into a resting position using Apple's exponential-
  // decay momentum. Then snap to the nearest slide.
  const restPosition = -selectedModuleIndex.value * slideWidth.value
  const projected = restPosition + delta + projectMomentum(velocity, 0.998)

  // Choose nearest slide index from the projected point.
  const rawIndex = -projected / slideWidth.value
  let targetIndex = Math.round(rawIndex)
  targetIndex = Math.max(0, Math.min(saasModules.length - 1, targetIndex))

  const targetX = -targetIndex * slideWidth.value

  // Velocity handoff: the spring inherits the release velocity.
  // This avoids the visible "brick wall" of replacing one motion with another.
  carouselSpring.value.value = carouselX.value
  carouselSpring.animate(targetX, velocity)

  selectedModuleIndex.value = targetIndex
}

function snapToCurrent() {
  if (reducedMotion.value) {
    carouselX.value = -selectedModuleIndex.value * slideWidth.value
    return
  }
  const target = -selectedModuleIndex.value * slideWidth.value
  carouselSpring.value.value = carouselX.value
  carouselSpring.animate(target, 0)
}

// ----------------------------------------------------------------
// Lifecycle
// ----------------------------------------------------------------
onMounted(() => {
  readReducedMotion()
  measureSlideWidth()
  carouselSpring.setImmediate(0)

  if (typeof window !== 'undefined' && carouselViewportRef.value) {
    resizeObserver = new ResizeObserver(() => measureSlideWidth())
    resizeObserver.observe(carouselViewportRef.value)
  }
})

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
})

// Re-measure when index changes (ensures rest position is correct after rotate)
watch(selectedModuleIndex, () => {
  measureSlideWidth()
})
</script>

<style scoped>
/* Apple-style press feedback: instant scale + color response on press,
   settles back with a quick spring-like ease. No CSS transition delay on
   the way down (response is king). */
.apple-press {
  transition-property: transform, background-color, border-color, box-shadow;
  transition-duration: 180ms;
  transition-timing-function: cubic-bezier(0.32, 0.72, 0, 1);
  transform-origin: center;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.apple-press:active {
  transform: scale(0.97);
  transition-duration: 60ms;
  transition-timing-function: cubic-bezier(0.32, 0.72, 0, 1);
}

/* Apple-card: very subtle resting shadow, lifts on hover. The lift is short
   and snappy so it reads as physical, not decorative. */
.apple-card {
  transform-origin: center;
  transition-property: box-shadow, transform, border-color;
  transition-duration: 220ms;
  transition-timing-function: cubic-bezier(0.32, 0.72, 0, 1);
  -webkit-tap-highlight-color: transparent;
}

.apple-card:active {
  transform: scale(0.985) translateY(0);
  transition-duration: 80ms;
}

/* Honor reduced motion at the CSS layer too. */
@media (prefers-reduced-motion: reduce) {
  .apple-press,
  .apple-card {
    transition-duration: 0ms !important;
    transition-delay: 0ms !important;
  }
  .apple-press:active,
  .apple-card:active {
    transform: none !important;
  }
}
</style>
