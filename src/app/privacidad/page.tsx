import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad – Prepara tu PER",
  description: "Política de privacidad del sitio Prepara tu PER.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <div className="bg-white border-b border-gray-100 shadow-sm px-4 py-3 sticky top-0 z-40">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sky-500 hover:text-sky-700 text-sm font-medium transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Inicio
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-lg">⚓</span>
            <span className="font-semibold text-gray-700 text-sm hidden sm:inline">Prepara tu PER</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Privacidad</h1>
        <p className="text-sm text-gray-400 mb-10">Última actualización: marzo de 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Responsable del tratamiento</h2>
            <p>
              El presente sitio web, accesible en{" "}
              <a href="https://devben.github.io/per-questions/" className="text-sky-600 hover:underline">
                https://devben.github.io/per-questions/
              </a>
              , es operado a título personal. No recopilamos datos personales identificables para
              crear cuentas ni prestar servicios registrados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Datos que se recopilan</h2>
            <p>Este sitio no requiere registro ni recoge datos personales directamente. Sin embargo, los servicios de terceros integrados pueden recopilar datos de uso de forma anónima o pseudónima:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
              <li><strong>Google Analytics:</strong> dirección IP anonimizada, páginas visitadas, duración de la visita, tipo de dispositivo y navegador.</li>
              <li><strong>Google AdSense:</strong> cookies publicitarias para mostrar anuncios relevantes basados en tus intereses.</li>
              <li><strong>Amazon Associates:</strong> si haces clic en un enlace de afiliado, Amazon puede establecer cookies para registrar la referencia.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Cookies</h2>
            <p>Este sitio utiliza cookies de terceros con los siguientes fines:</p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold text-gray-700">Servicio</th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-700">Finalidad</th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-700">Más info</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-2">Google Analytics</td>
                    <td className="px-4 py-2">Análisis de tráfico anónimo</td>
                    <td className="px-4 py-2"><a href="https://policies.google.com/privacy" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">Política de Google</a></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Google AdSense</td>
                    <td className="px-4 py-2">Publicidad personalizada</td>
                    <td className="px-4 py-2"><a href="https://policies.google.com/technologies/ads" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">Política de anuncios</a></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Amazon Associates</td>
                    <td className="px-4 py-2">Seguimiento de afiliados</td>
                    <td className="px-4 py-2"><a href="https://www.amazon.es/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">Política de Amazon</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm">
              Puedes desactivar las cookies publicitarias de Google en{" "}
              <a href="https://adssettings.google.com" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Publicidad</h2>
            <p>
              Este sitio muestra anuncios a través de <strong>Google AdSense</strong>. Google puede usar cookies para mostrar anuncios basados en visitas anteriores a este u otros sitios web. Puedes optar por no recibir publicidad personalizada visitando{" "}
              <a href="https://www.aboutads.info" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">aboutads.info</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Enlaces de afiliado</h2>
            <p>
              Este sitio participa en el Programa de Afiliados de Amazon. Los enlaces marcados dirigen a productos en Amazon.es. Si realizas una compra a través de estos enlaces, podemos recibir una pequeña comisión sin coste adicional para ti.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Tus derechos (RGPD)</h2>
            <p>De acuerdo con el Reglamento General de Protección de Datos (RGPD), tienes derecho a:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
              <li>Acceder a los datos que pudieran existir sobre ti</li>
              <li>Solicitar su rectificación o supresión</li>
              <li>Oponerte al tratamiento con fines publicitarios</li>
              <li>Presentar una reclamación ante la <a href="https://www.aepd.es" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">Agencia Española de Protección de Datos (AEPD)</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Cambios en esta política</h2>
            <p>
              Esta política puede actualizarse ocasionalmente. La fecha de la última actualización aparece en la parte superior de esta página.
            </p>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-sm">
          <Link href="/" className="text-sky-400 hover:text-sky-300">← Volver al inicio</Link>
          <p className="mt-3 text-xs text-slate-600">
            Este sitio no está afiliado con la Dirección General de la Marina Mercante ni con ningún organismo oficial.
          </p>
        </div>
      </footer>
    </div>
  );
}
