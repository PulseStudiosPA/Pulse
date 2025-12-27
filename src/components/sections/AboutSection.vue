<template>
  <section id="about" class="py-32 bg-gradient-to-b from-slate-900 to-[#0A0A2E] relative overflow-hidden" ref="aboutRef">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
            Nosotros
          </p>
          <h2 class="about-title text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
            Impulsamos Negocios en Panamá con Soluciones Digitales
          </h2>
          
          <div class="space-y-6 text-lg text-slate-400 leading-relaxed">
            <p class="about-text">
              En <span class="text-white font-medium">Pulse</span>, creemos en el poder de la transformación digital. 
              Nuestro equipo de diseñadores y desarrolladores apasionados trabaja incansablemente para crear experiencias digitales excepcionales que impulsan el crecimiento de tu negocio.
            </p>
            <p class="about-text">
              Con años de experiencia y cientos de proyectos exitosos en Panamá y la región, hemos ayudado a empresas de todos los tamaños a alcanzar sus objetivos digitales y superar sus expectativas.
            </p>
          </div>
        </div>
        
        <!-- Stats -->
        <div class="grid grid-cols-2 gap-6">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="stat-card text-center p-8 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-all duration-500"
          >
            <div class="stat-value text-5xl font-bold text-primary mb-2">
              {{ stat.value }}
            </div>
            <div class="text-slate-400 font-medium">
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

const stats = [
  { value: '8', label: 'Proyectos Entregados' },
  { value: '100%', label: 'Satisfacción del Cliente' },
  { value: '7', label: 'Profesionales' },
  { value: '15', label: 'Clientes Activos' }
]

onMounted(() => {
  if (!aboutRef.value) return
  
  // Configurar estado inicial de elementos antes de animar
  gsap.set('.about-title', { opacity: 0, x: -50 })
  gsap.set('.about-text', { opacity: 0, y: 30 })
  gsap.set('.stat-card', { opacity: 0, y: 50 })
  
  // Animar el título
  gsap.to('.about-title', {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about-title',
      start: 'top 80%',
      once: true
    }
  })

  // Animar el texto
  gsap.to('.about-text', {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: aboutRef.value,
      start: 'top 85%',
      once: true
    }
  })

  // Animar las estadísticas
  gsap.to('.stat-card', {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.stat-card',
      start: 'top 85%',
      once: true
    }
  })
})
</script>
