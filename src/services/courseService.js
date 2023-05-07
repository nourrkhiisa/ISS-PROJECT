import api from "./api/api";

const courseService = {
  getAllCourses: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.get("/admin/courses");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getCourseById: async (courseId) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.get(`/courses/${courseId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  enrollInCourse: async (courseId) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.post(`/students/courses/${courseId}/enroll`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  unenrollFromCourse: async (courseId) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.post(`/courses/${courseId}/unenroll`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  createCategory: async (category) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.post("/admin/categories", category);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createCourse: async (course) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.post("/admin/courses", course);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getAssignedCourses: async (coachId) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.get(`/coaches/trainings/${coachId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getAllCategories: async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.get("/admin/categories");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateCourse: async (courseId, courseData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.put(`/courses/${courseId}`, courseData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteCourse: async (courseId) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.delete(`/courses/${courseId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default courseService;
