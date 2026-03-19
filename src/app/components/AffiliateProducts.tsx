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
    title: "Laborda PER Exam Kit",
    description:
      "Kit completo para el examen PER: transportador náutico, 3 cartas náuticas, compás, regla y lápiz 2HB. Todo lo que necesitas el día del examen.",
    price: "~€26",
    asin: "B098THC3VY",
    image: "https://m.media-amazon.com/images/I/41ugt-FGbYL._AC_.jpg",
    badge: undefined,
  },
  {
    title: "Libro de Ejercicios de Carta del PER",
    description:
      "Ejercicios prácticos de carta náutica del mismo autor que el manual PER. Imprescindible para dominar el tema de navegación.",
    price: "~€18",
    asin: "8461725603",
    image: "https://m.media-amazon.com/images/I/41zBR7PAxqL.jpg",
    badge: undefined,
  },
  {
    title: "Transportador Náutico Laborda",
    description:
      "Transportador cuadrado náutico 150×150 mm fabricado en España. El instrumento de referencia para los exámenes PER.",
    price: "~€15",
    asin: "B09QCZ87KL",
    image: "https://m.media-amazon.com/images/I/61kCcgDB78L._AC_.jpg",
    badge: undefined,
  },
];

type Product = (typeof products)[number];

interface AffiliateProductsProps {
  items?: Product[];
  /** Number of columns on desktop. Defaults to auto (all 4 products). */
  columns?: 3 | 4;
}

export default function AffiliateProducts({
  items = products,
  columns,
}: AffiliateProductsProps) {
  const gridClass =
    columns === 3
      ? "grid-cols-1 sm:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

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
