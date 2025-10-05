<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
    <!-- Elaborate animated background -->
    <div class="absolute inset-0">
      <!-- Main gradient orbs -->
      <div 
        class="absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-600/15 rounded-full blur-3xl"
        v-motion
        :initial="{ scale: 0, opacity: 0, rotate: 0 }"
        :enter="{ 
          scale: [0, 1.2, 1], 
          opacity: [0, 0.8, 0.6], 
          rotate: 360,
          transition: { 
            duration: 3000, 
            ease: 'easeOut',
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 2000
          } 
        }"
      ></div>
      <div 
        class="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-to-l from-teal-500/15 to-cyan-600/20 rounded-full blur-3xl"
        v-motion
        :initial="{ scale: 0, opacity: 0, rotate: 0 }"
        :enter="{ 
          scale: [0, 1.1, 1], 
          opacity: [0, 0.7, 0.5], 
          rotate: -360,
          transition: { 
            duration: 3500, 
            delay: 1000,
            ease: 'easeOut',
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 2500
          } 
        }"
      ></div>
      <!-- Additional floating elements -->
      <div 
        class="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-cyan-400/20 rounded-full blur-2xl"
        v-motion
        :initial="{ y: 0, opacity: 0 }"
        :enter="{ 
          y: [-20, 20, -20], 
          opacity: [0, 0.8, 0.4], 
          transition: { 
            duration: 4000, 
            delay: 2000,
            ease: 'easeInOut',
            repeat: Infinity
          } 
        }"
      ></div>
      <div 
        class="absolute bottom-1/3 left-2/3 w-24 h-24 bg-gradient-to-l from-teal-400/25 to-blue-500/15 rounded-full blur-xl"
        v-motion
        :initial="{ x: 0, opacity: 0 }"
        :enter="{ 
          x: [0, 30, -15, 0], 
          opacity: [0, 0.6, 0.3], 
          transition: { 
            duration: 5000, 
            delay: 1500,
            ease: 'easeInOut',
            repeat: Infinity
          } 
        }"
      ></div>
    </div>
    
    <div class="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
      <div class="space-y-8">
        <!-- Main title -->
        <h1 
          class="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight text-white tracking-wide"
          v-motion
          :initial="{ opacity: 0, y: 50, scale: 0.8 }"
          :enter="{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
              duration: 1200, 
              delay: 600,
              ease: 'backOut' 
            } 
          }"
        >
          Bienvenido a 
          <div 
            class="mt-4 font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block"
            v-motion
            :initial="{ opacity: 0, rotateY: -90 }"
            :enter="{ 
              opacity: 1, 
              rotateY: 0,
              transition: { 
                duration: 1000, 
                delay: 1200,
                ease: 'backOut' 
              } 
            }"
          >
            PulseWare
            <div class="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl -z-10 rounded-full"></div>
          </div>
        </h1>

        <!-- Subtitle -->
        <p 
          class="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed mt-8"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 800, 
              delay: 1400,
              ease: 'easeOut' 
            } 
          }"
        >
          Impulsamos tu negocio hacia el futuro con 
          <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
            soluciones innovadoras
          </span> 
          y tecnología de vanguardia
        </p>

        <!-- CTA Buttons -->
        <div 
          class="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 800, 
              delay: 1600,
              ease: 'easeOut' 
            } 
          }"
        >
          <button 
            class="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
            v-motion
            :whileHover="{ scale: 1.05, y: -8 }"
            :whileTap="{ scale: 0.95 }"
          >
            <span class="relative z-10 flex items-center gap-3">
              Comenzar Ahora
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
          </button>
          <button 
            class="group px-10 py-4 border-2 border-slate-600 text-slate-300 font-medium text-lg rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
            v-motion
            :whileHover="{ scale: 1.05, y: -4 }"
            :whileTap="{ scale: 0.98 }"
          >
            <span class="relative z-10">Ver Nuestro Trabajo</span>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div 
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: 600, 
          delay: 1800,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 2000
        } 
      }"
    >
      <div class="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for this component
</script>