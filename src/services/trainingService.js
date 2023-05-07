import api from "./api/api";

const trainingService = {
  getAllTrainings: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.get("/trainings");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getTrainingById: async (id) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.get(`/trainings/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createTraining: async (trainingData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.post("/trainings", trainingData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateTraining: async (id, trainingData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.put(`/trainings/${id}`, trainingData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteTraining: async (id) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.delete(`/trainings/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default trainingService;
