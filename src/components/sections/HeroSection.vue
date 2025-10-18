<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A2E] pt-24" ref="heroRef">
    <!-- Simplified background with subtle animated elements -->
    <div class="absolute inset-0">
      <div class="floating-orb absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="floating-orb absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative z-10 text-center px-6 lg:px-8 max-w-6xl mx-auto">
      <div class="space-y-12">
        <!-- Hero principal con marca destacada -->
        <div class="space-y-6">
          <h1 class="hero-title text-7xl sm:text-8xl lg:text-9xl xl:text-[8rem] font-extrabold leading-tight tracking-tight text-transparent bg-gradient-to-r from-primary via-purple-400 to-violet-400 bg-clip-text drop-shadow-lg">
            Pulse
          </h1>
        </div>

        <p class="hero-description text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
          Impulsamos negocios en Panamá con soluciones digitales excepcionales. Diseño web, desarrollo de aplicaciones y estrategias digitales para tu empresa.
        </p>

        <div class="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a href="#portfolio" class="group relative px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25">
            <span class="flex items-center gap-2">
              Ver Proyectos
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </a>
          <a href="#contact" class="px-8 py-4 border border-slate-700 text-slate-300 font-medium rounded-lg hover:border-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            Solicitar Cotización
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator eliminado -->
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const heroRef = ref(null)

onMounted(() => {
  if (!heroRef.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.from('.hero-title', {
    y: 40,
    opacity: 0,
    duration: 1
  })
  .from('.hero-description', {
    y: 30,
    opacity: 0,
    duration: 0.8
  }, '-=0.5')
  .from('.hero-cta', {
    y: 20,
    opacity: 0,
    duration: 0.8
  }, '-=0.4')

  gsap.to('.floating-orb', {
    y: '+=30',
    x: '+=20',
    duration: 8,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    stagger: 1
  })

  gsap.to('.scroll-indicator div', {
    opacity: 0.3,
    duration: 1.5,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
  })
})
</script>

<style scoped>
/* Minimal, clean styles */
</style>
