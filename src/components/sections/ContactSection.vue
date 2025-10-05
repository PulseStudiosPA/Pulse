<template>
  <section id="contact" class="py-20 lg:py-32 bg-slate-950 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-blue-600/6 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-l from-teal-500/6 to-cyan-600/8 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div 
        class="text-center mb-20"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 1000,
            ease: 'backOut' 
          } 
        }"
      >
        <h2 class="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide">
          Contáctanos
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          ¿Listo para comenzar tu proyecto? Estamos aquí para ayudarte a hacer realidad tus ideas.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-8 rounded-full"></div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Contact Info -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible-once="{ 
            opacity: 1, 
            x: 0, 
            transition: { 
              duration: 1000,
              ease: 'backOut' 
            } 
          }"
        >
          <h3 class="text-2xl font-bold mb-8 text-white tracking-wide">
            Información de Contacto
          </h3>
          
          <div class="space-y-6">
            <div 
              v-for="(contact, index) in contactInfo" 
              :key="contact.label"
              class="group flex items-center gap-6 p-6 bg-gradient-to-r from-slate-900/80 to-slate-800/40 rounded-xl border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              v-motion
              :initial="{ opacity: 0, x: -30, scale: 0.9 }"
              :visible-once="{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                transition: { 
                  duration: 700,
                  delay: 200 + (index * 200),
                  ease: 'backOut' 
                } 
              }"
            >
              <!-- Glow effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative z-10 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <component :is="contact.icon" class="h-6 w-6 text-white" />
              </div>
              <div class="relative z-10">
                <div class="font-medium text-white text-lg tracking-wide group-hover:text-cyan-400 transition-colors duration-300">{{ contact.label }}</div>
                <div class="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{{ contact.value }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <form 
          @submit.prevent="submitForm" 
          class="space-y-8 p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/40 rounded-2xl border border-slate-700/30"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible-once="{ 
            opacity: 1, 
            x: 0, 
            transition: { 
              duration: 1000,
              delay: 300,
              ease: 'backOut' 
            } 
          }"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 600,
                  delay: 500,
                  ease: 'easeOut' 
                } 
              }"
            >
              <input 
                v-model="form.name" 
                type="text" 
                placeholder="Tu Nombre" 
                required
                class="w-full px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 hover:border-slate-500/70"
              >
            </div>
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 600,
                  delay: 600,
                  ease: 'easeOut' 
                } 
              }"
            >
              <input 
                v-model="form.email" 
                type="email" 
                placeholder="Tu Email" 
                required
                class="w-full px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 hover:border-slate-500/70"
              >
            </div>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 600,
                delay: 700,
                ease: 'easeOut' 
              } 
            }"
          >
            <textarea 
              v-model="form.message" 
              placeholder="Tu Mensaje" 
              rows="5" 
              required
              class="w-full px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 resize-none hover:border-slate-500/70"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="group relative w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-lg shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 600,
                delay: 800,
                ease: 'easeOut' 
              } 
            }"
            :whileHover="{ scale: 1.05, y: -4 }"
            :whileTap="{ scale: 0.95 }"
          >
            <span class="relative z-10 flex items-center justify-center gap-2">
              Enviar Mensaje
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/vue/24/outline'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const contactInfo = [
  {
    label: 'Email',
    value: 'info@PulseWare.com',
    icon: EnvelopeIcon
  },
  {
    label: 'Teléfono',
    value: '+1 (555) 123-4567',
    icon: PhoneIcon
  },
  {
    label: 'Dirección',
    value: '123 Ocean Drive, Deep Sea City',
    icon: MapPinIcon
  }
]

const submitForm = () => {
  alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
  form.value = { name: '', email: '', message: '' }
}
</script>