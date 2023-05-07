import React, { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import userService from "../services/userService";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [students, setStudents] = useState([]);
  const [coaches, setCoaches] = useState([]);
  //  const [currentUser, setCurrentUser] = useState(null);
  const fetchStudents = async () => {
    const fetchedStudents = await userService.getAllUsers("student");
    console.log("Fetched students:", fetchedStudents);
    setStudents(fetchedStudents);
  };

  const fetchCoaches = async () => {
    const fetchedCoaches = await userService.getAllUsers("coach");
    console.log("Fetched coaches:", fetchedCoaches);
    setCoaches(fetchedCoaches);
  };
  useEffect(() => {
    console.log("Fetching current user...");
    fetchStudents();
    fetchCoaches();
  }, []);

  const value = useMemo(
    () => ({
      users,
      setUsers,
      students,
      coaches,
      fetchStudents,
      fetchCoaches,
    }),
    [users, students, coaches]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
