// src/services/quizService.js
import api from "./api/api";

const quizService = {
  createEvaluationQuiz: async (courseId, questions) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.post(`/coaches/trainings/${courseId}/evaluation-quiz`, {
        questions,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default quizService;
