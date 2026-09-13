<template>
  <section id="home" class="relative bg-[#0A0A2E] pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-slate-800/80" ref="heroRef">
    <!-- Background Image with Panama City Skyline & Gradient Difuminación -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <img 
        src="/yosi-bitran-jVCXlJrnl5w-unsplash.jpg" 
        alt="Panamá City Skyline" 
        class="w-full h-full object-cover object-center sm:object-[center_35%] opacity-35"
      />
      <!-- Gradients for seamless difuminación and maximum legibility -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#0A0A2E] via-[#0A0A2E]/85 to-[#0A0A2E]/60"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-[#0A0A2E]/70 via-transparent to-[#0A0A2E]"></div>
      <div class="absolute top-1/4 left-1/3 w-[30rem] h-[30rem] bg-violet-600/10 rounded-full blur-3xl"></div>
    </div>
   
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        <!-- Left: Value Proposition (Concise & Direct) -->
        <div class="lg:col-span-7 space-y-6 text-left">
          
          <!-- Category Tag -->
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14143D] border border-violet-900/50 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            <span>Tecnología & Soporte IT en Panamá</span>
          </div>
          
          <!-- Solid, Direct H1 Headline -->
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Tecnología y soporte IT para que tu empresa nunca se detenga.
          </h1>
          
          <!-- Short, Punchy Description -->
          <p class="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
            Acompañamos a tu negocio con redes, ciberseguridad y soporte técnico en sitio para garantizar tu continuidad operativa en Panamá.
          </p>
          
          <!-- Action Buttons -->
          <div class="flex flex-wrap gap-4 pt-1 items-center">
            <a 
              href="#contact" 
              class="px-6 py-3.5 bg-primary hover:bg-violet-700 text-white font-bold text-sm rounded-lg transition-colors shadow-sm"
            >
              Solicitar Propuesta
            </a>

            <a 
              href="https://wa.me/50760656128?text=Hola%20PULSE,%20deseo%20consultar%20sobre%20sus%20servicios%20IT." 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-slate-200 hover:text-emerald-400 text-sm font-semibold transition-colors flex items-center gap-2.5 px-5 py-3.5 rounded-lg bg-[#14143D] border border-slate-700/70"
            >
              <svg class="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp Directo</span>
            </a>
          </div>

        </div>

        <!-- Right: Capacidades Operativas (Simplified & Scannable) -->
        <div class="lg:col-span-5 w-full">
          <div class="rounded-2xl bg-[#0F0F33] border border-[#26265C] p-6 sm:p-7 shadow-xl space-y-4">
            
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-200">
                Capacidades Operativas
              </span>
              <span class="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Panamá
              </span>
            </div>

            <div class="space-y-3">
              <!-- Item 1 -->
              <div class="p-3.5 rounded-xl bg-[#14143D] border border-slate-800/90 hover:border-violet-500/40 transition-colors">
                <div class="text-xs font-bold text-violet-300 uppercase tracking-wide">Redes e Infraestructura</div>
                <div class="text-sm font-medium text-slate-200 mt-0.5">Cableado y Servidores</div>
              </div>

              <!-- Item 2 -->
              <div class="p-3.5 rounded-xl bg-[#14143D] border border-slate-800/90 hover:border-violet-500/40 transition-colors">
                <div class="text-xs font-bold text-violet-300 uppercase tracking-wide">Ciberseguridad</div>
                <div class="text-sm font-medium text-slate-200 mt-0.5">Protección de datos y controles de acceso</div>
              </div>

              <!-- Item 3 -->
              <div class="p-3.5 rounded-xl bg-[#14143D] border border-slate-800/90 hover:border-violet-500/40 transition-colors">
                <div class="text-xs font-bold text-violet-300 uppercase tracking-wide">Desarrollo de Software</div>
                <div class="text-sm font-medium text-slate-200 mt-0.5">Sistemas y programas a la medida de tu negocio</div>
              </div>

              <!-- Item 4 -->
              <div class="p-3.5 rounded-xl bg-[#14143D] border border-slate-800/90 hover:border-violet-500/40 transition-colors">
                <div class="text-xs font-bold text-violet-300 uppercase tracking-wide">Soporte Técnico</div>
                <div class="text-sm font-medium text-slate-200 mt-0.5">Atención en sitio y mantenimiento de equipos</div>
              </div>
            </div>

            <div class="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Soluciones a medida para empresas</span>
              <a href="#contact" class="text-violet-400 hover:text-violet-300 font-bold flex items-center gap-1">
                <span>Contactar</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const heroRef = ref(null)
</script>
