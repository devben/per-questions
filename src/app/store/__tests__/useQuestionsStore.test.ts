import { describe, it, expect, beforeEach, vi } from "vitest";

// zustymiddleware calls window.postMessage({...}) for devtools. JSDOM's
// postMessage requires a targetOrigin argument, so we stub it out here.
Object.defineProperty(window, "postMessage", {
  value: vi.fn(),
  writable: true,
});

import { useQuestionsStore } from "../useQuestionsStore";
import courses from "../../data/courses";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const makeCourse = (override: Record<string, unknown> = {}) => ({
  year: "2024",
  section: "3ª A",
  questions: [
    {
      question: "La roda es:",
      answerLetter: "C",
      answer: 2,
      userAnswer: 0,
      questions: [
        "Un guardamanos",
        "Una cornamusa",
        "Pieza que prolonga la quilla",
        "Ninguna",
      ],
      image: "",
    },
  ],
  ...override,
});

// Reset store to initial state before each test
beforeEach(() => {
  useQuestionsStore.setState({ course: undefined, answers: [], submited: false });
});

// ---------------------------------------------------------------------------
// Initial state
// ---------------------------------------------------------------------------

describe("useQuestionsStore – initial state", () => {
  it("starts with course undefined", () => {
    expect(useQuestionsStore.getState().course).toBeUndefined();
  });

  it("starts with an empty answers array", () => {
    expect(useQuestionsStore.getState().answers).toEqual([]);
  });

  it("starts with submited = false", () => {
    expect(useQuestionsStore.getState().submited).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// setCourse
// ---------------------------------------------------------------------------

describe("setCourse", () => {
  it("sets the course in state", () => {
    const course = makeCourse();
    useQuestionsStore.getState().setCourse(course);
    expect(useQuestionsStore.getState().course).toEqual(course);
  });

  it("replaces a previously set course", () => {
    useQuestionsStore.getState().setCourse(makeCourse({ year: "2020" }));
    const newer = makeCourse({ year: "2019" });
    useQuestionsStore.getState().setCourse(newer);
    expect(useQuestionsStore.getState().course?.year).toBe("2019");
  });
});

// ---------------------------------------------------------------------------
// clearCourse
// ---------------------------------------------------------------------------

describe("clearCourse", () => {
  it("resets course to undefined", () => {
    useQuestionsStore.getState().setCourse(makeCourse());
    useQuestionsStore.getState().clearCourse();
    expect(useQuestionsStore.getState().course).toBeUndefined();
  });

  it("resets answers to an empty array", () => {
    useQuestionsStore.getState().setAnswers({
      questionIndex: 0,
      answerIndex: 1,
      year: "2024",
      section: "3ª A",
      correctAnswer: 2,
    });
    useQuestionsStore.getState().clearCourse();
    expect(useQuestionsStore.getState().answers).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// setSubmited
// ---------------------------------------------------------------------------

describe("setSubmited", () => {
  it("sets submited to true", () => {
    useQuestionsStore.getState().setSubmited(true);
    expect(useQuestionsStore.getState().submited).toBe(true);
  });

  it("sets submited back to false", () => {
    useQuestionsStore.getState().setSubmited(true);
    useQuestionsStore.getState().setSubmited(false);
    expect(useQuestionsStore.getState().submited).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// setAnswers
// ---------------------------------------------------------------------------

describe("setAnswers", () => {
  it("records a new answer", () => {
    useQuestionsStore.getState().setAnswers({
      questionIndex: 0,
      answerIndex: 1,
      year: "2024",
      section: "3ª A",
      correctAnswer: 2,
    });

    const answers = useQuestionsStore.getState().answers;
    expect(answers).toHaveLength(1);
    expect(answers[0]).toMatchObject({
      questionIndex: 0,
      answerValue: 1,
      correctAnswer: 2,
      year: "2024",
      section: "3ª A",
    });
  });

  it("updates an existing answer for the same question", () => {
    const base = { questionIndex: 0, year: "2024", section: "3ª A", correctAnswer: 2 };
    useQuestionsStore.getState().setAnswers({ ...base, answerIndex: 1 });
    useQuestionsStore.getState().setAnswers({ ...base, answerIndex: 3 });

    const answers = useQuestionsStore.getState().answers;
    expect(answers).toHaveLength(1);
    expect(answers[0].answerValue).toBe(3);
  });

  it("stores answers for different question indices independently", () => {
    const shared = { year: "2024", section: "3ª A", correctAnswer: 2 };
    useQuestionsStore.getState().setAnswers({ ...shared, questionIndex: 0, answerIndex: 0 });
    useQuestionsStore.getState().setAnswers({ ...shared, questionIndex: 1, answerIndex: 2 });

    expect(useQuestionsStore.getState().answers).toHaveLength(2);
  });

  it("stores answers for different year/section combinations independently", () => {
    const shared = { questionIndex: 0, correctAnswer: 2, answerIndex: 1 };
    useQuestionsStore.getState().setAnswers({ ...shared, year: "2024", section: "3ª A" });
    useQuestionsStore.getState().setAnswers({ ...shared, year: "2020", section: "1ª A" });

    expect(useQuestionsStore.getState().answers).toHaveLength(2);
  });
});

// ---------------------------------------------------------------------------
// setRandomCourse
// ---------------------------------------------------------------------------

describe("setRandomCourse", () => {
  it("sets a course with a valid year from the courses data", () => {
    useQuestionsStore.getState().setRandomCourse();
    const course = useQuestionsStore.getState().course;

    expect(course).toBeDefined();
    const validYears = courses.map((c) => c.year);
    expect(validYears).toContain(course!.year);
  });

  it("loads at least one question into the course", () => {
    useQuestionsStore.getState().setRandomCourse();
    expect(useQuestionsStore.getState().course!.questions.length).toBeGreaterThan(0);
  });

  it("each loaded question has the expected shape", () => {
    useQuestionsStore.getState().setRandomCourse();
    for (const q of useQuestionsStore.getState().course!.questions) {
      expect(typeof q.question).toBe("string");
      expect(Array.isArray(q.questions)).toBe(true);
      expect(typeof q.answer).toBe("number");
      expect(q.answer).toBeGreaterThanOrEqual(0);
      expect(q.answer).toBeLessThanOrEqual(3);
    }
  });

  it("produces different results across calls (not always the same course)", () => {
    const years = new Set<string>();
    for (let i = 0; i < 10; i++) {
      useQuestionsStore.getState().setRandomCourse();
      years.add(useQuestionsStore.getState().course!.year);
    }
    // With 7 available years and 10 draws we expect more than 1 unique year
    expect(years.size).toBeGreaterThan(1);
  });
});
