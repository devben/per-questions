"use client";
import React from "react";
import { useQuestionsStore } from "../store/useQuestionsStore";

const Results = () => {
  const { answers, course, submited } = useQuestionsStore();
  const correctItems = answers.filter(a => a.answerValue === a.correctAnswer);
  const questionsCount = course?.questions?.length;
  const percent = Math.round((correctItems.length / questionsCount) * 100);
  const answersCount = answers?.length;
  const completed = answersCount === questionsCount;

  if (!completed) return null;
  if (!submited) return null;

  // Determine styling based on percentage (70% threshold)
  const isGoodScore = percent >= 75;
  const containerClass = isGoodScore
    ? "bg-green-50 bg-gradient-to-br from-green-50 to-green-100"
    : "bg-red-50 bg-gradient-to-br from-red-100 to-red-200";

  const textClass = isGoodScore
    ? "text-green-700 font-bold"
    : "text-red-700 font-bold";

  return (
    <div className={`rounded-lg px-4 py-3 ${containerClass}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 pr-2">
          Resultado:
        </span>
        <span className={`text-lg font-semibold ${textClass}`}>
          {correctItems.length}/{questionsCount} ({percent}%)
        </span>
      </div>
      <div className="mt-1">
        <div
          className={`text-center text-xs ${
            isGoodScore ? "text-green-600" : "text-red-600"
          }`}
        >
          {isGoodScore ? "¡Excelente trabajo!" : "Sigue practicando"}
        </div>
      </div>
    </div>
  );
};

export default Results;
