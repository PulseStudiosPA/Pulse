<template>
  <section id="testimonials" class="py-32 bg-[#0A0A2E] relative overflow-hidden" ref="testimonialsRef">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <p class="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
          Testimonios
        </p>
        <h2 class="testimonials-title text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="testimonial-card p-8 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-all duration-500"
        >
          <!-- Quote Icon -->
          <div class="text-primary mb-6">
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          
          <!-- Testimonial Text -->
          <p class="text-slate-300 leading-relaxed mb-6">
            {{ testimonial.text }}
          </p>
          
          <!-- Client Info -->
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              {{ testimonial.initials }}
            </div>
            <div>
              <div class="font-semibold text-white">{{ testimonial.name }}</div>
              <div class="text-sm text-slate-400">{{ testimonial.role }}</div>
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

const testimonialsRef = ref(null)

const testimonials = [
  {
    text: 'Trabajar con Pulse fue un placer absoluto. Entregaron un sitio web impresionante que superó nuestras expectativas y ayudó a crecer nuestra presencia en línea significativamente.',
    name: 'María González',
    role: 'CEO, Innovación Digital PTY',
    initials: 'MG'
  },
  {
    text: 'El equipo de Pulse transformó nuestro sitio web obsoleto en una plataforma moderna y de alto rendimiento. Nuestras tasas de conversión han aumentado un 150% desde el lanzamiento.',
    name: 'Carlos Rodríguez',
    role: 'Director de Marketing, Crecimiento SA',
    initials: 'CR'
  },
  {
    text: 'Profesionales, receptivos e increíblemente talentosos. Pulse nos construyó una solución de comercio electrónico personalizada que se adapta perfectamente a nuestras necesidades.',
    name: 'Ana Martínez',
    role: 'Fundadora, EstiloHub Panamá',
    initials: 'AM'
  },
  {
    text: 'Desde el concepto hasta el lanzamiento, el equipo de Pulse estuvo con nosotros en cada paso. Su atención al detalle y compromiso con la calidad es inigualable.',
    name: 'Roberto Sánchez',
    role: 'CTO, InnovaLabs',
    initials: 'RS'
  },
  {
    text: 'Nuestro nuevo sitio web no solo se ve increíble, sino que funciona excepcionalmente bien. La optimización SEO nos ha llevado a la cima de los resultados de búsqueda.',
    name: 'Laura Pérez',
    role: 'Propietaria, Eco Verde Panamá',
    initials: 'LP'
  },
  {
    text: 'Pulse entregó una aplicación móvil que nuestros usuarios aman. El diseño UI/UX es intuitivo y el rendimiento es impecable. ¡Altamente recomendado!',
    name: 'Jorge Morales',
    role: 'Gerente de Producto, AppVenture',
    initials: 'JM'
  }
]

onMounted(() => {
  if (!testimonialsRef.value) return
  
  // Configurar estado inicial de elementos antes de animar
  gsap.set('.testimonials-title', { opacity: 0, y: 50 })
  gsap.set('.testimonial-card', { opacity: 0, y: 60 })
  
  // Animar el título
  gsap.to('.testimonials-title', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.testimonials-title',
      start: 'top 80%',
      once: true
    }
  })

  // Animar las tarjetas
  gsap.to('.testimonial-card', {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: testimonialsRef.value,
      start: 'top 85%',
      once: true
    }
  })
})
</script>
