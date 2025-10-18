<template>
  <section id="services" class="py-32 bg-slate-900 relative overflow-hidden" ref="servicesRef">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-violet-500/10 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-violet-600/5 rounded-full blur-3xl animate-pulse"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <p class="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
          What We Do
        </p>
        <h2 class="services-title text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Our Core Services
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>
      
      <!-- Clean Grid Layout for Services -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card group p-8 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
        >
          <!-- Icon -->
          <div 
            class="w-16 h-16 mb-6 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
          >
            <component :is="service.icon" class="h-8 w-8 text-primary" />
          </div>
          
          <!-- Content -->
          <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
            {{ service.title }}
          </h3>
          <p class="text-slate-400 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  CogIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/vue/24/outline'

gsap.registerPlugin(ScrollTrigger)

const servicesRef = ref(null)

const services = [
  {
    title: 'Custom WordPress Websites',
    description: 'Tailored WordPress solutions that perfectly match your brand and business needs with powerful CMS capabilities.',
    icon: CodeBracketIcon
  },
  {
    title: 'WooCommerce Stores',
    description: 'Full-featured e-commerce platforms built on WooCommerce with seamless payment integration and inventory management.',
    icon: DevicePhoneMobileIcon
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive and engaging experiences across all digital touchpoints.',
    icon: RocketLaunchIcon
  },
  {
    title: 'Website Optimization',
    description: 'Performance tuning and SEO optimization to ensure your website loads fast and ranks well in search engines.',
    icon: CloudIcon
  },
  {
    title: 'API Integration',
    description: 'Seamless integration with third-party services and APIs to extend your website functionality.',
    icon: CogIcon
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing website maintenance, security updates, and technical support to keep your site running smoothly.',
    icon: ShieldCheckIcon
  }
]

onMounted(() => {
  if (!servicesRef.value) return
  
  // Professional Scroll Animations
  gsap.from('.services-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.services-title',
      start: 'top 80%'
    }
  })

  gsap.from('.service-card', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.service-card',
      start: 'top 85%'
    }
  })
})
</script>
