"use client";
import React from "react";
import { useQuestionsStore } from "../store/useQuestionsStore";
import Image from "next/image";

const Questions = () => {
  const { course, answers, setAnswers, clearCourse } = useQuestionsStore();
  const letters = ["a", "b", "c", "d"];
  const cardVariants = {
    correct: "bg-green-100",
    wrong: "bg-red-200",
    none: "",
  };
  const textVariants = {
    correct: "text-green-600 font-bold",
    wrong: "text-red-600 font-bold",
    none: "",
  };
  return (
    <div>
      <p>
        {course?.year} {course?.section}
      </p>
      <div className="grid grid-cols-1 gap-4 ">
        {course?.questions.map((item, index) => {
          const arrIndex = answers.findIndex(
            p =>
              p.questionIndex == index &&
              p.year == course?.year &&
              p.section == course?.section
          );
          //   const correctAnswer = answers[arrIndex]?.answerValue;
          const givenAnswer = answers[arrIndex]?.answerValue;
          const answered = givenAnswer !== undefined;
          const { answer } = item; // the actual answer index
          const resultStyle = answered => {
            let style = "none";
            if (answered) {
              if (givenAnswer === answer) {
                return (style = "correct");
              }
              style = "wrong";
            }
            return style;
          };
          return (
            <div
              key={`q${index}`}
              className={`space-x-3 rounded-lg border border-gray-300 bg-white px-3 py-3 shadow-sm ${
                cardVariants[resultStyle(answered)]
              }`}
            >
              <h2 className="text-lg font-semibold">
                {index + 1}. {item.question}
              </h2>
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
              {item.options?.map((option, optionIndex) => {
                const mark = answers[arrIndex]?.answerValue === optionIndex;
                const selection =
                  optionIndex === item.answer ? "correct" : "wrong";
                const correctAnswer =
                  optionIndex === item.answer ? "correct" : "none";
                return (
                  <p key={`o${optionIndex}`}>
                    <a
                      href="#"
                      className={`text-lg hover:pointer-events-auto ${
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
                      {letters[optionIndex]}. {option}
                    </a>
                  </p>
                );
              })}
              {answered && (
                <>
                  <p>
                    Selection:{answers[arrIndex]?.answerValue}{" "}
                    {letters[answers[arrIndex]?.answerValue]}
                  </p>
                  <p>Answer:{course.questions[index].answerLetter} </p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
