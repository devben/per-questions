import { create } from "zustand";
import zustymiddleware from "zustymiddleware";
import { isUndefined } from "lodash";
import courses from "../data/courses";
import TEMAS from "../data/temas";

type Question = {
  question: string;
  answerLetter: string;
  answer: number;
  userAnswer: number;
  questions: Array<string>;
  options?: Array<string>;
  image: string;
};

type QuestionsState = {
  course:
    | {
        year: string;
        section: string;
        questions: Array<Question>;
      }
    | undefined;
  answers: Array<{
    year: string;
    section: string;
    questionIndex: number;
    answerValue: number;
    correctAnswer: number;
  }>;
  submited: boolean;
  setCourse: (selectedCourse: {
    year: string;
    section: string;
    questions: Array<Question>;
  }) => void;
  setRandomCourse: () => void;
  setTemaCourse: (temaId: string) => void;
  setRandomQuestions: (count: number) => void;
  setAnswers: (answer: {
    questionIndex: number;
    answerIndex: number;
    year: string;
    section: string;
    correctAnswer: number;
  }) => void;
  setSubmited: (submitted: boolean) => void;
  clearCourse: () => void;
};

const normaliseQuestion = (q: any): Question => ({
  question: q.question,
  answerLetter: q.answerLetter,
  answer: q.answer,
  userAnswer: 0,
  questions: q.options,
  options: q.options,
  image: q.image || "",
});

const shuffle = <T>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const getAllQuestions = () =>
  courses.flatMap((course: any) =>
    course.sections.flatMap((section: any) => section.questions)
  );

const useQuestionsStore = create<QuestionsState>(
  zustymiddleware(
    (
      set: (
        partial:
          | Partial<QuestionsState>
          | ((state: QuestionsState) => Partial<QuestionsState>)
      ) => void
    ) => ({
      course: undefined,
      answers: [],
      submited: false,

      setCourse: (selectedCourse) =>
        set(() => ({ course: selectedCourse, submited: false })),

      setRandomCourse: () => {
        const allSections = courses.flatMap((course: any) =>
          course.sections.map((section: any) => ({
            year: course.year,
            section: section.section,
            questions: section.questions,
          }))
        );
        const random = allSections[Math.floor(Math.random() * allSections.length)];
        useQuestionsStore.getState().setCourse({
          year: random.year,
          section: random.section,
          questions: random.questions.map(normaliseQuestion),
        });
      },

      setTemaCourse: (temaId: string) => {
        const tema = TEMAS.find((t: any) => t.id === temaId);
        if (!tema) return;
        const [from, to] = tema.range;
        const temaQuestions = courses.flatMap((course: any) =>
          course.sections.flatMap((section: any) =>
            section.questions.slice(from, to + 1)
          )
        );
        useQuestionsStore.getState().setCourse({
          year: "Tema",
          section: tema.name,
          questions: shuffle(temaQuestions).map(normaliseQuestion),
        });
      },

      setRandomQuestions: (count: number) => {
        const selected = shuffle(getAllQuestions()).slice(0, count);
        useQuestionsStore.getState().setCourse({
          year: "Aleatorio",
          section: `${count} preguntas`,
          questions: selected.map(normaliseQuestion),
        });
      },

      setAnswers: (answer) =>
        set((state: QuestionsState) => {
          const { questionIndex, answerIndex, year, section, correctAnswer } = answer;
          if (!state.answers || isUndefined(questionIndex)) return state;
          let updatedAnswers = state.answers;
          const arrIndex = updatedAnswers.findIndex(
            p =>
              p.questionIndex == questionIndex &&
              p.year == year &&
              p.section == section
          );
          const newAnswer = { year, section, questionIndex, answerValue: answerIndex, correctAnswer };
          if (arrIndex === -1) {
            updatedAnswers.push(newAnswer);
          } else {
            updatedAnswers = updatedAnswers.map(a =>
              a.questionIndex !== newAnswer.questionIndex ||
              a.year !== newAnswer.year ||
              a.section !== newAnswer.section
                ? a
                : newAnswer
            );
          }
          return { answers: updatedAnswers };
        }),

      setSubmited: (submitted: boolean) => set(() => ({ submited: submitted })),

      clearCourse: () =>
        set(() => ({ course: undefined, answers: [], submited: false })),
    })
  )
);

declare global {
  interface Window {
    store: typeof useQuestionsStore;
  }
}
if (typeof window !== "undefined") {
  window.store = useQuestionsStore;
}

export { useQuestionsStore };
