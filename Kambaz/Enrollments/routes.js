import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments", async (req, res) => {
    const { userId } = req.query;
    try {
      const courses = await dao.findCoursesForUser(userId);
      res.json(courses);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch enrollments for user" });
    }
  });

  app.get("/api/enrollments/:courseId", async (req, res) => {
    const { courseId } = req.params;
    try {
      const users = await dao.findUsersForCourse(courseId);
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch users for course" });
    }
  });

  app.post("/api/enrollments/:courseId", async (req, res) => {
    const { userId } = req.body;
    const { courseId } = req.params;
    try {
      const enrollment = await dao.enrollUserInCourse(userId, courseId);
      res.json(enrollment);
    } catch (err) {
      res.status(500).json({ error: "Enrollment failed" });
    }
  });

  app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    try {
      const result = await dao.unenrollUserFromCourse(userId, courseId);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: "Unenrollment failed" });
    }
  });
}
