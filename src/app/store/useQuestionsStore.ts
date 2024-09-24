import { create } from "zustand";
import zustymiddleware from "zustymiddleware";
import { isUndefined } from "lodash";

type QuestionsState = {
  course:
    | {
        year: string;
        section: string;
        questions: Array<{
          question: string;
          answerLetter: string;
          answer: number;
          userAnswer: number;
          questions: Array<string>;
          image: string;
        }>;
      }
    | undefined; // This holds the current course
  answers: Array<{ year: string; section: string; questionIndex: number; answerValue: number, correctAnswer: number }>;
  setCourse: (selectedCourse: {
    year: string;
    section: string;
    questions: Array<{
      question: string;
      answerLetter: string;
      answer: number;
      userAnswer: number;
      questions: Array<string>;
      image: string;
    }>;
  }) => void; // Action to set the course
  setAnswers: (
    answer: { questionIndex: number; answerIndex: number; year: string; section: string, correctAnswer: number }
  ) => void; // Action to set the answer
  clearCourse: () => void; // Action to clear the course
};

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
      setCourse: (selectedCourse: {
        year: string;
        section: string;
        questions: Array<{
          question: string;
          answerLetter: string;
          answer: number;
          userAnswer: number;
          questions: Array<string>;
          image: string;
        }>;
      }) => set(() => ({ course: selectedCourse })),
      setAnswers: (answer: { questionIndex: number; answerIndex: number; year: string; section: string; correctAnswer: number }) =>
        set((state: QuestionsState) => {
          const { questionIndex, answerIndex, year, section, correctAnswer } = answer;
          if (!state.answers || isUndefined(questionIndex)) return state;

          let updatedAnswers = state.answers;
          
          const arrIndex = updatedAnswers.findIndex(
            p => p.questionIndex == questionIndex && p.year == year && p.section == section
          );
          const newAnswer = {
            year: year,
            section: section,
            questionIndex: questionIndex,
            answerValue: answerIndex,
            correctAnswer: correctAnswer
          }
          if (arrIndex === -1) {
            updatedAnswers.push(newAnswer);
          }
          if (arrIndex !== -1) {
            updatedAnswers = updatedAnswers.map(a=> (a.questionIndex !== newAnswer.questionIndex || a.year !== newAnswer.year || a.section !== newAnswer.section) ? a : newAnswer)
          }
          return {
            answers: updatedAnswers,
          };
        }),
  
      clearCourse: () => set(() => ({ course: undefined })),
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
