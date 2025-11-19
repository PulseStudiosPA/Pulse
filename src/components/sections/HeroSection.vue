<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A2E] pt-24" ref="heroRef">
    <!-- Animated background with particles and grid -->
    <div class="absolute inset-0">
      <!-- Animated grid background -->
      <div class="absolute inset-0 grid-background"></div>
      
      <!-- Floating orbs -->
      <div class="floating-orb absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="floating-orb absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"></div>
      
      <!-- Animated particles -->
      <div class="particles-container absolute inset-0">
        <div v-for="i in 20" :key="i" class="particle"></div>
      </div>
      
      <!-- Animated gradient waves -->
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
    </div>
   
    <div class="relative z-10 text-center px-6 lg:px-8 max-w-6xl mx-auto">
      <div class="space-y-12">
        <!-- Hero principal con marca destacada -->
        <div class="space-y-6">
          <h1 class="hero-title text-7xl sm:text-8xl lg:text-9xl xl:text-[8rem] font-extrabold leading-tight tracking-tight">
            <span 
              v-for="(letter, index) in 'PULSE'.split('')" 
              :key="index"
              class="pulse-letter inline-block text-transparent bg-gradient-to-r from-primary via-purple-400 to-violet-400 bg-clip-text drop-shadow-lg"
            >
              {{ letter }}
            </span>
          </h1>
        </div>
        <p class="hero-description text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
          <span 
            v-for="(char, index) in descriptionText" 
            :key="index"
            class="description-char inline-block"
            :class="{ 'whitespace': char === ' ' }"
          >
            {{ char === ' ' ? '\u00A0' : char }}
          </span>
        </p>
        <div class="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a href="#portfolio" class="group relative px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25">
            <span class="flex items-center gap-2">
              Ver Proyectos
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </a>
          <a href="#contact" class="px-8 py-4 border border-slate-700 text-slate-300 font-medium rounded-lg hover:border-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            Solicitar Cotización
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import gsap from 'gsap'

const heroRef = ref(null)
const descriptionText = 'Impulsamos negocios en Panamá con soluciones digitales excepcionales. Diseño web, desarrollo de aplicaciones y estrategias digitales para tu empresa.'

let ctx

onMounted(async () => {
  if (!heroRef.value) return
  
  // Wait for DOM to be fully rendered
  await nextTick()

  ctx = gsap.context(() => {
    // Simple fade in for PULSE title
    gsap.from('.hero-title', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out'
    })

    // Get all character elements for description
    const chars = gsap.utils.toArray('.description-char')
    
    // Create array of indices and shuffle them for random order - Description
    const charIndices = chars.map((_, i) => i)
    for (let i = charIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [charIndices[i], charIndices[j]] = [charIndices[j], charIndices[i]]
    }

    // Set initial state for all characters
    gsap.set(chars, { opacity: 0, y: 20 })

    // Animate description characters in random order
    charIndices.forEach((charIndex, i) => {
      gsap.to(chars[charIndex], {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: 0.3 + (i * 0.008),
        ease: 'power2.out'
      })
    })

    // Animate CTA buttons
    gsap.from('.hero-cta', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 1.2,
      ease: 'power3.out'
    })

    // Floating orbs animation
    gsap.to('.floating-orb', {
      y: '+=30',
      x: '+=20',
      duration: 8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 1
    })

    // Animate particles
    gsap.utils.toArray('.particle').forEach((particle, i) => {
      gsap.to(particle, {
        y: 'random(-100, 100)',
        x: 'random(-100, 100)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.2
      })
    })
  }, heroRef.value)
})

onUnmounted(() => {
  ctx && ctx.revert()
})
</script>

<style scoped>
/* Animated grid background */
.grid-background {
  background-image: 
    linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

/* Animated particles */
.particles-container {
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, #8b5cf6, #a78bfa);
  border-radius: 50%;
  opacity: 0.6;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

.particle:nth-child(1) { top: 10%; left: 10%; }
.particle:nth-child(2) { top: 20%; left: 80%; }
.particle:nth-child(3) { top: 30%; left: 30%; }
.particle:nth-child(4) { top: 40%; left: 70%; }
.particle:nth-child(5) { top: 50%; left: 15%; }
.particle:nth-child(6) { top: 60%; left: 85%; }
.particle:nth-child(7) { top: 70%; left: 25%; }
.particle:nth-child(8) { top: 80%; left: 60%; }
.particle:nth-child(9) { top: 15%; left: 50%; }
.particle:nth-child(10) { top: 25%; left: 40%; }
.particle:nth-child(11) { top: 35%; left: 90%; }
.particle:nth-child(12) { top: 45%; left: 20%; }
.particle:nth-child(13) { top: 55%; left: 75%; }
.particle:nth-child(14) { top: 65%; left: 35%; }
.particle:nth-child(15) { top: 75%; left: 80%; }
.particle:nth-child(16) { top: 85%; left: 45%; }
.particle:nth-child(17) { top: 12%; left: 65%; }
.particle:nth-child(18) { top: 38%; left: 55%; }
.particle:nth-child(19) { top: 62%; left: 10%; }
.particle:nth-child(20) { top: 88%; left: 70%; }

/* Animated gradient waves */
.wave {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
  border-radius: 45%;
  animation: wave 15s ease-in-out infinite;
  opacity: 0.3;
}

.wave-1 {
  top: -50%;
  left: -50%;
  animation-duration: 20s;
}

.wave-2 {
  top: -30%;
  left: -30%;
  animation-duration: 25s;
  animation-delay: -5s;
}

.wave-3 {
  bottom: -50%;
  right: -50%;
  animation-duration: 30s;
  animation-delay: -10s;
}

@keyframes wave {
  0%, 100% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.2);
  }
}

/* PULSE letter hover effect */
.pulse-letter {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: default;
}

.pulse-letter:hover {
  transform: translateY(-10px) scale(1.1);
  filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.8)) drop-shadow(0 0 40px rgba(167, 139, 250, 0.6));
}

/* Description character styles */
.description-char {
  will-change: transform, opacity;
}

/* Floating animation for orbs */
.floating-orb {
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, -30px) scale(1.1);
  }
}
</style>