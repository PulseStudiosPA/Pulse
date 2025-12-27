<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A2E] pt-20" ref="heroRef">
    <!-- Simplified background (reduced visual elements for performance) -->
    <div class="absolute inset-0">
      <!-- Static grid background (no animation) -->
      <div class="absolute inset-0 grid-background"></div>
      
      <!-- Single floating orb (reduced from 2) -->
      <div class="floating-orb absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      <!-- Reduced particles (8 instead of 20) -->
      <div class="particles-container absolute inset-0" aria-hidden="true">
        <div v-for="i in 8" :key="i" class="particle"></div>
      </div>
    </div>
   
    <div class="relative z-10 text-center px-6 lg:px-8 max-w-6xl mx-auto">
      <div class="space-y-8">
        <!-- Hero title - LCP candidate, render immediately -->
        <div>
          <h1 class="hero-title text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tight text-transparent bg-gradient-to-r from-primary via-purple-400 to-violet-400 bg-clip-text">
            PULSE
          </h1>
        </div>
        
        <!-- Description - simple fade instead of character animation -->
        <p class="hero-description text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Impulsamos negocios en Panamá con soluciones digitales excepcionales. 
          Diseño web, desarrollo de aplicaciones y estrategias digitales para tu empresa.
        </p>
        
        <!-- CTAs -->
        <div class="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a href="#portfolio" class="group px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
            <span class="flex items-center gap-2">
              Ver Proyectos
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </a>
          <a href="#contact" class="px-8 py-4 border border-slate-700 text-slate-300 font-medium rounded-lg hover:border-primary hover:text-white transition-all duration-300">
            Solicitar Cotización
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'

const heroRef = ref(null)
let ctx

onMounted(() => {
  if (!heroRef.value) return

  ctx = gsap.context(() => {
    // Simple, fast title animation (no per-letter complexity)
    gsap.from('.hero-title', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out'
    })

    // Simple description fade (no character-by-character)
    gsap.from('.hero-description', {
      opacity: 0,
      y: 15,
      duration: 0.6,
      delay: 0.3,
      ease: 'power2.out'
    })

    // CTA buttons
    gsap.from('.hero-cta', {
      y: 15,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      ease: 'power2.out'
    })

    // Minimal particle animation (fewer particles, simpler motion)
    gsap.utils.toArray('.particle').forEach((particle, i) => {
      gsap.to(particle, {
        y: 'random(-50, 50)',
        duration: 'random(4, 8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.3
      })
    })
  }, heroRef.value)
})

onUnmounted(() => {
  ctx && ctx.revert()
})
</script>

<style scoped>
/* Static grid background (no animation for performance) */
.grid-background {
  background-image: 
    linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Minimal particles */
.particles-container {
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(139, 92, 246, 0.6);
  border-radius: 50%;
}

.particle:nth-child(1) { top: 15%; left: 10%; }
.particle:nth-child(2) { top: 25%; left: 85%; }
.particle:nth-child(3) { top: 45%; left: 20%; }
.particle:nth-child(4) { top: 55%; left: 75%; }
.particle:nth-child(5) { top: 70%; left: 30%; }
.particle:nth-child(6) { top: 80%; left: 60%; }
.particle:nth-child(7) { top: 35%; left: 50%; }
.particle:nth-child(8) { top: 65%; left: 90%; }

/* Simple floating orb (CSS only, no JS) */
.floating-orb {
  animation: gentleFloat 12s ease-in-out infinite;
  will-change: transform;
}

@keyframes gentleFloat {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, -20px); }
}
</style>
