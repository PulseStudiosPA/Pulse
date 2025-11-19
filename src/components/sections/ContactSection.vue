<template>
  <section id="contact" class="py-32 bg-slate-900 relative overflow-hidden" ref="contactRef">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <!-- Section Header -->
      <div class="mb-16">
        <p class="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
          Contáctanos
        </p>
        <h2 class="contact-title text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Creemos Algo<br />Excepcional Juntos
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto mb-8"></div>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto">
          ¿Listo para comenzar tu proyecto? Estamos aquí para ayudarte a dar vida a tu visión.
        </p>
      </div>
      
      <!-- Contact Form -->
      <form 
        @submit.prevent="submitForm" 
        class="contact-form space-y-6 max-w-2xl mx-auto"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="relative">
            <label for="name" class="sr-only">Nombre</label>
            <input 
              id="name"
              v-model="form.name" 
              type="text" 
              placeholder="Tu Nombre" 
              required
              class="w-full px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:border-primary focus:outline-none transition-all duration-300"
            />
          </div>
          <div class="relative">
            <label for="email" class="sr-only">Email</label>
            <input 
              id="email"
              v-model="form.email" 
              type="email" 
              placeholder="Tu Email" 
              required
              class="w-full px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:border-primary focus:outline-none transition-all duration-300"
            />
          </div>
        </div>
        
        <div class="relative">
          <label for="message" class="sr-only">Mensaje</label>
          <textarea 
            id="message"
            v-model="form.message" 
            placeholder="Tu Mensaje" 
            rows="6" 
            required
            class="w-full px-6 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:border-primary focus:outline-none transition-all duration-300 resize-none"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          class="w-full sm:w-auto px-12 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
        >
          Enviar Mensaje
        </button>
      </form>
      
      <!-- Contact Info -->
      <div class="contact-info mt-20 flex flex-col sm:flex-row justify-center gap-8 text-slate-400">
        <a href="mailto:contact@pulse.dev" class="hover:text-primary transition-colors duration-300">
          contact@pulse.dev
        </a>
        <span class="hidden sm:block">•</span>
        <a href="tel:+50760656128" class="hover:text-primary transition-colors duration-300">
          +507 6065-6128
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contactRef = ref(null)

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.')
  form.value = { name: '', email: '', message: '' }
}

let ctx

onMounted(() => {
  if (!contactRef.value) return
  
  ctx = gsap.context(() => {
    // Configurar estado inicial de elementos antes de animar
    gsap.set('.contact-title', { opacity: 0, y: 50 })
    gsap.set('.contact-form', { opacity: 0, y: 40 })
    gsap.set('.contact-info', { opacity: 0, y: 20 })
    
    // Animar el título
    gsap.to('.contact-title', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-title',
        start: 'top 80%',
        once: true
      }
    })

    // Animar el formulario
    gsap.to('.contact-form', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
        once: true
      }
    })

    // Animar la información de contacto
    gsap.to('.contact-info', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 85%',
        once: true
      }
    })
  }, contactRef.value)
})

onUnmounted(() => {
  ctx && ctx.revert()
})
</script>
