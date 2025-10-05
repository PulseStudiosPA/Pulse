<template>
  <nav 
    class="fixed top-0 w-full z-50 transition-all duration-700 ease-out"
    :class="{ 
      'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5': scrolled, 
      'bg-transparent': !scrolled 
    }"
    v-motion
    :initial="{ y: -100, opacity: 0 }"
    :enter="{ y: 0, opacity: 1, transition: { duration: 1000, ease: 'easeOut' } }"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-center h-18">
        <!-- Logo -->
        <div 
          class="text-2xl font-bold tracking-[0.2em] bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
          v-motion
          :initial="{ opacity: 0, x: -20, scale: 0.8 }"
          :enter="{ opacity: 1, x: 0, scale: 1, transition: { delay: 300, duration: 800, ease: 'backOut' } }"
        >
          PulseWare
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-10">
          <a 
            v-for="(item, index) in navigation" 
            :key="item.name" 
            :href="item.href"
            class="relative text-sm font-medium text-slate-300 hover:text-cyan-400 transition-all duration-500 group py-3 px-1"
            v-motion
            :initial="{ opacity: 0, y: -15, rotateX: -90 }"
            :enter="{ 
              opacity: 1, 
              y: 0, 
              rotateX: 0,
              transition: { 
                delay: 400 + (index * 150), 
                duration: 700,
                ease: 'backOut'
              } 
            }"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
            <span class="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="md:hidden p-2 text-white"
          v-motion
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

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

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
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>