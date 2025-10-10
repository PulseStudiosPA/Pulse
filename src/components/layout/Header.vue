<template>
  <header 
    ref="headerRef"
    class="fixed top-0 w-full z-50 transition-all duration-500 ease-out"
    :class="{ 
      'bg-[#0A0A2E]/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5': scrolled, 
      'bg-[#0A0A2E]/30 backdrop-blur-sm': !scrolled 
    }"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <a href="#home" class="header-logo flex items-center gap-3 group cursor-pointer">
          <!-- SVG Logo Inline -->
          <div class="relative w-12 h-12 flex items-center justify-center">
            <svg 
              class="w-10 h-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              viewBox="0 0 1024 736" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                opacity="1.000000" 
                stroke="none" 
                class="fill-primary transition-all duration-300 group-hover:fill-purple-400"
                d="M 252.649 334.682 C 252.648 342.515 252.719 349.849 252.623 357.181 C 252.49 367.253 247.825 371.894 237.908 371.958 C 232.242 371.994 226.574 372.044 220.909 371.951 C 217.769 371.899 215.728 372.986 214.101 375.886 C 207.754 387.205 196.31 392.318 184.686 389.361 C 172.437 386.244 164.068 375.973 163.511 363.374 C 162.995 351.698 172.415 339.641 184.406 336.63 C 196.214 333.665 208.682 339.048 213.769 350.042 C 215.906 354.661 218.709 355.855 223.426 355.729 C 239.279 355.305 237.137 357.668 237.21 341.822 C 237.324 317.49 237.543 293.151 237.096 268.826 C 236.861 255.995 246.585 245.247 257.178 242.943 C 268.79 240.418 280.987 246.53 286.396 257.967 C 289.215 263.93 288.432 270.42 288.452 276.671 C 288.63 333.336 288.616 390.002 288.662 446.668 C 288.667 452.167 288.69 457.667 288.716 463.167 C 288.753 470.828 291.904 474.668 298.097 474.616 C 303.786 474.568 307.252 470.385 307.262 463.26 C 307.305 433.427 307.315 403.594 307.295 373.761 C 307.283 355.429 307.221 337.096 307.133 318.764 C 307.073 306.188 316.007 296.726 328.041 296.72 C 339.35 296.715 347.84 305.65 347.984 317.923 C 348.103 328.088 347.998 338.256 348.028 348.422 C 348.049 355.246 348.542 355.69 355.518 355.67 C 366.351 355.64 377.204 355.184 388.013 355.682 C 409.612 356.677 429.211 341.819 437.215 321.99 C 451.681 286.146 425.689 247.361 387.036 246.803 C 384.203 246.763 381.35 246.952 378.541 246.68 C 374.085 246.248 359.193 246.831 346.733 246.77 C 336.233 246.718 325.734 246.769 315.234 246.751 C 312.348 246.746 309.59 246.356 307.44 244.085 C 303.47 239.893 304.929 233.254 310.417 231.581 C 312.759 230.867 315.341 230.705 317.816 230.698 C 340.982 230.629 364.149 230.517 387.314 230.669 C 431.97 230.962 465.592 274.556 454.704 317.88 C 446.274 351.42 420.472 371.599 385.75 371.775 C 373.583 371.837 361.416 371.899 349.25 371.85 C 338.314 371.805 332.592 366.042 332.534 355.142 C 332.471 343.476 332.447 331.81 332.452 320.144 C 332.453 316.752 332.049 313.232 327.923 313.103 C 323.559 312.966 322.745 316.501 322.743 320.125 C 322.711 366.791 322.693 413.456 322.639 460.122 C 322.635 463.28 322.613 466.472 322.184 469.59 C 320.374 482.766 309.571 491.579 296.323 490.86 C 283.34 490.156 273.622 480.348 273.362 467.085 C 273.081 452.757 273.295 438.42 273.236 424.087 C 273.03 373.26 272.799 322.433 272.574 271.606 C 272.568 270.273 272.597 268.933 272.472 267.61 C 271.955 262.166 268.247 258.704 262.96 258.66 C 257.598 258.615 253.182 262.354 252.832 267.693 C 252.527 272.341 252.675 277.021 252.67 281.687 C 252.652 299.185 252.653 316.684 252.649 334.682 Z"
              />
            </svg>
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <h2 class="text-3xl font-bold tracking-[0.15em] bg-gradient-to-r from-white via-primary to-purple-400 bg-clip-text text-transparent group-hover:from-primary group-hover:via-purple-400 group-hover:to-white transition-all duration-500">
            PULSE
          </h2>
        </a>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in navigation" 
            :key="item.name" 
            :href="item.href"
            class="nav-item relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 group py-2 uppercase tracking-wider"
          >
            {{ item.name }}
            <span class="nav-underline absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-purple-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
          </a>
        </nav>

        <!-- CTA Button Desktop -->
        <div class="hidden md:block">
          <a 
            href="#contact"
            class="group relative px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold text-sm rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
          >
            <span class="relative z-10 flex items-center gap-2">
              Contáctanos
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen" 
          class="md:hidden p-2 text-white hover:text-primary transition-colors duration-300"
        >
          <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="mobileMenuOpen" 
      class="md:hidden bg-[#0A0A2E]/98 backdrop-blur-xl border-t border-primary/10"
      v-motion
      :initial="{ opacity: 0, height: 0 }"
      :enter="{ opacity: 1, height: 'auto', transition: { duration: 300 } }"
      :leave="{ opacity: 0, height: 0, transition: { duration: 200 } }"
    >
      <div class="px-6 py-6 space-y-4">
        <a 
          v-for="(item, index) in navigation" 
          :key="item.name" 
          :href="item.href"
          @click="mobileMenuOpen = false"
          class="block text-base font-medium text-white/80 hover:text-primary transition-colors duration-300 py-3 border-b border-white/5 hover:border-primary/30 uppercase tracking-wide"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ 
            opacity: 1, 
            x: 0, 
            transition: { 
              delay: index * 100, 
              duration: 400 
            } 
          }"
        >
          {{ item.name }}
        </a>
        
        <!-- CTA Button Mobile -->
        <a 
          href="#contact"
          @click="mobileMenuOpen = false"
          class="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold text-center rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ 
            opacity: 1, 
            y: 0, 
            transition: { 
              delay: navigation.length * 100, 
              duration: 400 
            } 
          }"
        >
          Contáctanos
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const headerRef = ref(null)

const navigation = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Contacto', href: '#contact' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  if (headerRef.value) {
    // Animación de entrada del header
    gsap.from(headerRef.value, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.3
    })
    
    // Animación del logo
    gsap.from(headerRef.value.querySelector('.header-logo'), {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: 0.6
    })
    
    // Animación de los items del menú
    gsap.from(headerRef.value.querySelectorAll('.nav-item'), {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.8
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Smooth transitions */
.nav-underline {
  transform-origin: left;
}

/* Logo animation on scroll */
@keyframes pulse-glow {
  0%, 100% {
    filter: drop-shadow(0 0 5px rgba(139, 92, 246, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(139, 92, 246, 0.6));
  }
}

.header-logo:hover svg {
  animation: pulse-glow 2s ease-in-out infinite;
}
</style>
