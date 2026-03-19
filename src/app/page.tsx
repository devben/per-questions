import Link from "next/link";
import AffiliateProducts from "./components/AffiliateProducts";
import {
  FadeInUp,
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "./components/MotionWrappers";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚓</span>
              <span className="font-bold text-gray-900 dark:text-white text-lg tracking-tight">Prepara tu PER</span>
            </div>
            <Link
              href="/quiz"
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-colors duration-200 text-sm"
            >
              Practicar ahora →
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div className="relative min-h-screen flex items-end pt-16 overflow-hidden">
        {/* Background image – positioned to show the sky & boat in upper half */}
        <div
          className="absolute inset-0 bg-cover bg-[center_30%] bg-no-repeat scale-105"
          style={{ backgroundImage: 'url("./images/sailboat.jpg")' }}
        />
        {/* Gradient: keep sky clear at top, fade to solid for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 via-sky-900/40 to-slate-900/95" />

        {/* Badge near top */}
        <FadeIn delay={0.3} className="absolute top-24 sm:top-28 left-1/2 -translate-x-1/2 z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white/90 border border-white/20 px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg whitespace-nowrap">
            <span>⛵</span>
            <span>Patrón de Embarcaciones de Recreo</span>
          </div>
        </FadeIn>

        <div className="relative z-10 w-full text-center px-4 sm:px-6 max-w-4xl mx-auto pb-24 pt-48 sm:pt-56">
          <FadeInUp delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
              Aprueba el examen PER
              <br />
              <span className="bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-transparent">a la primera</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              Practica con más de 10 años de exámenes oficiales y llega al día de tu examen con total confianza.{" "}
              <span className="font-semibold text-white">Gratis, sin registro.</span>
            </p>
          </FadeInUp>

          <FadeInUp delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quiz"
                className="w-full sm:w-auto bg-white text-sky-600 hover:bg-sky-50 font-bold py-4 px-10 rounded-xl shadow-xl transition-all duration-200 text-lg hover:scale-105 active:scale-95"
              >
                Empezar a practicar →
              </Link>
              <a
                href="#como-funciona"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 font-semibold py-4 px-10 rounded-xl transition-all duration-200 text-lg"
              >
                Cómo funciona
              </a>
            </div>
          </FadeInUp>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="bg-sky-600 dark:bg-sky-800 text-white py-14">
        <StaggerContainer className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.12}>
          {[
            { number: "10+", label: "Años de exámenes" },
            { number: "600+", label: "Preguntas reales" },
            { number: "11", label: "Temas del examen" },
            { number: "100%", label: "Gratuito" },
          ].map(({ number, label }) => (
            <StaggerItem key={label}>
              <div className="text-4xl sm:text-5xl font-extrabold">{number}</div>
              <div className="text-sky-100 dark:text-sky-200 text-sm sm:text-base mt-2 font-medium">{label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* ── Features ── */}
      <div className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">La mejor forma de preparar el PER</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg">Todo lo que necesitas para aprobar, sin complicaciones</p>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              { emoji: "🎲", title: "Examen aleatorio", desc: "Practica con un examen seleccionado al azar y simula las condiciones reales del día del examen." },
              { emoji: "📅", title: "Exámenes por año", desc: "Accede a todos los exámenes oficiales desde 2015 hasta 2024, organizados por año y convocatoria." },
              { emoji: "✅", title: "Corrección inmediata", desc: "Comprueba tus respuestas al instante y aprende de tus errores con las respuestas correctas marcadas." },
              { emoji: "📊", title: "Seguimiento de progreso", desc: "Ve qué exámenes has completado y cuál fue tu puntuación en cada uno de un vistazo." },
              { emoji: "📱", title: "100% móvil", desc: "Diseñado para funcionar perfectamente en cualquier dispositivo. Practica desde el sofá o el metro." },
              { emoji: "🆓", title: "Completamente gratis", desc: "Sin registro, sin suscripción, sin anuncios intrusivos. Solo tú y los exámenes reales." },
            ].map(({ emoji, title, desc }) => (
              <StaggerItem key={title}>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-7 border border-slate-100 dark:border-slate-700 hover:shadow-md hover:border-sky-200 dark:hover:border-sky-600 transition-all duration-200 group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200 inline-block">{emoji}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* ── How it works ── */}
      <div id="como-funciona" className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">¿Cómo funciona?</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg">Empieza a practicar en menos de 10 segundos</p>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10" staggerDelay={0.15}>
            {[
              { step: "1", title: "Elige tu examen", desc: "Selecciona un examen al azar o elige uno específico por año y convocatoria." },
              { step: "2", title: "Responde las preguntas", desc: "45 preguntas tipo test, igual que el examen real. A tu ritmo, sin límite de tiempo." },
              { step: "3", title: "Revisa tus resultados", desc: "Comprueba qué has acertado, qué has fallado y cuál era la respuesta correcta." },
            ].map(({ step, title, desc }) => (
              <StaggerItem key={step}>
                <div className="text-center">
                  <ScaleIn>
                    <div className="w-16 h-16 bg-sky-500 dark:bg-sky-600 text-white text-2xl font-extrabold rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-sky-200 dark:shadow-sky-900">{step}</div>
                  </ScaleIn>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInUp delay={0.4} className="text-center mt-12">
            <Link href="/quiz" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-10 rounded-xl shadow-md transition-all duration-200 text-lg hover:scale-105 active:scale-95">
              Empezar ahora →
            </Link>
          </FadeInUp>
        </div>
      </div>

      {/* ── Exam Topics ── */}
      <div className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Temas del examen PER</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg">El examen consta de 45 preguntas repartidas entre 11 temas</p>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" staggerDelay={0.05}>
            {[
              { icon: "⚓", topic: "Nomenclatura Náutica" },
              { icon: "🪢", topic: "Elementos de Amarre y Fondeo" },
              { icon: "🛟", topic: "Seguridad en el Mar" },
              { icon: "📋", topic: "Legislación" },
              { icon: "🚦", topic: "Balizamiento" },
              { icon: "🚢", topic: "Reglamento de Abordaje" },
              { icon: "🧭", topic: "Maniobras y Navegación" },
              { icon: "🆘", topic: "Emergencias en la Mar" },
              { icon: "🌦️", topic: "Meteorología" },
              { icon: "🗺️", topic: "Teoría de Navegación" },
              { icon: "📍", topic: "Carta de Navegación" },
            ].map(({ icon, topic }) => (
              <StaggerItem key={topic}>
                <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-900/30 rounded-xl px-4 py-3.5 border border-slate-100 dark:border-slate-700 hover:border-sky-200 dark:hover:border-sky-700 transition-colors duration-200 cursor-default">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{topic}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* ── Affiliate Products ── */}
      <div className="py-24 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeInUp className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              🛒 Material recomendado
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Todo lo que necesitas para el examen
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              El material de estudio y los instrumentos que necesitarás para preparar y superar el examen PER.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <AffiliateProducts />
          </FadeInUp>
        </div>
      </div>

      {/* ── Final CTA ── */}
      <div className="py-28 bg-gradient-to-br from-sky-500 to-sky-700 dark:from-sky-700 dark:to-sky-900">
        <div className="max-w-3xl mx-auto text-center px-4">
          <ScaleIn>
            <div className="text-5xl mb-6">⚓</div>
          </ScaleIn>
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">¿Listo para aprobar el PER?</h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-sky-100 text-lg mb-10 max-w-xl mx-auto">
              Únete a los estudiantes que ya están practicando. Es gratis, no requiere registro y funciona en móvil.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <Link href="/quiz" className="inline-block bg-white text-sky-600 hover:bg-sky-50 font-bold py-4 px-14 rounded-xl shadow-xl transition-all duration-200 text-lg hover:scale-105 active:scale-95">
              Empezar ahora →
            </Link>
          </FadeInUp>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 dark:bg-black text-slate-400 py-12">
        <FadeIn className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">⚓</span>
            <span className="font-bold text-white text-lg">Prepara tu PER</span>
          </div>
          <p className="text-sm max-w-md mx-auto">
            Práctica gratuita para el examen Patrón de Embarcaciones de Recreo con preguntas de exámenes oficiales anteriores.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-600 dark:text-slate-500">
            <Link href="/privacidad" className="hover:text-slate-400 transition-colors">
              Política de Privacidad
            </Link>
            <span>·</span>
            <span>Este sitio no está afiliado con la Dirección General de la Marina Mercante.</span>
          </div>
        </FadeIn>
      </footer>
    </div>
  );
}
