"use client";
import { useQuestionsStore } from "../store/useQuestionsStore";
import AffiliateProducts from "../components/AffiliateProducts";

export default function AffiliateProductsSection() {
  const course = useQuestionsStore(s => s.course);
  if (!course) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        Equipo recomendado para tu PER
      </h2>
      <AffiliateProducts />
    </section>
  );
}
