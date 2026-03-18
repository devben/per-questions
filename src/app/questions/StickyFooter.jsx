"use client";
import React from "react";
import { useQuestionsStore } from "../store/useQuestionsStore";
import Progress from "./Progress";
import Results from "./Results";

const StickyFooter = () => {
  const { submited, setSubmited, course, answers } = useQuestionsStore();
  const questionsCount = course?.questions?.length;
  const answersCount = answers?.length;
  const completed = answersCount === questionsCount;

  return (
    <div
      className={`sticky bottom-0 bg-white border-t border-gray-200 shadow-lg p-4 mt-4 transform transition-transform duration-300 ease-in-out ${
        questionsCount ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Grid layout with progress on left and toggle switch on right */}
        <div className="py-2">
          <Progress />
        </div>
        <div className="py-2 flex justify-center">
          <Results />
        </div>

        {/* Submit button - only show if not already submitted */}
        <div className="py-2 flex justify-center">
          <button
            disabled={!completed}
            onClick={() => setSubmited(true)}
            className={`font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-200 ${
              completed
                ? "bg-sky-500 hover:bg-sky-600 text-white cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Enviar respuestas
          </button>
        </div>
        <div className="flex justify-center py-2">
          <div className="justify-self-start md:justify-self-end">
            <label className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700">
                Mostrar respuestas:
              </span>
              <button
                type="button"
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
                  submited ? "bg-sky-500" : "bg-gray-200"
                }`}
                onClick={() => setSubmited(!submited)}
                role="switch"
                aria-checked={submited}
                aria-label="Alternar mostrar respuestas"
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    submited ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
