// Catalog for the Productos view. Kept apart from messages.ts so it ships in
// the lazy ProductosView chunk instead of the initial bundle.
import { computed } from 'vue'
import { useI18n, type Locale } from './index'

type Feature = { title: string; body: string }

type Module = {
  product: 'Maya' | 'Stash IMS'
  category: string
  title: string
  shortSummary: string
  tagline: string
  description: string
  bullets: string[]
  pain: string
  benefit: string
  cta: string
  whatsappText: string
}

const es = {
  back: 'Volver al inicio',
  eyebrow: 'Productos · PULSE',
  h1Start: 'Maya y Stash en Panamá:',
  h1Accent: 'software operativo para que nunca pierdas ventas ni tiempo.',
  // Rendered as segments so the bold keywords survive translation.
  intro: [
    { text: 'Maya', strong: true },
    { text: ' optimiza tu ' },
    { text: 'última milla', strong: true },
    { text: ' con rutas inteligentes, prueba de entrega digital y rastreo en vivo para el destinatario. ' },
    { text: 'Stash IMS', strong: true },
    {
      text: ' controla inventarios, bodegas y transferencias con alertas predictivas e integración nativa con Alegra. Software SaaS desarrollado en Panamá para PyMEs.',
    },
  ] as { text: string; strong?: boolean }[],
  maya: {
    tag: 'Logística y despachos',
    subtitle: 'Plataforma de última milla',
    description:
      'Maya coordina a tus operadores de despacho, conductores y destinatarios finales en una sola plataforma con trazabilidad total y optimización inteligente.',
    features: [
      { title: 'Rutas optimizadas con IA', body: 'Ordena las entregas por secuencia lógica para ahorrar hasta 25% en combustible.' },
      { title: 'App móvil para transportistas', body: 'Hojas de ruta digitales en el celular con navegación y estado de cada entrega.' },
      { title: 'Prueba de entrega digital (POD)', body: 'Firma en pantalla del cliente y fotos de respaldo con hora y geolocalización.' },
      { title: 'Portal de rastreo al destinatario', body: 'Enlace público donde tu cliente ve el mapa en vivo sin necesidad de llamar a tu oficina.' },
    ] as Feature[],
    cta: 'Solicitar demostración de Maya',
    whatsappText: 'Hola PULSE, deseo solicitar una demostración comercial de Maya (software de última milla).',
  },
  stash: {
    tag: 'Inventarios y WMS',
    subtitle: 'Control total de inventario para PyMEs en Panamá',
    description:
      'Stash IMS te avisa antes de que te quedes sin producto. Controla stock, bodegas, sucursales y transferencias internas sin hojas de cálculo confusas.',
    features: [
      { title: 'Inventario en tiempo real', body: 'Conteo automático por cajas y unidades sueltas con búsqueda instantánea por SKU.' },
      { title: 'Alertas preventivas de reorden', body: 'Notificaciones cuando el stock baja del nivel mínimo para pedir a tiempo a proveedores.' },
      { title: 'Tablero de transferencias (Kanban)', body: 'Flujo claro de 4 etapas entre bodega y tienda; el stock solo se descuenta al entregar.' },
      { title: 'Integración con Alegra', body: 'Sincronización automática con tu facturación para rebajar stock sin doble digitación.' },
    ] as Feature[],
    cta: 'Solicitar demostración de Stash',
    website: 'Ver sitio web',
    whatsappText: 'Hola PULSE, deseo solicitar una demostración comercial de Stash IMS (software de inventarios).',
  },
  modules: {
    eyebrow: 'Módulos detallados',
    title: 'Explora las funcionalidades clave de cada plataforma.',
    subtitle:
      'Selecciona cada módulo en el panel para conocer el impacto operativo y la tecnología que pondrás a trabajar en tu empresa.',
    listLabel: 'Módulos operativos',
    hint: 'Haz clic en un módulo para ver su alcance técnico.',
    scopeLabel: 'Alcance operativo y capacidades',
    painLabel: 'Dolor que elimina',
    benefitLabel: 'Beneficio de negocio',
    integrationNote: 'Integración personalizada con tus operaciones actuales',
    prev: 'Módulo anterior',
    next: 'Módulo siguiente',
    goTo: 'Ir al módulo',
    items: [
      {
        product: 'Maya',
        category: 'Última milla',
        title: 'Planificación de rutas y despachos',
        shortSummary: 'Organización de recorridos y asignación a flota.',
        tagline: 'Despacha más rápido',
        description:
          'Algoritmos inteligentes que organizan las secuencias de entrega considerando direcciones y capacidad vehicular. Reduce drásticamente los kilómetros recorridos por día y garantiza que los pedidos salgan en orden prioritario.',
        bullets: [
          'Agrupación lógica de entregas por zonas y corredores de Panamá',
          'Cálculo de secuencia para reducir tiempos de entrega',
          'Asignación directa a la flota propia o transportistas externos',
          'Alertas tempranas de ventanas de entrega en riesgo de atraso',
        ],
        pain: 'Horas perdidas armando rutas a mano o llamadas confusas a choferes.',
        benefit: 'Hasta 25% de ahorro en costos y menor desgaste de flota.',
        cta: 'Solicitar demostración',
        whatsappText: 'Hola PULSE, me interesa la planificación de rutas de Maya.',
      },
      {
        product: 'Maya',
        category: 'App transportista',
        title: 'Prueba digital de entrega (POD)',
        shortSummary: 'App para conductores con GPS, firma en pantalla y fotos.',
        tagline: 'Cero papeleo físico y evidencia instantánea de entrega',
        description:
          'Tu conductor lleva toda su jornada en su teléfono. Visualiza cada parada con un botón para abrir Waze o Google Maps y recopila la firma y foto del destinatario en el acto.',
        bullets: [
          'Hoja de ruta digital interactiva sin necesidad de imprimir manifiestos',
          'Captura de firma en pantalla táctil con validez de recepción',
          'Fotografía de respaldo del paquete entregado con marca de hora y GPS',
          'Reporte de incidentes o motivos de no entrega en tiempo real',
        ],
        pain: 'Incertidumbre durante la ruta, falta de trazabilidad y reclamos por paquetes supuestamente no entregados.',
        benefit:
          'Trazabilidad absoluta de inicio a fin y pruebas digitales (firma, foto y GPS) que certifican que el paquete llegó correctamente.',
        cta: 'Solicitar demostración',
        whatsappText: 'Hola PULSE, deseo conocer la app de conductores y POD de Maya.',
      },
      {
        product: 'Maya',
        category: 'Atención al cliente',
        title: 'Portal de rastreo en vivo para destinatarios',
        shortSummary: 'Enlace público para que el cliente rastree su pedido sin llamar.',
        tagline: 'Fideliza clientes y vacía la bandeja de reclamos',
        description:
          'Envía automáticamente por WhatsApp un enlace público donde el cliente verifica el estado de su entrega, la foto de su paquete y la hora estimada de llegada.',
        bullets: [
          'Página de rastreo personalizada con la marca de tu empresa',
          'Visualización de estado: Preparando, En camino, Próximo a entregar, Completado',
          'Notificaciones automáticas y proactivas de llegada',
          'Encuesta de satisfacción de entrega de 1 a 5 estrellas',
        ],
        pain: 'Llamadas repetitivas de clientes ansiosos preguntando "¿dónde viene mi pedido?".',
        benefit: 'Mejora en más de 40% la satisfacción del cliente.',
        cta: 'Solicitar demostración',
        whatsappText: 'Hola PULSE, quiero ver el portal de rastreo de Maya.',
      },
      {
        product: 'Stash IMS',
        category: 'Control de stock',
        title: 'Inventario en tiempo real y multisede',
        shortSummary: 'Conteo exacto, catálogo por SKU y control por bodega.',
        tagline: 'Visibilidad total de existencias en cada metro cuadrado',
        description:
          'Elimina las discrepancias entre lo que dice el sistema y lo que hay en estanterías. Stash clasifica departamentos, categorías y subcategorías, y calcula automáticamente cajas y unidades sueltas sin conversiones complejas.',
        bullets: [
          'Búsqueda rápida por nombre, SKU o código de barras',
          'Diferenciación exacta entre unidades sueltas y cajas completas',
          'Administración separada de bodegas centrales y tiendas sucursales',
          'Control de capacidad física antes de recibir más mercancía de proveedores',
        ],
        pain: 'Vender productos inexistentes, conteos a ciegas y horas buscando cajas en la bodega.',
        benefit: '99% de exactitud en inventario y auditorías físicas completadas en un tercio del tiempo.',
        cta: 'Solicitar demostración',
        whatsappText: 'Hola PULSE, quiero probar el control de inventario de Stash IMS.',
      },
      {
        product: 'Stash IMS',
        category: 'Reorden y alertas',
        title: 'Alertas predictivas y tablero de transferencias',
        shortSummary: 'Avisos preventivos de stock mínimo.',
        tagline: 'Nunca más pierdas una venta por quiebre de stock',
        description:
          'Configura el nivel mínimo de seguridad de cada producto. Apenas las existencias cruzan ese umbral, Stash emite una alerta visual en el panel para reponer a tiempo. Además, gestiona los pedidos entre sucursales con un tablero Kanban transparente de 4 pasos.',
        bullets: [
          'Alertas automáticas en pantalla de productos en estado crítico',
          'Tablero de 4 etapas: Solicitado, Leído, En camino y Entregado',
          'El stock se descuenta únicamente cuando el receptor confirma la llegada',
          'Historial completo de quién pidió la mercancía, cuándo y quién la despachó',
        ],
        pain: 'Descubrir que se acabó un producto estrella cuando el cliente ya está listo para pagar.',
        benefit: 'Cero ventas perdidas por falta de existencias y control estricto de mermas internas.',
        cta: 'Solicitar demostración',
        whatsappText: 'Hola PULSE, me interesan las alertas y transferencias de Stash IMS.',
      },
      {
        product: 'Stash IMS',
        category: 'Integraciones',
        title: 'Integración automática con facturación Alegra',
        shortSummary: 'Cada venta emitida descuenta el inventario al instante.',
        tagline: 'Factura con tranquilidad sabiendo que tu stock está al día',
        description:
          'Si tu empresa utiliza Alegra para facturación electrónica o contabilidad, Stash se sincroniza de forma nativa. Cada factura o nota de entrega rebaja las unidades correspondientes sin intervención humana ni desfases.',
        bullets: [
          'Sincronización en segundo plano sin afectar la velocidad de tu punto de venta',
          'Eliminación del error humano por digitación manual de salidas',
          'Historial de movimientos enlazado al número de factura de venta',
          'Disponible en planes comerciales para bodegas y múltiples tiendas',
        ],
        pain: 'Tener que registrar la misma venta en dos sistemas o cuadrar facturas al final del mes.',
        benefit: 'Ahorro de hasta 15 horas de oficina al mes y conciliación contable sin tropiezos.',
        cta: 'Consultar demostración',
        whatsappText: 'Hola PULSE, quiero información sobre la integración de Alegra con Stash IMS.',
      },
    ] as Module[],
  },
  comparative: {
    eyebrow: 'Comparativa operativa',
    title: 'De la improvisación manual al control total.',
    subtitle:
      'El software especializado no es un gasto: es la forma más rápida de proteger tus márgenes y lograr que tus clientes vuelvan a comprarte.',
    traditionalLabel: 'Método tradicional',
    cards: [
      {
        title: 'Trazabilidad de entregas',
        traditional:
          'Desconexión entre la salida y la entrega, llamadas constantes y falta de pruebas claras si un cliente afirma no haber recibido su pedido.',
        solutionLabel: 'Con Maya',
        solution:
          'Trazabilidad total desde la salida del paquete hasta su entrega, con firma digital, fotos con GPS y confirmación inmediata en tu panel.',
      },
      {
        title: 'Control de stock y bodega',
        traditional:
          'Hojas de Excel desactualizadas, conteos manuales agotadores y productos agotados descubiertos frente al cliente.',
        solutionLabel: 'Con Stash IMS',
        solution:
          'Stock en tiempo real (cajas y unidades), alertas predictivas de reorden y conteos por código de barras desde el celular.',
      },
      {
        title: 'Transferencias y facturación',
        traditional:
          'Doble digitación manual, extravíos de mercancía entre bodegas y tiendas, y ventas de productos que ya no existen.',
        solutionLabel: 'Con Stash IMS',
        solution:
          'Tablero de 4 etapas para transferencias y rebaja de stock automática vinculada a la facturación electrónica de Alegra.',
      },
    ],
  },
  cta: {
    eyebrow: 'Demostración personalizada',
    title: '¿Quieres ver cómo funciona en la operación de tu empresa?',
    text: 'Te mostramos cómo Maya o Stash resuelven los cuellos de botella de tu negocio en Panamá.',
    itLink: '¿Necesitas también soporte IT, redes o ciberseguridad?',
    whatsapp: 'Agendar demo por WhatsApp',
    form: 'Formulario de consulta',
    whatsappText: 'Hola PULSE, deseo coordinar una demostración en vivo de sus plataformas SaaS.',
  },
  jsonLd: {
    offer: 'Solicitar demostración comercial personalizada',
    breadcrumbHome: 'Inicio',
    breadcrumbProducts: 'Productos SaaS',
    mayaDescription:
      'Software de última milla para PyMEs en Panamá: rutas optimizadas con IA, app móvil para conductores con prueba de entrega digital (POD) y portal de rastreo en vivo para destinatarios.',
    mayaFeatures: [
      'Planificación de rutas con IA',
      'App móvil para transportistas con GPS',
      'Prueba de entrega digital (POD) con firma y foto',
      'Portal de rastreo en vivo para destinatarios',
    ],
    stashDescription:
      'Sistema de gestión de inventarios (WMS) en tiempo real para PyMEs en Panamá: control de stock por SKU, alertas predictivas de reorden, tablero Kanban de transferencias e integración nativa con Alegra.',
    stashFeatures: [
      'Inventario en tiempo real multisede',
      'Alertas predictivas de reorden',
      'Tablero Kanban de transferencias en 4 etapas',
      'Integración nativa con Alegra',
    ],
    faq: [
      {
        q: '¿Qué es Maya y para qué sirve?',
        a: 'Maya es el software de última milla de PULSE para empresas en Panamá. Optimiza rutas con IA, incluye una app móvil para conductores con prueba de entrega digital (firma y foto con GPS) y un portal público de rastreo en vivo para que tus clientes vean dónde viene su pedido sin llamar a tu oficina.',
      },
      {
        q: '¿Qué es Stash IMS?',
        a: 'Stash IMS es el sistema de gestión de inventarios (WMS) de PULSE para PyMEs en Panamá. Controla stock en tiempo real por SKU, emite alertas predictivas de reorden, gestiona transferencias entre bodegas y tiendas con un tablero Kanban de 4 etapas y se integra con Alegra para que cada factura rebaje el stock automáticamente.',
      },
      {
        q: '¿Stash se integra con mi sistema de facturación Alegra?',
        a: 'Sí. Stash se sincroniza de forma nativa con Alegra. Cada factura o nota de entrega emitida en Alegra descuenta las unidades correspondientes en Stash sin digitación manual ni doble carga.',
      },
      {
        q: '¿Mis clientes pueden rastrear su pedido en tiempo real?',
        a: 'Sí. Maya envía automáticamente por WhatsApp un enlace público de rastreo donde el destinatario ve el estado de su entrega (Preparando, En camino, Próximo a entregar, Completado), la foto del paquete y la hora estimada de llegada.',
      },
    ],
  },
}

type ProductsMessages = typeof es

const en: ProductsMessages = {
  back: 'Back to home',
  eyebrow: 'Products · PULSE',
  h1Start: 'Maya and Stash in Panama:',
  h1Accent: 'operations software so you never lose sales or time.',
  intro: [
    { text: 'Maya', strong: true },
    { text: ' optimizes your ' },
    { text: 'last mile', strong: true },
    { text: ' with smart routes, digital proof of delivery and live tracking for the recipient. ' },
    { text: 'Stash IMS', strong: true },
    {
      text: ' controls inventory, warehouses and transfers with predictive alerts and native Alegra integration. SaaS built in Panama for SMBs.',
    },
  ],
  maya: {
    tag: 'Logistics & dispatch',
    subtitle: 'Last-mile platform',
    description:
      'Maya brings your dispatchers, drivers and end recipients together in a single platform with full traceability and smart optimization.',
    features: [
      { title: 'AI-optimized routes', body: 'Orders deliveries in a logical sequence to save up to 25% on fuel.' },
      { title: 'Mobile app for drivers', body: 'Digital route sheets on the phone with navigation and the status of every delivery.' },
      { title: 'Digital proof of delivery (POD)', body: 'On-screen customer signature and backup photos with time and geolocation.' },
      { title: 'Recipient tracking portal', body: 'A public link where your customer sees the live map without calling your office.' },
    ],
    cta: 'Request a Maya demo',
    whatsappText: 'Hi PULSE, I would like to request a demo of Maya (last-mile software).',
  },
  stash: {
    tag: 'Inventory & WMS',
    subtitle: 'Full inventory control for SMBs in Panama',
    description:
      'Stash IMS warns you before you run out of stock. Control inventory, warehouses, branches and internal transfers without messy spreadsheets.',
    features: [
      { title: 'Real-time inventory', body: 'Automatic counts by box and loose unit, with instant SKU search.' },
      { title: 'Preventive reorder alerts', body: 'Notifications when stock drops below the minimum so you order from suppliers on time.' },
      { title: 'Transfer board (Kanban)', body: 'A clear 4-stage flow between warehouse and store; stock is only deducted on delivery.' },
      { title: 'Alegra integration', body: 'Automatic sync with your invoicing to deduct stock without double entry.' },
    ],
    cta: 'Request a Stash demo',
    website: 'Visit website',
    whatsappText: 'Hi PULSE, I would like to request a demo of Stash IMS (inventory software).',
  },
  modules: {
    eyebrow: 'Modules in detail',
    title: 'Explore the key features of each platform.',
    subtitle: 'Select a module in the panel to see the operational impact and the technology you will put to work in your business.',
    listLabel: 'Operational modules',
    hint: 'Click a module to see its technical scope.',
    scopeLabel: 'Operational scope & capabilities',
    painLabel: 'Pain it removes',
    benefitLabel: 'Business benefit',
    integrationNote: 'Custom integration with your current operations',
    prev: 'Previous module',
    next: 'Next module',
    goTo: 'Go to module',
    items: [
      {
        product: 'Maya',
        category: 'Last mile',
        title: 'Route & dispatch planning',
        shortSummary: 'Route organization and fleet assignment.',
        tagline: 'Dispatch faster',
        description:
          'Smart algorithms that sequence deliveries based on addresses and vehicle capacity. Dramatically cuts daily mileage and ensures orders leave in priority order.',
        bullets: [
          'Logical grouping of deliveries by zones and corridors in Panama',
          'Sequence calculation to reduce delivery times',
          'Direct assignment to your own fleet or external carriers',
          'Early alerts for delivery windows at risk of delay',
        ],
        pain: 'Hours lost building routes by hand and confusing calls to drivers.',
        benefit: 'Up to 25% cost savings and less fleet wear.',
        cta: 'Request a demo',
        whatsappText: 'Hi PULSE, I am interested in Maya route planning.',
      },
      {
        product: 'Maya',
        category: 'Driver app',
        title: 'Digital proof of delivery (POD)',
        shortSummary: 'Driver app with GPS, on-screen signature and photos.',
        tagline: 'Zero paperwork and instant proof of delivery',
        description:
          'Your driver carries the whole day on their phone. They see every stop with a button to open Waze or Google Maps and capture the recipient’s signature and photo on the spot.',
        bullets: [
          'Interactive digital route sheet, no printed manifests',
          'Touchscreen signature capture as proof of receipt',
          'Backup photo of the delivered package with timestamp and GPS',
          'Real-time reporting of incidents or failed-delivery reasons',
        ],
        pain: 'Uncertainty during the route, no traceability and claims about packages supposedly never delivered.',
        benefit: 'End-to-end traceability and digital proof (signature, photo and GPS) that the package arrived correctly.',
        cta: 'Request a demo',
        whatsappText: 'Hi PULSE, I would like to learn about Maya’s driver app and POD.',
      },
      {
        product: 'Maya',
        category: 'Customer service',
        title: 'Live tracking portal for recipients',
        shortSummary: 'A public link so customers track their order without calling.',
        tagline: 'Build loyalty and empty the complaints inbox',
        description:
          'Automatically sends a public link via WhatsApp where the customer checks the delivery status, a photo of their package and the estimated arrival time.',
        bullets: [
          'Tracking page branded with your company',
          'Status view: Preparing, On the way, Arriving soon, Completed',
          'Proactive automatic arrival notifications',
          '1-to-5-star delivery satisfaction survey',
        ],
        pain: 'Repeated calls from anxious customers asking “where is my order?”.',
        benefit: 'Improves customer satisfaction by more than 40%.',
        cta: 'Request a demo',
        whatsappText: 'Hi PULSE, I would like to see Maya’s tracking portal.',
      },
      {
        product: 'Stash IMS',
        category: 'Stock control',
        title: 'Real-time, multi-location inventory',
        shortSummary: 'Exact counts, SKU catalog and per-warehouse control.',
        tagline: 'Full visibility of stock in every square meter',
        description:
          'Eliminates the gap between what the system says and what is on the shelves. Stash organizes departments, categories and subcategories, and automatically calculates boxes and loose units with no complex conversions.',
        bullets: [
          'Fast search by name, SKU or barcode',
          'Exact distinction between loose units and full boxes',
          'Separate management of central warehouses and branch stores',
          'Physical capacity control before receiving more supplier stock',
        ],
        pain: 'Selling products you do not have, blind counts and hours searching for boxes in the warehouse.',
        benefit: '99% inventory accuracy and physical audits done in a third of the time.',
        cta: 'Request a demo',
        whatsappText: 'Hi PULSE, I would like to try Stash IMS inventory control.',
      },
      {
        product: 'Stash IMS',
        category: 'Reorder & alerts',
        title: 'Predictive alerts & transfer board',
        shortSummary: 'Preventive minimum-stock warnings.',
        tagline: 'Never lose a sale to a stockout again',
        description:
          'Set a minimum safety level for each product. As soon as stock crosses it, Stash shows a visual alert on the dashboard so you restock in time. It also manages orders between branches with a transparent 4-step Kanban board.',
        bullets: [
          'Automatic on-screen alerts for products in critical status',
          '4-stage board: Requested, Read, On the way and Delivered',
          'Stock is deducted only when the receiver confirms arrival',
          'Full history of who requested the goods, when, and who shipped them',
        ],
        pain: 'Finding out a best-seller ran out when the customer is ready to pay.',
        benefit: 'Zero sales lost to stockouts and strict control of internal shrinkage.',
        cta: 'Request a demo',
        whatsappText: 'Hi PULSE, I am interested in Stash IMS alerts and transfers.',
      },
      {
        product: 'Stash IMS',
        category: 'Integrations',
        title: 'Automatic Alegra invoicing integration',
        shortSummary: 'Every sale instantly deducts inventory.',
        tagline: 'Invoice with peace of mind knowing your stock is up to date',
        description:
          'If your company uses Alegra for e-invoicing or accounting, Stash syncs natively. Every invoice or delivery note deducts the corresponding units with no human intervention or lag.',
        bullets: [
          'Background sync that does not slow down your point of sale',
          'No more human error from manual entry of outgoing stock',
          'Movement history linked to the sales invoice number',
          'Available on business plans for warehouses and multiple stores',
        ],
        pain: 'Entering the same sale in two systems or reconciling invoices at month end.',
        benefit: 'Saves up to 15 office hours a month and smooth accounting reconciliation.',
        cta: 'Ask for a demo',
        whatsappText: 'Hi PULSE, I would like information about the Alegra integration with Stash IMS.',
      },
    ],
  },
  comparative: {
    eyebrow: 'Operational comparison',
    title: 'From manual improvisation to full control.',
    subtitle:
      'Specialized software is not an expense: it is the fastest way to protect your margins and keep customers coming back.',
    traditionalLabel: 'Traditional method',
    cards: [
      {
        title: 'Delivery traceability',
        traditional:
          'A gap between dispatch and delivery, constant calls and no clear proof when a customer claims they never received their order.',
        solutionLabel: 'With Maya',
        solution:
          'Full traceability from dispatch to delivery, with digital signature, GPS photos and instant confirmation on your dashboard.',
      },
      {
        title: 'Stock & warehouse control',
        traditional: 'Outdated Excel sheets, exhausting manual counts and stockouts discovered in front of the customer.',
        solutionLabel: 'With Stash IMS',
        solution: 'Real-time stock (boxes and units), predictive reorder alerts and barcode counts from your phone.',
      },
      {
        title: 'Transfers & invoicing',
        traditional: 'Manual double entry, goods lost between warehouses and stores, and sales of products that no longer exist.',
        solutionLabel: 'With Stash IMS',
        solution: 'A 4-stage board for transfers and automatic stock deduction linked to Alegra e-invoicing.',
      },
    ],
  },
  cta: {
    eyebrow: 'Personalized demo',
    title: 'Want to see how it works in your operation?',
    text: 'We will show you how Maya or Stash remove the bottlenecks in your business in Panama.',
    itLink: 'Also need IT support, networking or cybersecurity?',
    whatsapp: 'Book a demo on WhatsApp',
    form: 'Contact form',
    whatsappText: 'Hi PULSE, I would like to schedule a live demo of your SaaS platforms.',
  },
  jsonLd: {
    offer: 'Request a personalized demo',
    breadcrumbHome: 'Home',
    breadcrumbProducts: 'SaaS products',
    mayaDescription:
      'Last-mile software for SMBs in Panama: AI-optimized routes, a driver app with digital proof of delivery (POD) and a live tracking portal for recipients.',
    mayaFeatures: [
      'AI route planning',
      'Driver mobile app with GPS',
      'Digital proof of delivery (POD) with signature and photo',
      'Live tracking portal for recipients',
    ],
    stashDescription:
      'Real-time inventory management system (WMS) for SMBs in Panama: SKU-level stock control, predictive reorder alerts, a Kanban transfer board and native Alegra integration.',
    stashFeatures: [
      'Real-time multi-location inventory',
      'Predictive reorder alerts',
      '4-stage Kanban transfer board',
      'Native Alegra integration',
    ],
    faq: [
      {
        q: 'What is Maya and what is it for?',
        a: 'Maya is PULSE’s last-mile software for businesses in Panama. It optimizes routes with AI, includes a driver app with digital proof of delivery (signature and GPS photo) and a public live tracking portal so your customers see where their order is without calling your office.',
      },
      {
        q: 'What is Stash IMS?',
        a: 'Stash IMS is PULSE’s inventory management system (WMS) for SMBs in Panama. It tracks stock in real time by SKU, issues predictive reorder alerts, manages transfers between warehouses and stores with a 4-stage Kanban board, and integrates with Alegra so every invoice deducts stock automatically.',
      },
      {
        q: 'Does Stash integrate with my Alegra invoicing?',
        a: 'Yes. Stash syncs natively with Alegra. Every invoice or delivery note issued in Alegra deducts the corresponding units in Stash with no manual entry or double work.',
      },
      {
        q: 'Can my customers track their order in real time?',
        a: 'Yes. Maya automatically sends a public tracking link via WhatsApp where the recipient sees the delivery status (Preparing, On the way, Arriving soon, Completed), a photo of the package and the estimated arrival time.',
      },
    ],
  },
}

const catalog: Record<Locale, ProductsMessages> = { es, en }

export function useProductsI18n() {
  const { locale, m } = useI18n()
  return { locale, m, p: computed(() => catalog[locale.value]) }
}
