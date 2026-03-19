"use client";
import React from "react";
import { useQuestionsStore } from "../store/useQuestionsStore";
import Image from "next/image";

const Questions = () => {
  // Get course data, user answers, and answer setter from global store
  const { course, answers, setAnswers, submited } = useQuestionsStore();
  // Array to convert numeric answer indices to letters (0->a, 1->b, etc.)
  const letters = ["a", "b", "c", "d"];

  // CSS classes for styling question cards based on answer correctness
  const cardVariants = {
    correct: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800",
    wrong: "bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800",
    none: "border bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border-slate-200 dark:border-slate-600",
  };

  // CSS classes for styling text based on answer correctness
  const textVariants = {
    correct: "text-green-600 dark:text-green-400 font-bold",
    wrong: "text-red-600 dark:text-red-400 font-bold",
    none: "",
    default: "text-slate-900 dark:text-white",
  };

  return (
    <div>
      {/* Course header */}
      <div className="px-3 py-3">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          {course?.year} {course?.section}
        </h2>
      </div>

      {/* Container for all questions in a single column grid */}
      <div className="grid grid-cols-1 gap-4">
        {course?.questions.map((item, index) => {
          // Find if user has already answered this specific question
          const arrIndex = answers.findIndex(
            p =>
              p.questionIndex == index &&
              p.year == course?.year &&
              p.section == course?.section
          );

          // Get the user's selected answer for this question
          const givenAnswer = answers[arrIndex]?.answerValue;
          // Check if user has answered this question
          const answered = givenAnswer !== undefined;
          // Get the correct answer index from the question data
          const { answer } = item; // the actual answer index

          // Function to determine styling based on answer correctness
          const resultStyle = answered => {
            let style = "none"; // Default style
            if (answered) {
              if (givenAnswer === answer) {
                return (style = "correct");
              }
              style = "wrong";
            }
            return style;
          };

          return (
            // Question card with dynamic styling based on answer correctness
            <div
              key={`q${index}`}
              className={`text-slate-900 dark:text-white space-x-3 rounded-lg px-3 py-3 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 transition-shadow duration-200 ${
                submited && cardVariants[resultStyle(answered)]
              }`}
            >
              {/* Question number and text */}
              <h2 className="text-lg font-semibold">
                {index + 1}. {item.question}
              </h2>

              {/* Optional image for the question */}
              <div>
                {item.image && (
                  <Image
                    width={365 / 2}
                    height={274 / 2}
                    src={item.image}
                    alt={`Question ${index + 1}`}
                  />
                )}
              </div>

              {/* Render all answer options for the question */}
              {item.options?.map((option, optionIndex) => {
                const mark = answers[arrIndex]?.answerValue === optionIndex;
                const selection =
                  submited &&
                  (optionIndex === item.answer ? "correct" : "wrong");
                const correctAnswer =
                  submited &&
                  (optionIndex === item.answer ? "correct" : "none");

                return (
                  <p key={`o${optionIndex}`}>
                    <button
                      className={`text-left text-lg hover:pointer-events-auto ${
                        textVariants[mark ? selection : "none"]
                      } ${textVariants[answered ? correctAnswer : "none"]}`}
                      onClick={() =>
                        setAnswers({
                          questionIndex: index,
                          answerIndex: optionIndex,
                          year: course?.year,
                          section: course?.section,
                          correctAnswer: item.answer,
                        })
                      }
                    >
                      <div className="flex items-center">
                        {/* Radio button styling (visual only) */}
                        <span
                          className={`relative size-4 appearance-none rounded-full border border-gray-300 dark:border-gray-500 before:absolute before:inset-1 before:rounded-full before:bg-white dark:before:bg-slate-800 mr-2 ${
                            mark
                              ? "bg-black dark:bg-white"
                              : "bg-white dark:bg-slate-700"
                          }`}
                        ></span>
                        {letters[optionIndex]}. {option}
                      </div>
                    </button>
                  </p>
                );
              })}

              {/* Show answer summary only after user has answered */}
              {answered && submited && (
                <div className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                  <p>Tu respuesta: {letters[answers[arrIndex]?.answerValue]}</p>
                  <p>
                    Respuesta correcta: {course.questions[index].answerLetter}{" "}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
