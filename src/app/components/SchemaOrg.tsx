const SITE_URL = "https://devben.github.io/per-questions";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Prepara tu PER",
  url: SITE_URL,
  description:
    "Practica el examen PER con más de 600 preguntas de exámenes oficiales desde 2015 hasta 2024. Gratis, sin registro.",
  inLanguage: "es",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/quiz`,
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuántas preguntas tiene el examen PER?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El examen PER consta de 45 preguntas tipo test distribuidas en 11 temas: Nomenclatura Náutica, Elementos de Amarre y Fondeo, Seguridad en el Mar, Legislación, Balizamiento, Reglamento de Abordaje, Maniobras y Navegación, Emergencias en la Mar, Meteorología, Teoría de Navegación y Carta de Navegación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es gratis practicar el examen PER en este sitio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, completamente gratis. No es necesario registrarse ni crear una cuenta. Puedes practicar con más de 600 preguntas de exámenes oficiales desde 2015 hasta 2024 sin ningún coste.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué nota se necesita para aprobar el examen PER?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para aprobar el examen PER se necesita responder correctamente al menos el 60% de las preguntas, es decir, un mínimo de 27 respuestas correctas sobre 45.",
      },
    },
    {
      "@type": "Question",
      name: "¿Desde qué año hay preguntas de exámenes PER disponibles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Este sitio incluye preguntas de exámenes PER oficiales desde 2015 hasta 2024, con múltiples convocatorias por año.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo practicar el examen PER desde el móvil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, el sitio está diseñado para funcionar perfectamente en dispositivos móviles, tablets y ordenadores.",
      },
    },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Preparación Examen PER – Patrón de Embarcaciones de Recreo",
  description:
    "Practica con preguntas reales de exámenes PER oficiales desde 2015 hasta 2024. Test interactivos con corrección inmediata.",
  provider: {
    "@type": "Organization",
    name: "Prepara tu PER",
    url: SITE_URL,
  },
  url: `${SITE_URL}/quiz`,
  inLanguage: "es",
  isAccessibleForFree: true,
  educationalLevel: "Intermediate",
  teaches: "Patrón de Embarcaciones de Recreo",
};

export default function SchemaOrg() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
    </>
  );
}
