<template>
  <nav 
    ref="navRef"
    class="fixed top-0 w-full z-50 transition-all duration-500 ease-out"
    :class="{ 
      'bg-[#0A0A2E]/95 backdrop-blur-xl border-b border-primary/20': scrolled, 
      'bg-[#0A0A2E]/30 backdrop-blur-sm': !scrolled 
    }"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-center h-18">
        <!-- Logo -->
        <div class="nav-logo flex items-center gap-3">
          <img src="../../assets/Pulse.svg" alt="Pulse Logo" class="h-10 w-10" />
          <h2 class="text-2xl font-light tracking-[0.2em] text-white hover:text-primary transition-colors duration-300 cursor-pointer">
            PULSE
          </h2>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in navigation" 
            :key="item.name" 
            :href="item.href"
            class="nav-item relative text-sm font-light text-white/80 hover:text-white transition-colors duration-300 group py-2"
          >
            {{ item.name }}
            <span class="nav-underline absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left scale-x-0 transition-transform duration-300"></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="md:hidden p-2 text-white"
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 500, duration: 400 } }"
        >
          <Bars3Icon v-if="!mobileMenuOpen" class="h-5 w-5" />
          <XMarkIcon v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="mobileMenuOpen" 
      class="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
      v-motion
      :initial="{ opacity: 0, height: 0 }"
      :enter="{ opacity: 1, height: 'auto', transition: { duration: 300 } }"
      :leave="{ opacity: 0, height: 0, transition: { duration: 200 } }"
    >
      <div class="px-6 py-4 space-y-3">
        <a 
          v-for="(item, index) in navigation" 
          :key="item.name" 
          :href="item.href"
          @click="mobileMenuOpen = false"
          class="block text-sm font-light text-white/80 hover:text-white transition-colors duration-300 py-2"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ 
            opacity: 1, 
            x: 0, 
            transition: { 
              delay: index * 100, 
              duration: 400 
            } 
          }"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import gsap from 'gsap'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const navRef = ref(null)

const navigation = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Contacto', href: '#contact' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  if (navRef.value) {
    // Animación de entrada del navbar
    gsap.from(navRef.value, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    })
    
    // Animación del logo
    gsap.from(navRef.value.querySelector('.nav-logo'), {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: 0.8
    })
    
    // Animación de los elementos del menú
    gsap.from(navRef.value.querySelectorAll('.nav-item'), {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 1
    })

    // Efectos de hover para los elementos del menú
    const navItems = navRef.value.querySelectorAll('.nav-item')
    navItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          scale: 1.1,
          y: -2,
          duration: 0.3,
          ease: 'back.out(1.7)'
        })
        
        const underline = item.querySelector('.nav-underline')
        if (underline) {
          gsap.to(underline, {
            scaleX: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
        }
      })
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
        
        const underline = item.querySelector('.nav-underline')
        if (underline) {
          gsap.to(underline, {
            scaleX: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
        }
      })
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>