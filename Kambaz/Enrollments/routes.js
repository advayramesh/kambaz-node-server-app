import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.get("/api/enrollments", (req, res) => {
        const enrollments = enrollmentsDao.findEnrollmentsForUser(req.query.userId);
        res.json(enrollments);
    });

    app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        enrollmentsDao.unEnrollUserFromCourse(userId, courseId);
        res.sendStatus(200);
    });

    app.get("/api/enrollments/:courseId", (req, res) => {
        const { courseId } = req.params;
        const enrollments = enrollmentsDao.findEnrollmentsForCourse(courseId);
        res.json(enrollments);
    });

    app.post("/api/enrollments/:courseId", (req, res) => {
        const { courseId } = req.params;
        const enrollment = enrollmentsDao.enrollUserInCourse(req.body.userId, courseId);
        res.json(enrollment);
    });
    
}