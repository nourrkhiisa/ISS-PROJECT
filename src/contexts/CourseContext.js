import React, { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import courseService from "../services/courseService";

export const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [assignedCourses, setAssignedCourses] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const fetchedCategories = await courseService.getAllCategories();
      setCategories(fetchedCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const fetchCourses = async () => {
    const fetchedCourses = await courseService.getAllCourses();
    setCourses(fetchedCourses);
  };
  useEffect(() => {
    console.log("test");
    fetchCourses();
    fetchCategories();
  }, []);
  const createCategory = async (category) => {
    // eslint-disable-next-line no-useless-catch
    try {
      await courseService.createCategory(category);
    } catch (error) {
      throw error;
    }
  };
  const fetchAssignedCourses = async (coachId) => {
    try {
      console.log("fetchAssignedCourses called"); // Update this line

      const fetchedAssignedCourses = await courseService.getAssignedCourses(coachId);
      console.log("fetchedAssignedCourses:", fetchedAssignedCourses);
      setAssignedCourses(fetchedAssignedCourses);
    } catch (error) {
      console.error("Error fetching assigned courses:", error);
    }
  };
  const enrollInCourse = async (courseId) => {
    await courseService.enrollInCourse(courseId);
    fetchCourses();
  };
  const createCourse = async (course) => {
    await courseService.createCourse(course);
    fetchCourses();
  };
  const contextValue = useMemo(
    () => ({
      courses,
      fetchCourses,
      enrollInCourse,
      createCourse,
      createCategory,
      categories,
      fetchCategories,
      assignedCourses,
      fetchAssignedCourses,
    }),
    [courses, assignedCourses, categories]
  );
  return <CourseContext.Provider value={contextValue}>{children}</CourseContext.Provider>;
}
CourseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
