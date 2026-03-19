"use client";

import { useQuestionsStore } from "../store/useQuestionsStore";
import AffiliateProducts, { products } from "./AffiliateProducts";

// Show the top 3 products after a quiz is submitted
const featuredProducts = products.slice(0, 3);

export default function AffiliateQuizBanner() {
  const { submited, course } = useQuestionsStore();

  if (!submited || !course) return null;

  return (
    <div className="mt-10 mb-4 border-t border-slate-200 pt-10">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
          ⚓ Recursos para nuevos patrones
        </div>
        <h3 className="text-xl font-bold text-gray-900">
          ¡Ya casi tienes el PER! ¿Listo para zarpar?
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          Lo esencial que necesitarás a bordo
        </p>
      </div>
      <AffiliateProducts items={featuredProducts} columns={3} />
    </div>
  );
}
