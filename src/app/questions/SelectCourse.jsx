"use client";
import React from "react";
import tema1 from "../tema1.json";
import CourseCard from "./CourseCard";
import { useQuestionsStore } from "../store/useQuestionsStore";

const SelectCourse = () => {
  const { setCourse, course } = useQuestionsStore();
  const { answers } = useQuestionsStore();

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {tema1.map((item, index) => (
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
                    item.year === course?.year && section === course?.section
                  }
                  course={section}
                />
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SelectCourse;
