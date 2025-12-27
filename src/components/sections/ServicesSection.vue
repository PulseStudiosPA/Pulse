<template>
  <section id="services" class="py-32 bg-slate-900 relative overflow-hidden" ref="servicesRef">
    <!-- Background Effects -->
    <!-- Background Effects (Simplified) -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"></div>
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
import { onMounted, onUnmounted, ref } from 'vue'
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  CogIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/vue/24/outline'

const servicesRef = ref(null)

const services = [
  {
    title: 'Diseño Web',
    description: 'Sitios web a medida que reflejan tu marca con tecnología moderna.',
    icon: CodeBracketIcon
  },
  {
    title: 'E-Commerce',
    description: 'Tiendas en línea completas con pagos y gestión de inventario.',
    icon: DevicePhoneMobileIcon
  },
  {
    title: 'Diseño UI/UX',
    description: 'Experiencias digitales intuitivas y centradas en el usuario.',
    icon: RocketLaunchIcon
  },
  {
    title: 'SEO y Performance',
    description: 'Optimización para carga rápida y mejor posicionamiento.',
    icon: CloudIcon
  },
  {
    title: 'Integraciones',
    description: 'Conexión con APIs y servicios externos para extender funcionalidad.',
    icon: CogIcon
  },
  {
    title: 'Soporte',
    description: 'Mantenimiento continuo y actualizaciones de seguridad.',
    icon: ShieldCheckIcon
  }
]

let ctx

onMounted(async () => {
  if (!servicesRef.value) return
  
  const { default: gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)
  
  ctx = gsap.context(() => {
    gsap.set('.services-title', { opacity: 0, y: 50 })
    gsap.set('.service-card', { opacity: 0, y: 60 })
    
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
  }, servicesRef.value)
})

onUnmounted(() => {
  ctx && ctx.revert()
})
</script>

