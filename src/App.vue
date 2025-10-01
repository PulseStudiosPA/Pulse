<template>
  <div class="min-h-screen bg-slate-950 text-white overflow-x-hidden">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-slate-950/90 backdrop-blur-lg z-50 border-b border-slate-800/50 transition-all duration-300" :class="{ 'bg-slate-950/95 shadow-lg': scrolled }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <h2 class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wider">
              PULSE
            </h2>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a v-for="item in navigation" :key="item.name" :href="item.href" 
                 class="relative px-3 py-2 text-slate-300 hover:text-cyan-400 transition-all duration-300 group">
                {{ item.name }}
                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </div>
          </div>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2">
            <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6 text-slate-300" />
            <XMarkIcon v-else class="h-6 w-6 text-slate-300" />
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-slate-800">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a v-for="item in navigation" :key="item.name" :href="item.href" 
             @click="mobileMenuOpen = false"
             class="block px-3 py-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div class="space-y-8 animate-fade-in-up">
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Bienvenido a 
            <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
              PULSE
            </span>
          </h1>
          <p class="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
            Impulsamos tu negocio hacia el futuro con soluciones innovadoras y tecnología de vanguardia
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2">
            <button class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <span class="relative z-10 flex items-center gap-2">
                Comenzar Ahora
                <ArrowRightIcon class="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button class="px-8 py-4 border-2 border-slate-600 rounded-full font-semibold text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1">
              Ver Nuestro Trabajo
            </button>
          </div>
        </div>
      </div>
      
      <!-- Animated wave -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg class="w-full h-24 fill-slate-950" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="animate-wave"></path>
        </svg>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 lg:py-32 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="service.title" 
               class="group relative p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
               :style="{ animationDelay: `${index * 150}ms` }">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <component :is="service.icon" class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {{ service.title }}
              </h3>
              <p class="text-slate-400 leading-relaxed">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="animate-fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sobre Nosotros
            </h2>
            <div class="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                En Pulse, somos expertos en transformación digital. Nuestro equipo de profesionales apasionados trabaja incansablemente para convertir tus ideas en realidades digitales exitosas.
              </p>
              <p>
                Con años de experiencia en el mercado, hemos ayudado a empresas de todos los tamaños a alcanzar sus objetivos tecnológicos y superar sus expectativas.
              </p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 animate-fade-in-up-delay-1">
            <div v-for="(stat, index) in stats" :key="stat.label" 
                 class="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-xl border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                 :style="{ animationDelay: `${index * 100}ms` }">
              <div class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {{ stat.value }}
              </div>
              <div class="text-slate-400 font-medium">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 lg:py-32 bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contáctanos
          </h2>
          <p class="text-xl text-slate-400 max-w-3xl mx-auto">
            ¿Listo para comenzar tu proyecto? Estamos aquí para ayudarte a hacer realidad tus ideas.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="animate-fade-in-up">
            <h3 class="text-2xl font-bold mb-6 text-white">Información de Contacto</h3>
            <div class="space-y-6">
              <div v-for="contact in contactInfo" :key="contact.label" 
                   class="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <component :is="contact.icon" class="h-6 w-6 text-white" />
                </div>
                <div>
                  <div class="font-medium text-white">{{ contact.label }}</div>
                  <div class="text-slate-400">{{ contact.value }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <form @submit.prevent="submitForm" class="space-y-6 animate-fade-in-up-delay-1">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input v-model="form.name" type="text" placeholder="Tu Nombre" required
                       class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300">
              </div>
              <div>
                <input v-model="form.email" type="email" placeholder="Tu Email" required
                       class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300">
              </div>
            </div>
            <div>
              <textarea v-model="form.message" placeholder="Tu Mensaje" rows="5" required
                        class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"></textarea>
            </div>
            <button type="submit" 
                    class="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <span>Enviar Mensaje</span>
              <PaperAirplaneIcon class="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <h3 class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              PULSE
            </h3>
            <p class="text-slate-400 mb-6 max-w-md">
              Impulsando el futuro digital con soluciones innovadoras y tecnología de vanguardia.
            </p>
            <div class="flex space-x-4">
              <a v-for="social in socialLinks" :key="social.name" :href="social.href"
                 class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300">
                <component :is="social.icon" class="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="text-white font-semibold mb-4">Servicios</h4>
            <ul class="space-y-2">
              <li><a href="#services" class="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Desarrollo Web</a></li>
              <li><a href="#services" class="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Apps Móviles</a></li>
              <li><a href="#services" class="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Optimización</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-white font-semibold mb-4">Empresa</h4>
            <ul class="space-y-2">
              <li><a href="#about" class="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Nosotros</a></li>
              <li><a href="#contact" class="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Contacto</a></li>
              <li><a href="#" class="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Privacidad</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-slate-800 pt-8 mt-8 text-center text-slate-400">
          <p>&copy; 2025 Pulse. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon
} from '@heroicons/vue/24/outline'

export default {
  name: 'App',
  components: {
    Bars3Icon,
    XMarkIcon,
    ArrowRightIcon,
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    RocketLaunchIcon,
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    PaperAirplaneIcon
  },
  setup() {
    const scrolled = ref(false)
    const mobileMenuOpen = ref(false)
    
    const form = ref({
      name: '',
      email: '',
      message: ''
    })

    const navigation = [
      { name: 'Inicio', href: '#home' },
      { name: 'Servicios', href: '#services' },
      { name: 'Nosotros', href: '#about' },
      { name: 'Contacto', href: '#contact' }
    ]

    const services = [
      {
        title: 'Desarrollo Web',
        description: 'Creamos sitios web modernos y responsivos que impulsan tu presencia digital con las últimas tecnologías.',
        icon: CodeBracketIcon
      },
      {
        title: 'Apps Móviles',
        description: 'Desarrollamos aplicaciones móviles nativas y híbridas para iOS y Android con experiencias excepcionales.',
        icon: DevicePhoneMobileIcon
      },
      {
        title: 'Optimización',
        description: 'Mejoramos el rendimiento y la velocidad de tus aplicaciones existentes para maximizar su potencial.',
        icon: RocketLaunchIcon
      }
    ]

    const stats = [
      { value: '50+', label: 'Proyectos Completados' },
      { value: '100%', label: 'Clientes Satisfechos' },
      { value: '5+', label: 'Años de Experiencia' }
    ]

    const contactInfo = [
      {
        label: 'Email',
        value: 'info@pulse.com',
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

    const socialLinks = [
      {
        name: 'GitHub',
        href: '#',
        icon: CodeBracketIcon
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: CodeBracketIcon
      },
      {
        name: 'Twitter',
        href: '#',
        icon: CodeBracketIcon
      }
    ]

    const handleScroll = () => {
      scrolled.value = window.scrollY > 50
    }

    const submitForm = () => {
      alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
      form.value = { name: '', email: '', message: '' }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      
      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const target = document.querySelector(this.getAttribute('href'))
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
          mobileMenuOpen.value = false
        })
      })
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      scrolled,
      mobileMenuOpen,
      form,
      navigation,
      services,
      stats,
      contactInfo,
      socialLinks,
      submitForm
    }
  }
}
</script>

<style scoped>
/* Componente específico de estilos si es necesario */
</style>
