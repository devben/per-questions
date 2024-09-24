"use client";
import React from "react";
import { useQuestionsStore } from "../store/useQuestionsStore";

const Results = () => {
  const { answers } = useQuestionsStore();
  const correctItems = answers.filter(a => a.answerValue === a.correctAnswer);
  const percent = Math.round((correctItems.length / answers.length) * 100);
  if (answers.length < 1) return null;
  return (
    <>
      {correctItems.length}/{answers.length} - {percent}%
    </>
  );
};

export default Results;
