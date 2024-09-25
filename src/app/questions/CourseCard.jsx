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
      "border border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200",
    correct:
      "border border-slate-300 bg-gradient-to-br from-green-50 to-green-100",
    wrong: "border border-slate-300 bg-gradient-to-br from-red-50 to-pink-100",
    none: "border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100",
  };
  const good = score.correctAnswersCount === score.questionsCount;
  return (
    <div
      className={`relative flex items-center space-x-3 rounded-lg border  px-3 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 ${
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
            className="text-xs text-gray-500 absolute bottom-1 right-1"
          >
            {score.correctAnswersCount}/{score.questionsCount}
          </span>
        )}
        <p className="text-sm font-medium text-gray-900">{year}</p>
        <p className="truncate text-sm text-gray-500">{course}</p>
      </div>
    </div>
  );
}
