<template>
  <footer class="bg-[#070724] border-t border-slate-800/80 py-16" role="contentinfo">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        
        <!-- Brand / About (5 cols on md+) -->
        <div class="md:col-span-5 space-y-4">
          <div class="flex items-center gap-3">
            <img 
              src="/237520570.jpeg" 
              alt="PULSE Logo" 
              class="w-8 h-8 rounded-lg object-cover shadow-sm" 
            />
            <span class="text-xl font-bold tracking-tight text-white">
              PULSE
            </span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed max-w-sm">
            Soluciones integrales de infraestructura de red, ciberseguridad, soporte técnico y desarrollo de software para empresas en Panamá.
          </p>
          <div class="text-xs text-slate-400">
            Costa Verde, La Chorrera, Panamá Oeste, Panamá
          </div>
        </div>
        
        <!-- IT Services (4 cols on md+) -->
        <div class="md:col-span-4 space-y-3">
          <h4 class="text-white font-semibold text-xs uppercase tracking-wider">Servicios IT</h4>
          <ul class="space-y-2.5 text-sm text-slate-400">
            <li>
              <a href="#services" class="hover:text-primary transition-colors">
                Redes y Servidores
              </a>
            </li>
            <li>
              <a href="#services" class="hover:text-primary transition-colors">
                Ciberseguridad
              </a>
            </li>
            <li>
              <a href="#services" class="hover:text-primary transition-colors">
                Auditoría IT
              </a>
            </li>
            <li>
              <a href="#services" class="hover:text-primary transition-colors">
                Desarrollo de Software 
              </a>
            </li>
            <li>
              <a href="#services" class="hover:text-primary transition-colors">
                Soporte Técnico 
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Contact Information (3 cols on md+) -->
        <div class="md:col-span-3 space-y-3">
          <h4 class="text-white font-semibold text-xs uppercase tracking-wider">Contacto</h4>
          <ul class="space-y-2 text-sm text-slate-400">
            <li>Lunes a Viernes: 8:00am - 5:00pm</li>
            <li>Sabados: 8:00am - 12:00pm</li>
            <li>Celular: +507 6065-6128</li>
            <li>Correo: pulsestudio07@gmail.com</li>
            <li class="pt-2">
              <a 
                href="#contact" 
                class="inline-block px-3.5 py-1.5 rounded-lg bg-primary hover:bg-violet-700 text-xs font-semibold text-white transition-colors shadow-sm"
              >
                Solicitar Propuesta
              </a>
            </li>
          </ul>
        </div>

      </div>
      
      <!-- Footer Copyright -->
      <div class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <p>
          &copy; {{ currentYear }} PULSE. Todos los derechos reservados.
        </p>
        <div class="flex flex-wrap gap-4 sm:gap-6">
          <a href="#productos" class="hover:text-white transition-colors">Productos</a>
          <a href="#about" class="hover:text-white transition-colors">Sobre Nosotros</a>
          <span>Costa Verde, La Chorrera, Panamá Oeste, Panamá </span>
          <a href="#home" class="hover:text-white transition-colors">Volver arriba &uarr;</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

