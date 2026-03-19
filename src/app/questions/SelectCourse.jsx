"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import courses from "../data/courses";
import CourseCard from "./CourseCard";
import { useQuestionsStore } from "../store/useQuestionsStore";
import AffiliateProducts from "../components/AffiliateProducts";

const SelectCourse = () => {
  const { setCourse, setRandomCourse, course, answers, clearCourse } =
    useQuestionsStore();
  return (
    <div>
      {/* Show course selection when no course is chosen */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Patrón de Embarcaciones de Recreo (PER)
      </motion.h1>

      <AnimatePresence mode="wait">
        {!course ? (
          <motion.div
            key="select"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-gray-900 dark:text-gray-300 mb-4 mt-2"
            >
              A continuación puedes poner a prueba tus conocimientos utilizando
              preguntas de exámenes anteriores.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.4, type: "spring", bounce: 0.3 }}
              className="flex justify-center py-4 mb-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={setRandomCourse}
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-200"
              >
                Seleccionar curso aleatorio
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-center mb-6"
            >
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                o elige un examen específico
              </h3>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.02, delayChildren: 0.35 } },
              }}
              className="grid grid-cols-1 gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
            >
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
                      <motion.div
                        key={qIndex}
                        variants={{
                          hidden: { opacity: 0, y: 15, scale: 0.95 },
                          visible: { opacity: 1, y: 0, scale: 1 },
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CourseCard
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
                      </motion.div>
                    );
                  })}
                </React.Fragment>
              ))}
            </motion.div>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Equipo recomendado para tu PER
              </h2>
              <AffiliateProducts />
            </motion.section>
          </motion.div>
        ) : (
          /* Show reset link when a course is chosen */
          <motion.div
            key="reset"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center pb-1"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearCourse}
              className="text-sky-500 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 underline font-medium transition-colors duration-200 cursor-pointer"
            >
              Seleccionar otro curso
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectCourse;
