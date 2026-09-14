<template>
  <div class="min-h-screen bg-white text-slate-900 flex items-center justify-center px-6">
    <div class="max-w-xl w-full text-center py-24">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 mb-8">
        <span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
        Error 404
      </div>

      <h1 class="text-7xl sm:text-9xl font-extrabold text-slate-950 tracking-[-0.04em] leading-none">
        404
      </h1>

      <h2 class="mt-6 text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.02em]">
        Esta página no existe.
      </h2>

      <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-md mx-auto">
        Es posible que el link haya cambiado o que la URL esté mal escrita. Te dejamos las rutas principales para que sigas navegando.
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#home"
          class="apple-press inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-950 hover:bg-violet-600 text-white font-semibold text-sm transition-colors"
        >
          <span aria-hidden="true">&larr;</span>
          <span>Volver al Inicio</span>
        </a>
        <a
          href="#productos"
          class="apple-press inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-slate-950 border border-slate-200 font-semibold text-sm transition-colors"
        >
          <span>Ver Productos</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
        <a
          href="#contact"
          class="apple-press inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 border border-slate-200 font-semibold text-sm transition-colors"
        >
          <span>Contactar</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div class="mt-12 pt-8 border-t border-slate-200">
        <p class="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 mb-3">
          ¿Qué buscabas?
        </p>
        <div class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-600">
          <a href="#services" class="hover:text-violet-600 transition-colors">Servicios IT</a>
          <span class="text-slate-300" aria-hidden="true">·</span>
          <a href="#productos" class="hover:text-violet-600 transition-colors">Maya y Stash</a>
          <span class="text-slate-300" aria-hidden="true">·</span>
          <a href="#about" class="hover:text-violet-600 transition-colors">Nosotros</a>
          <span class="text-slate-300" aria-hidden="true">·</span>
          <a href="#contact" class="hover:text-violet-600 transition-colors">Contacto</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Set noindex meta for the 404 page so search engines don't index it.
onMounted(() => {
  let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'robots'
    document.head.appendChild(meta)
  }
  meta.content = 'noindex, follow'

  // Update document title for clarity
  document.title = '404 — Página no encontrada | PULSE'
})

// Also set the page title immediately on render (before mount)
if (typeof document !== 'undefined') {
  document.title = '404 — Página no encontrada | PULSE'
}
</script>
