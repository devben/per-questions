export default function CourseCard({
  year,
  course,
  onClick,
  active,
  complete,
  score,
}) {
  const cardVariants = {
    selected:
      "border border-slate-300 dark:border-slate-500 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-700",
    correct:
      "border border-slate-300 dark:border-green-700 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800",
    wrong:
      "border border-slate-300 dark:border-red-700 bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900 dark:to-red-800",
    none: "border border-slate-200 dark:border-slate-600 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700",
  };
  const good = score.correctAnswersCount === score.questionsCount;
  return (
    <div
      className={`relative flex items-center space-x-3 rounded-lg border px-3 py-3 shadow-sm focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:border-gray-400 dark:hover:border-gray-500 cursor-pointer ${
        cardVariants[
          complete ? (good ? "correct" : "wrong") : active ? "selected" : "none"
        ]
      }`}
      onClick={onClick}
    >
      <div className="min-w-0 flex-1">
        {complete && (
          <span
            aria-hidden="true"
            className="text-xs text-gray-500 dark:text-gray-400 absolute bottom-1 right-1"
          >
            {score.correctAnswersCount}/{score.questionsCount}
          </span>
        )}
        <p className="text-sm font-medium text-gray-900 dark:text-white">{year}</p>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400">{course}</p>
      </div>
    </div>
  );
}
