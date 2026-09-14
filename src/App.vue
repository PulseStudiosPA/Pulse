<template>
  <div class="overflow-x-hidden bg-[#0A0A2E] text-slate-100 min-h-screen">
    <Header v-if="currentView !== 'notfound'" />

    <!-- View: 404 Not Found -->
    <main v-if="currentView === 'notfound'" class="-mt-18">
      <NotFoundView />
    </main>

    <!-- View: Productos SaaS (Maya y Stash) -->
    <main v-else-if="currentView === 'productos'">
      <ProductosView />
    </main>

    <!-- View: Landing Page (Home) -->
    <main v-else>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>

    <Footer v-if="currentView !== 'notfound'" />
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
const NotFoundView = defineAsyncComponent(() =>
  import('./views/NotFoundView.vue')
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

// Valid page routes. Hash URLs that match these are routed to their views.
// Anything else (that has a #) is treated as an unknown anchor and shows 404.
const PAGE_ROUTES = new Set(['home', 'services', 'about', 'contact'])
const PRODUCT_ROUTES = new Set(['productos', '/productos', 'servicios-it'])
const KNOWN_HASHES = new Set([
  '', // bare hash
  'home',
  'services',
  'productos',
  '/productos',
  'servicios-it',
  'about',
  'contact',
])

const currentView = ref('home')

/** Sets the document's meta robots tag. */
function setMetaRobots(content) {
  if (typeof document === 'undefined') return
  let meta = document.querySelector('meta[name="robots"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'robots')
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

const updateRoute = () => {
  const rawHash = window.location.hash || ''
  const hash = rawHash.replace(/^#/, '')

  // Producto view takes precedence
  if (PRODUCT_ROUTES.has(hash)) {
    currentView.value = 'productos'
    setMetaRobots('index, follow')
    window.scrollTo({ top: 0, behavior: 'instant' })
    return
  }

  // Empty or home → home
  if (hash === '' || hash === 'home') {
    currentView.value = 'home'
    setMetaRobots('index, follow')
    if (hash === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return
  }

  // Known section anchors → home + scroll
  if (PAGE_ROUTES.has(hash)) {
    currentView.value = 'home'
    setMetaRobots('index, follow')
    nextTick(() => {
      setTimeout(() => {
        const target = document.querySelector('#' + hash)
        if (target) {
          const headerHeight = 70
          const targetPosition = target.offsetTop - headerHeight
          window.scrollTo({ top: targetPosition, behavior: 'smooth' })
        }
      }, 100)
    })
    return
  }

  // Anything else (has a # but doesn't match a known page) → 404
  if (rawHash.length > 0) {
    currentView.value = 'notfound'
    setMetaRobots('noindex, follow')
    window.scrollTo({ top: 0, behavior: 'instant' })
    return
  }

  // Fallback to home
  currentView.value = 'home'
  setMetaRobots('index, follow')
}

const handleHashClick = (e) => {
  const anchor = e.target.closest('a[href^="#"]')
  if (!anchor) return

  const href = anchor.getAttribute('href')
  if (!href || href === '#' || href.length <= 1) return

  if (PRODUCT_ROUTES.has(href.replace(/^#/, ''))) {
    e.preventDefault()
    window.location.hash = '#productos'
    currentView.value = 'productos'
    setMetaRobots('index, follow')
    window.scrollTo({ top: 0, behavior: 'instant' })
    return
  }

  if (href === '#home') {
    e.preventDefault()
    window.location.hash = '#home'
    currentView.value = 'home'
    setMetaRobots('index, follow')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  // If navigating to an anchor like #services, #about, #contact from productos
  if (currentView.value === 'productos') {
    e.preventDefault()
    currentView.value = 'home'
    window.location.hash = href
    setMetaRobots('index, follow')
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
      behavior: 'smooth',
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
