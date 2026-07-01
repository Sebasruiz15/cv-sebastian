export const DATA = {
  name:     "Juan Sebastian",
  lastName: "Ruiz Loaiza",
  initials: "JS",
  title:    "Técnico en Análisis de Programación y Software",
  tagline:  "Apasionado por el desarrollo web moderno y la automatización de procesos.",
  cc:       "1036399377",
  phone:    "3196268341",
  email:    "sebasruizloaiza@gmail.com",
  linkedin: "https://linkedin.com/in/sebastian-ruiz-loaiza",
  github:   "https://github.com/Sebasruiz15",
  location: "Medellín, Colombia",

  about:
    "Técnico en Análisis de Programación y Software con más de 12 años de experiencia " +
    "en telecomunicaciones y un creciente enfoque en el desarrollo web moderno. " +
    "Me apasiona construir soluciones informáticas que optimicen procesos y generen valor real. " +
    "Orientado al logro, proactivo, con alta capacidad de adaptación y trabajo en equipo.",

  stats: [
    { n: "12+", label: "Años exp." },
    { n: "8",   label: "Tec. web"  },
    { n: "3",   label: "Empresas"  },
  ],

  skills: {
    web: [
      { name: "HTML5",           level: 45 },
      { name: "CSS3",            level: 45 },
      { name: "JavaScript",      level: 35 },
      { name: "React.js",        level: 28 },
      { name: "Tailwind CSS",    level: 30 },
      { name: "Angular",         level: 30 },
      { name: "Node.js",         level: 25 },
      { name: "Consumo de APIs", level: 35 },
    ],
    db: [
      { name: "SQL / MySQL", level: 30 },
    ],
    otros: [
      { name: "PHP",               level: 40 },
      { name: "C# / Visual Basic", level: 70 },
      { name: "Windows Forms",     level: 72 },
      { name: "SAP",               level: 68 },
      { name: "Excel Avanzado",    level: 75 },
      { name: "Git / GitHub",      level: 35 },
    ],
    redes: [
      { name: "Redes HFC",      level: 90 },
      { name: "Radioenlace",    level: 85 },
      { name: "Config. Router", level: 82 },
    ],
  },

  soft: [
    "Trabajo en equipo",
    "Comunicación asertiva",
    "Proactividad",
    "Orientado al logro",
    "Alta recursividad",
    "Aprendizaje continuo",
  ],

  experiencia: [
    {
      rol:      "Desarrollador de Medios Digitales",
      empresa:  "VIBORAL TELECOMUNICACIONES S.A.",
      fecha:    "Abr 2025 – Presente",
      desc:
        "Desarrollo e implementación de soluciones digitales para la empresa, " +
        "incluyendo sitio web corporativo y portal web para clientes.",
      funciones: [
        "Desarrollo y mantenimiento del sitio web corporativo",
        "Desarrollo del portal web del asociado (app web)",
        "Consumo e integración de APIs externas",
        "Gestión de contenidos y mejoras continuas en plataformas digitales",
      ],
      logro:
        "Implementación exitosa de sitio web y app web con Angular y consumo de APIs, " +
        "mejorando la experiencia digital de los clientes.",
      tags: ["Angular", "APIs", "HTML", "CSS", "JavaScript"],
    },
    {
      rol:      "Aprendiz Calidad – Software",
      empresa:  "PREBEL S.A.",
      fecha:    "Jul 2024 – Ene 2025",
      desc:
        "Automatización de procesos de calidad mediante Visual Basic, Windows Forms y SAP, " +
        "logrando una reducción significativa en tiempos operativos.",
      funciones: [
        "Diseño de planes de inspección de calidad",
        "Manejo de Excel avanzado, Visual Basic, Windows Forms y SAP",
        "Documentación técnica de procesos internos",
        "Desarrollo de flujos automatizados de reportes",
      ],
      logro:
        "Automatización con Windows Forms + SAP para reducción de tiempos en procesos internos.",
      tags: ["Visual Basic", "Windows Forms", "SAP", "Excel"],
    },
    {
      rol:      "Técnico en Telecomunicaciones",
      empresa:  "VIBORAL TELECOMUNICACIONES S.A.",
      fecha:    "Feb 2013 – Jul 2024",
      desc:
        "Más de 11 años de experiencia técnica en mantenimiento de infraestructura de red HFC, " +
        "instalaciones de internet por radioenlace y soporte al usuario.",
      funciones: [
        "Mantenimiento preventivo y correctivo de redes HFC",
        "Instalaciones de internet por radioenlace",
        "Configuración de routers y equipos de red",
        "Atención técnica y soporte al usuario final",
      ],
      logro:
        "Reducción de fallas en red HFC mediante planes de mantenimiento preventivo estructurados.",
      tags: ["Redes HFC", "Radioenlace", "Routers", "Soporte técnico"],
    },
  ],

  formacion: [
    {
      titulo: "Técnico en Análisis de Programación y Software",
      inst:   "Formación Técnica",
      tipo:   "Título principal",
      icon:   "Monitor",
    },
    {
      titulo: "Desarrollo Web Completo — HTML5, CSS3, JS, AJAX, PHP, MySQL",
      inst:   "Udemy",
      tipo:   "Curso complementario",
      icon:   "Globe",
    },
    {
      titulo: "Redes y Medios de Transmisión",
      inst:   "SENA · 2023",
      tipo:   "Certificación técnica",
      icon:   "Wifi",
    },
  ],

  proyectos: [
    {
      nombre:  "Sitio Web Corporativo",
      empresa: "Viboral Telecomunicaciones",
      desc:    "Página web institucional del proveedor líder de internet y televisión en El Carmen de Viboral. Incluye planes, canal local, contacto y pasarela de pagos PSE.",
      tags:    ["HTML", "CSS", "JavaScript", "Responsive"],
      link:    "https://viboraltelecomunicaciones.com/",
      status:  "En vivo",
      preview: "viboraltelecomunicaciones.com",
    },
    {
      nombre:  "Portal del Asociado",
      empresa: "Viboral Telecomunicaciones",
      desc:    "Oficina virtual para que los clientes gestionen su cuenta, consulten facturas y administren sus servicios de internet y televisión en línea.",
      tags:    ["Angular", "APIs", "JavaScript", "Portal"],
      link:    "https://app.viboraltelecomunicaciones.com/",
      status:  "En vivo",
      preview: "app.viboraltelecomunicaciones.com",
    },
    {
      nombre:  "Automatización SAP + Windows Forms",
      empresa: "PREBEL S.A.",
      desc:    "Integra Visual Basic, Windows Forms y SAP para gestionar y reportar procesos de calidad, reduciendo tiempos operativos considerablemente.",
      tags:    ["Visual Basic", "Windows Forms", "SAP", "Excel"],
      link:    "https://github.com/Sebasruiz15/Windows-forms",
      status:  "Completado",
      preview: "github.com/Sebasruiz15",
    },
  ],
};
