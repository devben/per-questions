import { create } from "zustand";
import zustymiddlewarets from "zustymiddlewarets";
import { isUndefined } from "lodash";

type AnswersState = {
  answers: Array<object> | ['2'];
  setAnswers: (
    answers: Array<{ answerLetter: string; userAnswer: number }>
  ) => void; // Action to set the answer
  clearAnswers: () => void; // Action to clear the course
  course?: {
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
  };
  setCourse?: (selectedCourse: {
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
  }) => void;
  clearCourse?: () => void;
};

const useQuestionsStore = create<AnswersState>(
  zustymiddlewarets(
    (
      set: (
        partial:
          | Partial<AnswersState>
          | ((state: AnswersState) => Partial<AnswersState>)
      ) => void
    ) => ({
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
      }) => set((state) => ({ ...state, course: selectedCourse })),
      setAnswers: (answer: {
        questionIndex: number | undefined;
        answerIndex: number;
      }) =>
        set((state) => {
          const { questionIndex, answerIndex } = answer;
          if (!state.answers ||isUndefined(questionIndex)) return state;

          const updatedAnswer = state.answers;

          if (questionIndex !== undefined) {
            if(updatedAnswer.length > questionIndex){
                Object.assign(updatedAnswer[questionIndex], {
                answerValue: answerIndex,
                });
            }
          }
          return {
            answers: updatedAnswer,
          };
        }),
      // setAnswers: (answer: { questionIndex: number | undefined; answerIndex: number  }) => set((state: AnswersState) => {
      //     const {questionIndex, answerIndex}= answer
      //     if (!state.course || isUndefined(questionIndex)) return state;

      //     const updatedAnswer = state.course.questions;

      //     if (questionIndex !== undefined) {
      //         Object.assign(updatedAnswer[questionIndex], {answerValue: answerIndex});
      //     }
      //     return {
      //         course: {
      //             ...state.course,
      //             questions: [...state.course.questions]
      //         }
      //     };
      // }),
      clearAnswers: () => set(() => ({ answers: [] })),
    })
  )
);

declare global {
  interface Window {
    store: ReturnType<typeof useQuestionsStore>;
  }
}

window.store = useQuestionsStore;
export { useQuestionsStore };
