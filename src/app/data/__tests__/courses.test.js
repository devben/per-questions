import { describe, it, expect } from "vitest";
import courses from "../courses";

const EXPECTED_OPTIONS_PER_QUESTION = 4;
const VALID_ANSWER_LETTERS = ["A", "B", "C", "D"];
// Exams vary in size: 2024 has full 45-question sets; older exams have 12–19
const MIN_QUESTIONS_PER_SECTION = 10;

describe("courses data integrity", () => {
  it("exports a non-empty array", () => {
    expect(Array.isArray(courses)).toBe(true);
    expect(courses.length).toBeGreaterThan(0);
  });

  it("every course has a year string and sections array", () => {
    for (const course of courses) {
      expect(typeof course.year, `course.year in ${JSON.stringify(course)}`).toBe("string");
      expect(course.year).not.toBe("");
      expect(Array.isArray(course.sections)).toBe(true);
      expect(course.sections.length).toBeGreaterThan(0);
    }
  });

  it("every section has a name and questions array", () => {
    for (const course of courses) {
      for (const section of course.sections) {
        expect(typeof section.section).toBe("string");
        expect(section.section).not.toBe("");
        expect(Array.isArray(section.questions)).toBe(true);
      }
    }
  });

  it(`every section has at least ${MIN_QUESTIONS_PER_SECTION} questions`, () => {
    for (const course of courses) {
      for (const section of course.sections) {
        expect(
          section.questions.length,
          `${course.year} ${section.section} has ${section.questions.length} questions`
        ).toBeGreaterThanOrEqual(MIN_QUESTIONS_PER_SECTION);
      }
    }
  });

  it("the 2024 exam has full 45-question sections", () => {
    const exam2024 = courses.find((c) => c.year === "2024");
    expect(exam2024).toBeDefined();
    for (const section of exam2024.sections) {
      expect(section.questions.length).toBe(45);
    }
  });

  it("every question has the required fields with correct types", () => {
    for (const course of courses) {
      for (const section of course.sections) {
        for (const q of section.questions) {
          expect(typeof q.question).toBe("string");
          expect(q.question.length).toBeGreaterThan(0);

          expect(Array.isArray(q.options)).toBe(true);
          expect(q.options.length).toBe(EXPECTED_OPTIONS_PER_QUESTION);

          expect(typeof q.answer).toBe("number");
          expect(q.answer).toBeGreaterThanOrEqual(0);
          expect(q.answer).toBeLessThanOrEqual(3);

          expect(typeof q.answerLetter).toBe("string");
          expect(VALID_ANSWER_LETTERS).toContain(q.answerLetter);
        }
      }
    }
  });

  it("answerLetter is consistent with the answer index (A→0, B→1, C→2, D→3)", () => {
    const letterToIndex = { A: 0, B: 1, C: 2, D: 3 };
    const mismatches = [];

    for (const course of courses) {
      for (const section of course.sections) {
        section.questions.forEach((q, i) => {
          if (q.answer !== letterToIndex[q.answerLetter]) {
            mismatches.push(
              `${course.year} ${section.section} Q${i}: letter=${q.answerLetter} answer=${q.answer}`
            );
          }
        });
      }
    }

    expect(mismatches, `Mismatches found:\n${mismatches.join("\n")}`).toHaveLength(0);
  });

  it("all option strings are non-empty", () => {
    for (const course of courses) {
      for (const section of course.sections) {
        for (const q of section.questions) {
          for (const option of q.options) {
            expect(typeof option).toBe("string");
            expect(option.trim().length).toBeGreaterThan(0);
          }
        }
      }
    }
  });
});
