<template>
  <section id="team" class="py-32 bg-gradient-to-b from-[#0A0A2E] to-slate-900 relative overflow-hidden" ref="teamRef">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <p class="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
          Nuestro Equipo
        </p>
        <h2 class="team-title text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Conoce al Equipo
        </h2>
        <div class="w-20 h-1 bg-primary mx-auto mb-8"></div>
        <p class="team-subtitle text-xl text-slate-400 max-w-2xl mx-auto">
          Un equipo apasionado de profesionales dedicados a crear experiencias digitales excepcionales.
        </p>
      </div>
      
      <!-- Team Grid - First Row (3 members, centered) -->
      <div class="flex justify-center gap-6 mb-6">
        <div 
          v-for="(member, index) in teamMembers.slice(0, 3)" 
          :key="index"
          :data-index="index"
          class="team-card group text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-primary/10 w-full max-w-[220px]"
        >
          <!-- Icon Avatar with glow -->
          <div 
            class="team-avatar w-20 h-20 mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-violet-500/20 border-2 border-primary/30 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500"
          >
            <component 
              :is="member.icon" 
              class="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" 
              aria-hidden="true"
            />
          </div>
          
          <!-- Name -->
          <h3 class="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
            {{ member.name }}
          </h3>
          
          <!-- Role -->
          <p class="text-slate-400 text-sm">
            {{ member.role }}
          </p>
        </div>
      </div>

      <!-- Team Grid - Second Row (4 members, centered) -->
      <div class="flex justify-center gap-6">
        <div 
          v-for="(member, index) in teamMembers.slice(3)" 
          :key="index + 3"
          :data-index="index + 3"
          class="team-card group text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-primary/10 w-full max-w-[220px]"
        >
          <!-- Icon Avatar with glow -->
          <div 
            class="team-avatar w-20 h-20 mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-violet-500/20 border-2 border-primary/30 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500"
          >
            <component 
              :is="member.icon" 
              class="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" 
              aria-hidden="true"
            />
          </div>
          
          <!-- Name -->
          <h3 class="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
            {{ member.name }}
          </h3>
          
          <!-- Role -->
          <p class="text-slate-400 text-sm">
            {{ member.role }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UserIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  PuzzlePieceIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from '@heroicons/vue/24/outline'

gsap.registerPlugin(ScrollTrigger)

const teamRef = ref(null)

// Team members ordered alphabetically by last name
const teamMembers = [
  {
    name: 'Irvin Benitez',
    role: 'Desarrollador',
    icon: CodeBracketIcon
  },
  {
    name: 'Derek Britton',
    role: 'Desarrollador',
    icon: CommandLineIcon
  },
  {
    name: 'Dereck Diaz',
    role: 'Desarrollador',
    icon: CpuChipIcon
  },
  {
    name: 'Adrian Jimenez',
    role: 'Desarrollador',
    icon: PuzzlePieceIcon
  },
  {
    name: 'Daniel Nie',
    role: 'Desarrollador',
    icon: LightBulbIcon
  },
  {
    name: 'Carlos Reina',
    role: 'Desarrollador',
    icon: RocketLaunchIcon
  },
  {
    name: 'Giancarlo Santillana',
    role: 'Desarrollador',
    icon: UserIcon
  }
]

let ctx

onMounted(() => {
  if (!teamRef.value) return
  
  ctx = gsap.context(() => {
    // Set initial state
    gsap.set('.team-title', { opacity: 0, y: 50 })
    gsap.set('.team-subtitle', { opacity: 0, y: 30 })
    gsap.set('.team-card', { opacity: 0, y: 80, rotateX: 15, scale: 0.9 })
    gsap.set('.team-avatar', { scale: 0, rotation: -180 })
    
    // Title animation
    gsap.to('.team-title', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.team-title',
        start: 'top 80%',
        once: true
      }
    })

    // Subtitle animation
    gsap.to('.team-subtitle', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.team-title',
        start: 'top 80%',
        once: true
      }
    })

    // Cards wave animation - staggered with random variation
    const cards = gsap.utils.toArray('.team-card')
    cards.forEach((card, i) => {
      const delay = i * 0.12 + Math.random() * 0.05
      
      gsap.to(card, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        scale: 1,
        duration: 1,
        delay: delay,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: teamRef.value,
          start: 'top 75%',
          once: true
        }
      })
    })

    // Avatar pop-in animation with spin
    const avatars = gsap.utils.toArray('.team-avatar')
    avatars.forEach((avatar, i) => {
      const delay = 0.3 + i * 0.1
      
      gsap.to(avatar, {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        delay: delay,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: teamRef.value,
          start: 'top 75%',
          once: true
        }
      })
    })
  }, teamRef.value)
})

onUnmounted(() => {
  ctx && ctx.revert()
})
</script>

