// Translation catalog. `es` is the source of truth: `en` must satisfy its
// shape, so a missing key is a type error instead of a blank string in prod.

export const WHATSAPP_NUMBER = '50760656128'
export const CONTACT_EMAIL = 'pulsestudio07@gmail.com'
export const CONTACT_PHONE = '+507 6065-6128'

export const SOCIAL_LINKS = [
  { id: 'linkedin', name: 'LinkedIn', href: 'https://www.linkedin.com/company/pulsestudio-dev' },
  { id: 'instagram', name: 'Instagram', href: 'https://www.instagram.com/pulsestudioff' },
  { id: 'tiktok', name: 'TikTok', href: 'https://www.tiktok.com/@pulsestudioff' },
] as const

export type SocialId = (typeof SOCIAL_LINKS)[number]['id']

export type ServiceId = 'network' | 'security' | 'audit' | 'software' | 'support'

const es = {
  meta: {
    title: 'PULSE | Consultoría IT, Ciberseguridad y Software en Panamá',
    description:
      'Consultoría tecnológica para empresas en Panamá: redes, ciberseguridad, auditoría IT, soporte administrado y software a la medida. Diagnóstico inicial sin costo.',
    ogLocale: 'es_PA',
    htmlLang: 'es-PA',
    notFoundTitle: '404 — Página no encontrada | PULSE',
  },
  a11y: {
    skipToContent: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    mainNav: 'Navegación principal',
    language: 'Idioma',
    home: 'PULSE — Inicio',
    logoAlt: 'Logo de PULSE',
    consoleLabel: 'Ilustración: panel de estado operativo que PULSE mantiene',
    socialPrefix: 'PULSE en',
  },
  nav: {
    tagline: 'Consultoría IT · Panamá',
    services: 'Servicios',
    process: 'Proceso',
    products: 'Productos',
    about: 'Nosotros',
    faq: 'FAQ',
    contact: 'Contacto',
    cta: 'Agendar diagnóstico',
  },
  hero: {
    eyebrow: 'Consultoría tecnológica en Panamá',
    titleStart: 'Tecnología que mantiene',
    titleAccent: 'el pulso',
    titleEnd: 'de tu empresa.',
    subtitle:
      'Diseñamos, protegemos y sostenemos la infraestructura, la seguridad y el software que tu operación necesita. Un solo equipo, de punta a punta, con atención remota y en sitio en todo Panamá.',
    primaryCta: 'Agendar diagnóstico gratuito',
    secondaryCta: 'Escribir por WhatsApp',
    note: 'Sin compromiso · Diagnóstico inicial sin costo',
    whatsappText: 'Hola PULSE, quiero consultar sobre sus servicios.',
    console: {
      title: 'Estado operativo',
      badge: 'En línea',
      caption: 'Lo que cuidamos por ti',
      rows: [
        { label: 'Red e infraestructura', status: 'Estable' },
        { label: 'Ciberseguridad', status: 'Protegido' },
        { label: 'Respaldos', status: 'Al día' },
        { label: 'Soporte técnico', status: 'Disponible' },
      ],
      footer: 'Monitoreo, mantenimiento y respuesta en un solo lugar.',
    },
  },
  trust: [
    'Diagnóstico inicial sin costo',
    'Atención remota y en sitio en todo Panamá',
    'Un solo equipo para IT, seguridad y software',
    'Creadores de Maya y Stash',
    'Lun–Vie 8:00–17:00 · Sáb 8:00–12:00',
  ],
  services: {
    eyebrow: 'Servicios',
    title: 'Todo lo que tu operación tecnológica necesita, en un solo equipo.',
    subtitle:
      'Elige un frente o combínalos. Cada servicio empieza con un diagnóstico y termina con entregables claros.',
    cta: 'Hablar de mi caso',
    productsLink: 'Conoce Maya y Stash',
    items: [
      {
        id: 'network' as ServiceId,
        tag: 'Infraestructura',
        title: 'Redes e infraestructura',
        outcome: 'Conexión estable y ordenada en oficinas, locales y bodegas.',
        bullets: [
          'Cableado estructurado y racks organizados',
          'Wi-Fi empresarial con cobertura completa',
          'Enlaces seguros entre sucursales (VPN)',
        ],
      },
      {
        id: 'security' as ServiceId,
        tag: 'Seguridad',
        title: 'Ciberseguridad',
        outcome: 'Protección real contra ataques, fraudes y accesos no autorizados.',
        bullets: [
          'Firewalls y segmentación de red',
          'Antivirus corporativo y filtrado de correo y web',
          'Políticas de contraseñas y control de accesos',
        ],
      },
      {
        id: 'audit' as ServiceId,
        tag: 'Continuidad',
        title: 'Auditoría IT y respaldos',
        outcome: 'Conoces tus riesgos y tus datos siempre se pueden recuperar.',
        bullets: [
          'Revisión técnica de equipos y servidores',
          'Respaldos automáticos locales y en la nube',
          'Pruebas periódicas de restauración',
        ],
      },
      {
        id: 'software' as ServiceId,
        tag: 'Desarrollo',
        title: 'Software a la medida',
        outcome: 'Sistemas que se adaptan a tu negocio, no al revés.',
        bullets: [
          'Plataformas web y paneles administrativos',
          'Integración con facturación electrónica y contabilidad',
          'Automatización de tareas, cobros y reportes',
        ],
      },
      {
        id: 'support' as ServiceId,
        tag: 'Operaciones',
        title: 'Soporte IT administrado',
        outcome: 'Tu equipo trabaja sin interrupciones, con ayuda cuando la necesita.',
        bullets: [
          'Mesa de ayuda remota por WhatsApp y videollamada',
          'Visitas en sitio y mantenimiento preventivo',
          'Planes mensuales o atención por hora',
        ],
      },
    ],
  },
  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'Un proceso claro, de principio a fin.',
    subtitle: 'Sin sorpresas ni costos ocultos: sabes qué haremos, cuándo y por qué.',
    steps: [
      {
        title: 'Diagnóstico',
        description: 'Evaluamos tu tecnología actual y detectamos riesgos y oportunidades. Sin costo inicial.',
      },
      {
        title: 'Propuesta',
        description: 'Recibes un plan priorizado, con alcance y presupuesto claros.',
      },
      {
        title: 'Implementación',
        description: 'Ejecutamos en horarios acordados para no frenar tu operación.',
      },
      {
        title: 'Acompañamiento',
        description: 'Monitoreo, mantenimiento y mejora continua mientras tu empresa crece.',
      },
    ],
  },
  engagement: {
    eyebrow: 'Modalidades',
    title: 'Trabaja con nosotros como mejor te funcione.',
    note: 'Todas las modalidades comienzan con un diagnóstico sin costo.',
    recommended: 'Recomendado',
    cta: 'Consultar',
    models: [
      {
        title: 'Proyecto',
        description:
          'Un objetivo definido con alcance y entrega cerrados: una red nueva, una auditoría o un sistema.',
        points: ['Alcance y presupuesto definidos', 'Entregables documentados', 'Ideal para implementaciones'],
        featured: false,
      },
      {
        title: 'Plan mensual',
        description:
          'Tu departamento de IT externo: soporte, mantenimiento y seguridad continua por una tarifa fija.',
        points: ['Soporte remoto y en sitio', 'Mantenimiento preventivo programado', 'Costo predecible cada mes'],
        featured: true,
      },
      {
        title: 'Por demanda',
        description: 'Atención puntual cuando surge algo: visitas o soporte por hora, sin contratos largos.',
        points: ['Sin permanencia mínima', 'Pagas solo lo que usas', 'Ideal para necesidades ocasionales'],
        featured: false,
      },
    ],
  },
  about: {
    eyebrow: 'Por qué PULSE',
    title: 'Un socio técnico, no solo un proveedor.',
    text: 'Somos un equipo panameño que combina consultoría, operación y desarrollo de software. Eso nos permite ver tu empresa completa: desde el cable de red hasta el sistema que usa tu equipo todos los días.',
    productsCta: 'Conoce nuestros productos',
    pillars: [
      {
        title: 'Hablamos tu idioma',
        description: 'Explicamos cada decisión en términos de negocio, sin tecnicismos innecesarios.',
      },
      {
        title: 'Prevención antes que urgencia',
        description: 'Diseñamos para que los problemas no ocurran, no solo para apagar incendios.',
      },
      {
        title: 'Un solo responsable',
        description: 'Infraestructura, seguridad y software con el mismo equipo: menos intermediarios.',
      },
      {
        title: 'Producto propio',
        description: 'Desarrollamos y operamos Maya y Stash: sabemos lo que es mantener software en producción.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que suelen preguntarnos.',
    subtitle: '¿No encuentras tu respuesta? Escríbenos y te ayudamos.',
    items: [
      {
        q: '¿Cuánto cuesta el diagnóstico inicial?',
        a: 'Nada. Evaluamos tu situación actual y te entregamos recomendaciones priorizadas, sin compromiso de contratación.',
      },
      {
        q: '¿Atienden fuera de la Ciudad de Panamá?',
        a: 'Sí. Brindamos soporte remoto en todo el país y coordinamos visitas en sitio según el proyecto. Nuestra base operativa está en Panamá Oeste.',
      },
      {
        q: '¿Trabajan con pequeñas y medianas empresas?',
        a: 'Sí. Diseñamos soluciones para PyMEs que necesitan tecnología confiable sin mantener un departamento de IT propio.',
      },
      {
        q: '¿Cuál es su horario de atención?',
        a: 'Lunes a viernes de 8:00 a 17:00 y sábados de 8:00 a 12:00. Puedes escribirnos por WhatsApp en cualquier momento y te respondemos en horario hábil.',
      },
      {
        q: '¿Cómo empiezo?',
        a: 'Completa el formulario de contacto o escríbenos por WhatsApp. Coordinamos una llamada corta para entender tu necesidad y agendamos el diagnóstico.',
      },
      {
        q: '¿Qué formas de pago aceptan?',
        a: 'Transferencia bancaria, ACH, Yappy y efectivo, en dólares (USD).',
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Cuéntanos qué necesita tu empresa.',
    subtitle:
      'Completa el formulario y se abrirá WhatsApp con tu consulta lista para enviar. Te respondemos con los próximos pasos.',
    fields: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      company: 'Empresa',
      companyPlaceholder: 'Nombre de tu empresa',
      email: 'Correo',
      optional: 'opcional',
      emailPlaceholder: 'tu@empresa.com',
      area: 'Área de interés',
      message: 'Cuéntanos brevemente',
      messagePlaceholder:
        'Ej.: necesitamos ordenar la red de la oficina y proteger los equipos de 15 colaboradores.',
    },
    otherArea: 'Productos Maya / Stash',
    submit: 'Enviar por WhatsApp',
    submitNote: 'Se abrirá WhatsApp con tu consulta. Este sitio no almacena tus datos.',
    channels: {
      whatsapp: 'WhatsApp',
      email: 'Correo',
      hours: 'Horario',
      hoursValue: 'Lun–Vie 8:00–17:00 · Sáb 8:00–12:00',
      location: 'Base operativa',
      locationValue: 'Panamá Oeste · atención en todo el país',
      social: 'Síguenos',
    },
    whatsapp: {
      intro: 'Hola PULSE, me gustaría solicitar información:',
      name: 'Nombre',
      company: 'Empresa',
      email: 'Correo',
      area: 'Área de interés',
      details: 'Detalles',
    },
  },
  fab: 'Escríbenos por WhatsApp',
  footer: {
    description:
      'Consultoría tecnológica para empresas en Panamá: infraestructura, ciberseguridad, soporte IT y software a la medida.',
    location: 'Costa Verde, La Chorrera, Panamá Oeste, Panamá',
    servicesTitle: 'Servicios',
    companyTitle: 'Empresa',
    contactTitle: 'Contacto',
    rights: 'Todos los derechos reservados.',
    backToTop: 'Volver arriba',
  },
  notFound: {
    badge: 'Error 404',
    title: 'Esta página no existe.',
    text: 'Es posible que el enlace haya cambiado o que la URL esté mal escrita. Estas son las rutas principales para que sigas navegando.',
    home: 'Volver al inicio',
    products: 'Ver productos',
    contact: 'Contactar',
    lookingFor: '¿Qué buscabas?',
  },
}

export type Messages = typeof es

const en: Messages = {
  meta: {
    title: 'PULSE | IT Consulting, Cybersecurity & Software in Panama',
    description:
      'Technology consulting for businesses in Panama: networks, cybersecurity, IT audits, managed support and custom software. Free initial assessment.',
    ogLocale: 'en_US',
    htmlLang: 'en',
    notFoundTitle: '404 — Page not found | PULSE',
  },
  a11y: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main navigation',
    language: 'Language',
    home: 'PULSE — Home',
    logoAlt: 'PULSE logo',
    consoleLabel: 'Illustration: operational status panel that PULSE maintains',
    socialPrefix: 'PULSE on',
  },
  nav: {
    tagline: 'IT Consulting · Panama',
    services: 'Services',
    process: 'Process',
    products: 'Products',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
    cta: 'Book an assessment',
  },
  hero: {
    eyebrow: 'Technology consulting in Panama',
    titleStart: 'Technology that keeps',
    titleAccent: 'the pulse',
    titleEnd: 'of your business steady.',
    subtitle:
      'We design, secure and sustain the infrastructure, security and software your operation depends on. One team, end to end, with remote and on-site service across Panama.',
    primaryCta: 'Book a free assessment',
    secondaryCta: 'Message us on WhatsApp',
    note: 'No commitment · Free initial assessment',
    whatsappText: 'Hi PULSE, I would like to ask about your services.',
    console: {
      title: 'Operational status',
      badge: 'Online',
      caption: 'What we take care of',
      rows: [
        { label: 'Network & infrastructure', status: 'Stable' },
        { label: 'Cybersecurity', status: 'Protected' },
        { label: 'Backups', status: 'Up to date' },
        { label: 'Tech support', status: 'Available' },
      ],
      footer: 'Monitoring, maintenance and response in one place.',
    },
  },
  trust: [
    'Free initial assessment',
    'Remote and on-site service across Panama',
    'One team for IT, security and software',
    'Makers of Maya and Stash',
    'Mon–Fri 8:00–17:00 · Sat 8:00–12:00',
  ],
  services: {
    eyebrow: 'Services',
    title: 'Everything your technology operation needs, from a single team.',
    subtitle:
      'Pick one area or combine them. Every engagement starts with an assessment and ends with clear deliverables.',
    cta: 'Discuss my case',
    productsLink: 'Discover Maya and Stash',
    items: [
      {
        id: 'network',
        tag: 'Infrastructure',
        title: 'Networks & infrastructure',
        outcome: 'Stable, well-organized connectivity for offices, stores and warehouses.',
        bullets: [
          'Structured cabling and organized racks',
          'Business-grade Wi-Fi with full coverage',
          'Secure links between branches (VPN)',
        ],
      },
      {
        id: 'security',
        tag: 'Security',
        title: 'Cybersecurity',
        outcome: 'Real protection against attacks, fraud and unauthorized access.',
        bullets: [
          'Firewalls and network segmentation',
          'Endpoint protection plus email and web filtering',
          'Password policies and access control',
        ],
      },
      {
        id: 'audit',
        tag: 'Continuity',
        title: 'IT audits & backups',
        outcome: 'You know your risks, and your data can always be recovered.',
        bullets: [
          'Technical review of computers and servers',
          'Automated local and cloud backups',
          'Regular restore testing',
        ],
      },
      {
        id: 'software',
        tag: 'Development',
        title: 'Custom software',
        outcome: 'Systems that adapt to your business, not the other way around.',
        bullets: [
          'Web platforms and admin dashboards',
          'Integration with e-invoicing and accounting',
          'Automation of tasks, billing and reports',
        ],
      },
      {
        id: 'support',
        tag: 'Operations',
        title: 'Managed IT support',
        outcome: 'Your team works without interruptions, with help when they need it.',
        bullets: [
          'Remote help desk via WhatsApp and video call',
          'On-site visits and preventive maintenance',
          'Monthly plans or hourly service',
        ],
      },
    ],
  },
  process: {
    eyebrow: 'How we work',
    title: 'A clear process, from start to finish.',
    subtitle: 'No surprises, no hidden costs: you know what we will do, when and why.',
    steps: [
      {
        title: 'Assessment',
        description: 'We review your current technology and identify risks and opportunities. No upfront cost.',
      },
      {
        title: 'Proposal',
        description: 'You receive a prioritized plan with a clear scope and budget.',
      },
      {
        title: 'Implementation',
        description: 'We execute on agreed schedules so your operation never stops.',
      },
      {
        title: 'Ongoing care',
        description: 'Monitoring, maintenance and continuous improvement as your business grows.',
      },
    ],
  },
  engagement: {
    eyebrow: 'Engagement models',
    title: 'Work with us in the way that suits you best.',
    note: 'Every engagement starts with a free assessment.',
    recommended: 'Recommended',
    cta: 'Ask about it',
    models: [
      {
        title: 'Project',
        description: 'A defined goal with a fixed scope and delivery: a new network, an audit or a system.',
        points: ['Defined scope and budget', 'Documented deliverables', 'Ideal for implementations'],
        featured: false,
      },
      {
        title: 'Monthly plan',
        description: 'Your outsourced IT department: support, maintenance and ongoing security for a flat fee.',
        points: ['Remote and on-site support', 'Scheduled preventive maintenance', 'Predictable monthly cost'],
        featured: true,
      },
      {
        title: 'On demand',
        description: 'Help when something comes up: visits or hourly support, with no long contracts.',
        points: ['No minimum commitment', 'Pay only for what you use', 'Ideal for occasional needs'],
        featured: false,
      },
    ],
  },
  about: {
    eyebrow: 'Why PULSE',
    title: 'A technical partner, not just a vendor.',
    text: 'We are a Panamanian team that combines consulting, operations and software development. That lets us see your whole business: from the network cable to the system your team uses every day.',
    productsCta: 'Explore our products',
    pillars: [
      {
        title: 'We speak business',
        description: 'Every decision is explained in business terms, without unnecessary jargon.',
      },
      {
        title: 'Prevention over emergencies',
        description: 'We design so problems do not happen, not just to put out fires.',
      },
      {
        title: 'One accountable team',
        description: 'Infrastructure, security and software with the same people: fewer middlemen.',
      },
      {
        title: 'We build our own products',
        description: 'We develop and run Maya and Stash, so we know what keeping software in production takes.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions we often get.',
    subtitle: 'Can’t find your answer? Message us and we will help.',
    items: [
      {
        q: 'How much does the initial assessment cost?',
        a: 'Nothing. We review your current situation and give you prioritized recommendations, with no obligation to hire us.',
      },
      {
        q: 'Do you work outside Panama City?',
        a: 'Yes. We provide remote support nationwide and schedule on-site visits depending on the project. Our operations base is in Panamá Oeste.',
      },
      {
        q: 'Do you work with small and mid-sized businesses?',
        a: 'Yes. We design solutions for SMBs that need reliable technology without running an in-house IT department.',
      },
      {
        q: 'What are your business hours?',
        a: 'Monday to Friday 8:00–17:00 and Saturday 8:00–12:00. You can message us on WhatsApp anytime and we will reply during business hours.',
      },
      {
        q: 'How do I get started?',
        a: 'Fill in the contact form or message us on WhatsApp. We set up a short call to understand your needs and schedule the assessment.',
      },
      {
        q: 'Which payment methods do you accept?',
        a: 'Bank transfer, ACH, Yappy and cash, in US dollars (USD).',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Tell us what your business needs.',
    subtitle:
      'Fill in the form and WhatsApp will open with your request ready to send. We will reply with the next steps.',
    fields: {
      name: 'Name',
      namePlaceholder: 'Your name',
      company: 'Company',
      companyPlaceholder: 'Your company name',
      email: 'Email',
      optional: 'optional',
      emailPlaceholder: 'you@company.com',
      area: 'Area of interest',
      message: 'Tell us briefly',
      messagePlaceholder: 'E.g.: we need to tidy up our office network and secure the computers of 15 employees.',
    },
    otherArea: 'Maya / Stash products',
    submit: 'Send via WhatsApp',
    submitNote: 'WhatsApp will open with your request. This site does not store your data.',
    channels: {
      whatsapp: 'WhatsApp',
      email: 'Email',
      hours: 'Hours',
      hoursValue: 'Mon–Fri 8:00–17:00 · Sat 8:00–12:00',
      location: 'Operations base',
      locationValue: 'Panamá Oeste · service nationwide',
      social: 'Follow us',
    },
    whatsapp: {
      intro: 'Hi PULSE, I would like to request information:',
      name: 'Name',
      company: 'Company',
      email: 'Email',
      area: 'Area of interest',
      details: 'Details',
    },
  },
  fab: 'Message us on WhatsApp',
  footer: {
    description:
      'Technology consulting for businesses in Panama: infrastructure, cybersecurity, IT support and custom software.',
    location: 'Costa Verde, La Chorrera, Panamá Oeste, Panama',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    contactTitle: 'Contact',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
  notFound: {
    badge: 'Error 404',
    title: 'This page does not exist.',
    text: 'The link may have changed or the URL may be misspelled. Here are the main routes so you can keep browsing.',
    home: 'Back to home',
    products: 'See products',
    contact: 'Contact us',
    lookingFor: 'What were you looking for?',
  },
}

export const messages = { es, en } as const
export type Locale = keyof typeof messages
export const LOCALES: Locale[] = ['es', 'en']
