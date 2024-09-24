"use client";
import React from "react";
import tema1 from "../tema1.json";
import CourseCard from "./CourseCard";
import { useQuestionsStore } from "../store/useQuestionsStore";

const SelectCourse = () => {
  const { setCourse } = useQuestionsStore();

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {tema1.map((item, index) => (
          <React.Fragment key={index}>
            {item.sections.map((course, qIndex) => {
              const { section, questions, answerLetter, answer, image } =
                course;
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
