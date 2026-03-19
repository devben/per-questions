"use client";
import React from "react";
import { useQuestionsStore } from "../store/useQuestionsStore";

const Progress = () => {
  const { answers, course } = useQuestionsStore();
  const questionsCount = course?.questions?.length;
  const percent = Math.round((answers.length / questionsCount) * 100);

  if (!course) return null;

  return (
    <div className="px-3">
      {/* Progress text */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progreso</span>
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          {answers.length}/{questionsCount} ({percent}%)
        </span>
      </div>

      {/* Progress bar container */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        {/* Progress bar fill */}
        <div
          className="bg-sky-500 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
