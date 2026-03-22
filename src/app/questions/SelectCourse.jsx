"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import courses from "../data/courses";
import TEMAS from "../data/temas";
import CourseCard from "./CourseCard";
import { useQuestionsStore } from "../store/useQuestionsStore";
import AffiliateProducts from "../components/AffiliateProducts";

const TABS = [
  { id: "examen", label: "Por examen" },
  { id: "tema",   label: "Por tema"   },
  { id: "random", label: "Aleatorio"  },
];

const RANDOM_COUNTS = [10, 20, 30, 45];

const SelectCourse = () => {
  const { setCourse, setRandomCourse, setTemaCourse, setRandomQuestions, course, answers, clearCourse } =
    useQuestionsStore();
  const [activeTab, setActiveTab] = useState("examen");
  const [randomCount, setRandomCount] = useState(20);

  return (
    <div>
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
              className="text-gray-900 dark:text-gray-300 mb-6 mt-2"
            >
              A continuación puedes poner a prueba tus conocimientos utilizando
              preguntas de exámenes anteriores.
            </motion.p>

            {/* ── Tab switcher ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-8 w-fit"
            >
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 bg-white dark:bg-slate-700 rounded-lg shadow-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">

              {/* ── Tab: Por examen ── */}
              {activeTab === "examen" && (
                <motion.div
                  key="examen"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center py-4 mb-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={setRandomCourse}
                      className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-200"
                    >
                      Examen aleatorio
                    </motion.button>
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                      o elige un examen específico
                    </h3>
                  </div>

                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.02, delayChildren: 0.1 } },
                    }}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
                  >
                    {courses.map((item, index) => (
                      <React.Fragment key={index}>
                        {item.sections.map((sCourse, qIndex) => {
                          const { section, questions, answerLetter, answer, image } = sCourse;
                          const answered = answers.filter(
                            a => a.year === item.year && section === a.section
                          );
                          const complete = course?.questions.length === answered.length;
                          const correctItems = answered.filter(a => a.answerValue === a.correctAnswer);
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
                                onClick={() => setCourse({ year: item.year, section, questions, answerLetter, answer, image })}
                                year={item.year}
                                complete={complete}
                                score={score}
                                active={item.year === course?.year && section === course?.section}
                                course={section}
                              />
                            </motion.div>
                          );
                        })}
                      </React.Fragment>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {/* ── Tab: Por tema ── */}
              {activeTab === "tema" && (
                <motion.div
                  key="tema"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    Practica un tema concreto con preguntas mezcladas de todos los exámenes disponibles.
                  </p>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
                    }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
                  >
                    {TEMAS.map(tema => (
                      <motion.button
                        key={tema.id}
                        variants={{
                          hidden: { opacity: 0, y: 15, scale: 0.95 },
                          visible: { opacity: 1, y: 0, scale: 1 },
                        }}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setTemaCourse(tema.id)}
                        className="flex flex-col items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 hover:border-sky-400 hover:shadow-md transition-all duration-200 text-left"
                      >
                        <span className="text-3xl">{tema.icon}</span>
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-200 text-center leading-snug">
                          {tema.name}
                        </span>
                      </motion.button>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {/* ── Tab: Aleatorio ── */}
              {activeTab === "random" && (
                <motion.div
                  key="random"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center py-8 gap-8"
                >
                  <div className="text-center">
                    <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      ¿Cuántas preguntas quieres practicar?
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Preguntas mezcladas al azar de todos los exámenes y temas.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    {RANDOM_COUNTS.map(count => (
                      <motion.button
                        key={count}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setRandomCount(count)}
                        className={`w-16 h-16 rounded-2xl text-lg font-bold border-2 transition-all duration-200 ${
                          randomCount === count
                            ? "bg-sky-500 border-sky-500 text-white shadow-lg shadow-sky-200 dark:shadow-sky-900"
                            : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:border-sky-300"
                        }`}
                      >
                        {count}
                      </motion.button>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setRandomQuestions(randomCount)}
                    className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-10 rounded-xl shadow-md transition-colors duration-200 text-lg"
                  >
                    Empezar — {randomCount} preguntas
                  </motion.button>
                </motion.div>
              )}

            </AnimatePresence>

            {/* Affiliate products */}
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
