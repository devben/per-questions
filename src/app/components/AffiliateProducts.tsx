import Image from "next/image";

// TODO: Replace with your Amazon Associates affiliate tag once approved.
// Sign-up instructions: see PR description.
export const AFFILIATE_TAG = "perquiz-21";

export const products = [
  {
    title: "El libro del PER",
    description:
      "El manual más completo para aprobar el examen PER. Incluye teoría, tests y exámenes oficiales resueltos.",
    price: "~€25",
    asin: "8461725565",
    image: "https://m.media-amazon.com/images/I/51jayT2G8HL.jpg",
    badge: "Más vendido",
  },
  {
    title: "Radio VHF Icom IC-M25",
    description:
      "Radio VHF portátil homologada. Imprescindible a bordo y obligatoria por la normativa de seguridad marítima.",
    price: "~€170",
    asin: "B089KRWYBC",
    image: "https://m.media-amazon.com/images/I/31itjgSeBpL._AC_.jpg",
    badge: undefined,
  },
  {
    title: "Chaleco Helly Hansen Rider",
    description:
      "Chaleco de ayuda a la flotabilidad certificado. Cómodo y ligero para uso diario en embarcaciones de recreo.",
    price: "~€59",
    asin: "B00322Q4EO",
    image: "https://m.media-amazon.com/images/I/41xrfJgjwzL._AC_.jpg",
    badge: undefined,
  },
  {
    title: "Prismáticos Bushnell 7x50",
    description:
      "Prismáticos náuticos con brújula integrada. El estándar 7×50 es imprescindible para la navegación costera.",
    price: "~€238",
    asin: "B0000A0ADQ",
    image: "https://m.media-amazon.com/images/I/41nU++SKnoL._AC_.jpg",
    badge: undefined,
  },
  {
    title: "Brújula Náutica",
    description:
      "Brújula de montaje resistente al agua para embarcaciones. Navegación fiable cuando el GPS falla.",
    price: "~€30",
    asin: "B09TKG9T18",
    image: "https://m.media-amazon.com/images/I/41eWr6Ar7hL._AC_.jpg",
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
            className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-amber-300 hover:shadow-md transition-all duration-200"
          >
            {/* Product image */}
            <div className="relative w-full h-44 bg-slate-50 overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              />
              {product.badge && (
                <span className="absolute top-2 left-2 text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full z-10">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Product info */}
            <div className="flex flex-col flex-1 p-4">
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
