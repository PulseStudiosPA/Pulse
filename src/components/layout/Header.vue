<template>
  <header 
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
    :class="{
      'bg-[#0A0A2E]/95 backdrop-blur-md border-slate-800 shadow-md': scrolled,
      'bg-[#0A0A2E] border-slate-800/80': !scrolled
    }"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between py-3.5">
      
      <!-- Logo con color original Pulse -->
      <a href="#home" class="flex items-center gap-3" aria-label="Inicio PULSE">
        <img 
          src="/237520570.jpeg" 
          alt="PULSE Logo" 
          class="w-9 h-9 rounded-lg object-cover shadow-sm" 
        />
        <div>
          <span class="text-xl font-bold tracking-tight text-white">PULSE</span>
          <span class="hidden sm:inline-block text-[11px] font-medium text-slate-400 ml-2 pl-2 border-l border-slate-800">
            Tecnología & Soporte IT
          </span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-6" aria-label="Navegación principal">
        <a 
          v-for="item in navigation" 
          :key="item.name" 
          :href="item.href"
          class="text-sm font-medium transition-colors"
          :class="item.active ? 'text-violet-400 font-semibold' : 'text-slate-300 hover:text-white'"
        >
          {{ item.name }}
        </a>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden md:flex items-center gap-3">
        <a 
          href="#contact" 
          class="px-4 py-2 bg-primary hover:bg-violet-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
        >
          Solicitar Propuesta
        </a>
      </div>

      <!-- Mobile Button -->
      <button 
        @click="mobileMenuOpen = !mobileMenuOpen" 
        class="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
        :aria-expanded="mobileMenuOpen"
        aria-label="Menú"
      >
        <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div 
      v-if="mobileMenuOpen" 
      class="md:hidden bg-[#0A0A2E] border-b border-slate-800 px-6 py-4 space-y-3"
    >
      <nav class="space-y-2">
        <a 
          v-for="item in navigation" 
          :key="item.name" 
          :href="item.href"
          @click="mobileMenuOpen = false"
          class="block py-2 text-sm font-medium transition-colors"
          :class="item.active ? 'text-violet-400 font-semibold' : 'text-slate-300 hover:text-white'"
        >
          {{ item.name }}
        </a>
      </nav>
      <div class="pt-3 border-t border-slate-800 flex flex-col gap-2">
        <a 
          href="#contact" 
          @click="mobileMenuOpen = false"
          class="w-full py-2.5 px-4 text-center rounded-lg bg-primary text-white font-semibold text-xs"
        >
          Solicitar Propuesta
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const headerRef = ref(null)
const currentHash = ref(typeof window !== 'undefined' ? window.location.hash : '')
const activeSection = ref('home')

const navItems = [
  { name: 'Inicio', href: '#home', id: 'home' },
  { name: 'Servicios IT', href: '#services', id: 'services' },
  { name: 'Productos', href: '#productos', id: 'productos' },
  { name: 'Nosotros', href: '#about', id: 'about' },
  { name: 'Contacto', href: '#contact', id: 'contact' }
]

const isProductosPage = computed(() => {
  return currentHash.value.startsWith('#productos') || 
         currentHash.value.startsWith('#/productos') || 
         currentHash.value.startsWith('#servicios-it')
})

const navigation = computed(() => {
  if (isProductosPage.value) {
    return navItems.map(item => ({
      ...item,
      active: item.id === 'productos'
    }))
  }
  return navItems.map(item => ({
    ...item,
    active: item.id === activeSection.value
  }))
})

const updateActiveSectionFromScroll = () => {
  const scrollY = window.scrollY
  scrolled.value = scrollY > 20

  if (isProductosPage.value) {
    activeSection.value = 'productos'
    return
  }

  const sections = ['contact', 'about', 'services', 'home']
  const offset = 140

  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const top = el.offsetTop
      if (scrollY + offset >= top) {
        activeSection.value = id
        return
      }
    }
  }
  activeSection.value = 'home'
}

const handleHashChange = () => {
  currentHash.value = window.location.hash
  if (currentHash.value.startsWith('#productos') || currentHash.value.startsWith('#servicios-it')) {
    activeSection.value = 'productos'
  } else if (currentHash.value && currentHash.value.length > 1) {
    activeSection.value = currentHash.value.replace('#', '')
  } else {
    updateActiveSectionFromScroll()
  }
}

onMounted(() => {
  currentHash.value = window.location.hash
  if (currentHash.value.startsWith('#productos') || currentHash.value.startsWith('#servicios-it')) {
    activeSection.value = 'productos'
  } else {
    updateActiveSectionFromScroll()
  }
  window.addEventListener('scroll', updateActiveSectionFromScroll, { passive: true })
  window.addEventListener('hashchange', handleHashChange)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSectionFromScroll)
  window.removeEventListener('hashchange', handleHashChange)
})
</script>
