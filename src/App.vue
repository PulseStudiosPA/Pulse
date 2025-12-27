<template>
  <div class="overflow-x-hidden bg-[#0A0A2E]">
    <Header />
    <main>
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, defineAsyncComponent } from 'vue'

// Critical above-the-fold components (load immediately)
import Header from './components/layout/Header.vue'
import HeroSection from './components/sections/HeroSection.vue'

// Lazy-loaded below-the-fold components (reduces initial TBT)
const PortfolioSection = defineAsyncComponent(() => 
  import('./components/sections/PortfolioSection.vue')
)
const ServicesSection = defineAsyncComponent(() => 
  import('./components/sections/ServicesSection.vue')
)
const TestimonialsSection = defineAsyncComponent(() => 
  import('./components/sections/TestimonialsSection.vue')
)
const AboutSection = defineAsyncComponent(() => 
  import('./components/sections/AboutSection.vue')
)
const TeamSection = defineAsyncComponent(() => 
  import('./components/sections/TeamSection.vue')
)
const ContactSection = defineAsyncComponent(() => 
  import('./components/sections/ContactSection.vue')
)
const Footer = defineAsyncComponent(() => 
  import('./components/layout/Footer.vue')
)

onMounted(() => {
  // Smooth scrolling for navigation links (using passive listener for performance)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        const headerHeight = 64
        const targetPosition = target.offsetTop - headerHeight
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }, { passive: false })
  })
})
</script>

