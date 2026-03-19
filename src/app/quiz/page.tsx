import Link from "next/link";
import Questions from "../questions/Questions";
import SelectCourse from "../questions/SelectCourse";
import StickyFooter from "../questions/StickyFooter";

export default function QuizPage() {
  return (
    <>
      {/* Back to home nav bar */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800 shadow-sm px-4 py-3 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sky-500 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 text-sm font-medium transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Inicio
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-lg">⚓</span>
            <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm hidden sm:inline">Prepara tu PER</span>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white dark:bg-slate-900 p-8 pb-20 gap-16 sm:p-20 sm:pt-12">
        <SelectCourse />
        <Questions />
      </div>
      <StickyFooter />
    </>
  );
}
