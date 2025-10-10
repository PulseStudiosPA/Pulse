<template>
  <section id="services" class="py-20 lg:py-32 bg-[#0A0A2E] relative overflow-hidden" ref="servicesRef">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-violet-500/10 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-violet-600/5 rounded-full blur-3xl animate-pulse"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <h2 class="services-title text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-violet-500 bg-clip-text text-transparent tracking-wide">
          Nuestros Servicios
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Soluciones tecnológicas completas que transforman tu visión en realidad digital
        </p>
        <div class="w-32 h-1 bg-gradient-to-r from-primary via-purple-500 to-violet-500 mx-auto mt-8 rounded-full"></div>
      </div>
      
      <!-- Carousel Container -->
      <div class="relative">
        <!-- Navigation Buttons -->
        <button 
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform -translate-x-6"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <button 
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform translate-x-6"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Services Carousel -->
        <div class="overflow-hidden">
          <div 
            class="carousel-container flex transition-transform duration-800 ease-out" 
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div 
              v-for="(service, index) in services" 
              :key="service.title"
              class="w-full flex-shrink-0 flex justify-center px-4"
            >
              <div 
                class="service-card group relative p-12 max-w-lg bg-gradient-to-br from-slate-900/90 to-slate-800/60 rounded-2xl border border-slate-700/30 hover:border-primary/60 transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 hover:rotate-1"
                @mouseenter="onCardHover"
                @mouseleave="onCardLeave"
              >
                <!-- Hover glow effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-primary/15 to-purple-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div class="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                
                <div class="relative z-10">
                  <!-- Icon with dynamic gradient -->
                  <div 
                    class="w-24 h-24 mx-auto mb-8 flex items-center justify-center rounded-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-primary/25 group-hover:shadow-primary/50"
                    :class="`bg-gradient-to-br ${service.color}`"
                  >
                    <component :is="service.icon" class="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <!-- Content -->
                  <h3 class="text-3xl font-bold mb-6 text-white group-hover:text-primary transition-colors duration-300 text-center group-hover:scale-105 transform">
                    {{ service.title }}
                  </h3>
                  <p class="text-lg text-slate-400 leading-relaxed text-center group-hover:text-slate-300 transition-colors duration-300">
                    {{ service.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel Indicators -->
        <div class="flex justify-center mt-8 space-x-2">
          <button 
            v-for="n in services.length" 
            :key="n"
            @click="currentSlide = n - 1; animateSlide()"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentSlide === n - 1 ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-125' : 'bg-slate-600 hover:bg-slate-500'"
          ></button>
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
const currentSlide = ref(0)

const services = [
  {
    title: 'Desarrollo Web',
    description: 'Creamos sitios web modernos y responsivos que impulsan tu presencia digital con las últimas tecnologías y diseños que cautivan.',
    icon: CodeBracketIcon,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'Apps Móviles',
    description: 'Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android con experiencias de usuario excepcionales.',
    icon: DevicePhoneMobileIcon,
    color: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Optimización',
    description: 'Mejoramos el rendimiento y la velocidad de tus aplicaciones existentes para maximizar su potencial y impacto.',
    icon: RocketLaunchIcon,
    color: 'from-teal-500 to-cyan-600'
  },
  {
    title: 'DevOps & Cloud',
    description: 'Implementamos infraestructuras escalables en la nube con metodologías DevOps para un desarrollo ágil.',
    icon: CloudIcon,
    color: 'from-indigo-500 to-blue-600'
  },
  {
    title: 'Integración',
    description: 'Conectamos sistemas y APIs para crear ecosistemas digitales integrados y eficientes.',
    icon: CogIcon,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'Seguridad',
    description: 'Implementamos protocolos de seguridad avanzados para proteger tus datos y aplicaciones.',
    icon: ShieldCheckIcon,
    color: 'from-emerald-500 to-teal-600'
  }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % services.length
  animateSlide()
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? services.length - 1 : currentSlide.value - 1
  animateSlide()
}

const animateSlide = () => {
  if (servicesRef.value) {
    gsap.to(servicesRef.value.querySelector('.carousel-container'), {
      x: -currentSlide.value * 100 + '%',
      duration: 0.8,
      ease: 'power3.out'
    })
  }
}

onMounted(() => {
  if (servicesRef.value) {
    // Animación de entrada del título
    gsap.from(servicesRef.value.querySelector('.services-title'), {
      y: 100,
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: servicesRef.value.querySelector('.services-title'),
        start: 'top 80%'
      }
    })

    // Animación de las tarjetas del carousel
    gsap.set('.service-card', { opacity: 0, y: 100, rotationX: 45, scale: 0.8 })
    
    ScrollTrigger.create({
      trigger: '.services-grid',
      start: 'top 70%',
      onEnter: () => {
        gsap.to('.service-card', {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)'
        })
      }
    })

    // Auto-play del carousel
    setInterval(() => {
      nextSlide()
    }, 5000)
  }
})

// Animaciones de hover para las tarjetas
const onCardHover = (event) => {
  const card = event.currentTarget
  gsap.to(card, {
    rotationY: 10,
    rotationX: 5,
    z: 50,
    duration: 0.4,
    ease: 'power2.out'
  })
  
  gsap.to(card.querySelector('.service-card > div:first-child'), {
    scale: 1.1,
    duration: 0.3,
    ease: 'back.out(1.7)'
  })
}

const onCardLeave = (event) => {
  const card = event.currentTarget
  gsap.to(card, {
    rotationY: 0,
    rotationX: 0,
    z: 0,
    duration: 0.4,
    ease: 'power2.out'
  })
  
  gsap.to(card.querySelector('.service-card > div:first-child'), {
    scale: 1,
    duration: 0.3,
    ease: 'power2.out'
  })
}
</script>