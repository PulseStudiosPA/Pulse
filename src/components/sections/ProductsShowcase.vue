<template>
  <section id="products" class="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <div class="inline-flex items-center px-3 py-1 rounded-md bg-violet-50 border border-violet-200/80 text-xs font-semibold text-violet-700">
          Software Operativo Propietario
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Plataformas especializadas para logística y almacenamiento
        </h2>
        <p class="text-slate-600 text-base leading-relaxed">
          Diseñamos soluciones de software enfocadas en resolver los dolores operativos reales de las empresas: desde la gestión de rutas y despachos de última milla, hasta el control milimétrico de inventario en bodegas.
        </p>
      </div>

      <!-- Two Clean Corporate Product Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <!-- MAYA CARD -->
        <div class="rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-violet-300 p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold uppercase tracking-wider text-violet-700 bg-violet-100/80 px-2.5 py-1 rounded border border-violet-200">
                Logística y Distribución
              </span>
              <span class="text-xs text-slate-500 font-medium">Web + App Móvil</span>
            </div>

            <h3 class="text-2xl sm:text-3xl font-bold text-slate-900">
              Maya — Software de Última Milla
            </h3>
            
            <p class="text-slate-600 text-sm leading-relaxed">
              Resuelve el descontrol en los despachos diarios. Maya permite organizar las entregas de tu flota, optimizar secuencias de recorrido y brindar a tus clientes seguimiento en tiempo real.
            </p>

            <div class="space-y-2.5 pt-2 text-sm text-slate-600">
              <div class="flex items-start gap-2.5">
                <span class="text-primary font-bold mt-0.5">•</span>
                <span><strong class="text-slate-900">Planificación de rutas:</strong> Reduce kilómetros recorridos y tiempos de entrega.</span>
              </div>
              <div class="flex items-start gap-2.5">
                <span class="text-primary font-bold mt-0.5">•</span>
                <span><strong class="text-slate-900">Aplicación para conductores:</strong> Hoja de ruta digital en iOS y Android con navegación GPS.</span>
              </div>
              <div class="flex items-start gap-2.5">
                <span class="text-primary font-bold mt-0.5">•</span>
                <span><strong class="text-slate-900">Rastreo para el cliente:</strong> Enlace público donde el destinatario verifica el estado del envío.</span>
              </div>
              <div class="flex items-start gap-2.5">
                <span class="text-primary font-bold mt-0.5">•</span>
                <span><strong class="text-slate-900">Comprobante de entrega digital:</strong> Captura de firma en pantalla y fotografías de respaldo.</span>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-200 flex items-center justify-between">
            <a 
              href="#contact" 
              class="px-5 py-2.5 bg-primary hover:bg-violet-700 text-white font-semibold text-xs rounded-lg transition-colors inline-block shadow-sm"
            >
              Solicitar Demostración de Maya
            </a>
            <span class="text-xs text-slate-500">Implementación personalizada</span>
          </div>
        </div>

        <!-- STASH CARD -->
        <div class="rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-violet-300 p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold uppercase tracking-wider text-violet-700 bg-violet-100/80 px-2.5 py-1 rounded border border-violet-200">
                Gestión de Almacenes (WMS)
              </span>
              <span class="text-xs text-slate-500 font-medium">Control de Stock</span>
            </div>

            <h3 class="text-2xl sm:text-3xl font-bold text-slate-900">
              Stash — Software para Bodegas
            </h3>
            
            <p class="text-slate-600 text-sm leading-relaxed">
              Elimina los descuadres de mercancía física versus sistema. Stash organiza cada metro cuadrado de tu bodega mediante ubicaciones codificadas y lectura rápida por código de barras.
            </p>

            <div class="space-y-2.5 pt-2 text-sm text-slate-600">
              <div class="flex items-start gap-2.5">
                <span class="text-primary font-bold mt-0.5">•</span>
                <span><strong class="text-slate-900">Inventario en tiempo real:</strong> Registro automático de entradas, salidas y transferencias.</span>
              </div>
              <div class="flex items-start gap-2.5">
                <span class="text-primary font-bold mt-0.5">•</span>
                <span><strong class="text-slate-900">Zonificación de racks y pasillos:</strong> Asignación exacta de ubicación por nivel y estantería.</span>
              </div>
              <div class="flex items-start gap-2.5">
                <span class="text-primary font-bold mt-0.5">•</span>
                <span><strong class="text-slate-900">Recepción y picking con escáner:</strong> Operación móvil para evitar despachos erróneos.</span>
              </div>
              <div class="flex items-start gap-2.5">
                <span class="text-primary font-bold mt-0.5">•</span>
                <span><strong class="text-slate-900">Alertas de existencias mínimas:</strong> Avisos predictivos de reorden para evitar quiebres de stock.</span>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-200 flex items-center justify-between">
            <a 
              href="#contact" 
              class="px-5 py-2.5 bg-primary hover:bg-violet-700 text-white font-semibold text-xs rounded-lg transition-colors inline-block shadow-sm"
            >
              Solicitar Demostración de Stash
            </a>
            <span class="text-xs text-slate-500">Adaptable a tu ERP</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>
