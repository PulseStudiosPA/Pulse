<template>
  <div class="overflow-x-hidden">
    <Header />
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/layout/Header.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import Footer from './components/layout/Footer.vue'

onMounted(() => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        const headerHeight = document.querySelector('header').offsetHeight // Altura del header en px
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

<style scoped>
/* Componente específico de estilos si es necesario */
</style>
