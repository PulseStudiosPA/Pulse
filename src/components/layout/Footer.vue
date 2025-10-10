<template>
  <footer class="bg-slate-900 border-t border-slate-800/50 text-white py-16 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="md:col-span-2"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 800,
              ease: 'easeOut' 
            } 
          }"
        >
          <div class="flex items-center gap-3 mb-4">
            <img src="../../assets/Pulse.svg" alt="Pulse Logo" class="h-16 w-16" />
            
          </div>
          <p class="text-slate-400 font-light leading-relaxed max-w-md mb-6">
            Impulsando el futuro digital con soluciones innovadoras y tecnología de vanguardia.
          </p>
          <div class="flex space-x-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.href"
               class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-primary/25">
              <component :is="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <!-- Services -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
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
          <h4 class="text-white font-semibold mb-6 tracking-wide">
            Servicios
          </h4>
          <ul class="space-y-3">
            <li>
              <a href="#services" class="text-slate-400 hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block">
                Desarrollo Web
              </a>
            </li>
            <li>
              <a href="#services" class="text-slate-400 hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block">
                Apps Móviles
              </a>
            </li>
            <li>
              <a href="#services" class="text-slate-400 hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block">
                Optimización
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Company -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
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
          <h4 class="text-white font-semibold mb-6 tracking-wide">
            Empresa
          </h4>
          <ul class="space-y-3">
            <li>
              <a href="#about" class="text-slate-400 hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contact" class="text-slate-400 hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block">
                Contacto
              </a>
            </li>
            <li>
              <a href="#" class="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block">
                Privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Copyright -->
      <div 
        class="border-t border-slate-800 pt-8 mt-12 text-center"
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ 
          opacity: 1, 
          transition: { 
            duration: 800,
            delay: 600,
            ease: 'easeOut' 
          } 
        }"
      >
        <p class="text-slate-400 text-sm">
          &copy; 2025 Pulse. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { CodeBracketIcon } from '@heroicons/vue/24/outline'

const socialLinks = [
  {
    name: 'GitHub',
    href: '#',
    icon: CodeBracketIcon
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: CodeBracketIcon
  },
  {
    name: 'Twitter',
    href: '#',
    icon: CodeBracketIcon
  }
]
</script>