<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" ref="heroRef">
    <!-- Elaborate animated background with GSAP -->
    <div class="absolute inset-0">
      <!-- Main gradient orbs -->
      <div class="floating-orb absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-600/15 rounded-full blur-3xl"></div>
      <div class="floating-orb absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-to-l from-teal-500/15 to-cyan-600/20 rounded-full blur-3xl"></div>
      
      <!-- Floating particles -->
      <div class="floating-particle absolute top-20 left-1/4 w-4 h-4 bg-cyan-400/40 rounded-full"></div>
      <div class="floating-particle absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400/30 rounded-full"></div>
      <div class="floating-particle absolute bottom-1/4 left-1/2 w-5 h-5 bg-teal-400/35 rounded-full"></div>
      <div class="floating-particle absolute top-1/2 left-1/6 w-2 h-2 bg-cyan-300/50 rounded-full"></div>
      <div class="floating-particle absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-300/40 rounded-full"></div>
      
      <!-- Geometric shapes -->
      <div class="floating-orb absolute top-1/3 right-1/2 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/15 rounded-full blur-2xl"></div>
      <div class="floating-orb absolute bottom-1/2 left-3/4 w-24 h-24 bg-gradient-to-l from-teal-400/25 to-blue-500/15 rounded-full blur-xl"></div>
    </div>
    
    <div class="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
      <div class="space-y-8">
        <!-- Main title -->
        <h1 class="gsap-title text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight text-white tracking-wide">
          Bienvenido a 
          <div class="gsap-pulse mt-4 font-black inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
            <span class="pulse-letter">P</span><span class="pulse-letter">u</span><span class="pulse-letter">l</span><span class="pulse-letter">s</span><span class="pulse-letter">e</span><span class="pulse-letter">W</span><span class="pulse-letter">a</span><span class="pulse-letter">r</span><span class="pulse-letter">e</span>
          </div>
        </h1>

        <!-- Subtitle -->
        <p class="gsap-subtitle text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed mt-8">
          Impulsamos tu negocio hacia el futuro con 
          <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
            soluciones innovadoras
          </span> 
          y tecnología de vanguardia
        </p>

        <!-- CTA Buttons -->
        <div class="gsap-btn-container flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <button class="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
            <span class="relative z-10 flex items-center gap-3">
              Comenzar Ahora
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
          </button>
          <button class="group px-10 py-4 border-2 border-slate-600 text-slate-300 font-medium text-lg rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden">
            <span class="relative z-10">Ver Nuestro Trabajo</span>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div class="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroRef = ref(null)

onMounted(async () => {
  await nextTick()
  
  if (heroRef.value) {
    // Asegurar que todo sea visible primero
    gsap.set([
      heroRef.value.querySelector('.gsap-title'),
      heroRef.value.querySelector('.gsap-pulse'),
      heroRef.value.querySelector('.gsap-subtitle'),
      ...heroRef.value.querySelectorAll('.gsap-btn')
    ], { visibility: 'visible' })
    
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    // Animación simple del título principal (incluyendo PulseWare)
    tl.from(heroRef.value.querySelector('.gsap-title'), {
      y: 50,
      opacity: 0,
      duration: 1
    })

    // Animación del subtítulo
    tl.from(heroRef.value.querySelector('.gsap-subtitle'), {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, '-=0.3')

    // Animación de botones - con autoAlpha en lugar de opacity
    const buttons = heroRef.value.querySelectorAll('.gsap-btn')
    if (buttons.length > 0) {
      tl.from(buttons, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.15,
        duration: 0.6
      }, '-=0.3')
    }

    // Animaciones continuas de fondo (burbujas)
    gsap.to(heroRef.value.querySelectorAll('.floating-orb'), {
      y: '+=30',
      x: '+=15',
      rotation: 360,
      duration: 6,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.5
    })

    // Animación de partículas flotantes
    gsap.to(heroRef.value.querySelectorAll('.floating-particle'), {
      y: '+=20',
      x: '+=10',
      duration: 4,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.3
    })

    // Parpadeo de PulseWare cada 2 segundos
    const pulseLogo = heroRef.value.querySelector('.gsap-pulse')
    if (pulseLogo) {
      gsap.to(pulseLogo, {
        opacity: 0.7,
        duration: 0.3,
        repeat: -1,
        repeatDelay: 1.7,
        yoyo: true,
        ease: 'power2.inOut'
      })
    }

    // Animación del scroll indicator
    const scrollIndicator = heroRef.value.querySelector('.scroll-indicator')
    if (scrollIndicator) {
      gsap.to(scrollIndicator, {
        y: 10,
        opacity: 0.5,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      })
    }
  }
})
</script>

<style scoped>
.pulse-letter {
  display: inline-block;
  font-weight: 900;
  transition: all 0.3s ease;
}

.pulse-letter:hover {
  transform: scale(1.1);
  filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.5));
}

.gsap-pulse:hover {
  filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.4));
}
</style>