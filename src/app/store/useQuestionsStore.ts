import { create } from "zustand";
import zustymiddleware from "zustymiddleware";
import { isUndefined } from "lodash";
import courses from "../data/courses";

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
  submited: boolean; // State to track if the quiz has been submitted
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
  setRandomCourse: () => void; // Action to set a random course
  setAnswers: (
    answer: { questionIndex: number; answerIndex: number; year: string; section: string, correctAnswer: number }
  ) => void; // Action to set the answer
  setSubmited: (submitted: boolean) => void; // Action to set the submitted state
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
      submited: false,
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
      
      setRandomCourse: () => {
        // Get all available course sections
        const allSections = courses.flatMap(course => 
          course.sections.map(section => ({
            year: course.year,
            section: section.section,
            questions: section.questions,
          }))
        );
        
        // Pick a random section
        const randomIndex = Math.floor(Math.random() * courses.length);
        const randomCourse = allSections[randomIndex];
        
        // Use the existing setCourse function with properly formatted questions
        const setCourseFunction = useQuestionsStore.getState().setCourse;
        setCourseFunction({
          year: randomCourse.year,
          section: randomCourse.section,
          questions: randomCourse.questions.map(q => ({
            question: q.question,
            answerLetter: q.answerLetter,
            answer: q.answer,
            userAnswer: 0,
            questions: q.options,
            options: q.options,
            image: "",
          })),
        });
      },

      setAnswers: (answer: { answered: boolean; questionIndex: number; answerIndex: number; year: string; section: string; correctAnswer: number }) =>
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
  
      setSubmited: (submitted: boolean) => set(() => ({ submited: submitted })),
      clearCourse: () => set(() => ({ course: undefined,
        answers: []
       })),
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
