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
        <span>{{ p.back }}</span>
      </a>
    </div>

    <!-- ============================================================== -->
    <!-- SECTION 1: HERO                                                 -->
    <!-- ============================================================== -->
    <section class="max-w-6xl mx-auto px-6 lg:px-8 pt-14 sm:pt-20 pb-16 sm:pb-24">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50/80 border border-violet-100 text-[11px] font-semibold uppercase tracking-[0.08em] text-violet-700">
          <span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
          <span>{{ p.eyebrow }}</span>
        </div>

        <!-- H1 SEO-optimized: includes the strongest search terms
             (Maya, Stash, Panamá, última milla, inventarios). -->
        <h1 class="mt-6 text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-slate-950 tracking-[-0.035em] leading-[1.05]">
          {{ p.h1Start }}
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-violet-500 to-indigo-500 tracking-[-0.035em]">
            {{ p.h1Accent }}
          </span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
          <template v-for="(seg, i) in p.intro" :key="i"
            ><strong v-if="seg.strong" class="text-slate-800">{{ seg.text }}</strong
            ><template v-else>{{ seg.text }}</template></template
          >
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
                  {{ p.maya.tag }}
                </span>
                <span class="text-[11px] font-mono font-bold text-slate-400 tracking-wider">01</span>
              </div>

              <div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-[-0.025em]">
                  Maya
                </h2>
                <p class="text-sm font-semibold text-violet-600 mt-1.5 tracking-tight">
                  {{ p.maya.subtitle }}
                </p>
              </div>

              <p class="text-[15px] text-slate-600 leading-relaxed">
                {{ p.maya.description }}
              </p>

              <ul class="space-y-3 text-[14px] text-slate-700">
                <li v-for="item in p.maya.features" :key="item.title" class="flex items-start gap-3">
                  <span class="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-violet-100/80 flex items-center justify-center">
                    <CheckCircleIcon class="w-3.5 h-3.5 text-violet-600" />
                  </span>
                  <span><strong class="text-slate-900 font-semibold">{{ item.title }}:</strong> {{ item.body }}</span>
                </li>
              </ul>

              <div class="pt-2 border-t border-slate-100">
                <a
                  :href="waLink(p.maya.whatsappText)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="apple-press inline-flex items-center gap-2 px-5 py-3 bg-slate-950 hover:bg-violet-600 text-white font-semibold text-sm rounded-full transition-colors duration-200"
                >
                  <span>{{ p.maya.cta }}</span>
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
                  {{ p.stash.tag }}
                </span>
                <span class="text-[11px] font-mono font-bold text-slate-400 tracking-wider">02</span>
              </div>

              <div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-[-0.025em]">
                  Stash IMS
                </h2>
                <p class="text-sm font-semibold text-indigo-600 mt-1.5 tracking-tight">
                  {{ p.stash.subtitle }}
                </p>
              </div>

              <p class="text-[15px] text-slate-600 leading-relaxed">
                {{ p.stash.description }}
              </p>

              <ul class="space-y-3 text-[14px] text-slate-700">
                <li v-for="item in p.stash.features" :key="item.title" class="flex items-start gap-3">
                  <span class="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100/80 flex items-center justify-center">
                    <CheckCircleIcon class="w-3.5 h-3.5 text-indigo-600" />
                  </span>
                  <span><strong class="text-slate-900 font-semibold">{{ item.title }}:</strong> {{ item.body }}</span>
                </li>
              </ul>

              <div class="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <a
                  :href="waLink(p.stash.whatsappText)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="apple-press inline-flex items-center gap-2 px-5 py-3 bg-slate-950 hover:bg-indigo-600 text-white font-semibold text-sm rounded-full transition-colors duration-200"
                >
                  <span>{{ p.stash.cta }}</span>
                  <span class="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href="https://stash-ims-landing.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="apple-press inline-flex items-center gap-1.5 px-4 py-3 bg-slate-100/80 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200/60 font-semibold text-sm rounded-full transition-colors"
                >
                  <span>{{ p.stash.website }}</span>
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
          {{ p.modules.eyebrow }}
        </div>
        <h2 class="mt-5 text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.08]">
          {{ p.modules.title }}
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          {{ p.modules.subtitle }}
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
              {{ p.modules.listLabel }}
            </span>
            <span class="text-[10px] font-semibold text-slate-400 tabular-nums">
              {{ selectedModuleIndex + 1 }} / {{ modules.length }}
            </span>
          </div>

          <div class="space-y-1.5 flex-1">
            <button
              v-for="(mod, index) in modules"
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
                      ? mod.product === 'Maya'
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
                          ? mod.product === 'Maya'
                            ? 'bg-violet-100 text-violet-700'
                            : 'bg-indigo-100 text-indigo-700'
                          : 'bg-slate-200/60 text-slate-500'
                      "
                    >
                      {{ mod.product }}
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
                    ? mod.product === 'Maya'
                      ? 'text-violet-600 translate-x-0.5'
                      : 'text-indigo-600 translate-x-0.5'
                    : 'text-slate-400'
                "
              />
            </button>
          </div>

          <div class="px-3 py-2.5 mt-2 border-t border-slate-200/70 text-[11px] text-slate-400">
            {{ p.modules.hint }}
          </div>
        </div>

        <!-- RIGHT: module detail -->
        <div
          class="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between transition-opacity duration-200"
          :class="activeModule.product === 'Maya' ? 'bg-violet-50/20' : 'bg-indigo-50/20'"
        >
          <div class="space-y-6">
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span
                  class="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-1 rounded-full border"
                  :class="
                    activeModule.product === 'Maya'
                      ? 'bg-violet-50 text-violet-700 border-violet-100'
                      : 'bg-indigo-50 text-indigo-700 border-indigo-100'
                  "
                >
                  {{ activeModule.product }} &middot; {{ activeModule.category }}
                </span>
              </div>

              <h3 class="text-2xl sm:text-[28px] font-extrabold text-slate-950 tracking-[-0.025em] leading-tight mt-4">
                {{ activeModule.title }}
              </h3>
              <p
                class="text-sm font-semibold mt-1.5"
                :class="activeModule.product === 'Maya' ? 'text-violet-600' : 'text-indigo-600'"
              >
                {{ activeModule.tagline }}
              </p>
              <p class="text-[15px] text-slate-600 leading-relaxed mt-4">
                {{ activeModule.description }}
              </p>
            </div>

            <div>
              <h4 class="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 mb-3">
                {{ p.modules.scopeLabel }}
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div
                  v-for="(bullet, bIdx) in activeModule.bullets"
                  :key="bIdx"
                  class="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-slate-200/70 text-[13px] text-slate-700 leading-snug"
                >
                  <CheckCircleIcon
                    class="w-4 h-4 flex-shrink-0 mt-0.5"
                    :class="activeModule.product === 'Maya' ? 'text-violet-600' : 'text-indigo-600'"
                  />
                  <span>{{ bullet }}</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div class="p-4 rounded-2xl bg-rose-50/60 border border-rose-100/80">
                <span class="text-[10px] font-bold uppercase tracking-[0.12em] text-rose-700 block mb-1.5">
                  {{ p.modules.painLabel }}
                </span>
                <span class="text-[13px] text-slate-700 leading-relaxed block">
                  {{ activeModule.pain }}
                </span>
              </div>
              <div class="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
                <span class="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700 block mb-1.5">
                  {{ p.modules.benefitLabel }}
                </span>
                <span class="text-[13px] text-slate-700 leading-relaxed block">
                  {{ activeModule.benefit }}
                </span>
              </div>
            </div>
          </div>

          <div class="pt-6 mt-6 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <a
              :href="waLink(activeModule.whatsappText)"
              target="_blank"
              rel="noopener noreferrer"
              class="apple-press inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white transition-colors duration-200"
              :class="activeModule.product === 'Maya' ? 'bg-slate-950 hover:bg-violet-600' : 'bg-slate-950 hover:bg-indigo-600'"
            >
              <span>{{ activeModule.cta }}</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
            <span class="text-[11px] text-slate-500 text-center sm:text-right">
              {{ p.modules.integrationNote }}
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
              {{ selectedModuleIndex + 1 }} / {{ modules.length }}
            </span>
            <span
              class="text-[10px] font-extrabold px-2 py-0.5 rounded-full"
              :class="
                activeModule.product === 'Maya'
                  ? 'bg-violet-100 text-violet-700'
                  : 'bg-indigo-100 text-indigo-700'
              "
            >
              {{ activeModule.product }}
            </span>
          </div>
          <div class="flex items-center gap-1">
            <button
              @click="goToPrev"
              :disabled="selectedModuleIndex === 0"
              :aria-label="p.modules.prev"
              class="apple-press w-9 h-9 rounded-full border border-slate-200/80 bg-white text-slate-700 flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 active:bg-slate-200"
            >
              <ChevronLeftIcon class="w-4 h-4" />
            </button>
            <button
              @click="goToNext"
              :disabled="selectedModuleIndex === modules.length - 1"
              :aria-label="p.modules.next"
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
              v-for="(mod, idx) in modules"
              :key="idx"
              class="w-full flex-shrink-0 p-6 sm:p-8 space-y-5"
              :class="mod.product === 'Maya' ? 'bg-violet-50/15' : 'bg-indigo-50/15'"
            >
              <div>
                <span
                  class="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-1 rounded-full border"
                  :class="
                    mod.product === 'Maya'
                      ? 'bg-violet-50 text-violet-700 border-violet-100'
                      : 'bg-indigo-50 text-indigo-700 border-indigo-100'
                  "
                >
                  {{ mod.product }} &middot; {{ mod.category }}
                </span>
                <h3 class="text-[22px] font-extrabold text-slate-950 tracking-[-0.02em] leading-tight mt-3">
                  {{ mod.title }}
                </h3>
                <p
                  class="text-[13px] font-semibold mt-1"
                  :class="mod.product === 'Maya' ? 'text-violet-600' : 'text-indigo-600'"
                >
                  {{ mod.tagline }}
                </p>
                <p class="text-[14px] text-slate-600 leading-relaxed mt-3">
                  {{ mod.description }}
                </p>
              </div>

              <div>
                <h4 class="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 mb-2.5">
                  {{ p.modules.scopeLabel }}
                </h4>
                <div class="space-y-2">
                  <div
                    v-for="(bullet, bIdx) in mod.bullets"
                    :key="bIdx"
                    class="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-slate-200/70 text-[13px] text-slate-700 leading-snug"
                  >
                    <CheckCircleIcon
                      class="w-4 h-4 flex-shrink-0 mt-0.5"
                      :class="mod.product === 'Maya' ? 'text-violet-600' : 'text-indigo-600'"
                    />
                    <span>{{ bullet }}</span>
                  </div>
                </div>
              </div>

              <div class="space-y-2.5">
                <div class="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100/80">
                  <span class="text-[10px] font-bold uppercase tracking-[0.12em] text-rose-700 block mb-1">
                    {{ p.modules.painLabel }}
                  </span>
                  <span class="text-[13px] text-slate-700 leading-relaxed block">
                    {{ mod.pain }}
                  </span>
                </div>
                <div class="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
                  <span class="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700 block mb-1">
                    {{ p.modules.benefitLabel }}
                  </span>
                  <span class="text-[13px] text-slate-700 leading-relaxed block">
                    {{ mod.benefit }}
                  </span>
                </div>
              </div>

              <a
                :href="waLink(mod.whatsappText)"
                target="_blank"
                rel="noopener noreferrer"
                class="apple-press w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white transition-colors"
                :class="mod.product === 'Maya' ? 'bg-slate-950 hover:bg-violet-600' : 'bg-slate-950 hover:bg-indigo-600'"
              >
                <span>{{ mod.cta }}</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Dot indicators (spring-animated width on active) -->
        <div class="flex items-center justify-center gap-1.5 mt-5">
          <button
            v-for="(_, dotIdx) in modules"
            :key="dotIdx"
            @click="selectModule(dotIdx)"
            :aria-label="`${p.modules.goTo} ${dotIdx + 1}`"
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
            {{ p.comparative.eyebrow }}
          </div>
          <h2 class="mt-5 text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-[-0.03em] leading-[1.08]">
            {{ p.comparative.title }}
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {{ p.comparative.subtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="(card, cIdx) in p.comparative.cards"
            :key="cIdx"
            class="apple-card group relative rounded-3xl bg-white p-6 sm:p-7 border border-slate-200/70 shadow-[0_1px_0_rgba(15,23,42,0.04)] hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-[box-shadow,transform] duration-300"
          >
            <h3 class="text-[17px] font-bold text-slate-950 tracking-[-0.01em]">
              {{ card.title }}
            </h3>

            <div class="mt-5 space-y-3">
              <div class="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100/80">
                <span class="text-[10px] font-bold uppercase tracking-[0.12em] text-rose-700 block mb-1.5">
                  {{ p.comparative.traditionalLabel }}
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
                  {{ card.solution }}
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
              {{ p.cta.eyebrow }}
            </span>
            <h3 class="text-2xl sm:text-[34px] font-extrabold text-white tracking-[-0.025em] leading-[1.1]">
              {{ p.cta.title }}
            </h3>
            <p class="text-slate-300 text-[15px] sm:text-base max-w-xl leading-relaxed">
              {{ p.cta.text }}
            </p>
            <a
              href="#services"
              class="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white transition-colors group pt-1"
            >
              <span>{{ p.cta.itLink }}</span>
              <span class="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div class="flex flex-wrap gap-3 shrink-0">
            <a
              :href="waLink(p.cta.whatsappText)"
              target="_blank"
              rel="noopener noreferrer"
              class="apple-press inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-slate-950 font-bold text-sm transition-colors shadow-lg"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>{{ p.cta.whatsapp }}</span>
            </a>
            <a
              href="#contact"
              class="apple-press inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              <span>{{ p.cta.form }}</span>
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
import { useProductsI18n } from '@/i18n/products'
import { WHATSAPP_NUMBER } from '@/i18n'
import { usePointerGesture, projectMomentum } from '@/composables/usePointerGesture'

// ----------------------------------------------------------------
// i18n + SEO: JSON-LD for the Productos page, rebuilt per locale.
// Marketing percentages stay in the visible copy but out of structured
// data, which should only carry verifiable facts.
// ----------------------------------------------------------------
const { p, m } = useProductsI18n()

const moduleIcons = [TruckIcon, DevicePhoneMobileIcon, MapIcon, CubeIcon, BuildingStorefrontIcon, ArrowPathIcon]
const modules = computed(() => p.value.modules.items.map((item, i) => ({ ...item, icon: moduleIcons[i] })))

function waLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

const productosJsonLd = computed(() => {
  const j = p.value.jsonLd
  const lang = m.value.meta.htmlLang
  const offer = {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    description: j.offer,
    url: 'https://pulse.com.pa/#contact',
  }
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://pulse.com.pa/#software-maya',
        name: 'Maya Last Mile Software',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Last Mile Delivery & Route Optimization',
        operatingSystem: 'Web, iOS, Android',
        description: j.mayaDescription,
        inLanguage: lang,
        offers: offer,
        featureList: j.mayaFeatures,
        creator: { '@id': 'https://pulse.com.pa/#organization' },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://pulse.com.pa/#software-stash',
        name: 'Stash Warehouse Management System (IMS)',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Inventory Management & Warehouse Management System (WMS)',
        operatingSystem: 'Web, Mobile',
        description: j.stashDescription,
        inLanguage: lang,
        offers: offer,
        featureList: j.stashFeatures,
        sameAs: 'https://stash-ims-landing.vercel.app/',
        creator: { '@id': 'https://pulse.com.pa/#organization' },
      },
      {
        '@type': 'FAQPage',
        inLanguage: lang,
        mainEntity: j.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  })
})

// ----------------------------------------------------------------
// Reduced motion preference
// ----------------------------------------------------------------
const reducedMotion = ref(false)
function readReducedMotion() {
  if (typeof window === 'undefined') return false
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// ----------------------------------------------------------------
// Module selector state + spring-driven carousel (mobile)
// ----------------------------------------------------------------
const selectedModuleIndex = ref<number>(0)
const activeModule = computed(() => modules.value[selectedModuleIndex.value]!)

function dotColorFor(mod: { product: string }): string {
  return mod.product === 'Maya' ? '#7c3aed' : '#4f46e5'
}

function selectModule(index: number): void {
  if (index < 0 || index >= modules.value.length) return
  selectedModuleIndex.value = index
  // On mobile we also animate the carousel. On desktop we just update state.
  nextTick(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      carouselSpring.setImmediate(-index * slideWidth.value)
    }
  })
}

function goToNext() {
  if (selectedModuleIndex.value < modules.value.length - 1) {
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
  const min = -(modules.value.length - 1) * slideWidth.value
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
  targetIndex = Math.max(0, Math.min(modules.value.length - 1, targetIndex))

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
