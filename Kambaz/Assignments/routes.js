import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
app.get("/api/courses/:courseId/assignments", (req, res) => {
    const assignments = assignmentsDao.findAssignmentsForCourse(req.params.courseId);
    res.json(assignments);
});

app.post("/api/courses/:courseId/assignments", (req, res) => {
    const assignment = assignmentsDao.createAssignment(req.params.courseId, req.body);
    res.json(assignment);
});

app.put("/api/assignments/:assignmentId", (req, res) => {
    const assignment = assignmentsDao.updateAssignment(req.params.assignmentId, req.body);
    res.json(assignment);
});

app.delete("/api/assignments/:assignmentId", (req, res) => {
    const status = assignmentsDao.deleteAssignment(req.params.assignmentId);
    res.sendStatus(200);
});
}