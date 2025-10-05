<template>
  <section id="about" class="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-l from-teal-500/8 to-cyan-600/8 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <!-- Content -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible-once="{ 
            opacity: 1, 
            x: 0, 
            transition: { 
              duration: 1000,
              ease: 'backOut' 
            } 
          }"
        >
          <h2 class="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide">
            Sobre Nosotros
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 rounded-full"></div>
          
          <div class="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 800,
                  delay: 200,
                  ease: 'easeOut' 
                } 
              }"
            >
              En <span class="text-cyan-400 font-semibold">PulseWare</span>, somos expertos en transformación digital. 
              Nuestro equipo de profesionales apasionados trabaja incansablemente para 
              convertir tus ideas en realidades digitales exitosas.
            </p>
            <p 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 800,
                  delay: 400,
                  ease: 'easeOut' 
                } 
              }"
            >
              Con años de experiencia en el mercado, hemos ayudado a empresas de 
              todos los tamaños a alcanzar sus objetivos tecnológicos y 
              <span class="text-blue-400 font-semibold">superar sus expectativas</span>.
            </p>
          </div>
        </div>
        
        <!-- Stats -->
        <div
          class="grid grid-cols-1 gap-8"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible-once="{ 
            opacity: 1, 
            x: 0, 
            transition: { 
              duration: 1000,
              delay: 300,
              ease: 'backOut' 
            } 
          }"
        >
          <div 
            v-for="(stat, index) in stats" 
            :key="stat.label"
            class="group relative text-center py-8 px-6 bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-xl border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            v-motion
            :initial="{ opacity: 0, y: 30, scale: 0.9 }"
            :visible-once="{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                duration: 700,
                delay: 500 + (index * 200),
                ease: 'backOut' 
              } 
            }"
          >
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
            
            <div class="relative z-10">
              <div class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 tracking-wide group-hover:scale-110 transition-transform duration-300">
                {{ stat.value }}
              </div>
              <div class="text-slate-400 font-medium tracking-wide group-hover:text-slate-300 transition-colors duration-300">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '50+', label: 'Proyectos Completados' },
  { value: '100%', label: 'Clientes Satisfechos' },
  { value: '5+', label: 'Años de Experiencia' }
]
</script>