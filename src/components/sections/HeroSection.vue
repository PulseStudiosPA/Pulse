<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A2E] via-purple-950 to-[#0A0A2E] pt-20" ref="heroRef">
    <!-- Elaborate animated background with GSAP -->
    <div class="absolute inset-0 opacity-80">
      <!-- Main gradient orbs -->
      <div class="floating-orb floating-orb-1 absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-to-r from-primary/30 to-purple-600/20 rounded-full blur-3xl"></div>
      <div class="floating-orb floating-orb-2 absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-to-l from-violet-500/20 to-primary/25 rounded-full blur-3xl"></div>
      
      <!-- Floating particles -->
      <div class="floating-particle particle-1 absolute top-20 left-1/4 w-4 h-4 bg-primary/60 rounded-full shadow-lg shadow-primary/50"></div>
      <div class="floating-particle particle-2 absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/50 rounded-full shadow-lg shadow-purple-400/50"></div>
      <div class="floating-particle particle-3 absolute bottom-1/4 left-1/2 w-5 h-5 bg-violet-400/50 rounded-full shadow-lg shadow-violet-400/50"></div>
      <div class="floating-particle particle-4 absolute top-1/2 left-1/6 w-2 h-2 bg-primary/70 rounded-full shadow-md shadow-primary/50"></div>
      <div class="floating-particle particle-5 absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-300/60 rounded-full shadow-lg shadow-purple-300/50"></div>
      <div class="floating-particle particle-6 absolute top-2/3 right-1/6 w-4 h-4 bg-cyan-400/50 rounded-full shadow-lg shadow-cyan-400/50"></div>
      
      <!-- Geometric shapes -->
      <div class="floating-orb floating-orb-3 absolute top-1/3 right-1/2 w-32 h-32 bg-gradient-to-r from-purple-400/25 to-primary/20 rounded-full blur-2xl"></div>
      <div class="floating-orb floating-orb-4 absolute bottom-1/2 left-3/4 w-24 h-24 bg-gradient-to-l from-violet-400/30 to-purple-500/20 rounded-full blur-xl"></div>
      
      <!-- Grid overlay -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05),transparent_50%)]"></div>
    </div>
    
    <div class="relative z-10 text-center px-6 lg:px-8 max-w-5xl mx-auto">
      <div class="space-y-8">
        <!-- Main title -->
        <h1 class="gsap-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white tracking-wide drop-shadow-2xl">
          Bienvenido a 
          <div class="gsap-pulse mt-4 font-black inline-block">
            <span class="pulse-letter bg-gradient-to-r from-primary via-purple-500 to-violet-400 bg-clip-text text-transparent" style="display: inline-block;">P</span><span class="pulse-letter bg-gradient-to-r from-primary via-purple-500 to-violet-400 bg-clip-text text-transparent" style="display: inline-block;">u</span><span class="pulse-letter bg-gradient-to-r from-primary via-purple-500 to-violet-400 bg-clip-text text-transparent" style="display: inline-block;">l</span><span class="pulse-letter bg-gradient-to-r from-primary via-purple-500 to-violet-400 bg-clip-text text-transparent" style="display: inline-block;">s</span><span class="pulse-letter bg-gradient-to-r from-primary via-purple-500 to-violet-400 bg-clip-text text-transparent" style="display: inline-block;">e</span>
          </div>
        </h1>

        <!-- Subtitle -->
        <p class="gsap-subtitle text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed mt-8 drop-shadow-lg">
          Impulsamos tu negocio hacia el futuro con 
          <span class="text-gradient font-bold">
            soluciones innovadoras
          </span> 
          y tecnología de vanguardia
        </p>

        <!-- Stats/Features mini cards -->
        <div class="gsap-stats flex flex-wrap justify-center gap-6 pt-6 pb-4">
          <div class="stat-card group">
            <div class="text-3xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">100+</div>
            <div class="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Proyectos</div>
          </div>
          <div class="stat-card group">
            <div class="text-3xl font-bold bg-gradient-to-r from-purple-500 to-violet-400 bg-clip-text text-transparent">50+</div>
            <div class="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Clientes</div>
          </div>
          <div class="stat-card group">
            <div class="text-3xl font-bold bg-gradient-to-r from-violet-400 to-primary bg-clip-text text-transparent">24/7</div>
            <div class="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Soporte</div>
          </div>
        </div>

        <!-- CTA Buttons - MEJORADOS Y MÁS VISIBLES -->
        <div class="gsap-btn-container flex flex-col sm:flex-row gap-6 justify-center items-center pt-10 pb-6">
          <button 
            @click="scrollToSection('servicios')"
            class="cta-btn-primary group relative px-12 py-5 bg-gradient-to-r from-cyan-500 via-primary to-purple-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden ring-2 ring-cyan-400/50 hover:ring-cyan-400/80">
            <span class="relative z-10 flex items-center gap-3">
              Comenzar Ahora
              <svg class="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-90 transition-opacity duration-500 animate-pulse-slow"></div>
          </button>
          
          <button 
            @click="scrollToSection('portfolio')"
            class="cta-btn-secondary group relative px-12 py-5 bg-white/10 border-2 border-cyan-400 text-white font-bold text-lg rounded-full hover:bg-white/20 hover:border-cyan-300 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden backdrop-blur-md shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40">
            <span class="relative z-10 flex items-center gap-3">
              Ver Nuestro Trabajo
              <svg class="w-6 h-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
          </button>
        </div>


      </div>
    </div>

    <!-- Scroll indicator REMOVED -->
  </section>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroRef = ref(null)

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(async () => {
  await nextTick()
  
  if (heroRef.value) {
    // Timeline principal de entrada
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    // Animación del título principal
    tl.from(heroRef.value.querySelector('.gsap-title'), {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out'
    })

    // GSAP Text Reveal Animation para las letras de PULSE
    const pulseLetters = heroRef.value.querySelectorAll('.pulse-letter')
    
    // Establecer estado inicial
    gsap.set(pulseLetters, {
      opacity: 0,
      y: 100,
      rotationX: -90,
      transformOrigin: '50% 50% -50px',
      willChange: 'transform, opacity'
    })
    
    // Animación de reveal con efecto 3D
    tl.to(pulseLetters, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      stagger: {
        each: 0.08,
        ease: 'power2.out'
      },
      duration: 1,
      ease: 'back.out(1.4)',
      clearProps: 'willChange'
    }, '-=0.6')
    
    // Efecto de brillo adicional
    tl.from(pulseLetters, {
      filter: 'blur(10px) brightness(0)',
      stagger: 0.08,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=1')

    // Animación del subtítulo
    tl.from(heroRef.value.querySelector('.gsap-subtitle'), {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.4')

    // Animación de las stats - MÁS SUAVE
    const stats = heroRef.value.querySelectorAll('.stat-card')
    
    // Asegurar que las cards sean visibles desde el inicio
    gsap.set(stats, { opacity: 1, scale: 1 })
    
    tl.from(stats, {
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.5')

    // Animación de botones - MÁS SUAVE, SIN OCULTARLOS
    const btnPrimary = heroRef.value.querySelector('.cta-btn-primary')
    const btnSecondary = heroRef.value.querySelector('.cta-btn-secondary')
    
    // Asegurar que los botones sean visibles desde el inicio
    gsap.set([btnPrimary, btnSecondary], { opacity: 1, scale: 1 })
    
    // Animación de entrada suave
    tl.from(btnPrimary, {
      y: 50,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.3')
    
    tl.from(btnSecondary, {
      y: 50,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.6')

    // Animación del scroll indicator REMOVED
    // const scrollIndicator = heroRef.value.querySelector('.scroll-indicator')
    // tl.from(scrollIndicator, {
    //   y: -20,
    //   opacity: 0,
    //   duration: 1
    // }, '-=0.3')

    // Animaciones continuas de fondo con will-change para mejor performance
    
    // Orbes grandes - movimiento más lento y suave
    const orb1 = heroRef.value.querySelector('.floating-orb-1')
    gsap.set(orb1, { willChange: 'transform' })
    gsap.to(orb1, {
      y: '+=40',
      x: '+=20',
      rotation: 180,
      duration: 8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    const orb2 = heroRef.value.querySelector('.floating-orb-2')
    gsap.set(orb2, { willChange: 'transform' })
    gsap.to(orb2, {
      y: '-=50',
      x: '-=25',
      rotation: -180,
      duration: 10,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    const orb3 = heroRef.value.querySelector('.floating-orb-3')
    gsap.set(orb3, { willChange: 'transform' })
    gsap.to(orb3, {
      y: '+=30',
      x: '-=15',
      duration: 7,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    const orb4 = heroRef.value.querySelector('.floating-orb-4')
    gsap.set(orb4, { willChange: 'transform' })
    gsap.to(orb4, {
      y: '-=35',
      x: '+=20',
      duration: 9,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    // Partículas - movimiento más dinámico
    const particles = heroRef.value.querySelectorAll('.floating-particle')
    particles.forEach((particle, index) => {
      gsap.set(particle, { willChange: 'transform, opacity' })
      
      gsap.to(particle, {
        y: `+=${20 + index * 5}`,
        x: `+=${15 + index * 3}`,
        duration: 3 + index * 0.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.2
      })

      gsap.to(particle, {
        opacity: 0.3,
        scale: 0.8,
        duration: 2 + index * 0.3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.15
      })
    })

    // Efecto de respiración del logo Pulse
    const pulseContainer = heroRef.value.querySelector('.gsap-pulse')
    gsap.set(pulseContainer, { willChange: 'transform' })
    gsap.to(pulseContainer, {
      scale: 1.05,
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

    // Animación del scroll indicator REMOVED
    // gsap.set(scrollIndicator, { willChange: 'transform' })
    // gsap.to(scrollIndicator, {
    //   y: 15,
    //   duration: 1.5,
    //   ease: 'sine.inOut',
    //   repeat: -1,
    //   yoyo: true
    // })

    // Parallax effect on scroll
    gsap.to(heroRef.value.querySelectorAll('.floating-orb'), {
      y: '+=100',
      scrollTrigger: {
        trigger: heroRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    })

    // Hover effects para las letras PULSE
    pulseLetters.forEach((letter) => {
      letter.addEventListener('mouseenter', () => {
        gsap.to(letter, {
          y: -10,
          scale: 1.2,
          rotation: -5,
          filter: 'drop-shadow(0 8px 16px rgba(34, 211, 238, 0.6)) drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))',
          duration: 0.3,
          ease: 'back.out(1.7)'
        })
      })
      
      letter.addEventListener('mouseleave', () => {
        gsap.to(letter, {
          y: 0,
          scale: 1,
          rotation: 0,
          filter: 'drop-shadow(0 4px 6px rgba(34, 211, 238, 0.3))',
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })

    // Efecto de brillo continuo en los botones
    gsap.to(btnPrimary, {
      boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.6), 0 0 40px rgba(34, 211, 238, 0.4)',
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })
  }
})
</script>

<style scoped>
/* Animación del gradiente con prefijos para compatibilidad */
@-webkit-keyframes gradient {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

@keyframes gradient {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

@-webkit-keyframes pulse-slow {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.9;
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.9;
  }
}

.animate-pulse-slow {
  -webkit-animation: pulse-slow 3s ease-in-out infinite;
  animation: pulse-slow 3s ease-in-out infinite;
}

.text-gradient {
  background: -webkit-linear-gradient(left, #22d3ee, #06b6d4, #a855f7);
  background: -moz-linear-gradient(left, #22d3ee, #06b6d4, #a855f7);
  background: linear-gradient(to right, #22d3ee, #06b6d4, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  -webkit-animation: gradient 8s ease infinite;
  animation: gradient 8s ease infinite;
}

/* Letras de Pulse con mejor compatibilidad */
.pulse-letter {
  font-weight: 900;
  -webkit-transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -moz-transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  -webkit-filter: drop-shadow(0 4px 6px rgba(34, 211, 238, 0.3));
  filter: drop-shadow(0 4px 6px rgba(34, 211, 238, 0.3));
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

/* Stats cards */
.stat-card {
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.05);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  cursor: default;
  -webkit-box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.stat-card:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(34, 211, 238, 0.3);
  -webkit-transform: translateY(-0.25rem) scale(1.1);
  -moz-transform: translateY(-0.25rem) scale(1.1);
  transform: translateY(-0.25rem) scale(1.1);
  -webkit-box-shadow: 0 20px 25px -5px rgba(34, 211, 238, 0.2);
  box-shadow: 0 20px 25px -5px rgba(34, 211, 238, 0.2);
}

/* Botones CTA mejorados */
.cta-btn-primary,
.cta-btn-secondary {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.cta-btn-primary::before,
.cta-btn-secondary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: width 0.6s, height 0.6s;
  -moz-transition: width 0.6s, height 0.6s;
  transition: width 0.6s, height 0.6s;
}

.cta-btn-primary:hover::before,
.cta-btn-secondary:hover::before {
  width: 400px;
  height: 400px;
}

.cta-btn-primary:active,
.cta-btn-secondary:active {
  -webkit-transform: translateY(-1px) scale(0.98);
  -moz-transform: translateY(-1px) scale(0.98);
  transform: translateY(-1px) scale(0.98);
}

/* Scroll indicator animado REMOVED */
/* .scroll-indicator {
  -webkit-animation: float 3s ease-in-out infinite;
  animation: float 3s ease-in-out infinite;
}

@-webkit-keyframes float {
  0%, 100% {
    -webkit-transform: translateX(-50%) translateY(0);
    transform: translateX(-50%) translateY(0);
  }
  50% {
    -webkit-transform: translateX(-50%) translateY(10px);
    transform: translateX(-50%) translateY(10px);
  }
}

@keyframes float {
  0%, 100% {
    -webkit-transform: translateX(-50%) translateY(0);
    transform: translateX(-50%) translateY(0);
  }
  50% {
    -webkit-transform: translateX(-50%) translateY(10px);
    transform: translateX(-50%) translateY(10px);
  }
} */

/* Mejoras responsive */
@media (max-width: 640px) {
  .pulse-letter {
    font-size: 0.9em;
  }
  
  .stat-card {
    padding: 0.75rem 1rem;
  }

  .cta-btn-primary,
  .cta-btn-secondary {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
}

/* Efectos de partículas */
.floating-particle {
  -webkit-animation: pulse 2s ease-in-out infinite;
  animation: pulse 2s ease-in-out infinite;
}

@-webkit-keyframes pulse {
  0%, 100% {
    opacity: 0.6;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}

/* Optimizaciones de performance */
.floating-orb,
.floating-particle,
.pulse-letter,
.gsap-pulse,
.cta-btn-primary,
.cta-btn-secondary {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
</style>