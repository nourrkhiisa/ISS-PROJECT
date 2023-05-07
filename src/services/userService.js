import api from "./api/api";

const userService = {
  getAllUsers: async (userType) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.get(`/admin/${userType}s`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUserById: async (userId) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (userId, userData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.put(`/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async (userId) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.delete(`/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updatePassword: async (userId, passwordData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.put(`/users/${userId}/password`, passwordData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateProfilePicture: async (userId, formData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await api.put(`/users/${userId}/profile-picture`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default userService;
