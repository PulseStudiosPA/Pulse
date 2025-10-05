<template>
  <section id="about" class="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 relative overflow-hidden" ref="aboutRef">
    <!-- Enhanced Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-l from-teal-500/12 to-cyan-600/12 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/8 to-indigo-600/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      <!-- Floating geometric shapes -->
      <div class="absolute top-20 left-10 w-4 h-4 bg-cyan-400/30 rotate-45 animate-bounce"></div>
      <div class="absolute bottom-20 right-10 w-6 h-6 bg-blue-400/25 rounded-full animate-pulse"></div>
      <div class="absolute top-1/3 right-20 w-3 h-3 bg-teal-400/35 rotate-12 animate-spin"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <!-- Content -->
        <div>
          <h2 class="about-title text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wide">
            Sobre Nosotros
          </h2>
          <div class="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-8 rounded-full"></div>
          
          <div class="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p class="about-text">
              En <span class="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-300">PulseWare</span>, somos expertos en transformación digital. 
              Nuestro equipo de profesionales apasionados trabaja incansablemente para 
              convertir tus ideas en realidades digitales exitosas.
            </p>
            <p class="about-text">
              Con años de experiencia en el mercado, hemos ayudado a empresas de 
              todos los tamaños a alcanzar sus objetivos tecnológicos y 
              <span class="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300">superar sus expectativas</span>.
            </p>
            <p class="about-text">
              Nuestra filosofía se basa en la innovación constante, la excelencia técnica 
              y el compromiso absoluto con el éxito de nuestros clientes en el 
              <span class="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300">mundo digital</span>.
            </p>
          </div>
        </div>
        
        <!-- Enhanced Stats -->
        <div class="grid grid-cols-1 gap-8">
          <div 
            v-for="(stat, index) in stats" 
            :key="stat.label"
            class="stat-card group relative text-center py-10 px-8 bg-gradient-to-br from-slate-800/70 to-slate-700/50 rounded-2xl border border-slate-600/40 hover:border-cyan-500/60 transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 cursor-pointer"
          >
            <!-- Enhanced Glow effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
            
            <div class="relative z-10">
              <!-- Icon -->
              <div class="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {{ stat.icon }}
              </div>
              
              <!-- Animated counter -->
              <div class="stat-value text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 tracking-wide group-hover:scale-110 transition-transform duration-300">
                {{ stat.value }}
              </div>
              
              <!-- Label -->
              <div class="text-slate-400 font-medium tracking-wide group-hover:text-slate-300 transition-colors duration-300 text-lg">
                {{ stat.label }}
              </div>
              
              <!-- Progress bar -->
              <div class="mt-4 w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <div class="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const aboutRef = ref(null)

const stats = [
  { value: '150+', label: 'Proyectos Completados', icon: '🚀' },
  { value: '100%', label: 'Clientes Satisfechos', icon: '⭐' },
  { value: '8+', label: 'Años de Experiencia', icon: '💎' }
]

onMounted(() => {
  if (aboutRef.value) {
    // Animación del título principal
    gsap.from(aboutRef.value.querySelector('.about-title'), {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutRef.value.querySelector('.about-title'),
        start: 'top 80%'
      }
    })

    // Animación de los párrafos con efecto typewriter
    const paragraphs = aboutRef.value.querySelectorAll('.about-text')
    paragraphs.forEach((p, index) => {
      gsap.from(p, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: p,
          start: 'top 85%'
        }
      })
    })

    // Animación de las estadísticas con contador animado
    const statElements = aboutRef.value.querySelectorAll('.stat-card')
    statElements.forEach((stat, index) => {
      gsap.from(stat, {
        y: 80,
        opacity: 0,
        scale: 0.8,
        rotation: 5,
        duration: 1,
        delay: index * 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%'
        }
      })

      // Animación del contador
      const valueElement = stat.querySelector('.stat-value')
      if (valueElement) {
        const finalValue = valueElement.textContent
        const isPercent = finalValue.includes('%')
        const isPlus = finalValue.includes('+')
        const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''))
        
        ScrollTrigger.create({
          trigger: stat,
          start: 'top 85%',
          onEnter: () => {
            gsap.to({ value: 0 }, {
              value: numericValue,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function() {
                let displayValue = Math.round(this.targets()[0].value)
                if (isPercent) displayValue += '%'
                if (isPlus) displayValue += '+'
                valueElement.textContent = displayValue
              }
            })
          }
        })
      }
    })

    // Efectos de hover para las estadísticas
    statElements.forEach(stat => {
      stat.addEventListener('mouseenter', () => {
        gsap.to(stat, {
          scale: 1.1,
          rotation: -2,
          duration: 0.3,
          ease: 'back.out(1.7)'
        })
      })

      stat.addEventListener('mouseleave', () => {
        gsap.to(stat, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })
  }
})
</script>