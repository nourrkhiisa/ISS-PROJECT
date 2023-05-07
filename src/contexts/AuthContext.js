import React, { createContext, useState, useEffect, useMemo } from "react";
import authService from "services/authService";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userRole, setUserRole] = useState("");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const setCurrentUser = (newUser) => {
    setUser(newUser);
    setUserRole(newUser?.role || "");
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const fetchedUser = await authService.getCurrentUser();
        if (fetchedUser) {
          // Check if the user object is defined
          console.log("Fetched user:", fetchedUser);
          setUser(fetchedUser);
        }
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    fetchCurrentUser();
  }, []);

  const login = async (email, password) =>
    authService
      .login(email, password)
      .then((loggedInUser) => {
        console.log("Logged in user:", loggedInUser);
        setUser(loggedInUser);
        return loggedInUser;
      })
      .catch((error) => {
        console.error("Error logging in user:", error);
      });
  const setLoadingState = (newState) => {
    setLoading(newState);
  };
  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  const signUp = async (email, password, firstName, lastName, role) =>
    // eslint-disable-next-line no-return-await
    await authService.register({
      email,
      password,
      firstName,
      lastName,
      role,
    });
  const contextValue = useMemo(
    () => ({
      currentUser: user,
      setCurrentUser,
      loading,
      setLoading: setLoadingState,
      login,
      logout,
      signUp,
      role: userRole,
    }),
    [user, userRole, loading]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
