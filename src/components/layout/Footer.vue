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

          <!-- Redes Sociales Oficiales -->
          <div class="flex items-center gap-2.5 pt-2">
            <a 
              href="https://www.linkedin.com/company/pulsestudio-dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="PULSE en LinkedIn"
              class="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/pulsestudioff" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="PULSE en Instagram"
              class="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@pulsestudioff" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="PULSE en TikTok"
              class="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/50760656128?text=Hola%20PULSE,%20deseo%20consultar%20sobre%20sus%20servicios%20IT." 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="PULSE en WhatsApp"
              class="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#25D366] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- IT Services (4 cols on md+) -->
        <div class="md:col-span-4 space-y-3">
          <h3 class="text-white font-semibold text-xs uppercase tracking-wider">Servicios IT</h3>
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
          <h3 class="text-white font-semibold text-xs uppercase tracking-wider">Contacto</h3>
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
        <div class="flex flex-wrap gap-4 sm:gap-6 items-center">
          <a href="#productos" class="hover:text-white transition-colors">Productos</a>
          <a href="#about" class="hover:text-white transition-colors">Sobre Nosotros</a>
          <a 
            href="https://www.linkedin.com/company/pulsestudio-dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/pulsestudioff" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://www.tiktok.com/@pulsestudioff" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hover:text-white transition-colors"
          >
            TikTok
          </a>
          <a 
            href="https://wa.me/50760656128?text=Hola%20PULSE,%20deseo%20consultar%20sobre%20sus%20servicios%20IT." 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
          >
            <span>WhatsApp</span>
          </a>
          <a href="#home" class="hover:text-white transition-colors">Volver arriba &uarr;</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

