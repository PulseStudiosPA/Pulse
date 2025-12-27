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
import { onMounted } from 'vue'
import Header from './components/layout/Header.vue'
import HeroSection from './components/sections/HeroSection.vue'
import PortfolioSection from './components/sections/PortfolioSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import TeamSection from './components/sections/TeamSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import Footer from './components/layout/Footer.vue'

onMounted(() => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        const headerHeight = 80
        const targetPosition = target.offsetTop - headerHeight
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    })
  })
})
</script>
