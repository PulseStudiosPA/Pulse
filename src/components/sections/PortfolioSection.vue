<template>
  <section id="portfolio" class="py-32 bg-gradient-to-b from-[#0A0A2E] to-slate-900 relative overflow-hidden" ref="portfolioRef" aria-labelledby="portfolio-heading">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Translated section header -->
      <div class="text-center mb-20">
        <p class="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
          Nuestro Trabajo
        </p>
        <h2 id="portfolio-heading" class="portfolio-title text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Proyectos Destacados
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>
      
      <!-- Portfolio grid - 2 columns for larger cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <article 
          v-for="(project, index) in projects" 
          :key="index"
          class="portfolio-card group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 transition-all duration-500 cursor-pointer"
          :class="project.borderColor"
        >
          <!-- Project Image / Placeholder -->
          <div class="aspect-[16/10] overflow-hidden bg-gradient-to-br relative" :class="project.gradient">
            <!-- Decorative elements for placeholder -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <div class="w-20 h-20 mx-auto mb-4 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <span class="text-3xl font-bold text-white">{{ project.title.charAt(0) }}</span>
                </div>
                <span class="text-white/60 text-sm font-medium">Próximamente</span>
              </div>
            </div>
            <!-- Animated gradient overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
          </div>
          
          <!-- Project Info -->
          <div class="p-8">
            <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
              {{ project.title }}
            </h3>
            <p class="text-slate-400 text-base mb-6 leading-relaxed">
              {{ project.description }}
            </p>
            <div class="flex gap-2 flex-wrap">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
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
    title: 'Stash',
    description: 'Sistema integral de gestión de inventarios y sucursales. Control de stock, seguimiento de productos y administración multi-ubicación.',
    image: '/placeholder-stash.svg',
    tags: ['Inventario', 'Gestión', 'Multi-sucursal'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'hover:border-emerald-500/50'
  },
  {
    title: 'Plenty',
    description: 'Plataforma de gestión de eventos. Organiza, coordina y administra eventos de cualquier escala con herramientas intuitivas.',
    image: '/placeholder-plenty.svg',
    tags: ['Eventos', 'Organización', 'Coordinación'],
    gradient: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'hover:border-amber-500/50'
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
