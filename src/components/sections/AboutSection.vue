<template>
  <section id="about" class="py-20 lg:py-32 bg-[#0A0A2E] relative overflow-hidden" ref="aboutRef">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-l from-violet-500/10 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-violet-600/5 rounded-full blur-3xl animate-pulse"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="about-title text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-violet-500 bg-clip-text text-transparent tracking-wide">
          Sobre Nosotros
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Transformamos ideas en realidades digitales exitosas
        </p>
        <div class="w-32 h-1 bg-gradient-to-r from-primary via-purple-500 to-violet-500 mx-auto mt-8 rounded-full"></div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <!-- Content -->
        <div class="content-container">
          <div class="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p class="about-text">
              En <span class="text-primary font-semibold hover:text-purple-300 transition-colors duration-300">Pulse</span>, somos expertos en transformación digital. 
              Nuestro equipo de profesionales apasionados trabaja incansablemente para 
              convertir tus ideas en realidades digitales exitosas.
            </p>
            <p class="about-text">
              Con años de experiencia en el mercado, hemos ayudado a empresas de 
              todos los tamaños a alcanzar sus objetivos tecnológicos y 
              <span class="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300">superar sus expectativas</span>.
            </p>
            <p class="about-text">
              Nuestra filosofía se basa en la innovación constante, la excelencia técnica 
              y el compromiso absoluto con el éxito de nuestros clientes en el 
              <span class="text-violet-400 font-semibold hover:text-violet-300 transition-colors duration-300">mundo digital</span>.
            </p>
          </div>
        </div>
        
        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(stat, index) in stats" 
            :key="stat.label"
            class="stat-card group text-center p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:bg-slate-800/70"
          >
            <!-- Icon -->
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <component :is="stat.icon" />
            </div>
            
            <!-- Value -->
            <div class="stat-value text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-violet-500 bg-clip-text text-transparent mb-3 flex items-center justify-center gap-1">
              <span>{{ stat.value.replace(/[^\d]/g, '') }}</span>
              <span v-if="stat.value.includes('+')" class="text-2xl align-top">+</span>
              <span v-if="stat.value.includes('%')" class="text-2xl align-top">%</span>
            </div>
            
            <!-- Label -->
            <div class="text-slate-400 font-medium group-hover:text-slate-300 transition-colors duration-300">
              {{ stat.label }}
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

// Iconos SVG como componentes
const RocketIcon = {
  name: 'RocketIcon',
  template: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-8 h-8 text-primary'><path stroke-linecap='round' stroke-linejoin='round' d='M4.5 19.5l3-7.5 7.5-3 3 7.5-7.5 3z' /></svg>`
}

const StarIcon = {
  name: 'StarIcon',
  template: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-8 h-8 text-primary'><path stroke-linecap='round' stroke-linejoin='round' d='M12 17.75l-5.197 3.102 1.985-6.102L3 9.75l6.303-.002L12 3.25l2.697 6.498L21 9.75l-5.788 4.999 1.985 6.102z' /></svg>`
}

const DiamondIcon = {
  name: 'DiamondIcon',
  template: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-8 h-8 text-primary'><path stroke-linecap='round' stroke-linejoin='round' d='M12 2l4 7-4 7-4-7 4-7z' /></svg>`
}

const stats = [
  { 
    value: '150+', 
    label: 'Proyectos Completados', 
    icon: RocketIcon,
    displayValue: '150+'
  },
  { 
    value: '100%', 
    label: 'Clientes Satisfechos', 
    icon: StarIcon,
    displayValue: '100%'
  },
  { 
    value: '8+', 
    label: 'Años de Experiencia', 
    icon: DiamondIcon,
    displayValue: '8+'
  }
]

onMounted(() => {
  if (aboutRef.value) {
    // Animación del título principal
    gsap.from(aboutRef.value.querySelector('.about-title'), {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutRef.value.querySelector('.about-title'),
        start: 'top 80%'
      }
    })

    // Animación de los párrafos
    const paragraphs = aboutRef.value.querySelectorAll('.about-text')
    paragraphs.forEach((p, index) => {
      gsap.from(p, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: p,
          start: 'top 85%'
        }
      })
    })

    // Animación de las estadísticas
    const statElements = aboutRef.value.querySelectorAll('.stat-card')
    statElements.forEach((stat, index) => {
      gsap.from(stat, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%'
        }
      })

      // Contador animado
      const valueElement = stat.querySelector('.stat-value')
      if (valueElement) {
        const statData = stats[index]
        const finalValue = statData.value
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
                statData.displayValue = displayValue
              }
            })
          }
        })
      }
    })
  }
})
</script>

<style scoped>
/* Mantener solo los estilos necesarios para coherencia */
.stat-card {
  backdrop-filter: blur(10px);
}

.stat-card:hover {
  transform: translateY(-4px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .stat-card {
    padding: 1.5rem;
  }
  
  .about-title {
    font-size: 2.5rem;
    line-height: 1.2;
  }
}

/* Efectos de accesibilidad */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
</style>