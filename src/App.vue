<template>
  <div class="overflow-x-hidden bg-[#0A0A2E] text-slate-100 min-h-screen">
    <Header />
    
    <!-- View: Productos SaaS (Maya y Stash) -->
    <main v-if="currentView === 'productos'">
      <ProductosView />
    </main>

    <!-- View: Landing Page (Home) -->
    <main v-else>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineAsyncComponent, nextTick } from 'vue'

// Critical above-the-fold components
import Header from './components/layout/Header.vue'
import HeroSection from './components/sections/HeroSection.vue'

// Modular components (lazy-loaded for high performance & fast initial paint)
const ProductosView = defineAsyncComponent(() => 
  import('./views/ProductosView.vue')
)
const ServicesSection = defineAsyncComponent(() => 
  import('./components/sections/ServicesSection.vue')
)
const AboutSection = defineAsyncComponent(() => 
  import('./components/sections/AboutSection.vue')
)
const ContactSection = defineAsyncComponent(() => 
  import('./components/sections/ContactSection.vue')
)
const Footer = defineAsyncComponent(() => 
  import('./components/layout/Footer.vue')
)

const currentView = ref('home')

const updateRoute = () => {
  const hash = window.location.hash
  if (hash.startsWith('#productos') || hash.startsWith('#/productos') || hash.startsWith('#servicios-it')) {
    currentView.value = 'productos'
    window.scrollTo({ top: 0, behavior: 'instant' })
  } else {
    currentView.value = 'home'
    if (hash && hash.length > 1 && hash !== '#home') {
      nextTick(() => {
        setTimeout(() => {
          const target = document.querySelector(hash)
          if (target) {
            const headerHeight = 70
            const targetPosition = target.offsetTop - headerHeight
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

const handleHashClick = (e) => {
  const anchor = e.target.closest('a[href^="#"]')
  if (!anchor) return

  const href = anchor.getAttribute('href')
  if (!href || href === '#' || href.length <= 1) return

  if (href.startsWith('#productos') || href.startsWith('#servicios-it')) {
    e.preventDefault()
    window.location.hash = '#productos'
    currentView.value = 'productos'
    window.scrollTo({ top: 0, behavior: 'instant' })
    return
  }

  if (href === '#home') {
    e.preventDefault()
    window.location.hash = '#home'
    currentView.value = 'home'
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  // If navigating to an anchor like #services, #about, #contact from productos
  if (currentView.value === 'productos') {
    e.preventDefault()
    currentView.value = 'home'
    window.location.hash = href
    nextTick(() => {
      const scrollToTarget = (attempts = 0) => {
        const target = document.querySelector(href)
        if (target) {
          const headerHeight = 70
          const targetPosition = target.offsetTop - headerHeight
          window.scrollTo({ top: targetPosition, behavior: 'smooth' })
        } else if (attempts < 12) {
          setTimeout(() => scrollToTarget(attempts + 1), 40)
        }
      }
      scrollToTarget()
    })
    return
  }

  const target = document.querySelector(href)
  if (target) {
    e.preventDefault()
    const headerHeight = 70
    const targetPosition = target.offsetTop - headerHeight
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
    history.pushState(null, '', href)
  }
}

onMounted(() => {
  updateRoute()
  window.addEventListener('hashchange', updateRoute)
  document.addEventListener('click', handleHashClick)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', updateRoute)
  document.removeEventListener('click', handleHashClick)
})
</script>
