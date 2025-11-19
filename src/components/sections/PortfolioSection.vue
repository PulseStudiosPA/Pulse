<template>
  <section id="portfolio" class="py-32 bg-gradient-to-b from-[#0A0A2E] to-slate-900 relative overflow-hidden" ref="portfolioRef">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Translated section header -->
      <div class="text-center mb-20">
        <p class="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
          Nuestro Trabajo
        </p>
        <h2 class="portfolio-title text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Proyectos Destacados
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>
      
      <!-- Portfolio grid with hover effects -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="portfolio-card group relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-primary/50 transition-all duration-500 cursor-pointer"
        >
          <!-- Project Image -->
          <div class="aspect-[4/3] overflow-hidden bg-slate-700">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          
          <!-- Project Info Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A2E] via-[#0A0A2E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
            <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
            <p class="text-slate-300 text-sm mb-4">{{ project.description }}</p>
            <div class="flex gap-2 flex-wrap">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          
          <!-- Hover Glow Effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const portfolioRef = ref(null)

const projects = [
  {
    title: 'Plataforma E-Commerce',
    description: 'Tienda en línea moderna con experiencia de compra optimizada',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['E-Commerce', 'Diseño Web', 'UX/UI']
  },
  {
    title: 'Sitio Web Corporativo',
    description: 'Sitio web profesional para empresa panameña con CMS',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Diseño Web', 'CMS', 'Responsive']
  },
  {
    title: 'App Móvil',
    description: 'Aplicación móvil intuitiva para servicios locales',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Diseño UI', 'Móvil', 'App']
  },
  {
    title: 'Dashboard Empresarial',
    description: 'Panel de control con análisis de datos en tiempo real',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Dashboard', 'Analytics', 'Web App']
  },
  {
    title: 'Sitio de Restaurante',
    description: 'Página web con sistema de reservas y menú digital',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Restaurante', 'Reservas', 'Diseño']
  },
  {
    title: 'Portal Inmobiliario',
    description: 'Plataforma para búsqueda y gestión de propiedades',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Inmobiliaria', 'Portal', 'Búsqueda']
  }
]

let ctx

onMounted(() => {
  if (!portfolioRef.value) return
  
  ctx = gsap.context(() => {
    // Configurar estado inicial de elementos antes de animar
    gsap.set('.portfolio-title', { opacity: 0, y: 50 })
    gsap.set('.portfolio-card', { opacity: 0, y: 80 })
    
    // Animar el título
    gsap.to('.portfolio-title', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.portfolio-title',
        start: 'top 80%',
        once: true
      }
    })

    // Animar las tarjetas
    gsap.to('.portfolio-card', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: portfolioRef.value,
        start: 'top 85%',
        once: true
      }
    })
  }, portfolioRef.value)
})

onUnmounted(() => {
  ctx && ctx.revert()
})
</script>
