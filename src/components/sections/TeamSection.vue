<template>
  <section id="team" class="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#0A0A2E] to-slate-900 relative overflow-hidden" ref="teamRef">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-56 md:w-80 h-56 md:h-80 bg-violet-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-10 md:mb-16">
        <p class="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary font-medium mb-3 sm:mb-4">
          Nuestro Equipo
        </p>
        <h2 class="team-title text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
          Conoce al Equipo
        </h2>
        <div class="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
        <p class="team-subtitle text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
          Un equipo apasionado de profesionales dedicados a crear experiencias digitales excepcionales.
        </p>
      </div>
      
      <!-- Team Grid - Mobile: 2 cols grid, Desktop: 3+4 centered rows -->
      <!-- First Row (3 members) - visible on lg+ as flex, grid on smaller -->
      <div class="hidden lg:flex justify-center gap-6 mb-6">
        <div 
          v-for="(member, index) in teamMembers.slice(0, 3)" 
          :key="'lg-' + index"
          :data-index="index"
          class="team-card group text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-primary/10 w-full max-w-[220px]"
        >
          <div class="team-avatar w-20 h-20 mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-violet-500/20 border-2 border-primary/30 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500">
            <component :is="member.icon" class="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
          </div>
          <h3 class="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">{{ member.name }}</h3>
          <p class="text-slate-400 text-sm">{{ member.role }}</p>
        </div>
      </div>

      <!-- Second Row (4 members) - visible on lg+ as flex -->
      <div class="hidden lg:flex justify-center gap-6">
        <div 
          v-for="(member, index) in teamMembers.slice(3)" 
          :key="'lg-' + (index + 3)"
          :data-index="index + 3"
          class="team-card group text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-primary/10 w-full max-w-[220px]"
        >
          <div class="team-avatar w-20 h-20 mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-violet-500/20 border-2 border-primary/30 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500">
            <component :is="member.icon" class="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
          </div>
          <h3 class="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">{{ member.name }}</h3>
          <p class="text-slate-400 text-sm">{{ member.role }}</p>
        </div>
      </div>

      <!-- Mobile/Tablet Grid (2 cols) - hidden on lg+ -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:hidden">
        <div 
          v-for="(member, index) in teamMembers" 
          :key="'sm-' + index"
          :data-index="index"
          class="team-card group text-center p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
        >
          <div class="team-avatar w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-violet-500/20 border-2 border-primary/30 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500">
            <component :is="member.icon" class="h-7 w-7 sm:h-8 sm:w-8 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
          </div>
          <h3 class="text-sm sm:text-base font-bold text-white mb-0.5 group-hover:text-primary transition-colors duration-300">{{ member.name }}</h3>
          <p class="text-slate-400 text-xs sm:text-sm">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import {
  UserIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  PuzzlePieceIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from '@heroicons/vue/24/outline'

const teamRef = ref(null)

const teamMembers = [
  { name: 'Irvin Benitez', role: 'Desarrollador', icon: CodeBracketIcon },
  { name: 'Derek Britton', role: 'Desarrollador', icon: CommandLineIcon },
  { name: 'Dereck Diaz', role: 'Desarrollador', icon: CpuChipIcon },
  { name: 'Adrian Jimenez', role: 'Desarrollador', icon: PuzzlePieceIcon },
  { name: 'Daniel Nie', role: 'Desarrollador', icon: LightBulbIcon },
  { name: 'Carlos Reina', role: 'Desarrollador', icon: RocketLaunchIcon },
  { name: 'Giancarlo Santillana', role: 'Desarrollador', icon: UserIcon }
]

let ctx

onMounted(async () => {
  if (!teamRef.value) return
  
  const { default: gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)
  
  ctx = gsap.context(() => {
    gsap.set('.team-title', { opacity: 0, y: 50 })
    gsap.set('.team-subtitle', { opacity: 0, y: 30 })
    gsap.set('.team-card', { opacity: 0, y: 80, rotateX: 15, scale: 0.9 })
    gsap.set('.team-avatar', { scale: 0, rotation: -180 })
    
    gsap.to('.team-title', {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.team-title', start: 'top 80%', once: true }
    })

    gsap.to('.team-subtitle', {
      y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out',
      scrollTrigger: { trigger: '.team-title', start: 'top 80%', once: true }
    })

    const cards = gsap.utils.toArray('.team-card')
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: 0, opacity: 1, rotateX: 0, scale: 1, duration: 1,
        delay: i * 0.12 + Math.random() * 0.05, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: teamRef.value, start: 'top 75%', once: true }
      })
    })

    const avatars = gsap.utils.toArray('.team-avatar')
    avatars.forEach((avatar, i) => {
      gsap.to(avatar, {
        scale: 1, rotation: 0, duration: 0.6, delay: 0.3 + i * 0.1, ease: 'back.out(2)',
        scrollTrigger: { trigger: teamRef.value, start: 'top 75%', once: true }
      })
    })
  }, teamRef.value)
})

onUnmounted(() => {
  ctx && ctx.revert()
})
</script>


