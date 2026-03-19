// TODO: Replace with your Amazon Associates affiliate tag once approved.
// Sign-up instructions: see PR description.
export const AFFILIATE_TAG = "YOUR-TAG-21";

export const products = [
  {
    emoji: "📚",
    title: "El libro del PER",
    description:
      "El manual más completo para aprobar el examen PER. Incluye teoría, tests y exámenes oficiales resueltos.",
    price: "~€25",
    asin: "8461725565",
    badge: "Más vendido",
  },
  {
    emoji: "📻",
    title: "Radio VHF Icom IC-M25",
    description:
      "Radio VHF portátil homologada. Imprescindible a bordo y obligatoria por la normativa de seguridad marítima.",
    price: "~€170",
    asin: "B089KRWYBC",
    badge: undefined,
  },
  {
    emoji: "🛟",
    title: "Chaleco Helly Hansen Rider",
    description:
      "Chaleco de ayuda a la flotabilidad certificado. Cómodo y ligero para uso diario en embarcaciones de recreo.",
    price: "~€59",
    asin: "B00322Q4EO",
    badge: undefined,
  },
  {
    emoji: "🔭",
    title: "Prismáticos Bushnell 7x50",
    description:
      "Prismáticos náuticos con brújula integrada. El estándar 7×50 es imprescindible para la navegación costera.",
    price: "~€238",
    asin: "B0000A0ADQ",
    badge: undefined,
  },
  {
    emoji: "🧭",
    title: "Brújula Náutica",
    description:
      "Brújula de montaje resistente al agua para embarcaciones. Navegación fiable cuando el GPS falla.",
    price: "~€30",
    asin: "B09TKG9T18",
    badge: undefined,
  },
];

type Product = (typeof products)[number];

interface AffiliateProductsProps {
  items?: Product[];
  /** Number of columns on desktop. Defaults to auto (all 5 products). */
  columns?: 3 | 5;
}

export default function AffiliateProducts({
  items = products,
  columns,
}: AffiliateProductsProps) {
  const gridClass =
    columns === 3
      ? "grid-cols-1 sm:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5";

  return (
    <div>
      <div className={`grid gap-4 ${gridClass}`}>
        {items.map(product => (
          <a
            key={product.asin}
            href={`https://www.amazon.es/dp/${product.asin}?tag=${AFFILIATE_TAG}`}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex flex-col bg-white border border-slate-200 rounded-2xl p-5 hover:border-amber-300 hover:shadow-md transition-all duration-200"
          >
            {product.badge && (
              <span className="self-start text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full mb-3">
                {product.badge}
              </span>
            )}
            <div className="text-3xl mb-3">{product.emoji}</div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-amber-700 transition-colors">
              {product.title}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
              <span className="text-sm font-bold text-gray-800">
                {product.price}
              </span>
              <span className="text-xs font-semibold text-amber-600 group-hover:text-amber-700">
                Ver en Amazon →
              </span>
            </div>
          </a>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-4 text-center italic">
        Como Afiliado de Amazon, obtenemos ingresos por las compras que cumplen
        los requisitos aplicables.
      </p>
    </div>
  );
}
