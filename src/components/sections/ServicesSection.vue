<template>
  <section id="services" class="py-32 bg-slate-900 relative overflow-hidden" ref="servicesRef">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-violet-500/10 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-violet-600/5 rounded-full blur-3xl animate-pulse"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <p class="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
          Lo Que Hacemos
        </p>
        <h2 class="services-title text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Nuestros Servicios
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>
      
      <!-- Clean Grid Layout for Services -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card group p-8 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
        >
          <!-- Icon -->
          <div 
            class="w-16 h-16 mb-6 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
          >
            <component :is="service.icon" class="h-8 w-8 text-primary" />
          </div>
          
          <!-- Content -->
          <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
            {{ service.title }}
          </h3>
          <p class="text-slate-400 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  CogIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/vue/24/outline'

gsap.registerPlugin(ScrollTrigger)

const servicesRef = ref(null)

const services = [
  {
    title: 'Diseño Web Personalizado',
    description: 'Sitios web a medida que reflejan perfectamente tu marca y objetivos de negocio con tecnología de vanguardia.',
    icon: CodeBracketIcon
  },
  {
    title: 'Tiendas en Línea',
    description: 'Plataformas de comercio electrónico completas con integración de pagos y gestión de inventario para el mercado panameño.',
    icon: DevicePhoneMobileIcon
  },
  {
    title: 'Diseño UI/UX',
    description: 'Diseño centrado en el usuario que crea experiencias intuitivas y atractivas en todos los puntos de contacto digitales.',
    icon: RocketLaunchIcon
  },
  {
    title: 'Optimización Web',
    description: 'Mejora de rendimiento y SEO para asegurar que tu sitio cargue rápido y se posicione bien en buscadores.',
    icon: CloudIcon
  },
  {
    title: 'Integración de APIs',
    description: 'Integración perfecta con servicios de terceros y APIs para extender la funcionalidad de tu sitio web.',
    icon: CogIcon
  },
  {
    title: 'Mantenimiento y Soporte',
    description: 'Mantenimiento continuo, actualizaciones de seguridad y soporte técnico para mantener tu sitio funcionando sin problemas.',
    icon: ShieldCheckIcon
  }
]

onMounted(() => {
  if (!servicesRef.value) return
  
  // Configurar estado inicial de elementos antes de animar
  gsap.set('.services-title', { opacity: 0, y: 50 })
  gsap.set('.service-card', { opacity: 0, y: 60 })
  
  // Animar el título
  gsap.to('.services-title', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.services-title',
      start: 'top 80%',
      once: true
    }
  })

  // Animar las tarjetas
  gsap.to('.service-card', {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: servicesRef.value,
      start: 'top 85%',
      once: true
    }
  })
})
</script>
