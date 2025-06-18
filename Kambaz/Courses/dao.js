import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function findCoursesForEnrolledUser(userId) {
    const { courses, enrollments } = Database;
    const enrolledCourses = courses.filter((course) =>
      enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
    return enrolledCourses;
  }
  
  export function updateCourse(courseId, courseUpdates) {
    const { courses } = Database;
    const course = courses.find((course) => course._id === courseId);
    Object.assign(course, courseUpdates);
    return course;
  }

  export function findAllCourses() {
    return model.find(); 
  }
  export function createCourse(course) {
    return model.create(course); 
  }
  