"use client";
import React from "react";
import courses from "../data/courses";
import CourseCard from "./CourseCard";
import { useQuestionsStore } from "../store/useQuestionsStore";

const SelectCourse = () => {
  const { setCourse, setRandomCourse, course, answers, clearCourse } =
    useQuestionsStore();
  return (
    <div>
      {/* Show course selection when no course is chosen */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Patrón de Embarcaciones de Recreo (PER)
      </h1>

      {!course ? (
        <div>
          <p className="text-gray-900 dark:text-gray-300 mb-4 mt-2">
            A continuación puedes poner a prueba tus conocimientos utilizando
            preguntas de exámenes anteriores.
          </p>
          <div className="flex justify-center py-4 mb-6">
            <button
              onClick={setRandomCourse}
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-200"
            >
              Seleccionar curso aleatorio
            </button>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
              o elige un examen específico
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {courses.map((item, index) => (
              <React.Fragment key={index}>
                {item.sections.map((sCourse, qIndex) => {
                  const { section, questions, answerLetter, answer, image } =
                    sCourse;
                  const answered = answers.filter(
                    a => a.year === item.year && section === a.section
                  );

                  const complete = course?.questions.length === answered.length;
                  const correctItems = answered.filter(
                    a => a.answerValue === a.correctAnswer
                  );
                  const score = {
                    correctAnswersCount: correctItems.length,
                    questionsCount: course?.questions.length,
                  };

                  return (
                    <CourseCard
                      key={qIndex}
                      onClick={() =>
                        setCourse({
                          year: item.year,
                          section,
                          questions,
                          answerLetter,
                          answer,
                          image,
                        })
                      }
                      year={item.year}
                      complete={complete}
                      score={score}
                      active={
                        item.year === course?.year &&
                        section === course?.section
                      }
                      course={section}
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        /* Show reset link when a course is chosen */
        <div className="flex justify-center pb-1">
          <button
            onClick={clearCourse}
            className="text-sky-500 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline font-medium transition-colors duration-200 cursor-pointer"
          >
            Seleccionar otro curso
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectCourse;
