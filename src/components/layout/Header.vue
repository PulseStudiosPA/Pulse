<template>
  <header 
    ref="headerRef"
    class="fixed top-0 w-full z-50 transition-all duration-300"
    :class="{ 
      'bg-[#0A0A2E]/95 backdrop-blur-xl border-b border-slate-800/50': scrolled, 
      'bg-transparent': !scrolled 
    }"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo - Clean Text-Based Design -->
        <a href="#home" class="flex items-center gap-2 group" aria-label="Ir al inicio">
          <!-- Small icon accent -->
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
            <span class="text-white font-bold text-sm">P</span>
          </div>
          <!-- Text logo -->
          <span class="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
            PULSE
          </span>
        </a>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          <a 
            v-for="item in navigation" 
            :key="item.name" 
            :href="item.href"
            class="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
          >
            {{ item.name }}
          </a>
          <a 
            href="#contact" 
            class="ml-4 px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Contacto
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
          :aria-expanded="mobileMenuOpen"
          aria-label="Abrir menú de navegación"
        >
          <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <nav 
      v-if="mobileMenuOpen" 
      class="md:hidden bg-[#0A0A2E]/98 backdrop-blur-xl border-t border-slate-800/50"
      aria-label="Navegación móvil"
    >
      <div class="px-6 py-4 space-y-1">
        <a 
          v-for="item in navigation" 
          :key="item.name" 
          :href="item.href"
          @click="mobileMenuOpen = false"
          class="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
        >
          {{ item.name }}
        </a>
        <a 
          href="#contact" 
          @click="mobileMenuOpen = false"
          class="block mt-2 px-4 py-3 bg-primary text-white text-center font-medium rounded-lg hover:bg-primary/90 transition-all duration-300"
        >
          Contacto
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const headerRef = ref(null)

const navigation = [
  { name: 'Portafolio', href: '#portfolio' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Equipo', href: '#team' },
  { name: 'Servicios', href: '#services' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

let ctx

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Asegurar que el header esté visible inicialmente
  if (headerRef.value) {
    ctx = gsap.context(() => {
      gsap.set(headerRef.value, { opacity: 0, y: -100 })
      gsap.to(headerRef.value, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2
      })
    }, headerRef.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  ctx && ctx.revert()
})
</script>
