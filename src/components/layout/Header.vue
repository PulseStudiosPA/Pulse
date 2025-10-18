<template>
  <header 
    ref="headerRef"
    class="header fixed top-0 w-full z-50 transition-all duration-500 ease-out transform translate-y-0"
    :class="{ 
      'header-scrolled': scrolled, 
      'header-top': !scrolled 
    }"
    role="banner"
  >
    <!-- Animated gradient border -->
    <div class="header-border absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
      <div class="border-gradient absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500" :class="{ 'opacity-100': scrolled }"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-center header-inner" style="height:var(--header-height)">
        <!-- Logo with enhanced effects -->
        <a 
          href="#home" 
          class="header-logo flex items-center gap-3 group cursor-pointer relative" 
          aria-label="PULSE - Inicio"
          @click.prevent="scrollToTop"
        >
          <!-- SVG Logo with enhanced animations -->
          <div class="logo-container relative w-20 h-20 flex items-center justify-center">
            <svg 
              class="logo-svg w-18 h-18 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" 
              viewBox="0 0 1024 736" 
              xmlns="http://www.w3.org/2000/svg" 
              role="img" 
              aria-hidden="false"
            >
              <path 
                class="logo-path fill-primary transition-all duration-500 group-hover:fill-purple-400" 
                d="M 252.649 334.682 C 252.648 342.515 252.719 349.849 252.623 357.181 C 252.49 367.253 247.825 371.894 237.908 371.958 C 232.242 371.994 226.574 372.044 220.909 371.951 C 217.769 371.899 215.728 372.986 214.101 375.886 C 207.754 387.205 196.31 392.318 184.686 389.361 C 172.437 386.244 164.068 375.973 163.511 363.374 C 162.995 351.698 172.415 339.641 184.406 336.63 C 196.214 333.665 208.682 339.048 213.769 350.042 C 215.906 354.661 218.709 355.855 223.426 355.729 C 239.279 355.305 237.137 357.668 237.21 341.822 C 237.324 317.49 237.543 293.151 237.096 268.826 C 236.861 255.995 246.585 245.247 257.178 242.943 C 268.79 240.418 280.987 246.53 286.396 257.967 C 289.215 263.93 288.432 270.42 288.452 276.671 C 288.63 333.336 288.616 390.002 288.662 446.668 C 288.667 452.167 288.69 457.667 288.716 463.167 C 288.753 470.828 291.904 474.668 298.097 474.616 C 303.786 474.568 307.252 470.385 307.262 463.26 C 307.305 433.427 307.315 403.594 307.295 373.761 C 307.283 355.429 307.221 337.096 307.133 318.764 C 307.073 306.188 316.007 296.726 328.041 296.72 C 339.35 296.715 347.84 305.65 347.984 317.923 C 348.103 328.088 347.998 338.256 348.028 348.422 C 348.049 355.246 348.542 355.69 355.518 355.67 C 366.351 355.64 377.204 355.184 388.013 355.682 C 409.612 356.677 429.211 341.819 437.215 321.99 C 451.681 286.146 425.689 247.361 387.036 246.803 C 384.203 246.763 381.35 246.952 378.541 246.68 C 374.085 246.248 359.193 246.831 346.733 246.77 C 336.233 246.718 325.734 246.769 315.234 246.751 C 312.348 246.746 309.59 246.356 307.44 244.085 C 303.47 239.893 304.929 233.254 310.417 231.581 C 312.759 230.867 315.341 230.705 317.816 230.698 C 340.982 230.629 364.149 230.517 387.314 230.669 C 431.97 230.962 465.592 274.556 454.704 317.88 C 446.274 351.42 420.472 371.599 385.75 371.775 C 373.583 371.837 361.416 371.899 349.25 371.85 C 338.314 371.805 332.592 366.042 332.534 355.142 C 332.471 343.476 332.447 331.81 332.452 320.144 C 332.453 316.752 332.049 313.232 327.923 313.103 C 323.559 312.966 322.745 316.501 322.743 320.125 C 322.711 366.791 322.693 413.456 322.639 460.122 C 322.635 463.28 322.613 466.472 322.184 469.59 C 320.374 482.766 309.571 491.579 296.323 490.86 C 283.34 490.156 273.622 480.348 273.362 467.085 C 273.081 452.757 273.295 438.42 273.236 424.087 C 273.03 373.26 272.799 322.433 272.574 271.606 C 272.568 270.273 272.597 268.933 272.472 267.61 C 271.955 262.166 268.247 258.704 262.96 258.66 C 257.598 258.615 253.182 262.354 252.832 267.693 C 252.527 272.341 252.675 277.021 252.67 281.687 C 252.652 299.185 252.653 316.684 252.649 334.682 Z"
              />
            </svg>
            <!-- Multi-layer glow effects -->
            <div class="logo-glow-1 absolute inset-0 bg-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="logo-glow-2 absolute inset-0 bg-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="logo-pulse absolute inset-0 bg-cyan-400/10 rounded-full blur-lg animate-pulse-slow"></div>
          </div>

          <!-- Brand name with gradient text -->
          <div class="logo-text hidden sm:block">
            <span class="logo-title block text-2xl font-black tracking-wider bg-gradient-to-r from-white via-primary to-purple-400 bg-clip-text text-transparent group-hover:from-primary group-hover:via-cyan-400 group-hover:to-purple-500 transition-all duration-500">
              PULSE
            </span>
            <span class="logo-tagline block text-xs text-slate-400 tracking-widest uppercase mt-0.5 group-hover:text-cyan-400 transition-colors duration-300">
               
            </span>
          </div>
        </a>

        <!-- Desktop Menu with enhanced styling -->
        <nav class="hidden md:flex items-center space-x-1 lg:space-x-2" role="navigation" aria-label="Main navigation">
          <a 
            v-for="(item, index) in navigation" 
            :key="item.name" 
            :href="item.href"
            @click.prevent="scrollToSection(item.href)"
            class="nav-item relative px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-all duration-300 group uppercase tracking-wider rounded-lg"
            :style="{ '--item-index': index }"
          >
            <!-- Background glow on hover -->
            <span class="nav-bg absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm"></span>
            
            <!-- Text -->
            <span class="relative z-10 flex items-center gap-2">
              <span class="nav-dot w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></span>
              {{ item.name }}
            </span>
            
            <!-- Underline -->
            <span class="nav-underline absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
            
            <!-- Glow effect -->
            <span class="nav-glow absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-lg"></span>
          </a>
        </nav>

        <!-- Mobile Menu Button with animation -->
        <button 
          @click="toggleMobileMenu" 
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-menu"
          class="mobile-menu-btn md:hidden relative p-2 text-white hover:text-primary transition-colors duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 group"
          title="Menú"
        >
          <!-- Animated background -->
          <span class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
          
          <!-- Hamburger icon with animation -->
          <div class="relative w-6 h-6 flex items-center justify-center">
            <span class="hamburger-line hamburger-line-1 absolute w-6 h-0.5 bg-current rounded-full transition-all duration-300" :class="{ 'hamburger-active-1': mobileMenuOpen }"></span>
            <span class="hamburger-line hamburger-line-2 absolute w-6 h-0.5 bg-current rounded-full transition-all duration-300" :class="{ 'hamburger-active-2': mobileMenuOpen }"></span>
            <span class="hamburger-line hamburger-line-3 absolute w-6 h-0.5 bg-current rounded-full transition-all duration-300" :class="{ 'hamburger-active-3': mobileMenuOpen }"></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu with enhanced animations -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 transform -translate-y-4"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-4"
    >
      <div 
        v-if="mobileMenuOpen" 
        id="mobile-menu"
        class="mobile-menu md:hidden absolute top-full left-0 w-full bg-[#0A0A2E]/98 backdrop-blur-2xl border-t border-primary/20 shadow-2xl shadow-primary/5"
        role="menu"
        aria-label="Mobile menu"
      >
        <!-- Animated gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        
        <div class="relative px-6 py-6 space-y-2">
          <a 
            v-for="(item, index) in navigation" 
            :key="item.name" 
            :href="item.href"
            @click="handleMobileNavClick(item.href)"
            class="mobile-nav-item group block relative overflow-hidden"
            :style="{ 
              animationDelay: `${index * 50}ms`,
              '--item-index': index 
            }"
          >
            <!-- Background -->
            <div class="relative px-4 py-4 rounded-xl bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/30 transition-all duration-300">
              <!-- Shine effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <!-- Content -->
              <div class="relative flex items-center justify-between">
                <span class="text-base font-semibold text-slate-300 group-hover:text-white transition-colors duration-300 uppercase tracking-wide">
                  {{ item.name }}
                </span>
                <svg class="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>

              <!-- Bottom glow -->
              <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>
        </div>

        <!-- Mobile menu footer -->
        <div class="px-6 pb-6 pt-4 border-t border-white/5">
          <div class="flex items-center justify-center gap-2 text-sm text-slate-500">
            <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span>Pulse   © 2024</span>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const headerRef = ref(null)
const lastScrollY = ref(0)
const headerHidden = ref(false)

const navigation = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Contacto', href: '#contact' }
]

const handleScroll = () => {
  const currentScrollY = window.scrollY
  scrolled.value = currentScrollY > 50
  
  // Header hide/show logic
  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    // Scrolling down - hide header
    if (!headerHidden.value) {
      headerHidden.value = true
      gsap.to(headerRef.value, {
        y: '-100%',
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  } else if (currentScrollY < lastScrollY.value) {
    // Scrolling up - show header
    if (headerHidden.value) {
      headerHidden.value = false
      gsap.to(headerRef.value, {
        y: '0%',
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }
  
  lastScrollY.value = currentScrollY
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToSection = (href) => {
  const sectionId = href.replace('#', '')
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 92
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleMobileNavClick = (href) => {
  mobileMenuOpen.value = false
  setTimeout(() => {
    scrollToSection(href)
  }, 300)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Initialize scroll position
  lastScrollY.value = window.scrollY
  
  if (headerRef.value) {
    // Animación del logo - MÁS SUAVE
    const logo = headerRef.value.querySelector('.header-logo')
    
    // Asegurar que el logo sea visible desde el inicio
    gsap.set(logo, { opacity: 1 })
    
    gsap.from(logo, {
      x: -30,
      duration: 1,
      ease: 'back.out(1.7)',
      delay: 0.2
    })
    
    // Animación de los items del menú - MÁS SUAVE
    const navItems = headerRef.value.querySelectorAll('.nav-item')
    
    // Asegurar que los items del menú sean visibles desde el inicio
    gsap.set(navItems, { opacity: 1 })
    
    gsap.from(navItems, {
      y: -20,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.4
    })

    // Animación del botón mobile - MÁS SUAVE
    const mobileBtn = headerRef.value.querySelector('.mobile-menu-btn')
    
    // Asegurar que el botón mobile sea visible desde el inicio
    gsap.set(mobileBtn, { opacity: 1, scale: 1 })
    
    gsap.from(mobileBtn, {
      scale: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
      delay: 0.5
    })

    // Efecto de pulso continuo en el logo
    gsap.to(headerRef.value.querySelector('.logo-pulse'), {
      scale: 1.2,
      opacity: 0,
      duration: 2,
      repeat: -1,
      ease: 'power2.out'
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Header base styles */
.header {
  --header-height: 92px;
  will-change: transform;
  transition: transform 0.3s ease-out;
}

.header-top {
  background: rgba(10, 10, 46, 0.7);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

.header-scrolled {
  background: rgba(10, 10, 46, 0.95);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  -webkit-box-shadow: 0 10px 30px -10px rgba(34, 211, 238, 0.1);
  box-shadow: 0 10px 30px -10px rgba(34, 211, 238, 0.1);
}

.header-inner {
  height: var(--header-height);
}

/* Animated border gradient */
.border-gradient {
  animation: borderSlide 3s ease-in-out infinite;
}

@keyframes borderSlide {
  0%, 100% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
}

/* Logo animations */
.logo-container {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.logo-svg {
  filter: drop-shadow(0 4px 12px rgba(34, 211, 238, 0.3));
  -webkit-transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.header-logo:hover .logo-svg {
  filter: drop-shadow(0 8px 24px rgba(34, 211, 238, 0.6)) drop-shadow(0 0 30px rgba(147, 51, 234, 0.4));
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

/* Logo text */
.logo-title {
  letter-spacing: 0.15em;
  text-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
}

.logo-tagline {
  letter-spacing: 0.2em;
}

/* Navigation items */
.nav-item {
  position: relative;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.nav-item::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(147, 51, 234, 0.1));
  opacity: 0;
  transition: opacity 0.3s;
}

.nav-item:hover::before {
  opacity: 1;
}

.nav-dot {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nav-underline {
  transform-origin: center;
}

/* Hamburger animation */
.hamburger-line-1 {
  transform: translateY(-6px);
}

.hamburger-line-3 {
  transform: translateY(6px);
}

.hamburger-active-1 {
  transform: translateY(0) rotate(45deg);
}

.hamburger-active-2 {
  opacity: 0;
  transform: scale(0);
}

.hamburger-active-3 {
  transform: translateY(0) rotate(-45deg);
}

/* Mobile menu */
.mobile-menu {
  max-height: calc(100vh - var(--header-height));
  overflow-y: auto;
}

.mobile-nav-item {
  animation: slideInFromLeft 0.4s ease-out forwards;
  opacity: 0;
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Focus styles for accessibility */
.nav-item:focus-visible,
.mobile-menu-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.4);
  border-radius: 0.5rem;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .logo-container {
    width: 3.5rem;
    height: 3.5rem;
  }

  .logo-svg {
    width: 3rem;
    height: 3rem;
  }

  .header {
    --header-height: 72px;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Performance optimizations */
.header,
.logo-container,
.nav-item,
.mobile-menu {
  will-change: transform;
}
</style>