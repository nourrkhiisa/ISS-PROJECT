import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";
import quizService from "../services/quizService";

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  // Add state and functions for handling quizzes here
  const [quizzes, setQuizzes] = useState([]);
  const createQuiz = async (courseId, questions) => {
    // Make an API call to create the quiz with the provided questions
    const newQuiz = await quizService.createEvaluationQuiz(courseId, questions);
    setQuizzes((prevQuizzes) => [...prevQuizzes, newQuiz]);
  };
  const contextValue = useMemo(() => ({ quizzes, createQuiz }), [quizzes]);

  return <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>;
}
QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
