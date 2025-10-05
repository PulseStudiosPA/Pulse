<template>
  <section id="services" class="py-20 lg:py-32 bg-slate-950 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-teal-500/5 to-cyan-600/5 rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div 
        class="text-center mb-20"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 1000,
            ease: 'backOut' 
          } 
        }"
      >
        <h2 class="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide">
          Nuestros Servicios
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Ofrecemos soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-8 rounded-full"></div>
      </div>
      
      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        <div 
          v-for="(service, index) in services" 
          :key="service.title"
          class="group relative p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/40 rounded-2xl border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105"
          v-motion
          :initial="{ opacity: 0, y: 50, rotateX: 45 }"
          :visible-once="{ 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
            transition: { 
              duration: 800, 
              delay: index * 300,
              ease: 'backOut' 
            } 
          }"
        >
          <!-- Hover glow effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
          
          <div class="relative z-10">
            <!-- Icon -->
            <div 
              class="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-cyan-500/25"
              v-motion
              :whileHover="{ scale: 1.2, rotate: 12 }"
            >
              <component :is="service.icon" class="h-8 w-8 text-white" />
            </div>
            
            <!-- Content -->
            <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300 text-center">
              {{ service.title }}
            </h3>
            <p class="text-slate-400 leading-relaxed text-center group-hover:text-slate-300 transition-colors duration-300">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon
} from '@heroicons/vue/24/outline'

const services = [
  {
    title: 'Desarrollo Web',
    description: 'Creamos sitios web modernos y responsivos que impulsan tu presencia digital con las últimas tecnologías y diseños que cautivan.',
    icon: CodeBracketIcon
  },
  {
    title: 'Apps Móviles',
    description: 'Desarrollamos aplicaciones móviles nativas y híbridas para iOS y Android con experiencias de usuario excepcionales.',
    icon: DevicePhoneMobileIcon
  },
  {
    title: 'Optimización',
    description: 'Mejoramos el rendimiento y la velocidad de tus aplicaciones existentes para maximizar su potencial y impacto.',
    icon: RocketLaunchIcon
  }
]
</script>