<template>
  <section id="equipo" class="py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200 relative" ref="teamRef">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-violet-200/80 bg-violet-50 text-xs font-semibold uppercase tracking-wider text-violet-700 mb-4">
          Equipo de Ingeniería
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          Ingenieros y especialistas en Panamá
        </h2>
        <p class="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Especialistas locales dedicados a la infraestructura, seguridad y desarrollo de tu empresa.
        </p>
      </div>
      
      <!-- Framed Collaborative Team Canvas -->
      <div class="max-w-5xl mx-auto bg-gradient-to-b from-slate-50/90 via-white to-slate-50/60 border border-slate-200/90 rounded-3xl p-8 sm:p-14 shadow-sm relative overflow-hidden">
        <!-- Ambient decorative background glow -->
        <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Dynamic Connection Canvas -->
        <div ref="containerRef" class="relative max-w-4xl mx-auto py-4 sm:py-8">
          <!-- SVG Connections Background (visible on md+) -->
          <svg 
            class="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <line 
              v-for="(line, idx) in lines" 
              :key="idx"
              :x1="line.x1"
              :y1="line.y1"
              :x2="line.x2"
              :y2="line.y2"
              :stroke="isLineActive(line) ? '#8B5CF6' : '#E2E8F0'"
              :stroke-width="isLineActive(line) ? 2.5 : 1.5"
              class="transition-all duration-300"
            />
          </svg>

          <!-- Interconnected Team Nodes -->
          <div class="relative z-10 flex flex-col items-center gap-10 sm:gap-14">
            <!-- Row 1: 4 especialistas (Nombres ARRIBA) -->
            <div class="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-18">
              <div 
                v-for="(member, idx) in row1" 
                :key="member.name"
                class="flex flex-col items-center group cursor-default w-24 sm:w-28 transition-transform duration-200 hover:-translate-y-1.5"
                @mouseenter="hoveredIndex = idx"
                @mouseleave="hoveredIndex = null"
              >
                <!-- Nombre arriba para primera fila -->
                <span 
                  :class="[
                    'mb-3 text-xs sm:text-sm md:text-base font-bold text-center tracking-tight transition-colors leading-tight',
                    hoveredIndex === idx ? 'text-violet-950 font-extrabold' : 'text-slate-800 group-hover:text-violet-900'
                  ]"
                >
                  {{ member.name }}
                </span>

                <!-- Avatar circular -->
                <div 
                  :ref="el => setAvatarRef(el, idx)"
                  :class="[
                    'w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 shadow-sm flex items-center justify-center transition-all duration-300 relative',
                    hoveredIndex === idx
                      ? 'border-violet-600 shadow-lg shadow-violet-500/20 ring-4 ring-violet-100 scale-105'
                      : isConnectedToHovered(idx)
                        ? 'border-violet-400 shadow-md ring-2 ring-violet-50'
                        : 'border-slate-200 group-hover:border-violet-500 group-hover:shadow-md'
                  ]"
                >
                  <div class="w-16 h-16 sm:w-19 sm:h-19 rounded-full bg-gradient-to-tr from-slate-50 to-violet-50/50 flex items-center justify-center">
                    <UserIcon 
                      :class="[
                        'w-9 h-9 sm:w-11 sm:h-11 transition-colors duration-200',
                        hoveredIndex === idx || isConnectedToHovered(idx) ? 'text-violet-600' : 'text-slate-400 group-hover:text-violet-600'
                      ]" 
                      aria-hidden="true" 
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 2: 3 especialistas centrados e intercalados (Nombres ABAJO) -->
            <div class="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-18">
              <div 
                v-for="(member, idx) in row2" 
                :key="member.name"
                class="flex flex-col items-center group cursor-default w-24 sm:w-28 transition-transform duration-200 hover:-translate-y-1.5"
                @mouseenter="hoveredIndex = idx + 4"
                @mouseleave="hoveredIndex = null"
              >
                <!-- Avatar circular -->
                <div 
                  :ref="el => setAvatarRef(el, idx + 4)"
                  :class="[
                    'w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 shadow-sm flex items-center justify-center transition-all duration-300 relative',
                    hoveredIndex === idx + 4
                      ? 'border-violet-600 shadow-lg shadow-violet-500/20 ring-4 ring-violet-100 scale-105'
                      : isConnectedToHovered(idx + 4)
                        ? 'border-violet-400 shadow-md ring-2 ring-violet-50'
                        : 'border-slate-200 group-hover:border-violet-500 group-hover:shadow-md'
                  ]"
                >
                  <div class="w-16 h-16 sm:w-19 sm:h-19 rounded-full bg-gradient-to-tr from-slate-50 to-violet-50/50 flex items-center justify-center">
                    <UserIcon 
                      :class="[
                        'w-9 h-9 sm:w-11 sm:h-11 transition-colors duration-200',
                        hoveredIndex === idx + 4 || isConnectedToHovered(idx + 4) ? 'text-violet-600' : 'text-slate-400 group-hover:text-violet-600'
                      ]" 
                      aria-hidden="true" 
                    />
                  </div>
                </div>

                <!-- Nombre abajo para segunda fila -->
                <span 
                  :class="[
                    'mt-3 text-xs sm:text-sm md:text-base font-bold text-center tracking-tight transition-colors leading-tight',
                    hoveredIndex === idx + 4 ? 'text-violet-950 font-extrabold' : 'text-slate-800 group-hover:text-violet-900'
                  ]"
                >
                  {{ member.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { UserIcon } from '@heroicons/vue/24/solid'

const teamMembers = [
  { name: 'Carlos Reina' },
  { name: 'Irvin Benitez' },
  { name: 'Derek Britton' },
  { name: 'Dereck Diaz' },
  { name: 'Adrian Jimenez' },
  { name: 'Daniel Nie' },
  { name: 'Giancarlo Santillana' }
]

const row1 = teamMembers.slice(0, 4)
const row2 = teamMembers.slice(4)

const containerRef = ref(null)
const avatarRefs = ref([])
const rawPoints = ref([])
const hoveredIndex = ref(null)

const connections = [
  // Fila 1 enlaces horizontales
  [0, 1],
  [1, 2],
  [2, 3],
  // Fila 2 enlaces horizontales
  [4, 5],
  [5, 6],
  // Enlaces de red entre filas (triangulación de equipo)
  [0, 4],
  [1, 4],
  [1, 5],
  [2, 5],
  [2, 6],
  [3, 6]
]

const setAvatarRef = (el, idx) => {
  if (el) {
    avatarRefs.value[idx] = el
  }
}

const updateLines = () => {
  if (!containerRef.value) return
  const containerRect = containerRef.value.getBoundingClientRect()
  
  const points = []
  for (let i = 0; i < teamMembers.length; i++) {
    const el = avatarRefs.value[i]
    if (el) {
      const rect = el.getBoundingClientRect()
      points[i] = {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top
      }
    }
  }
  rawPoints.value = points
}

const lines = computed(() => {
  if (!rawPoints.value.length) return []
  
  return connections.map(([from, to]) => {
    const p1 = rawPoints.value[from]
    const p2 = rawPoints.value[to]
    if (!p1 || !p2) return null

    return {
      from,
      to,
      x1: p1.x,
      y1: p1.y,
      x2: p2.x,
      y2: p2.y
    }
  }).filter(Boolean)
})

const isLineActive = (line) => {
  if (hoveredIndex.value === null) return false
  return line.from === hoveredIndex.value || line.to === hoveredIndex.value
}

const isConnectedToHovered = (idx) => {
  if (hoveredIndex.value === null) return false
  return connections.some(([from, to]) => 
    (from === hoveredIndex.value && to === idx) ||
    (to === hoveredIndex.value && from === idx)
  )
}

let resizeObserver = null

onMounted(() => {
  nextTick(() => {
    updateLines()
    if (typeof ResizeObserver !== 'undefined' && containerRef.value) {
      resizeObserver = new ResizeObserver(() => {
        updateLines()
      })
      resizeObserver.observe(containerRef.value)
    }
    window.addEventListener('resize', updateLines)
  })
})

onUnmounted(() => {
  if (resizeObserver) resizeObserver.disconnect()
  window.removeEventListener('resize', updateLines)
})
</script>


